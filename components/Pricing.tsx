import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const pricingIcon = "/images/pricing/pricing-icon.png";

export default function Pricing() {
  return (
    <section
      id="contact"
      className="bg-[#fcfaf2] pt-[55px] pb-[87px]"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-[165px]">
        <FadeUp>
        <div className="flex flex-col md:flex-row gap-[36px]">

          {/* 価格パネル */}
          {/* PC: absolute-positioned layout */}
          <div className="hidden md:block w-[532px] shrink-0 bg-white rounded-[30px] h-[267px] relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pricingIcon} alt="" className="absolute w-[42px] h-[42px] object-cover pointer-events-none" style={{ top: 38, left: 41 }} />
            <span className="absolute text-[24px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px] whitespace-nowrap" style={{ top: 58.5, left: 109.5, transform: "translate(-50%, -50%)", fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>価格</span>
            <span className="absolute text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px]" style={{ top: 97, left: 43, width: 178, height: 22, fontFamily: "var(--font-noto-sans-jp)" }}>墓石クリーニング費用：</span>
            <span className="absolute text-[17.3px] font-bold text-[#2c2c2c] leading-[21.68px]" style={{ top: 97, left: 220, width: 38, height: 21, fontFamily: "var(--font-noto-sans-jp)" }}>最低</span>
            <span className="absolute text-[37.5px] font-medium text-[#2f7d4e] leading-[46.9px]" style={{ top: 85, left: 262, width: 25, height: 45, fontFamily: "var(--font-inter)" }}>5</span>
            <span className="absolute text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px]" style={{ top: 97, left: 288, width: 54, height: 22, fontFamily: "var(--font-noto-sans-jp)" }}>万円〜</span>
            <p className="absolute text-[13px] text-[#444444] tracking-[0.787px] leading-[22.82px] whitespace-nowrap" style={{ top: 122, left: 43, fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>
              ※サイズ、汚れ、大きさ、要望、築年数により費用は変動いたします。
            </p>
          </div>

          {/* 価格パネル SP */}
          <div className="md:hidden w-full bg-white rounded-[30px] p-6">
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pricingIcon} alt="" className="w-[36px] h-[36px] object-cover" />
              <span className="text-[20px] font-bold text-[#2c2c2c]" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>価格</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1 mb-2">
              <span className="text-[14px] font-bold text-[#2c2c2c]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>墓石クリーニング費用：</span>
              <span className="text-[14px] font-bold text-[#2c2c2c]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>最低</span>
              <span className="text-[32px] font-medium text-[#2f7d4e]" style={{ fontFamily: "var(--font-inter)" }}>5</span>
              <span className="text-[14px] font-bold text-[#2c2c2c]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>万円〜</span>
            </div>
            <p className="text-[12px] text-[#444444] leading-[1.8]" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>
              ※サイズ、汚れ、大きさ、要望、築年数により費用は変動いたします。
            </p>
          </div>

          {/* 見積もりパネル PC */}
          <div className="hidden md:block w-[532px] shrink-0 bg-white rounded-[30px] h-[267px] relative">
            <p className="absolute top-[48px] left-0 right-0 text-center text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[27px]" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>
              まずはお気軽にご相談ください。
            </p>
            <Link href="/contact" className="absolute top-[105px] left-1/2 -translate-x-1/2 w-[300px] h-[64px] flex items-center justify-center bg-[#2f7d4e] border border-black rounded-[30px] hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <span className="text-[18px] font-bold text-white tracking-[2.25px] leading-[30px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>無料見積もりを依頼する</span>
            </Link>
            <a href="tel:090-9406-2085" className="absolute top-[193px] left-[144px] w-[272px] h-[22px] flex items-center group transition-colors">
              <span className="w-[100px] shrink-0 text-[15.2px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.787px] leading-[22.82px] transition-colors" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>TEL（携帯）</span>
              <span className="text-[20px] text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.8px] leading-[27px] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>090-9406-2085</span>
            </a>
            <a href="tel:093-614-6573" className="absolute top-[221px] left-[144px] w-[272px] h-[22px] flex items-center group transition-colors">
              <span className="w-[100px] shrink-0 text-[15.2px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.787px] leading-[22.82px] transition-colors" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>TEL（固定）</span>
              <span className="text-[20px] text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.8px] leading-[27px] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>093-614-6573</span>
            </a>
          </div>

          {/* 見積もりパネル SP */}
          <div className="md:hidden w-full bg-white rounded-[30px] p-6 flex flex-col items-center gap-4">
            <p className="text-[16px] text-[#2c2c2c] tracking-[0.8px] text-center" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>
              まずはお気軽にご相談ください。
            </p>
            <Link href="/contact" className="w-full max-w-[300px] h-[56px] flex items-center justify-center bg-[#2f7d4e] border border-black rounded-[30px] hover:bg-[#235e3a] transition-colors">
              <span className="text-[16px] font-bold text-white tracking-[1.5px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>無料見積もりを依頼する</span>
            </Link>
            <div className="flex flex-col gap-2 w-full">
              <a href="tel:090-9406-2085" className="flex items-center gap-2 group">
                <span className="text-[13px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] transition-colors" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>TEL（携帯）</span>
                <span className="text-[16px] text-[#2c2c2c] group-hover:text-[#2f7d4e] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>090-9406-2085</span>
              </a>
              <a href="tel:093-614-6573" className="flex items-center gap-2 group">
                <span className="text-[13px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] transition-colors" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>TEL（固定）</span>
                <span className="text-[16px] text-[#2c2c2c] group-hover:text-[#2f7d4e] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>093-614-6573</span>
              </a>
            </div>
          </div>

        </div>
        </FadeUp>
      </div>
    </section>
  );
}
