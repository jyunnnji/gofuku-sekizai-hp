import FadeUp from "@/components/ui/FadeUp";

const imgEllipse1 = "/whyus-ellipse1.svg";
const imgEllipse2 = "/whyus-ellipse2.svg";
const img01 = "/whyus-01.png";
const img02 = "/whyus-02.png";
const img03 = "/whyus-03.png";
const img04 = "/whyus-04.png";
const img05 = "/whyus-05.png";
const img06 = "/whyus-06.png";
// Vector1 = left-side arrows (col1→col2), Vector = right-side arrows (col2→col3)
const imgVector1 = "/whyus-vector1.svg";
const imgVector  = "/whyus-vector2.svg";

const steps = [
  {
    num: "01",
    title: "合掌・線香",
    desc: "まずは線香を炊き、手を合わせてから作業に入ります。",
    img: img01,
    imgH: 162,
    imgW: 243,
    imgTop: 55,
    imgLeft: 62,
    cellTop: 0,
    cellLeft: -72,
    borderRight: true,
  },
  {
    num: "02",
    title: "水を注ぐ",
    desc: "たっぷりの水かけて、大きな汚れを落としていきます。",
    img: img02,
    imgH: 162,
    imgW: 243,
    imgTop: 56,
    imgLeft: 63,
    cellTop: 0,
    cellLeft: 298,
    borderRight: true,
  },
  {
    num: "03",
    title: "研磨",
    desc: "器具は使用せず、原則、手で研磨を行います。",
    img: img03,
    imgH: 121,
    imgW: 201,
    imgTop: 65,
    imgLeft: 84,
    cellTop: 0,
    cellLeft: 668,
    borderRight: false,
  },
  {
    num: "04",
    title: "目地コーキング",
    desc: "コーキングを隙間に入れ直します。",
    img: img04,
    imgH: 82,
    imgW: 130,
    imgTop: 97,
    imgLeft: 120,
    cellTop: 319,
    cellLeft: -72,
    borderRight: true,
  },
  {
    num: "05",
    title: "墨入れ",
    desc: "墨入れの入れ直しを丁寧に行います。",
    img: img05,
    imgH: 134,
    imgW: 223,
    imgTop: 62,
    imgLeft: 73,
    cellTop: 319,
    cellLeft: 298,
    borderRight: true,
  },
  {
    num: "06",
    title: "仕上げ",
    desc: "最後に仕上げを行い、手を合わせて終了します。",
    img: img06,
    imgH: 134,
    imgW: 223,
    imgTop: 62,
    imgLeft: 74,
    cellTop: 319,
    cellLeft: 668,
    borderRight: false,
  },
];

