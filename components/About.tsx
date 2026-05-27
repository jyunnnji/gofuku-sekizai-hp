"use client";
import { motion } from "framer-motion";

const imgRight = "/images/about/about-right.png";
const imgLeft = "/images/about/about-left.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#fcfaf2] overflow-hidden h-auto md:h-[749px]"
    >
      {/* ── SP: Flow layout ── */}
      <div className="md:hidden px-4 py-12 flex flex-col items-center text-center">
        {/* Section label */}
        <motion.p
          className="text-[20px] font-bold tracking-[4px] mb-6"
          style={{ fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#2c2c2c]">-</span>
          <span className="text-[#2f7d4e]">{" 五福石材"}</span>
          <span className="text-[#2c2c2c]">{"について -"}</span>
        </motion.p>

        {/* Images — side by side */}
        <motion.div
          className="flex gap-3 mb-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Right image */}
          <div className="relative flex-1 aspect-[3/4] rounded-[8px] overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgRight} alt="五福石材の施工風景" className="relative z-10 w-full h-full object-cover" />
          </div>
          {/* Left image */}
          <div className="relative flex-1 aspect-[3/4] rounded-[8px] overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgLeft} alt="施工事例" className="relative z-10 w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-[18px] font-medium text-[#2c2c2c] tracking-[2px] leading-[1.9] mb-4"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          ご先祖様の安らかな<br />
          お眠りをサポートさせていただきます。
        </motion.h2>

        {/* Body text */}
        <motion.div
          className="text-[13px] text-[#2c2c2c] tracking-[0.8px] leading-[2.2] text-center"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <p>五福石材は、墓石クリーニング・造園を通じて、</p>
          <p>地域の皆さまの暮らしに寄り添ってまいりました。</p>
          <p>ご先祖様を大切にする想い、住まいを美しく保ちたいという願い、人生の節目に寄り添う心。</p>
          <p>私たちはその一つひとつに丁寧に向き合い、信頼と安心をお届けしています。</p>
          <p>「頼んでよかった」――そう言っていただける仕事を、これからも。</p>
        </motion.div>
      </div>

      {/* ── PC: Figma absolute-positioned layout ── */}
      <div className="hidden md:block">
        {/* 画像1: 右上 */}
        <motion.div
          className="absolute right-0 top-[35px] w-[327px] h-[426px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-[32px_32px_0_0]"
            style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgRight}
            alt="五福石材の施工風景"
            className="absolute left-[32px] top-0 w-[295px] h-[394px] object-cover"
          />
          <div
            className="absolute inset-[0_0_32px_32px]"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))" }}
          />
        </motion.div>

        {/* 画像2: 左中 */}
        <motion.div
          className="absolute left-0 top-[348px] w-[268px] h-[348px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div
            className="absolute inset-[0_0_20px_0]"
            style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgLeft}
            alt="施工事例"
            className="absolute left-0 top-[28px] w-[240px] h-[320px] object-cover"
          />
          <div
            className="absolute inset-[28px_28px_0_0]"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))" }}
          />
        </motion.div>

        {/* テキストコンテナ */}
        <div className="absolute left-[170px] right-[170px] top-[160px] h-[635px] text-center">
          {/* セクションラベル */}
          <div
            className="absolute left-0 right-0 flex flex-col justify-center"
            style={{ top: "63px", height: "28px", transform: "translateY(-50%)" }}
          >
            <p
              className="font-bold tracking-[8px]"
              style={{
                fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif",
                fontSize: "40px",
                lineHeight: "39.2px",
              }}
            >
              <span className="text-[#2c2c2c]">-</span>
              <span className="text-[#2f7d4e]">{" 五福石材"}</span>
              <span className="text-[#2c2c2c]">{"について -"}</span>
            </p>
          </div>

          {/* メイン見出し */}
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

          {/* 本文 */}
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
      </div>
    </section>
  );
}
