# TencentDB Agent Memory Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Connect AIforImpact Codex agents to a secured, project-isolated, read-only TencentDB MemoryKnowledge graph and provide honest MemoryCore readiness reporting.

**Architecture:** MemoryKnowledge remains an independent local HTTP process. A deep stdio MCP adapter hides tenant routing and HTTP details behind 12 read-only tools. Project-scoped Codex configuration launches that adapter and a read-only custom explorer; management mutations remain outside the agent interface.

**Tech Stack:** Node.js/TypeScript, Hono, MCP stdio, Vitest, PowerShell, Codex project configuration.

**Spec:** `docs/superpowers/specs/2026-09-17-tencentdb-agent-memory-design.md`

## Global Constraints

- Preserve all pre-existing dirty Memory Hub changes; no reset, checkout, cleanup, or secret disclosure.
- Never write a credential into source, TOML, launcher arguments, logs, or tests.
- Bind both HTTP services to loopback only.
- Expose query tools only; graph creation/sync is a controller operation.
- Every request and persisted asset is isolated under `aiforimpact`.
- Fail closed on missing service ID, missing graph, or non-ready graph.

---

### Task 1: Harden Knowledge listener, logging, and launchers

**Files in `C:\Users\ADMIN\_Project\agent-memory-hub`:**
- Modify: `MemoryKnowledge/src/config.ts`
- Modify: `MemoryKnowledge/src/server.ts`
- Modify: `MemoryKnowledge/src/logger.ts`
- Modify: `MemoryKnowledge/src/middleware/response-envelope.ts`
- Create: `MemoryKnowledge/src/__tests__/server-security.test.ts`
- Modify: `start_memory_hub.ps1`
- Modify: `start_memory_hub_headless.ps1`

**Interfaces:**
- `ServiceConfig.host: string`, default `127.0.0.1`, sourced from `KNOWLEDGE_HOST`.
- Logger writes every level to stderr.

- [ ] **Step 1: Write failing tests** proving the default host is loopback, an explicit host override is honored, logger debug/info never write stdout, and request bodies remain readable by downstream Hono handlers after access logging.
- [ ] **Step 2: Run the focused Vitest test** and confirm expected failures.
- [ ] **Step 3: Add `host` to configuration and listener**, preserving the user's direct-entry guard change unless a tested equivalent fixes it. Repair the existing Hono `bodyCache.text` type/runtime mismatch with the smallest behavior-preserving implementation covered by the request-body test.
- [ ] **Step 4: Move logger output to stderr** and remove plaintext credentials from both launchers. Launchers inherit `TDAI_LLM_API_KEY`; if absent, they print an actionable warning without echoing a secret.
- [ ] **Step 5: Run focused/full MemoryKnowledge tests and typecheck**.
- [ ] **Step 6: Commit only reviewed tracked-source changes**; leave unrelated untracked runtime data uncommitted.

### Task 2: Repair and verify the read-only MCP adapter

**Files in `C:\Users\ADMIN\_Project\agent-memory-hub`:**
- Modify: `MemoryKnowledge/src/mcp/http-client.ts`
- Modify: `MemoryKnowledge/src/mcp/server.ts`
- Create: `MemoryKnowledge/src/mcp/__tests__/http-client.test.ts`
- Create: `MemoryKnowledge/src/mcp/__tests__/stdio-smoke.test.ts`

**Interfaces:**
- `HttpClientOptions` requires `serviceId`.
- `KNOWLEDGE_SERVICE_ID` is required at MCP startup.

- [ ] **Step 1: Write failing tests** using a local test HTTP server to assert exact `x-tdai-service-id`, optional bearer behavior, API error propagation, and zero stdout logging.
- [ ] **Step 2: Verify RED** because current requests omit the tenant header.
- [ ] **Step 3: Implement required tenant routing** and startup validation; retain only the 12 existing query-class tools.
- [ ] **Step 4: Build and run an MCP initialize/list-tools/call-tool smoke** against the live Knowledge service.
- [ ] **Step 5: Run full tests, typecheck, and build**, then commit the scoped adapter changes.

