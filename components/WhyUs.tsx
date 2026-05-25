const imgEllipse1 =
  "https://www.figma.com/api/mcp/asset/32dcc521-873a-4780-9533-9e5e2f257df2";
const imgEllipse2 =
  "https://www.figma.com/api/mcp/asset/c0030689-181c-44ff-ac11-dbbfc0790863";
const img01 =
  "https://www.figma.com/api/mcp/asset/e0d1a00e-9a9e-4665-b491-4130091fea53";
const img02 =
  "https://www.figma.com/api/mcp/asset/dab7c62b-c8e8-456c-8e6c-a1acb023d4e1";
const img03 =
  "https://www.figma.com/api/mcp/asset/41f8af72-058d-4af7-94d6-91201581372c";
const img04 =
  "https://www.figma.com/api/mcp/asset/bdc7e157-2c2f-4a6c-9180-d635e2853045";
const img05 =
  "https://www.figma.com/api/mcp/asset/868e877a-2ffb-4fd4-b7bf-70936efee769";
const img06 =
  "https://www.figma.com/api/mcp/asset/3007f245-eb7e-4883-94fa-53934373ace7";
const imgArrowLeft =
  "https://www.figma.com/api/mcp/asset/5ddc6ea1-c1f8-492f-a010-15a70dfb8b8f";
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/f13ce52a-5d10-49f1-97f4-1b03a104ad56";

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
      className="relative bg-[#fcfaf2] overflow-hidden py-20"
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

      <div className="max-w-[1440px] mx-auto px-[175px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WHY CHOOSE US
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mt-3 mb-3">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材が選ばれる理由
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>

        {/* Body text */}
        <div
          className="text-center mt-10 mb-16 text-[18px] text-[#2c2c2c] tracking-[2.24px]"
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

        {/* Steps white card — 1110px wide (content 1090px + 10px each side) */}
        <div
          className="bg-white rounded-[20px] overflow-hidden relative"
          style={{ height: 713, marginLeft: -10, marginRight: -10 }}
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
            {/* Horizontal divider spanning full card width */}
            <div
              className="absolute border-t border-dashed border-[#ddd]"
              style={{ top: 319, left: -72, right: -73 }}
            />

            {/* 6 step items */}
            {steps.map((step) => (
              <StepItem key={step.num} step={step} />
            ))}

            {/* Row 1 arrows — 50×47px, rotated 90° to point right */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgArrowLeft}
              alt=""
              className="absolute pointer-events-none"
              style={{ top: 112, left: 273, width: 50, height: 47, objectFit: "contain", transform: "rotate(90deg)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgArrowRight}
              alt=""
              className="absolute pointer-events-none"
              style={{ top: 112, left: 643, width: 50, height: 47, objectFit: "contain", transform: "rotate(90deg)" }}
            />

            {/* Row 2 arrows */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgArrowLeft}
              alt=""
              className="absolute pointer-events-none"
              style={{ top: 440, left: 273, width: 50, height: 47, objectFit: "contain", transform: "rotate(90deg)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgArrowRight}
              alt=""
              className="absolute pointer-events-none"
              style={{ top: 440, left: 643, width: 50, height: 47, objectFit: "contain", transform: "rotate(90deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
