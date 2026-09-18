# Báo cáo Kiểm định Mã nguồn Toàn diện (Comprehensive Code Audit)

> **Dự án:** AI for Impact 2026 – Agentic Innovation Challenge  
> **Đơn vị chủ quản:** Trường Đại học FPT Đà Nẵng (`AI.Impact.fptu.vn`)  
> **Phương pháp kiểm định:** Multi-Axis Code Quality Review (5 Trục chất lượng), Impeccable Craft Floor, UI/UX Pro Max, Doubt-Driven Development  
> **Ngày lập báo cáo:** 18/09/2026 (Cập nhật phiên bản Kiểm định v1.3)  
> **Trạng thái phê duyệt:** **APPROVED — PRODUCTION READY**  

---

## 1. Tóm tắt Điều hành (Executive Summary)

Đợt kiểm định toàn diện mã nguồn được thực hiện nhằm đánh giá hệ thống sau khi chuyển đổi hoàn toàn từ nền tảng CodeMosaic 2025 sang **AI for Impact 2026**, tinh giản giao diện tiếng Việt chuẩn hóa, tái cấu trúc thẻ Đơn vị Tổ chức đối xứng và thay thế toàn bộ bộ nhận diện Favicon trình duyệt. Đợt kiểm tra bao trùm 100% các tệp nguồn TypeScript, module cấu hình SSOT, hệ thống component hiển thị, cơ chế render SSG và bộ kiểm thử tự động.

### Chỉ số Đo lường Chính:
- **Tỷ lệ Pass Kiểm thử:** 52/52 tests (100% pass rate across 4 test suites: `config.test.ts`, `content-model.test.ts`, `dates.test.ts`, `schema.test.ts`).
- **Kiểm tra Kiểu dữ liệu TypeScript:** 0 lỗi (`tsc --noEmit`, `strict: true`).
- **Kiểm tra Chuẩn mã nguồn ESLint:** 0 cảnh báo / 0 lỗi.
- **First Load JS Bundle:** 157 kB (ngân sách trần: < 200 kB).
- **Bộ Nhận diện Tab Trình duyệt:** 100% Biểu tượng FPT 3 màu vector trên nền squircle trắng (`app/favicon.ico`, `app/icon.svg`, `public/icon.svg`, `public/apple-touch-icon.png`).
- **Điểm Impeccable Craft Floor:** Loại bỏ 100% AI gradient-text, loại bỏ các thẻ phụ cliché; thẻ đơn vị tổ chức đạt tỷ lệ cân đối hoàn hảo.

---

## 2. Đánh giá Chi tiết theo 5 Trục Chất lượng (Five-Axis Review)

### Trục 1: Tính Đúng đắn & Xử lý Điều kiện Biên (Correctness)

| Khu vực kiểm tra | Tiêu chuẩn đánh giá | Kết quả thực tế | Đánh giá |
| :--- | :--- | :--- | :---: |
| **Cổng Phê duyệt (Approval Gate)** | Thông tin giải thưởng (`siteConfig.prizes`) và đơn vị tổ chức (`siteConfig.organizers`) chưa được ban hành chính thức phải giữ nguyên `approval: 'withheld'`. | Module `prize-podium.ts` và các view component lọc chính xác, không làm rò rỉ giải thưởng hoặc đơn vị chưa phê duyệt ra ngoài giao diện. | **ĐẠT** |
| **Bảo vệ Bục Trao giải (Prize Podium)** | Khi cơ cấu giải bị ẩn một phần, giải Nhì không được phép nhảy lên chiếm bục Vô địch do lỗi mảng. | `prize-podium.ts` trích xuất giải Nhất, Nhì, Ba bằng ID ngữ nghĩa cố định (`first`, `second`, `third`) thay vì lấy theo chỉ mục mảng `[0]`. | **ĐẠT** |
| **Đồng bộ Lịch trình 5 Chặng** | Trạng thái hiển thị chặng thi và phê duyệt ngày thi không được nhập nhằng. | Hệ thống tách riêng `status` của chặng và cờ phê duyệt ngày `dateApproval`. Giữ đúng cấu trúc tuần tự 5 chặng thi mà không rò rỉ ngày chưa ký duyệt. | **ĐẠT** |
| **Kiểm định Schema Dữ liệu** | Schema từ chối các URL scheme nguy hiểm và ngày không hợp lệ. | Sử dụng Zod schema trong `content/schema.ts` chặn đứng các giao thức `javascript:`, `data:`, `ftp:`, bảo vệ an toàn tuyệt đối. | **ĐẠT** |

