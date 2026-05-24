import Link from "next/link";

const heroImage =
  "https://www.figma.com/api/mcp/asset/499f6447-3bce-40de-b00b-b97d7428f6d1";
const arrowIcon =
  "https://www.figma.com/api/mcp/asset/2ee130ee-e511-421f-89bb-8a02f56901b8";

export default function Hero() {
  return (
    <section className="relative w-full h-[821px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt="五福石材 墓石クリーニング"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/40" />
      </div>

      {/* Text content */}
      <div className="absolute left-0 top-[261px] w-[921px] h-[560px]">
        {/* Blur background for text area */}
        <div className="absolute inset-0 w-[765px] rounded-[240px] bg-white/55 blur-[50px]" />

        {/* Region label */}
        <p
          className="absolute left-[63px] top-[44px] text-[24px] font-medium tracking-[1.5px] text-[#222] whitespace-nowrap"
          style={{
            fontFamily: "var(--font-noto-sans-jp)",
            textShadow: "0px 4px 4px rgba(255,255,255,0.55)",
          }}
        >
          北九州地域・筑豊地域のお墓掃除は五福石材に
        </p>

        {/* Divider line */}
        <div className="absolute left-[63px] top-[84px] w-[608px] h-[1px] bg-[#2c2c2c]" />

        {/* Title 1: お墓の汚れを */}
        <div className="absolute left-[62px] top-[124px] h-[67px]">
          {/* Yellow underline */}
          <div
            className="absolute bottom-0 left-[55%] right-0 h-[35px] rounded"
            style={{
              background:
                "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          <p
            className="relative text-[50px] font-medium tracking-[2px] text-black whitespace-nowrap leading-[67px]"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: "0px 4px 4px rgba(255,255,255,0.55)",
            }}
          >
            お墓の汚れを{" "}
            <span className="text-[52px] text-[#2f7d4e]">丁寧に除去</span>
          </p>
        </div>

        {/* Title 2: ご先祖様の住居を */}
        <div className="absolute left-[64px] top-[221px] w-[857px] h-[66px]">
          {/* Yellow underline */}
          <div
            className="absolute bottom-0 left-[54%] right-[3%] h-[35px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(198,221,123,0) 50%, rgba(198,221,123,0.9) 50%)",
            }}
          />
          <p
            className="relative text-[50px] font-medium tracking-[2px] text-black whitespace-nowrap leading-[66px]"
            style={{
              fontFamily: "var(--font-noto-serif-jp)",
              textShadow: "0px 4px 4px rgba(255,255,255,0.55)",
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
        <div className="absolute left-[63px] top-[310px]">
          <p
            className="text-[22px] font-medium tracking-[1.1px] text-black leading-[46px]"
            style={{
              fontFamily: "var(--font-noto-sans-jp)",
              textShadow: "0px 4px 4px rgba(255,255,255,0.55)",
            }}
          >
            お墓の汚れや苔、劣化が気になる方へ。
            <br />
            専用の道具と技術で、心を込めて美しく仕上げます。
          </p>
        </div>

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={arrowIcon} alt="" className="w-[22px] h-[22px]" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[69px] flex flex-col items-center gap-3">
        <p
          className="text-[15px] font-bold text-white tracking-[3px] writing-mode-vertical-rl rotate-90 whitespace-nowrap"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          SCROLL
        </p>
        <div className="w-[2px] h-[61px] bg-white" />
      </div>

      {/* Back to top button */}
      <Link
        href="#top"
        className="absolute bottom-[49px] right-[50px] w-[48px] h-[48px] rounded-[50px] bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] transition-colors"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
