import Link from "next/link";
import { newsItems as newsData } from "@/lib/newsData";
import FadeUp from "@/components/ui/FadeUp";

const newsItems = newsData.map((item) => ({
  date: item.date,
  category: item.category,
  title: item.title,
  href: `/news/${item.slug}`,
}));

function ArrowIcon() {
  return (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function News() {
  return (
    <section
      id="news"
      className="relative bg-[#fcfaf2] pt-[49px] pb-20 scroll-mt-[100px]"
    >
      <div className="max-w-[1440px] mx-auto px-[165px]">
        <FadeUp>
        {/* NEWS label — center at y=61px (pt=49 + 24/2=12 = 61) */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase leading-[24px] mb-[21px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          NEWS
        </p>

        {/* お知らせ heading — center at y=126px (49+24+21+64/2=126) */}
        <div className="flex flex-col items-center mb-[38px]">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
          >
            お知らせ
          </h2>
          {/* Divider — top=170px (49+24+21+64+12=170) */}
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
        </div>
        </FadeUp>

        {/* White card — top=210px (170+2+38=210), h=433px */}
        <FadeUp delay={0.1}>
        <div className="bg-white rounded-[30px] overflow-hidden h-[433px] pt-[76px]">
          {newsItems.map((item, i) => (
            <div key={i} className="flex pl-[176px] pr-[174px]">
              <Link
                href={item.href}
                className={`group flex items-center w-full h-[97px] border-[#d9d9d9] hover:bg-[#f9f9f9] transition-colors mx-[-30px] px-[30px] ${
                  i === 0 ? "border-t border-b" : "border-b"
                }`}
              >
                {/* Date — left=0, w=102px */}
                <span
                  className="text-[15px] text-[#444444] tracking-[1.3px] leading-[26px] whitespace-nowrap w-[102px] shrink-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.date}
                </span>

                {/* Category badge — left=106px (4px gap from date) */}
                <span className="ml-[4px] bg-[#edc920] border border-black rounded-full h-[28px] w-[77px] flex items-center justify-center shrink-0">
                  <span
                    className="text-[13px] text-black tracking-[1.1px] leading-[22px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.category}
                  </span>
                </span>

                {/* Title — left=208px (25px gap from badge right at 183px) */}
                <span
                  className="ml-[25px] text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[27px] flex-1"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.title}
                </span>

                {/* Arrow — right=0, size=28px */}
                <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#edc920] border border-[#6d6c6a] flex items-center justify-center transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          ))}
        </div>
        </FadeUp>

        {/* もっと見る button — top=685px (643+42=685), right-aligned */}
        <div className="flex justify-end mt-[42px] pr-[29px]">
          <Link
            href="/news"
            className="group inline-flex items-center gap-[13px] bg-[#edc920] border border-black rounded-full pl-[29px] pr-[25px] h-[44px] hover:bg-[#d4b31e] transition-colors"
          >
            <span
              className="text-[15px] font-bold text-black tracking-[1.1px] leading-[16.22px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              もっと見る
            </span>
            <span className="w-[20.8px] h-[20.8px] rounded-[10.4px] bg-[#edc920] border border-black flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
