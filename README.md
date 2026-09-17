# AI for Impact 2026 🚀

> **Agentic Innovation Challenge – Từ tư duy thuật toán đến giải pháp tạo tác động xã hội**  
> **Đơn vị chỉ đạo & đăng cai tổ chức:** Trường Đại học FPT Đà Nẵng  
> **Tên miền chính thức:** [`AI.Impact.fptu.vn`](https://ai.impact.fptu.vn)  

Trang web sự kiện chính thức cho cuộc thi học thuật quy mô lớn **AI for Impact 2026** tại Trường Đại học FPT Đà Nẵng, được xây dựng với kiến trúc tĩnh Next.js 14, thiết kế Clean Tech Light hiện đại và quản trị dữ liệu vận hành tập trung (Single Source of Truth).

---

## 🌟 Tính năng Nổi bật

- 🎨 **Clean Tech Light Design System**: Nền trắng tinh khôi kết hợp các lớp kính mờ `.glass-card` phủ sương cao cấp, điểm xuyết sắc cam FPT (`#FF6B00`) rực rỡ và xanh công nghệ hiện đại.
- ⚡ **Single Source of Truth (SSOT)**: 100% sự thật vận hành (lịch trình 5 chặng, hạn đăng ký, Top 24, cơ cấu giải thưởng) được quản lý tập trung tại `content/site-config.ts` với khả năng tự động nội suy chuỗi qua token biến mẫu `{qualifiedTeams}`, `{duration}`.
- 💻 **Developer Console Terminal**: Khu vực ICPC Compiler Specs (`bg-slate-900`) hiển thị cấu hình C++, Java, Python với cú pháp chuẩn xác và vector logo chính hãng từ [Svgl](https://svgl.app/).
- ✨ **Hệ thống Animation Mượt mà**: Button Shimmer Sweep quét phản quang, Agent Network SVG Streaming với các luồng dữ liệu hạt liên tục, radar pulse trực quan.
- 🛡️ **Kiểm định Nghiêm ngặt**: 42 unit & parity tests Vitest, kiểm soát chặt chẽ approval gates giải thưởng và ban tổ chức.
- 🧠 **TencentDB Central Memory Hub**: Kết nối bộ nhớ dài hạn của agent tại cổng `:8420`, lưu trữ toàn bộ quyết định kiến trúc và bất biến dự án.
- 📦 **Static Export First**: Biên dịch xuất bản tĩnh 100% mã nguồn (`output: 'export'`), First Load JS siêu nhẹ (~79.8 kB), tải tức thì trên mọi CDN.

---

## 🛠️ Công nghệ Sử dụng

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Chuyển động & Hiệu ứng**: CSS Animations (GPU-accelerated), Canvas / SVG Streams
- **Icons**: [Lucide React](https://lucide.dev/) + [Svgl](https://svgl.app/) SVG Vectors
- **Kiểm thử**: [Vitest](https://vitest.dev/) (Unit, Parity, Date & Mutation Tests)
- **Bộ nhớ Agent**: TencentDB Agent Memory Hub (`http://127.0.0.1:8420`)

---

## 🚀 Khởi chạy Dự án

### Yêu cầu Tiên quyết
- Node.js 18.17+ hoặc 20+
- npm (hoặc pnpm / yarn)

### 1. Cài đặt Thư viện
```bash
npm install
```

### 2. Chạy Môi trường Phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt tại: `http://localhost:3000` (hoặc `http://localhost:3000/vi`)

### 3. Kiểm định Chất lượng Toàn diện (Verification Pipeline)
```bash
# 1. Kiểm tra kiểu TypeScript
npm run typecheck

# 2. Kiểm tra chuẩn mã nguồn ESLint
npm run lint

# 3. Chạy 42 unit & mutation tests
npm test

# 4. Biên dịch xuất bản tĩnh Next.js Static Export
npm run build
```

Sau khi build tĩnh thành công, sản phẩm sẵn sàng triển khai tại thư mục `out/`.

---

## 📁 Cấu trúc Thư mục

```
AIforImpact/
├── app/                           # Next.js 14 App Router
│   ├── [locale]/page.tsx          # Trang đích chính thức
│   ├── globals.css                # Biến màu, glassmorphism & shimmer keyframes
│   └── layout.tsx                 # Root layout & Google Fonts
├── components/                    # Thành phần Giao diện
│   ├── layout/                    # SiteHeader, SiteFooter
│   ├── sections/                  # 9 Sections (Hero, Journey, Challenge, Themes, ...)
│   ├── ui/                        # Button, Card, Badge
│   └── visuals/                   # AgentNetworkVisual, JourneyPath
├── content/                       # Trung tâm Sự thật Vận hành (SSOT)
│   ├── site-config.ts             # Dữ liệu thực (Ngày, Link form, Top 24, Thể lệ)
│   ├── schema.ts                  # Zod validation schema
│   ├── types.ts                   # TypeScript interfaces
│   └── view-model.ts              # Xử lý nội suy token & prize podium
├── docs/                          # Tài liệu Kỹ thuật
│   ├── decisions/                 # Architecture Decision Records (ADR-001, ADR-002)
│   ├── ARCHITECTURE.md            # Tài liệu Kiến trúc Hệ thống chi tiết
│   └── CODE_AUDIT.md              # Báo cáo kiểm định chất lượng 5 trục
├── public/                        # Tài nguyên Tĩnh & SVG Icons (Svgl)
├── tests/                         # Vitest Test Suites (42 tests pass 100%)
└── AGENTS.md                      # Chỉ thị Bất biến & Quy chuẩn Vận hành Agent
```

---

## 📐 Quy chuẩn Thương hiệu & Bất biến (Brand Invariants)

1. **Cuộc thi KHÔNG CÓ LOGO CHÍNH THỨC**:
   - Không tạo hoặc sử dụng ảnh logo giả lập cho cuộc thi.
   - Nhận diện cuộc thi sử dụng thuần túy **Brand Lockup dạng chữ (`AI FOR IMPACT 2026`)** kết hợp logo đơn vị chủ trì là **Trường Đại học FPT Đà Nẵng**.
2. **Ngôn ngữ Giao diện**: Giao diện tiếng Việt chuẩn hóa, đã tinh giản bỏ nút chuyển đổi ngôn ngữ để tối ưu trải nghiệm tập trung.

---

## 📚 Tài liệu Tham khảo

- [Tài liệu Kiến trúc Hệ thống](file:///docs/ARCHITECTURE.md)
- [Báo cáo Kiểm định Mã nguồn](file:///docs/CODE_AUDIT.md)
- [ADR-001: Clean Tech Light & SSOT Architecture](file:///docs/decisions/0001-clean-tech-light-and-ssot-architecture.md)
- [ADR-002: TencentDB Central Memory Hub](file:///docs/decisions/0002-memory-hub-and-agent-workflow.md)
- [Chỉ thị Vận hành Agent (AGENTS.md)](file:///AGENTS.md)