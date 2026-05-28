import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const imgBefore      = "/images/works/works-before.png";
const imgAfter       = "/images/works/works-after.png";
// SP版：透明余白をトリミング済み（中央配置ズレ防止）
const imgBeforeSP    = "/images/works/works-before-trimmed.png";
const imgAfterSP     = "/images/works/works-after-trimmed.png";
const imgButtonArrow = "/images/works/works-button-arrow.svg";

function CenterArrow() {
  return (
    <svg width="88" height="88" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#F4C430" />
      <path d="M21 41H55V31L79 50L55 69V59H21V41Z" fill="white" />
    </svg>
  );
}

export default function Works() {
  return (
    <section
      id="works"
      className="relative bg-[#fcfaf2] overflow-hidden pt-[50px] pb-24 md:pb-[144px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[56px]">
        <FadeUp>
        {/* Section label — center at y=62px (pt=50 + h=24/2) */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WORKS
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-6 md:mb-[59px]">
          <h2
            className="text-[26px] md:text-[40px] font-medium text-[#1a1a1a] tracking-[2px] md:tracking-[4.8px] leading-[40px] md:leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            施工事例
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
        </div>
        </FadeUp>

        {/* Before / After container — 1328×877 card per Figma */}
        <FadeUp delay={0.1}>
        <div
          className="relative rounded-[30px] md:rounded-[100px] overflow-hidden pt-8 md:pt-[72px] pb-8 md:pb-[76px] px-4 md:px-[110px]"
          style={{ background: "#fff3bc" }}
        >
          {/* ── SP: 縦積みレイアウト ── */}
          <div className="md:hidden flex flex-col gap-6">
            {/* SP Before */}
            <div>
              <h3
                className="text-[24px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[8px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >Before</h3>
              <div className="w-[100px] h-[2px] bg-[#2f7d4e] mb-[14px]" />
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[16px] overflow-hidden h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgBeforeSP} alt="施工前" className="absolute inset-0 w-full h-full object-contain object-center" />
              </div>
              <p className="text-[15px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] mt-[10px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                黒ずみやコケが目立ち、全体的にくすんだ状態。
              </p>
            </div>
            {/* SP Arrow (down) */}
            <div className="flex justify-center">
              <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#F4C430" />
                <path d="M41 21H59V55H69L50 79L31 55H41V21Z" fill="white" />
              </svg>
            </div>
            {/* SP After */}
            <div>
              <h3
                className="text-[24px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[8px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >After</h3>
              <div className="w-[100px] h-[2px] bg-[#2f7d4e] mb-[14px]" />
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[16px] overflow-hidden h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgAfterSP} alt="施工後" className="absolute inset-0 w-full h-full object-contain object-center" />
              </div>
              <p className="text-[15px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] mt-[10px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                丁寧な手洗いにより、自然な白さと輝きを取り戻した状態。
                <br />施工をすることで<strong style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(234,109,98,0.4) 50%)" }}>お墓の寿命が長く</strong>なります。
              </p>
            </div>
          </div>

          {/* ── PC: 横並びレイアウト ── */}
          <div className="hidden md:flex gap-[40px] items-start justify-center">
            {/* Before */}
            <div className="flex-1 max-w-[484px]">
              <h3
                className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[13px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Before
              </h3>
              <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-[29px]" />
              {/* Image frame: 484×453 per Figma node 1261:57 */}
              <div className="transition-transform duration-300 ease-out hover:scale-[1.03]">
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px]">
                {/* 1261:58 — Before image: 347×462 at (52, 29) within frame */}
                <div className="absolute left-[52px] top-[29px] w-[347px] h-[462px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgBefore}
                    alt="施工前"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
                {/* 1261:71 — backdrop-blur strip */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: 246,
                    top: 35,
                    width: 19,
                    height: 122,
                    backdropFilter: "blur(45px)",
                    WebkitBackdropFilter: "blur(45px)",
                    backgroundColor: "rgba(205,200,178,0.1)",
                  }}
                />
              </div>
              </div>
              <p
                className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] mt-[14px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                黒ずみやコケが目立ち、全体的にくすんだ状態。
              </p>
            </div>

            {/* Arrow — positioned at 27% from top of image frame per Figma */}
            <div className="flex items-start justify-center pt-[255px]">
              <CenterArrow />
            </div>

            {/* After */}
            <div className="flex-1 max-w-[478px]">
              <h3
                className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[10px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                After
              </h3>
              <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-[27px]" />
              {/* Image frame: 478×453 per Figma node 1261:61 */}
              <div className="transition-transform duration-300 ease-out hover:scale-[1.03]">
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px]">
                {/* 1261:62 — After image: 308×403 at (103, 25), rotated 1.74deg */}
                <div className="absolute left-[103px] top-[25px] w-[308px] h-[403px] rotate-[1.74deg]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgAfter}
                    alt="施工後"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                </div>
                {/* 1261:72 — backdrop-blur strip */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: 254,
                    top: 35,
                    width: 17,
                    height: 122,
                    backdropFilter: "blur(45px)",
                    WebkitBackdropFilter: "blur(45px)",
                    backgroundColor: "rgba(170,178,167,0.1)",
                  }}
                />
              </div>
              </div>
              <p
                className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] mt-[14px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                <span className="whitespace-nowrap">丁寧な手洗いにより、自然な白さと輝きを取り戻した状態。</span>
                <br />
                施工をすることで
                <strong style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(234,109,98,0.4) 50%)" }}>お墓の寿命が長く</strong>
                なります。
              </p>
            </div>
          </div>

          {/* More button — centered per Figma */}
          <div className="flex justify-center mt-[33px]">
            <Link
              href="/works"
              className="w-[320px] h-[59px] bg-[#edc920] border border-black rounded-full text-[18px] font-medium text-black tracking-[2.25px] hover:bg-[#d4b31e] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 relative flex items-center justify-center"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              もっと見る
              <svg className="absolute right-[20px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
