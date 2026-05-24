import Link from "next/link";

const pricingIcon =
  "https://www.figma.com/api/mcp/asset/b4cb93c3-6782-4dff-8ba7-f9f3cb344abf";

export default function Pricing() {
  return (
    <section
      id="contact"
      className="bg-[#fcfaf2] py-16"
    >
      <div className="max-w-[1440px] mx-auto px-[165px]">
        <div className="flex gap-[100px] items-start">
          {/* Pricing panel */}
          <div className="flex-1 bg-white rounded-[30px] px-10 py-12">
            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pricingIcon} alt="" className="w-[42px] h-[42px]" />
              <h3
                className="text-[24px] font-bold text-[#2c2c2c] tracking-[0.8px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                価格
              </h3>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-2">
              <span
                className="text-[17.3px] font-bold text-[#2c2c2c]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                最低
              </span>
              <span
                className="text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.79px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                墓石クリーニング費用：
              </span>
              <span
                className="text-[37.5px] font-medium text-[#2f7d4e]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                5
              </span>
              <span
                className="text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.79px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                万円〜
              </span>
            </div>

            <p
              className="text-[13px] text-[#6b6b6b] tracking-[0.79px] leading-[22.82px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              ※サイズ、汚れ、大きさ、要望、築年数により費用は変動いたします。
            </p>
          </div>

          {/* Quote panel */}
          <div className="w-[532px] shrink-0 bg-white rounded-[30px] px-10 py-10">
            <p
              className="text-center text-[18px] text-[#2c2c2c] tracking-[0.8px] mb-8"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              まずはお気軽にご相談ください。
            </p>

            {/* CTA button */}
            <div className="flex justify-center mb-6">
              <Link
                href="#form"
                className="w-[300px] h-[64px] flex items-center justify-center bg-[#2f7d4e] border border-black rounded-[30px] hover:bg-[#235e3a] transition-colors"
              >
                <span
                  className="text-[18px] font-bold text-white tracking-[2.25px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  無料見積もりを依頼する
                </span>
              </Link>
            </div>

            {/* Phone numbers */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-4">
                <span
                  className="text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.79px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  TEL（携帯）
                </span>
                <span
                  className="text-[20px] text-[#2c2c2c] tracking-[0.8px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  090-9406-2085
                </span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span
                  className="text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.79px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  TEL（固定）
                </span>
                <span
                  className="text-[20px] text-[#2c2c2c] tracking-[0.8px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  093-614-6573
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
