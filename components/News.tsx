import Link from "next/link";

const arrowIcon =
  "https://www.figma.com/api/mcp/asset/983e8249-6ec6-4a35-a024-73f046567061";
const moreArrow =
  "https://www.figma.com/api/mcp/asset/4894d2c0-1c2a-451d-a207-64cb372d93b8";

const newsItems = [
  {
    date: "2026.03.01",
    category: "お知らせ",
    title: "ホームページを公開しました。",
    href: "#",
  },
  {
    date: "2026.02.15",
    category: "お知らせ",
    title: "春のお墓クリーニングキャンペーンを実施中です。",
    href: "#",
  },
  {
    date: "2026.01.10",
    category: "お知らせ",
    title: "年末年始の営業日のご案内。",
    href: "#",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="relative bg-[#fcfaf2] py-20"
    >
      <div className="max-w-[1440px] mx-auto px-[165px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          NEWS
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-10">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            お知らせ
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>

        {/* News list */}
        <div className="bg-white rounded-[30px] overflow-hidden">
          <div className="px-[222px] py-[76px]">
            {newsItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-6 py-0 border-[#d9d9d9] ${
                  i === 0 ? "border-t border-b" : "border-b"
                } h-[97px] hover:bg-[#f9f9f9] transition-colors group`}
              >
                {/* Date */}
                <span
                  className="text-[15px] text-[#6b6b6b] tracking-[1.3px] whitespace-nowrap w-[102px] shrink-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.date}
                </span>

                {/* Category badge */}
                <span className="bg-[#edc920] border border-black rounded-full px-3 h-[28px] flex items-center shrink-0">
                  <span
                    className="text-[13px] text-black tracking-[1.1px] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.category}
                  </span>
                </span>

                {/* Title */}
                <span
                  className="text-[18px] text-[#2c2c2c] tracking-[0.8px] flex-1"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.title}
                </span>

                {/* Arrow button */}
                <div className="w-[28px] h-[28px] rounded-[28px] bg-[#edc920] border border-[#6d6c6a] flex items-center justify-center shrink-0 group-hover:bg-[#d4b31e] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={arrowIcon} alt="" className="w-[6px] h-[9px]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* More button */}
        <div className="flex justify-end mt-8">
          <Link
            href="#news-all"
            className="relative inline-flex items-center gap-3 bg-[#edc920] border border-black rounded-full px-8 h-[44px] hover:bg-[#d4b31e] transition-colors"
          >
            <span
              className="text-[15px] font-bold text-black tracking-[1.1px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              もっと見る
            </span>
            <span className="w-[20.8px] h-[20.8px] rounded-[10.4px] bg-[#edc920] border border-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={moreArrow} alt="" className="w-[5px] h-[7px]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
