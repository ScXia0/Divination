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

const summaries = [
  { min: 84, title: "上上签", text: "今天的气场偏亮，重要安排更容易得到回应。" },
  { min: 70, title: "上吉签", text: "整体节奏在变顺，只要不乱阵脚，推进感会越来越清楚。" },
  { min: 58, title: "平顺签", text: "今天更适合稳步推进，少一点贪快会更顺。" },
  { min: 0, title: "静心签", text: "今天的外界噪音略多，先稳住自己，反而能找到转机。" }
];

const metricDefinitions = {
  career: {
    label: "事业",
    base: 64,
    birthWeight: 0.9,
    dayWeight: 1.1,
    zodiacWeight: 0.7,
    tarotSalt: 5,
    hexSalt: 4,
    narratives: {
      high: [
        "事业面推进感比较强，适合把关键事项往前提。",
        "今天在执行和统筹上更容易进入状态，越清晰越有结果。",
        "工作上的响应度偏高，主动发起会更占优势。"
      ],
      mid: [
        "事业面属于稳中可推，按步骤来会比硬冲更有效。",
        "今天适合先抓主线，再处理零碎任务。",
        "把重点排清楚之后，事业位会慢慢转顺。"
      ],
      low: [
        "事业位今天不适合贪快，先把节奏理顺更重要。",
        "这项运势略偏保守，先补足信息再推进会更稳。",
        "如果感觉卡住，多半不是能力问题，而是时机和顺序要再调一下。"
      ]
    }
  },
  love: {
    label: "感情",
    base: 64,
    birthWeight: 0.8,
    dayWeight: 0.9,
    zodiacWeight: 1.0,
    tarotSalt: 3,
    hexSalt: 5,
    narratives: {
      high: [
        "感情面回温速度不错，真诚表达通常会有回应。",
        "今天更容易产生共鸣感，适合把话说清楚。",
        "关系运偏暖，主动靠近往往比反复猜测更有用。"
      ],
      mid: [
        "感情面整体平稳，少一点预设，多一点倾听会更顺。",
        "今天适合温和推进，不必一下子把话说满。",
        "关系节奏偏柔和，先稳住情绪比急着定答案更重要。"
      ],
      low: [
        "感情位今天略敏感，越想确认，越要注意表达方式。",
        "关系中的误解需要慢慢拆，不适合用情绪逼结论。",
        "今天更适合先感受和观察，再决定要不要推进。"
      ]
    }
  },
  wealth: {
    label: "财运",
    base: 64,
    birthWeight: 0.9,
    dayWeight: 0.8,
    zodiacWeight: 0.8,
    tarotSalt: 4,
    hexSalt: 6,
    narratives: {
      high: [
        "财务判断比较清楚，适合处理预算、回款和稳妥决策。",
        "财运偏向稳健收益，守住节奏就能见效。",
        "今天在金钱上更适合做有边界的选择。"
      ],
      mid: [
        "财运不算跳跃，更适合稳妥安排而非冲动下注。",
        "今天宜看清投入产出，控制情绪消费会更划算。",
        "金钱面以整理、校准和保守推进为主。"
      ],
      low: [
        "财运今天偏保守，先守住预算比追逐机会更重要。",
        "涉及支出或投资时，更适合慢一点、再确认一次。",
        "金钱面容易受情绪牵动，先分清需要和想要。"
      ]
    }
  },
  energy: {
    label: "精力",
    base: 64,
    birthWeight: 1.0,
    dayWeight: 0.8,
    zodiacWeight: 0.7,
    tarotSalt: 6,
    hexSalt: 3,
    narratives: {
      high: [
        "精力恢复力不错，只要顺着节奏走，会越做越顺。",
        "今天的状态偏亮，适合先启动，再逐步拉高效率。",
        "只要不过度分心，精力会支撑你完成关键事项。"
      ],
      mid: [
        "精力整体可用，但需要靠规律节奏来维持。",
        "状态像缓慢升温，别急着开太多线程。",
        "今天更适合稳定输出，给自己预留一点缓冲。"
      ],
      low: [
        "精力位略显吃紧，少开分支、少被打断会更好。",
        "今天的状态需要节省着用，先做最重要的一件事。",
        "如果觉得散，就先把身体和呼吸找回来，再继续推进。"
      ]
    }
  }
};

