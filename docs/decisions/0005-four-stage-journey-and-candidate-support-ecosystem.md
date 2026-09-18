# 0005. Chuyển đổi Lộ trình 4 Chặng, Tinh giản Barem Đánh giá và Thiết lập Hệ sinh thái Hỗ trợ Thí sinh

> **Trạng thái:** Chấp thuận (Approved)  
> **Ngày quyết định:** 18/09/2026  
> **Người đề xuất:** CLB Lập Trình FU-DEVER (Đơn vị Phát triển Nền tảng)  
> **Người phê duyệt:** ThS. Lê Thiện Nhật Quang (Trưởng Ban Chuyên môn / Đại diện Ban Tổ chức)  
> **Phạm vi ảnh hưởng:** `components/sections/JourneySection.tsx`, `components/sections/EvaluationSection.tsx`, `components/sections/RegisterSection.tsx`, `content/locales/`, `content/site-config.ts`, `app/layout.tsx`, `app/globals.css`

---

## 1. Bối cảnh & Vấn đề (Context)

Trong quá trình chuẩn bị phát hành chính thức cuộc thi **AI for Impact 2026**, Ban Tổ chức (Thầy Quang Lê) đã đưa ra các chỉ đạo chiến lược quan trọng nhằm tối ưu hóa trải nghiệm của thí sinh trên website:

1. **Rút gọn Lộ trình thi đấu (Từ 5 chặng thành 4 chặng)**:
   - Trước đây, cuộc thi có 5 chặng bao gồm: Chặng 1 Đăng ký, Chặng 2 Thi Thuật toán ICPC, Chặng 3 Training, Chặng 4 Vòng Kỹ thuật (17/10), và Chặng 5 Chung kết (31/10).
   - Ban Tổ chức chỉ đạo: *"Rút hết nội dung Chặng 4 ngày 17/10, Chặng 4 chính là Vòng Chung kết luôn. Như vậy cuộc thi còn 4 chặng"*. Toàn bộ nội dung thử thách kỹ thuật và lập trình tại chỗ được tích hợp trực tiếp vào ngày thi Chung kết 31/10 (Build Sprint 02 giờ).

2. **Loại bỏ Yêu cầu Video Ý tưởng ở Chặng 1**:
   - Chỉ đạo trực tiếp: *"Bỏ phần video ý tưởng luôn"*. Thí sinh ở Chặng 1 chỉ cần hoàn thiện hồ sơ đăng ký và bản mô tả đề xuất giải pháp qua biểu mẫu trực tuyến, không phải quay video 3 phút, giúp giảm rào cản tham gia ban đầu.

3. **Tinh giản Section Cơ chế Đánh giá (`#evaluation`)**:
   - Trước đây trên website hiển thị chi tiết các thẻ trọng số 30%/70%, ghi chú chặng 2/3, banner công thức điểm tổng, và bảng phân rã barem 11 tiêu chí chấm điểm.
   - Chỉ đạo trực tiếp từ Thầy Quang Lê: *"Cũng bỏ luôn em, sẽ có nhóm support riêng nên ko cần thiết đưa hết lên web"*. Việc đưa quá nhiều số liệu barem kỹ thuật phức tạp lên trang landing page công khai gây quá tải nhận thức (cognitive overload) và dễ phát sinh hiểu lầm. Toàn bộ giải đáp và barem cụ thể được Ban Tổ chức phụ trách trực tiếp qua kênh Zalo và Sổ tay Thí sinh.

4. **Nhận diện Kênh Hỗ trợ & Tài liệu Sổ tay**:
   - Nút liên kết Nhóm Zalo hỗ trợ phải sử dụng **Logo Zalo vector chính hãng** (`/icons/zalo.svg`), thay cho icon bong bóng tin nhắn generic.
   - Nhãn nút tải Sổ tay thí sinh trên giao diện phải trang trọng, sạch sẽ: **"Tải Sổ tay Thí sinh"**, tuyệt đối không để lộ hậu tố phiên bản nội bộ `(V4)`. Tên file tải về được chuẩn hóa thành `So_tay_thi_sinh_AI-for-Impact-2026.docx`.

5. **Tinh gọn Hệ thống Typography & Chuyển động Mượt mà**:
   - Loại bỏ Google Font `Space_Grotesk` để loại bỏ lỗi lệch dấu tiếng Việt trên tiêu đề lớn và giảm tải mạng. Rút gọn hệ thống font về đúng 2 font chuẩn mực: `Inter` (Sans & Display) và `JetBrains Mono` (Code & Terminal).
   - Thiết kế hệ thống chuyển động mượt mà (Motion Design) với kỹ thuật CSS Grid row transitions (`0fr -> 1fr`), loại bỏ hiện tượng giật lag layout (Zero Layout Reflow).

---

## 2. Quyết định Kiến trúc (Decisions)

