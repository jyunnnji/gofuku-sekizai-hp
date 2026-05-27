"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const SESSION_KEY = "gofuku_intro_played";

// SSR では useEffect、クライアントでは useLayoutEffect（描画前に同期実行）
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function LoadingIntro() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Always remove the class — reveals body whether or not animation plays
    document.documentElement.classList.remove("js-intro-active");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    setVisible(true);

    const t1 = setTimeout(() => setExiting(true), 1900);
    const t2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#F7F6F2" }}
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={
        exiting
          ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
    >
      {/* 背景装飾：favicon SVG をグレースケール＆超低 opacity で表示 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/favicon.svg"
          alt=""
          width={520}
          height={520}
          className="object-contain"
          style={{ filter: "grayscale(1)" }}
        />
      </motion.div>

      {/* タグライン */}
      <motion.p
        className="relative text-center text-[14px] text-[#555555] tracking-[2px] leading-[2.2]"
        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0 }}
      >
        ご先祖様の安らかなお眠りを
        <br />
        サポートさせて頂きます
      </motion.p>

      {/* 五福石材 ロゴ */}
      <motion.p
        className="relative text-[46px] font-bold text-[#2f7d4e] tracking-[8px] mt-[18px]"
        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      >
        五福石材
      </motion.p>

      {/* 緑の細いライン */}
      <motion.div
        className="relative mt-[28px] h-[1.5px] bg-[#2f7d4e] w-[100px]"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
      />
    </motion.div>
  );
}
