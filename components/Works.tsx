import Link from "next/link";

const imgBefore =
  "https://www.figma.com/api/mcp/asset/e1c9fa17-1626-4f99-9a8b-3dedda5321e9";
const imgAfter =
  "https://www.figma.com/api/mcp/asset/9cb297f9-6c2a-4c43-8263-554555d0299b";
const imgButtonArrow =
  "https://www.figma.com/api/mcp/asset/fc8d1aa9-6663-481b-8e15-fab4420fa50e";

function CenterArrow() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="29" cy="29" r="29" fill="#F4C430" />
      {/* Solid right-pointing arrow: shaft + arrowhead */}
      <path d="M12 24H32V18L46 29L32 40V34H12V24Z" fill="white" />
    </svg>
  );
}

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

        {/* Before / After container — 1328×877 card per Figma */}
        <div
          className="relative rounded-[100px] overflow-hidden py-16 px-[110px]"
          style={{ background: "#fff3bc" }}
        >
          <div className="flex gap-[40px] items-start justify-center">
            {/* Before */}
            <div className="flex-1 max-w-[484px]">
              <h3
                className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Before
              </h3>
              <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-6" />
              {/* Image frame: 484×453 per Figma */}
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px]">
                {/* Image container: 347×462 at (52px, 29px) within frame per Figma */}
                <div className="absolute left-[52px] top-[29px] w-[347px] h-[462px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgBefore}
                    alt="施工前"
                    className="absolute inset-0 w-full h-full object-cover"
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

            {/* Arrow — centered at frame midpoint (frames top ~79px, height 453px → center at 305px, arrow half=29px → pt=255px+flex-row offset) */}
            <div className="flex items-start justify-center pt-[255px]">
              <CenterArrow />
            </div>

            {/* After */}
            <div className="flex-1 max-w-[478px]">
              <h3
                className="text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                After
              </h3>
              <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-6" />
              {/* Image frame: 478×453 per Figma */}
              <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[453px]">
                {/* Image container: 308×403 at (103px, 25px) within frame, rotated 1.74deg per Figma */}
                <div className="absolute left-[103px] top-[25px] w-[308px] h-[403px] rotate-[1.74deg]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgAfter}
                    alt="施工後"
                    className="absolute inset-0 w-full h-full object-cover"
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

          {/* More button — centered per Figma */}
          <div className="flex justify-center mt-12">
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgButtonArrow} alt="" className="w-[8px] h-[12px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
