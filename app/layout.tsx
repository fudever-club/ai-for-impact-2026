import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai.impact.fptu.vn'),
  title: {
    default: 'AI for Impact 2026 | FPT University Da Nang',
    template: '%s | AI for Impact 2026',
  },
  description:
    'Cuộc thi học thuật AI Agent quy mô lớn tại Trường Đại học FPT Đà Nẵng: Từ tư duy thuật toán đến giải pháp tạo tác động xã hội.',
  openGraph: {
    title: 'AI for Impact 2026 | Agentic Innovation Challenge',
    description: 'Từ tư duy đến giải pháp tạo tác động – FPT University Da Nang',
    url: 'https://ai.impact.fptu.vn',
    siteName: 'AI for Impact 2026',
    images: [
      {
        url: '/brand/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'AI for Impact 2026 Banner',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Impact 2026',
    description: 'AI for Impact 2026 – Agentic Innovation Challenge',
    images: ['/brand/hero-banner.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '256x256' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
