"use client";
import { motion } from "framer-motion";

// Figma CDN URLs（7日間有効。本番前にpublic/へ移行すること）
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
      className="relative w-full overflow-hidden md:h-[1599px]"
    >
      {/* ── PC 背景画像 ── */}
      <div className="hidden md:block absolute inset-0 h-[1599px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgBg}
          alt=""
          className="absolute top-0 h-full max-w-none"
          style={{ left: "-24.03%", width: "148.06%" }}
        />
      </div>

      {/* ── SP レイアウト ── */}
      <div className="md:hidden relative">
        {/* SP 背景 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgBg} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        {/* SP コンテンツ */}
        <div className="relative px-6 pt-[56px] pb-[56px]">
          {/* ラベル */}
          <p className="text-center text-[13px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-2" style={{ fontFamily: "var(--font-inter)" }}>Service</p>
          {/* 見出し */}
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-[26px] font-medium text-[#1a1a1a] tracking-[2px] leading-[42px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>事業内容</h2>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3" />
          </div>
          {/* 説明文 */}
          <div className="text-[14px] text-[#2c2c2c] leading-[32px] tracking-[0.8px] text-center mb-8" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
            <p className="mb-3">
              暮らしの中で気になる<br />
              お墓やお庭のお悩みに、丁寧にお応えします。
            </p>
            <p className="mb-3">
              お墓の汚れや劣化のケアから、<br />
              お庭の整備まで幅広く対応。
            </p>
            <p>
              ご先祖様への想いを大切に、<br />
              一つひとつ心を込めて仕上げます。
            </p>
          </div>

          {/* 墓石クリーニング */}
          <div className="mb-10">
            <div className="border-l-[4px] border-[#2f7d4e] pl-3 mb-3">
              <h3 className="text-[20px] font-medium text-[#2c2c2c]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>墓石クリーニング</h3>
            </div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgGrave} alt="墓石クリーニング" className="w-full h-[220px] object-cover rounded-[16px]" />
            </div>
            <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
              <p className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]">
                年月とともに蓄積した汚れやコケ、水垢を丁寧に除去し、お墓本来の美しさを取り戻します。
              </p>
              <p className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]">
                手作業によるやさしい洗浄と細部まで行き届いた仕上げで、ご先祖様への感謝の気持ちを形にするお手伝いをいたします。
              </p>
              <p className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]">
                また、ご希望に応じて女性作業員の同行も可能です。
              </p>
            </div>
          </div>

          {/* 造園 */}
          <div>
            <div className="border-l-[4px] border-[#2f7d4e] pl-3 mb-3">
              <h3 className="text-[20px] font-medium text-[#2c2c2c]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>造園</h3>
            </div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgGarden} alt="造園" className="w-full h-[220px] object-cover rounded-[16px]" />
            </div>
            <div className="flex flex-col gap-3" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
              <p className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]">
                女性作業員が丁寧に対応し、お庭のお手入れ・草刈り・除草作業を承ります。
              </p>
              <p className="text-[14px] text-[#2c2c2c] leading-[28px] tracking-[0.8px]">
                どんな小さなお悩みでも、お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PC コンテナ (1278:545): left=170 right=170 top=126 h=1369 ── */}
      <div className="hidden md:block">
      <motion.div
        className="absolute left-[170px] right-[170px] top-[126px] h-[1369px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* Service ラベル (1278:546): center-y=12px */}
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

        {/* 見出し (1278:547): center-x, top=36 h=85 w=215 */}
        <div
          className="absolute h-[85px] w-[215px]"
          style={{ left: "50%", top: "36px", transform: "translateX(-50%)" }}
        >
          {/* 事業内容 text: center at (50%, 35px) */}
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
          {/* 緑アンダーライン */}
          <div
            className="absolute bg-[#2f7d4e] h-[2px] w-[40px]"
            style={{ left: "50%", top: "76px", transform: "translateX(-50%)" }}
          />
        </div>

        {/* 説明文 (1278:550): center=(50%, 217.5px) w=589 h=131 */}
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

        {/* ── 墓石クリーニングセクション (1280:661): left=0 top=420 w=full h=349 ── */}
        <div className="absolute left-0 top-[420px] w-full h-[349px]">

          {/* 写真（マスク付き）: left=-6.74 top=-0.44 w=563 h=385 */}
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

          {/* テキストコンテナ (1280:671): left=582 right=0 top=0 h=374 overflow-clip */}
          <div className="absolute left-[582px] right-0 top-0 h-[374px] overflow-hidden">

            {/* 見出し: border-l-[5px] top=0 left=0 right=224 h=35 */}
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

            {/* 緑アンダーライン1: top=151 left=0 right=71.26% */}
            <div
              className="absolute h-[15px] left-0"
              style={{ right: "71.26%", top: "151px", background: greenUnderline }}
            />

            {/* 説明文: center-y=225.5 w=535 h=231 */}
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

            {/* 緑アンダーライン2: top=259 left=32% right=34.67% */}
            <div
              className="absolute h-[15px]"
              style={{ left: "34%", right: "38%", top: "259px", background: greenUnderline }}
            />
          </div>
        </div>

        {/* ── 造園セクション (1280:660): left=0 top=918 w=full h=349 ── */}
        <div className="absolute left-0 top-[918px] w-full h-[349px]">

          {/* テキストコンテナ (1281:682): left=0 right=582 top=0 h=218 overflow-clip */}
          <div className="absolute left-0 top-0 h-[218px] overflow-hidden" style={{ right: "582px" }}>

            {/* 見出し: border-l-[5px] top=0 left=0 right=441 h=35 */}
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

            {/* 造園説明 (1280:659): left=0 top=110 w=517 h=108 */}
            <div className="absolute left-0 top-[110px] w-[517px] h-[108px]">
              {/* 緑アンダーライン: top=17 left=0 right=70.41% */}
              <div
                className="absolute h-[15px] left-0"
                style={{ right: "70.41%", top: "17px", background: greenUnderline }}
              />
              {/* 説明文: center-y=54 w=517 h=108 */}
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

          {/* 写真（マスク付き）: left=585.26 top=-0.44 w=575 h=384 */}
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
      </div>{/* end hidden md:block (PC layout) */}
    </section>
  );
}
