import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const pricingIcon = "/pricing-icon.png";

export default function Pricing() {
  return (
    <section
      id="contact"
      className="bg-[#fcfaf2] pt-[55px] pb-[87px]"
    >
      <div className="max-w-[1440px] mx-auto px-[165px]">
        <FadeUp>
        <div className="flex gap-[36px]">

          {/* 価格パネル — 532×267px, absolute positioning from Figma coords
              Content group (440×106) sits at card (left=41, top=38).
              Each element's card-absolute position = group-local + (41, 38). */}
          <div className="w-[532px] shrink-0 bg-white rounded-[30px] h-[267px] relative overflow-hidden">

            {/* Icon: 42×42 at group(0,0) → card(41,38) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pricingIcon}
              alt=""
              className="absolute w-[42px] h-[42px] object-cover pointer-events-none"
              style={{ top: 38, left: 41 }}
            />

            {/* "価格": center at group(68.5,20.5) → card(109.5,58.5) */}
            <span
              className="absolute text-[24px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px] whitespace-nowrap"
              style={{
                top: 58.5,
                left: 109.5,
                transform: "translate(-50%, -50%)",
                fontFamily: "var(--font-inter), var(--font-noto-sans-jp)",
              }}
            >
              価格
            </span>

            {/* Price group (299×45) at group(2,47) → card(43,85).
                Inner elements are relative to the price group. */}

            {/* "墓石クリーニング費用：": w=178 h=22, center group(89,23) → card left=43, top=97 */}
            <span
              className="absolute text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px]"
              style={{
                top: 97,
                left: 43,
                width: 178,
                height: 22,
                fontFamily: "var(--font-noto-sans-jp)",
              }}
            >
              墓石クリーニング費用：
            </span>

            {/* "最低": w=38 h=21, left=177 center_y=22.5 → card left=220, top=97 */}
            <span
              className="absolute text-[17.3px] font-bold text-[#2c2c2c] leading-[21.68px]"
              style={{
                top: 97,
                left: 220,
                width: 38,
                height: 21,
                fontFamily: "var(--font-noto-sans-jp)",
              }}
            >
              最低
            </span>

            {/* "5": w=25 h=45, left=219 center_y=22.5 → card left=262, top=85 */}
            <span
              className="absolute text-[37.5px] font-medium text-[#2f7d4e] leading-[46.9px]"
              style={{
                top: 85,
                left: 262,
                width: 25,
                height: 45,
                fontFamily: "var(--font-inter)",
              }}
            >
              5
            </span>

            {/* "万円〜": w=54 h=22, center group(272,23) → card left=288, top=97 */}
            <span
              className="absolute text-[15.2px] font-bold text-[#2c2c2c] tracking-[0.787px] leading-[22.82px]"
              style={{
                top: 97,
                left: 288,
                width: 54,
                height: 22,
                fontFamily: "var(--font-noto-sans-jp)",
              }}
            >
              万円〜
            </span>

            {/* Disclaimer: w=438 h=22, left=2 center_y=95 → card left=43, top=122 */}
            <p
              className="absolute text-[13px] text-[#444444] tracking-[0.787px] leading-[22.82px] whitespace-nowrap"
              style={{
                top: 122,
                left: 43,
                fontFamily: "var(--font-inter), var(--font-noto-sans-jp)",
              }}
            >
              ※サイズ、汚れ、大きさ、要望、築年数により費用は変動いたします。
            </p>
          </div>

          {/* 見積もりパネル — 532×267px, content absolutely positioned */}
          <div className="w-[532px] shrink-0 bg-white rounded-[30px] h-[267px] relative">
            {/* まずはお気軽に… — center at y=59 → top-edge=48px */}
            <p
              className="absolute top-[48px] left-0 right-0 text-center text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[27px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              まずはお気軽にご相談ください。
            </p>

            {/* CTA button — top=105px, centered */}
            <Link
              href="/contact"
              className="absolute top-[105px] left-1/2 -translate-x-1/2 w-[300px] h-[64px] flex items-center justify-center bg-[#2f7d4e] border border-black rounded-[30px] hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <span
                className="text-[18px] font-bold text-white tracking-[2.25px] leading-[30px]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                無料見積もりを依頼する
              </span>
            </Link>

            {/* TEL (携帯) — top=193px */}
            <a
              href="tel:090-9406-2085"
              className="absolute top-[193px] left-[144px] w-[272px] h-[22px] flex items-center group transition-colors"
            >
              <span
                className="w-[100px] shrink-0 text-[15.2px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.787px] leading-[22.82px] transition-colors"
                style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
              >
                TEL（携帯）
              </span>
              <span
                className="text-[20px] text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.8px] leading-[27px] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                090-9406-2085
              </span>
            </a>

            {/* TEL (固定) — top=221px */}
            <a
              href="tel:093-614-6573"
              className="absolute top-[221px] left-[144px] w-[272px] h-[22px] flex items-center group transition-colors"
            >
              <span
                className="w-[100px] shrink-0 text-[15.2px] font-bold text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.787px] leading-[22.82px] transition-colors"
                style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
              >
                TEL（固定）
              </span>
              <span
                className="text-[20px] text-[#2c2c2c] group-hover:text-[#2f7d4e] tracking-[0.8px] leading-[27px] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                093-614-6573
              </span>
            </a>
          </div>

        </div>
        </FadeUp>
      </div>
    </section>
  );
}
