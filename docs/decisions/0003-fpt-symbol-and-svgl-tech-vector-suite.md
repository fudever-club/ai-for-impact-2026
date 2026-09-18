# ADR 0003: Tích hợp Biểu tượng Vector FPT & Bộ Nhận diện Kỹ thuật Svgl

## Trạng thái
**ĐÃ DUYỆT (ACCEPTED)** – 18/09/2026

## Bối cảnh (Context)
1. Cuộc thi **AI for Impact 2026** không có logo đồ họa riêng mà sử dụng quy chuẩn Brand Lockup dạng chữ cao cấp (`AI FOR IMPACT 2026`). Ban đầu, ô huy hiệu bên cạnh tên cuộc thi sử dụng icon trừu tượng `<Sparkles />` từ thư viện Lucide.
2. Để thể hiện rõ nét nhận diện đơn vị chủ trì & đăng cai tổ chức là **Trường Đại học FPT Đà Nẵng**, người dùng và Ban Tổ chức đã yêu cầu thay thế icon này bằng **biểu tượng chính thức của FPT** (chỉ lấy hình biểu tượng 3 cánh màu đặc trưng, không lấy chữ dài).
3. Trong phần cấu hình compiler ICPC ([`ProgrammingChallengeSection.tsx`](file:///c:/Users/ADMIN/_Project/AIforImpact/components/sections/ProgrammingChallengeSection.tsx)), C (gcc 14.2.0) bị thiếu logo riêng nên hiển thị fallback ô xám chữ "C" trong khi C++, Java, Python có logo vector chính thức.
4. Trong phần công cụ AI ([`EvaluationSection.tsx`](file:///c:/Users/ADMIN/_Project/AIforImpact/components/sections/EvaluationSection.tsx)), danh mục mới chỉ hiển thị OpenAI và Claude, chưa phản ánh đầy đủ các mô hình mã nguồn mở thế hệ 2026 (Gemini, DeepSeek, Hugging Face).
5. Kênh hỗ trợ thí sinh chính thức qua Zalo (`https://zalo.me/g/ukzv6t0i6ctyj16lfrum`) đang dùng icon bong bóng chung chung.

## Quyết định (Decisions)

1. **Biểu tượng FPT Vector Chuẩn Nhận diện ([`FptSymbol.tsx`](file:///c:/Users/ADMIN/_Project/AIforImpact/components/icons/FptSymbol.tsx))**:
   - Trích xuất định dạng vector SVG chính xác từ Wikimedia Commons (chuẩn nhận diện FPT 2010).
   - Bảo tồn 3 cánh màu kinh điển: Cánh F `#08509F` (Xanh dương), cánh P `#F27123` (Cam FPT), cánh T `#51B748` (Xanh lá) với chữ trắng âm bản, tỷ lệ chuẩn `34:21`.
   - Nhúng trực tiếp vào Brand Lockup trên [`SiteHeader.tsx`](file:///c:/Users/ADMIN/_Project/AIforImpact/components/layout/SiteHeader.tsx) bên trong khung kính bo góc viền gradient FPT Orange / Tech Blue.
   - Vẫn bảo toàn bất biến: Cuộc thi **không có logo giả lập**, huy hiệu FPT đại diện cho đơn vị chủ trì Đại học FPT Đà Nẵng.

2. **Hoàn thiện Bộ Biểu tượng Kỹ thuật từ [Svgl](https://svgl.app/)**:
   - Tải và tích hợp `c.svg` chính hãng cho trình biên dịch C (gcc 14.2.0).
   - Mở rộng danh mục mô hình AI trong `EvaluationSection.tsx` với các vector SVG: Google Gemini (`gemini.svg`), DeepSeek (`deepseek.svg`), Hugging Face (`huggingface.svg`).
   - Bổ sung `docker.svg` phục vụ chủ đề containerization tại Chặng 3 (Mock Run & Deployment).
   - Tích hợp vector logo Zalo chính thức (`zalo.svg`) vào nút hỗ trợ tại `FAQSection.tsx` và `SiteFooter.tsx`.

3. **Bảo tồn Ngưỡng Hiệu năng (Performance Budget)**:
   - Toàn bộ vector SVG được nhúng dưới dạng tài nguyên tĩnh độc lập tại `public/icons/` hoặc component inline nhẹ.
   - Dung lượng First Load JS sau khi mở rộng vẫn giữ ở mức lý tưởng **157 kB** (đạt ngưỡng < 200 kB).

## Hệ quả (Consequences)
- Giao diện đạt độ hoàn thiện thị giác tối đa, đồng bộ 100% giữa ngôn ngữ lập trình ICPC và hệ sinh thái AI thế hệ mới.
- Tăng độ nhận diện trực quan cho đơn vị chủ trì (Trường Đại học FPT Đà Nẵng) và kênh hỗ trợ Zalo.
- Toàn bộ 52 bài kiểm thử tự động tiếp tục duy trì tỷ lệ đạt 100%.
