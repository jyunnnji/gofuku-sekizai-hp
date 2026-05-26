import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { newsItems, getNewsItem } from "@/lib/newsData";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getNewsItem(params.slug);
  if (!item) notFound();

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

          {/* Article card */}
          <div className="bg-white rounded-[30px] px-[80px] py-[64px]">

            {/* Meta */}
            <div className="flex items-center gap-[16px] mb-[32px]">
              <span
                className="text-[15px] text-[#6b6b6b] tracking-[1.3px] leading-[26px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.date}
              </span>
              <span className="bg-[#edc920] border border-black rounded-full h-[28px] w-[77px] flex items-center justify-center shrink-0">
                <span
                  className="text-[13px] text-black tracking-[1.1px] leading-[22px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.category}
                </span>
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-[24px] font-bold text-[#1a1a1a] tracking-[1.2px] leading-[40px] mb-[40px] pb-[32px] border-b border-[#e8e8e8]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {item.title}
            </h2>

            {/* Body */}
            <p
              className="text-[17px] text-[#2c2c2c] tracking-[0.8px] leading-[36px] whitespace-pre-wrap"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              {item.body}
            </p>

          </div>

          {/* Back link */}
          <div className="flex justify-center mt-[48px]">
            <Link
              href="/#news"
              className="inline-flex items-center gap-[10px] text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              お知らせ一覧へ戻る
            </Link>
          </div>

        </div>
      </main>
      <Footer />

      {/* Back to top */}
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