const questionRules = [
  {
    type: "confession",
    category: "love",
    keywords: ["表白", "告白", "喜欢的人", "追求", "在一起", "脱单"]
  },
  {
    type: "relationship",
    category: "love",
    keywords: ["约会", "聊天", "联系", "复合", "暧昧", "感情", "恋爱"]
  },
  {
    type: "careerAction",
    category: "career",
    keywords: ["事业", "工作", "项目", "合作", "推进", "面试", "跳槽", "离职", "汇报", "客户", "offer", "老板", "上司", "领导", "晋升", "升职", "提薪", "加薪", "申请", "同意", "加班", "提案", "述职"]
  },
  {
    type: "moneyAction",
    category: "wealth",
    keywords: ["花钱", "消费", "投资", "赚钱", "副业", "预算", "借钱", "回款", "买"]
  },
  {
    type: "energyAction",
    category: "energy",
    keywords: ["休息", "熬夜", "运动", "恢复", "出门", "旅行", "睡眠", "健康", "身体"]
  }
];

const generalActions = [
  "把最重要的一件事提前到上午完成",
  "给正在推进的事情多预留半小时缓冲",
  "整理桌面与待办，清掉旧负担",
  "先答应自己一件小事，并认真完成"
];

const actionPools = {
  career: [
    "先把今天最关键的工作节点写清楚，再开始推进",
    "把要沟通的人和下一步动作一次整理完再发出",
    "上午完成最难的一项任务，下午只做收口"
  ],
  love: [
    "先把你真正想表达的一句话写出来",
    "先观察对方状态，再选择更轻松的表达方式",
    "今天更适合真诚，不适合把结果压得太重"
  ],
  wealth: [
    "先把预算和边界写清楚，再做决定",
    "涉及花钱的动作至少多等十分钟再拍板",
    "先确认细节，再看值不值得投入"
  ],
  energy: [
    "先补水、活动五分钟，再开始高强度事项",
    "把最耗脑的任务缩成一个清晰番茄钟",
    "今天少刷无用信息，给精神留白"
  ],
  overall: generalActions
};

const guidancePools = {
  overall: [
    "今天更适合先稳住自己的节奏，再去追求更快的结果。",
    "你不需要同时回应所有声音，把注意力收回到最值得推进的一件事上。",
    "好运不靠猛冲兑现，而是靠判断力和稳定感慢慢站稳。"
  ],
  career: [
    "工作上的好运更偏向准备充分的人，先把信息和步骤理清，再出手。",
    "事业面今天适合做取舍，不适合什么都想顾到。",
    "先抓主线，再谈速度，结果会比你想象中更稳。"
  ],
  love: [
    "感情里的好运不是硬追出来的，而是靠分寸和真诚慢慢靠近。",
    "你不需要用完美的表现换来喜欢，真诚本身就有力量。",
    "今天更重要的不是猜答案，而是把自己表达清楚。"
  ],
  wealth: [
    "财务上的稳感来自边界感，先把不必要的损耗切掉，好运才看得见。",
    "越是涉及金钱，越需要你慢一点、准一点。",
    "把账看清楚，本身就是在给自己积攒好运。"
  ],
  energy: [
    "别把所有焦虑都当成动力，先让自己恢复到可持续的节奏。",
    "身体和精神是同一套系统，今天越规律，你的运势感会越明显。",
    "先照顾状态，不等于懒散，而是在为后面的行动蓄力。"
  ]
};


