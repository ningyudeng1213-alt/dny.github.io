import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Space_Mono } from "next/font/google";
import MusicPlayer from "@/components/MusicPlayer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamnyd.cn"),
  title: "邓甯予 | Creative Storyteller 个人作品集",
  description:
    "南开大学文学硕士，26届应届生，对运营与商业化感兴趣。用研究网文与流行文化的眼光做内容，用数据验证每一个判断。",
  keywords: ["邓甯予", "作品集", "运营", "内容策划", "南开大学"],
  openGraph: {
    title: "邓甯予 | Creative Storyteller 个人作品集",
    description:
      "南开大学文学硕士，26届应届生，对运营与商业化感兴趣。用研究网文与流行文化的眼光做内容，用数据验证每一个判断。",
    url: "https://iamnyd.cn",
    images: [
      {
        url: "/illustration.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${spaceMono.variable} antialiased`}
      >
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
