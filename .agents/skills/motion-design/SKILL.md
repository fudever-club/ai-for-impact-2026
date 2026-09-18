---
name: motion-design
description: Master UI/UX Motion Design & Animation Engine. Specialized in smooth choreography, natural easing curves, spring physics, micro-interactions, hardware-accelerated transitions, and accessible motion (prefers-reduced-motion). Use when adding, refining, or auditing animations across web applications.
---

# Motion Design & Smooth Animation System

## 1. Triết lý Chuyển động (Motion Thesis)

Chuyển động trong giao diện người dùng không chỉ là trang trí. Chuyển động tốt phải:
1. **Giải thích trạng thái và mối quan hệ không gian**: Người dùng hiểu được thành phần đến từ đâu, đi về đâu và tại sao lại thay đổi.
2. **Phản hồi tức thì hành động (Instant Feedback)**: Mọi click, hover, tap đều có phản hồi xúc giác thị giác trong vòng 100–150ms.
3. **Mượt mà và Tự nhiên (Natural Deceleration)**: Không dùng linear hay chuyển động giật cục. Mọi chuyển động vật lý đều có quán tính và giảm tốc tự nhiên.
4. **Tối ưu phần cứng (60–120 FPS)**: Chỉ animate các thuộc tính được GPU tăng tốc: `transform`, `opacity`, `filter`, `backdrop-filter`. Tuyệt đối không animate các thuộc tính gây reflow layout: `width`, `height`, `top`, `left`, `margin`, `padding`.

---

## 2. Hệ thống Nhịp điệu & Thời gian (Timing Tokens)

| Thời lượng | Ứng dụng cụ thể |
| :--- | :--- |
| **100 – 150ms** | Phản hồi vi mô tức thì: nút bấm active/tap, checkbox, icon click, badge toggle |
| **200 – 300ms** | Chuyển đổi trạng thái thường nhật: hover thẻ, hover nút, tooltip, dropdown xuất hiện |
| **350 – 500ms** | Chuyển dịch layout & không gian: mở accordion, chuyển tab, modal mở, offcanvas menu |
| **600 – 800ms** | Hiệu ứng xuất hiện có chủ đích (Entrance sequence): hero visual load, ambient floating |

---

## 3. Đường cong Gia tốc Chuẩn mực (Easing Curves)

Sử dụng bộ đường cong Cubic Bézier tiêu chuẩn công nghiệp:

```css
:root {
  /* Smooth Deceleration - Tự tin và êm ái khi dừng (Mặc định cho hầu hết UI) */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Smooth Standard - Cân bằng giữa vào và ra */
  --ease-smooth: cubic-bezier(0.25, 0.8, 0.25, 1);

  /* Spring Physics - Nẩy nhẹ tự nhiên cho nút bấm và icon tương tác */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Acceleration - Dùng cho biến mất hoặc rời khỏi màn hình (rút lui nhanh hơn xuất hiện) */
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
}
```

---

## 4. Danh mục Mẫu Chuyển động (Motion Patterns)

### 4.1. Thẻ Bề mặt Kính (Glassmorphism Card Hover)
- Di chuyển trục Y: `translate-y-0` -> `-translate-y-1.5`
- Bóng mờ đa tầng: chuyển từ `shadow-card` sang `shadow-card-hover` với độ mềm mịn cao
- Viền sáng nhẹ (Glow border): tăng nhẹ độ mờ của viền thương hiệu

### 4.2. Vi chuyển động Nút bấm (Button Shimmer & Spring Press)
- Hiệu ứng vệt sáng quét nhẹ (`shineSweep`) chu kỳ 4s
- Nhấn chuột: `scale-[0.98]` khi active, bật trở lại `scale-100` với `--ease-spring`

### 4.3. Chuyển Tab Mượt mà (Fluid Tab Transitions)
- Thay đổi tab với fade-in nhẹ kết hợp dịch chuyển X/Y 8px
- Active tab pill chuyển dịch trơn tru với background contrast cao

### 4.4. Accordion Co giãn Tự nhiên (Smooth Accordion Expand)
- Sử dụng CSS grid transition `grid-template-rows: 0fr -> 1fr` hoặc max-height transition kết hợp opacity
- Icon mũi tên quay mượt mà 180 độ

---

## 5. Khả năng Tiếp cận (Accessibility & Reduced Motion)

Luôn tôn trọng tùy chọn của người dùng khi họ bật `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
*Lưu ý: Giảm chuyển động không có nghĩa là loại bỏ phản hồi; các thay đổi về màu sắc, độ đậm viền hoặc opacity vẫn được duy trì để đảm bảo trải nghiệm tương tác rõ ràng.*
