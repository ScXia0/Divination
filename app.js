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
  { min: 86, title: "上上签", text: "今天的气场很亮，重要安排有望得到回应。" },
  { min: 72, title: "上吉签", text: "整体稳中向好，只要节奏别乱，运势会持续抬升。" },
  { min: 56, title: "平顺签", text: "今天更适合稳步推进，少一点贪快会更顺。" },
  { min: 0, title: "静心签", text: "外界噪音偏多，先稳住自己，反而能看到转机。" }
];

const focusRules = [
  {
    category: "career",
    label: "事业",
    keywords: ["事业", "工作", "职业", "项目", "合作", "客户", "面试", "升职", "汇报", "团队", "offer"]
  },
  {
    category: "love",
    label: "感情",
    keywords: ["感情", "爱情", "恋爱", "桃花", "关系", "对象", "暧昧", "婚姻", "复合"]
  },
  {
    category: "wealth",
    label: "财运",
    keywords: ["财", "钱", "收入", "副业", "投资", "消费", "预算", "赚钱", "回款"]
  },
  {
    category: "energy",
    label: "精力",
    keywords: ["精力", "状态", "身体", "健康", "睡眠", "休息", "疲惫", "恢复", "压力"]
  }
];

const metricDefinitions = {
  career: {
    label: "事业",
    base: 61,
    birthWeight: 0.8,
    dayWeight: 1.1,
    zodiacWeight: 0.8,
    tarotSalt: 5,
    hexSalt: 4,
    narratives: {
      high: [
        "推进事项的响应度偏高，今天适合把重要任务往前放。",
        "执行力和组织力在线，主动协调资源会更见成效。",
        "事业面向的推进感较强，适合做决定、发起沟通或定节奏。"
      ],
      mid: [
        "工作上更适合先清主线，再处理零碎事务。",
        "今天的事业运偏稳，按步骤推进比临场猛冲更有效。",
        "节奏保持清晰时，事业面会逐渐转顺。"
      ],
      low: [
        "事业面今天不宜贪快，先把优先级理顺更重要。",
        "如果工作卡住，问题多半出在节奏和分工，而不是能力本身。",
        "这项运势略显保守，先处理阻力点比硬推更有效。"
      ]
    }
  },
  love: {
    label: "感情",
    base: 59,
    birthWeight: 0.7,
    dayWeight: 0.9,
    zodiacWeight: 1.0,
    tarotSalt: 3,
    hexSalt: 5,
    narratives: {
      high: [
        "情感交流的回温速度不错，真诚表达会比较有回应。",
        "感情面更容易出现共鸣感，适合放下试探，直接说重点。",
        "关系运偏暖，今天更容易被理解，也更容易理解别人。"
      ],
      mid: [
        "感情面整体平稳，少一点预设，多一点倾听会更顺。",
        "今天的关系节奏偏温和，先稳住情绪比争输赢重要。",
        "相处上宜轻拿轻放，别把旧波动继续带进今天。"
      ],
      low: [
        "感情面今天较容易敏感，先厘清自己的真实感受再开口。",
        "关系中的误解需要慢慢拆，不适合用情绪逼结论。",
        "今天的感情运较谨慎，越想确认，越要注意表达方式。"
      ]
    }
  },
  wealth: {
    label: "财运",
    base: 58,
    birthWeight: 0.9,
    dayWeight: 0.8,
    zodiacWeight: 0.7,
    tarotSalt: 4,
    hexSalt: 6,
    narratives: {
      high: [
        "财务判断相对清楚，适合做预算、回款跟进和稳妥决策。",
        "财运更偏稳健收益，不必冒进，守住节奏就能见效。",
        "今天的财务敏感度不错，先核对细节，往往能避开损耗。"
      ],
      mid: [
        "财运不算跳跃，更适合稳妥安排而非冲动下注。",
        "今天宜看清投入产出，控制情绪消费会更划算。",
        "财务面以整理、校准和保守推进为主。"
      ],
      low: [
        "财运今天偏保守，先守住预算比追逐机会更重要。",
        "如果涉及支出或投资，今天更适合慢一点、再确认一次。",
        "金钱面容易受情绪牵动，先分清需要和想要。"
      ]
    }
  },
  energy: {
    label: "精力",
    base: 60,
    birthWeight: 1.0,
    dayWeight: 0.8,
    zodiacWeight: 0.8,
    tarotSalt: 6,
    hexSalt: 3,
    narratives: {
      high: [
        "状态恢复力不错，只要顺着节奏走，会越做越顺。",
        "今天的精力面偏亮，适合先启动，再逐步拉高效率。",
        "只要不过度分心，精力会支撑你完成关键事项。"
      ],
      mid: [
        "精力整体可用，但需要靠规律节奏来维持。",
        "状态像缓慢升温，别急着开太多线程。",
        "今天更适合稳定输出，给自己预留一点缓冲。"
      ],
      low: [
        "精力面略显吃紧，少开分支、少被打断会更好。",
        "今天的状态需要节省着用，先做最重要的一件事。",
        "如果觉得散，就先把身体和呼吸找回来，再继续推进。"
      ]
    }
  }
};

