# ADR-0004: Symmetrical Host Showcase & Official FPT Multi-Resolution Icon Suite

## Trạng thái
**ĐÃ CHẤP THUẬN (APPROVED & DEPLOYED)** – 18/09/2026

## Bối cảnh & Vấn đề
1. **Mất cân đối tại khu vực Đơn vị Tổ chức (`#organization`)**:
   - Sau khi chuẩn hóa danh sách đơn vị chỉ hiển thị duy nhất Trường Đại học FPT Đà Nẵng (theo chỉ đạo chính thức từ Ban Tổ chức), giao diện kế thừa dạng lưới nhiều cột (`grid-cols-1 md:grid-cols-3`) khiến thẻ duy nhất bị dạt sang góc trái, để lại 66% khoảng trống bất đối xứng.
   - Đợt chỉnh sửa thử nghiệm ban đầu bổ sung 3 thẻ năng lực phụ (*Chuẩn mực Học thuật, Hạ tầng Thi đấu, Cổng Thông tin*) bị đánh giá là khuôn sáo (cliché), tiếp thị rườm rà và làm loãng tính học thuật trang trọng của Nhà trường.
2. **Biểu tượng Favicon CodeMosaic cũ còn sót lại trên Tab Trình duyệt**:
   - File nhị phân `app/favicon.ico` (kích thước 113.7 KB) nguyên gốc từ dự án CodeMosaic cũ chưa từng được thay thế, khiến tab trình duyệt vẫn hiển thị logo CodeMosaic với khối lục giác xanh-cam.
   - Tệp mã nguồn thừa `lib/i18n.ts` (689 dòng văn bản CodeMosaic) vẫn tồn tại dù không còn bất kỳ import nào.

## Quyết định Kiến trúc

### 1. Tái cấu trúc Thẻ Đơn vị Tổ chức (Clean Centered Showcase)
- Tinh giản toàn diện nhánh `isSingle` trong [`components/sections/OrganizersSection.tsx`](../../components/sections/OrganizersSection.tsx) thành một thẻ trung tâm đối xứng hoàn hảo (`max-w-2xl mx-auto`).
- Loại bỏ 100% các thẻ phụ cliché và câu chữ tiếp thị rườm rà.
- Thẻ tập trung vào 4 yếu tố nhận diện cốt lõi:
  1. Huy hiệu vai trò: `Đơn vị chỉ đạo & đăng cai tổ chức` (`Building2`).
  2. Logo chính thức FPT University Da Nang sắc nét (`/brand/fpt-university.png`).
  3. Tên trường trang trọng: `Trường Đại học FPT Đà Nẵng`.
  4. Định vị khuôn viên: `Campus Đà Nẵng • Khu đô thị FPT City, Q. Ngũ Hành Sơn, TP. Đà Nẵng` (`MapPin`).

### 2. Xây dựng Bộ Biểu tượng FPT 3 Màu Đa Độ Phân Giải (Multi-Resolution Icon Suite)
- Chuẩn hóa biểu tượng vector FPT 3 màu (Xanh `#08509F`, Cam `#F27123`, Lục `#51B748`) đặt trên nền squircle trắng bo góc nhẹ (`rx="14"`) nhằm bảo đảm tương phản 100% trên cả tab trình duyệt giao diện Tối (Dark Mode) và Sáng (Light Mode).
- Thiết lập kịch bản biên dịch [`scripts/build-favicons.mjs`](../../scripts/build-favicons.mjs) sử dụng công cụ render vector `@resvg/resvg-js` và thuật toán đóng gói nhị phân ICO:
  - `app/favicon.ico` & `public/favicon.ico`: File `.ico` đa độ phân giải (16, 32, 48, 64, 256px), dung lượng tối ưu 12.7 KB (giảm gần 90% so với file cũ 113.7 KB).
  - `app/icon.svg` & `public/icon.svg`: Vector SVG sắc nét tuyệt đối.
  - `public/apple-touch-icon.png`: Định dạng PNG 256px cho bookmark và thiết bị di động.
- Khai báo rõ ràng metadata trong `app/layout.tsx` và `app/[locale]/page.tsx`.

### 3. Vệ sinh Mã nguồn (Spotless Repo Hygiene)
- Xóa bỏ hoàn toàn tệp dead code `lib/i18n.ts` kế thừa từ CodeMosaic.
- Xóa bỏ các tệp nháp render tạm thời (`render-icon.html`).

## Hệ quả & Đánh giá
- **Thương hiệu**: Nhận diện tab trình duyệt đồng bộ 100% với Brand Lockup của Trường Đại học FPT Đà Nẵng. Không còn bất kỳ dấu vết nào của CodeMosaic.
- **Thẩm mỹ**: Khu vực Đơn vị Tổ chức đạt độ cân bằng thị giác hoàn hảo, thanh lịch, trang trọng và đúng tinh thần học thuật Clean Tech Light.
- **Kiểm thử**: Duy trì 100% 52/52 unit tests pass, 0 lỗi TypeScript, 0 cảnh báo ESLint, First Load JS đạt 157 kB (< 200 kB).
- **Triển khai**: Đã phát hành chính thức lên Vercel Production và ánh xạ thành công tới tên miền [`https://ai.impact.fptu.vn`](https://ai.impact.fptu.vn).
