# ADR-002: TencentDB Central Memory Hub Integration & Multi-Agent Skill Engine

## Status
Accepted

## Date
2026-09-17

## Context
Dự án AI for Impact 2026 được phát triển bởi các đội ngũ AI Agent chuyên môn hóa cao (phụ trách kiến trúc, UI/UX, kiểm thử, tối ưu hiệu năng). Trong các phiên làm việc kéo dài hoặc khi context window bị nén (context compaction), nguy cơ mất ngữ cảnh kỹ thuật, vi phạm các thỏa thuận kiến trúc đã chốt hoặc phá vỡ các quy chuẩn thương hiệu là rất lớn. Do đó, hệ thống cần một bộ nhớ trung tâm lưu trữ lâu dài (persistent long-term memory), độc lập với vòng đời của từng agent.

## Decision

1. **Kết nối TencentDB Agent Memory Central Hub (`http://127.0.0.1:8420`):**
   - Thiết lập tenant chuyên biệt `aiforimpact` trên cổng MemoryCore.
   - Khởi chạy Knowledge Service an toàn loopback tại `http://127.0.0.1:8424`.
   - Sử dụng connector `memory_cli.mjs` để ghi nhận tự động các lượt quyết định kỹ thuật và mốc bàn giao:
     ```bash
     node c:/Users/ADMIN/_Project/agent-memory-hub/connectors/memory_cli.mjs capture "<Tiêu đề>" "<Nội dung & Quyết định>" aiforimpact
     ```

2. **Chế độ MCP Adapter Read-Only Chuẩn JSON-RPC:**
   - Cung cấp 12 query tools phục vụ tra cứu CodeGraph và Knowledge Graph cho agent (`code_search`, `code_explore`, `wiki_search`, `wiki_read`, ...).
   - Bảo vệ phân vùng dữ liệu với header bắt buộc `x-tdai-service-id: aiforimpact`.
   - Cấm mở các tool ghi/xóa quản trị để đảm bảo an toàn tuyệt đối cho cơ sở dữ liệu.

3. **Chuyên môn hóa Kỹ năng Agent (Skill-Based Operation):**
   - Phân chia nhiệm vụ theo các Agent Skills chuyên trách:
     - `ui-ux-pro-max`: Quy hoạch tỷ lệ màu 60-30-10, ghép cặp typography và kiểm duyệt tương phản WCAG 2.2 AA.
     - `impeccable`: Loại bỏ dấu hiệu AI slop (gradient text, hover jitter, ghost card) theo chuẩn Craft Floor.
     - `aiforimpact-workflow`: Quy trình phát triển đặc thù, đồng bộ SSOT, build tĩnh Next.js và cập nhật cổng preview 3000.
     - `test-driven-development`: Duy trì 100% tỷ lệ pass 42+ unit tests.

## Consequences

### Tích cực:
- Toàn bộ ngữ cảnh quan trọng (như bất biến "Cuộc thi không có logo", loại bỏ ngôn ngữ EN, đổi màu sang Clean Tech Light) được lưu giữ vĩnh viễn trên TencentDB.
- Khi một agent mới được khởi tạo hoặc sau khi compaction, agent có thể ngay lập tức tra cứu (`memory_cli.mjs recall`) để nắm bắt đầy đủ lịch sử ra quyết định.
- Quá trình phát triển diễn ra an toàn, có kỷ luật và kiểm soát phiên bản chặt chẽ.
