const quizQuestions = [
  {
    category: "태양계의 비밀",
    question: "NASA가 소개하는 태양계의 행성은 모두 몇 개일까요?",
    choices: ["6개", "8개", "9개", "12개"],
    answerIndex: 1,
    explanation: "태양계에는 공식적으로 행성 여덟 개가 있어요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에 가장 가까운 행성은 무엇일까요?",
    choices: ["금성", "지구", "수성", "화성"],
    answerIndex: 2,
    explanation: "수성은 태양을 도는 여덟 행성 가운데 가장 안쪽에 있어요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양계에서 가장 작은 행성은 무엇일까요?",
    choices: ["수성", "화성", "금성", "지구"],
    answerIndex: 0,
    explanation: "가장 태양 가까이 도는 수성이 크기도 가장 작아요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 두 번째로 가까운 행성은 무엇일까요?",
    choices: ["지구", "금성", "화성", "수성"],
    answerIndex: 1,
    explanation: "금성은 태양에서 두 번째, 지구 바로 안쪽 궤도를 돌아요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 세 번째 궤도를 도는 행성은 무엇일까요?",
    choices: ["금성", "화성", "지구", "목성"],
    answerIndex: 2,
    explanation: "우리가 사는 지구는 태양에서 세 번째 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "지구는 태양계 행성 중 크기 순서로 몇 번째일까요?",
    choices: ["세 번째로 커요", "다섯 번째로 커요", "여섯 번째로 커요", "가장 커요"],
    answerIndex: 1,
    explanation: "지구는 태양계에서 다섯 번째로 큰 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 네 번째 궤도를 도는 행성은 무엇일까요?",
    choices: ["화성", "목성", "금성", "토성"],
    answerIndex: 0,
    explanation: "붉은 행성 화성은 태양에서 네 번째에 자리해요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "화성은 태양계 행성 중 크기 순서로 몇 번째일까요?",
    choices: ["다섯 번째로 커요", "여섯 번째로 커요", "일곱 번째로 커요", "여덟 번째로 커요"],
    answerIndex: 2,
    explanation: "화성보다 작은 행성은 수성뿐이라 화성은 일곱 번째로 커요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 다섯 번째 궤도를 도는 행성은 무엇일까요?",
    choices: ["토성", "화성", "목성", "천왕성"],
    answerIndex: 2,
    explanation: "목성은 태양에서 다섯 번째로 멀리 있는 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양계에서 가장 큰 행성은 무엇일까요?",
    choices: ["토성", "목성", "해왕성", "천왕성"],
    answerIndex: 1,
    explanation: "거대한 목성은 태양계 행성 중 크기가 가장 커요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 여섯 번째 궤도를 도는 행성은 무엇일까요?",
    choices: ["목성", "천왕성", "토성", "해왕성"],
    answerIndex: 2,
    explanation: "토성은 태양에서 여섯 번째 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "토성은 태양계 행성 중 크기 순서로 몇 번째일까요?",
    choices: ["두 번째로 커요", "세 번째로 커요", "네 번째로 커요", "가장 커요"],
    answerIndex: 0,
    explanation: "토성은 목성 다음으로 큰, 태양계에서 두 번째 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 일곱 번째 궤도를 도는 행성은 무엇일까요?",
    choices: ["해왕성", "천왕성", "토성", "목성"],
    answerIndex: 1,
    explanation: "천왕성은 태양에서 일곱 번째에 있는 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "천왕성은 태양계 행성 중 크기 순서로 몇 번째일까요?",
    choices: ["두 번째로 커요", "세 번째로 커요", "네 번째로 커요", "다섯 번째로 커요"],
    answerIndex: 1,
    explanation: "천왕성은 목성과 토성 다음으로 큰 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "태양에서 가장 멀리 있는 여덟 번째 행성은 무엇일까요?",
    choices: ["천왕성", "해왕성", "명왕성", "토성"],
    answerIndex: 1,
    explanation: "해왕성은 태양계에서 가장 멀리 있는 여덟 번째 행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "해왕성은 태양계 행성 중 크기 순서로 몇 번째일까요?",
    choices: ["두 번째로 커요", "세 번째로 커요", "네 번째로 커요", "다섯 번째로 커요"],
    answerIndex: 2,
    explanation: "해왕성보다 큰 행성은 목성, 토성, 천왕성 세 개예요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "화성과 목성 사이 소행성대에서 가장 큰 천체는 무엇일까요?",
    choices: ["세레스", "명왕성", "에리스", "마케마케"],
    answerIndex: 0,
    explanation: "세레스는 소행성대에서 가장 큰 천체이자 왜행성이에요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "명왕성은 언제 왜행성으로 재분류되었을까요?",
    choices: ["1996년", "2000년", "2006년", "2012년"],
    answerIndex: 2,
    explanation: "국제천문연맹은 2006년에 명왕성을 왜행성으로 분류했어요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "태양계의 비밀",
    question: "NASA가 소개한 왜행성 하우메아의 눈에 띄는 모양은 무엇일까요?",
    choices: ["완전히 둥근 모양", "타원형", "정육면체", "고리 모양"],
    answerIndex: 1,
    explanation: "하우메아는 빠르게 자전해 길쭉한 타원형 모양을 하고 있어요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/"
  },
  {
    category: "달의 비밀",
    question: "달의 위상 한 주기는 대략 며칠마다 반복될까요?",
    choices: ["약 7일", "약 14일", "약 29.5일", "약 365일"],
    answerIndex: 2,
    explanation: "달의 위상 변화는 약 29.5일을 주기로 되풀이돼요.",
    sourceOrg: "NASA",
    sourceUrl: "https://science.nasa.gov/moon/moon-phases/"
  }
];
