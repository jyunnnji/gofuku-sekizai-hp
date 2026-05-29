import FadeUp from "@/components/ui/FadeUp";

const tableRows = [
  { label: "会社名", value: "五福石材", gray: true },
  { label: "所在地", value: "〒803-0826　小倉北区高峰町3−12", gray: false },
  { label: "電話番号（携帯）", value: "090-9406-2085", gray: true },
  { label: "電話番号（固定）", value: "093-614-6573", gray: false },
  { label: "事業内容", value: "墓石クリーニング / 造園", gray: true },
  { label: "保有資格", value: "墓地清掃士、遺品整理士", gray: false },
  { label: "営業時間", value: "9:00〜17:00（不定休）", gray: true },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative pt-[63px] pb-24 md:pb-[152px] scroll-mt-[100px]"
      style={{ background: "#fff3bc" }}
    >
      {/* Circle: 205px, top=-40px */}
      <div
        className="absolute left-1/2 bg-[#fff3bc] rounded-full w-[205px] h-[205px] pointer-events-none z-0"
        style={{ top: -40, transform: "translateX(-50%)" }}
      />

      {/* Bottom wave — pixel-traced from Figma node 1394:190 */}
      <div className="absolute bottom-0 left-0 right-0 h-[54px] overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 54" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,10 C150,10 350,38 600,38 C850,38 1200,3 1440,3 L1440,54 L0,54 Z"
            fill="#fcfaf2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[165px]">
        <FadeUp>
        {/* COMPANY label — center at y=75px from section top (pt=63 + h=24/2 = 75) */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase leading-[24px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          COMPANY
        </p>

        {/* 会社概要 heading — center at y=140px (63+24+21+64/2=140) */}
        <div className="flex flex-col items-center mt-[21px]">
          <h2
            className="text-[26px] md:text-[40px] font-medium text-[#1a1a1a] tracking-[2px] md:tracking-[4.8px] leading-[40px] md:leading-[64px]"
            style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
          >
            会社概要
          </h2>
          {/* Divider — top=184px (63+24+21+64+12=184) */}
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
        </div>
        </FadeUp>

        {/* White card — top=251px (184+2+65=251) */}
        <FadeUp delay={0.1}>
        <div
          className="bg-white rounded-[30px] overflow-clip mt-[65px] h-auto md:h-[1341px]"
        >
          {/* Table — pt=126px, left=127px, right=126px */}
          <div className="pt-8 md:pt-[126px] px-4 md:pl-[127px] md:pr-[126px]">
            {tableRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col md:flex-row md:items-center border-b border-[#d9d9d9] py-5 md:py-0 ${
                  i === 0 ? "md:h-[75.5px]" : "md:h-[76px]"
                } ${row.gray ? "bg-[#f5f5f5]" : "bg-white"}`}
              >
                {/* Label column: 191px wide (16px padding + content) */}
                <div
                  className="w-full md:w-[191px] pl-3 md:pl-[16px] text-[14px] md:text-[18px] font-medium text-[#2f7d4e] md:text-[#1a1a1a] tracking-[1.2px] shrink-0 mb-2 md:mb-0"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  {row.label}
                </div>
                {/* Value */}
                <div
                  className="text-[15px] md:text-[18px] font-normal text-[#2c2c2c] tracking-[0.8px] leading-[24px] md:leading-[27px] pl-3 md:pl-0"
                  style={{
                    fontFamily: row.label.includes("電話") || row.label === "営業時間"
                      ? "var(--font-inter)"
                      : "var(--font-inter), var(--font-noto-sans-jp)",
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* アクセス heading — center at card top=757px */}
          {/* Table ends at 126+75.5+76×6=657.5px → mt=734-657.5=76.5≈77px */}
          <div className="flex flex-col items-center mt-8 md:mt-[77px]">
            <h3
              className="h-[46px] flex items-center text-[24px] font-medium text-[#1a1a1a] tracking-[4.8px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              アクセス
            </h3>
            {/* Divider — top=780px (right after アクセス bottom) */}
            <div className="w-[40px] h-[2px] bg-[#2f7d4e]" />
          </div>

          {/* Map — top=815px → mt=815-782=33px from divider bottom */}
          <div className="mt-[33px] mx-4 md:mx-[127px] h-[280px] md:h-[400px] overflow-clip rounded-none pb-0">
            <iframe
              src="https://maps.google.com/maps?q=福岡県北九州市小倉北区高峰町3-12&hl=ja&output=embed&z=16"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="五福石材 アクセスマップ"
            />
          </div>
          <div className="h-8 md:h-0" />{/* SP bottom spacer */}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