const actionsByFocus = {
  overall: [
    "把最重要的一件事提前到上午完成",
    "给正在推进的事情多预留半小时缓冲",
    "整理桌面与待办，清掉旧负担",
    "先答应自己一件小事，并认真完成"
  ],
  career: [
    "优先推进一个最关键的工作节点",
    "把需要沟通的人和下一步动作一次写清楚",
    "上午完成最难的一项任务，下午只做收口"
  ],
  love: [
    "主动发一条清晰而不过度试探的消息",
    "今天先说真实感受，不急着要答案",
    "给关系留一点温度，也留一点边界"
  ],
  wealth: [
    "先过一遍今天的支出与预算",
    "涉及花钱的决定，至少多等十分钟再拍板",
    "把一笔模糊账目补清楚"
  ],
  energy: [
    "先补水、活动五分钟，再开始高强度事项",
    "把最耗脑的任务缩成一个清晰番茄钟",
    "今天少刷无用信息，给精神留白"
  ]
};

const guidanceByFocus = {
  overall: [
    "这次命盘更像是在提醒你：先稳住自己的节奏，再去追求更快的结果。",
    "今天不需要同时回应所有声音，把注意力收回到最值得推进的一件事上。",
    "你的运势并不靠猛冲兑现，而是靠稳定和判断力慢慢站稳。"
  ],
  career: [
    "既然心念落在事业，就别让注意力被零碎杂音带走，先看最关键的推进点。",
    "事业面今天适合做取舍，不适合什么都想顾到。把主线抓住，结果会更清楚。",
    "工作上的好运更偏向准备充分的人，先把信息和步骤理清，再出手。"
  ],
  love: [
    "既然你在意感情，这次更重要的不是猜，而是把话说得温和而清楚。",
    "关系运不靠追问出来，靠信任、节奏和分寸慢慢建立。",
    "今天的情感提醒是：感受可以诚实，表达要留余地。"
  ],
  wealth: [
    "既然关注财运，今天最值得依赖的不是冲动判断，而是细节核对。",
    "财务上的稳感来自边界感，先把不必要的损耗切掉，好运才看得见。",
    "今天更适合做让现金流更清楚的动作，而不是追逐看起来很快的机会。"
  ],
  energy: [
    "既然在看精力面，那今天的关键就是别透支，状态稳住了，事情自然顺。",
    "身体和精神是同一套系统，今天越规律，你的运势感会越明显。",
    "别把所有焦虑都当成动力，先让自己恢复到可持续的节奏。"
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

function calcZodiacHarmony(zodiac, targetDate) {
  const index = zodiacs.indexOf(zodiac);
  const target = new Date(targetDate);
  const dayNumber = target.getDate();
  const weekday = target.getDay();
  return ((index + 1) * 7 + dayNumber * 3 + weekday * 2) % 19;
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

function formatSigned(value) {
  return `${value >= 0 ? "+" : ""}${value}`;
}

function signedInfluence(index, salt, amplitude, orientationShift = 0) {
  const centered = (((index + 1) * salt) % (amplitude * 2 + 1)) - amplitude;
  return clamp(centered + orientationShift, -amplitude - 2, amplitude + 2);
}

function pickBand(score) {
  if (score >= 80) {
    return "high";
  }

  if (score >= 65) {
    return "mid";
  }

  return "low";
}

function resolveFocusInfo(rawFocus) {
  const trimmed = rawFocus.trim();

  if (!trimmed) {
    return {
      category: "overall",
      label: "整体运势",
      mode: "blank",
      raw: ""
    };
  }

  const matchedRule = focusRules.find((rule) => rule.keywords.some((keyword) => trimmed.includes(keyword)));

  if (matchedRule) {
    return {
      category: matchedRule.category,
      label: matchedRule.label,
      mode: "recognized",
      raw: trimmed
    };
  }

  return {
    category: "overall",
    label: "整体运势",
    mode: "custom",
    raw: trimmed
  };
}

function buildDriverSentence(contributions) {
  const labels = {
    birth: "生日节律",
    day: "当日节律",
    zodiac: "生肖合日",
    tarot: "塔罗意象",
    hexagram: "卦象提醒"
  };

  const entries = Object.entries(contributions).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  const strongestPositive = entries.find(([, value]) => value > 0);
  const strongestNegative = entries.find(([, value]) => value < 0);

  if (strongestPositive && strongestNegative && Math.abs(strongestPositive[1]) >= 4 && Math.abs(strongestNegative[1]) >= 4) {
    return `${labels[strongestPositive[0]]}在托举这项表现，但${labels[strongestNegative[0]]}也在牵制节奏。`;
  }

  if (strongestPositive && Math.abs(strongestPositive[1]) >= 4) {
    return `${labels[strongestPositive[0]]}对这项帮助最明显。`;
  }

  if (strongestNegative && Math.abs(strongestNegative[1]) >= 4) {
    return `${labels[strongestNegative[0]]}是这项目前更需要留意的牵制点。`;
  }

  return "这项起伏不算大，更适合用稳定节奏去兑现结果。";
}

function buildSourceLine(contributions, tarotReversed) {
  const tarotLabel = tarotReversed ? "塔罗逆位" : "塔罗正位";
  return [
    `推演来源：生日节律 ${formatSigned(contributions.birth)}`,
    `当日节律 ${formatSigned(contributions.day)}`,
    `生肖合日 ${formatSigned(contributions.zodiac)}`,
    `${tarotLabel} ${formatSigned(contributions.tarot)}`,
    `卦象启示 ${formatSigned(contributions.hexagram)}`
  ].join(" · ");
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

  const contributions = {
    birth: birthShift,
    day: dayShift,
    zodiac: zodiacShift,
    tarot: tarotShift,
    hexagram: hexagramShift
  };

  const score = clamp(
    metric.base + birthShift + dayShift + zodiacShift + tarotShift + hexagramShift,
    52,
    95
  );

  const band = pickBand(score);
  const narrativeRng = createRng(hashString(`${context.baseSeed}|${metricKey}|${band}`));
  const detail = pick(narrativeRng, metric.narratives[band]);
  const driver = buildDriverSentence(contributions);

  return {
    label: metric.label,
    score,
    text: `${detail} ${driver}`,
    source: buildSourceLine(contributions, context.tarotReversed)
  };
}

function buildSummaryText(summary, metrics) {
  const sorted = Object.entries(metrics).sort((a, b) => b[1].score - a[1].score);
  const strongest = metricDefinitions[sorted[0][0]].label;
  const weakest = metricDefinitions[sorted[sorted.length - 1][0]].label;
  return `${summary.text}${strongest}面向相对更强，${weakest}面向要更稳一些。`;
}

function buildContextText(focusInfo) {
  if (focusInfo.mode === "blank") {
    return "未填写今日心念，这次默认按整体运势解读；基础命盘只由生日、生肖、占卜日期，以及固定抽到的塔罗与卦象共同推演。";
  }

  if (focusInfo.mode === "recognized") {
    return `已将你的心念识别为“${focusInfo.label}”，你可以优先查看${focusInfo.label}卡；基础命盘分数不会因为提问文字而重新洗牌。`;
  }

  return `你的心念“${focusInfo.raw}”没有落在单一领域，因此仍按整体命盘解读；这段输入只作为提醒语境，不会改动基础分数。`;
}

function renderMetric(metricKey, metricResult) {
  document.getElementById(`${metricKey}-score`).textContent = scoreLabel(metricResult.score);
  document.getElementById(`${metricKey}-text`).textContent = metricResult.text;
  document.getElementById(`${metricKey}-source`).textContent = metricResult.source;
}

function renderResult(result) {
  emptyState.classList.add("hidden");
  resultView.classList.remove("hidden");

  document.getElementById("fortune-title").textContent = result.title;
  document.getElementById("fortune-summary").textContent = result.summary;
  document.getElementById("fortune-context").textContent = result.context;
  document.getElementById("fortune-score").textContent = result.totalScore;

  renderMetric("career", result.metrics.career);
  renderMetric("love", result.metrics.love);
  renderMetric("wealth", result.metrics.wealth);
  renderMetric("energy", result.metrics.energy);

  document.querySelectorAll(".metric-card").forEach((card) => {
    const matchesFocus = result.focusCategory !== "overall" && card.dataset.metric === result.focusCategory;
    card.classList.toggle("active-focus", matchesFocus);
  });

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

  const baseSeed = hashString(`${birthdate}|${zodiac}|${targetDate}`);
  const oracleSeed = hashString(`${birthdate}|${zodiac}|${targetDate}|oracle`);
  const guidanceSeed = hashString(`${birthdate}|${zodiac}|${targetDate}|${focusInfo.category}|${focusInfo.raw || "overall"}`);

  const oracleRng = createRng(oracleSeed);
  const fortuneRng = createRng(baseSeed);
  const guidanceRng = createRng(guidanceSeed);

  const birthDay = new Date(birthdate);
  const targetDay = new Date(targetDate);
  const birthRhythm = ((birthDay.getFullYear() % 100) + (birthDay.getMonth() + 1) * 2 + birthDay.getDate()) % 19;
  const dayRhythm = (((targetDay.getMonth() + 1) * 3) + targetDay.getDate() + targetDay.getDay() * 4) % 19;
  const zodiacHarmony = calcZodiacHarmony(zodiac, targetDate);

  const tarotIndex = Math.floor(oracleRng() * tarotDeck.length);
  const tarot = tarotDeck[tarotIndex];
  const tarotReversed = oracleRng() > 0.54;
  const hexagramIndex = Math.floor(oracleRng() * hexagrams.length);
  const hexagram = hexagrams[hexagramIndex];

  const context = {
    baseSeed,
    birthCore: centeredValue(birthRhythm, 18, 6),
    dayCore: centeredValue(dayRhythm, 18, 7),
    zodiacCore: centeredValue(zodiacHarmony, 18, 6),
    tarotIndex,
    tarotReversed,
    hexagramIndex
  };

  const metrics = {
    career: buildMetricResult("career", context),
    love: buildMetricResult("love", context),
    wealth: buildMetricResult("wealth", context),
    energy: buildMetricResult("energy", context)
  };

  const totalScore = clamp(
    Math.round(
      metrics.career.score * 0.3 +
        metrics.love.score * 0.23 +
        metrics.wealth.score * 0.22 +
        metrics.energy.score * 0.25
    ),
    52,
    95
  );

  const summary = resolveSummary(totalScore);
  const actionPool = actionsByFocus[focusInfo.category] || actionsByFocus.overall;
  const guidancePool = guidanceByFocus[focusInfo.category] || guidanceByFocus.overall;

  return {
    title: `${summary.title} · ${nickname}的${targetDate}命盘`,
    summary: buildSummaryText(summary, metrics),
    context: buildContextText(focusInfo),
    totalScore,
    focusCategory: focusInfo.category,
    metrics,
    tarot: {
      name: tarot.name,
      orientation: tarotReversed ? "逆位" : "正位",
      message: tarotReversed ? tarot.reversed : tarot.upright
    },
    hexagram,
    luckyColor: pick(fortuneRng, colors),
    luckyNumber: String(1 + Math.floor(fortuneRng() * 9)),
    luckyDirection: pick(fortuneRng, directions),
    dailyAction: pick(guidanceRng, actionPool),
    guidance: pick(guidanceRng, guidancePool)
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
