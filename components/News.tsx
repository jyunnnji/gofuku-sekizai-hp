import Link from "next/link";
import { getNewsList, formatDate } from "@/lib/microcms";
import FadeUp from "@/components/ui/FadeUp";

function ArrowIcon() {
  return (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function News() {
  const { contents: newsItems } = await getNewsList({ limit: 3, orders: "-date" });

  return (
    <section
      id="news"
      className="relative bg-[#fcfaf2] pt-[49px] pb-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[165px]">
        <FadeUp>
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase leading-[24px] mb-3 md:mb-[21px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          NEWS
        </p>

        <div className="flex flex-col items-center mb-5 md:mb-[38px]">
          <h2
            className="text-[26px] md:text-[40px] font-medium text-[#1a1a1a] tracking-[2px] md:tracking-[4.8px] leading-[40px] md:leading-[64px]"
            style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
          >
            お知らせ
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
        </div>
        </FadeUp>

        <FadeUp delay={0.1}>
        <div className="bg-white rounded-[30px] overflow-hidden pt-8 md:pt-[76px] pb-8 md:pb-[76px]">
          {newsItems.map((item, i) => (
            <div key={item.id} className="px-4 md:px-0 md:flex md:pl-[176px] md:pr-[174px]">
              <Link
                href={`/news/${item.id}?from=top`}
                className={`group relative flex flex-wrap md:flex-nowrap items-center w-full border-[#d9d9d9] hover:bg-[#f9f9f9] transition-colors py-3 pr-8 md:py-0 md:pr-0 md:h-[97px] md:mx-[-30px] md:px-[30px] gap-x-2 gap-y-1 ${
                  i === 0 ? "border-t border-b" : "border-b"
                }`}
              >
                <span
                  className="text-[13px] md:text-[15px] text-[#444444] tracking-[1.3px] leading-[26px] whitespace-nowrap w-[92px] md:w-[102px] shrink-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {formatDate(item.date)}
                </span>

                <span className="bg-[#edc920] border border-black rounded-full h-[24px] md:h-[28px] px-[8px] md:px-[10px] flex items-center justify-center shrink-0 md:ml-[4px]">
                  <span
                    className="text-[11px] md:text-[13px] text-black tracking-[1.1px] leading-[22px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.category[0]}
                  </span>
                </span>

                <span
                  className="text-[15px] md:text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[24px] md:leading-[27px] w-full md:flex-1 md:w-auto md:ml-[25px] order-last md:order-none"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.title}
                </span>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 md:static md:translate-y-0 shrink-0 w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full bg-[#edc920] border border-[#6d6c6a] flex items-center justify-center transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          ))}
        </div>
        </FadeUp>

        <div className="flex justify-end mt-[42px] pr-[29px]">
          <Link
            href="/news"
            className="group inline-flex items-center gap-[13px] bg-[#edc920] border border-black rounded-full pl-[29px] pr-[25px] h-[44px] hover:bg-[#d4b31e] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <span
              className="text-[15px] font-bold text-black group-hover:text-white tracking-[1.1px] leading-[16.22px] transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              もっと見る
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
