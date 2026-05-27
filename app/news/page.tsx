import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { newsItems } from "@/lib/newsData";

function ArrowIcon() {
  return (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
      <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function NewsListPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[170px] pt-[125px] pb-[120px]">

          {/* NEWS label */}
          <p
            className="text-center text-[20px] text-[#2f7d4e] tracking-[3.6px] uppercase leading-[24px] mb-[24px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            NEWS
          </p>

          {/* Heading */}
          <div className="flex flex-col items-center mb-[65px]">
            <h1
              className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              お知らせ
            </h1>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
          </div>

          {/* News list card */}
          <div className="bg-white rounded-[30px] overflow-hidden pt-[76px] pb-[76px]">
            {newsItems.map((item, i) => (
              <div key={item.slug} className="flex pl-[176px] pr-[174px]">
                <Link
                  href={`/news/${item.slug}`}
                  className={`group flex items-center w-full h-[97px] border-[#d9d9d9] hover:bg-[#f9f9f9] transition-colors mx-[-30px] px-[30px] ${
                    i === 0 ? "border-t border-b" : "border-b"
                  }`}
                >
                  {/* Date */}
                  <span
                    className="text-[15px] text-[#444444] tracking-[1.3px] leading-[26px] whitespace-nowrap w-[102px] shrink-0"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.date}
                  </span>

                  {/* Category badge */}
                  <span className="ml-[4px] bg-[#edc920] border border-black rounded-full h-[28px] w-[77px] flex items-center justify-center shrink-0">
                    <span
                      className="text-[13px] text-black tracking-[1.1px] leading-[22px]"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                    >
                      {item.category}
                    </span>
                  </span>

                  {/* Title */}
                  <span
                    className="ml-[25px] text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[27px] flex-1"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.title}
                  </span>

                  {/* Arrow */}
                  <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#edc920] border border-[#6d6c6a] flex items-center justify-center transition-colors group-hover:bg-[#d4b31e] text-[#1a1a1a] group-hover:text-white">
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex justify-center mt-[48px]">
            <Link
              href="/#news"
              className="inline-flex items-center gap-[10px] text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
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

      {/* Back to top button */}
      <Link
        href="#top"
        className="fixed bottom-[49px] right-[50px] z-50 w-[48px] h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] transition-colors"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </>
  );
}