const suggestedQuestions = {
  career: [
    "我今天适合主动跟老板谈晋升吗？",
    "我今天需要加班把这件事推进完吗？",
    "我今天适合主动提方案争取机会吗？"
  ],
  love: [
    "我今天适合表白吗？",
    "我今天适合主动约对方见面吗？",
    "我今天适合把心里话说清楚吗？"
  ],
  wealth: [
    "我今天适合买下这个东西吗？",
    "我今天适合谈钱或催回款吗？",
    "我今天适合做这笔支出决定吗？"
  ],
  energy: [
    "我今天需要早点休息，还是可以继续冲一下？",
    "我今天适合运动还是更适合放空恢复？",
    "我今天适合安排高强度任务吗？"
  ],
  overall: [
    "我今天最适合优先推进哪件事？",
    "我今天适合主动出击，还是先稳一稳？",
    "我今天最该留意哪方面的节奏？"
  ]
};

const form = document.getElementById("divination-form");
const resultView = document.getElementById("result-view");
const emptyState = document.getElementById("empty-state");
const generalView = document.getElementById("general-view");
const questionView = document.getElementById("question-view");
const birthdateInput = document.getElementById("birthdate");
const zodiacInput = document.getElementById("zodiac");
const targetDateInput = document.getElementById("target-date");
const focusInput = document.getElementById("focus");
const focusExampleText = document.getElementById("focus-example-text");
const focusExampleAction = document.getElementById("focus-example-action");

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
    let value = Math.imul(t ^ (t >>> 15), 1 | t);
    value ^= value + Math.imul(value ^ (value >>> 7), 61 | value);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, list) {
  return list[Math.floor(rng() * list.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
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

function centeredValue(rawValue, maxRaw, amplitude) {
  return Math.round((rawValue / maxRaw) * amplitude * 2 - amplitude);
}

function bandOf(score) {
  if (score >= 78) {
    return "high";
  }

  if (score >= 64) {
    return "mid";
  }

  return "low";
}

function calcBaseContext(birthdate, zodiac, targetDate) {
  const birthDay = new Date(birthdate);
  const targetDay = new Date(targetDate);
  const zodiacIndex = zodiacs.indexOf(zodiac);

  const birthRhythm = ((birthDay.getFullYear() % 100) + (birthDay.getMonth() + 1) * 2 + birthDay.getDate()) % 19;
  const dayRhythm = (((targetDay.getMonth() + 1) * 3) + targetDay.getDate() + targetDay.getDay() * 4) % 19;
  const zodiacHarmony = ((zodiacIndex + 1) * 7 + targetDay.getDate() * 3 + targetDay.getDay() * 2) % 19;

  const baseSeed = hashString(`${birthdate}|${zodiac}|${targetDate}`);
  const oracleSeed = hashString(`${birthdate}|${zodiac}|${targetDate}|oracle`);
  const oracleRng = createRng(oracleSeed);

  const tarotIndex = Math.floor(oracleRng() * tarotDeck.length);
  const tarotReversed = oracleRng() > 0.54;
  const hexagramIndex = Math.floor(oracleRng() * hexagrams.length);

  return {
    baseSeed,
    birthCore: centeredValue(birthRhythm, 18, 6),
    dayCore: centeredValue(dayRhythm, 18, 7),
    zodiacCore: centeredValue(zodiacHarmony, 18, 6),
    tarotIndex,
    tarotReversed,
    hexagramIndex
  };
}

function signedInfluence(index, salt, amplitude, orientationShift = 0) {
  const centered = (((index + 1) * salt) % (amplitude * 2 + 1)) - amplitude;
  return clamp(centered + orientationShift, -amplitude - 2, amplitude + 2);
}

function describeShift(label, value) {
  if (value >= 5) {
    return `${label}明显助推`;
  }

  if (value >= 2) {
    return `${label}略有加成`;
  }

  if (value <= -5) {
    return `${label}形成牵制`;
  }

  if (value <= -2) {
    return `${label}略有拖拽`;
  }

  return `${label}整体平稳`;
}

function buildMetricResult(metricKey, context) {
  const metric = metricDefinitions[metricKey];
  const birthShift = clamp(Math.round(context.birthCore * metric.birthWeight), -7, 7);
  const dayShift = clamp(Math.round(context.dayCore * metric.dayWeight), -8, 8);
  const zodiacShift = clamp(Math.round(context.zodiacCore * metric.zodiacWeight), -7, 7);
  const tarotShift = signedInfluence(
    context.tarotIndex,
    metric.tarotSalt,
    5,
    context.tarotReversed ? -2 : 2
  );
  const hexagramShift = signedInfluence(context.hexagramIndex, metric.hexSalt, 4, 0);

  const score = clamp(metric.base + birthShift + dayShift + zodiacShift + tarotShift + hexagramShift, 52, 92);
  const band = bandOf(score);
  const narrativeRng = createRng(hashString(`${context.baseSeed}|${metricKey}|${band}`));

  const tarotCard = tarotDeck[context.tarotIndex];
  const hexagram = hexagrams[context.hexagramIndex];

  return {
    label: metric.label,
    score,
    text: pick(narrativeRng, metric.narratives[band]),
    source: `依据：${describeShift("生日节律", birthShift)}，${describeShift("当日节律", dayShift)}，${describeShift("生肖合日", zodiacShift)}；塔罗「${tarotCard.name}」${context.tarotReversed ? "逆位" : "正位"}与卦象「${hexagram.name}」共同参与推演。`
  };
}

function resolveFocusInfo(rawFocus) {
  const trimmed = rawFocus.trim();

  if (!trimmed) {
    return {
      mode: "general",
      category: "overall",
      type: "overall",
      label: "整体运势",
      raw: ""
    };
  }

  const matchedRule = questionRules.find((rule) => rule.keywords.some((keyword) => trimmed.includes(keyword)));

  if (matchedRule) {
    return {
      mode: "question",
      category: matchedRule.category,
      type: matchedRule.type,
      label: metricDefinitions[matchedRule.category].label,
      raw: trimmed
    };
  }

  return {
    mode: "question",
    category: "overall",
    type: "overallQuestion",
    label: "整体运势",
    raw: trimmed
  };
}

function buildGeneralSummary(summary, metrics) {
  const sorted = Object.entries(metrics).sort((a, b) => b[1].score - a[1].score);
  const strongest = metricDefinitions[sorted[0][0]].label;
  const weakest = metricDefinitions[sorted[sorted.length - 1][0]].label;
  return `${summary.text}${strongest}面向更亮，${weakest}面向则更需要稳着来。`;
}

function buildGeneralContext() {
  return "未填写具体问题时，这次会按整体命盘解读；基础分数只由生日、生肖、占卜日期与固定抽到的塔罗、卦象共同决定。";
}

function resolveDominantCategory(metrics) {
  const sorted = Object.entries(metrics).sort((a, b) => b[1].score - a[1].score);
  return sorted[0]?.[0] || "overall";
}

function buildMetricsPreview() {
  const birthdate = birthdateInput.value;
  const zodiac = zodiacInput.value;
  const targetDate = targetDateInput.value;

  if (!birthdate || !zodiac || !targetDate) {
    return null;
  }

  const context = calcBaseContext(birthdate, zodiac, targetDate);
  return {
    context,
    metrics: {
      career: buildMetricResult("career", context),
      love: buildMetricResult("love", context),
      wealth: buildMetricResult("wealth", context),
      energy: buildMetricResult("energy", context)
    }
  };
}

function updateFocusExample(preview = buildMetricsPreview()) {
  let category = "overall";
  let seed = hashString("default-example");

  if (preview) {
    category = resolveDominantCategory(preview.metrics);
    seed = preview.context.baseSeed;
  }

  const pool = suggestedQuestions[category] || suggestedQuestions.overall;
  const question = pick(createRng(hashString(`${seed}|${category}|example`)), pool);
  focusExampleText.textContent = `不知道怎么写？比如：${question}`;
  focusExampleAction.dataset.example = question;
}

function bandText(score) {
  const band = bandOf(score);

  if (band === "high") {
    return "偏顺";
  }

  if (band === "mid") {
    return "平稳";
  }

  return "偏谨慎";
}

function buildVerdict(focusInfo, decisionLevel) {
  const verdicts = {
    confession: {
      go: "今天适合表白，但更适合真诚、轻柔地表达。",
      maybe: "今天更适合先升温关系，再决定要不要直接表白。",
      wait: "今天不太适合直接表白，先铺垫气氛会更稳。"
    },
    relationship: {
      go: "今天适合主动靠近这段关系。",
      maybe: "今天适合先恢复交流，不必一步到位。",
      wait: "今天更适合先沉淀情绪，再决定要不要推进。"
    },
    careerAction: {
      go: "今天适合推进这件事，越清晰越容易得到回应。",
      maybe: "今天适合铺垫和准备，真正发力可以稍后一点。",
      wait: "今天不宜硬推，先补足信息和节奏会更稳。"
    },
    moneyAction: {
      go: "今天可以处理这笔决定，但前提是细节已经确认。",
      maybe: "今天更适合先算清楚，再决定要不要动。",
      wait: "今天不适合凭直觉出手，先保守一点。"
    },
    energyAction: {
      go: "今天适合把恢复和状态管理放进优先级。",
      maybe: "今天更适合稳住节奏，别把状态逼得太满。",
      wait: "今天需要先休整，不要把疲惫当成还能继续扛。"
    },
    overallQuestion: {
      go: "今天适合推进你问的这件事，但要按节奏来。",
      maybe: "今天不是完全不行，只是更适合先准备后行动。",
      wait: "今天先别急着定论，等自己更稳一点再决定。"
    }
  };

  const set = verdicts[focusInfo.type] || verdicts.overallQuestion;
  return set[decisionLevel];
}

function buildPreparation(focusInfo, decisionLevel) {
  const preparations = {
    confession: {
      go: "准备一段真诚、不过度用力的话，把重点放在表达心意，而不是逼自己一定得到答案。",
      maybe: "先制造一点轻松交流的氛围，看看对方的回应，再决定要不要把话说满。",
      wait: "先多观察对方状态和你们的互动温度，把关系养热一点再表白，会更稳。"
    },
    relationship: {
      go: "先准备一个自然的开场，不要一上来就谈结果，让关系有一点回温空间。",
      maybe: "先恢复联系和互动感，少一点试探，多一点轻松交流。",
      wait: "先把自己的期待理顺，再决定要不要推进这段关系。"
    },
    careerAction: {
      go: "把要推进的目标、对象和下一步动作写清楚，再出手，会明显更顺。",
      maybe: "先做资料、节奏和话术准备，今天不一定要一次推进到底。",
      wait: "先补信息、补方案、补时机，再推会比现在更有把握。"
    },
    moneyAction: {
      go: "把金额、边界和风险先确认清楚，再动作，会比较稳。",
      maybe: "先算明白投入产出，再决定要不要花、要不要投。",
      wait: "先按住冲动，今天更适合看清楚，而不是立刻拍板。"
    },
    energyAction: {
      go: "优先安排休息、补水和规律节奏，状态一稳，后面很多事都会跟着顺。",
      maybe: "减少分心和额外消耗，把今天当成调频日来过。",
      wait: "先停下来照顾身体和精神，不要让自己继续透支。"
    },
    overallQuestion: {
      go: "先把最关键的一步准备好，再行动，成功感会更强。",
      maybe: "今天更适合先铺垫和试探，不用逼自己立刻冲。",
      wait: "先给自己一点缓冲，再做决定，反而更不容易走弯路。"
    }
  };

  return (preparations[focusInfo.type] || preparations.overallQuestion)[decisionLevel];
}

function buildEncouragement(focusInfo, decisionLevel) {
  const encouragements = {
    go: {
      love: "你不需要靠完美来换回应，真诚本身就很有力量。",
      career: "你今天的优势不只是行动力，还有判断力，放心往前走。",
      wealth: "只要你守住边界，这份稳感会变成你的底气。",
      energy: "照顾好自己不是退后，而是在为后面的发力蓄电。",
      overall: "今天的好运更偏向愿意稳定出手的人，你已经站在正确节奏上了。"
    },
    maybe: {
      love: "慢一点不是错过，而是在给这段关系更好的落点。",
      career: "今天先准备，不代表你不行，而是在让后面的推进更漂亮。",
      wealth: "稳住不乱动，本身就是很成熟的运势使用方式。",
      energy: "节奏放缓不是示弱，而是在保护你真正重要的能量。",
      overall: "不急着马上做结论，也是一种很强的掌控感。"
    },
    wait: {
      love: "今天先收一点，不代表没有机会，只是把机会放到更好的时机。",
      career: "你不是做不到，只是今天更适合补位和蓄势。",
      wealth: "暂时不动，不是错过，而是在替自己挡掉不必要的损耗。",
      energy: "先把自己扶稳，再决定下一步，这会比硬撑更聪明。",
      overall: "今天先缓一缓，不是退缩，而是在帮自己找回更稳的节奏。"
    }
  };

  const category = focusInfo.category === "overall" ? "overall" : focusInfo.category;
  return encouragements[decisionLevel][category];
}

function buildQuestionAnswer(focusInfo, totalScore, metrics, tarot, hexagram, rawFocus) {
  const relevantMetric = focusInfo.category === "overall" ? null : metrics[focusInfo.category];
  const relevantScore = relevantMetric ? relevantMetric.score : totalScore;
  const decisionScore = Math.round(relevantMetric ? mean([totalScore, relevantScore, relevantScore]) : totalScore);

  let decisionLevel = "wait";
  if (decisionScore >= 76) {
    decisionLevel = "go";
  } else if (decisionScore >= 64) {
    decisionLevel = "maybe";
  }

  const relevantLabel = relevantMetric ? relevantMetric.label : "整体运势";
  const questionTitle = `关于“${rawFocus}”`;
  const verdict = buildVerdict(focusInfo, decisionLevel);
  const reason = `从基础命盘看，今日总运为 ${totalScore} 分，${relevantLabel}位为 ${relevantScore} 分，整体气场${bandText(totalScore)}。塔罗「${tarot.name}」${tarot.orientation}提示“${tarot.message}”，卦象「${hexagram.name}」则提醒“${hexagram.text}”。综合来看，这件事更适合按照今天的节奏来处理。`;
  const basisTitle = `${relevantLabel} ${relevantScore} 分`;
  const basisText = relevantMetric
    ? `${relevantMetric.text} ${relevantMetric.source}`
    : `这次问题没有明确落在单一领域，因此主要参考今日总运与两张占卜依据来回答。`;
  const prepText = buildPreparation(focusInfo, decisionLevel);
  const encourageText = buildEncouragement(focusInfo, decisionLevel);

  return {
    relevantLabel,
    relevantScore,
    questionTitle,
    verdict,
    reason,
    basisTitle,
    basisText,
    prepTitle: decisionLevel === "go" ? "顺着做" : decisionLevel === "maybe" ? "先铺垫" : "先等等",
    prepText,
    encourageTitle: decisionLevel === "wait" ? "别急" : "放心去做",
    encourageText,
    guidance: encourageText,
    context: `这次把你的输入识别成一个具体问题，并优先参考${relevantLabel}位回答；换问题不会改动基础命盘，只会改变解读角度。`,
    summary: verdict,
    title: `${resolveSummary(totalScore).title} · 问题占断`,
    action: pick(createRng(hashString(`${rawFocus}|action|${decisionLevel}`)), actionPools[focusInfo.category] || generalActions)
  };
}

function renderMetric(metricKey, metricResult) {
  document.getElementById(`${metricKey}-score`).textContent = scoreLabel(metricResult.score);
  document.getElementById(`${metricKey}-text`).textContent = metricResult.text;
  document.getElementById(`${metricKey}-source`).textContent = metricResult.source;
}

function renderQuestion(question) {
  document.getElementById("question-title").textContent = question.questionTitle;
  document.getElementById("question-verdict").textContent = question.verdict;
  document.getElementById("question-reason").textContent = question.reason;
  document.getElementById("question-relevant-score").textContent = `${question.relevantLabel} ${question.relevantScore} 分`;
  document.getElementById("question-relevant-text").textContent = `这次判断以今日总运和 ${question.relevantLabel} 位为主，不再展开四个固定模块。`;
  document.getElementById("question-basis-title").textContent = question.basisTitle;
  document.getElementById("question-basis-text").textContent = question.basisText;
  document.getElementById("question-prep-title").textContent = question.prepTitle;
  document.getElementById("question-prep-text").textContent = question.prepText;
  document.getElementById("question-encourage-title").textContent = question.encourageTitle;
  document.getElementById("question-encourage-text").textContent = question.encourageText;
}

function renderResult(result) {
  emptyState.classList.add("hidden");
  resultView.classList.remove("hidden");

  document.getElementById("fortune-title").textContent = result.title;
  document.getElementById("fortune-summary").textContent = result.summary;
  document.getElementById("fortune-context").textContent = result.context;
  document.getElementById("fortune-score").textContent = result.totalScore;

  generalView.classList.toggle("hidden", result.mode !== "general");
  questionView.classList.toggle("hidden", result.mode !== "question");

  if (result.mode === "general") {
    renderMetric("career", result.metrics.career);
    renderMetric("love", result.metrics.love);
    renderMetric("wealth", result.metrics.wealth);
    renderMetric("energy", result.metrics.energy);
  } else {
    renderQuestion(result.question);
  }

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
  const rawFocus = formData.get("focus")?.trim() || "";
  const focusInfo = resolveFocusInfo(rawFocus);

  const context = calcBaseContext(birthdate, zodiac, targetDate);
  const tarotCard = tarotDeck[context.tarotIndex];
  const tarot = {
    name: tarotCard.name,
    orientation: context.tarotReversed ? "逆位" : "正位",
    message: context.tarotReversed ? tarotCard.reversed : tarotCard.upright
  };
  const hexagram = hexagrams[context.hexagramIndex];

  const metrics = {
    career: buildMetricResult("career", context),
    love: buildMetricResult("love", context),
    wealth: buildMetricResult("wealth", context),
    energy: buildMetricResult("energy", context)
  };

  const totalScore = Math.round(mean([
    metrics.career.score,
    metrics.love.score,
    metrics.wealth.score,
    metrics.energy.score
  ]));
  const summary = resolveSummary(totalScore);
  const fortuneRng = createRng(context.baseSeed);
  const focusCategory = focusInfo.category === "overall" ? "overall" : focusInfo.category;

  const baseResult = {
    totalScore,
    metrics,
    tarot,
    hexagram,
    luckyColor: pick(fortuneRng, colors),
    luckyNumber: String(1 + Math.floor(fortuneRng() * 9)),
    luckyDirection: pick(fortuneRng, directions)
  };

  if (focusInfo.mode === "general") {
    return {
      ...baseResult,
      mode: "general",
      title: `${summary.title} · ${nickname}的${targetDate}命盘`,
      summary: buildGeneralSummary(summary, metrics),
      context: buildGeneralContext(),
      dailyAction: pick(createRng(hashString(`${context.baseSeed}|general-action`)), generalActions),
      guidance: pick(createRng(hashString(`${context.baseSeed}|general-guidance`)), guidancePools.overall)
    };
  }

  const question = buildQuestionAnswer(focusInfo, totalScore, metrics, tarot, hexagram, rawFocus);

  return {
    ...baseResult,
    mode: "question",
    title: question.title,
    summary: question.summary,
    context: question.context,
    question,
    dailyAction: question.action,
    guidance: question.guidance
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
  updateFocusExample({ context: { baseSeed: hashString(`${formData.get("birthdate")}|${formData.get("zodiac")}|${formData.get("target-date")}`) }, metrics: result.metrics });
});

setToday();
updateFocusExample();

birthdateInput.addEventListener("change", () => {
  const inferred = inferZodiac(birthdateInput.value);
  if (inferred) {
    zodiacInput.value = inferred;
  }
  updateFocusExample();
});

zodiacInput.addEventListener("change", updateFocusExample);
targetDateInput.addEventListener("change", updateFocusExample);
focusExampleAction.addEventListener("click", () => {
  const example = focusExampleAction.dataset.example;
  if (example) {
    focusInput.value = example;
    focusInput.focus();
  }
});
