"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const imgPhone = "/phone-icon.svg";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navHref = (hash: string) => isHome ? hash : `/${hash}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* 外枠: 100px 固定ヘッダー。ロゴ(194px)・電話(150px)は absolute で下にはみ出す */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-transparent" : "bg-white"}`}
      style={{ height: "100px" }}
    >
      {/* ロゴセクション: absolute, h-194px, 左上起点 */}
      <div
        className={`absolute top-0 left-0 bg-white flex flex-col items-center justify-center px-[52px] rounded-br-[70px] transition-opacity duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          width: "338px",
          height: "194px",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          zIndex: 10,
        }}
      >
        <Link
          href="/"
          className="block"
          style={{ width: "233.858px", height: "152.907px", overflow: "clip", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              left: "calc(50% - 0.39px)",
              top: "calc(50% - 0.02px)",
              transform: "translate(-50%, -50%)",
              width: "249.08px",
              height: "162.875px",
              overflow: "clip",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "44.55px",
                top: "57.84px",
                transform: "translateY(-50%)",
                height: "48px",
                width: "159px",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "48px",
                letterSpacing: "3.6px",
                color: "#2f7d4e",
                fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif",
              }}
            >
              五福石材
            </div>
            <div
              style={{
                position: "absolute",
                left: "10.55px",
                top: "114.84px",
                transform: "translateY(-50%)",
                height: "48px",
                width: "227px",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "48px",
                letterSpacing: "3.6px",
                color: "#2f7d4e",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Gofuku Sekizai
            </div>
          </div>
        </Link>
      </div>

      {/* ナビエリア: ロゴ右ボーダーをヘッダー内で隠すためleft:337pxにしbg-whiteで上書き */}
      <nav
        className={`flex items-center justify-center bg-white transition-opacity duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          position: "absolute",
          top: 0,
          left: "337px",
          right: "155px",
          height: "100px",
          gap: "52px",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          zIndex: 10,
        }}
      >
        {[
          { label: "事業内容", hash: "#services" },
          { label: "選ばれる理由", hash: "#why-us" },
          { label: "施工事例", hash: "#works" },
          { label: "会社概要", hash: "#company" },
          { label: "お知らせ", hash: "#news" },
        ].map((item) => (
          <Link
            key={item.label}
            href={navHref(item.hash)}
            className="whitespace-nowrap text-black hover:text-[#2f7d4e] transition-colors"
            style={{
              fontFamily: "var(--font-noto-sans-jp), sans-serif",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "21.6px",
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* お問い合わせボタン */}
        <Link
          href="/contact"
          className="bg-[#2f7d4e] border border-black flex items-center justify-center hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          style={{
            gap: "10px",
            height: "60px",
            padding: "14px 24px",
            borderRadius: "30px",
            width: "200px",
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" style={{ flexShrink: 0 }}>
            <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: "var(--font-noto-sans-jp), sans-serif",
              fontSize: "18px",
              lineHeight: "21.6px",
            }}
          >
            お問い合わせ
          </span>
        </Link>
      </nav>

      {/* お電話はこちらから: absolute, 右上起点, h-150px で下にはみ出す */}
      <button
        onClick={() => setShowPhoneDialog(true)}
        className="absolute top-0 right-0 bg-[#edc920] hover:bg-[#d4b31e] transition-colors"
        style={{
          width: "155px",
          height: "150px",
          borderRadius: "0 0 0 50px",
          border: "1px solid black",
          zIndex: 10,
        }}
      >
        {/* 電話アイコン */}
        <div
          style={{
            position: "absolute",
            top: "calc(16.67% - 0.67px)",
            left: "calc(41.04% - 0.18px)",
            right: "calc(38.13% - 0.24px)",
            bottom: "calc(59.33% + 0.19px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgPhone} alt="" className="absolute inset-0 w-full h-full block" />
        </div>

        {/* テキスト */}
        <div
          style={{
            position: "absolute",
            left: "calc(50% + 2.5px)",
            top: "calc(50% + 26.5px)",
            transform: "translate(-50%, -50%)",
            width: "102px",
            height: "39px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "var(--font-noto-sans-jp), sans-serif",
            fontSize: "18px",
            color: "white",
            textAlign: "center",
            letterSpacing: "1.8px",
            lineHeight: "19.5px",
          }}
        >
          <p>お電話は</p>
          <p>こちらから</p>
        </div>
      </button>

      {/* 電話番号ダイアログ */}
      {showPhoneDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowPhoneDialog(false)}
        >
          <div
            className="relative bg-white rounded-[24px] w-[560px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー部 */}
            <div className="pt-[40px] pb-[28px] px-[48px] text-center border-b border-[#e8e8e8]">
              <p
                className="text-[13px] text-[#2f7d4e] tracking-[3px] uppercase mb-[6px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Contact
              </p>
              <h2
                className="text-[22px] font-medium text-[#1a1a1a] tracking-[1.5px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                お電話でのお問い合わせ
              </h2>
              {/* 閉じるボタン */}
              <button
                onClick={() => setShowPhoneDialog(false)}
                className="absolute top-[16px] right-[16px] w-[36px] h-[36px] rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors"
                aria-label="閉じる"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* 電話番号リスト */}
            <div className="px-[40px] py-[28px] flex flex-col gap-[12px]">
              <a
                href="tel:090-9406-2085"
                className="flex items-center gap-[16px] px-[24px] h-[72px] bg-[#fcfaf2] rounded-[12px] hover:bg-[#edf7f1] transition-colors group"
              >
                <span
                  className="w-[48px] shrink-0 text-[14px] font-medium text-[#444444] tracking-[1px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  携帯
                </span>
                <div className="w-[1px] h-[24px] bg-[#d9d9d9]" />
                <span
                  className="text-[28px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[2px] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  090-9406-2085
                </span>
              </a>
              <a
                href="tel:093-614-6573"
                className="flex items-center gap-[16px] px-[24px] h-[72px] bg-[#fcfaf2] rounded-[12px] hover:bg-[#edf7f1] transition-colors group"
              >
                <span
                  className="w-[48px] shrink-0 text-[14px] font-medium text-[#444444] tracking-[1px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  固定
                </span>
                <div className="w-[1px] h-[24px] bg-[#d9d9d9]" />
                <span
                  className="text-[28px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[2px] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  093-614-6573
                </span>
              </a>
            </div>

            {/* フッター */}
            <div className="px-[40px] pb-[28px]">
              <p
                className="text-center text-[13px] text-[#444444] tracking-[0.8px] py-[16px] border-t border-[#e8e8e8]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                受付時間：9:00〜17:00（不定休）
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
