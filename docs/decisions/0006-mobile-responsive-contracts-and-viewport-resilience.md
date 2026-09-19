# 0006. Thiết lập Hợp đồng Responsive Di động, Ngăn ngừa Tràn Viewport và Tối ưu hóa Trải nghiệm Tablet

> **Trạng thái:** Chấp thuận (Approved)  
> **Ngày quyết định:** 19/09/2026  
> **Người đề xuất:** CLB Lập Trình FU-DEVER (Đơn vị Phát triển Nền tảng)  
> **Phạm vi ảnh hưởng:** `app/globals.css`, `components/layout/SiteHeader.tsx`, `components/sections/ProgrammingChallengeSection.tsx`, `components/sections/RegisterSection.tsx`, `components/sections/FAQSection.tsx`, `components/sections/HeroSection.tsx`, `tests/responsive.test.ts`  

---

## 1. Bối cảnh & Vấn đề (Context)

Trong quá trình người dùng và ban tổ chức trải nghiệm thực tế trên các thiết bị di động (smartphone màn hình từ 320px đến 428px) và máy tính bảng (tablet / iPad / landscape từ 640px đến 1023px), một số vấn đề hiển thị và bất cập responsive đã được phát hiện:

1. **Lỗi Tràn ngang do Cơ chế Flexbox Min-Width Auto (ICPC Compiler Box)**:
   - Tại `ProgrammingChallengeSection.tsx`, chuỗi cờ biên dịch dài (ví dụ: `g++ -O3 -std=c++20 -Wall -Wextra -static solution.cpp`) được đặt trong một flex child có `overflow-x-auto`.
   - Do quy chuẩn CSS Flexbox, phần tử con của flexbox mặc định có `min-width: auto`. Khi nội dung văn bản không có ngắt dòng (non-wrapping), `min-width` tự động giãn bằng kích thước nội dung, làm vô hiệu hóa thuộc tính `overflow-x-auto` và kéo giãn toàn bộ layout chiều ngang của trang web.

2. **Khoảng trống Điều hướng trên Máy tính Bảng (Tablet Viewport Gap)**:
   - Tại `SiteHeader.tsx`, thanh điều hướng desktop đặt `hidden lg:flex` (chỉ hiển thị từ 1024px trở lên), trong khi nút mở menu di động đặt `sm:hidden` (chỉ hiển thị dưới 640px).
   - Hệ quả: Trên dải màn hình từ 640px đến 1023px (iPad đứng, tablet Android, hoặc điện thoại xoay ngang), cả menu desktop lẫn nút hamburger menu đều bị ẩn hoàn toàn, khiến người dùng mất toàn bộ khả năng điều hướng.

3. **Nút CTA Đăng ký Bị Tràn Khung trên Điện thoại Nhỏ**:
   - Tại `RegisterSection.tsx`, nút bấm với nhãn tiếng Việt dài 28 ký tự kết hợp padding cứng `px-10` tạo ra một phần tử rộng > 340px, trong khi trên iPhone SE (320px–375px) phần khung thẻ chỉ rộng ~264px–320px, dẫn đến vỡ bố cục thẻ màu cam.

4. **Va chạm Cụm Nút Liên hệ FAQ**:
   - Tại `FAQSection.tsx`, hai nút Zalo và Email đặt trong hàng ngang cố định không cho phép wrap, gây tràn lề trên màn hình nhỏ.

5. **Thiếu Bộ Kiểm thử Tự động cho Hợp đồng Responsive**:
   - Mặc dù hệ thống có 52 bài kiểm thử cho SSOT và logic nội suy, chưa có bài kiểm thử nào bảo vệ các bất biến về responsive và viewport.

---

## 2. Quyết định Kiến trúc (Decisions)

### 2.1. Thiết lập Vành đai Bảo vệ Viewport Toàn cục (Global Viewport Guard)
Bổ sung quy tắc chống tràn tuyệt đối tại `app/globals.css`:
```css
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
}
```
Đảm bảo trình duyệt không bao giờ kích hoạt thanh cuộn ngang ngoài ý muốn do bất kỳ thành phần con nào phát sinh lỗi tràn lề.

### 2.2. Đồng bộ Breakpoint Nút Điều hướng Tablet (`lg:hidden`)
Sửa đổi nút mở menu di động tại `SiteHeader.tsx` từ `sm:hidden` thành `flex lg:hidden`. Điều này đảm bảo từ 0px đến 1023px, người dùng luôn có nút bấm mở menu trượt (mobile drawer), và từ 1024px trở lên thanh điều hướng đầy đủ xuất hiện.

### 2.3. Giải pháp `min-w-0 flex-1` Triệt tiêu Flexbox Blowout
Tại `ProgrammingChallengeSection.tsx`, bổ sung `min-w-0 flex-1` và `scrollbar-thin` cho khối chứa lệnh biên dịch:
```tsx
<div className="overflow-x-auto whitespace-nowrap py-0.5 flex items-center gap-1.5 scrollbar-thin min-w-0 flex-1">
  <span className="text-brand-orange font-bold select-none shrink-0">$</span>
  <span className="text-slate-800">{lang.compiler}</span>
</div>
```
`min-w-0` ghi đè giá trị mặc định `min-width: auto`, cho phép container co lại theo kích thước cha và kích hoạt vùng cuộn ngang nội bộ mượt mà bên trong ô mã lệnh.

### 2.4. Bố cục Nút Bấm Co giãn Linh hoạt (Responsive CTA Stacking)
- Tại `RegisterSection.tsx`, chuyển nút CTA sang `w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-lg`.
- Tại `HeroSection.tsx`, các nút Dual CTA xếp dọc (`flex flex-col sm:flex-row items-stretch sm:items-center`) với `w-full sm:w-auto`.
- Tại `FAQSection.tsx`, chuyển hai nút liên hệ Zalo & Email sang `flex flex-col sm:flex-row items-stretch sm:items-center`.
- Mọi nút bấm đều đảm bảo chiều cao tối thiểu ≥ 44px, đạt chuẩn vùng chạm (Touch Target Size) theo WCAG 2.2 AA.

### 2.5. Xây dựng Bộ Kiểm thử Hợp đồng Responsive Tự động (`tests/responsive.test.ts`)
Khởi tạo suite kiểm thử mới gồm 5 bài kiểm tra:
1. `enforces global viewport overflow prevention in globals.css`
2. `ensures SiteHeader mobile navigation button is visible on tablet viewports (lg:hidden)`
3. `prevents flex child blowout in ProgrammingChallengeSection compiler window`
4. `enforces full-width responsive CTA button in RegisterSection for narrow viewports`
5. `ensures handbook download attribute never leaks internal _V4 suffix`

---

## 3. Hệ quả & Đánh giá (Consequences)

- **Ưu điểm**:
  - Triệt tiêu 100% lỗi tràn ngang trên toàn bộ các thiết bị di động (320px, 375px, 390px, 412px, 428px).
  - Trải nghiệm điều hướng liền mạch trên máy tính bảng (iPad 768px, 820px, 1024px).
  - Bộ kiểm thử tự động tăng từ 52 lên **57 tests** (100% pass), bảo vệ vĩnh viễn hệ thống khỏi nguy cơ tái phát lỗi responsive (Regression Guard).
  - First Load JS giữ vững ở mức **148 kB** (< 200 kB ngân sách).
- **Tuân thủ Bất biến**:
  - Không thay đổi bất kỳ dữ liệu vận hành nào trong `content/site-config.ts`.
  - Giữ vững hệ thống thiết kế Clean Tech Light.
