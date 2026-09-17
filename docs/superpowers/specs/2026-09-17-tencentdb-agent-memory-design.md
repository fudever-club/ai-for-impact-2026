# AI for Impact TencentDB Agent Memory Integration Design

**Status:** Approved for implementation by the user's original full-scope request

**Goal:** Give AIforImpact Codex agents read-only access to a project-isolated TencentDB MemoryKnowledge code graph while keeping MemoryCore available for explicit capture/recall workflows without routing model traffic through an unverified proxy.

## Scope and trust model

- MemoryCore remains a local standalone service on `127.0.0.1:8420` using SQLite and BM25/FTS when embeddings are unavailable.
- MemoryKnowledge binds only to `127.0.0.1:8424`.
- Codex connects to the Knowledge MCP process over stdio. The MCP process forwards only the existing 12 query tools.
- Management operations such as graph create, delete, sync, wiki ingest, and binding mutation are never exposed to project agents.
- Project identity is `aiforimpact`. Every Knowledge request carries `x-tdai-service-id: aiforimpact`.
- Secrets are inherited from environment variables. Repository files, launcher scripts, TOML files, logs, and test fixtures must not contain credentials.

## Modules and interfaces

### Knowledge MCP adapter

The adapter interface is:

```ts
interface HttpClientOptions {
  baseUrl: string;
  serviceId: string;
  token?: string;
}
```

`callApi()` always sends `Content-Type` and `x-tdai-service-id`. It sends `Authorization: Bearer ...` only when a token is supplied. Missing `serviceId` is a startup/configuration error, not a request-time fallback.

All MCP-process logs use stderr so stdout remains reserved for JSON-RPC.

### Project-scoped Codex configuration

`.codex/config.toml` declares one required stdio MCP server with:

- working directory at the local MemoryKnowledge checkout;
- `KNOWLEDGE_API_URL=http://127.0.0.1:8424`;
- `KNOWLEDGE_SERVICE_ID=aiforimpact`;
- `LOG_LEVEL=error` as a defense-in-depth fallback;
- an explicit `enabled_tools` allowlist containing the 12 query tools;
- `default_tools_approval_mode="auto"` because all exposed tools are read-only.

`.codex/agents/memory_explorer.toml` defines a `sandbox_mode="read-only"` explorer that may query the graph but cannot modify application or Memory Hub state.

This follows official Codex support for trusted project-scoped MCP configuration and custom-agent MCP settings.

## Service hardening

- `KNOWLEDGE_HOST` defaults to `127.0.0.1` and is passed to the HTTP listener.
- Launchers require `TDAI_LLM_API_KEY` to already exist in the environment when LLM extraction is enabled. They never embed a default credential.
- Existing user changes in the Memory Hub checkout are preserved and reviewed; no reset or destructive cleanup is permitted.
- Health checks distinguish TCP/process health, functional query health, embedding readiness, loopback binding, MCP readiness, and project graph readiness.

## Project registration and indexing

- AIforImpact is first initialized as a Git repository so the graph has a stable commit identity.
- `projects_registry.json` gains one `aiforimpact` record pointing at the workspace.
- Graph creation is performed once through the management HTTP route using `service_id=aiforimpact` and `team_id=aiforimpact`.
- Promotion requires a terminal `ready` status followed by successful `code_status`, `code_files`, and `code_explore` queries through the same MCP request path Codex will use.

## Failure behavior

- If Knowledge cannot initialize, Codex startup fails because the server is required.
- If the graph is absent or not ready, `memory_explorer` reports the exact state and does not fall back to another project's graph.
- If MemoryCore embeddings are disabled, status reports `degraded_fts_only`; it must not claim semantic recall readiness.
- If no LLM credential is supplied, services that do not require LLM extraction remain usable; LLM-dependent ingest fails explicitly.

## Out of scope

- Routing all Codex model requests through MemoryProxy `:8096`.
- Exposing Memory Hub outside the local machine.
- Enabling write/mutation tools for project agents.
- Migrating local SQLite data to TencentDB cloud in this release.
- Inventing or storing a replacement LLM credential.

## Acceptance criteria

1. No plaintext credential remains in launch scripts or project configuration.
2. Ports 8420 and 8424 are loopback-only.
3. MCP stdout contains only protocol traffic; logs go to stderr.
4. Every MCP HTTP call carries `x-tdai-service-id: aiforimpact`.
5. Codex project config exposes only the 12 read-only query tools.
6. `memory_explorer` is read-only.
7. AIforImpact graph reaches `ready` and passes status/files/explore smoke tests.
8. A reproducible verification script reports each readiness dimension separately and fails closed.
