"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";

export type WorksPageItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  thumbnailUrl: string;
  beforeImageUrl: string;
  afterImageUrl: string;
};

const categoryColors: Record<string, string> = {
  "墓石クリーニング": "bg-[#edc920] text-black",
  "造園": "bg-[#2f7d4e] text-white",
};

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-[20px] right-[20px] w-[44px] h-[44px] rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="閉じる"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2L16 16M16 2L2 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-[8px]"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function WorksModal({ item, onClose }: { item: WorksPageItem; onClose: () => void }) {
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] w-[min(900px,92vw)] max-h-[90vh] overflow-y-auto p-5 md:p-[48px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] w-[40px] h-[40px] rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors"
          aria-label="閉じる"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Meta */}
        <div className="flex items-center gap-[8px] mb-[12px]">
          <span
            className={`text-[12px] font-medium tracking-[0.8px] px-[10px] h-[24px] flex items-center rounded-full border border-black ${categoryColors[item.category] ?? "bg-white text-black"}`}
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            {item.category}
          </span>
          <span
            className="text-[13px] text-[#444444] tracking-[0.8px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            {item.location}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-[22px] font-bold text-[#1a1a1a] tracking-[0.8px] leading-[34px] mb-[28px]"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          {item.title}
        </h2>

        {/* Before / After images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px] mb-[28px]">
          <div>
            <p
              className="text-[14px] font-bold text-[#1a1a1a] tracking-[1px] mb-[10px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Before
            </p>
            <div
              className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#d9d9d9] cursor-pointer group"
              onClick={() => setLightboxSrc({ src: item.beforeImageUrl, alt: "施工前" })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.beforeImageUrl}
                alt="施工前"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                className="absolute top-[10px] right-[10px] w-[32px] h-[32px] rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/60"
                aria-label="画像を拡大"
                onClick={(e) => { e.stopPropagation(); setLightboxSrc({ src: item.beforeImageUrl, alt: "施工前" }); }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M8.5 1H13V5.5M13 1L8 6M5.5 13H1V8.5M1 13L6 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p
              className="text-[14px] font-bold text-[#2f7d4e] tracking-[1px] mb-[10px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              After
            </p>
            <div
              className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#d9d9d9] cursor-pointer group"
              onClick={() => setLightboxSrc({ src: item.afterImageUrl, alt: "施工後" })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.afterImageUrl}
                alt="施工後"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                className="absolute top-[10px] right-[10px] w-[32px] h-[32px] rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/60"
                aria-label="画像を拡大"
                onClick={(e) => { e.stopPropagation(); setLightboxSrc({ src: item.afterImageUrl, alt: "施工後" }); }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M8.5 1H13V5.5M13 1L8 6M5.5 13H1V8.5M1 13L6 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-[16px] text-[#2c2c2c] tracking-[0.8px] leading-[30px]"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          {item.description}
        </p>
      </div>
    </div>

    {lightboxSrc && (
      <ImageLightbox
        src={lightboxSrc.src}
        alt={lightboxSrc.alt}
        onClose={() => setLightboxSrc(null)}
      />
    )}
    </>
  );
}

export default function WorksPageClient({ items }: { items: WorksPageItem[] }) {
  const [selected, setSelected] = useState<WorksPageItem | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[170px] pt-[60px] md:pt-[125px] pb-[60px] md:pb-[120px]">

          <PageHeading
            label="WORKS"
            title="施工事例"
            titleFont="var(--font-noto-sans-jp)"
          />

          {/* Grid: SP=1col, PC=3col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[32px]">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="bg-white rounded-[24px] overflow-hidden flex flex-col text-left hover:shadow-lg hover:scale-[1.03] transition-[transform,box-shadow] duration-300 ease-out cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-full h-[200px] bg-[#d9d9d9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 px-[28px] py-[24px]">
                  {/* Category + Location */}
                  <div className="flex items-center gap-[8px] mb-[12px]">
                    <span
                      className={`text-[12px] font-medium tracking-[0.8px] px-[10px] h-[24px] flex items-center rounded-full border border-black ${categoryColors[item.category] ?? "bg-white text-black"}`}
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-[13px] text-[#444444] tracking-[0.8px]"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                    >
                      {item.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-[18px] font-bold text-[#1a1a1a] tracking-[0.8px] leading-[28px] mb-[10px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-[14px] text-[#444444] tracking-[0.6px] leading-[24px] flex-1"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {item.description}
                  </p>

                  {/* Detail link */}
                  <div className="flex justify-end mt-[12px]">
                    <span
                      className="text-[12px] text-[#2f7d4e] tracking-[0.6px] flex items-center gap-[4px]"
                      style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                    >
                      詳細を見る
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Back button */}
          <div className="flex justify-center mt-[64px]">
            <Link
              href="/#works"
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

      {/* Back to top */}
      <Link
        href="#top"
        className="fixed bottom-4 right-4 md:bottom-[49px] md:right-[50px] z-50 w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Modal */}
      {selected && <WorksModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