### 2.1. Cấu trúc Lộ trình 4 Chặng Chuẩn hóa (The 4-Stage Journey)
- **Chặng 1: Đăng ký & Đề xuất Ý tưởng (Đến 25/09/2026)**: Đăng ký thành viên trực tuyến, nộp hồ sơ mô tả đề xuất ý tưởng. Hoàn toàn không yêu cầu video 3 phút.
- **Chặng 2: Vòng loại – Tư duy Lập trình ICPC (02/10/2026)**: Thử thách giải thuật 240 phút tại trường theo chuẩn ICPC Global 2024. Chọn ra Top 24 đội.
- **Chặng 3: Chương trình Huấn luyện Thực chiến (07/10, 08/10, 09/10/2026)**: 3 workshop chuyên sâu (Kiến trúc & Sửa lỗi Agent, Đánh giá & Bảo mật, Thi đấu thử nghiệm Mock Run) kèm buổi mentoring 1-1.
- **Chặng 4: Vòng Chung kết & Trình diễn Sản phẩm (31/10/2026)**: Khóa mã nguồn Baseline 23h59 ngày 28/10; sáng 31/10 thi Build Sprint 02 giờ tại chỗ tích hợp ràng buộc bổ sung bất ngờ (chấm 20 điểm trên Git Diff); Demo Day & Pitching (08 phút demo + 04 phút phản biện).

### 2.2. Tinh giản Section Đánh giá & Thiết lập Trung tâm Hỗ trợ Thí sinh
- Dỡ bỏ hoàn toàn khỏi DOM: Các thẻ trọng số `30%` / `70%`, khối ghi chú Chặng 2/3, banner công thức điểm tổng, nút bấm và bảng phân rã chi tiết 11 tiêu chí.
- Giữ vững 3 nguyên tắc đánh giá cốt lõi:
  1. *Chấm tự động bằng Test Case chuẩn ICPC*
  2. *Kiểm tra Trace Log & Năng lực Làm chủ Hệ thống*
  3. *Sản phẩm phải chạy thực tế (No Fake Demo)*
- Thiết lập cặp thẻ hướng dẫn thực tế đối xứng (`lg:grid-cols-2`):
  - **Thẻ Kênh Hỗ trợ & Sổ tay Hướng dẫn (`glass-card-orange`)**: Tích hợp nút *"Tham gia Nhóm Zalo Hỗ trợ"* kèm logo vector Zalo chính thức và nút *"Tải Sổ tay Thí sinh"* (tải file docx không kèm hậu tố V4).
  - **Thẻ Quy định Kỹ thuật & Công cụ AI (`glass-card`)**: Tích hợp danh mục AI models chính hãng từ Svgl (OpenAI, Claude, Gemini, DeepSeek, Hugging Face).

### 2.3. Hợp nhất Typography 2 Font Chuẩn Quốc tế
- Loại bỏ `Space_Grotesk` khỏi `app/layout.tsx`.
- Gán `Inter` cho cả `font-sans` và `font-display`. Inter sở hữu bộ ký tự tiếng Việt hoàn hảo nhất, tỷ lệ x-height tối ưu, triệt tiêu hoàn toàn lỗi lệch dấu tiếng Việt.
- Sử dụng `JetBrains Mono` cho `font-mono` (cửa sổ compiler ICPC, tags kỹ thuật, bộ đếm countdown).

### 2.4. Hệ thống Chuyển động Mượt mà (CSS Grid Easing System)
- Khởi tạo bộ kỹ năng chuyên biệt [`.agents/skills/motion-design/SKILL.md`](file:///c:/Users/ADMIN/_Project/AIforImpact/.agents/skills/motion-design/SKILL.md).
- Triển khai animation co giãn accordion bằng CSS Grid `grid-template-rows: 0fr -> 1fr` kết hợp đường cong gia tốc `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`), loại bỏ hoàn toàn hiện tượng layout reflow / giật lag.

---

## 3. Hệ quả & Lợi ích Đạt được (Consequences & Benefits)

1. **Trải nghiệm Người dùng Thí sinh Tối ưu**:
   - Landing page tinh gọn, hiện đại, không còn bị rối bởi các bảng số điểm chi tiết.
   - Thí sinh có kênh tương tác trực tiếp 24/7 với Ban Tổ chức qua Zalo.
   - Tài liệu Sổ tay Thí sinh được phân phối trang trọng, đúng chuẩn tài liệu nhà trường.
2. **Hiệu năng Web Đỉnh cao (Performance & Bundle Size)**:
   - First Load JS giảm xuống còn **148 kB** (thấp hơn rất nhiều so với ngân sách 200 kB).
   - Tốc độ tải trang đạt mức tức thì (100% Static Export SSG).
3. **Bảo tồn Tuyệt đối 100% Bộ Kiểm thử Tự động**:
   - Duy trì 52/52 bài kiểm thử tự động Vitest PASS.
   - 0 lỗi TypeScript Strict, 0 cảnh báo ESLint.
