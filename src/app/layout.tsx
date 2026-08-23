import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const hand = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "박혜진 — 덜 피곤한 기록터를 만들어 보고 싶습니다",
  description:
    "F&B에서 브랜드 기획/운영/마케팅 일을 하고 있으며, 덜 피곤한 기록터를 만들어 보고 싶습니다.",
  openGraph: {
    title: "박혜진 — 덜 피곤한 기록터를 만들어 보고 싶습니다",
    description:
      "F&B에서 브랜드 기획/운영/마케팅 일을 하고 있으며, 덜 피곤한 기록터를 만들어 보고 싶습니다.",
    type: "profile",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${hand.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
