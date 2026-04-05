const tarotDeck = [
  {
    name: "愚者",
    upright: "适合轻装上阵，新的机会会从意外处出现。",
    reversed: "别急着全盘下注，先确认脚下的路再启程。"
  },
  {
    name: "魔术师",
    upright: "你拥有调动资源的能力，主动出击会更有收获。",
    reversed: "别被表面掌控感迷惑，真正的关键在执行细节。"
  },
  {
    name: "女祭司",
    upright: "直觉很准，今天适合先观察再表态。",
    reversed: "心里已经有答案，只是你还没有完全相信它。"
  },
  {
    name: "皇后",
    upright: "温柔与丰盛同在，创作、表达与关系都容易开花。",
    reversed: "别过度消耗自己，先照顾好情绪与睡眠。"
  },
  {
    name: "皇帝",
    upright: "结构、规则与边界会让你今天更顺手。",
    reversed: "太想控制局面时，反而会让他人退后一步。"
  },
  {
    name: "教皇",
    upright: "遵循成熟经验，向可靠的人请教会很有帮助。",
    reversed: "老办法未必适合今天，适度打破惯性反而有解。"
  },
  {
    name: "恋人",
    upright: "今天适合做重要选择，也利于关系中的真诚沟通。",
    reversed: "别把犹豫拖成误会，先说清你的真实感受。"
  },
  {
    name: "战车",
    upright: "气势很足，行动越果断，结果越容易向你靠拢。",
    reversed: "急着冲刺不如先稳方向，否则容易中途耗力。"
  },
  {
    name: "力量",
    upright: "温和的坚持比强硬的推进更有力量。",
    reversed: "情绪起伏时，先放慢一点，别和自己较劲。"
  },
  {
    name: "隐者",
    upright: "今天适合独处整理思路，答案会在沉静里出现。",
    reversed: "别把自己藏得太深，适时求助能省很多弯路。"
  },
  {
    name: "命运之轮",
    upright: "转机感增强，顺势而为往往比硬推更有用。",
    reversed: "节奏可能不在你掌控里，灵活调整比抱怨有效。"
  },
  {
    name: "正义",
    upright: "适合做判断、签约与确认规则，公平会带来好运。",
    reversed: "如果心里不平，就别急着说定，一定先核对信息。"
  },
  {
    name: "倒吊人",
    upright: "换个角度看问题，今天的卡点会忽然变成出口。",
    reversed: "别一边犹豫一边消耗，给自己一个明确取舍。"
  },
  {
    name: "死神",
    upright: "旧节奏该结束了，腾出位置才能迎来新阶段。",
    reversed: "拖着不放的事会持续拉低能量，果断清理更好。"
  },
  {
    name: "节制",
    upright: "协同、调和与稳步推进，是今天最好的节奏。",
    reversed: "一会儿热情一会儿疲惫，说明你需要重新校准步频。"
  },
  {
    name: "恶魔",
    upright: "今天容易被欲望牵引，越自知越能掌控局面。",
    reversed: "从消耗关系或坏习惯里抽身，会立刻轻松许多。"
  },
  {
    name: "高塔",
    upright: "突发变化会打乱安排，但也会逼出真正的答案。",
    reversed: "若你已感觉到不稳，今天更适合提早处理隐患。"
  },
  {
    name: "星星",
    upright: "愿景感很强，保持相信会让好消息更容易靠近。",
    reversed: "先别怀疑自己，今天需要的是一点耐心而不是否定。"
  },
  {
    name: "月亮",
    upright: "情绪与想象力都很活跃，适合感受但不宜过度脑补。",
    reversed: "误解会慢慢散去，事实比你担心的简单。"
  },
  {
    name: "太阳",
    upright: "能见度和自信同步上升，今天很适合展示自己。",
    reversed: "别因为小失误就收敛光芒，整体其实仍然是上行。"
  },
  {
    name: "审判",
    upright: "今天适合复盘、收尾与回应召唤，拖延会变得清晰。",
    reversed: "别被过去卡住，当下的选择比旧故事更重要。"
  },
  {
    name: "世界",
    upright: "圆满感增强，适合总结成果并开启下一轮旅程。",
    reversed: "接近完成时别松散，补上最后一步就很漂亮。"
  }
];