function StepItem({ step }: { step: (typeof steps)[number] }) {
  return (
    <div
      style={{
        position: "absolute",
        top: step.cellTop,
        left: step.cellLeft,
        width: 370,
        height: 319,
      }}
      className={step.borderRight ? "border-r border-dashed border-[#ddd]" : ""}
    >
      {/* Number */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 20,
          fontFamily: "var(--font-inter)",
          fontSize: 48,
          fontWeight: 900,
          color: "#edc920",
          letterSpacing: -1,
          lineHeight: 1,
          textShadow:
            "-1px -1px 1px #575252,1px -1px 1px #575252,-1px 1px 1px #575252,1px 1px 1px #575252",
        }}
      >
        {step.num}
      </span>

      {/* Title */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: 34.5,
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-noto-sans-jp)",
          fontSize: 17.5,
          fontWeight: 700,
          color: "#2c2c2c",
          letterSpacing: "0.87px",
          whiteSpace: "nowrap",
        }}
      >
        {step.title}
      </span>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.img}
        alt={step.title}
        style={{
          position: "absolute",
          top: step.imgTop,
          left: step.imgLeft,
          height: step.imgH,
          width: step.imgW,
          objectFit: "contain",
        }}
      />

      {/* Description */}
      <p
        style={{
          position: "absolute",
          left: "50%",
          top: 255,
          transform: "translate(-50%, -50%)",
          width: 231,
          fontFamily: "var(--font-noto-sans-jp)",
          fontSize: 15,
          color: "#2c2c2c",
          textAlign: "center",
          letterSpacing: "2.24px",
          lineHeight: "37.5px",
          margin: 0,
        }}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#fcfaf2] overflow-hidden pt-[172px] pb-[90px]"
    >
      {/* Decorative ellipses */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgEllipse1}
        alt=""
        className="absolute left-[-113px] top-[20px] w-[323px] h-[323px] pointer-events-none"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgEllipse2}
        alt=""
        className="absolute right-[-72px] top-[414px] w-[209px] h-[209px] pointer-events-none"
      />

      {/* Content container: left 175px, right 165px (asymmetric per Figma) */}
      <div className="max-w-[1440px] mx-auto pl-[175px] pr-[165px]">
        <FadeUp>
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WHY CHOOSE US
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mt-5 mb-0">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材が選ばれる理由
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>
        </FadeUp>

        {/* Body text */}
        <FadeUp delay={0.1}>
        <div
          className="text-center mt-[117px] mb-[124px] text-[18px] text-[#2c2c2c] tracking-[2.24px]"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          <p className="leading-[37.5px] mb-0">
            ご先祖様の背中を流すように。<br />
            私たちは、真心を込めて一基一基丁寧にクリーニングしております。
          </p>
          <p className="leading-[37.5px] mb-0">
            お墓に関わる仕事に
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>30年以上</span>
            携わってきた経験を活かし、墓石の状態に合わせた丁寧な施工を行っております。
          </p>
          <p className="leading-[37.5px] mb-0">
            高圧洗浄機などに頼りすぎず、原則として
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>手作業</span>
            で墓石を洗浄・研磨。<br />
            細かな汚れや水垢、コケまで時間をかけて磨き上げます。
          </p>
          <p className="leading-[37.5px] mb-0">
            丁寧に施工することで、
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>墓石本来の美しさ</span>
            を取り戻すだけでなく、
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>ひび割れ</span>
            や
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>劣化の予防</span>
            にもつながります。
          </p>
          <p className="leading-[37.5px]">
            「頼んでよかった」と感じていただけるよう、最後まで
            <span className="font-semibold" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(70,147,97,0.4) 50%)", backgroundRepeat: "no-repeat", backgroundSize: "100% 20px", backgroundPosition: "center bottom" }}>心を込めて</span>
            対応いたします。
          </p>
        </div>
        </FadeUp>

        {/* Steps white card — 1110px wide (content 1100px - 5px each side) */}
        <FadeUp delay={0.15}>
        <div
          className="bg-white rounded-[20px] overflow-hidden relative"
          style={{ height: 713, marginLeft: -5, marginRight: -5 }}
        >
          {/* POINT badge */}
          <div className="absolute top-[22px] right-[56px] bg-white border-[3px] border-[#ea6d62] rounded-[10px] h-[39px] px-4 flex items-center">
            <span
              className="text-[20px] font-bold text-[#ea6d62] tracking-[2.24px] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              point
            </span>
            <div
              className="absolute bottom-[-12px] left-4 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "12px solid #ea6d62",
              }}
            />
          </div>

          {/* List container: 965px wide at top=50, left=72 within the card */}
          <div
            className="absolute"
            style={{ top: 50, left: 72, right: 73, height: 613 }}
          >
            {/* 6 step items */}
            {steps.map((step) => (
              <StepItem key={step.num} step={step} />
            ))}

            {/* Arrows — container-query wrapper for correct rotated fill */}
            {/* Row 1: col1→col2 (Vector1) */}
            <div
              className="absolute flex items-center justify-center"
              style={{ top: "18.27%", bottom: "74.06%", left: "28.29%", right: "66.53%", containerType: "size" } as React.CSSProperties}
            >
              <div className="flex-none h-[100cqw] w-[100cqh] rotate-90">
                <div className="relative size-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            {/* Row 1: col2→col3 (Vector) */}
            <div
              className="absolute flex items-center justify-center"
              style={{ top: "18.27%", bottom: "74.06%", left: "66.63%", right: "28.19%", containerType: "size" } as React.CSSProperties}
            >
              <div className="flex-none h-[100cqw] w-[100cqh] rotate-90">
                <div className="relative size-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
            {/* Row 2: col1→col2 (Vector1) */}
            <div
              className="absolute flex items-center justify-center"
              style={{ top: "71.78%", bottom: "20.55%", left: "28.29%", right: "66.53%", containerType: "size" } as React.CSSProperties}
            >
              <div className="flex-none h-[100cqw] w-[100cqh] rotate-90">
                <div className="relative size-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            {/* Row 2: col2→col3 (Vector) */}
            <div
              className="absolute flex items-center justify-center"
              style={{ top: "71.78%", bottom: "20.55%", left: "66.63%", right: "28.19%", containerType: "size" } as React.CSSProperties}
            >
              <div className="flex-none h-[100cqw] w-[100cqh] rotate-90">
                <div className="relative size-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