---

### Trục 2: Khả năng Đọc hiểu, Đơn giản hóa & Tiêu chuẩn Thủ công (Readability & Craft Floor)

| Hạng mục | Hiện trạng & Giải pháp Tinh giản | Đánh giá |
| :--- | :--- | :--- |
| **Loại bỏ Gradient Text ("AI Slop")** | Trước đây một số thẻ tiêu đề và số liệu dùng `bg-clip-text text-transparent bg-gradient-to-r`. Áp dụng kỹ năng `impeccable`, toàn bộ đã được chuẩn hóa về màu đơn sắc (solid colors): xanh công nghệ `text-blue-600` và cam FPT `text-brand-orange`. | **XUẤT SẮC** |
| **Tái cấu trúc Thẻ Đơn vị Tổ chức Đối xứng** | Tinh giản giao diện khi chỉ có duy nhất Trường Đại học FPT Đà Nẵng: chuyển từ lưới lệch sang thẻ trung tâm đối xứng (`max-w-2xl mx-auto`), loại bỏ hoàn toàn các thẻ phụ cliché/marketing sáo rỗng. | **XUẤT SẮC** |
| **Độ ổn định của Icon & Ảnh** | Gỡ bỏ toàn bộ hiệu ứng `group-hover:scale-110` trên thẻ `<img>` của logo compiler trong `ProgrammingChallengeSection.tsx`. Hình ảnh ngồi tĩnh vững chãi, nhường phản hồi tương tác cho đường viền container. | **XUẤT SẮC** |
| **Bộ Nhận diện Tab Trình duyệt (Favicon)** | Xóa bỏ hoàn toàn favicon CodeMosaic cũ (113.7 KB). Xây dựng kịch bản biên dịch `scripts/build-favicons.mjs` tạo bộ icon FPT 3 màu đa độ phân giải (12.7 KB ICO, SVG, Apple Touch Icon). | **XUẤT SẮC** |
| **Dọn dẹp Mã nguồn Thừa (Dead Code)** | Xóa bỏ file `lib/i18n.ts` (689 dòng code thừa từ CodeMosaic), gỡ bỏ các script render nháp tạm thời, duy trì thư mục gốc hoàn toàn sạch sẽ. | **XUẤT SẮC** |
| **Độ sâu & Đổ bóng Đơn tầng** | Loại bỏ cấu trúc "ghost card" (viền 1px kết hợp bóng mờ 50px). Sử dụng hệ thống bóng đổ thương hiệu chuẩn xác `shadow-card`, `shadow-card-hover` và `shadow-glow-orange`. | **ĐẠT** |
| **Đặt tên & Tổ chức Mã** | Phân định ranh giới rõ ràng giữa Server Components (`app/`) và Client Presentation Components (`components/`). Tên biến mang tính tự giải thích (`siteConfig`, `CompetitionViewModel`, `TimelineStage`). | **ĐẠT** |

---

### Trục 3: Kiến trúc Hệ thống & Nguyên tắc SSOT (Architecture & SSOT Purity)

```
[ content/site-config.ts ] (Sự thật Vận hành Duy nhất: Ngày, Link, Quy chế, Đơn vị)
            │
            ▼
[ content/view-model.ts ]  (Nội suy Chuỗi, Token biến mẫu {qualifiedTeams}, {duration})
            │
            ▼
[ components/sections/* ]  (Tầng Hiển thị Thuần túy: Tiêu thụ ViewModel, Zero Hardcoding)
```

- **Triệt tiêu Trôi dạt Dữ liệu (Zero Operational Copy Drift):**
  - Tuyệt đối không hardcode `"Top 24"` hoặc `"240 phút"` trong từ điển ngôn ngữ `vi.ts` hay JSX.
  - Sử dụng hàm nội suy `interpolate()` tích hợp trong `view-model.ts`. Đã được kiểm thử đột biến thành công trong `tests/content-model.test.ts`.
