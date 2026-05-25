const mapImage =
  "https://www.figma.com/api/mcp/asset/efaf2d0b-9c9b-4424-a911-7f18b03ee7d3";

const tableRows = [
  { label: "会社名", value: "五福石材", bg: false },
  { label: "所在地", value: "〒803-0826　小倉北区高峰町3−12", bg: true },
  { label: "電話番号（携帯）", value: "090-9406-2085", bg: false },
  { label: "電話番号（固定）", value: "093-614-6573", bg: true },
  { label: "事業内容", value: "墓石クリーニング / 造園", bg: false },
  { label: "保有資格", value: "墓地清掃士、遺品整理士", bg: true },
  { label: "営業時間", value: "9:00〜17:00（不定休）", bg: false },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative pt-[130px] pb-20"
      style={{ background: "#fff3bc" }}
    >
      {/* Decorative circle peaking above section top (cream = previous section bg) */}
      <div
        className="absolute left-1/2 bg-[#fff3bc] rounded-full w-[160px] h-[160px] pointer-events-none"
        style={{ top: 0, transform: "translate(-50%, -50%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-[165px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          COMPANY
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            会社概要
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>

        {/* Table + Access */}
        <div className="bg-white rounded-[30px] overflow-hidden p-0">
          {/* Company info table */}
          <div className="px-[127px] pt-[50px]">
            {tableRows.map((row) => (
              <div
                key={row.label}
                className={`flex items-center border-b border-[#d9d9d9] h-[76px] ${
                  row.bg ? "bg-[#f5f5f5]" : "bg-white"
                }`}
              >
                <div
                  className="w-[180px] text-[18px] font-medium text-[#1a1a1a] tracking-[1.2px] pl-4 shrink-0"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {row.label}
                </div>
                <div
                  className="text-[18px] text-[#2c2c2c] tracking-[0.8px] pl-4"
                  style={{
                    fontFamily:
                      row.label.includes("電話") || row.label === "営業時間"
                        ? "var(--font-inter), var(--font-noto-sans-jp)"
                        : "var(--font-noto-sans-jp)",
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Access heading */}
          <div className="flex flex-col items-center mt-12 mb-8">
            <h3
              className="text-[24px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              アクセス
            </h3>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e]" />
          </div>

          {/* Google Map */}
          <div className="mx-[127px] mb-[50px] rounded-[10px] overflow-hidden h-[400px] bg-[#e5e3df]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mapImage}
              alt="アクセスマップ – 小倉北区高峰町3−12"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[54px] overflow-hidden">
        <svg viewBox="0 0 1440 54" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,27 C360,54 1080,0 1440,27 L1440,54 L0,54 Z" fill="#fcfaf2" />
        </svg>
      </div>
    </section>
  );
}
