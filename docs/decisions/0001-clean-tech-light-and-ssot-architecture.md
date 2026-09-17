# ADR-001: Clean Tech Light Design System & Single Source of Truth Architecture

## Status
Accepted

## Date
2026-09-17

## Context
Dự án ban đầu kế thừa nền tảng mã nguồn của cuộc thi CodeMosaic 2025 với tông màu xanh đen huyền bí (Dark Matrix Theme) và cấu hình phân mảnh rải rác trong các tệp JSX và từ điển ngôn ngữ. Các thông số vận hành như "Top 24", "240 phút", cơ cấu giải thưởng và hạn chót đăng ký bị hardcode, dẫn đến nguy cơ sai lệch dữ liệu (operational data drift) khi Ban Tổ chức điều chỉnh thể lệ. Ngoài ra, giao diện tối không phù hợp với định hướng cuộc thi học thuật AI quy mô lớn của Trường Đại học FPT Đà Nẵng.

## Decision

1. **Chuyển đổi hoàn toàn sang Hệ thống Thiết kế Clean Tech Light:**
   - Nền trắng tinh khôi (`#FFFFFF`) kết hợp các dải sắc độ Porcelain/Slate (`#F8FAFC`, `#F1F5F9`).
   - Tỷ lệ phối màu 60-30-10: 60% Nền sáng, 30% Cấu trúc kính mờ và chữ Deep Slate, 10% Sắc cam FPT (`#FF6B00`) làm tâm điểm năng lượng cho CTA và giải thưởng.
   - Thẻ bề mặt `.glass-card` kính mờ phủ sương đa tầng (`rgba(255, 255, 255, 0.92)`).
   - Thiết kế khu vực Compiler Specs thành Developer Console Terminal (`bg-slate-900`) tương phản công nghệ cao.

2. **Thiết lập Single Source of Truth (SSOT) Tuyệt đối:**
   - Toàn bộ sự thật vận hành tập trung duy nhất tại `content/site-config.ts`.
   - Sử dụng token biến mẫu `{qualifiedTeams}`, `{duration}` trong từ điển ngôn ngữ kết hợp hàm nội suy `interpolate()` tại `content/view-model.ts`.
   - Tuyệt đối không hardcode thông số vận hành vào JSX hoặc bản dịch ngôn ngữ.

3. **Cổng Phê duyệt (Approval Gates) & An toàn Bục Trao giải:**
   - Các trường dữ liệu chưa được phê duyệt chính thức giữ trạng thái `approval: 'withheld'` và được lọc an toàn ở tầng view-model.
   - Trích xuất bục giải thưởng Nhất, Nhì, Ba bằng ID ngữ nghĩa cố định (`first`, `second`, `third`) thay vì lấy theo thứ tự mảng.

4. **Bất biến Thương hiệu (Brand Invariants):**
   - Cuộc thi **KHÔNG CÓ LOGO CHÍNH THỨC**.
   - Loại bỏ hoàn toàn file ảnh mẫu `public/images/logo.png`.
   - Sử dụng độc quyền Brand Lockup dạng chữ `AI FOR IMPACT 2026` kết hợp nhận diện Trường Đại học FPT Đà Nẵng.

## Consequences

### Tích cực:
- Thay đổi thông số vận hành (như tăng số đội vào vòng 2 từ 24 lên 32) chỉ cần sửa 1 dòng duy nhất tại `site-config.ts`, toàn bộ trang web và view-model tự động cập nhật đồng bộ.
- Giao diện sáng sủa, hiện đại, tăng độ tương phản WCAG 2.2 AA và tạo cảm giác học thuật chuyên nghiệp.
- Không có nguy cơ rò rỉ giải thưởng hoặc hiển thị sai bục trao giải khi dữ liệu chưa phê duyệt.

### Hạn chế & Thách thức:
- Cần duy trì bộ kiểm thử tự động (unit test & parity test) nghiêm ngặt để ngăn chặn việc hardcode trở lại trong tương lai.
