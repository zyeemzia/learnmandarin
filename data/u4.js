/* Learn Mandarin, Unit 4: Grammar Made Easy. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "grammar",
 "order": 4,
 "icon": "的",
 "color": "indigo",
 "title": "Grammar Made Easy",
 "subtitle": "Build real sentences step by step: word order, questions, negatives and time",
 "lessons": [
  {
   "id": "u4-word-order",
   "icon": "我",
   "title": "Word Order: Subject–Verb–Object",
   "subtitle": "The good news: it's a lot like English",
   "minutes": 12,
   "goals": [
    "Build simple subject–verb–object sentences",
    "Use the personal pronouns",
    "See that verbs never change",
    "Know that there are no articles or plural -s"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Here's some great news: the basic word order of Chinese is the same as English. **Who** does **what** to **what**: subject, verb, object."
    },
    {
     "type": "sentence",
     "t": "我爱你。",
     "tr": "Wǒ ài nǐ.",
     "mean": "I love you.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "爱",
       "mean": "love"
      },
      {
       "t": "你",
       "mean": "you"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "她学中文。",
     "tr": "Tā xué Zhōngwén.",
     "mean": "She studies Chinese.",
     "words": [
      {
       "t": "她",
       "mean": "she"
      },
      {
       "t": "学",
       "mean": "studies"
      },
      {
       "t": "中文",
       "mean": "Chinese"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Chinese",
      "Pinyin",
      "Meaning"
     ],
     "rows": [
      [
       "{{我}}",
       "wǒ",
       "I, me"
      ],
      [
       "{{你}}",
       "nǐ",
       "you"
      ],
      [
       "{{您}}",
       "nín",
       "you (polite)"
      ],
      [
       "{{他}}",
       "tā",
       "he, him"
      ],
      [
       "{{她}}",
       "tā",
       "she, her"
      ],
      [
       "{{它}}",
       "tā",
       "it"
      ],
      [
       "{{我们}}",
       "wǒmen",
       "we, us"
      ],
      [
       "{{你们}}",
       "nǐmen",
       "you (more than one)"
      ],
      [
       "{{他们}}",
       "tāmen",
       "they, them"
      ]
     ],
     "title": "Pronouns"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "'I' and 'me' are the same word, {{我}}. Swap the places and the meaning swaps: {{我爱你}} (I love you) → {{你爱我}} (you love me)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "{{他}}, {{她}} and {{它}} all sound exactly the same: tā. Only the written character shows he, she or it."
    },
    {
     "type": "rule",
     "name": "Verbs never change",
     "color": "green",
     "desc": "No -s, no -ed, no am/is/are. The verb stays the same for every person and every time.",
     "examples": [
      {
       "t": "我吃",
       "tr": "wǒ chī",
       "hl": "吃"
      },
      {
       "t": "他吃",
       "tr": "tā chī",
       "hl": "吃"
      },
      {
       "t": "我们吃",
       "tr": "wǒmen chī",
       "hl": "吃"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "There is no 'a', 'an' or 'the', and nouns have no plural -s. {{书}} can mean a book, the book or books. Only people can take {{们}}: {{老师们}} (teachers), but never 书们."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我喝茶。",
       "tr": "Wǒ hē chá.",
       "mean": "I drink tea.",
       "hl": "喝"
      },
      {
       "t": "他看书。",
       "tr": "Tā kàn shū.",
       "mean": "He reads books.",
       "hl": "看"
      },
      {
       "t": "我们学中文。",
       "tr": "Wǒmen xué Zhōngwén.",
       "mean": "We study Chinese.",
       "hl": "学"
      },
      {
       "t": "妈妈做饭。",
       "tr": "Māma zuò fàn.",
       "mean": "Mum cooks.",
       "hl": "做饭"
      }
     ],
     "title": "Subject + verb + object"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "我吃苹果。",
       "label": "Same as English",
       "desc": "I eat apples. Subject, verb, object."
      },
      {
       "t": "我在家吃苹果。",
       "label": "Place moves forward",
       "desc": "I eat apples at home. The place comes BEFORE the verb (more on this later)."
      }
     ],
     "title": "One small difference"
    },
    {
     "type": "practice",
     "text": "Read aloud and notice the order: who → does → what.",
     "lines": [
      "我爱你。",
      "你爱我。",
      "他喝咖啡。",
      "我们学中文。",
      "她们看书。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Choose the correct sentence for 'He drinks tea.'",
       "options": [
        "茶他喝。",
        "喝他茶。",
        "他茶喝。",
        "他喝茶。"
       ],
       "answer": 3
      },
      {
       "q": "How do you say 'they'?",
       "options": [
        "我们",
        "他",
        "他们",
        "你们"
       ],
       "answer": 2
      },
      {
       "q": "How do you change {{我爱你}} into 'You love me'?",
       "options": [
        "我爱你们",
        "爱你我",
        "你爱你",
        "你爱我"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Who is studying Chinese?",
       "say": "我们学中文",
       "options": [
        "she",
        "they",
        "we",
        "I"
       ],
       "answer": 2
      },
      {
       "q": "What is the plural of {{书}} (book)?",
       "options": [
        "书",
        "书子",
        "书书",
        "书们"
       ],
       "answer": 0,
       "explain": "Nouns don't change. 书 = book or books."
      },
      {
       "q": "Which pronoun means 'it'?",
       "options": [
        "你",
        "他",
        "它",
        "她"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "妈妈做饭",
       "options": [
        "Mum reads.",
        "Mum cooks.",
        "Mum eats.",
        "Mum drinks tea."
       ],
       "answer": 1
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-shi",
   "icon": "是",
   "title": "是: To Be",
   "subtitle": "Saying who and what someone is",
   "minutes": 11,
   "goals": [
    "Use 是 to link two nouns",
    "Make 是 negative with 不是",
    "Know when NOT to use 是"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{是}} (shì) works like 'am, is, are'. It links two nouns: 'I am a student', 'This is my book'. And it never changes!"
    },
    {
     "type": "sentence",
     "t": "我是学生。",
     "tr": "Wǒ shì xuésheng.",
     "mean": "I am a student.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "是",
       "mean": "am"
      },
      {
       "t": "学生",
       "mean": "student"
      }
     ]
    },
    {
     "type": "rule",
     "name": "A 是 B",
     "color": "blue",
     "desc": "Use {{是}} to say what or who something is. B is a noun.",
     "examples": [
      {
       "t": "我是美国人。",
       "tr": "Wǒ shì Měiguó rén.",
       "hl": "是"
      },
      {
       "t": "这是我的书。",
       "tr": "Zhè shì wǒ de shū.",
       "hl": "是"
      },
      {
       "t": "她是医生。",
       "tr": "Tā shì yīshēng.",
       "hl": "是"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他不是老师。",
     "tr": "Tā bú shì lǎoshī.",
     "mean": "He is not a teacher.",
     "words": [
      {
       "t": "他",
       "mean": "he"
      },
      {
       "t": "不",
       "mean": "not"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "老师",
       "mean": "teacher"
      }
     ],
     "note": "不 is said bú here, because 是 is a fourth tone."
    },
    {
     "type": "rule",
     "name": "Negative: 不是",
     "color": "red",
     "desc": "Put {{不}} right before {{是}}.",
     "examples": [
      {
       "t": "我不是老师。",
       "tr": "Wǒ bú shì lǎoshī.",
       "hl": "不是"
      },
      {
       "t": "这不是我的。",
       "tr": "Zhè bú shì wǒ de.",
       "hl": "不是"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Don't use {{是}} with adjectives like busy, tall or happy. 'I am busy' is {{我很忙}}, not 我是忙. You'll see why in the next lesson."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Ages, dates and prices often skip {{是}}: {{我二十岁。}} (I'm twenty.) {{今天星期五。}} (Today is Friday.) {{这个十块。}} (This one is ten kuai.)"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "医生",
       "tr": "yīshēng",
       "mean": "doctor",
       "root": "匚 box"
      },
      {
       "t": "司机",
       "tr": "sījī",
       "mean": "driver",
       "root": "木 wood"
      },
      {
       "t": "这",
       "tr": "zhè",
       "mean": "this",
       "root": "辶 walk"
      },
      {
       "t": "那",
       "tr": "nà",
       "mean": "that",
       "root": "阝 city"
      },
      {
       "t": "谁",
       "tr": "shéi",
       "mean": "who",
       "root": "讠 speech"
      },
      {
       "t": "也",
       "tr": "yě",
       "mean": "also, too"
      }
     ],
     "title": "Useful words"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{也}} (also) goes before the verb, never at the end like 'too': {{我也是学生。}} = I'm a student too."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "这是什么？",
       "tr": "Zhè shì shénme?",
       "mean": "What is this?",
       "hl": "是"
      },
      {
       "t": "那是我朋友。",
       "tr": "Nà shì wǒ péngyou.",
       "mean": "That's my friend.",
       "hl": "是"
      },
      {
       "t": "他是谁？",
       "tr": "Tā shì shéi?",
       "mean": "Who is he?",
       "hl": "谁"
      },
      {
       "t": "他是我哥哥。",
       "tr": "Tā shì wǒ gēge.",
       "mean": "He's my older brother.",
       "hl": "是"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Leo",
       "t": "你是老师吗？",
       "tr": "Nǐ shì lǎoshī ma?",
       "mean": "Are you a teacher?"
      },
      {
       "who": "Fang",
       "t": "不是，我是学生。你呢？",
       "tr": "Bú shì, wǒ shì xuésheng. Nǐ ne?",
       "mean": "No, I'm a student. And you?"
      },
      {
       "who": "Leo",
       "t": "我是医生。",
       "tr": "Wǒ shì yīshēng.",
       "mean": "I'm a doctor."
      },
      {
       "who": "Fang",
       "t": "他也是医生吗？",
       "tr": "Tā yě shì yīshēng ma?",
       "mean": "Is he a doctor too?"
      },
      {
       "who": "Leo",
       "t": "不是，他是司机。他是我弟弟。",
       "tr": "Bú shì, tā shì sījī. Tā shì wǒ dìdi.",
       "mean": "No, he's a driver. He's my younger brother."
      }
     ]
    },
    {
     "type": "practice",
     "text": "Read aloud, then say what you and your friends are.",
     "lines": [
      "我是学生。",
      "我不是老师。",
      "这是我的书。",
      "那不是我的。",
      "我也是美国人。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 'I am not a doctor'?",
       "options": [
        "我没是医生。",
        "不我是医生。",
        "我不是医生。",
        "我是不医生。"
       ],
       "answer": 2
      },
      {
       "q": "Which sentence is WRONG?",
       "options": [
        "他是老师。",
        "我是忙。",
        "我是学生。",
        "我很忙。"
       ],
       "answer": 1,
       "explain": "Adjectives don't take 是. Say 我很忙."
      },
      {
       "q": "Listen. What does it mean?",
       "say": "他是谁",
       "options": [
        "Where is he?",
        "Is he a teacher?",
        "Who is he?",
        "What's this?"
       ],
       "answer": 2
      },
      {
       "q": "Where does {{也}} go in 'I'm a student too'?",
       "options": [
        "我也是学生。",
        "我是也学生。",
        "也我是学生。",
        "我是学生也。"
       ],
       "answer": 0
      },
      {
       "q": "How is {{不是}} pronounced?",
       "options": [
        "bú shì",
        "bǔ shì",
        "bū shì",
        "bù shì"
       ],
       "answer": 0,
       "explain": "不 becomes bú before a fourth tone."
      },
      {
       "q": "Which sentence can drop 是?",
       "options": [
        "他老师。",
        "这我的书。",
        "我二十岁。",
        "我学生。"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-hen",
   "icon": "很",
   "title": "Adjectives with 很",
   "subtitle": "Busy, tired, cold, beautiful",
   "minutes": 12,
   "goals": [
    "Describe things with 很 + adjective",
    "Avoid the 是 + adjective mistake",
    "Say how much: 有点儿, 非常, 太…了",
    "Make adjectives negative with 不"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In Chinese, adjectives behave like verbs. 'I am busy' is simply 'I busy'. But a lonely adjective sounds odd, so we add a little word in front: {{很}}."
    },
    {
     "type": "sentence",
     "t": "我很忙。",
     "tr": "Wǒ hěn máng.",
     "mean": "I'm busy.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "很",
       "mean": "(very)"
      },
      {
       "t": "忙",
       "mean": "busy"
      }
     ],
     "note": "Here 很 is mostly a link word. It doesn't always mean 'very'."
    },
    {
     "type": "rule",
     "name": "Subject + 很 + adjective",
     "color": "green",
     "desc": "No {{是}}! Use {{很}} (or another degree word) before the adjective.",
     "examples": [
      {
       "t": "今天很冷。",
       "tr": "Jīntiān hěn lěng.",
       "hl": "很"
      },
      {
       "t": "中文很有意思。",
       "tr": "Zhōngwén hěn yǒu yìsi.",
       "hl": "很"
      },
      {
       "t": "她很高。",
       "tr": "Tā hěn gāo.",
       "hl": "很"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "✗ 我是累。 ✓ {{我很累。}} (I'm tired.) English speakers make this mistake a lot, so watch out for it!"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "好",
       "tr": "hǎo",
       "mean": "good",
       "root": "女 woman"
      },
      {
       "t": "忙",
       "tr": "máng",
       "mean": "busy",
       "root": "忄 heart"
      },
      {
       "t": "累",
       "tr": "lèi",
       "mean": "tired",
       "root": "糸 silk"
      },
      {
       "t": "冷",
       "tr": "lěng",
       "mean": "cold",
       "root": "冫 ice"
      },
      {
       "t": "热",
       "tr": "rè",
       "mean": "hot",
       "root": "灬 fire"
      },
      {
       "t": "高",
       "tr": "gāo",
       "mean": "tall, high"
      },
      {
       "t": "大",
       "tr": "dà",
       "mean": "big; old (age)"
      },
      {
       "t": "小",
       "tr": "xiǎo",
       "mean": "small; young"
      },
      {
       "t": "漂亮",
       "tr": "piàoliang",
       "mean": "beautiful, pretty",
       "root": "氵 water"
      },
      {
       "t": "难",
       "tr": "nán",
       "mean": "difficult"
      },
      {
       "t": "容易",
       "tr": "róngyì",
       "mean": "easy",
       "root": "宀 roof"
      },
      {
       "t": "有意思",
       "tr": "yǒu yìsi",
       "mean": "interesting",
       "root": "心 heart"
      }
     ],
     "title": "Common adjectives"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{冷}} has two drops of ice {{冫}}, and {{热}} sits on four little flames {{灬}}."
    },
    {
     "type": "table",
     "head": [
      "Word",
      "Pinyin",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "{{不}}",
       "bù",
       "not",
       "{{我不忙。}}"
      ],
      [
       "{{有点儿}}",
       "yǒudiǎnr",
       "a bit (usually negative)",
       "{{今天有点儿冷。}}"
      ],
      [
       "{{很}}",
       "hěn",
       "(link) / very",
       "{{他很高。}}"
      ],
      [
       "{{非常}}",
       "fēicháng",
       "extremely",
       "{{非常好！}}"
      ],
      [
       "{{太…了}}",
       "tài … le",
       "too… / so…!",
       "{{太贵了！}}"
      ]
     ],
     "title": "How much?"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{太…了}} can be a complaint ({{太贵了}}, too expensive) or praise ({{太好了！}}, great!). Listen to the tone of voice."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Without {{很}}, an adjective sounds like a comparison: {{他高，我矮。}} = He's the tall one, I'm the short one."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我不累。",
       "tr": "Wǒ bú lèi.",
       "mean": "I'm not tired.",
       "hl": "不"
      },
      {
       "t": "这个菜有点儿辣。",
       "tr": "Zhège cài yǒudiǎnr là.",
       "mean": "This dish is a bit spicy.",
       "hl": "有点儿"
      },
      {
       "t": "北京非常大。",
       "tr": "Běijīng fēicháng dà.",
       "mean": "Beijing is extremely big.",
       "hl": "非常"
      },
      {
       "t": "太好了！",
       "tr": "Tài hǎo le!",
       "mean": "Great!",
       "hl": "太"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Jia",
       "t": "你今天忙吗？",
       "tr": "Nǐ jīntiān máng ma?",
       "mean": "Are you busy today?"
      },
      {
       "who": "Max",
       "t": "很忙，我有点儿累。",
       "tr": "Hěn máng, wǒ yǒudiǎnr lèi.",
       "mean": "Very busy. I'm a bit tired."
      },
      {
       "who": "Jia",
       "t": "中文难吗？",
       "tr": "Zhōngwén nán ma?",
       "mean": "Is Chinese difficult?"
      },
      {
       "who": "Max",
       "t": "不太难，非常有意思！",
       "tr": "Bú tài nán, fēicháng yǒu yìsi!",
       "mean": "Not too hard, and really interesting!"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Describe the weather and how you feel today.",
     "lines": [
      "今天很热。",
      "今天有点儿冷。",
      "我很好。",
      "我不累。",
      "中文很有意思！"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 'I'm tired'?",
       "options": [
        "我是累。",
        "我很累。",
        "我累是。",
        "很我累。"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What's the weather like?",
       "say": "今天有点儿冷",
       "options": [
        "not cold",
        "too hot",
        "a bit cold",
        "very hot"
       ],
       "answer": 2
      },
      {
       "q": "{{太贵了！}} means…",
       "options": [
        "Very cheap!",
        "So pretty!",
        "Not bad!",
        "Too expensive!"
       ],
       "answer": 3
      },
      {
       "q": "Which radical in {{冷}} means ice?",
       "options": [
        "灬",
        "氵",
        "忄",
        "冫"
       ],
       "answer": 3
      },
      {
       "q": "How do you say 'not busy'?",
       "options": [
        "很不",
        "是忙",
        "没忙",
        "不忙"
       ],
       "answer": 3
      },
      {
       "q": "Listen. How is Chinese?",
       "say": "中文很有意思",
       "options": [
        "easy",
        "boring",
        "interesting",
        "difficult"
       ],
       "answer": 2
      },
      {
       "q": "{{非常好}} means…",
       "options": [
        "a bit good",
        "too good to be true",
        "not good",
        "extremely good"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-ma",
   "icon": "吗",
   "title": "Yes/No Questions with 吗",
   "subtitle": "Turn any sentence into a question",
   "minutes": 12,
   "goals": [
    "Make yes/no questions with 吗",
    "Answer without 'yes' or 'no'",
    "Ask A-not-A questions",
    "Bounce a question back with 呢"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "This is one of the easiest things in Chinese: to ask a yes/no question, take a normal sentence and add {{吗}} (ma) at the end. Nothing moves!"
    },
    {
     "type": "rule",
     "name": "Sentence + 吗？",
     "color": "blue",
     "desc": "Keep the word order. Just add {{吗}} and raise your eyebrows.",
     "examples": [
      {
       "t": "你是老师吗？",
       "tr": "Nǐ shì lǎoshī ma?",
       "hl": "吗"
      },
      {
       "t": "你忙吗？",
       "tr": "Nǐ máng ma?",
       "hl": "吗"
      },
      {
       "t": "你喜欢茶吗？",
       "tr": "Nǐ xǐhuan chá ma?",
       "hl": "吗"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你喝咖啡吗？",
     "tr": "Nǐ hē kāfēi ma?",
     "mean": "Do you drink coffee?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "喝",
       "mean": "drink"
      },
      {
       "t": "咖啡",
       "mean": "coffee"
      },
      {
       "t": "吗",
       "mean": "(question)"
      }
     ],
     "note": "English adds 'do' and moves words around. Chinese just adds 吗."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Chinese has no single word for 'yes' or 'no'. Answer with the verb: yes = repeat it, no = {{不}} + verb."
    },
    {
     "type": "table",
     "head": [
      "Question",
      "Yes",
      "No"
     ],
     "rows": [
      [
       "{{你是中国人吗？}}",
       "{{是。}}",
       "{{不是。}}"
      ],
      [
       "{{你忙吗？}}",
       "{{忙。}}",
       "{{不忙。}}"
      ],
      [
       "{{你喜欢猫吗？}}",
       "{{喜欢。}}",
       "{{不喜欢。}}"
      ],
      [
       "{{你有哥哥吗？}}",
       "{{有。}}",
       "{{没有。}}"
      ]
     ],
     "title": "Answer with the verb"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{对}} (duì) means 'right, correct' and {{好}} (hǎo) means 'OK'. They're handy for agreeing, but repeating the verb is the most natural answer."
    },
    {
     "type": "rule",
     "name": "A-not-A questions",
     "color": "purple",
     "desc": "Another way to ask: say the verb, then {{不}} + the verb. No {{吗}} needed!",
     "examples": [
      {
       "t": "你忙不忙？",
       "tr": "Nǐ máng bu máng?",
       "hl": "忙不忙"
      },
      {
       "t": "你是不是老师？",
       "tr": "Nǐ shì bu shì lǎoshī?",
       "hl": "是不是"
      },
      {
       "t": "你去不去？",
       "tr": "Nǐ qù bu qù?",
       "hl": "去不去"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Never use both: ✗ 你忙不忙吗？ Choose {{你忙吗？}} or {{你忙不忙？}}"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我很好，你呢？",
       "tr": "Wǒ hěn hǎo, nǐ ne?",
       "mean": "I'm fine, and you?",
       "hl": "呢"
      },
      {
       "t": "我是学生，他呢？",
       "tr": "Wǒ shì xuésheng, tā ne?",
       "mean": "I'm a student. What about him?",
       "hl": "呢"
      },
      {
       "t": "我的手机呢？",
       "tr": "Wǒ de shǒujī ne?",
       "mean": "Where's my phone?",
       "hl": "呢",
       "note": "On its own, noun + 呢 asks 'where is…?'"
      }
     ],
     "title": "Bounce it back with 呢"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Nora",
       "t": "你喜欢中国菜吗？",
       "tr": "Nǐ xǐhuan Zhōngguó cài ma?",
       "mean": "Do you like Chinese food?"
      },
      {
       "who": "Kai",
       "t": "喜欢！你呢？",
       "tr": "Xǐhuan! Nǐ ne?",
       "mean": "Yes! And you?"
      },
      {
       "who": "Nora",
       "t": "我也喜欢。你吃不吃辣？",
       "tr": "Wǒ yě xǐhuan. Nǐ chī bu chī là?",
       "mean": "Me too. Do you eat spicy food?"
      },
      {
       "who": "Kai",
       "t": "不吃，我怕辣。",
       "tr": "Bù chī, wǒ pà là.",
       "mean": "No, I'm afraid of spicy food."
      },
      {
       "who": "Nora",
       "t": "那我们吃饺子，好吗？",
       "tr": "Nà wǒmen chī jiǎozi, hǎo ma?",
       "mean": "Then let's have dumplings, OK?"
      },
      {
       "who": "Kai",
       "t": "好！",
       "tr": "Hǎo!",
       "mean": "OK!"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Ask these questions aloud, then answer them about yourself.",
     "lines": [
      "你忙吗？",
      "你是学生吗？",
      "你喜欢茶吗？",
      "你有妹妹吗？",
      "你去不去？"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Turn {{你是学生}} into a question.",
       "options": [
        "是你学生吗？",
        "你是学生吗？",
        "你吗是学生？",
        "吗你是学生？"
       ],
       "answer": 1
      },
      {
       "q": "Someone asks {{你忙吗？}} You're not busy. You say…",
       "options": [
        "没忙。",
        "不忙。",
        "忙吗。",
        "不是。"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the question?",
       "say": "你喜欢猫吗",
       "options": [
        "Do you like cats?",
        "Where is the cat?",
        "Do you have a cat?",
        "Is this your cat?"
       ],
       "answer": 0
      },
      {
       "q": "Which question is WRONG?",
       "options": [
        "你是不是老师？",
        "你去不去？",
        "你去吗？",
        "你去不去吗？"
       ],
       "answer": 3
      },
      {
       "q": "{{你呢？}} means…",
       "options": [
        "Is it you?",
        "Are you OK?",
        "And you?",
        "Who are you?"
       ],
       "answer": 2
      },
      {
       "q": "{{你有哥哥吗？}} The answer is no. You say…",
       "options": [
        "不有。",
        "没有。",
        "没是。",
        "不是。"
       ],
       "answer": 1
      },
      {
       "q": "Someone asks {{你喜欢茶吗？}} Listen to the answer. What does it mean?",
       "say": "喜欢",
       "options": [
        "Yes, I like it.",
        "I don't know.",
        "Maybe.",
        "No, I don't."
       ],
       "answer": 0
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-question-words",
   "icon": "谁",
   "title": "Question Words",
   "subtitle": "What, who, where, how many, how",
   "minutes": 15,
   "goals": [
    "Use 什么, 谁, 哪儿, 几, 多少, 怎么",
    "Keep the question word in the answer's place",
    "Choose between 几 and 多少",
    "Ask how to say something in Chinese"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "English moves question words to the front: 'Where are you going?' Chinese doesn't! Put the question word exactly where the answer will go. That's the whole secret."
    },
    {
     "type": "table",
     "head": [
      "Word",
      "Pinyin",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "{{什么}}",
       "shénme",
       "what",
       "{{这是什么？}}"
      ],
      [
       "{{谁}}",
       "shéi",
       "who",
       "{{他是谁？}}"
      ],
      [
       "{{哪儿}} / {{哪里}}",
       "nǎr / nǎlǐ",
       "where",
       "{{你去哪儿？}}"
      ],
      [
       "{{几}}",
       "jǐ",
       "how many (small numbers)",
       "{{你有几个孩子？}}"
      ],
      [
       "{{多少}}",
       "duōshao",
       "how many, how much",
       "{{多少钱？}}"
      ],
      [
       "{{怎么}}",
       "zěnme",
       "how",
       "{{你怎么去？}}"
      ],
      [
       "{{什么时候}}",
       "shénme shíhou",
       "when",
       "{{你什么时候来？}}"
      ],
      [
       "{{为什么}}",
       "wèishénme",
       "why",
       "{{你为什么学中文？}}"
      ]
     ],
     "title": "The question words"
    },
    {
     "type": "rule",
     "name": "Stay in place",
     "color": "green",
     "desc": "Write the answer sentence, then swap the answer for a question word. No change of order, and no {{吗}}.",
     "examples": [
      {
       "t": "你去哪儿？",
       "tr": "Nǐ qù nǎr?",
       "hl": "哪儿"
      },
      {
       "t": "他是谁？",
       "tr": "Tā shì shéi?",
       "hl": "谁"
      },
      {
       "t": "你吃什么？",
       "tr": "Nǐ chī shénme?",
       "hl": "什么"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我去北京。",
       "tr": "Wǒ qù Běijīng.",
       "mean": "I'm going to Beijing.",
       "hl": "北京",
       "note": "Answers 你去哪儿？ — 北京 takes the place of 哪儿."
      },
      {
       "t": "他是我哥哥。",
       "tr": "Tā shì wǒ gēge.",
       "mean": "He's my older brother.",
       "hl": "我哥哥",
       "note": "Answers 他是谁？"
      },
      {
       "t": "我吃面条。",
       "tr": "Wǒ chī miàntiáo.",
       "mean": "I'm eating noodles.",
       "hl": "面条",
       "note": "Answers 你吃什么？"
      }
     ],
     "title": "Questions and answers line up"
    },
    {
     "type": "sentence",
     "t": "你什么时候去中国？",
     "tr": "Nǐ shénme shíhou qù Zhōngguó?",
     "mean": "When are you going to China?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "什么时候",
       "mean": "when"
      },
      {
       "t": "去",
       "mean": "go"
      },
      {
       "t": "中国",
       "mean": "China"
      }
     ],
     "note": "Answer: 我明天去中国 — 'tomorrow' sits right where 'when' was."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Question words already make a question, so don't add {{吗}}: ✗ 你去哪儿吗？"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "{{谁}} is usually said shéi in everyday speech; you may also hear shuí."
    },
    {
     "type": "rule",
     "name": "几 or 多少?",
     "color": "orange",
     "desc": "Use {{几}} when you expect a small number (about 1–10) and add a measure word. Use {{多少}} for any number; the measure word is optional.",
     "examples": [
      {
       "t": "你家有几口人？",
       "tr": "Nǐ jiā yǒu jǐ kǒu rén?",
       "hl": "几"
      },
      {
       "t": "你们学校有多少学生？",
       "tr": "Nǐmen xuéxiào yǒu duōshao xuésheng?",
       "hl": "多少"
      },
      {
       "t": "现在几点？",
       "tr": "Xiànzài jǐ diǎn?",
       "hl": "几"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "To ask a child's age, say {{你几岁？}} To ask an adult, say {{你多大？}} (Nǐ duō dà?). For an older person, {{您多大年纪？}} (Nín duō dà niánjì?) is most polite."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "这个用中文怎么说？",
       "tr": "Zhège yòng Zhōngwén zěnme shuō?",
       "mean": "How do you say this in Chinese?",
       "hl": "怎么说"
      },
      {
       "t": "去火车站怎么走？",
       "tr": "Qù huǒchēzhàn zěnme zǒu?",
       "mean": "How do I get to the train station?",
       "hl": "怎么走"
      },
      {
       "t": "这个菜怎么样？",
       "tr": "Zhège cài zěnmeyàng?",
       "mean": "How is this dish?",
       "hl": "怎么样"
      },
      {
       "t": "你为什么学中文？",
       "tr": "Nǐ wèishénme xué Zhōngwén?",
       "mean": "Why are you learning Chinese?",
       "hl": "为什么"
      }
     ],
     "title": "怎么 and friends"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{怎么}} + verb = 'how to do it': {{怎么说}} (how to say), {{怎么走}} (how to get there), {{怎么写}} (how to write)."
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Lily",
       "t": "你叫什么名字？",
       "tr": "Nǐ jiào shénme míngzi?",
       "mean": "What's your name?"
      },
      {
       "who": "Sam",
       "t": "我叫山姆。你是哪里人？",
       "tr": "Wǒ jiào Shānmǔ. Nǐ shì nǎlǐ rén?",
       "mean": "I'm Sam. Where are you from?"
      },
      {
       "who": "Lily",
       "t": "我是上海人。你为什么学中文？",
       "tr": "Wǒ shì Shànghǎi rén. Nǐ wèishénme xué Zhōngwén?",
       "mean": "I'm from Shanghai. Why are you learning Chinese?"
      },
      {
       "who": "Sam",
       "t": "因为我喜欢中国菜！",
       "tr": "Yīnwèi wǒ xǐhuan Zhōngguó cài!",
       "mean": "Because I love Chinese food!"
      },
      {
       "who": "Lily",
       "t": "哈哈！你什么时候来上海？",
       "tr": "Hāha! Nǐ shénme shíhou lái Shànghǎi?",
       "mean": "Haha! When are you coming to Shanghai?"
      },
      {
       "who": "Sam",
       "t": "我八月去。",
       "tr": "Wǒ bāyuè qù.",
       "mean": "I'm going in August."
      }
     ]
    },
    {
     "type": "practice",
     "text": "Ask these questions aloud, then answer each one.",
     "lines": [
      "你叫什么名字？",
      "他是谁？",
      "你去哪儿？",
      "现在几点？",
      "这个多少钱？",
      "你怎么去学校？"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "{{谁}} means…",
       "options": [
        "what",
        "when",
        "who",
        "where"
       ],
       "answer": 2
      },
      {
       "q": "Answer {{你去哪儿？}} with 'the bank':",
       "options": [
        "我去银行。",
        "去银行吗。",
        "我去哪儿银行。",
        "银行我去。"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What is the question?",
       "say": "多少钱",
       "options": [
        "What time is it?",
        "Where is it?",
        "Who is it?",
        "How much is it?"
       ],
       "answer": 3
      },
      {
       "q": "Which question is WRONG?",
       "options": [
        "你吃什么吗？",
        "他是谁？",
        "你去哪儿？",
        "你吃什么？"
       ],
       "answer": 0,
       "explain": "Question words don't take 吗."
      },
      {
       "q": "How do you ask a child's age?",
       "options": [
        "你哪儿岁？",
        "你几岁？",
        "你什么岁？",
        "你多少岁吗？"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the speaker asking?",
       "say": "这个用中文怎么说",
       "options": [
        "how to say something",
        "why you study",
        "when you arrive",
        "where to go"
       ],
       "answer": 0
      },
      {
       "q": "{{为什么}} means…",
       "options": [
        "when",
        "why",
        "which",
        "how"
       ],
       "answer": 1
      },
      {
       "q": "To ask how many students a big school has, use…",
       "options": [
        "怎么",
        "几",
        "哪",
        "多少"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-bu-mei",
   "icon": "不",
   "title": "Saying No: 不 vs 没",
   "subtitle": "Two little words for 'not'",
   "minutes": 13,
   "goals": [
    "Use 不 for habits, wishes, the future and adjectives",
    "Use 没 for things that didn't happen",
    "Always say 没有, never 不有",
    "Hear the tone change of 不"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Chinese has two words for 'not': {{不}} (bù) and {{没}} (méi). Choosing the right one is easier than it looks: ask yourself 'Did it happen?' and 'Is it 有?'"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "不",
       "label": "bù — don't, won't, am not",
       "desc": "Habits, wishes, the future, adjectives and 是."
      },
      {
       "t": "没",
       "label": "méi — didn't, haven't",
       "desc": "Things that did not happen, and 没有 (don't have)."
      }
     ],
     "title": "Two kinds of 'not'"
    },
    {
     "type": "rule",
     "name": "不 + verb / adjective",
     "color": "red",
     "desc": "For what you normally do, want to do, will do, or what something is like.",
     "examples": [
      {
       "t": "我不吃肉。",
       "tr": "Wǒ bù chī ròu.",
       "hl": "不"
      },
      {
       "t": "明天我不去。",
       "tr": "Míngtiān wǒ bú qù.",
       "hl": "不"
      },
      {
       "t": "今天不冷。",
       "tr": "Jīntiān bù lěng.",
       "hl": "不"
      },
      {
       "t": "他不是老师。",
       "tr": "Tā bú shì lǎoshī.",
       "hl": "不"
      }
     ]
    },
    {
     "type": "rule",
     "name": "没 + verb",
     "color": "orange",
     "desc": "For something that did not happen (yet).",
     "examples": [
      {
       "t": "我没吃早饭。",
       "tr": "Wǒ méi chī zǎofàn.",
       "hl": "没"
      },
      {
       "t": "他昨天没来。",
       "tr": "Tā zuótiān méi lái.",
       "hl": "没"
      },
      {
       "t": "我还没去过。",
       "tr": "Wǒ hái méi qù guo.",
       "hl": "没"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我今天没喝咖啡。",
     "tr": "Wǒ jīntiān méi hē kāfēi.",
     "mean": "I didn't drink coffee today.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "今天",
       "mean": "today"
      },
      {
       "t": "没",
       "mean": "didn't"
      },
      {
       "t": "喝",
       "mean": "drink"
      },
      {
       "t": "咖啡",
       "mean": "coffee"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我不喝咖啡。",
       "tr": "Wǒ bù hē kāfēi.",
       "mean": "I don't drink coffee.",
       "hl": "不",
       "note": "A habit: I never drink it."
      },
      {
       "t": "我没喝咖啡。",
       "tr": "Wǒ méi hē kāfēi.",
       "mean": "I didn't drink coffee.",
       "hl": "没",
       "note": "A fact: it didn't happen."
      }
     ],
     "title": "Feel the difference"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{有}} (to have) is always made negative with {{没}}: {{我没有钱。}} (I have no money.) ✗ 我不有钱。"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Remember: {{不}} becomes bú before a fourth tone: {{不去}} bú qù, {{不是}} bú shì, {{不要}} bú yào. Before other tones it stays bù: {{不吃}} bù chī."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of {{没}} as 'no event'. If you could have taken a photo of it happening and you can't, use {{没}}."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "你吃饭了吗？",
       "tr": "Nǐ chī fàn le ma?",
       "mean": "Have you eaten?"
      },
      {
       "t": "还没吃。",
       "tr": "Hái méi chī.",
       "mean": "Not yet.",
       "hl": "没"
      },
      {
       "t": "你明天来吗？",
       "tr": "Nǐ míngtiān lái ma?",
       "mean": "Are you coming tomorrow?"
      },
      {
       "t": "不来。",
       "tr": "Bù lái.",
       "mean": "No, I'm not.",
       "hl": "不"
      }
     ],
     "title": "Short answers"
    },
    {
     "type": "practice",
     "text": "Read each pair aloud and think about the difference.",
     "lines": [
      "我不吃肉。",
      "我没吃肉。",
      "他不来。",
      "他没来。",
      "我没有钱。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "'I don't eat meat' (I'm vegetarian):",
       "options": [
        "我没吃肉。",
        "我不有肉。",
        "我没有吃。",
        "我不吃肉。"
       ],
       "answer": 3
      },
      {
       "q": "'He didn't come yesterday':",
       "options": [
        "他昨天没来。",
        "他昨天不有来。",
        "他昨天不来。",
        "他没昨天来。"
       ],
       "answer": 0
      },
      {
       "q": "Which is correct for 'I don't have a car'?",
       "options": [
        "我不车有。",
        "我不有车。",
        "我没有车。",
        "我没是车。"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does it mean?",
       "say": "我没吃早饭",
       "options": [
        "I don't eat breakfast.",
        "I want breakfast.",
        "I didn't eat breakfast.",
        "I'll eat breakfast."
       ],
       "answer": 2
      },
      {
       "q": "How is {{不去}} pronounced?",
       "options": [
        "bù qù",
        "bú qù",
        "bǔ qù",
        "bū qù"
       ],
       "answer": 1
      },
      {
       "q": "'It isn't cold today':",
       "options": [
        "今天不冷。",
        "今天不有冷。",
        "今天没冷。",
        "今天冷不。"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Is the speaker coming?",
       "say": "我明天不来",
       "options": [
        "Yes, coming",
        "Came yesterday",
        "Didn't come",
        "No, not coming"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-measure-words",
   "icon": "个",
   "title": "Measure Words",
   "subtitle": "个, 本, 杯, 张, 只, 件 and friends",
   "minutes": 14,
   "goals": [
    "Use number + measure word + noun",
    "Choose the right measure word",
    "Use 这/那/哪 with measure words",
    "Use 两, not 二, before measure words"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "You met measure words in Unit 3. Now let's master them. Every time you count something, or say 'this one' or 'that one', a measure word slips in between."
    },
    {
     "type": "rule",
     "name": "Number / 这 / 那 / 哪 + measure word + noun",
     "color": "purple",
     "desc": "The measure word always sits right before the noun.",
     "examples": [
      {
       "t": "三个人",
       "tr": "sān gè rén",
       "hl": "个"
      },
      {
       "t": "这本书",
       "tr": "zhè běn shū",
       "hl": "本"
      },
      {
       "t": "那杯咖啡",
       "tr": "nà bēi kāfēi",
       "hl": "杯"
      },
      {
       "t": "哪件衣服？",
       "tr": "nǎ jiàn yīfu?",
       "hl": "件"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Measure word",
      "Pinyin",
      "Used for",
      "Examples"
     ],
     "rows": [
      [
       "{{个}}",
       "gè",
       "people and general things",
       "{{一个人}}, {{两个苹果}}"
      ],
      [
       "{{本}}",
       "běn",
       "books, magazines, notebooks",
       "{{三本书}}"
      ],
      [
       "{{杯}}",
       "bēi",
       "cups and glasses of a drink",
       "{{一杯水}}, {{两杯茶}}"
      ],
      [
       "{{张}}",
       "zhāng",
       "flat things: paper, tickets, photos, beds, tables",
       "{{一张床}}"
      ],
      [
       "{{只}}",
       "zhī",
       "most animals; one of a pair",
       "{{一只猫}}, {{一只手}}"
      ],
      [
       "{{件}}",
       "jiàn",
       "clothes for the top half; matters",
       "{{一件衬衫}}, {{一件事}}"
      ],
      [
       "{{条}}",
       "tiáo",
       "long, bendy things: fish, roads, trousers",
       "{{一条鱼}}, {{一条裤子}}"
      ],
      [
       "{{辆}}",
       "liàng",
       "vehicles",
       "{{一辆车}}"
      ],
      [
       "{{位}}",
       "wèi",
       "people (polite)",
       "{{三位老师}}"
      ]
     ],
     "title": "The most useful measure words"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Picture them: {{张}} = a flat sheet, {{条}} = a ribbon, {{只}} = a single little animal, {{本}} = a book with a spine, {{杯}} = a cup ({{木}}: cups were once wooden)."
    },
    {
     "type": "rule",
     "name": "2 = 两 before a measure word",
     "color": "red",
     "desc": "Counting things, use {{两}} (liǎng). Use {{二}} (èr) in counting, phone numbers and in 12, 20, 22…",
     "examples": [
      {
       "t": "两个人",
       "tr": "liǎng gè rén",
       "hl": "两"
      },
      {
       "t": "两本书",
       "tr": "liǎng běn shū",
       "hl": "两"
      },
      {
       "t": "十二个人",
       "tr": "shí'èr gè rén",
       "hl": "二"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我买两本书。",
     "tr": "Wǒ mǎi liǎng běn shū.",
     "mean": "I'm buying two books.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "买",
       "mean": "buy"
      },
      {
       "t": "两",
       "mean": "two"
      },
      {
       "t": "本",
       "mean": "(measure word for books)"
      },
      {
       "t": "书",
       "mean": "books"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "这只猫很可爱。",
     "tr": "Zhè zhī māo hěn kě'ài.",
     "mean": "This cat is very cute.",
     "words": [
      {
       "t": "这",
       "mean": "this"
      },
      {
       "t": "只",
       "mean": "(measure word for animals)"
      },
      {
       "t": "猫",
       "mean": "cat"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "可爱",
       "mean": "cute"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "In fast speech {{个}} is often said with a light, neutral tone: 'ge'. And if you forget a measure word, {{个}} will usually still be understood."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{只}} (zhī) and {{支}} (zhī, for pens) sound the same. {{一只狗}} = a dog, {{一支笔}} = a pen. You may also hear {{一条狗}} for a dog."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我要一杯咖啡。",
       "tr": "Wǒ yào yì bēi kāfēi.",
       "mean": "I'd like a coffee.",
       "hl": "杯"
      },
      {
       "t": "这张照片很漂亮。",
       "tr": "Zhè zhāng zhàopiàn hěn piàoliang.",
       "mean": "This photo is beautiful.",
       "hl": "张"
      },
      {
       "t": "我有一件事。",
       "tr": "Wǒ yǒu yí jiàn shì.",
       "mean": "There's something I need to tell you.",
       "hl": "件"
      },
      {
       "t": "这条路很长。",
       "tr": "Zhè tiáo lù hěn cháng.",
       "mean": "This road is very long.",
       "hl": "条"
      },
      {
       "t": "你要哪个？",
       "tr": "Nǐ yào nǎge?",
       "mean": "Which one do you want?",
       "hl": "哪个"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Count the things around you with the right measure word.",
     "lines": [
      "一个人",
      "两本书",
      "三杯水",
      "四张纸",
      "五只猫",
      "一件衣服",
      "一条鱼"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Fill the gap: {{一 ___ 书}}",
       "options": [
        "只",
        "件",
        "张",
        "本"
       ],
       "answer": 3
      },
      {
       "q": "Fill the gap: {{一 ___ 猫}}",
       "options": [
        "只",
        "本",
        "杯",
        "张"
       ],
       "answer": 0
      },
      {
       "q": "Fill the gap: {{两 ___ 衣服}}",
       "options": [
        "辆",
        "本",
        "件",
        "张"
       ],
       "answer": 2
      },
      {
       "q": "Choose the correct way to say 'two people'.",
       "options": [
        "二人们",
        "两人个",
        "两个人",
        "二个人"
       ],
       "answer": 2
      },
      {
       "q": "Fill the gap: {{三 ___ 咖啡}}",
       "options": [
        "张",
        "本",
        "杯",
        "只"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is it?",
       "say": "一辆车",
       "options": [
        "a book",
        "a car",
        "a cat",
        "a fish"
       ],
       "answer": 1
      },
      {
       "q": "Which measure word is for long, bendy things like fish and trousers?",
       "options": [
        "杯",
        "张",
        "位",
        "条"
       ],
       "answer": 3
      },
      {
       "q": "Listen. How many tickets?",
       "say": "两张票",
       "options": [
        "3",
        "10",
        "2",
        "4"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-de",
   "icon": "的",
   "title": "的: Possession & Description",
   "subtitle": "My, your, the teacher's… and 'the red one'",
   "minutes": 12,
   "goals": [
    "Show possession with 的",
    "Know when to drop 的",
    "Use adjective + 的 + noun",
    "Ask 'Whose is it?'"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{的}} (de) is the most common character in Chinese. Its main job is just like English **'s**: {{老师的书}} = the teacher's book."
    },
    {
     "type": "rule",
     "name": "A 的 B = A's B",
     "color": "blue",
     "desc": "The owner comes first, then {{的}}, then the thing.",
     "examples": [
      {
       "t": "我的书",
       "tr": "wǒ de shū",
       "hl": "的"
      },
      {
       "t": "老师的电脑",
       "tr": "lǎoshī de diànnǎo",
       "hl": "的"
      },
      {
       "t": "妈妈的车",
       "tr": "māma de chē",
       "hl": "的"
      },
      {
       "t": "中国的茶",
       "tr": "Zhōngguó de chá",
       "hl": "的"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "这是我朋友的手机。",
     "tr": "Zhè shì wǒ péngyou de shǒujī.",
     "mean": "This is my friend's phone.",
     "words": [
      {
       "t": "这",
       "mean": "this"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "我",
       "mean": "my"
      },
      {
       "t": "朋友",
       "mean": "friend"
      },
      {
       "t": "的",
       "mean": "'s"
      },
      {
       "t": "手机",
       "mean": "phone"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Chinese",
      "Pinyin",
      "Meaning"
     ],
     "rows": [
      [
       "{{我的}}",
       "wǒ de",
       "my, mine"
      ],
      [
       "{{你的}}",
       "nǐ de",
       "your, yours"
      ],
      [
       "{{他的}} / {{她的}}",
       "tā de",
       "his / her, hers"
      ],
      [
       "{{我们的}}",
       "wǒmen de",
       "our, ours"
      ],
      [
       "{{你们的}}",
       "nǐmen de",
       "your, yours (plural)"
      ],
      [
       "{{他们的}}",
       "tāmen de",
       "their, theirs"
      ]
     ],
     "title": "My, your, his…"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Pronoun + {{的}} gives both 'my' AND 'mine': {{我的书}} (my book), {{这是我的。}} (This is mine.)"
    },
    {
     "type": "rule",
     "name": "Drop 的 for close people and groups",
     "color": "gray",
     "desc": "With family, close friends, and groups you belong to, {{的}} is usually left out.",
     "examples": [
      {
       "t": "我妈妈",
       "tr": "wǒ māma"
      },
      {
       "t": "我朋友",
       "tr": "wǒ péngyou"
      },
      {
       "t": "我们学校",
       "tr": "wǒmen xuéxiào"
      },
      {
       "t": "我家",
       "tr": "wǒ jiā"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Adjective + 的 + noun",
     "color": "green",
     "desc": "Longer adjectives, or adjectives with {{很}}, take {{的}} before the noun. Short one-character adjectives usually don't.",
     "examples": [
      {
       "t": "很好的朋友",
       "tr": "hěn hǎo de péngyou",
       "hl": "的"
      },
      {
       "t": "漂亮的衣服",
       "tr": "piàoliang de yīfu",
       "hl": "的"
      },
      {
       "t": "好朋友",
       "tr": "hǎo péngyou"
      },
      {
       "t": "新手机",
       "tr": "xīn shǒujī"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Leave out the noun and {{的}} means 'the … one': {{红的}} = the red one, {{我的}} = mine, {{贵的}} = the expensive one."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "这本书是谁的？",
       "tr": "Zhè běn shū shì shéi de?",
       "mean": "Whose book is this?",
       "hl": "谁的"
      },
      {
       "t": "是我的。",
       "tr": "Shì wǒ de.",
       "mean": "It's mine.",
       "hl": "我的"
      },
      {
       "t": "我要红的。",
       "tr": "Wǒ yào hóng de.",
       "mean": "I want the red one.",
       "hl": "红的"
      },
      {
       "t": "她是我最好的朋友。",
       "tr": "Tā shì wǒ zuì hǎo de péngyou.",
       "mean": "She's my best friend.",
       "hl": "的"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Teacher",
       "t": "这是谁的杯子？",
       "tr": "Zhè shì shéi de bēizi?",
       "mean": "Whose cup is this?"
      },
      {
       "who": "Amy",
       "t": "不是我的。我的杯子是红的。",
       "tr": "Bú shì wǒ de. Wǒ de bēizi shì hóng de.",
       "mean": "It's not mine. My cup is the red one."
      },
      {
       "who": "Ben",
       "t": "是我的！谢谢老师。",
       "tr": "Shì wǒ de! Xièxie lǎoshī.",
       "mean": "It's mine! Thank you, teacher."
      },
      {
       "who": "Teacher",
       "t": "那这本书呢？",
       "tr": "Nà zhè běn shū ne?",
       "mean": "And this book?"
      },
      {
       "who": "Amy",
       "t": "那是我哥哥的。",
       "tr": "Nà shì wǒ gēge de.",
       "mean": "That's my brother's."
      }
     ],
     "title": "Lost property"
    },
    {
     "type": "practice",
     "text": "Point at things and say whose they are.",
     "lines": [
      "我的手机",
      "你的书",
      "老师的电脑",
      "我妈妈",
      "这是谁的？",
      "是我的。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 'the teacher's car'?",
       "options": [
        "的老师车",
        "老师车的",
        "车的老师",
        "老师的车"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What is the question?",
       "say": "这是谁的",
       "options": [
        "Where is this?",
        "Who is this?",
        "What is this?",
        "Whose is this?"
       ],
       "answer": 3
      },
      {
       "q": "Which is most natural for 'my mum'?",
       "options": [
        "妈妈我的",
        "我妈妈",
        "妈妈的我",
        "我的的妈妈"
       ],
       "answer": 1,
       "explain": "With close family 的 is usually dropped."
      },
      {
       "q": "{{红的}} means…",
       "options": [
        "the red one",
        "red tea",
        "very red",
        "not red"
       ],
       "answer": 0
      },
      {
       "q": "Which one needs 的?",
       "options": [
        "我___妈妈",
        "新___手机",
        "好___朋友",
        "很好___朋友"
       ],
       "answer": 3
      },
      {
       "q": "{{这是我的。}} means…",
       "options": [
        "I am here.",
        "It's my turn.",
        "This is mine.",
        "This is me."
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-zai",
   "icon": "在",
   "title": "在: Where & What's Happening",
   "subtitle": "Location, place of action, and actions in progress",
   "minutes": 14,
   "goals": [
    "Say where someone or something is",
    "Use place words like 上, 里, 旁边",
    "Say where you do something",
    "Talk about actions in progress"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "{{在}} (zài) is a hard-working little word with three jobs: 'to be at', 'at/in (a place)' and '-ing' (doing right now). Let's take them one at a time."
    },
    {
     "type": "rule",
     "name": "Job 1: X 在 place",
     "color": "blue",
     "desc": "{{在}} is the verb 'to be at / in'.",
     "examples": [
      {
       "t": "我在家。",
       "tr": "Wǒ zài jiā.",
       "hl": "在"
      },
      {
       "t": "书在桌子上。",
       "tr": "Shū zài zhuōzi shang.",
       "hl": "在"
      },
      {
       "t": "我妈妈在上海。",
       "tr": "Wǒ māma zài Shànghǎi.",
       "hl": "在"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "上",
       "tr": "shàng",
       "mean": "on, above",
       "root": "一 one"
      },
      {
       "t": "下",
       "tr": "xià",
       "mean": "under, below",
       "root": "一 one"
      },
      {
       "t": "里",
       "tr": "lǐ",
       "mean": "inside",
       "root": "里 village"
      },
      {
       "t": "外",
       "tr": "wài",
       "mean": "outside",
       "root": "夕 evening"
      },
      {
       "t": "旁边",
       "tr": "pángbiān",
       "mean": "next to",
       "root": "方 square"
      },
      {
       "t": "前面",
       "tr": "qiánmiàn",
       "mean": "in front",
       "root": "刂 knife"
      },
      {
       "t": "后面",
       "tr": "hòumiàn",
       "mean": "behind",
       "root": "口 mouth"
      },
      {
       "t": "这儿",
       "tr": "zhèr",
       "mean": "here",
       "root": "辶 walk"
      },
      {
       "t": "那儿",
       "tr": "nàr",
       "mean": "there",
       "root": "阝 city"
      }
     ],
     "title": "Place words"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The place word comes AFTER the thing: {{桌子上}} = 'table-on' = on the table; {{包里}} = 'bag-inside' = in the bag. English does it the other way round."
    },
    {
     "type": "rule",
     "name": "Job 2: 在 + place + verb",
     "color": "green",
     "desc": "To say WHERE you do something, put {{在}} + place before the verb.",
     "examples": [
      {
       "t": "我在银行工作。",
       "tr": "Wǒ zài yínháng gōngzuò.",
       "hl": "在银行"
      },
      {
       "t": "他在家看电视。",
       "tr": "Tā zài jiā kàn diànshì.",
       "hl": "在家"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我在学校吃午饭。",
     "tr": "Wǒ zài xuéxiào chī wǔfàn.",
     "mean": "I have lunch at school.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "在",
       "mean": "at"
      },
      {
       "t": "学校",
       "mean": "school"
      },
      {
       "t": "吃",
       "mean": "eat"
      },
      {
       "t": "午饭",
       "mean": "lunch"
      }
     ],
     "note": "English: I eat lunch AT SCHOOL. Chinese: I AT SCHOOL eat lunch."
    },
    {
     "type": "rule",
     "name": "Job 3: 在 + verb = doing now",
     "color": "purple",
     "desc": "Put {{在}} (or {{正在}}) right before the verb for an action in progress. {{呢}} at the end makes it sound natural.",
     "examples": [
      {
       "t": "我在吃饭。",
       "tr": "Wǒ zài chī fàn.",
       "hl": "在"
      },
      {
       "t": "他在看电视。",
       "tr": "Tā zài kàn diànshì.",
       "hl": "在"
      },
      {
       "t": "她正在睡觉呢。",
       "tr": "Tā zhèngzài shuìjiào ne.",
       "hl": "正在"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你在做什么？",
     "tr": "Nǐ zài zuò shénme?",
     "mean": "What are you doing?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "在",
       "mean": "(doing now)"
      },
      {
       "t": "做",
       "mean": "do"
      },
      {
       "t": "什么",
       "mean": "what"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Negatives: {{不在}} = not at a place ({{他不在家。}} He's not home). {{没在}} = not doing it right now ({{我没在看电视。}} I'm not watching TV)."
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Xiaoli",
       "t": "喂，你在哪儿？",
       "tr": "Wéi, nǐ zài nǎr?",
       "mean": "Hello, where are you?"
      },
      {
       "who": "Dan",
       "t": "我在家。",
       "tr": "Wǒ zài jiā.",
       "mean": "I'm at home."
      },
      {
       "who": "Xiaoli",
       "t": "你在做什么？",
       "tr": "Nǐ zài zuò shénme?",
       "mean": "What are you doing?"
      },
      {
       "who": "Dan",
       "t": "我在做饭。你呢？",
       "tr": "Wǒ zài zuò fàn. Nǐ ne?",
       "mean": "I'm cooking. And you?"
      },
      {
       "who": "Xiaoli",
       "t": "我在超市买东西。",
       "tr": "Wǒ zài chāoshì mǎi dōngxi.",
       "mean": "I'm shopping at the supermarket."
      },
      {
       "who": "Dan",
       "t": "那你买一点儿水果吧！",
       "tr": "Nà nǐ mǎi yìdiǎnr shuǐguǒ ba!",
       "mean": "Then buy some fruit!"
      }
     ],
     "title": "On the phone"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "On the phone, Chinese people answer with {{喂？}} (wéi), a 'hello' used only for calls."
    },
    {
     "type": "practice",
     "text": "Say where you are and what you're doing right now.",
     "lines": [
      "我在家。",
      "我在学中文。",
      "手机在桌子上。",
      "钥匙在包里。",
      "你在做什么？"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 'The book is on the table'?",
       "options": [
        "书在桌子上。",
        "在桌子上书。",
        "书上在桌子。",
        "书在上桌子。"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What is he doing?",
       "say": "他在看电视",
       "options": [
        "sleeping",
        "watching TV",
        "working",
        "eating"
       ],
       "answer": 1
      },
      {
       "q": "Choose the correct order: 'I work at a bank.'",
       "options": [
        "我银行在工作。",
        "在我银行工作。",
        "我在银行工作。",
        "我工作在银行。"
       ],
       "answer": 2
      },
      {
       "q": "{{你在做什么？}} means…",
       "options": [
        "What do you want?",
        "What do you do?",
        "What are you doing?",
        "Where are you?"
       ],
       "answer": 2
      },
      {
       "q": "{{里}} means…",
       "options": [
        "inside",
        "behind",
        "outside",
        "on"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Where is the speaker?",
       "say": "我在家",
       "options": [
        "at the shop",
        "at work",
        "at school",
        "at home"
       ],
       "answer": 3
      },
      {
       "q": "'He's not at home' is…",
       "options": [
        "他不在家。",
        "他没是家。",
        "他不有家。",
        "他在不家。"
       ],
       "answer": 0
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-le",
   "icon": "了",
   "title": "了: Completed Actions",
   "subtitle": "Done, finished, and things that have changed",
   "minutes": 14,
   "goals": [
    "Use verb + 了 for completed actions",
    "Ask 'Have you…?' with 了吗",
    "Make negatives with 没 (no 了)",
    "Use 了 at the end for a change"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Chinese verbs have no past tense. Instead, a tiny word {{了}} (le) tells you an action is **done**. It's not exactly 'past', it's 'completed'."
    },
    {
     "type": "rule",
     "name": "Verb + 了",
     "color": "green",
     "desc": "{{了}} after a verb shows the action is complete. It is very common with a number or amount.",
     "examples": [
      {
       "t": "我吃了。",
       "tr": "Wǒ chī le.",
       "hl": "了"
      },
      {
       "t": "我买了三本书。",
       "tr": "Wǒ mǎi le sān běn shū.",
       "hl": "了"
      },
      {
       "t": "他喝了两杯咖啡。",
       "tr": "Tā hē le liǎng bēi kāfēi.",
       "hl": "了"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我昨天看了一个电影。",
     "tr": "Wǒ zuótiān kàn le yí gè diànyǐng.",
     "mean": "I watched a film yesterday.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "昨天",
       "mean": "yesterday"
      },
      {
       "t": "看",
       "mean": "watch"
      },
      {
       "t": "了",
       "mean": "(done)"
      },
      {
       "t": "一",
       "mean": "one"
      },
      {
       "t": "个",
       "mean": "(measure word)"
      },
      {
       "t": "电影",
       "mean": "film"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Questions and negatives",
     "color": "orange",
     "desc": "Ask with {{了吗？}} or {{了没有？}} Answer yes with verb + {{了}}. For no, use {{没}} + verb, and drop {{了}}!",
     "examples": [
      {
       "t": "你吃饭了吗？",
       "tr": "Nǐ chī fàn le ma?",
       "hl": "了吗"
      },
      {
       "t": "吃了。",
       "tr": "Chī le.",
       "hl": "了"
      },
      {
       "t": "我没吃。",
       "tr": "Wǒ méi chī.",
       "hl": "没"
      },
      {
       "t": "还没吃。",
       "tr": "Hái méi chī.",
       "hl": "还没"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "✗ 我没吃了。 ✓ {{我没吃。}} {{没}} and {{了}} don't go together."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of {{了}} as a tick ✓ on your to-do list: {{我买了}} = 'buy ✓'."
    },
    {
     "type": "rule",
     "name": "了 at the end: something changed",
     "color": "purple",
     "desc": "At the end of a sentence, {{了}} shows a new situation: 'now…'.",
     "examples": [
      {
       "t": "我饿了。",
       "tr": "Wǒ è le.",
       "hl": "了"
      },
      {
       "t": "下雨了！",
       "tr": "Xià yǔ le!",
       "hl": "了"
      },
      {
       "t": "我二十岁了。",
       "tr": "Wǒ èrshí suì le.",
       "hl": "了"
      },
      {
       "t": "他是老师了。",
       "tr": "Tā shì lǎoshī le.",
       "hl": "了"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Not every past sentence needs {{了}}. Descriptions and habits in the past don't take it: {{昨天很冷。}} (It was cold yesterday.) {{我以前是老师。}} (I used to be a teacher.)"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "电影",
       "tr": "diànyǐng",
       "mean": "film, movie",
       "root": "彡 hair"
      },
      {
       "t": "早饭",
       "tr": "zǎofàn",
       "mean": "breakfast",
       "root": "饣 food"
      },
      {
       "t": "午饭",
       "tr": "wǔfàn",
       "mean": "lunch",
       "root": "饣 food"
      },
      {
       "t": "晚饭",
       "tr": "wǎnfàn",
       "mean": "dinner",
       "root": "饣 food"
      },
      {
       "t": "下雨",
       "tr": "xià yǔ",
       "mean": "to rain",
       "root": "雨 rain"
      },
      {
       "t": "还没",
       "tr": "hái méi",
       "mean": "not yet"
      }
     ],
     "title": "Words for this lesson"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Mum",
       "t": "你吃早饭了吗？",
       "tr": "Nǐ chī zǎofàn le ma?",
       "mean": "Have you had breakfast?"
      },
      {
       "who": "Leo",
       "t": "吃了。我吃了两个包子。",
       "tr": "Chī le. Wǒ chī le liǎng gè bāozi.",
       "mean": "Yes. I had two steamed buns."
      },
      {
       "who": "Mum",
       "t": "你做作业了吗？",
       "tr": "Nǐ zuò zuòyè le ma?",
       "mean": "Have you done your homework?"
      },
      {
       "who": "Leo",
       "t": "还没做……",
       "tr": "Hái méi zuò…",
       "mean": "Not yet…"
      },
      {
       "who": "Mum",
       "t": "快做吧！八点了！",
       "tr": "Kuài zuò ba! Bā diǎn le!",
       "mean": "Do it quickly! It's eight o'clock already!"
      }
     ],
     "title": "Morning at home"
    },
    {
     "type": "practice",
     "text": "Read aloud. Then say three things you did today.",
     "lines": [
      "我吃了。",
      "我买了一本书。",
      "你吃饭了吗？",
      "还没吃。",
      "下雨了！",
      "我饿了。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you say 'I bought three books'?",
       "options": [
        "我买三了本书。",
        "我了买三本书。",
        "我买了三本书。",
        "我买三本书了了。"
       ],
       "answer": 2
      },
      {
       "q": "Which sentence is WRONG?",
       "options": [
        "我没吃。",
        "我吃了。",
        "我还没吃。",
        "我没吃了。"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What happened?",
       "say": "下雨了",
       "options": [
        "It's sunny.",
        "It stopped raining.",
        "It will rain.",
        "It started raining."
       ],
       "answer": 3
      },
      {
       "q": "Someone asks {{你吃饭了吗？}} You haven't eaten yet. You say…",
       "options": [
        "吃了没。",
        "没吃了。",
        "不吃了。",
        "还没吃。"
       ],
       "answer": 3
      },
      {
       "q": "{{我饿了}} means…",
       "options": [
        "I was hungry.",
        "I ate.",
        "I'm not hungry.",
        "I'm hungry (now)."
       ],
       "answer": 3
      },
      {
       "q": "Listen. What did the speaker do?",
       "say": "我看了一个电影",
       "options": [
        "ate breakfast",
        "watched a film",
        "bought a book",
        "drank coffee"
       ],
       "answer": 1
      },
      {
       "q": "Which sentence does NOT need 了?",
       "options": [
        "我吃___两个包子。",
        "下雨___！",
        "我买___三本书。",
        "昨天很冷___。"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-modals",
   "icon": "想",
   "title": "Want, Can, May: 想 要 会 能 可以",
   "subtitle": "Wishes, skills, abilities and permission",
   "minutes": 16,
   "goals": [
    "Say what you want with 想 and 要",
    "Say what you can do with 会 and 能",
    "Ask permission with 可以",
    "Choose the right negative"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These five little verbs go right before another verb, like 'want to', 'can' and 'may' in English. English has one 'can'; Chinese has three! Let's sort them out."
    },
    {
     "type": "table",
     "head": [
      "Word",
      "Pinyin",
      "Meaning",
      "Example",
      "Negative"
     ],
     "rows": [
      [
       "{{想}}",
       "xiǎng",
       "would like to, want to",
       "{{我想喝水。}}",
       "{{不想}}"
      ],
      [
       "{{要}}",
       "yào",
       "want to (firmly); will; need to",
       "{{我要去北京。}}",
       "{{不想}} / {{不用}}"
      ],
      [
       "{{会}}",
       "huì",
       "can (learned skill); will probably",
       "{{我会说中文。}}",
       "{{不会}}"
      ],
      [
       "{{能}}",
       "néng",
       "can (able, possible)",
       "{{你能来吗？}}",
       "{{不能}}"
      ],
      [
       "{{可以}}",
       "kěyǐ",
       "may, can (allowed)",
       "{{我可以坐这儿吗？}}",
       "{{不可以}}"
      ]
     ],
     "title": "The five helpers"
    },
    {
     "type": "rule",
     "name": "想: would like to",
     "color": "blue",
     "desc": "Soft and polite. It also means 'to miss' and 'to think'.",
     "examples": [
      {
       "t": "我想去中国。",
       "tr": "Wǒ xiǎng qù Zhōngguó.",
       "hl": "想"
      },
      {
       "t": "你想吃什么？",
       "tr": "Nǐ xiǎng chī shénme?",
       "hl": "想"
      },
      {
       "t": "我想你。",
       "tr": "Wǒ xiǎng nǐ.",
       "hl": "想"
      }
     ]
    },
    {
     "type": "rule",
     "name": "要: want / going to / need to",
     "color": "orange",
     "desc": "Stronger than {{想}}. With a noun it means 'I'll have…'.",
     "examples": [
      {
       "t": "我要一杯咖啡。",
       "tr": "Wǒ yào yì bēi kāfēi.",
       "hl": "要"
      },
      {
       "t": "明天我要考试。",
       "tr": "Míngtiān wǒ yào kǎoshì.",
       "hl": "要"
      },
      {
       "t": "你要多喝水。",
       "tr": "Nǐ yào duō hē shuǐ.",
       "hl": "要"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "{{不要}} doesn't mean 'don't want'. It means **Don't!** {{不要说话！}} = Don't talk! For 'don't want to' say {{不想}}; for 'no need' say {{不用}}."
    },
    {
     "type": "sentence",
     "t": "你会说中文吗？",
     "tr": "Nǐ huì shuō Zhōngwén ma?",
     "mean": "Can you speak Chinese?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "会",
       "mean": "can (know how to)"
      },
      {
       "t": "说",
       "mean": "speak"
      },
      {
       "t": "中文",
       "mean": "Chinese"
      },
      {
       "t": "吗",
       "mean": "(question)"
      }
     ],
     "note": "Perfect reply for now: 会一点儿 (Huì yìdiǎnr, a little)."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "我会游泳。",
       "label": "会: a skill you learned",
       "desc": "I can swim (I know how)."
      },
      {
       "t": "我今天能游泳。",
       "label": "能: able / possible now",
       "desc": "I can swim today (I'm well, the pool is open)."
      },
      {
       "t": "这儿可以游泳。",
       "label": "可以: allowed",
       "desc": "You may swim here (it's permitted)."
      }
     ],
     "title": "会, 能 or 可以?"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "你会开车吗？",
       "tr": "Nǐ huì kāichē ma?",
       "mean": "Can you drive?",
       "hl": "会"
      },
      {
       "t": "明天会下雨。",
       "tr": "Míngtiān huì xià yǔ.",
       "mean": "It will probably rain tomorrow.",
       "hl": "会"
      },
      {
       "t": "你能帮我吗？",
       "tr": "Nǐ néng bāng wǒ ma?",
       "mean": "Can you help me?",
       "hl": "能"
      },
      {
       "t": "我感冒了，不能去。",
       "tr": "Wǒ gǎnmào le, bù néng qù.",
       "mean": "I've got a cold, so I can't go.",
       "hl": "不能"
      },
      {
       "t": "我可以进来吗？",
       "tr": "Wǒ kěyǐ jìnlái ma?",
       "mean": "May I come in?",
       "hl": "可以"
      },
      {
       "t": "这儿不可以抽烟。",
       "tr": "Zhèr bù kěyǐ chōuyān.",
       "mean": "Smoking is not allowed here.",
       "hl": "不可以"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{会}}: you went to class and learned it. {{能}}: your body or the situation lets you. {{可以}}: someone says it's OK."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "To answer, just use the helper word: {{你会游泳吗？}} → {{会。}} / {{不会。}}"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Coach",
       "t": "你会游泳吗？",
       "tr": "Nǐ huì yóuyǒng ma?",
       "mean": "Can you swim?"
      },
      {
       "who": "Yan",
       "t": "会，可是今天不能游。",
       "tr": "Huì, kěshì jīntiān bù néng yóu.",
       "mean": "Yes, but I can't swim today."
      },
      {
       "who": "Coach",
       "t": "为什么？",
       "tr": "Wèishénme?",
       "mean": "Why?"
      },
      {
       "who": "Yan",
       "t": "我感冒了。我可以明天来吗？",
       "tr": "Wǒ gǎnmào le. Wǒ kěyǐ míngtiān lái ma?",
       "mean": "I've got a cold. Can I come tomorrow?"
      },
      {
       "who": "Coach",
       "t": "可以。你要多喝水，多休息！",
       "tr": "Kěyǐ. Nǐ yào duō hē shuǐ, duō xiūxi!",
       "mean": "Sure. You need to drink lots of water and rest!"
      }
     ],
     "title": "At the swimming pool"
    },
    {
     "type": "practice",
     "text": "Say what you want, can and may do.",
     "lines": [
      "我想去中国。",
      "我要一杯茶。",
      "我会说一点儿中文。",
      "你能帮我吗？",
      "我可以坐这儿吗？"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "'I can speak Chinese' (I learned it):",
       "options": [
        "我可以说中文。",
        "我要说中文。",
        "我会说中文。",
        "我说会中文。"
       ],
       "answer": 2
      },
      {
       "q": "'May I come in?'",
       "options": [
        "我想进来吗？",
        "我可以进来吗？",
        "我进来可以吗了？",
        "我会进来吗？"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "不要说话",
       "options": [
        "Don't talk!",
        "Can't talk now.",
        "I don't want to talk.",
        "No need to talk."
       ],
       "answer": 0
      },
      {
       "q": "'I don't want to go' is…",
       "options": [
        "我不要去。",
        "我没想去。",
        "我不会去。",
        "我不想去。"
       ],
       "answer": 3,
       "explain": "不要去 sounds like 'Don't go!'"
      },
      {
       "q": "Listen. What is the speaker asking?",
       "say": "你能帮我吗",
       "options": [
        "Can I help you?",
        "Do you want help?",
        "Do you know him?",
        "Can you help me?"
       ],
       "answer": 3
      },
      {
       "q": "Which helper means 'allowed'?",
       "options": [
        "要",
        "会",
        "可以",
        "想"
       ],
       "answer": 2
      },
      {
       "q": "{{我想你}} means…",
       "options": [
        "I think so.",
        "I want you to go.",
        "I miss you.",
        "I know you."
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-bi",
   "icon": "比",
   "title": "Comparisons with 比",
   "subtitle": "Taller, cheaper, colder… and the same",
   "minutes": 13,
   "goals": [
    "Compare with A 比 B + adjective",
    "Say how much more",
    "Say 'not as … as' with 没有",
    "Say 'the same' with 一样"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Comparing things in Chinese uses one magic word: {{比}} (bǐ, compared with). No '-er' endings, no 'more'. Just A 比 B + adjective."
    },
    {
     "type": "rule",
     "name": "A 比 B + adjective",
     "color": "blue",
     "desc": "Read it as 'A, compared with B, is …'.",
     "examples": [
      {
       "t": "我比我哥哥高。",
       "tr": "Wǒ bǐ wǒ gēge gāo.",
       "hl": "比"
      },
      {
       "t": "今天比昨天冷。",
       "tr": "Jīntiān bǐ zuótiān lěng.",
       "hl": "比"
      },
      {
       "t": "茶比咖啡便宜。",
       "tr": "Chá bǐ kāfēi piányi.",
       "hl": "比"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "冬天，北京比上海冷。",
     "tr": "Dōngtiān, Běijīng bǐ Shànghǎi lěng.",
     "mean": "In winter, Beijing is colder than Shanghai.",
     "words": [
      {
       "t": "冬天",
       "mean": "winter"
      },
      {
       "t": "北京",
       "mean": "Beijing"
      },
      {
       "t": "比",
       "mean": "compared with"
      },
      {
       "t": "上海",
       "mean": "Shanghai"
      },
      {
       "t": "冷",
       "mean": "cold"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "No {{很}} in a {{比}} sentence! ✗ 我比他很高。 ✓ {{我比他高。}}"
    },
    {
     "type": "rule",
     "name": "How much more?",
     "color": "green",
     "desc": "Add the amount AFTER the adjective: {{一点儿}} (a bit), {{得多}} or {{多了}} (much).",
     "examples": [
      {
       "t": "我比他高一点儿。",
       "tr": "Wǒ bǐ tā gāo yìdiǎnr.",
       "hl": "一点儿"
      },
      {
       "t": "这个比那个贵得多。",
       "tr": "Zhège bǐ nàge guì de duō.",
       "hl": "得多"
      },
      {
       "t": "地铁比公交车快多了。",
       "tr": "Dìtiě bǐ gōngjiāochē kuài duō le.",
       "hl": "多了"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "To say 'even more', put {{更}} (gèng) or {{还}} (hái) before the adjective: {{她比我更忙。}} (She's even busier than me.)"
    },
    {
     "type": "rule",
     "name": "A 没有 B + adjective",
     "color": "red",
     "desc": "'A is not as … as B'.",
     "examples": [
      {
       "t": "我没有他高。",
       "tr": "Wǒ méiyǒu tā gāo.",
       "hl": "没有"
      },
      {
       "t": "今天没有昨天热。",
       "tr": "Jīntiān méiyǒu zuótiān rè.",
       "hl": "没有"
      }
     ]
    },
    {
     "type": "rule",
     "name": "A 跟 B 一样 (+ adjective)",
     "color": "purple",
     "desc": "'A is the same (as B)'.",
     "examples": [
      {
       "t": "我跟你一样大。",
       "tr": "Wǒ gēn nǐ yíyàng dà.",
       "hl": "一样"
      },
      {
       "t": "这两个一样。",
       "tr": "Zhè liǎng gè yíyàng.",
       "hl": "一样"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{比}} looks like two people standing side by side, being compared. Who's taller?"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "快",
       "tr": "kuài",
       "mean": "fast",
       "root": "忄 heart"
      },
      {
       "t": "慢",
       "tr": "màn",
       "mean": "slow",
       "root": "忄 heart"
      },
      {
       "t": "长",
       "tr": "cháng",
       "mean": "long"
      },
      {
       "t": "短",
       "tr": "duǎn",
       "mean": "short (length)",
       "root": "矢 arrow"
      },
      {
       "t": "矮",
       "tr": "ǎi",
       "mean": "short (height)",
       "root": "矢 arrow"
      },
      {
       "t": "新",
       "tr": "xīn",
       "mean": "new",
       "root": "斤 axe"
      },
      {
       "t": "旧",
       "tr": "jiù",
       "mean": "old (things)",
       "root": "日 sun"
      },
      {
       "t": "一样",
       "tr": "yíyàng",
       "mean": "the same"
      }
     ],
     "title": "Adjectives for comparing"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Shopper",
       "t": "这件多少钱？",
       "tr": "Zhè jiàn duōshao qián?",
       "mean": "How much is this one?"
      },
      {
       "who": "Seller",
       "t": "两百块。",
       "tr": "Liǎng bǎi kuài.",
       "mean": "Two hundred kuai."
      },
      {
       "who": "Shopper",
       "t": "那件呢？",
       "tr": "Nà jiàn ne?",
       "mean": "And that one?"
      },
      {
       "who": "Seller",
       "t": "那件比这件便宜，一百五。",
       "tr": "Nà jiàn bǐ zhè jiàn piányi, yìbǎi wǔ.",
       "mean": "That one is cheaper: a hundred and fifty."
      },
      {
       "who": "Shopper",
       "t": "可是这件比那件漂亮多了。",
       "tr": "Kěshì zhè jiàn bǐ nà jiàn piàoliang duō le.",
       "mean": "But this one is much prettier than that one."
      },
      {
       "who": "Seller",
       "t": "对！一分钱一分货。",
       "tr": "Duì! Yì fēn qián yì fēn huò.",
       "mean": "Right! You get what you pay for."
      }
     ],
     "title": "Clothes shopping"
    },
    {
     "type": "practice",
     "text": "Compare yourself with someone in your family.",
     "lines": [
      "我比我妹妹高。",
      "我没有我爸爸高。",
      "我跟我哥哥一样大。",
      "今天比昨天热。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "'I am taller than him':",
       "options": [
        "我高比他。",
        "我比他高。",
        "我比他很高。",
        "他比我高。"
       ],
       "answer": 1
      },
      {
       "q": "Which sentence is WRONG?",
       "options": [
        "今天没有昨天冷。",
        "今天比昨天很冷。",
        "今天比昨天冷一点儿。",
        "今天比昨天冷。"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "我没有他高",
       "options": [
        "I'm not as tall as him.",
        "We're the same height.",
        "He's not tall.",
        "I'm taller than him."
       ],
       "answer": 0
      },
      {
       "q": "{{我跟你一样大}} means…",
       "options": [
        "We're both tall.",
        "I'm older than you.",
        "You're bigger than me.",
        "We're the same age."
       ],
       "answer": 3
      },
      {
       "q": "'The subway is much faster than the bus':",
       "options": [
        "地铁比公交车快多了。",
        "公交车比地铁快多了。",
        "地铁比公交车多快了。",
        "地铁多了比公交车快。"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which is cheaper?",
       "say": "茶比咖啡便宜",
       "options": [
        "the same",
        "neither",
        "tea",
        "coffee"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-time-words",
   "icon": "时",
   "title": "Where Do Time Words Go?",
   "subtitle": "When comes early in a Chinese sentence",
   "minutes": 12,
   "goals": [
    "Put time words before the verb",
    "Order time, place and action",
    "Go from big to small in time phrases",
    "Put 'how long' after the verb"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In English, we often put the time at the end: 'I'm going to Beijing **tomorrow**.' Chinese puts it early, before the verb: 'I **tomorrow** go to Beijing.'"
    },
    {
     "type": "rule",
     "name": "Subject + time + place + verb",
     "color": "blue",
     "desc": "Time comes first, then place, then the action.",
     "examples": [
      {
       "t": "我明天去北京。",
       "tr": "Wǒ míngtiān qù Běijīng.",
       "hl": "明天"
      },
      {
       "t": "我每天早上七点起床。",
       "tr": "Wǒ měitiān zǎoshang qī diǎn qǐchuáng.",
       "hl": "每天早上七点"
      },
      {
       "t": "他下午在图书馆看书。",
       "tr": "Tā xiàwǔ zài túshūguǎn kàn shū.",
       "hl": "下午"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Or time at the very front",
     "color": "green",
     "desc": "You can also start the sentence with the time. Both are correct.",
     "examples": [
      {
       "t": "明天我去北京。",
       "tr": "Míngtiān wǒ qù Běijīng.",
       "hl": "明天"
      },
      {
       "t": "周末我们去公园。",
       "tr": "Zhōumò wǒmen qù gōngyuán.",
       "hl": "周末"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "✗ 我去北京明天。 Time never goes at the end like in English."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "**When → Where → What.** First set the time, then the place, then the action, like setting a scene in a film."
    },
    {
     "type": "sentence",
     "t": "我晚上八点在家吃饭。",
     "tr": "Wǒ wǎnshang bā diǎn zài jiā chī fàn.",
     "mean": "I have dinner at home at 8 p.m.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "晚上",
       "mean": "evening"
      },
      {
       "t": "八点",
       "mean": "eight o'clock"
      },
      {
       "t": "在",
       "mean": "at"
      },
      {
       "t": "家",
       "mean": "home"
      },
      {
       "t": "吃饭",
       "mean": "eat (a meal)"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Big to small",
     "color": "purple",
     "desc": "Time phrases start with the biggest unit, like dates do.",
     "examples": [
      {
       "t": "明天上午十点",
       "tr": "míngtiān shàngwǔ shí diǎn"
      },
      {
       "t": "下个星期五晚上",
       "tr": "xià gè xīngqīwǔ wǎnshang"
      },
      {
       "t": "二〇二五年八月",
       "tr": "èr líng èr wǔ nián bāyuè"
      }
     ]
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "每天",
       "tr": "měitiān",
       "mean": "every day"
      },
      {
       "t": "以前",
       "tr": "yǐqián",
       "mean": "before, in the past"
      },
      {
       "t": "以后",
       "tr": "yǐhòu",
       "mean": "after, later, in future"
      },
      {
       "t": "去年",
       "tr": "qùnián",
       "mean": "last year"
      },
      {
       "t": "明年",
       "tr": "míngnián",
       "mean": "next year",
       "root": "日 sun"
      },
      {
       "t": "上个星期",
       "tr": "shàng gè xīngqī",
       "mean": "last week"
      },
      {
       "t": "下个月",
       "tr": "xià gè yuè",
       "mean": "next month"
      },
      {
       "t": "刚才",
       "tr": "gāngcái",
       "mean": "just now",
       "root": "刂 knife"
      },
      {
       "t": "起床",
       "tr": "qǐchuáng",
       "mean": "to get up",
       "root": "广 shelter"
      },
      {
       "t": "图书馆",
       "tr": "túshūguǎn",
       "mean": "library"
      }
     ],
     "title": "Time words"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "**How long** you do something is different: it goes AFTER the verb. {{我学了两年中文。}} (I studied Chinese for two years.) {{我每天学习一个小时。}} (I study for an hour every day.)"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "我去年去了中国。",
       "tr": "Wǒ qùnián qù le Zhōngguó.",
       "mean": "I went to China last year.",
       "hl": "去年"
      },
      {
       "t": "你明天几点来？",
       "tr": "Nǐ míngtiān jǐ diǎn lái?",
       "mean": "What time are you coming tomorrow?",
       "hl": "明天几点"
      },
      {
       "t": "我们下个月在上海见。",
       "tr": "Wǒmen xià gè yuè zài Shànghǎi jiàn.",
       "mean": "We'll meet in Shanghai next month.",
       "hl": "下个月"
      }
     ]
    },
    {
     "type": "practice",
     "text": "Describe your day in order: when → where → what.",
     "lines": [
      "我每天七点起床。",
      "我八点在学校学习。",
      "我中午在饭馆吃饭。",
      "我晚上在家看书。"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "'I'm going to Beijing tomorrow':",
       "options": [
        "去北京我明天。",
        "我去明天北京。",
        "我去北京明天。",
        "我明天去北京。"
       ],
       "answer": 3
      },
      {
       "q": "Put it in order: 'I eat at home at 7 p.m.'",
       "options": [
        "我吃饭在家晚上七点。",
        "我晚上七点在家吃饭。",
        "晚上七点吃饭我在家。",
        "我在家吃饭晚上七点。"
       ],
       "answer": 1
      },
      {
       "q": "Listen. When is the speaker going?",
       "say": "我下个月去上海",
       "options": [
        "next week",
        "tomorrow",
        "last month",
        "next month"
       ],
       "answer": 3
      },
      {
       "q": "Which time phrase is in the right order?",
       "options": [
        "明天上午十点",
        "十点明天上午",
        "上午明天十点",
        "十点上午明天"
       ],
       "answer": 0
      },
      {
       "q": "'I studied Chinese for two years': where does 'two years' go?",
       "options": [
        "After the verb",
        "Before the subject",
        "At the very start",
        "Before the verb"
       ],
       "answer": 0
      },
      {
       "q": "{{刚才}} means…",
       "options": [
        "last year",
        "every day",
        "just now",
        "later on"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u4-guo",
   "icon": "过",
   "title": "过: Have You Ever…?",
   "subtitle": "Talking about experiences",
   "minutes": 12,
   "goals": [
    "Say what you have done before with 过",
    "Ask 'Have you ever…?'",
    "Make negatives with 没…过",
    "Tell 了 and 过 apart"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Have you ever eaten Peking duck? Been to Shanghai? To talk about experiences, put {{过}} (guo) right after the verb."
    },
    {
     "type": "rule",
     "name": "Verb + 过 = have done (before)",
     "color": "green",
     "desc": "{{过}} says you have had this experience at least once.",
     "examples": [
      {
       "t": "我去过中国。",
       "tr": "Wǒ qù guo Zhōngguó.",
       "hl": "过"
      },
      {
       "t": "我吃过北京烤鸭。",
       "tr": "Wǒ chī guo Běijīng kǎoyā.",
       "hl": "过"
      },
      {
       "t": "他看过这个电影。",
       "tr": "Tā kàn guo zhège diànyǐng.",
       "hl": "过"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你去过上海吗？",
     "tr": "Nǐ qù guo Shànghǎi ma?",
     "mean": "Have you ever been to Shanghai?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "去",
       "mean": "go"
      },
      {
       "t": "过",
       "mean": "(have ever)"
      },
      {
       "t": "上海",
       "mean": "Shanghai"
      },
      {
       "t": "吗",
       "mean": "(question)"
      }
     ]
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "吃过。",
       "tr": "Chī guo.",
       "mean": "Yes, I have (eaten it).",
       "hl": "过"
      },
      {
       "t": "没吃过。",
       "tr": "Méi chī guo.",
       "mean": "No, I've never eaten it.",
       "hl": "没"
      }
     ],
     "title": "Answering 你吃过饺子吗？"
    },
    {
     "type": "rule",
     "name": "没 + verb + 过",
     "color": "red",
     "desc": "For 'have never', use {{没}} and KEEP {{过}}. Add {{从来}} (cónglái) for 'never ever'.",
     "examples": [
      {
       "t": "我没去过日本。",
       "tr": "Wǒ méi qù guo Rìběn.",
       "hl": "没"
      },
      {
       "t": "我从来没吃过榴莲。",
       "tr": "Wǒ cónglái méi chī guo liúlián.",
       "hl": "从来没"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "The negative of {{了}} drops {{了}} ({{我没吃}}), but the negative of {{过}} keeps {{过}} ({{我没吃过}})."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "我去了北京。",
       "label": "了: it happened",
       "desc": "I went to Beijing (maybe I'm still there)."
      },
      {
       "t": "我去过北京。",
       "label": "过: an experience",
       "desc": "I've been to Beijing before (and came back)."
      }
     ],
     "title": "了 or 过?"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{过}} also means 'to pass, to cross'. An experience is something you have 'passed through'."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "北京烤鸭",
       "tr": "Běijīng kǎoyā",
       "mean": "Peking duck",
       "root": "火 fire"
      },
      {
       "t": "榴莲",
       "tr": "liúlián",
       "mean": "durian (a very smelly fruit)",
       "root": "木 tree"
      },
      {
       "t": "从来",
       "tr": "cónglái",
       "mean": "ever, always (从来没 = never)"
      },
      {
       "t": "次",
       "tr": "cì",
       "mean": "time(s), occasion",
       "example": {
        "t": "我去过两次。",
        "tr": "Wǒ qù guo liǎng cì.",
        "mean": "I've been twice."
       }
      },
      {
       "t": "爬",
       "tr": "pá",
       "mean": "to climb",
       "root": "爪 claw"
      },
      {
       "t": "长城",
       "tr": "Chángchéng",
       "mean": "the Great Wall",
       "root": "土 earth"
      }
     ],
     "title": "Words for this lesson"
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Hong",
       "t": "你来过中国吗？",
       "tr": "Nǐ lái guo Zhōngguó ma?",
       "mean": "Have you been to China?"
      },
      {
       "who": "Eva",
       "t": "来过一次。我去过北京。",
       "tr": "Lái guo yí cì. Wǒ qù guo Běijīng.",
       "mean": "Once. I've been to Beijing."
      },
      {
       "who": "Hong",
       "t": "你爬过长城吗？",
       "tr": "Nǐ pá guo Chángchéng ma?",
       "mean": "Have you climbed the Great Wall?"
      },
      {
       "who": "Eva",
       "t": "爬过！也吃过北京烤鸭。",
       "tr": "Pá guo! Yě chī guo Běijīng kǎoyā.",
       "mean": "Yes! And I've eaten Peking duck too."
      },
      {
       "who": "Hong",
       "t": "你吃过榴莲吗？",
       "tr": "Nǐ chī guo liúlián ma?",
       "mean": "Have you ever eaten durian?"
      },
      {
       "who": "Eva",
       "t": "没吃过，我不敢！",
       "tr": "Méi chī guo, wǒ bù gǎn!",
       "mean": "Never. I don't dare!"
      }
     ],
     "title": "Travel stories"
    },
    {
     "type": "practice",
     "text": "Say three things you have done and one you have never done.",
     "lines": [
      "我去过……",
      "我吃过饺子。",
      "我看过中国电影。",
      "我没去过中国。",
      "我从来没吃过榴莲。"
     ]
    },
    {
     "type": "selfcheck",
     "items": [
      "I can build subject–verb–object sentences.",
      "I use 很 (not 是) with adjectives.",
      "I can ask questions with 吗 and question words.",
      "I know when to use 不 and when to use 没.",
      "I can use measure words, 的 and 在.",
      "I can talk about the past with 了 and 过.",
      "I can compare with 比 and put time words in the right place."
     ],
     "title": "Unit check"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "'I have been to China':",
       "options": [
        "我去中国过。",
        "我过去中国。",
        "我去过中国。",
        "过我去中国。"
       ],
       "answer": 2
      },
      {
       "q": "'I have never eaten durian':",
       "options": [
        "我没吃榴莲了。",
        "我不吃过榴莲。",
        "我没吃过榴莲。",
        "我吃没过榴莲。"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is the question?",
       "say": "你去过上海吗",
       "options": [
        "Do you live in Shanghai?",
        "Where is Shanghai?",
        "Are you going to Shanghai?",
        "Have you been to Shanghai?"
       ],
       "answer": 3
      },
      {
       "q": "Which sentence talks about an EXPERIENCE?",
       "options": [
        "我要看电影。",
        "我在看电影。",
        "我看过这个电影。",
        "我想看电影。"
       ],
       "answer": 2
      },
      {
       "q": "Listen. How many times?",
       "say": "我去过两次",
       "options": [
        "three times",
        "once",
        "twice",
        "never"
       ],
       "answer": 2
      },
      {
       "q": "{{从来没}} means…",
       "options": [
        "already",
        "never ever",
        "sometimes",
        "always"
       ],
       "answer": 1
      }
     ],
     "title": "Quick quiz"
    }
   ]
  }
 ]
});
