# CodeMosaic 2025 🚀

> **Piece by Piece, Build the Perfect Solution**

Trang web chính thức cho cuộc thi lập trình CodeMosaic 2025 tại Đại học FPT Đà Nẵng.

## 🌟 Tính năng

- ✨ **Responsive Design** - Tương thích mọi thiết bị
- 🌐 **Đa ngôn ngữ** - Hỗ trợ Tiếng Việt và English
- 🎭 **Animations** - Hiệu ứng mượt mà với Framer Motion & GSAP
- 🎨 **Matrix Background** - Hiệu ứng code rơi độc đáo
- 📱 **Modern UI** - Giao diện hiện đại với Tailwind CSS
- ⚡ **Performance** - Tối ưu tốc độ tải trang

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Internationalization**: [react-i18next](https://react.i18next.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js 18+
- npm hoặc yarn hoặc pnpm

### Cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/LeDucAnhPhuong/CodeMosaic.git
   cd codemosaic-2025
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

4. **Mở trình duyệt**
   ```
   http://localhost:3000
   ```

## 📜 Scripts

```bash
# Development
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Chạy production server
npm run lint         # Lint code với ESLint
npm run typecheck    # Kiểm tra TypeScript
```

## 📁 Cấu trúc thư mục

```
codemosaic-2025/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Radix)
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Hero section với matrix background
│   ├── IntroSection.tsx  # Giới thiệu cuộc thi
│   ├── RulesSection.tsx  # Thể lệ cuộc thi
│   └── ...               # Các sections khác
├── lib/                  # Utilities
│   └── i18n.ts          # Internationalization config
├── public/              # Static assets
│   └── images/         # Images
└── package.json        # Dependencies & scripts
```

## 🌐 Internationalization

Website hỗ trợ 2 ngôn ngữ:
- 🇻🇳 **Tiếng Việt** (mặc định)
- 🇺🇸 **English**

Chuyển đổi ngôn ngữ bằng button ở góc trên bên phải.

## 🎨 Customization

### Colors

Màu chủ đạo được định nghĩa trong `globals.css`:
```css
.text-fpt-orange { color: #f37021; }
.bg-fpt-orange { background-color: #f37021; }
```

### Animations

- **Framer Motion**: Animations cho UI components
- **GSAP**: Matrix code background effect
- **CSS**: Typewriter effect và transitions

## 📱 Responsive Breakpoints

```css
sm: 640px   # Mobile landscape
md: 768px   # Tablet
lg: 1024px  # Desktop small
xl: 1280px  # Desktop large
2xl: 1536px # Desktop extra large
```

## 🔧 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Connect repository với [Vercel](https://vercel.com/)
3. Deploy tự động

### Manual Build

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Common Issues

1. **Node.js version**: Đảm bảo Node.js >= 18
2. **Port conflict**: Thay đổi port nếu 3000 đã được sử dụng
   ```bash
   npm run dev -- -p 3001
   ```
3. **Dependencies issues**: Xóa `node_modules` và reinstall
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Performance

- ✅ Images được tối ưu với Next.js Image component
- ✅ Lazy loading cho animations
- ✅ Code splitting tự động
- ✅ Static generation cho tốc độ tải nhanh

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Email**: contact@fpt.edu.vn
- **Phone**: 0236 3667 300
- **Website**: [CodeMosaic 2025](https://codemosaic2025.fpt.edu.vn)

---

<p align="center">
  <strong>🏆 CodeMosaic 2025 - Cuộc thi Lập trình FPT Đà Nẵng</strong><br>
  Made with ❤️ by FPT University Danang
</p>