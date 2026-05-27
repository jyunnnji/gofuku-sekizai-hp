"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SESSION_KEY = "gofuku_intro_played";

// 白枠：Figmaの不透明度(0.55)に合わせた8方向白シャドウ＋元のFigmaシャドウ
const whiteBorder =
  "-1px -1px 0 rgba(255,255,255,0.55), 0px -1px 0 rgba(255,255,255,0.55), 1px -1px 0 rgba(255,255,255,0.55), -1px 0px 0 rgba(255,255,255,0.55), 1px 0px 0 rgba(255,255,255,0.55), -1px 1px 0 rgba(255,255,255,0.55), 0px 1px 0 rgba(255,255,255,0.55), 1px 1px 0 rgba(255,255,255,0.55), 0px 4px 4px rgba(255,255,255,0.55)";

// SP専用：白枠 ＋ 淡いダークシャドウで明るい背景でも自然な可読性を確保
const spTextShadow = `${whiteBorder}, 0 1px 6px rgba(0,0,0,0.13)`;
const spHeadingShadow = `${whiteBorder}, 0 1px 8px rgba(0,0,0,0.16)`;

// Figmaデザイン基準：1440×820px（ヘッダー100px込み）、セクション高720px
// テキストコンテナはアートボードtop=261px → セクション内top=161px（261-100）
const DESIGN_WIDTH = 1440;
const DESIGN_SECTION_HEIGHT = 720;
const DESIGN_TEXT_TOP = 161;

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [textTop, setTextTop] = useState(DESIGN_TEXT_TOP);
  const [animReady, setAnimReady] = useState(false);

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

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      // ローディングアニメーション終了（2700ms）に合わせて開始
      const t = setTimeout(() => setAnimReady(true), 2700);
      return () => clearTimeout(t);
    } else {
      setAnimReady(true);
    }
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-100px)] min-h-[92svh] md:min-h-0 overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={animReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero-bg.png"
          alt="五福石材 墓石クリーニング"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/40" />
      </motion.div>

      {/* ── SP テキストオーバーレイ ── */}
      <motion.div
        className="md:hidden absolute inset-x-0 top-[40px] px-5 text-center"
        initial={{ opacity: 0, y: 14 }}
        animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {/* ぼかし背景 */}
        <div className="absolute inset-0 rounded-[24px] bg-white/60 blur-[20px] -z-10" />
        <p
          className="text-[13px] font-medium text-[#1a1a1a] tracking-[1px] mb-3"
          style={{ fontFamily: "var(--font-inter)", textShadow: spTextShadow }}
        >
          北九州地域・筑豊地域のお墓掃除は五福石材に
        </p>
        <h1
          className="text-[26px] font-medium text-black leading-[42px] mb-1 tracking-[1px]"
          style={{ fontFamily: "var(--font-noto-serif-jp)", textShadow: spHeadingShadow }}
        >
          お墓の汚れを<span className="text-[#2f7d4e]">丁寧に除去</span>
        </h1>
        <h1
          className="text-[22px] font-medium text-black leading-[36px] mb-4 tracking-[1px]"
          style={{ fontFamily: "var(--font-noto-serif-jp)", textShadow: spHeadingShadow }}
        >
          ご先祖様の住居を<br />&quot;<span className="text-[#2f7d4e]">綺麗に・美しく</span>&quot;
        </h1>
        <p
          className="text-[13px] font-medium text-black mb-6 leading-[24px]"
          style={{ fontFamily: "var(--font-inter)", textShadow: spTextShadow }}
        >
          お墓の汚れや苔、劣化が気になる方へ。<br />
          専用の道具と技術で、心を込めて美しく仕上げます。
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 w-full max-w-[280px] h-[52px] bg-white border border-[#2f7d4e] rounded-[50px] hover:bg-[#2f7d4e] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[1.02] transition-all duration-300 group"
        >
          <span
            className="text-[14px] font-bold text-[#2f7d4e] group-hover:text-white transition-colors duration-300 tracking-[1.5px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            無料見積もりを依頼する
          </span>
          <svg
            className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-white text-[#2f7d4e]"
            width="16" height="16" viewBox="0 0 18 18" fill="none"
          >
            <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>

      {/* ── PC テキストコンテナ (1279:650) ── */}
      {/* Text content area (1279:650)
          Figma: top-[261px] from artboard top (header overlapping from y=0)
          実装: section が pt-[100px] で y=100 から始まるため 261-100=161px に補正 */}
      <div
        className="hidden md:block absolute left-0 w-[921px] h-[560px]"
        style={{
          top: `${textTop}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >

        {/* Blur background (1278:633) — Figma: h-[560px] rounded-[240.5px] */}
        <div className="absolute left-0 top-0 w-[765px] h-[560px] rounded-[240.5px] bg-[rgba(255,255,255,0.55)] blur-[50px]" />

        {/* Region label (1278:639) — center at (330px, 44.5px) */}
        <motion.p
          className="absolute text-[24px] font-medium text-[#1a1a1a] text-center whitespace-nowrap"
          style={{
            left: "330px",
            top: "44.5px",
            fontFamily: "var(--font-inter)",
            letterSpacing: "1.5px",
            textShadow: whiteBorder,
          }}
          transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
          initial={{ opacity: 0, y: 14 }}
          animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          北九州地域・筑豊地域のお墓掃除は五福石材に
        </motion.p>

        {/* Divider line (1278:638) */}
        <motion.div
          className="absolute left-[63px] top-[84px] w-[608px] h-[1px]"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={animReady ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        >
          <Image src="/images/hero/hero-divider-line.svg" alt="" fill />
        </motion.div>

        {/* Title 1 container (1279:648) — w-[609px] h-[67px] */}
        <motion.div
          className="absolute left-[62px] top-[124px] w-[609px] h-[67px]"
          initial={{ opacity: 0, y: 18 }}
          animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        >
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
        </motion.div>

        {/* Title 2 container (1279:649) — w-[857px] h-[66px] */}
        <motion.div
          className="absolute left-[64px] top-[221px] w-[857px] h-[66px]"
          initial={{ opacity: 0, y: 18 }}
          animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        >
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
            <span className="text-[52px] leading-[46px]">{` “`}</span>
            <span className="text-[52px] leading-[46px] text-[#2f7d4e] tracking-[2px]">綺麗に・美しく</span>
            <span className="text-[52px] leading-[46px]">{`”`}</span>
          </div>
        </motion.div>

        {/* Subtitle (1278:637) — left-[63px] center-y at 353px */}
        <motion.p
          className="absolute text-[22px] font-medium text-black whitespace-nowrap"
          style={{
            left: "63px",
            top: "353px",
            fontFamily: "var(--font-inter)",
            letterSpacing: "1.122px",
            lineHeight: "46px",
            textShadow: whiteBorder,
          }}
          transformTemplate={(_, generated) => `translateY(-50%) ${generated}`}
          initial={{ opacity: 0, y: 14 }}
          animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
        >
          お墓の汚れや苔、劣化が気になる方へ。
          <br />
          専用の道具と技術で、心を込めて美しく仕上げます。
        </motion.p>

        {/* CTA Button (1278:634) — left edge 63px, top-[424px] */}
        <motion.div
          className="absolute"
          style={{ top: "424px", left: "63px" }}
          initial={{ opacity: 0, y: 14 }}
          animate={animReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
        >
        <Link
          href="/contact"
          className="group w-[300px] h-[64px] flex items-center justify-center gap-2 bg-white border border-[#2f7d4e] rounded-[50px] hover:bg-[#2f7d4e] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <span
            className="text-[17px] font-bold text-[#2f7d4e] group-hover:text-white transition-colors duration-200"
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "2.25px",
              lineHeight: "30px",
            }}
          >
            無料見積もりを依頼する
          </span>
          <svg className="transition-colors duration-200" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2f7d4e] group-hover:text-white transition-colors duration-200" />
          </svg>
        </Link>
        </motion.div>
      </div>{/* end hidden md:block (PC text) */}

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
        {/* Vertical line: overflow-hidden で上から下へ流れるアニメーション */}
        <div className="relative w-[2px] h-[61px] overflow-hidden">
          <div className="absolute inset-x-0 h-full bg-white animate-scroll-line" />
        </div>
      </div>

      {/* Back to top button — fixed to viewport */}
      <Link
        href="#top"
        className="fixed bottom-4 right-4 md:bottom-[49px] md:right-[50px] z-50 w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
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
