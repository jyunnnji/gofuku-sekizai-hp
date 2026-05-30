export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { getNewsList, formatDate } from "@/lib/microcms";
import PageHeading from "@/components/ui/PageHeading";

function ArrowIcon() {
  return (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
      <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function NewsListPage() {
  const { contents: newsItems } = await getNewsList({ limit: 100, orders: "-date" });

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[170px] pt-[40px] md:pt-[125px] pb-[60px] md:pb-[120px]">

          <PageHeading label="NEWS" title="お知らせ" />

          {/* News list card */}
          <div className="bg-white rounded-[20px] md:rounded-[30px] overflow-hidden pt-6 pb-6 md:pt-[76px] md:pb-[76px]">
            {newsItems.map((item, i) => (
              <div key={item.id} className="px-4 md:px-0 md:pl-[176px] md:pr-[174px]">
                <Link
                  href={`/news/${item.id}`}
                  className={`group flex flex-col md:flex-row md:items-center w-full py-4 md:h-[97px] md:py-0 border-[#d9d9d9] hover:bg-[#f9f9f9] transition-colors md:mx-[-30px] md:px-[30px] ${
                    i === 0 ? "border-t border-b" : "border-b"
                  }`}
                >
                  {/* SP: date + badge + arrow in one row / PC: becomes flex items via contents */}
                  <div className="flex items-center gap-[8px] mb-[6px] md:mb-0 md:contents">
                    {/* Date */}
                    <span
                      className="text-[12px] md:text-[15px] text-[#444444] tracking-[1.3px] leading-[26px] whitespace-nowrap shrink-0 md:w-[102px]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {formatDate(item.date)}
                    </span>
                    {/* Category badge */}
                    <span className="md:ml-[4px] bg-[#edc920] border border-black rounded-full h-[24px] md:h-[28px] px-[10px] flex items-center justify-center shrink-0">
                      <span
                        className="text-[11px] md:text-[13px] text-black tracking-[1.1px] leading-[22px]"
                        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                      >
                        {item.category[0]}
                      </span>
                    </span>
                    {/* Arrow: SP only */}
                    <div className="ml-auto md:hidden shrink-0 w-[26px] h-[26px] rounded-full bg-[#edc920] border border-[#6d6c6a] flex items-center justify-center text-[#1a1a1a]">
                      <ArrowIcon />
                    </div>
                  </div>

                  {/* Title */}
                  <span
                    className="text-[14px] md:text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[24px] md:leading-[27px] flex-1 md:ml-[25px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.title}
                  </span>

                  {/* Arrow: PC only */}
                  <div className="hidden md:flex shrink-0 w-[28px] h-[28px] rounded-full bg-[#edc920] border border-[#6d6c6a] items-center justify-center transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex justify-center mt-10 md:mt-[48px]">
            <Link
              href="/#news"
              className="inline-flex items-center gap-[10px] text-[14px] md:text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              トップページへ戻る
            </Link>
          </div>

        </div>
      </main>
      <Footer />

      <ScrollToTopButton />
    </>
  );
}
