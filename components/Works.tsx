import Link from "next/link";

const imgBefore =
  "https://www.figma.com/api/mcp/asset/d6624ad6-52c4-4e24-9975-6be3d07e6377";
const imgAfter =
  "https://www.figma.com/api/mcp/asset/067c1f68-907b-4fc4-b881-e3a42f0d9679";
const arrowIcon =
  "https://www.figma.com/api/mcp/asset/4894d2c0-1c2a-451d-a207-64cb372d93b8";

export default function Works() {
  return (
    <section
      id="works"
      className="relative bg-[#fcfaf2] overflow-hidden py-20"
    >
      <div className="max-w-[1440px] mx-auto px-[56px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WORKS
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            施工事例
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>

        {/* Before / After container */}
        <div
          className="relative rounded-[100px] overflow-hidden py-16 px-[110px]"
          style={{ background: "#fff3bc" }}
        >
          <div className="flex gap-[40px] items-start justify-center">
            {/* Before */}
            <div className="flex-1 max-w-[484px]">
              <div className="relative">
                <h3
                  className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Before
                </h3>
                <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-6" />
                {/* Image frame */}
                <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgBefore}
                    alt="施工前"
                    className="w-[347px] h-[462px] object-contain"
                  />
                </div>
              </div>
              <p
                className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] mt-6"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                黒ずみやコケが目立ち、全体的にくすんだ状態。
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center pt-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={arrowIcon}
                alt=""
                className="w-[58px] h-[58px] rotate-90"
              />
            </div>

            {/* After */}
            <div className="flex-1 max-w-[479px]">
              <div className="relative">
                <h3
                  className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  After
                </h3>
                <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-6" />
                {/* Image frame */}
                <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgAfter}
                    alt="施工後"
                    className="w-[296px] h-[394px] object-contain rotate-[1.74deg]"
                  />
                </div>
              </div>
              <p
                className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] mt-6"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                丁寧な手洗いにより、自然な白さと輝きを取り戻した状態。
                <br />
                施工をすることで
                <strong>お墓の寿命が長く</strong>
                なります。
              </p>
            </div>
          </div>

          {/* More button */}
          <div className="flex justify-end mt-12">
            <Link
              href="#works-all"
              className="relative inline-flex items-center gap-3 bg-[#edc920] border border-black rounded-full px-8 h-[68px] hover:bg-[#d4b31e] transition-colors"
            >
              <span
                className="text-[20px] font-bold text-black tracking-[1.1px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                もっと見る
              </span>
              <span className="w-[30px] h-[30px] rounded-[50px] bg-[#edc920] border border-black flex items-center justify-center">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1 1L7 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
