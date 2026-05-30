"use client";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 md:bottom-[49px] md:right-[50px] z-50 w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
      aria-label="ページ上部へ戻る"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
