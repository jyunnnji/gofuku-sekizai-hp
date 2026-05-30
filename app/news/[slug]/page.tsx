export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Link from "next/link";
import { getNewsDetail, formatDate } from "@/lib/microcms";
import PageHeading from "@/components/ui/PageHeading";

export default async function NewsDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { from?: string };
}) {
  const item = await getNewsDetail(params.slug).catch(() => null);
  if (!item) notFound();

  const backHref = searchParams.from === "top" ? "/#news" : "/news";
  const backLabel = searchParams.from === "top" ? "トップページへ戻る" : "お知らせ一覧へ戻る";

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[170px] pt-[40px] md:pt-[125px] pb-[60px] md:pb-[120px]">

          <PageHeading label="NEWS" title="お知らせ" />

          {/* Article card */}
          <div className="bg-white rounded-[20px] md:rounded-[30px] px-5 md:px-[80px] py-8 md:py-[64px]">

            {/* Meta */}
            <div className="flex items-center gap-[16px] mb-[32px]">
              <span
                className="text-[15px] text-[#444444] tracking-[1.3px] leading-[26px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {formatDate(item.date)}
              </span>
              <span className="bg-[#edc920] border border-black rounded-full h-[28px] px-[10px] flex items-center justify-center shrink-0">
                <span
                  className="text-[13px] text-black tracking-[1.1px] leading-[22px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {item.category[0]}
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

            {/* Thumbnail image */}
            {item.thumbnail && (
              <div className="mb-[40px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail.url}
                  alt={item.title}
                  width={item.thumbnail.width}
                  height={item.thumbnail.height}
                  className="max-w-[480px] w-full h-auto rounded-[16px] object-cover"
                />
              </div>
            )}

            {/* Body — HTMLリッチテキスト or プレーンテキスト */}
            {item.content ? (
              <div
                className="text-[17px] text-[#2c2c2c] tracking-[0.8px] leading-[36px] news-content"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            ) : (
              <p
                className="text-[17px] text-[#2c2c2c] tracking-[0.8px] leading-[36px] whitespace-pre-wrap"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {item.excerpt}
              </p>
            )}

          </div>

          {/* Back link */}
          <div className="flex justify-center mt-10 md:mt-[48px]">
            <Link
              href={backHref}
              className="inline-flex items-center gap-[10px] text-[14px] md:text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {backLabel}
            </Link>
          </div>

        </div>
      </main>
      <Footer />

      <ScrollToTopButton />
    </>
  );
}
