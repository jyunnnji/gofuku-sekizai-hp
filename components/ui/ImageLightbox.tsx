"use client";
import { useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-[20px] right-[20px] w-[44px] h-[44px] rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center"
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
