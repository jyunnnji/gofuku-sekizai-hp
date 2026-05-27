import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

// 1261:58 — Before image (ChatGPT_Image removebg)
const imgBefore =
  "https://www.figma.com/api/mcp/asset/42d32aa1-fab3-44e6-b4b9-41e6c3c0f264";
// 1261:62 — After image (IMG_3663 removebg)
const imgAfter =
  "https://www.figma.com/api/mcp/asset/df6689f6-07c2-4ba3-a29e-1910a7ac6f76";
const imgButtonArrow =
  "https://www.figma.com/api/mcp/asset/fc8d1aa9-6663-481b-8e15-fab4420fa50e";

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
      className="relative bg-[#fcfaf2] overflow-hidden pt-[50px] pb-[144px] scroll-mt-[100px]"
    >
      <div className="max-w-[1440px] mx-auto px-[56px]">
        <FadeUp>
        {/* Section label — center at y=62px (pt=50 + h=24/2) */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WORKS
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-[59px]">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
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
          className="relative rounded-[100px] overflow-hidden pt-[72px] pb-[76px] px-[110px]"
          style={{ background: "#fff3bc" }}
        >
          <div className="flex gap-[40px] items-start justify-center">
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
              className="group relative inline-flex items-center gap-3 bg-[#edc920] border border-black rounded-full px-8 h-[68px] hover:bg-[#d4b31e] transition-colors"
            >
              <span
                className="text-[20px] font-bold text-black tracking-[1.1px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                もっと見る
              </span>
              <span className="w-[30px] h-[30px] rounded-[50px] bg-[#edc920] border border-black flex items-center justify-center transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
