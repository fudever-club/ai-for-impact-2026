# AI for Impact 2026 🚀

<div align="center">

![FU-DEVER Badge](https://img.shields.io/badge/DEVELOPED%20BY-FU--DEVER-FF6B00?style=for-the-badge&logo=visual-studio-code&logoColor=white)
[![Next.js](https://img.shields.io/badge/Next.js-13.5_App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4_Clean_Tech-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-52%2F52_Pass-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![TencentDB Memory](https://img.shields.io/badge/TencentDB-Agent_Memory_Hub-0052D9?style=for-the-badge&logo=tencentqq&logoColor=white)](http://127.0.0.1:8420)

<br />

**Agentic Innovation Challenge – Từ tư duy thuật toán đến giải pháp tạo tác động xã hội**  
*Nền tảng trang web sự kiện chính thức do **CLB Lập Trình FU-DEVER** nghiên cứu, thiết kế và phát triển.*

[**Khám phá Sự kiện**](https://ai.impact.fptu.vn) · [**Sổ tay Thí sinh**](./public/docs/So_tay_thi_sinh_AI-for-Impact-2026_V4.docx) · [**Quy chuẩn Kiến trúc**](./docs/ARCHITECTURE.md) · [**Về FU-DEVER**](#-về-đơn-vị-phát-triển--clb-lập-trình-fu-dever)

</div>

---

## 📌 Tổng quan Dự án

Trang web chính thức của cuộc thi học thuật quy mô lớn **AI for Impact 2026**:
- **Đơn vị chỉ đạo & đăng cai tổ chức:** Trường Đại học FPT Đà Nẵng
- **Đơn vị bảo trợ công nghệ & phát triển hệ thống:** [Câu Lạc Bộ Lập Trình FU-DEVER](https://github.com/fudever-club) (FPT University Da Nang)
- **Tên miền chính thức:** [`AI.Impact.fptu.vn`](https://ai.impact.fptu.vn)

Hệ thống được xây dựng trên nền tảng **Next.js 14 App Router** với kiến trúc xuất bản tĩnh toàn phần (**Static Export First**), tuân thủ nguyên lý quản trị dữ liệu tập trung **Single Source of Truth (SSOT)** và vận hành hệ thống thiết kế hiện đại **Clean Tech Light**.

---

## 🌟 Tính năng Nổi bật

- 🎨 **Clean Tech Light Design System**: Nền trắng tinh khôi kết hợp các lớp kính mờ `.glass-card` phủ sương sang trọng, điểm xuyết sắc cam FPT rực rỡ (`#FF6B00`) và xanh công nghệ hiện đại (`#2563EB`).
- ⚡ **Single Source of Truth (SSOT)**: 100% sự thật vận hành (lịch trình 5 chặng, hạn nộp hồ sơ, Top 24, cơ cấu giải thưởng) được quy tụ tại [`content/site-config.ts`](./content/site-config.ts), tự động nội suy token mẫu qua [`content/view-model.ts`](./content/view-model.ts). Tuyệt đối không hardcode văn bản.
- 💻 **Clean Tech Light IDE Window**: Cửa sổ môi trường lập trình ICPC với mặt kính trắng mờ (`bg-white/95 backdrop-blur-md`), thanh tiêu đề Mac Titlebar thanh lịch, nút copy lệnh biên dịch và bộ SVG vector chính hãng từ [Svgl](https://svgl.app/) (C, C++, Java, Python).
- ⏳ **Bộ đếm Ngược Realtime (Countdown)**: Đồng bộ tự động thời hạn đóng cổng đăng ký, tự động chuyển đổi trạng thái khi hết hạn mà không cần can thiệp mã nguồn.
- 🛡️ **Kiểm định Chất lượng Nghiêm ngặt**: 52 unit tests bao phủ 100% logic ngày tháng, tính toàn vẹn SSOT, nội suy token và cấu trúc giải thưởng.
- 🧠 **TencentDB Agent Memory Central Hub**: Tích hợp bộ nhớ dài hạn L0–L3 cho AI Agents (`http://127.0.0.1:8420`, tenant `aiforimpact`), bảo toàn vĩnh viễn các quyết định kiến trúc và ngữ cảnh dự án.
- 📦 **Static Export Siêu Nhẹ**: Tối ưu hóa bundle First Load JS chỉ ~79 kB, tốc độ tải tức thì, dễ dàng triển khai trên mọi hạ tầng tĩnh (Cloudflare Pages, Vercel, GitHub Pages).

---

## 🛠️ Công nghệ Sử dụng

| Phân tầng | Công nghệ | Mục đích |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, `output: 'export'`) | Nền tảng web tĩnh hiệu năng cao |
| **Ngôn ngữ** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) | Bảo đảm an toàn kiểu dữ liệu 100% |
| **Giao diện** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Hệ thống utility classes Clean Tech Light |
| **Biểu tượng** | [Lucide React](https://lucide.dev/) & [Svgl](https://svgl.app/) | Bộ icons vector chuẩn mực |
| **Kiểm thử** | [Vitest](https://vitest.dev/) (`vitest.config.mts`) | Chạy 52/52 unit tests tự động |
| **Bộ nhớ Agent** | TencentDB Agent Memory Hub | Quản lý kiến trúc & ngữ cảnh AI đa agent |
| **Tổ chức** | [CLB FU-DEVER](https://github.com/fudever-club) | Đơn vị phát triển & bảo trì giải pháp |

---

## 🚀 Hướng dẫn Khởi chạy & Phát triển

### Yêu cầu Tiên quyết
- **Node.js**: Phiên bản 18.17+ hoặc 20+ (Khuyến nghị 20 LTS)
- **Package Manager**: `npm` (hoặc `pnpm` / `yarn`)

### 1. Cài đặt Thư viện
```bash
npm install
```

### 2. Khởi chạy Server Môi trường Phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt tại: [`http://localhost:3000`](http://localhost:3000)

### 3. Quy trình Kiểm định Toàn diện (4-Step Verification Pipeline)
Trước khi tạo Pull Request hoặc xuất bản, toàn bộ 4 bước kiểm định bắt buộc phải vượt qua:

```bash
# Bước 1: Kiểm tra kiểu dữ liệu TypeScript (0 lỗi)
npm run typecheck

# Bước 2: Kiểm tra chuẩn mã nguồn ESLint (0 warnings / errors)
npm run lint

# Bước 3: Chạy toàn bộ 52 bài kiểm thử tự động
npm test

# Bước 4: Biên dịch tĩnh Next.js Static Export
npm run build
```

Sau khi hoàn tất, bản phân phối tĩnh sẽ được đóng gói toàn diện tại thư mục `out/`.

---

## 📁 Cấu trúc Thư mục Chuẩn mực

```
AIforImpact/
├── app/                           # Next.js 14 App Router
│   ├── [locale]/page.tsx          # Trang đích chính thức (Tiếng Việt)
│   ├── globals.css                # Biến màu Clean Tech, glassmorphism & keyframes
│   └── layout.tsx                 # Root layout & Google Fonts (Inter, Plus Jakarta Sans)
├── components/                    # Hệ thống Thành phần Giao diện
│   ├── layout/                    # SiteHeader, SiteFooter
│   ├── sections/                  # 12 Sections (Hero, Journey, Challenge, Themes, ...)
│   ├── ui/                        # Button, Card, Badge, Accordion
│   └── visuals/                   # AgentNetworkVisual, JourneyPath SVG streams
├── content/                       # Trung tâm Sự thật Vận hành (Single Source of Truth)
│   ├── site-config.ts             # Dữ liệu sự kiện gốc (Ngày tháng, Form link, Thể lệ)
│   ├── view-model.ts              # Xử lý nội suy token {qualifiedTeams}, {duration}
│   ├── schema.ts                  # Zod validation schema
│   └── types.ts                   # Định nghĩa TypeScript contracts
├── docs/                          # Kho Tài liệu Kỹ thuật & Lưu trữ
│   ├── ARCHITECTURE.md            # Tài liệu Kiến trúc Hệ thống chi tiết
│   ├── CODE_AUDIT.md              # Báo cáo kiểm định chất lượng 5 trục
│   ├── decisions/                 # Architecture Decision Records (ADR-001, ADR-002, ADR-003)
│   ├── references/raw_materials/  # Tài liệu kế hoạch gốc, thể lệ Word (.docx) & ghi chú
│   └── archive/scratch/           # Lưu trữ tài liệu phân tích kỹ thuật
├── public/                        # Tài nguyên Tĩnh & SVG Icons (Svgl)
│   ├── brand/                     # Logo FU-DEVER, FPT University, Posters
│   ├── docs/                      # Sổ tay thí sinh chính thức (.docx)
│   └── icons/                     # Vector SVGL (C, C++, Java, Python, Gemini, DeepSeek, Claude, OpenAI, Docker, Zalo)
├── tests/                         # Vitest Test Suites (52 tests passed 100%)
├── AGENTS.md                      # Chỉ thị Bất biến & Quy chuẩn Vận hành Agent
├── README.md                      # Tài liệu dự án (Tài liệu này)
├── tailwind.config.ts             # Cấu hình Clean Tech Light Theme Tokens
└── vitest.config.mts              # Cấu hình kiểm thử Vitest ESM chuẩn
```

---

## 📐 Quy chuẩn Nhận diện & Bất biến Dự án

1. **Cuộc thi KHÔNG CÓ LOGO CHÍNH THỨC**:
   - Tuyệt đối không tự ý tạo, import, suy đoán hoặc sử dụng file ảnh logo giả lập cho cuộc thi.
   - Nhận diện cuộc thi sử dụng thuần túy **Brand Lockup dạng chữ cao cấp (`AI FOR IMPACT 2026`)** kết hợp **Biểu tượng FPT 3 màu vector chuẩn nhận diện** tại Header, logo chính thức **Trường Đại học FPT Đà Nẵng** và đơn vị bảo trợ công nghệ **CLB Lập Trình FU-DEVER** ([`fudever.com`](https://fudever.com)).
2. **Ngôn ngữ Giao diện**: Giao diện tiếng Việt chuẩn hóa, đã tinh giản bỏ nút chuyển đổi ngôn ngữ để tạo trải nghiệm tập trung.
3. **Bảo tồn Dữ liệu (SSOT)**: Không hardcode bất kỳ con số vận hành nào trực tiếp trong JSX; toàn bộ phải đi qua `site-config.ts`.

---

## 🐞 Về Đơn vị Phát triển — CLB Lập Trình FU-DEVER

<div align="center">
  <a href="https://github.com/fudever-club" target="_blank" rel="noopener noreferrer">
    <img src="./public/brand/logo-dever.png" alt="CLB Lập Trình FU-DEVER Logo" width="140" />
  </a>
  <br />
  <p><strong>CÂU LẠC BỘ LẬP TRÌNH FU-DEVER — TRƯỜNG ĐẠI HỌC FPT ĐÀ NẴNG</strong></p>
  <p><i>"Work hard, Play hard" • EST. 2018</i></p>
</div>

**Câu Lạc Bộ Lập Trình FU-DEVER** là tổ chức học thuật chuyên sâu về Kỹ thuật Phần mềm và Trí tuệ Nhân tạo trực thuộc **Trường Đại học FPT Đà Nẵng**.

- **Sứ mệnh**: Kiến tạo môi trường học thuật đỉnh cao, đồng hành cùng sinh viên từ tư duy giải thuật thi đấu (Competitive Programming) đến phát triển các hệ thống phần mềm quy mô lớn tạo tác động xã hội thực tế.
- **Linh vật**: Bọ cánh cam **Buggy** 🐞 — biểu tượng gánh team, kiên cường diệt bug và tiếp lửa đam mê lập trình cho các thế hệ lập trình viên.
- **Biệt đội hỗ trợ**: Kiến Runner (`run()`), Ong Teamwork, Sâu Commit & Chill, Ếch Striker, Bướm Flow State, Ốc Sên Take it easy.

### Kết nối với FU-DEVER
- 🌐 **Website Chính thức:** [fudever.com](https://fudever.com)
- 📘 **Fanpage Chính thức:** [facebook.com/FPTUDever](https://www.facebook.com/FPTUDever)
- 🐙 **GitHub Organization:** [github.com/fudever-club](https://github.com/fudever-club)
- ✉️ **Email Liên hệ:** `club.dever@gmail.com`
- 📍 **Địa chỉ:** Tòa nhà FPT University, Khu đô thị FPT City, Phường Hòa Hải, Quận Ngũ Hành Sơn, TP. Đà Nẵng

---

<div align="center">
  <a href="https://github.com/fudever-club" target="_blank" rel="noopener noreferrer">
    <img src="./public/brand/logo-dever.png" alt="FU-DEVER Logo" width="90" />
  </a>
  <br />
  <sub>Crafted with passion & precision by <strong>CLB Lập Trình FU-DEVER</strong> © 2026. All rights reserved.</sub>
</div>