"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { worksItems, WorkItem } from "@/lib/worksData";

const categoryColors: Record<string, string> = {
  "墓石クリーニング": "bg-[#edc920] text-black",
  "造園": "bg-[#2f7d4e] text-white",
};

function WorksModal({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] w-[min(900px,90vw)] max-h-[90vh] overflow-y-auto p-[48px]"
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
        <div className="grid grid-cols-2 gap-[20px] mb-[28px]">
          <div>
            <p
              className="text-[14px] font-bold text-[#1a1a1a] tracking-[1px] mb-[10px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Before
            </p>
            <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#d9d9d9]">
              <img
                src={item.imgBefore}
                alt="施工前"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p
              className="text-[14px] font-bold text-[#2f7d4e] tracking-[1px] mb-[10px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              After
            </p>
            <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#d9d9d9]">
              <img
                src={item.imgAfter}
                alt="施工後"
                className="w-full h-full object-cover"
              />
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
  );
}

export default function WorksListPage() {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[170px] pt-[125px] pb-[120px]">

          {/* WORKS label */}
          <p
            className="text-center text-[20px] text-[#2f7d4e] tracking-[3.6px] uppercase leading-[24px] mb-[24px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            WORKS
          </p>

          {/* Heading */}
          <div className="flex flex-col items-center mb-[65px]">
            <h1
              className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              施工事例
            </h1>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-[32px]">
            {worksItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="bg-white rounded-[24px] overflow-hidden flex flex-col text-left hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Placeholder */}
                <div className="w-full h-[200px] bg-[#d9d9d9]" />

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
        className="fixed bottom-[49px] right-[50px] z-50 w-[48px] h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] transition-colors"
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
