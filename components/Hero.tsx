"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// 白枠：Figmaの不透明度(0.55)に合わせた8方向白シャドウ＋元のFigmaシャドウ
const whiteBorder =
  "-1px -1px 0 rgba(255,255,255,0.55), 0px -1px 0 rgba(255,255,255,0.55), 1px -1px 0 rgba(255,255,255,0.55), -1px 0px 0 rgba(255,255,255,0.55), 1px 0px 0 rgba(255,255,255,0.55), -1px 1px 0 rgba(255,255,255,0.55), 0px 1px 0 rgba(255,255,255,0.55), 1px 1px 0 rgba(255,255,255,0.55), 0px 4px 4px rgba(255,255,255,0.55)";

// Figmaデザイン基準：1440×820px（ヘッダー100px込み）、セクション高720px
// テキストコンテナはアートボードtop=261px → セクション内top=161px（261-100）
const DESIGN_WIDTH = 1440;
const DESIGN_SECTION_HEIGHT = 720;
const DESIGN_TEXT_TOP = 161;

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [textTop, setTextTop] = useState(DESIGN_TEXT_TOP);

  useEffect(() => {
    const update = () => {
      const sectionH = window.innerHeight - 100;
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      // 高さ方向のスケール（1を超えても拡大しない）
      const scaleY = Math.min(1, sectionH / DESIGN_SECTION_HEIGHT);
      // 両軸の小さい方を採用してコンテンツがはみ出さないようにする
      setScale(Math.min(scaleX, scaleY));
      // topもscaleYに比例させることでFigmaの縦方向比率を維持
      setTextTop(DESIGN_TEXT_TOP * scaleY);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="五福石材 墓石クリーニング"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/40" />
      </div>

      {/* Text content area (1279:650)
          Figma: top-[261px] from artboard top (header overlapping from y=0)
          実装: section が pt-[100px] で y=100 から始まるため 261-100=161px に補正 */}
      <div
        className="absolute left-0 w-[921px] h-[560px]"
        style={{
          top: `${textTop}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >

        {/* Blur background (1278:633) — Figma: h-[560px] rounded-[240.5px] */}
        <div className="absolute left-0 top-0 w-[765px] h-[560px] rounded-[240.5px] bg-[rgba(255,255,255,0.55)] blur-[50px]" />

        {/* Region label (1278:639) — center at (330px, 44.5px) */}
        <p
          className="absolute text-[24px] font-medium text-[#222] text-center whitespace-nowrap"
          style={{
            left: "330px",
            top: "44.5px",
            transform: "translate(-50%, -50%)",
            fontFamily: "var(--font-noto-sans-jp)",
            letterSpacing: "1.5px",
            textShadow: whiteBorder,
          }}
        >
          北九州地域・筑豊地域のお墓掃除は五福石材に
        </p>

        {/* Divider line (1278:638) */}
        <div className="absolute left-[63px] top-[84px] w-[608px] h-[1px]">
          <Image src="/hero-divider-line.svg" alt="" fill />
        </div>

        {/* Title 1 container (1279:648) — w-[609px] h-[67px] */}
        <div className="absolute left-[62px] top-[124px] w-[609px] h-[67px]">
          {/* Yellow underline (1278:640) */}
          <div
            className="absolute h-[35px] top-[32px]"
            style={{
              left: "55.01%",
              right: 0,
              background: "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          {/* Text (1278:642) — center at (298px, 23px) */}
          <div
            className="absolute text-[0px] font-medium text-black text-center whitespace-nowrap tracking-[2px]"
            style={{
              left: "298px",
              top: "23px",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: whiteBorder,
            }}
          >
            <span className="text-[50px] leading-[46px]">お墓の汚れを</span>
            <span className="text-[52px] leading-[46px]">{` `}</span>
            <span className="text-[52px] leading-[46px] text-[#2f7d4e]">丁寧に除去</span>
          </div>
        </div>

        {/* Title 2 container (1279:649) — w-[857px] h-[66px] */}
        <div className="absolute left-[64px] top-[221px] w-[857px] h-[66px]">
          {/* Yellow underline (1278:641) */}
          <div
            className="absolute h-[35px] top-[31px]"
            style={{
              left: "53.68%",
              right: "2.92%",
              background: "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          {/* Text (1278:643) — center at (428.5px, 23px) */}
          <div
            className="absolute text-[0px] font-medium text-black text-center whitespace-nowrap tracking-[2px]"
            style={{
              left: "428.5px",
              top: "23px",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: whiteBorder,
            }}
          >
            <span className="text-[50px] leading-[46px]">ご先祖様の住居を</span>
            <span className="text-[52px] leading-[46px]">{` "`}</span>
            <span className="text-[52px] leading-[46px] text-[#2f7d4e] tracking-[2px]">綺麗に・美しく</span>
            <span className="text-[52px] leading-[46px]">{`"`}</span>
          </div>
        </div>

        {/* Subtitle (1278:637) — left-[63px] center-y at 353px */}
        <p
          className="absolute text-[22px] font-medium text-black whitespace-nowrap"
          style={{
            left: "63px",
            top: "353px",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-noto-sans-jp)",
            letterSpacing: "1.122px",
            lineHeight: "46px",
            textShadow: whiteBorder,
          }}
        >
          お墓の汚れや苔、劣化が気になる方へ。
          <br />
          専用の道具と技術で、心を込めて美しく仕上げます。
        </p>

        {/* CTA Button (1278:634) — left edge 63px, top-[424px] */}
        <Link
          href="#contact"
          className="absolute top-[424px] w-[300px] h-[64px] flex items-center justify-center gap-2 bg-white border border-[#2f7d4e] rounded-[50px] hover:bg-[#f0faf4] transition-colors"
          style={{ left: "63px" }}
        >
          <span
            className="text-[17px] font-bold text-[#2f7d4e]"
            style={{
              fontFamily: "var(--font-noto-sans-jp)",
              letterSpacing: "2.25px",
              lineHeight: "30px",
            }}
          >
            無料見積もりを依頼する
          </span>
          <div className="relative w-[22px] h-[22px] overflow-hidden">
            <Image src="/arrow-icon.svg" alt="" fill />
          </div>
        </Link>
      </div>

      {/* Scroll indicator — bottom aligns with section bottom */}
      <div
        className="absolute bottom-0 flex flex-col items-center h-[145px]"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {/* SCROLL text: flex-1 area with rotate(90deg) centered inside */}
        <div className="flex-1 flex items-center justify-center">
          <p
            className="text-[15px] font-bold text-white tracking-[3px] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              transform: "rotate(90deg)",
            }}
          >
            SCROLL
          </p>
        </div>
        {/* Vertical line */}
        <div className="w-[2px] h-[61px] bg-white" />
      </div>

      {/* Back to top button */}
      <Link
        href="#top"
        className="absolute bottom-[49px] right-[50px] w-[48px] h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] transition-colors"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 15V5M10 5L5 10M10 5L15 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
