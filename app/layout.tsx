import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import LoadingIntro from "@/components/LoadingIntro";
import ViewportScale from "@/components/ViewportScale";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-jp",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "五福石材 | 北九州のお墓クリーニング・造園",
  description:
    "北九州地域・筑豊地域のお墓掃除は五福石材に。墓石クリーニング・造園を通じて、ご先祖様の安らかなお眠りをサポートします。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
        {/* Runs before body renders — hides content until LoadingIntro takes over */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(!sessionStorage.getItem('gofuku_intro_played')&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-intro-active');document.documentElement.style.background='#F7F6F2';}}catch(e){}})();` }} />
      </head>
      <body>
        <ViewportScale />
        <LoadingIntro />
        {children}
        <SideMenu />
      </body>
    </html>
  );
}
