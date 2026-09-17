# AGENTS.md – AI for Impact 2026 Workspace Directives

> **Dự án:** AI for Impact 2026 – Agentic Innovation Challenge  
> **Đơn vị tổ chức:** Trường Đại học FPT Đà Nẵng  
> **Tên miền chính thức:** `AI.Impact.fptu.vn`  
> **Kiến trúc:** Next.js 14 App Router, Static Export (`output: 'export'`), TypeScript Strict, Tailwind CSS, Vitest  
> **Hệ thống bộ nhớ:** TencentDB Agent Memory Central Hub (`http://127.0.0.1:8420`, tenant `aiforimpact`)  

---

## 1. Nguyên tắc Cốt lõi & Bất biến (Core Invariants)

1. **Single Source of Truth (SSOT)**:
   - Toàn bộ sự thật vận hành (ngày tháng, đường link đăng ký, quy chế thi, danh sách chủ đề, cơ cấu giải thưởng, đơn vị chủ trì) được quản lý tập trung tại [`content/site-config.ts`](file:///c:/Users/ADMIN/_Project/AIforImpact/content/site-config.ts).
   - Tầng hiển thị chỉ tiêu thụ view-model nội suy được tính toán từ [`content/view-model.ts`](file:///c:/Users/ADMIN/_Project/AIforImpact/content/view-model.ts).
   - **Tuyệt đối không hardcode** các thông số vận hành (như `Top 24`, `240 phút`, số lượng giải) vào văn bản từ điển ngôn ngữ hay mã nguồn JSX. Sử dụng token biến mẫu `{qualifiedTeams}`, `{duration}` để đảm bảo tự động đồng bộ khi thay đổi cấu hình.

2. **Hệ thống Thiết kế (Clean Tech Light Design System)**:
   - **Bảng màu**: Nền trắng tinh khôi (`#FFFFFF`) kết hợp các dải phân tầng Porcelain/Slate (`#F8FAFC`, `#F1F5F9`). Chữ Deep Slate tương phản cao (`#0F172A`, `#334155`, `#64748B`).
   - **Điểm nhấn thương hiệu**: Sắc cam FPT rực rỡ (`#FF6B00`, hover `#EA580C`) và xanh công nghệ hiện đại (`#2563EB`).
   - **Thẻ bề mặt**: Kính mờ trắng phủ sương `.glass-card` (`rgba(255, 255, 255, 0.92)` kèm viền `border-slate-200` và bóng đa tầng `shadow-card`, `shadow-card-hover`). Thẻ giải Vô địch và CTA Đăng ký dùng gradient ấm `.glass-card-orange`.
   - **Khu vực Kỹ thuật**: Developer Console Terminal (`bg-slate-900`) hiển thị cấu hình compiler ICPC với syntax highlight sắc nét.
   - **Thư viện SVG Logo**: Toàn bộ logo thương hiệu, ngôn ngữ lập trình, AI framework và công cụ công nghệ được ưu tiên khai thác chuẩn xác từ [Svgl](https://svgl.app/) (được lưu tại `public/icons/`).
   - **Ngôn ngữ**: Giao diện tiếng Việt chuẩn hóa, đã tinh giản bỏ nút chuyển đổi ngôn ngữ.

3. **Nhận diện Thương hiệu & Logo (Competition Brand Invariant)**:
   - **Cuộc thi này KHÔNG CÓ LOGO CHÍNH THỨC**: Tuyệt đối không tự ý tạo, import, suy đoán hoặc sử dụng file ảnh logo giả lập cho cuộc thi. File cũ `public/images/logo.png` không phải logo cuộc thi và đã bị loại bỏ hoàn toàn khỏi dự án.
   - **Quy cách nhận diện**: Nhận diện cuộc thi sử dụng thuần túy Brand Lockup dạng chữ cao cấp (`AI FOR IMPACT 2026`) kết hợp nhận diện đơn vị chủ trì & đăng cai tổ chức là Trường Đại học FPT Đà Nẵng.

---

## 2. Hệ thống Kỹ năng Agent (Active Skills)

Khi làm việc trên dự án này, Agent kích hoạt và tuân thủ các skill chuyên biệt sau:

| Tên Skill | Vị trí | Mục đích & Phạm vi áp dụng |
| :--- | :--- | :--- |
| **`ui-ux-pro-max`** | `.agents/skills/ui-ux-pro-max/` & Global | Thiết kế giao diện cao cấp, bảng màu 60-30-10, ghép cặp typography, nhịp điệu khoảng cách, kiểm duyệt tương phản WCAG 2.2 AA. |
| **`frontend-ui-engineering`** | Global | Xây dựng component React/Tailwind chuẩn production, quản lý responsive, trạng thái focus/hover, và khả năng tiếp cận a11y. |
| **`aiforimpact-workflow`** | `.agents/skills/aiforimpact-workflow/` | Quy trình phát triển đặc thù của dự án: đồng bộ SSOT, build tĩnh Next.js, cập nhật cổng Live 3000, và ghi nhận tiến độ. |
| **`agent-memory-hub`** | Global (`:8420`) | Giao tiếp với TencentDB Agent Memory Hub lưu trữ ngữ cảnh dài hạn, quyết định kiến trúc và nhật ký phiên làm việc cho tenant `aiforimpact`. |
| **`test-driven-development`** | Global | Duy trì 100% tỷ lệ pass của 42+ unit & parity tests trong thư mục `tests/` trước khi đóng task. |
| **`code-review-and-quality`** | Global | Thẩm định đa trục: bảo mật, tương thích trình duyệt, không rò rỉ gate phê duyệt, và First Load JS < 200 kB. |

---

## 3. Quy trình Kiểm thử & Phát hành (Verification Pipeline)

Mọi thay đổi mã nguồn trước khi hoàn tất bắt buộc phải vượt qua toàn bộ 4 bước:

```bash
# 1. Kiểm tra kiểu TypeScript (0 lỗi)
npm run typecheck

# 2. Kiểm tra chuẩn mã nguồn ESLint (0 cảnh báo / lỗi)
npm run lint

# 3. Chạy toàn bộ bộ kiểm thử đơn vị & SSOT
npm test

# 4. Biên dịch xuất bản tĩnh Next.js Static Export
npm run build
```

Sau khi build thành công, đồng bộ bản xuất bản tĩnh ra thư mục `out/` phục vụ cổng preview:
```bash
robocopy .worktrees\implementation\out out /E /PURGE
```

---

## 4. Tương tác với TencentDB Memory Hub

Lưu các quyết định kỹ thuật và mốc bàn giao quan trọng bằng lệnh CLI:
```bash
node c:/Users/ADMIN/_Project/agent-memory-hub/connectors/memory_cli.mjs capture "<Yêu cầu người dùng>" "<Giải pháp & Quyết định thực thi>" aiforimpact
```
Tra cứu lịch sử ngữ cảnh khi cần:
```bash
node c:/Users/ADMIN/_Project/agent-memory-hub/connectors/memory_cli.mjs recall "<Nội dung tra cứu>" aiforimpact
```

---

## 5. Quy chuẩn Vệ sinh Kho lưu trữ (Spotless Repo Hygiene)

1. **Tuyệt đối giữ sạch thư mục gốc (Root Directory)**:
   - Không lưu trữ các file Word (`.docx`), file ảnh chụp tạm (`.jpg`), file ghi chú thô (`.txt`) hay tài liệu nháp (`.md`) trực tiếp tại thư mục gốc.
   - Cấu trúc lưu trữ chuẩn:
     - `docs/references/raw_materials/`: Chứa tài liệu đề án, thể lệ gốc (.docx, .pdf), ghi chú thô và ảnh tư liệu tham chiếu.
     - `docs/archive/scratch/`: Chứa các tài liệu phân tích kỹ thuật, scratchpad nháp của các phiên làm việc trước.
2. **Loại bỏ Dead Code & Dead Imports**:
   - Khi tái cấu trúc hoặc tinh giản tính năng, bắt buộc xóa bỏ các file không còn sử dụng (như `LanguageSwitcher.tsx` khi chỉ dùng tiếng Việt).
   - Dọn sạch các import thừa trong JSX/TSX để giữ mã nguồn gọn gàng.
3. **Chuẩn Cấu hình Kiểm thử**:
   - File cấu hình Vitest bắt buộc là `vitest.config.mts` (ESM mode với `import.meta.url`) để loại bỏ hoàn toàn cảnh báo `configLoader: 'native'`. Duy trì 100% 52 bài kiểm thử tự động.

---

## 6. Quy chuẩn Thương hiệu Đơn vị Phát triển (FU-DEVER Brand Invariants)

1. **Đơn vị Phát triển Nền tảng**:
   - Nền tảng website do **Câu Lạc Bộ Lập Trình FU-DEVER (FPT University Da Nang)** nghiên cứu, thiết kế và phát triển.
2. **Thông tin Nhận diện Chính thức (Locked Facts)**:
   - **Tên miền chính thức**: [`https://fudever.com`](https://fudever.com) *(Tuyệt đối không dùng domain tạm `vercel.app`)*.
   - **Fanpage chính thức**: `https://www.facebook.com/FPTUDever`
   - **GitHub Organization**: `https://github.com/fudever-club`
   - **Email liên hệ**: `club.dever@gmail.com`
   - **Slogan**: *"Work hard, Play hard" • EST. 2018*
   - **Linh vật**: Bọ cánh cam **Buggy** 🐞 cùng Biệt đội những người bạn (`run()`, Teamwork, Commit & Chill).
3. **Quy cách Logo DEVER trên Tài liệu (README & Footer)**:
   - Sử dụng Logo Master chuẩn (`logodever-01.png` / `public/brand/logo-dever.png`).
   - Bắt buộc hiển thị logo tại phần giới thiệu CLB và phần footer kết tài liệu `README.md`.
   - Footer website tích hợp huy hiệu *"Developed by FU-DEVER"* trỏ trực tiếp về `https://fudever.com`.

