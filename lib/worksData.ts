export type WorkItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imgBefore: string;
  imgAfter: string;
};

const imgBefore = "https://www.figma.com/api/mcp/asset/42d32aa1-fab3-44e6-b4b9-41e6c3c0f264";
const imgAfter  = "https://www.figma.com/api/mcp/asset/df6689f6-07c2-4ba3-a29e-1910a7ac6f76";

export const worksItems: WorkItem[] = [
  {
    id: "001",
    title: "墓石の黒ずみ・コケ除去",
    category: "墓石クリーニング",
    location: "北九州市",
    description: "黒ずみやコケが全体に広がっていた墓石を、専用洗剤と手洗いで丁寧にクリーニング。自然な白さを取り戻しました。",
    imgBefore,
    imgAfter,
  },
  {
    id: "002",
    title: "経年汚れの全体クリーニング",
    category: "墓石クリーニング",
    location: "北九州市",
    description: "長年の経年劣化で全体的にくすんでいた墓石を徹底洗浄。彫刻部分の汚れも細部まで取り除きました。",
    imgBefore,
    imgAfter,
  },
  {
    id: "003",
    title: "水垢・苔の除去と磨き",
    category: "墓石クリーニング",
    location: "飯塚市",
    description: "水垢と苔が目立つ石材を専用道具で除去し、最後に磨き上げることで美しい光沢を復元しました。",
    imgBefore,
    imgAfter,
  },
  {
    id: "004",
    title: "墓所全体の清掃・整備",
    category: "墓石クリーニング",
    location: "直方市",
    description: "墓石本体に加え、周囲の玉砂利・香炉・花立ても含めた墓所全体のクリーニングを実施しました。",
    imgBefore,
    imgAfter,
  },
  {
    id: "005",
    title: "黒御影石の艶出し洗浄",
    category: "墓石クリーニング",
    location: "田川市",
    description: "黒御影石特有の深みのある艶が失われていた墓石を、素材に合わせた専用クリーナーで仕上げました。",
    imgBefore,
    imgAfter,
  },
  {
    id: "006",
    title: "お墓周りの雑草除去・整備",
    category: "造園",
    location: "北九州市",
    description: "墓所周辺に繁茂していた雑草を根から除去し、砂利の補充・敷き直しで清潔感ある環境に整備しました。",
    imgBefore,
    imgAfter,
  },
];
