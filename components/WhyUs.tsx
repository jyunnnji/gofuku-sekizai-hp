const imgPrayer =
  "https://www.figma.com/api/mcp/asset/51a6cb04-6f69-4e85-a6ee-be4dc39313d2";
const imgWater =
  "https://www.figma.com/api/mcp/asset/3b8d2495-8158-47f6-9941-a09bea4c0e74";
const imgPolish =
  "https://www.figma.com/api/mcp/asset/7fba8866-673d-439f-93d2-7921fa4a41c5";
const imgCaulk =
  "https://www.figma.com/api/mcp/asset/26c55614-8821-48f8-adb6-c7cc68565b07";
const imgInk =
  "https://www.figma.com/api/mcp/asset/8c7cab0d-7457-4e4d-8d3d-3bb8fd162039";
const imgFinish =
  "https://www.figma.com/api/mcp/asset/14947602-c9c8-4f05-b299-79a2e0fbbea6";
const imgArrow =
  "https://www.figma.com/api/mcp/asset/c95ee2b3-323b-4e37-b2b2-17df09b0762b";
const imgEllipse1 =
  "https://www.figma.com/api/mcp/asset/32dcc521-873a-4780-9533-9e5e2f257df2";
const imgEllipse2 =
  "https://www.figma.com/api/mcp/asset/c0030689-181c-44ff-ac11-dbbfc0790863";

const steps = [
  {
    num: "01",
    title: "合掌・線香",
    desc: "まずは線香を炊き、手を合わせてから作業に入ります。",
    img: imgPrayer,
    imgH: 162,
    imgW: 243,
  },
  {
    num: "02",
    title: "水を注ぐ",
    desc: "たっぷりの水かけて、大きな汚れを落としていきます。",
    img: imgWater,
    imgH: 162,
    imgW: 243,
  },
  {
    num: "03",
    title: "研磨",
    desc: "器具は使用せず、原則、手で研磨を行います。",
    img: imgPolish,
    imgH: 121,
    imgW: 201,
  },
  {
    num: "04",
    title: "目地コーキング",
    desc: "コーキングを隙間に入れ直します。",
    img: imgCaulk,
    imgH: 82,
    imgW: 130,
  },
  {
    num: "05",
    title: "墨入れ",
    desc: "墨入れの入れ直しを丁寧に行います。",
    img: imgInk,
    imgH: 134,
    imgW: 223,
  },
  {
    num: "06",
    title: "仕上げ",
    desc: "最後に仕上げを行い、手を合わせて終了します。",
    img: imgFinish,
    imgH: 134,
    imgW: 223,
  },
];

const numStyle = {
  fontFamily: "var(--font-inter)",
  textShadow:
    "-1px -1px 1px #575252,1px -1px 1px #575252,-1px 1px 1px #575252,1px 1px 1px #575252",
};

function StepCell({
  step,
  borderRight,
}: {
  step: (typeof steps)[0];
  borderRight: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center pt-8 pb-8 px-4 ${
        borderRight ? "border-r border-dashed border-[#ddd]" : ""
      }`}
    >
      {/* Number + Title */}
      <div className="relative w-full h-[50px] flex items-center justify-center mb-5">
        <span
          className="absolute left-4 text-[48px] font-black text-[#edc920] tracking-[-1px] leading-none"
          style={numStyle}
        >
          {step.num}
        </span>
        <span
          className="text-[17.5px] font-bold text-[#2c2c2c] tracking-[0.87px]"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          {step.title}
        </span>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center" style={{ height: 170 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.img}
          alt={step.title}
          style={{
            height: step.imgH,
            width: step.imgW,
            objectFit: "contain",
          }}
        />
      </div>

      {/* Description */}
      <p
        className="text-[15px] text-[#2c2c2c] text-center tracking-[2.24px] leading-[37.5px] mt-4"
        style={{ fontFamily: "var(--font-noto-sans-jp)" }}
      >
        {step.desc}
      </p>
    </div>
  );
}

function StepRow({ rowSteps }: { rowSteps: (typeof steps)[0][] }) {
  return (
    <div className="relative grid grid-cols-3">
      {rowSteps.map((step, col) => (
        <StepCell key={step.num} step={step} borderRight={col < 2} />
      ))}
      {/* Arrow between col1 and col2 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgArrow}
        alt=""
        className="absolute pointer-events-none z-10"
        style={{
          left: "33.33%",
          top: "34px",
          transform: "translateX(-50%) rotate(90deg)",
          width: 48,
          height: 48,
          objectFit: "contain",
        }}
      />
      {/* Arrow between col2 and col3 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgArrow}
        alt=""
        className="absolute pointer-events-none z-10"
        style={{
          left: "66.67%",
          top: "34px",
          transform: "translateX(-50%) rotate(90deg)",
          width: 48,
          height: 48,
          objectFit: "contain",
        }}
      />
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

        {/* Steps white card */}
        <div className="bg-white rounded-[20px] overflow-hidden relative">
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

          <div className="px-[72px] pt-[50px] pb-[50px]">
            <StepRow rowSteps={steps.slice(0, 3)} />
            <div className="border-t border-dashed border-[#ddd]" />
            <StepRow rowSteps={steps.slice(3, 6)} />
          </div>
        </div>
      </div>
    </section>
  );
}
