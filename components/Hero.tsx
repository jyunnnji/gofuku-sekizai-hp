import Link from "next/link";
import Image from "next/image";

// 白枠：文字を囲む8方向の白シャドウ＋Figmaの元シャドウ
const whiteBorder =
  "-1px -1px 0 rgba(255,255,255,0.9), 0px -1px 0 rgba(255,255,255,0.9), 1px -1px 0 rgba(255,255,255,0.9), -1px 0px 0 rgba(255,255,255,0.9), 1px 0px 0 rgba(255,255,255,0.9), -1px 1px 0 rgba(255,255,255,0.9), 0px 1px 0 rgba(255,255,255,0.9), 1px 1px 0 rgba(255,255,255,0.9), 0px 4px 4px rgba(255,255,255,0.55)";

export default function Hero() {
  return (
    <section className="relative w-full h-[820px] overflow-hidden">
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

      {/* Text content area */}
      <div className="absolute left-0 top-[261px] w-[921px] h-[560px]">
        {/* Blur background */}
        <div className="absolute left-0 top-0 w-[765px] h-full rounded-[240px] bg-white/55 blur-[50px]" />

        {/* Region label */}
        <p
          className="absolute left-[63px] top-[44px] text-[24px] font-medium tracking-[1.5px] text-[#222] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-noto-sans-jp)",
            textShadow: whiteBorder,
          }}
        >
          北九州地域・筑豊地域のお墓掃除は五福石材に
        </p>

        {/* Divider line (green, matching Figma) */}
        <div className="absolute left-[63px] top-[84px] w-[608px] h-[1px]">
          <Image src="/hero-divider-line.svg" alt="" fill />
        </div>

        {/* Title 1: お墓の汚れを 丁寧に除去 */}
        <div className="absolute left-[62px] top-[124px] h-[67px]">
          <div
            className="absolute bottom-0 h-[35px] rounded"
            style={{
              left: "55.01%",
              right: 0,
              background:
                "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          <p
            className="relative text-[50px] font-medium tracking-[2px] text-black whitespace-nowrap leading-[67px]"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: whiteBorder,
            }}
          >
            お墓の汚れを{" "}
            <span className="text-[52px] text-[#2f7d4e]">丁寧に除去</span>
          </p>
        </div>

        {/* Title 2: ご先祖様の住居を "綺麗に・美しく" */}
        <div className="absolute left-[64px] top-[221px] w-[857px] h-[66px]">
          <div
            className="absolute bottom-0 h-[35px]"
            style={{
              left: "53.68%",
              right: "2.92%",
              background:
                "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          <p
            className="relative text-[50px] font-medium tracking-[2px] text-black whitespace-nowrap leading-[66px]"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: whiteBorder,
            }}
          >
            ご先祖様の住居を &quot;
            <span className="text-[52px] text-[#2f7d4e] tracking-[2px]">
              綺麗に・美しく
            </span>
            &quot;
          </p>
        </div>

        {/* Subtitle */}
        <p
          className="absolute left-[63px] top-[353px] -translate-y-1/2 text-[22px] font-medium tracking-[1.1px] text-black"
          style={{
            fontFamily: "var(--font-noto-sans-jp)",
            textShadow: whiteBorder,
            lineHeight: "46px",
          }}
        >
          お墓の汚れや苔、劣化が気になる方へ。
          <br />
          専用の道具と技術で、心を込めて美しく仕上げます。
        </p>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="absolute left-[62px] top-[424px] w-[300px] h-[64px] flex items-center justify-center gap-2 bg-white border border-[#2f7d4e] rounded-[50px] hover:bg-[#f0faf4] transition-colors"
        >
          <span
            className="text-[17px] font-bold text-[#2f7d4e] tracking-[2.25px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            無料見積もりを依頼する
          </span>
          <div className="relative w-[22px] h-[22px]">
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