const hexagrams = [
  {
    name: "乾为天",
    symbol: "刚健上行",
    text: "宜主动、宜开局，今天的关键是信念坚定后立即行动。"
  },
  {
    name: "坤为地",
    symbol: "厚德承载",
    text: "利于包容与配合，柔和的姿态反而更能承接好运。"
  },
  {
    name: "水雷屯",
    symbol: "起步有阻",
    text: "新事别急，多做准备。只要稳住前两步，后面会顺。"
  },
  {
    name: "山水蒙",
    symbol: "以学破局",
    text: "遇到不懂的地方就是今天的转机，主动请教比硬撑更好。"
  },
  {
    name: "水天需",
    symbol: "耐心待时",
    text: "不必强求立刻兑现，时机还在聚拢，静观并不吃亏。"
  },
  {
    name: "天水讼",
    symbol: "慎言避争",
    text: "今天不宜硬碰硬，越想证明自己越容易浪费能量。"
  },
  {
    name: "地水师",
    symbol: "整队而行",
    text: "利于团队推进与有序安排，先确定分工，效果会很好。"
  },
  {
    name: "水地比",
    symbol: "相助成势",
    text: "合作运不错，主动示好与建立信任会带来额外助力。"
  },
  {
    name: "风天小畜",
    symbol: "蓄势待发",
    text: "小步积累比大步猛冲更稳，今天很适合默默铺路。"
  },
  {
    name: "天泽履",
    symbol: "谨慎前行",
    text: "每一步都能走，但要讲究分寸。礼貌与克制是你的护身符。"
  },
  {
    name: "地天泰",
    symbol: "万事通达",
    text: "整体氛围偏顺，适合见面、沟通、推动进度。"
  },
  {
    name: "天地否",
    symbol: "闭塞反思",
    text: "若事情卡住，不一定是你做得不够，而是时机仍需等待。"
  }
];

const zodiacs = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const colors = ["朱砂红", "松烟墨", "月白", "竹青", "琥珀金", "靛蓝", "茶棕", "霁青"];
const directions = ["正东", "东南", "正南", "西南", "正西", "西北", "正北", "东北"];
const actions = [
  "把最重要的一件事提前到上午完成",
  "给正在推进的事情多预留半小时缓冲",
  "主动联系一个你信任的人",
  "整理桌面与待办，清掉旧负担",
  "先说重点，再谈情绪",
  "留一段独处时间，别让信息过载",
  "今天更适合精修，而不是盲目扩张",
  "先答应自己一件小事，并认真完成"
];

const summaries = [
  { min: 86, title: "上上签", text: "今天的气场很亮，重要安排有望得到回应。" },
  { min: 72, title: "上吉签", text: "整体稳中向好，只要节奏别乱，运势会持续抬升。" },
  { min: 56, title: "平顺签", text: "今天更适合稳步推进，少一点贪快会更顺。" },
  { min: 0, title: "静心签", text: "外界噪音偏多，先稳住自己，反而能看到转机。" }
];

const textBank = {
  career: [
    "适合推进谈判、发消息和安排协作，越主动越有回应。",
    "工作上宜先清主线任务，再处理零碎事务，效率会明显提升。",
    "今天不宜硬顶流程，多借助已有规则，推进会更顺。",
    "一个延后的想法值得重新拿出来，它今天更容易落地。"
  ],
  love: [
    "表达越真诚，关系越容易升温，别让试探取代沟通。",
    "今天适合降低预设，带着好奇心去理解对方。",
    "对旧情绪要轻拿轻放，别把昨天的波动带进今天。",
    "关系中的温柔边界，会比讨好更有吸引力。"
  ],
  wealth: [
    "财运偏向稳健型，适合整理预算、控制冲动消费。",
    "今天的小机会来自信息差，先核对细节再决定。",
    "与其想着一口吃成，不如做好一笔稳妥的小收益。",
    "花钱在提升效率的工具上，会比情绪消费更值。"
  ],
  energy: [
    "今天的状态像缓慢升温，热身之后反而越做越顺。",
    "身体需要更规律的节奏，尤其注意补水与休息。",
    "下午容易分神，给自己一个短暂放空会更有效。",
    "少刷一点无意义信息，你的精神会立刻清亮许多。"
  ],
  guidance: [
    "今天最适合把注意力收回来。你不需要同时回应所有声音，只需要抓住最值得推进的一件事。",
    "好运更偏向愿意整理内心的人。先稳住节奏，再出手，很多事会比想象中更顺。",
    "你今天的关键不是做更多，而是做更准。把能量聚焦在真正重要的人和事上。",
    "如果感到摇摆，先回到身体和呼吸。你稳定下来以后，局势就会开始配合你。"
  ]
};

const form = document.getElementById("divination-form");
const resultView = document.getElementById("result-view");
const emptyState = document.getElementById("empty-state");
const birthdateInput = document.getElementById("birthdate");
const zodiacInput = document.getElementById("zodiac");

function hashString(input) {
  let h1 = 1779033703;
  let h2 = 3144134277;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 3432918353);
    h2 = Math.imul(h2 ^ ch, 2246822507);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  return (h1 ^ (h1 >>> 16)) >>> 0;
}

