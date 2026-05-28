"use client";
import { motion } from "framer-motion";

const imgRight = "/images/about/about-right.png";
const imgLeft = "/images/about/about-left.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#fcfaf2] overflow-hidden md:h-[749px]"
    >

      {/* ── SP レイアウト ── */}
      <div className="md:hidden px-5 pt-10 pb-12 flex flex-col gap-8">
        {/* Images */}
        <div className="flex gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgRight} alt="五福石材の施工風景" className="w-[48%] h-[180px] object-cover rounded-[12px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgLeft} alt="施工事例" className="w-[48%] h-[180px] object-cover rounded-[12px]" />
        </div>
        {/* Text */}
        <div className="text-center">
          <h2
            className="text-[22px] font-bold tracking-[4px] mb-5"
            style={{ fontFamily: "var(--font-noto-sans-jp)", color: "#2c2c2c" }}
          >
            <span>-</span>
            <span className="text-[#2f7d4e]"> 五福石材</span>
            <span>について -</span>
          </h2>
          <h3
            className="text-[16px] font-medium text-[#2c2c2c] leading-[30px] tracking-[2px] mb-6"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            ご先祖様の安らかなお眠りをサポートさせていただきます。
          </h3>
          <p
            className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材は、墓石クリーニング・造園を通じて、地域の皆さまの暮らしに寄り添ってまいりました。
            ご先祖様を大切にする想い、住まいを美しく保ちたいという願い、人生の節目に寄り添う心。
            私たちはその一つひとつに丁寧に向き合い、信頼と安心をお届けしています。
            「頼んでよかった」――そう言っていただける仕事を、これからも。
          </p>
        </div>
      </div>

      {/* ── PC レイアウト ── */}
      <div className="hidden md:block">

        {/* ── 画像1: 右上 (1279:656) ── left=1113px top=35px w=327px h=426px */}
        <motion.div
          className="absolute right-0 top-[35px] w-[327px] h-[426px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 緑グラデーション背景: inset top=32 right=32 bottom=0 left=0 */}
          <div
            className="absolute inset-[32px_32px_0_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))",
            }}
          />
          {/* 写真: left=32px top=0 w=295px h=394px */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgRight}
            alt="五福石材の施工風景"
            className="absolute left-[32px] top-0 w-[295px] h-[394px] object-cover"
          />
          {/* 白グラデーションオーバーレイ: inset top=0 right=0 bottom=32 left=32 */}
          <div
            className="absolute inset-[0_0_32px_32px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))",
            }}
          />
        </motion.div>

        {/* ── 画像2: 左中 (1279:657) ── left=0 top=348px w=268px h=348px */}
        <motion.div
          className="absolute left-0 top-[348px] w-[268px] h-[348px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* 緑グラデーション背景: inset top=0 right=0 bottom=20 left=0 */}
          <div
            className="absolute inset-[0_0_20px_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))",
            }}
          />
          {/* 写真: left=0 top=28px w=240px h=320px */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgLeft}
            alt="施工事例"
            className="absolute left-0 top-[28px] w-[240px] h-[320px] object-cover"
          />
          {/* 白グラデーションオーバーレイ: inset top=28 right=28 bottom=0 left=0 */}
          <div
            className="absolute inset-[28px_28px_0_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))",
            }}
          />
        </motion.div>

        {/* ── テキストコンテナ (1278:206) ── left=170px right=170px top=160px h=635px */}
        <div className="absolute left-[170px] right-[170px] top-[160px] h-[635px] text-center">

          {/* セクションラベル (1278:212): center-y=63px h=28px */}
          <div
            className="absolute left-0 right-0 flex flex-col justify-center"
            style={{ top: "63px", height: "28px", transform: "translateY(-50%)" }}
          >
            <p
              className="font-bold tracking-[8px]"
              style={{
                fontFamily:
                  "var(--font-noto-sans-jp), var(--font-inter), sans-serif",
                fontSize: "40px",
                lineHeight: "39.2px",
              }}
            >
              <span className="text-[#2c2c2c]">-</span>
              <span className="text-[#2f7d4e]">{" 五福石材"}</span>
              <span className="text-[#2c2c2c]">{"について -"}</span>
            </p>
          </div>

          {/* メイン見出し (1278:207): center=(50%, 163.19px) w=867.58px h=96px */}
          <div
            className="absolute flex flex-col justify-center"
            style={{
              left: "50%",
              top: "163.19px",
              width: "867.58px",
              height: "96px",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-noto-sans-jp), sans-serif",
              fontSize: "33px",
              fontWeight: "500",
              color: "#2c2c2c",
              letterSpacing: "8px",
              lineHeight: "56px",
              textAlign: "center",
            }}
          >
            <p>ご先祖様の安らかな</p>
            <p>お眠りをサポートさせていただきます。</p>
          </div>

          {/* 本文 (1278:208): center=(549.5px, 385.5px) w=919px h=225px */}
          <div
            className="absolute flex flex-col justify-center"
            style={{
              left: "549.5px",
              top: "385.5px",
              width: "919px",
              height: "225px",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-noto-sans-jp), sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              color: "#2c2c2c",
              letterSpacing: "2.24px",
              lineHeight: "37.5px",
              textAlign: "center",
            }}
          >
            <p>五福石材は、墓石クリーニング・造園を通じて、</p>
            <p>
              地域の皆さまの暮らしに寄り添ってまいりました。
              <br />
              ご先祖様を大切にする想い、住まいを美しく保ちたいという願い、人生の節目に寄り添う心。{" "}
            </p>
            <p>私たちはその一つひとつに丁寧に向き合い、信頼と安心をお届けしています。</p>
            <p>「頼んでよかった」――そう言っていただける仕事を、これからも。</p>
          </div>
        </div>
      </div>{/* end hidden md:block (PC layout) */}
    </section>
  );
}