### Task 3: Register and index the AIforImpact project

**Files:**
- Modify: `C:\Users\ADMIN\_Project\agent-memory-hub\projects_registry.json`
- Create: `tools/memory-hub/register-aiforimpact.ps1`
- Create: `tools/memory-hub/verify-aiforimpact.ps1`
- Test: `tests/memory-hub-scripts.test.ts`

**Interfaces:**
- Registration script is idempotent and emits the resulting `code_graph_id` without credentials.
- Verification script returns nonzero unless listener binding, functional API, project graph status, files query, and explore query all pass.

- [ ] **Step 1: Write failing script-level tests** against a controlled local HTTP fixture for idempotence, tenant headers, terminal-state polling, and fail-closed exit codes.
- [ ] **Step 2: Verify RED**, then implement the scripts with explicit timeouts and no secret output.
- [ ] **Step 3: Add the `aiforimpact` registry entry** with the exact local project path and web/Next.js domain description.
- [ ] **Step 4: Execute registration once** using `service_id=aiforimpact`, `team_id=aiforimpact`, the local Git workspace path, and its current branch.
- [ ] **Step 5: Poll the same graph to terminal state**. Do not create a second graph after a timeout.
- [ ] **Step 6: Run status/files/explore through the repaired MCP adapter** and persist only the non-secret graph ID in project configuration.
- [ ] **Step 7: Commit project-side scripts and registry metadata separately**.

### Task 4: Add project-scoped Codex memory explorer

**Files:**
- Create: `.codex/config.toml`
- Create: `.codex/agents/memory_explorer.toml`
- Create: `AGENTS.md`
- Modify: `README.md`
- Test: `tests/codex-memory-config.test.ts`

**Interfaces:**
- Codex server name: `aiforimpact_knowledge`.
- Agent name: `memory_explorer`.
- Enabled tools: `code_search`, `code_explore`, `code_callers`, `code_callees`, `code_impact`, `code_node`, `code_status`, `code_files`, `wiki_search`, `wiki_read`, `wiki_list`, `wiki_graph`.

- [ ] **Step 1: Write failing config-contract tests** parsing TOML to assert required startup, stdio command/cwd, project tenant env, exact tool allowlist, automatic approval only for read-only tools, and `sandbox_mode="read-only"`.
- [ ] **Step 2: Verify RED**, then add project-scoped config and custom agent files without secrets.
- [ ] **Step 3: Add concise AGENTS guidance** defining source authority, fail-closed content rules, and when agents should query code graph versus local files.
- [ ] **Step 4: Restart/reload Codex configuration as supported by the client**, verify the MCP server appears, and dispatch `memory_explorer` to answer one code-graph question about `siteConfig`.
- [ ] **Step 5: Run config tests and the live project verification script**, then commit.

### Task 5: End-to-end readiness and recovery documentation

**Files:**
- Create: `docs/verification/2026-09-17-memory-hub-verification.md`
- Modify: `.agent_scratchpad.md`

- [ ] **Step 1: Restart services using hardened launchers** and verify only loopback listeners exist.
- [ ] **Step 2: Run MemoryCore health plus an FTS recall smoke** and report embedding readiness separately.
- [ ] **Step 3: Run Knowledge HTTP, MCP list-tools, MCP graph status/files/explore, and Codex `memory_explorer` smokes**.
- [ ] **Step 4: Stop and restart once** to prove graph restoration and idempotent project registration.
- [ ] **Step 5: Document exact startup, shutdown, health, degraded-mode, and credential-rotation instructions** without including secret values.
- [ ] **Step 6: Re-run all MemoryKnowledge and AIforImpact tests** and record command outputs, timestamps, PIDs, ports, graph ID/status, and limitations.
- [ ] **Step 7: Commit** with `docs(memory): record project readiness and recovery`.
