"use client";
import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import ImageLightbox from "@/components/ui/ImageLightbox";

const imgBefore      = "/images/works/works-before.png";
const imgAfter       = "/images/works/works-after.png";

function CenterArrow() {
  return (
    <svg width="88" height="88" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#F4C430" />
      <path d="M21 41H55V31L79 50L55 69V59H21V41Z" fill="white" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#F4C430" />
      <path d="M41 21H59V55H69L50 79L31 55H41V21Z" fill="white" />
    </svg>
  );
}

export default function Works() {
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="works"
      className="relative bg-[#fcfaf2] overflow-hidden pt-[50px] pb-[144px]"
    >
      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc.src}
          alt={lightboxSrc.alt}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      <div className="max-w-[1440px] mx-auto px-4 md:px-[56px]">
        <FadeUp>
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WORKS
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-[59px]">
          <h2
            className="text-[28px] md:text-[40px] font-medium text-[#1a1a1a] tracking-[2px] md:tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            施工事例
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
        </div>
        </FadeUp>

        {/* Before / After container */}
        <FadeUp delay={0.1}>
        <div
          className="relative rounded-[40px] md:rounded-[100px] overflow-hidden pt-[40px] pb-[40px] px-4 md:pt-[72px] md:pb-[76px] md:px-[110px]"
          style={{ background: "#fff3bc" }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:gap-[40px] md:items-start md:justify-center">
            {/* Before */}
            <div className="flex-1 md:max-w-[484px]">
              <h3
                className="text-[28px] md:text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[13px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Before
              </h3>
              <div className="w-[120px] md:w-[159px] h-[2px] bg-[#2f7d4e] mb-[20px] md:mb-[29px]" />
              {/* Image frame */}
              <div
                className="relative group cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
                onClick={() => setLightboxSrc({ src: imgBefore, alt: "施工前" })}
              >
                <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[240px] md:h-[453px]">
                  {/* SP: simple cover image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgBefore}
                    alt="施工前"
                    className="md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* PC: absolute-positioned per Figma */}
                  <div className="hidden md:block absolute left-[52px] top-[29px] w-[347px] h-[462px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgBefore}
                      alt="施工前"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                  {/* backdrop-blur strip — PC only */}
                  <div
                    className="hidden md:block absolute pointer-events-none"
                    style={{
                      left: 246,
                      top: 35,
                      width: 19,
                      height: 122,
                      backdropFilter: "blur(45px)",
                      WebkitBackdropFilter: "blur(45px)",
                      backgroundColor: "rgba(205,200,178,0.1)",
                    }}
                  />
                  {/* Expand icon */}
                  <button
                    className="absolute top-[10px] right-[10px] w-[32px] h-[32px] rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    onClick={(e) => { e.stopPropagation(); setLightboxSrc({ src: imgBefore, alt: "施工前" }); }}
                    aria-label="画像を拡大"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2H14V6M14 2L9 7M6 14H2V10M2 14L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <p
                className="text-[15px] md:text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] md:leading-[33px] mt-[14px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                黒ずみやコケが目立ち、全体的にくすんだ状態。
              </p>
            </div>

            {/* Arrow — right on PC, down on SP */}
            <div className="hidden md:flex items-start justify-center pt-[255px]">
              <CenterArrow />
            </div>
            <div className="flex md:hidden justify-center py-2">
              <DownArrow />
            </div>

            {/* After */}
            <div className="flex-1 md:max-w-[478px]">
              <h3
                className="text-[28px] md:text-[32px] font-bold tracking-[0.54px] text-black leading-[28.8px] mb-[10px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                After
              </h3>
              <div className="w-[120px] md:w-[159px] h-[2px] bg-[#2f7d4e] mb-[20px] md:mb-[27px]" />
              {/* Image frame */}
              <div
                className="relative group cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
                onClick={() => setLightboxSrc({ src: imgAfter, alt: "施工後" })}
              >
                <div className="relative bg-[#fcfaf2] border-2 border-black rounded-[20px] overflow-hidden h-[240px] md:h-[453px]">
                  {/* SP: simple cover image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgAfter}
                    alt="施工後"
                    className="md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* PC: absolute-positioned with rotation per Figma */}
                  <div className="hidden md:block absolute left-[103px] top-[25px] w-[308px] h-[403px] rotate-[1.74deg]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgAfter}
                      alt="施工後"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                  {/* backdrop-blur strip — PC only */}
                  <div
                    className="hidden md:block absolute pointer-events-none"
                    style={{
                      left: 254,
                      top: 35,
                      width: 17,
                      height: 122,
                      backdropFilter: "blur(45px)",
                      WebkitBackdropFilter: "blur(45px)",
                      backgroundColor: "rgba(170,178,167,0.1)",
                    }}
                  />
                  {/* Expand icon */}
                  <button
                    className="absolute top-[10px] right-[10px] w-[32px] h-[32px] rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    onClick={(e) => { e.stopPropagation(); setLightboxSrc({ src: imgAfter, alt: "施工後" }); }}
                    aria-label="画像を拡大"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2H14V6M14 2L9 7M6 14H2V10M2 14L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <p
                className="text-[15px] md:text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] md:leading-[33px] mt-[14px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                <span className="whitespace-nowrap">丁寧な手洗いにより、自然な白さと輝きを取り戻した状態。</span>
                <br />
                施工をすることで
                <strong style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(234,109,98,0.4) 50%)" }}>お墓の寿命が長く</strong>
                なります。
              </p>
            </div>
          </div>

          {/* More button */}
          <div className="flex justify-center mt-[33px]">
            <Link
              href="/works"
              className="w-full max-w-[320px] h-[59px] bg-[#edc920] border border-black rounded-full text-[18px] font-medium text-black tracking-[2.25px] hover:bg-[#d4b31e] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 relative flex items-center justify-center"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              もっと見る
              <svg className="absolute right-[20px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
