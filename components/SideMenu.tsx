"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "事業内容", hash: "#services" },
  { label: "選ばれる理由", hash: "#why-us" },
  { label: "施工事例", hash: "#works" },
  { label: "会社概要", hash: "#company" },
  { label: "お知らせ", hash: "#news" },
];

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Toggle button — hamburger icon in header (SP only) */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="メニューを開く"
        className={`md:hidden fixed top-0 right-0 z-50 bg-white border-b border-black flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ width: "60px", height: "100px" }}
      >
        {/* Hamburger icon — Figma asymmetric split-line pattern */}
        <div className="relative" style={{ width: "30px", height: "18px" }}>
          {/* top line left piece */}
          <div className="absolute bg-[#1a1a1a] rounded-[1px]" style={{ left: 0, width: "12px", top: 0, height: "2px" }} />
          {/* top line right piece */}
          <div className="absolute bg-[#1a1a1a] rounded-[1px]" style={{ left: "16px", right: 0, top: 0, height: "2px" }} />
          {/* middle full line */}
          <div className="absolute bg-[#1a1a1a] rounded-[1px]" style={{ left: 0, right: 0, top: "8px", height: "2px" }} />
          {/* bottom line left piece */}
          <div className="absolute bg-[#1a1a1a] rounded-[1px]" style={{ left: 0, width: "18px", top: "16px", height: "2px" }} />
          {/* bottom line right piece */}
          <div className="absolute bg-[#1a1a1a] rounded-[1px]" style={{ left: "22px", right: 0, top: "16px", height: "2px" }} />
        </div>
      </button>

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-white border-l border-black flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "360px" }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-10 pb-8 border-b border-[#e8e8e8]"
          style={{ paddingTop: "120px" }}
        >
          <div>
            <p
              className="text-[12px] text-[#2f7d4e] tracking-[3px] uppercase mb-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Navigation
            </p>
            <p
              className="text-[22px] font-bold text-[#1a1a1a] tracking-[2px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              メニュー
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-[44px] h-[44px] border border-black rounded-full flex items-center justify-center hover:bg-[#f0f0f0] transition-colors"
            aria-label="メニューを閉じる"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-10 py-6 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={navHref(item.hash)}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-5 border-b border-[#e8e8e8] group"
            >
              <span
                className="text-[18px] font-bold text-[#1a1a1a] tracking-[1.5px] group-hover:text-[#2f7d4e] transition-colors"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {item.label}
              </span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                className="text-[#1a1a1a] group-hover:text-[#2f7d4e] transition-colors"
              >
                <path
                  d="M1 1L7 6.5L1 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}

          {/* お問い合わせボタン */}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 bg-[#2f7d4e] border border-black rounded-full h-[60px] hover:bg-[#3d9962] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-white text-[18px] font-bold tracking-[1px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                お問い合わせ
              </span>
            </Link>
          </div>
        </nav>

        {/* Footer — phone contact */}
        <div className="px-10 pt-6 pb-10 border-t border-[#e8e8e8]">
          <p
            className="text-[12px] text-[#444444] tracking-[0.8px] mb-4"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            受付時間：9:00〜17:00（不定休）
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:090-9406-2085"
              className="text-[22px] font-medium text-[#1a1a1a] tracking-[1.5px] hover:text-[#2f7d4e] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              090-9406-2085
            </a>
            <a
              href="tel:093-614-6573"
              className="text-[22px] font-medium text-[#1a1a1a] tracking-[1.5px] hover:text-[#2f7d4e] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              093-614-6573
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