function createRng(seed) {
  let t = seed >>> 0;
  return function rng() {
    t += 0x6d2b79f5;
    let v = Math.imul(t ^ (t >>> 15), 1 | t);
    v ^= v + Math.imul(v ^ (v >>> 7), 61 | v);
    return ((v ^ (v >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, list) {
  return list[Math.floor(rng() * list.length)];
}

function calcZodiacHarmony(zodiac, targetDate) {
  const index = zodiacs.indexOf(zodiac);
  const dayNumber = new Date(targetDate).getDate();
  return ((index + 1) * 7 + dayNumber * 3) % 18;
}

function scoreLabel(value) {
  return `${value} 分`;
}

function resolveSummary(score) {
  return summaries.find((item) => score >= item.min) || summaries[summaries.length - 1];
}

function inferZodiac(dateString) {
  if (!dateString) {
    return "";
  }

  const year = new Date(dateString).getFullYear();

  if (Number.isNaN(year)) {
    return "";
  }

  return zodiacs[(year - 4 + 1200) % 12];
}

function renderResult(result) {
  emptyState.classList.add("hidden");
  resultView.classList.remove("hidden");

  document.getElementById("fortune-title").textContent = result.title;
  document.getElementById("fortune-summary").textContent = result.summary;
  document.getElementById("fortune-score").textContent = result.totalScore;

  document.getElementById("career-score").textContent = scoreLabel(result.careerScore);
  document.getElementById("career-text").textContent = result.careerText;
  document.getElementById("love-score").textContent = scoreLabel(result.loveScore);
  document.getElementById("love-text").textContent = result.loveText;
  document.getElementById("wealth-score").textContent = scoreLabel(result.wealthScore);
  document.getElementById("wealth-text").textContent = result.wealthText;
  document.getElementById("energy-score").textContent = scoreLabel(result.energyScore);
  document.getElementById("energy-text").textContent = result.energyText;

  document.getElementById("tarot-name").textContent = result.tarot.name;
  document.getElementById("tarot-orientation").textContent = result.tarot.orientation;
  document.getElementById("tarot-message").textContent = result.tarot.message;

  document.getElementById("hexagram-name").textContent = result.hexagram.name;
  document.getElementById("hexagram-symbol").textContent = result.hexagram.symbol;
  document.getElementById("hexagram-message").textContent = result.hexagram.text;

  document.getElementById("lucky-color").textContent = result.luckyColor;
  document.getElementById("lucky-number").textContent = result.luckyNumber;
  document.getElementById("lucky-direction").textContent = result.luckyDirection;
  document.getElementById("daily-action").textContent = result.dailyAction;
  document.getElementById("daily-guidance").textContent = result.guidance;
}

function generateDivination(formData) {
  const nickname = formData.get("nickname")?.trim() || "你";
  const birthdate = formData.get("birthdate");
  const zodiac = formData.get("zodiac");
  const targetDate = formData.get("target-date");
  const focus = formData.get("focus")?.trim() || "今日整体运势";

  const seed = hashString(`${nickname}|${birthdate}|${zodiac}|${targetDate}|${focus}`);
  const rng = createRng(seed);

  const birthDay = new Date(birthdate);
  const birthInfluence = ((birthDay.getFullYear() % 100) + birthDay.getMonth() + 1 + birthDay.getDate()) % 11;
  const harmony = calcZodiacHarmony(zodiac, targetDate);

  const totalScore = 48 + Math.floor(rng() * 40) + birthInfluence + Math.floor(harmony / 3);
  const boundedTotal = Math.min(99, totalScore);

  const careerScore = Math.min(99, 45 + Math.floor(rng() * 33) + birthInfluence + Math.floor(harmony / 4));
  const loveScore = Math.min(99, 42 + Math.floor(rng() * 36) + Math.floor(harmony / 2));
  const wealthScore = Math.min(99, 40 + Math.floor(rng() * 35) + birthInfluence);
  const energyScore = Math.min(99, 44 + Math.floor(rng() * 34) + Math.floor(harmony / 3));

  const tarot = pick(rng, tarotDeck);
  const tarotReversed = rng() > 0.54;
  const hexagram = pick(rng, hexagrams);
  const summary = resolveSummary(boundedTotal);

  return {
    title: `${summary.title} · ${nickname}的${targetDate}命盘`,
    summary: `${summary.text} 今日心念主题是“${focus}”。`,
    totalScore: boundedTotal,
    careerScore,
    loveScore,
    wealthScore,
    energyScore,
    careerText: pick(rng, textBank.career),
    loveText: pick(rng, textBank.love),
    wealthText: pick(rng, textBank.wealth),
    energyText: pick(rng, textBank.energy),
    tarot: {
      name: tarot.name,
      orientation: tarotReversed ? "逆位" : "正位",
      message: tarotReversed ? tarot.reversed : tarot.upright
    },
    hexagram,
    luckyColor: pick(rng, colors),
    luckyNumber: String(1 + Math.floor(rng() * 9)),
    luckyDirection: pick(rng, directions),
    dailyAction: pick(rng, actions),
    guidance: pick(rng, textBank.guidance)
  };
}

function setToday() {
  const today = new Date();
  const offset = today.getTimezoneOffset() * 60000;
  const localDate = new Date(today.getTime() - offset).toISOString().split("T")[0];
  document.getElementById("target-date").value = localDate;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const result = generateDivination(formData);
  renderResult(result);
});

setToday();

birthdateInput.addEventListener("change", () => {
  const inferred = inferZodiac(birthdateInput.value);

  if (inferred) {
    zodiacInput.value = inferred;
  }
});