- **Ranh giới Client/Server:**
  - `app/layout.tsx` và `app/[locale]/page.tsx` duy trì cấu trúc Server Component chuẩn mực, giúp Next.js kết xuất tĩnh (Static Export) 100% mã HTML khi build.
  - Chỉ các component cần tương tác DOM (như `SiteHeader` cuộn trang, `FAQSection` accordion, `CountdownTimer`) mới khai báo `'use client'`.

---

### Trục 4: Bảo mật, An toàn & Khả năng Tiếp cận (Security & A11y)

1. **Bảo mật Liên kết Ngoài:**
   - Mọi liên kết mở tab mới (`target="_blank"`) đều được gắn kèm thuộc tính bắt buộc `rel="noopener noreferrer"`.
   - Đường link đăng ký Google Form và Sổ tay cuộc thi được bảo vệ tập trung tại `site-config.ts`.
2. **Khả năng Tiếp cận (WCAG 2.2 AA Compliance):**
   - **Tương phản Màu sắc:** Chữ Deep Slate (`#0F172A`, `#334155`) trên nền trắng (`#FFFFFF`) và Slate sáng (`#F8FAFC`) đạt tỷ lệ tương phản > 7:1 (vượt chuẩn AAA cho body text). Sắc cam FPT (`#FF6B00`) trên nền trắng đạt chuẩn cho tiêu đề lớn và nút bấm.
   - **Bàn phím & Focus:** Mọi nút bấm, liên kết và thẻ điều hướng đều có vòng sáng focus trực quan (`focus-visible:ring-2 focus-visible:ring-brand-orange`).
   - **Hỗ trợ Giảm chuyển động:** Tích hợp `prefers-reduced-motion` trong toàn bộ stylesheet và component chuyển động.

---

### Trục 5: Hiệu năng & Xuất bản Tĩnh (Performance & Static Export)

- **Next.js Static Export:** Cấu hình `output: 'export'` trong `next.config.js` đảm bảo trang web được xuất bản thành các file HTML/CSS/JS thuần túy, có thể lưu trữ trên bất kỳ CDN hoặc web server nào (Nginx, Vercel, GitHub Pages) mà không cần Node.js runtime.
- **Kích thước Bundle:**
  - Shared JS: 79.4 kB
  - Page specific: 77.6 kB
  - **First Load JS tổng cộng: ~157 kB** (vượt xa mục tiêu đặt ra < 200 kB).
- **Tài sản Đồ họa:**
  - Thay thế các thư viện icon nặng bằng các vector SVG tinh gọn từ [Svgl](https://svgl.app/) đặt tại `public/icons/`.
  - Bộ favicon nhị phân nén chuẩn từ `@resvg/resvg-js` chỉ còn 12.7 KB (giảm 90% so với 113.7 KB).
  - Loại bỏ hoàn toàn hiệu ứng canvas Matrix và engine hoạt họa nặng nề không phù hợp.

---

## 3. Quy chuẩn Bất biến Thương hiệu (Brand Invariants Verification)

- [x] **Cuộc thi KHÔNG CÓ LOGO CHÍNH THỨC:**
  - File cũ `public/images/logo.png` đã bị xóa bỏ hoàn toàn khỏi dự án.
  - Nhận diện thương hiệu sử dụng độc quyền **Brand Lockup dạng chữ (`AI FOR IMPACT 2026`)** kết hợp **Biểu tượng FPT 3 màu vector** chuẩn tại Header/Favicon và Logo Trường Đại học FPT Đà Nẵng tại mục Đơn vị Chủ trì.
- [x] **Màu sắc Nhận diện:**
  - Tỷ lệ 60-30-10: Nền sáng tinh khôi (60%), Khung chữ Slate công nghệ (30%), Sắc cam FPT năng lượng (10%).
- [x] **Đơn vị Phát triển Nền tảng:**
  - Nghiên cứu, thiết kế và phát triển bởi **Câu Lạc Bộ Lập Trình FU-DEVER (FPT University Da Nang)** với link trỏ về `https://fudever.com`.

---

## 4. Kết luận & Khuyến nghị (Verdict)

Mã nguồn dự án **AI for Impact 2026** đáp ứng toàn diện và vượt mức các tiêu chuẩn kỹ thuật đề ra trong tài liệu đặc tả, duy trì cấu trúc module sạch sẽ, tính mở rộng cao và trải nghiệm người dùng đẳng cấp.

**Phê duyệt: ĐẠT CHUẨN XUẤT BẢN PRODUCTION.**
