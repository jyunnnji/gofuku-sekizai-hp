"use client";
import Link from "next/link";

const imgPhone =
  "https://www.figma.com/api/mcp/asset/2e464737-6571-4b9b-bebe-7964fc69ec33";

export default function Header() {
  return (
    /* 外枠: 100px 固定ヘッダー。ロゴ(194px)・電話(150px)は absolute で下にはみ出す */
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ height: "100px" }}
    >
      {/* ロゴセクション: absolute, h-194px, 左上起点 */}
      <div
        className="absolute top-0 left-0 bg-white flex flex-col items-center justify-center px-[52px] rounded-br-[70px]"
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
        className="flex items-center justify-center bg-white"
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
          { label: "事業内容", href: "#services" },
          { label: "選ばれる理由", href: "#why-us" },
          { label: "施工事例", href: "#works" },
          { label: "会社概要", href: "#company" },
          { label: "お知らせ", href: "#news" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
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
          href="#contact"
          className="bg-[#2f7d4e] border border-black flex items-center justify-center hover:bg-[#235e3a] transition-colors"
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
      <Link
        href="tel:0909406-2085"
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
      </Link>
    </header>
  );
}
