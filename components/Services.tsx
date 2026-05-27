"use client";
import { motion } from "framer-motion";

const imgBg     = "/images/services/services-bg.png";
const imgMask   = "/images/services/services-mask.svg";
const imgGrave  = "/images/services/services-grave.png";
const imgGarden = "/images/services/services-garden.png";

const greenUnderline = "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(70,147,97,0.4) 50%)";

const maskStyle = {
  maskImage: `url(${imgMask})`,
  WebkitMaskImage: `url(${imgMask})`,
  maskSize: "512px 349px",
  WebkitMaskSize: "512px 349px",
  maskPosition: "6.742px 0.438px",
  WebkitMaskPosition: "6.742px 0.438px",
  maskRepeat: "no-repeat" as const,
  WebkitMaskRepeat: "no-repeat",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
    >
      {/* ── SP: Flow layout ── */}
      <div className="md:hidden relative">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgBg}
            alt=""
            className="absolute top-0 h-full max-w-none"
            style={{ left: "-24.03%", width: "148.06%" }}
          />
        </div>

        <div className="relative px-4 pt-12 pb-12">
          {/* Section label */}
          <motion.p
            className="text-center text-[18px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Service
          </motion.p>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <h2
              className="text-[28px] font-medium text-[#1a1a1a] tracking-[4px]"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              事業内容
            </h2>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-2" />
          </motion.div>

          {/* Intro text */}
          <motion.p
            className="text-[13px] text-[#2c2c2c] tracking-[0.8px] leading-[2.2] text-center mb-10"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            暮らしの中で気になるお墓やお庭のお悩みに、丁寧にお応えします。<br />
            お墓の汚れや劣化のケアから、お庭の整備まで幅広く対応。<br />
            ご先祖様への想いを大切に、一つひとつ心を込めて仕上げます。<br />
            どんな小さなことでも、まずはお気軽にご相談ください。
          </motion.p>

          {/* 墓石クリーニング */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="flex items-center border-l-[5px] border-[#2f7d4e] pl-3 mb-4">
              <h3
                className="text-[24px] font-normal text-[#2c2c2c]"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                墓石クリーニング
              </h3>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgGrave}
              alt="墓石クリーニング"
              className="w-full aspect-[4/3] object-cover rounded-[12px] mb-4"
            />
            <p
              className="text-[13px] text-[#2c2c2c] tracking-[0.8px] leading-[2.2]"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              年月とともに蓄積した汚れやコケ、水垢を丁寧に除去し、お墓本来の美しさを取り戻します。
              手作業によるやさしい洗浄と細部まで行き届いた仕上げで、ご先祖様への感謝の気持ちを形にするお手伝いをいたします。
              また、ご希望に応じて女性作業員の同行も可能です。墓石クリーニング以外のお墓に関するお悩みも、お気軽にご相談ください。
            </p>
          </motion.div>

          {/* 造園 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="flex items-center border-l-[5px] border-[#2f7d4e] pl-3 mb-4">
              <h3
                className="text-[24px] font-normal text-[#2c2c2c]"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                造園
              </h3>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgGarden}
              alt="造園"
              className="w-full aspect-[4/3] object-cover rounded-[12px] mb-4"
            />
            <p
              className="text-[13px] text-[#2c2c2c] tracking-[0.8px] leading-[2.2]"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              女性作業員が丁寧に対応し、お庭のお手入れ・草刈り・除草作業を承ります。
              どんな小さなお悩みでも、お気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── PC: Figma absolute-positioned layout ── */}
      <div className="hidden md:block" style={{ height: "1599px" }}>
        {/* 背景画像 */}
        <div className="absolute inset-0 h-[1599px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgBg}
            alt=""
            className="absolute top-0 h-full max-w-none"
            style={{ left: "-24.03%", width: "148.06%" }}
          />
        </div>

        {/* コンテナ */}
        <motion.div
          className="absolute left-[170px] right-[170px] top-[126px] h-[1369px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Service ラベル */}
          <div
            className="absolute left-0 right-0 flex justify-center"
            style={{ top: "12px", transform: "translateY(-50%)" }}
          >
            <p
              className="font-medium uppercase text-[#2f7d4e] tracking-[1.6px]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "20px", lineHeight: "19.6px" }}
            >
              {"Service "}
            </p>
          </div>

          {/* 見出し */}
          <div
            className="absolute h-[85px] w-[215px]"
            style={{ left: "50%", top: "36px", transform: "translateX(-50%)" }}
          >
            <div
              className="absolute flex flex-col justify-center text-center"
              style={{
                left: "50%",
                top: "35px",
                width: "181px",
                height: "46px",
                transform: "translate(-50%, -50%)",
                fontFamily: "var(--font-noto-sans-jp), sans-serif",
                fontSize: "40px",
                fontWeight: "500",
                color: "#1a1a1a",
                letterSpacing: "4.8px",
                lineHeight: "64px",
              }}
            >
              <p>事業内容</p>
            </div>
            <div
              className="absolute bg-[#2f7d4e] h-[2px] w-[40px]"
              style={{ left: "50%", top: "76px", transform: "translateX(-50%)" }}
            />
          </div>

          {/* 説明文 */}
          <div
            className="absolute flex flex-col justify-center text-center"
            style={{
              left: "50%",
              top: "217.5px",
              width: "589px",
              height: "131px",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-noto-sans-jp), sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              color: "#2c2c2c",
              letterSpacing: "0.8px",
              lineHeight: "33px",
            }}
          >
            <p>
              暮らしの中で気になるお墓やお庭のお悩みに、丁寧にお応えします。
              <br />
              {" お墓の汚れや劣化のケアから、お庭の整備まで幅広く対応。"}
              <br />
              {" ご先祖様への想いを大切に、一つひとつ心を込めて仕上げます。"}
              <br />
              {" どんな小さなことでも、まずはお気軽にご相談ください。"}
            </p>
          </div>

          {/* 墓石クリーニングセクション */}
          <div className="absolute left-0 top-[420px] w-full h-[349px]">
            <div
              className="absolute"
              style={{ left: "-6.74px", top: "-0.44px", width: "563px", height: "385px", ...maskStyle }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgGrave}
                alt="墓石クリーニング"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-[582px] right-0 top-0 h-[374px] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-[35px] border-l-[5px] border-[#2f7d4e] border-solid"
                style={{ right: "224px" }}
              >
                <div
                  className="absolute flex flex-col justify-center"
                  style={{
                    left: "5px",
                    top: "18.5px",
                    width: "288px",
                    height: "37px",
                    transform: "translateY(-50%)",
                    fontFamily: "var(--font-noto-sans-jp), sans-serif",
                    fontSize: "35.5px",
                    fontWeight: "400",
                    color: "#2c2c2c",
                    lineHeight: "26px",
                  }}
                >
                  <p>墓石クリーニング</p>
                </div>
              </div>

              <div
                className="absolute h-[15px] left-0"
                style={{ right: "71.26%", top: "151px", background: greenUnderline }}
              />

              <div
                className="absolute flex flex-col justify-center"
                style={{
                  left: 0,
                  top: "225.5px",
                  width: "535px",
                  height: "231px",
                  transform: "translateY(-50%)",
                  fontFamily: "var(--font-noto-sans-jp), sans-serif",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#2c2c2c",
                  letterSpacing: "0.8px",
                  lineHeight: "36px",
                }}
              >
                <p>年月とともに蓄積した汚れやコケ、水垢を丁寧に除去し、</p>
                <p>
                  お墓本来の美しさを取り戻します。
                  <br />
                  手作業によるやさしい洗浄と細部まで行き届いた仕上げで、
                </p>
                <p>ご先祖様への感謝の気持ちを形にするお手伝いをいたします。</p>
                <p>
                  また、ご希望に応じて女性作業員の同行も可能です。
                  <br />
                  墓石クリーニング以外のお墓に関するお悩みも、
                </p>
                <p>お気軽にご相談ください。</p>
              </div>

              <div
                className="absolute h-[15px]"
                style={{ left: "34%", right: "38%", top: "259px", background: greenUnderline }}
              />
            </div>
          </div>

          {/* 造園セクション */}
          <div className="absolute left-0 top-[918px] w-full h-[349px]">
            <div className="absolute left-0 top-0 h-[218px] overflow-hidden" style={{ right: "582px" }}>
              <div
                className="absolute top-0 left-0 h-[35px] border-l-[5px] border-[#2f7d4e] border-solid"
                style={{ right: "441px" }}
              >
                <div
                  className="absolute flex flex-col justify-center"
                  style={{
                    left: "5px",
                    top: "18.5px",
                    width: "71px",
                    height: "37px",
                    transform: "translateY(-50%)",
                    fontFamily: "var(--font-noto-sans-jp), sans-serif",
                    fontSize: "35.5px",
                    fontWeight: "400",
                    color: "#2c2c2c",
                    lineHeight: "26px",
                  }}
                >
                  <p>造園</p>
                </div>
              </div>

              <div className="absolute left-0 top-[110px] w-[517px] h-[108px]">
                <div
                  className="absolute h-[15px] left-0"
                  style={{ right: "70.41%", top: "17px", background: greenUnderline }}
                />
                <div
                  className="absolute flex flex-col justify-center"
                  style={{
                    left: 0,
                    top: "54px",
                    width: "517px",
                    height: "108px",
                    transform: "translateY(-50%)",
                    fontFamily: "var(--font-noto-sans-jp), sans-serif",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#2c2c2c",
                    letterSpacing: "0.8px",
                    lineHeight: "36px",
                  }}
                >
                  <p>女性作業員が丁寧に対応し、</p>
                  <p>
                    お庭のお手入れ・草刈り・除草作業を承ります。
                    <br />
                    どんな小さなお悩みでも、お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute"
              style={{ left: "585.26px", top: "-0.44px", width: "575px", height: "384px", ...maskStyle }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgGarden}
                alt="造園"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
