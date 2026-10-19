/* Unit 6: Reading & Culture. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "read",
 "order": 6,
 "icon": "读",
 "color": "violet",
 "title": "Reading & Culture",
 "subtitle": "Graded stories, a Tang poem, chengyu, festivals and customs.",
 "lessons": [
  {
   "id": "u6-story-sunday",
   "icon": "日",
   "title": "Story 1: Xiao Ming's Sunday",
   "subtitle": "A first graded story (HSK 1): one boy, one relaxing day.",
   "minutes": 15,
   "goals": [
    "Read a short story in characters",
    "Understand time words: morning, afternoon, evening",
    "Answer questions about the story"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Time for your first story! It uses only beginner (HSK 1) words. Read one sentence at a time, tap words you don't know, then read the whole story aloud."
    },
    {
     "type": "vocab",
     "title": "Words in this story",
     "items": [
      {
       "t": "星期天",
       "tr": "xīngqītiān",
       "mean": "Sunday"
      },
      {
       "t": "起床",
       "tr": "qǐchuáng",
       "mean": "to get up"
      },
      {
       "t": "早饭",
       "tr": "zǎofàn",
       "mean": "breakfast"
      },
      {
       "t": "包子",
       "tr": "bāozi",
       "mean": "steamed bun (with filling)"
      },
      {
       "t": "商店",
       "tr": "shāngdiàn",
       "mean": "shop"
      },
      {
       "t": "东西",
       "tr": "dōngxi",
       "mean": "thing(s), stuff"
      },
      {
       "t": "电视",
       "tr": "diànshì",
       "mean": "TV"
      },
      {
       "t": "累",
       "tr": "lèi",
       "mean": "tired"
      },
      {
       "t": "睡觉",
       "tr": "shuìjiào",
       "mean": "to sleep, go to bed"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Time words like {{早上}}, {{下午}} and {{晚上}} come at the start of the sentence or right after the subject, never at the end as in English."
    },
    {
     "type": "text",
     "text": "**小明的星期天** (Xiǎo Míng de Xīngqītiān): Xiao Ming's Sunday",
     "title": "The story"
    },
    {
     "type": "sentence",
     "t": "今天是星期天。",
     "tr": "Jīntiān shì xīngqītiān.",
     "mean": "Today is Sunday.",
     "words": [
      {
       "t": "今天",
       "mean": "today"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "星期天",
       "mean": "Sunday"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "小明早上八点起床。",
     "tr": "Xiǎo Míng zǎoshang bā diǎn qǐchuáng.",
     "mean": "Xiao Ming gets up at eight in the morning.",
     "words": [
      {
       "t": "小明",
       "mean": "Xiao Ming"
      },
      {
       "t": "早上",
       "mean": "in the morning"
      },
      {
       "t": "八点",
       "mean": "eight o'clock"
      },
      {
       "t": "起床",
       "mean": "gets up"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他和妈妈一起吃早饭。",
     "tr": "Tā hé māma yìqǐ chī zǎofàn.",
     "mean": "He has breakfast with his mum.",
     "words": [
      {
       "t": "他",
       "mean": "he"
      },
      {
       "t": "和",
       "mean": "with"
      },
      {
       "t": "妈妈",
       "mean": "mum"
      },
      {
       "t": "一起",
       "mean": "together"
      },
      {
       "t": "吃",
       "mean": "eat"
      },
      {
       "t": "早饭",
       "mean": "breakfast"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他们吃包子，喝牛奶。",
     "tr": "Tāmen chī bāozi, hē niúnǎi.",
     "mean": "They eat steamed buns and drink milk.",
     "words": [
      {
       "t": "他们",
       "mean": "they"
      },
      {
       "t": "吃",
       "mean": "eat"
      },
      {
       "t": "包子",
       "mean": "steamed buns"
      },
      {
       "t": "喝",
       "mean": "drink"
      },
      {
       "t": "牛奶",
       "mean": "milk"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "上午，小明去商店买东西。",
     "tr": "Shàngwǔ, Xiǎo Míng qù shāngdiàn mǎi dōngxi.",
     "mean": "In the morning, Xiao Ming goes to the shop to buy things.",
     "words": [
      {
       "t": "上午",
       "mean": "in the morning"
      },
      {
       "t": "小明",
       "mean": "Xiao Ming"
      },
      {
       "t": "去",
       "mean": "goes to"
      },
      {
       "t": "商店",
       "mean": "shop"
      },
      {
       "t": "买",
       "mean": "buy"
      },
      {
       "t": "东西",
       "mean": "things"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他买了一个苹果和三本书。",
     "tr": "Tā mǎi le yí ge píngguǒ hé sān běn shū.",
     "mean": "He buys an apple and three books.",
     "words": [
      {
       "t": "他",
       "mean": "he"
      },
      {
       "t": "买了",
       "mean": "bought"
      },
      {
       "t": "一个",
       "mean": "one"
      },
      {
       "t": "苹果",
       "mean": "apple"
      },
      {
       "t": "和",
       "mean": "and"
      },
      {
       "t": "三",
       "mean": "three"
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
     "t": "下午，他的朋友来他家。",
     "tr": "Xiàwǔ, tā de péngyou lái tā jiā.",
     "mean": "In the afternoon, his friend comes to his home.",
     "words": [
      {
       "t": "下午",
       "mean": "in the afternoon"
      },
      {
       "t": "他的",
       "mean": "his"
      },
      {
       "t": "朋友",
       "mean": "friend"
      },
      {
       "t": "来",
       "mean": "comes to"
      },
      {
       "t": "他",
       "mean": "his"
      },
      {
       "t": "家",
       "mean": "home"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他们一起看电视，很高兴。",
     "tr": "Tāmen yìqǐ kàn diànshì, hěn gāoxìng.",
     "mean": "They watch TV together and are very happy.",
     "words": [
      {
       "t": "他们",
       "mean": "they"
      },
      {
       "t": "一起",
       "mean": "together"
      },
      {
       "t": "看",
       "mean": "watch"
      },
      {
       "t": "电视",
       "mean": "TV"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "高兴",
       "mean": "happy"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "晚上，小明很累，九点就睡觉了。",
     "tr": "Wǎnshang, Xiǎo Míng hěn lèi, jiǔ diǎn jiù shuìjiào le.",
     "mean": "In the evening Xiao Ming is tired, and he's asleep by nine.",
     "words": [
      {
       "t": "晚上",
       "mean": "in the evening"
      },
      {
       "t": "小明",
       "mean": "Xiao Ming"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "累",
       "mean": "tired"
      },
      {
       "t": "九点",
       "mean": "nine o'clock"
      },
      {
       "t": "就",
       "mean": "already"
      },
      {
       "t": "睡觉",
       "mean": "sleep"
      },
      {
       "t": "了",
       "mean": "(done)"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Read the whole story",
     "text": "Now read the whole story aloud without looking at the English.",
     "lines": [
      "今天是星期天。",
      "小明早上八点起床。",
      "他和妈妈一起吃早饭。",
      "他们吃包子，喝牛奶。",
      "上午，小明去商店买东西。",
      "他买了一个苹果和三本书。",
      "下午，他的朋友来他家。",
      "他们一起看电视，很高兴。",
      "晚上，小明很累，九点就睡觉了。"
     ]
    },
    {
     "type": "quiz",
     "title": "Did you understand?",
     "items": [
      {
       "q": "What day is it in the story?",
       "options": [
        "Saturday",
        "Monday",
        "Sunday",
        "Friday"
       ],
       "answer": 2
      },
      {
       "q": "What time does Xiao Ming get up?",
       "options": [
        "9:00",
        "7:00",
        "10:00",
        "8:00"
       ],
       "answer": 3
      },
      {
       "q": "What do they have for breakfast?",
       "options": [
        "Steamed buns and milk",
        "Fried rice and green tea",
        "Noodles and juice",
        "Dumplings and coffee"
       ],
       "answer": 0
      },
      {
       "q": "What does he buy at the shop?",
       "options": [
        "Three apples and a book",
        "An apple and three books",
        "Some bread and two pens for school",
        "A TV"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What are they doing?",
       "say": "他们一起看电视。",
       "options": [
        "Reading books",
        "Eating breakfast",
        "Going to the shop",
        "Watching TV"
       ],
       "answer": 3
      },
      {
       "q": "Why does he go to bed at nine?",
       "options": [
        "He is ill",
        "He is sad",
        "He is tired",
        "He has school"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u6-story-umbrella",
   "icon": "伞",
   "title": "Story 2: The Umbrella",
   "subtitle": "A graded story (HSK 1–2) about a rainy day and a new friend.",
   "minutes": 15,
   "goals": [
    "Read a longer story with past events",
    "Learn the pattern 一边…一边… (while…)",
    "Answer comprehension questions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "This story is a little longer and uses some HSK 2 words. Many Chinese names have a meaning: the girl's name, 小雨 (Xiǎoyǔ), means ‘light rain’."
    },
    {
     "type": "vocab",
     "title": "Words in this story",
     "items": [
      {
       "t": "大学生",
       "tr": "dàxuéshēng",
       "mean": "university student"
      },
      {
       "t": "名字",
       "tr": "míngzi",
       "mean": "name"
      },
      {
       "t": "可是",
       "tr": "kěshì",
       "mean": "but"
      },
      {
       "t": "带",
       "tr": "dài",
       "mean": "to take, bring along"
      },
      {
       "t": "伞",
       "tr": "sǎn",
       "mean": "umbrella"
      },
      {
       "t": "下课",
       "tr": "xiàkè",
       "mean": "class is over"
      },
      {
       "t": "外边",
       "tr": "wàibian",
       "mean": "outside"
      },
      {
       "t": "怎么办",
       "tr": "zěnme bàn",
       "mean": "what to do?"
      },
      {
       "t": "聊天",
       "tr": "liáotiān",
       "mean": "to chat"
      },
      {
       "t": "开始",
       "tr": "kāishǐ",
       "mean": "to begin, start"
      }
     ]
    },
    {
     "type": "rule",
     "name": "一边…一边… (while…)",
     "color": "purple",
     "desc": "Two actions happening at the same time: Subject + {{一边}} + action 1 + {{一边}} + action 2.",
     "examples": [
      {
       "t": "他们一边走一边聊天。",
       "tr": "Tāmen yìbiān zǒu yìbiān liáotiān.",
       "hl": "一边"
      },
      {
       "t": "我一边吃饭一边看电视。",
       "tr": "Wǒ yìbiān chī fàn yìbiān kàn diànshì.",
       "hl": "一边"
      }
     ]
    },
    {
     "type": "text",
     "text": "**一把雨伞** (Yì bǎ yǔsǎn): The Umbrella",
     "title": "The story"
    },
    {
     "type": "sentence",
     "t": "王小雨是大学生。",
     "tr": "Wáng Xiǎoyǔ shì dàxuéshēng.",
     "mean": "Wang Xiaoyu is a university student.",
     "words": [
      {
       "t": "王小雨",
       "mean": "Wang Xiaoyu (a name)"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "大学生",
       "mean": "university student"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "她的名字里有“雨”，可是她不喜欢下雨。",
     "tr": "Tā de míngzi li yǒu “yǔ”, kěshì tā bù xǐhuan xià yǔ.",
     "mean": "Her name has “rain” in it, but she doesn't like rain.",
     "words": [
      {
       "t": "她的",
       "mean": "her"
      },
      {
       "t": "名字",
       "mean": "name"
      },
      {
       "t": "里",
       "mean": "in"
      },
      {
       "t": "有",
       "mean": "has"
      },
      {
       "t": "雨",
       "mean": "rain"
      },
      {
       "t": "可是",
       "mean": "but"
      },
      {
       "t": "她",
       "mean": "she"
      },
      {
       "t": "不",
       "mean": "doesn't"
      },
      {
       "t": "喜欢",
       "mean": "like"
      },
      {
       "t": "下雨",
       "mean": "raining"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "星期一早上天气很好，她没带伞就去上课了。",
     "tr": "Xīngqīyī zǎoshang tiānqì hěn hǎo, tā méi dài sǎn jiù qù shàngkè le.",
     "mean": "On Monday morning the weather was lovely, so she went to class without an umbrella.",
     "words": [
      {
       "t": "星期一",
       "mean": "Monday"
      },
      {
       "t": "早上",
       "mean": "morning"
      },
      {
       "t": "天气",
       "mean": "weather"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "好",
       "mean": "good"
      },
      {
       "t": "她",
       "mean": "she"
      },
      {
       "t": "没",
       "mean": "didn't"
      },
      {
       "t": "带",
       "mean": "take"
      },
      {
       "t": "伞",
       "mean": "umbrella"
      },
      {
       "t": "就",
       "mean": "then"
      },
      {
       "t": "去",
       "mean": "go"
      },
      {
       "t": "上课",
       "mean": "to class"
      },
      {
       "t": "了",
       "mean": "(done)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "下午下课的时候，外边下大雨了。",
     "tr": "Xiàwǔ xiàkè de shíhou, wàibian xià dà yǔ le.",
     "mean": "In the afternoon, when class ended, it was pouring outside.",
     "words": [
      {
       "t": "下午",
       "mean": "afternoon"
      },
      {
       "t": "下课",
       "mean": "class ends"
      },
      {
       "t": "的时候",
       "mean": "when"
      },
      {
       "t": "外边",
       "mean": "outside"
      },
      {
       "t": "下",
       "mean": "falls"
      },
      {
       "t": "大雨",
       "mean": "heavy rain"
      },
      {
       "t": "了",
       "mean": "(now)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "小雨站在门口，不知道怎么办。",
     "tr": "Xiǎoyǔ zhàn zài ménkǒu, bù zhīdào zěnme bàn.",
     "mean": "Xiaoyu stood at the door, not knowing what to do.",
     "words": [
      {
       "t": "小雨",
       "mean": "Xiaoyu"
      },
      {
       "t": "站",
       "mean": "stood"
      },
      {
       "t": "在",
       "mean": "at"
      },
      {
       "t": "门口",
       "mean": "the door"
      },
      {
       "t": "不",
       "mean": "not"
      },
      {
       "t": "知道",
       "mean": "know"
      },
      {
       "t": "怎么办",
       "mean": "what to do"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "这时候，一个男同学走了过来。",
     "tr": "Zhè shíhou, yí ge nán tóngxué zǒu le guòlai.",
     "mean": "Just then, a classmate came over.",
     "words": [
      {
       "t": "这时候",
       "mean": "just then"
      },
      {
       "t": "一个",
       "mean": "a"
      },
      {
       "t": "男",
       "mean": "male"
      },
      {
       "t": "同学",
       "mean": "classmate"
      },
      {
       "t": "走",
       "mean": "walked"
      },
      {
       "t": "了",
       "mean": "(done)"
      },
      {
       "t": "过来",
       "mean": "over (here)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他说：“我的伞很大，我们一起走吧！”",
     "tr": "Tā shuō: “Wǒ de sǎn hěn dà, wǒmen yìqǐ zǒu ba!”",
     "mean": "He said: “My umbrella is big. Let's walk together!”",
     "words": [
      {
       "t": "他",
       "mean": "he"
      },
      {
       "t": "说",
       "mean": "said"
      },
      {
       "t": "我的",
       "mean": "my"
      },
      {
       "t": "伞",
       "mean": "umbrella"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "大",
       "mean": "big"
      },
      {
       "t": "我们",
       "mean": "we"
      },
      {
       "t": "一起",
       "mean": "together"
      },
      {
       "t": "走",
       "mean": "walk"
      },
      {
       "t": "吧",
       "mean": "(let's)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他叫林阳，是她的同班同学。",
     "tr": "Tā jiào Lín Yáng, shì tā de tóngbān tóngxué.",
     "mean": "His name was Lin Yang, a classmate from her class.",
     "words": [
      {
       "t": "他",
       "mean": "he"
      },
      {
       "t": "叫",
       "mean": "is called"
      },
      {
       "t": "林阳",
       "mean": "Lin Yang"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "她的",
       "mean": "her"
      },
      {
       "t": "同班",
       "mean": "same class"
      },
      {
       "t": "同学",
       "mean": "classmate"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "他们一边走一边聊天，路好像变短了。",
     "tr": "Tāmen yìbiān zǒu yìbiān liáotiān, lù hǎoxiàng biàn duǎn le.",
     "mean": "They chatted as they walked, and the way home seemed to get shorter.",
     "words": [
      {
       "t": "他们",
       "mean": "they"
      },
      {
       "t": "一边",
       "mean": "while"
      },
      {
       "t": "走",
       "mean": "walk"
      },
      {
       "t": "一边",
       "mean": "while"
      },
      {
       "t": "聊天",
       "mean": "chat"
      },
      {
       "t": "路",
       "mean": "road"
      },
      {
       "t": "好像",
       "mean": "seemed to"
      },
      {
       "t": "变",
       "mean": "become"
      },
      {
       "t": "短",
       "mean": "short"
      },
      {
       "t": "了",
       "mean": "(change)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "从那天起，小雨开始喜欢下雨天了。",
     "tr": "Cóng nà tiān qǐ, Xiǎoyǔ kāishǐ xǐhuan xià yǔ tiān le.",
     "mean": "From that day on, Xiaoyu began to like rainy days.",
     "words": [
      {
       "t": "从",
       "mean": "from"
      },
      {
       "t": "那天",
       "mean": "that day"
      },
      {
       "t": "起",
       "mean": "on"
      },
      {
       "t": "小雨",
       "mean": "Xiaoyu"
      },
      {
       "t": "开始",
       "mean": "began"
      },
      {
       "t": "喜欢",
       "mean": "to like"
      },
      {
       "t": "下雨天",
       "mean": "rainy days"
      },
      {
       "t": "了",
       "mean": "(change)"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Read the whole story",
     "text": "Read the whole story aloud. Try to keep a smooth rhythm.",
     "lines": [
      "王小雨是大学生。",
      "她的名字里有“雨”，可是她不喜欢下雨。",
      "星期一早上天气很好，她没带伞就去上课了。",
      "下午下课的时候，外边下大雨了。",
      "小雨站在门口，不知道怎么办。",
      "这时候，一个男同学走了过来。",
      "他说：“我的伞很大，我们一起走吧！”",
      "他叫林阳，是她的同班同学。",
      "他们一边走一边聊天，路好像变短了。",
      "从那天起，小雨开始喜欢下雨天了。"
     ]
    },
    {
     "type": "quiz",
     "title": "Did you understand?",
     "items": [
      {
       "q": "What does {{雨}} in Xiaoyu's name mean?",
       "options": [
        "snow",
        "rain",
        "sun",
        "wind"
       ],
       "answer": 1
      },
      {
       "q": "Why didn't she take an umbrella?",
       "options": [
        "The morning was sunny",
        "Her umbrella was broken at home",
        "She lost it on the bus",
        "She doesn't own one"
       ],
       "answer": 0
      },
      {
       "q": "When did it start to pour?",
       "options": [
        "In the afternoon",
        "Early on Monday morning",
        "Late on Sunday night",
        "During her lunch break"
       ],
       "answer": 0
      },
      {
       "q": "What did Lin Yang offer?",
       "options": [
        "To lend her his coat",
        "To call a taxi",
        "To share his umbrella",
        "To wait inside until the rain stopped"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What did he say?",
       "say": "我们一起走吧！",
       "options": [
        "Let's take a taxi",
        "Let's walk together",
        "Let's wait here",
        "Let's go home separately"
       ],
       "answer": 1
      },
      {
       "q": "{{一边走一边聊天}}: they walked and chatted…",
       "options": [
        "one after the other",
        "only on rainy days",
        "in different places",
        "at the same time"
       ],
       "answer": 3
      },
      {
       "q": "How does Xiaoyu feel about rainy days at the end?",
       "options": [
        "She still hated them",
        "She was afraid of them",
        "She began to like them",
        "She never thought about them again"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u6-story-gift",
   "icon": "礼",
   "title": "Story 3: The Birthday Present",
   "subtitle": "A graded story (HSK 2) about choosing a gift in China.",
   "minutes": 18,
   "goals": [
    "Read a longer HSK 2 story",
    "Learn why some gifts are avoided in China",
    "Answer comprehension questions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Your third story mixes reading with real culture. Anna wants to find the perfect birthday present for a Chinese friend, but some gifts are not what they seem!"
    },
    {
     "type": "vocab",
     "title": "Words in this story",
     "items": [
      {
       "t": "汉语",
       "tr": "Hànyǔ",
       "mean": "Chinese (language)"
      },
      {
       "t": "已经",
       "tr": "yǐjīng",
       "mean": "already"
      },
      {
       "t": "生日",
       "tr": "shēngrì",
       "mean": "birthday"
      },
      {
       "t": "送",
       "tr": "sòng",
       "mean": "to give (as a gift)"
      },
      {
       "t": "礼物",
       "tr": "lǐwù",
       "mean": "present, gift"
      },
      {
       "t": "钟",
       "tr": "zhōng",
       "mean": "clock"
      },
      {
       "t": "告诉",
       "tr": "gàosu",
       "mean": "to tell"
      },
      {
       "t": "蛋糕",
       "tr": "dàngāo",
       "mean": "cake"
      },
      {
       "t": "卡片",
       "tr": "kǎpiàn",
       "mean": "card"
      },
      {
       "t": "感动",
       "tr": "gǎndòng",
       "mean": "moved, touched"
      }
     ]
    },
    {
     "type": "text",
     "text": "**生日礼物** (Shēngrì lǐwù): The Birthday Present",
     "title": "The story"
    },
    {
     "type": "sentence",
     "t": "安娜在北京学习汉语已经一年了。",
     "tr": "Ānnà zài Běijīng xuéxí Hànyǔ yǐjīng yì nián le.",
     "mean": "Anna has been studying Chinese in Beijing for a year now.",
     "words": [
      {
       "t": "安娜",
       "mean": "Anna"
      },
      {
       "t": "在",
       "mean": "in"
      },
      {
       "t": "北京",
       "mean": "Beijing"
      },
      {
       "t": "学习",
       "mean": "study"
      },
      {
       "t": "汉语",
       "mean": "Chinese"
      },
      {
       "t": "已经",
       "mean": "already"
      },
      {
       "t": "一年",
       "mean": "one year"
      },
      {
       "t": "了",
       "mean": "(so far)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "下个星期六是她的中国朋友小美的生日。",
     "tr": "Xià ge xīngqīliù shì tā de Zhōngguó péngyou Xiǎoměi de shēngrì.",
     "mean": "Next Saturday is her Chinese friend Xiaomei's birthday.",
     "words": [
      {
       "t": "下个",
       "mean": "next"
      },
      {
       "t": "星期六",
       "mean": "Saturday"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "她的",
       "mean": "her"
      },
      {
       "t": "中国",
       "mean": "Chinese"
      },
      {
       "t": "朋友",
       "mean": "friend"
      },
      {
       "t": "小美",
       "mean": "Xiaomei"
      },
      {
       "t": "的",
       "mean": "('s)"
      },
      {
       "t": "生日",
       "mean": "birthday"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "安娜想送她一个礼物，可是不知道送什么。",
     "tr": "Ānnà xiǎng sòng tā yí ge lǐwù, kěshì bù zhīdào sòng shénme.",
     "mean": "Anna wants to give her a present, but she doesn't know what to give.",
     "words": [
      {
       "t": "安娜",
       "mean": "Anna"
      },
      {
       "t": "想",
       "mean": "wants"
      },
      {
       "t": "送",
       "mean": "give"
      },
      {
       "t": "她",
       "mean": "her"
      },
      {
       "t": "一个",
       "mean": "a"
      },
      {
       "t": "礼物",
       "mean": "present"
      },
      {
       "t": "可是",
       "mean": "but"
      },
      {
       "t": "不",
       "mean": "doesn't"
      },
      {
       "t": "知道",
       "mean": "know"
      },
      {
       "t": "送",
       "mean": "give"
      },
      {
       "t": "什么",
       "mean": "what"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "她想买一个漂亮的钟。",
     "tr": "Tā xiǎng mǎi yí ge piàoliang de zhōng.",
     "mean": "She thinks of buying a pretty clock.",
     "words": [
      {
       "t": "她",
       "mean": "she"
      },
      {
       "t": "想",
       "mean": "wants"
      },
      {
       "t": "买",
       "mean": "buy"
      },
      {
       "t": "一个",
       "mean": "a"
      },
      {
       "t": "漂亮的",
       "mean": "pretty"
      },
      {
       "t": "钟",
       "mean": "clock"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "可是同学告诉她：“在中国，不能送钟。”",
     "tr": "Kěshì tóngxué gàosu tā: “Zài Zhōngguó, bù néng sòng zhōng.”",
     "mean": "But a classmate tells her: “In China, you can't give a clock.”",
     "words": [
      {
       "t": "可是",
       "mean": "but"
      },
      {
       "t": "同学",
       "mean": "classmate"
      },
      {
       "t": "告诉",
       "mean": "tells"
      },
      {
       "t": "她",
       "mean": "her"
      },
      {
       "t": "在",
       "mean": "in"
      },
      {
       "t": "中国",
       "mean": "China"
      },
      {
       "t": "不能",
       "mean": "can't"
      },
      {
       "t": "送",
       "mean": "give"
      },
      {
       "t": "钟",
       "mean": "clock"
      }
     ],
     "note": "{{送钟}} (sòng zhōng, give a clock) sounds just like {{送终}} (sòngzhōng), caring for someone at their death."
    },
    {
     "type": "sentence",
     "t": "安娜又想送一把伞，同学说这也不太好。",
     "tr": "Ānnà yòu xiǎng sòng yì bǎ sǎn, tóngxué shuō zhè yě bú tài hǎo.",
     "mean": "Then Anna thinks of an umbrella, but her classmate says that's not great either.",
     "words": [
      {
       "t": "安娜",
       "mean": "Anna"
      },
      {
       "t": "又",
       "mean": "then (again)"
      },
      {
       "t": "想",
       "mean": "thinks of"
      },
      {
       "t": "送",
       "mean": "giving"
      },
      {
       "t": "一把",
       "mean": "an"
      },
      {
       "t": "伞",
       "mean": "umbrella"
      },
      {
       "t": "同学",
       "mean": "classmate"
      },
      {
       "t": "说",
       "mean": "says"
      },
      {
       "t": "这",
       "mean": "this"
      },
      {
       "t": "也",
       "mean": "also"
      },
      {
       "t": "不太",
       "mean": "not very"
      },
      {
       "t": "好",
       "mean": "good"
      }
     ],
     "note": "{{伞}} (sǎn) sounds like {{散}} (sàn), ‘to break up, separate’."
    },
    {
     "type": "sentence",
     "t": "最后，安娜自己做了一个蛋糕，还写了一张中文卡片。",
     "tr": "Zuìhòu, Ānnà zìjǐ zuò le yí ge dàngāo, hái xiě le yì zhāng Zhōngwén kǎpiàn.",
     "mean": "In the end, Anna bakes a cake herself and writes a card in Chinese.",
     "words": [
      {
       "t": "最后",
       "mean": "in the end"
      },
      {
       "t": "安娜",
       "mean": "Anna"
      },
      {
       "t": "自己",
       "mean": "herself"
      },
      {
       "t": "做了",
       "mean": "made"
      },
      {
       "t": "一个",
       "mean": "a"
      },
      {
       "t": "蛋糕",
       "mean": "cake"
      },
      {
       "t": "还",
       "mean": "also"
      },
      {
       "t": "写了",
       "mean": "wrote"
      },
      {
       "t": "一张",
       "mean": "a (measure word for flat things)"
      },
      {
       "t": "中文",
       "mean": "Chinese"
      },
      {
       "t": "卡片",
       "mean": "card"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "卡片上写着：“祝你生日快乐，天天开心！”",
     "tr": "Kǎpiàn shang xiězhe: “Zhù nǐ shēngrì kuàilè, tiāntiān kāixīn!”",
     "mean": "The card says: “Happy birthday! Be happy every day!”",
     "words": [
      {
       "t": "卡片",
       "mean": "card"
      },
      {
       "t": "上",
       "mean": "on"
      },
      {
       "t": "写着",
       "mean": "is written"
      },
      {
       "t": "祝",
       "mean": "wish"
      },
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "生日",
       "mean": "birthday"
      },
      {
       "t": "快乐",
       "mean": "happy"
      },
      {
       "t": "天天",
       "mean": "every day"
      },
      {
       "t": "开心",
       "mean": "happy"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "小美看了很感动：“这是我最喜欢的礼物！”",
     "tr": "Xiǎoměi kàn le hěn gǎndòng: “Zhè shì wǒ zuì xǐhuan de lǐwù!”",
     "mean": "Xiaomei reads it and is very touched: “This is my favourite present!”",
     "words": [
      {
       "t": "小美",
       "mean": "Xiaomei"
      },
      {
       "t": "看了",
       "mean": "read it"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "感动",
       "mean": "touched"
      },
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
       "t": "最",
       "mean": "most"
      },
      {
       "t": "喜欢",
       "mean": "liked"
      },
      {
       "t": "的",
       "mean": "(that)"
      },
      {
       "t": "礼物",
       "mean": "present"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Hand-made gifts and cards written in Chinese are always appreciated. Your effort matters more than the price."
    },
    {
     "type": "practice",
     "title": "Read the whole story",
     "text": "Read the whole story aloud.",
     "lines": [
      "安娜在北京学习汉语已经一年了。",
      "下个星期六是她的中国朋友小美的生日。",
      "安娜想送她一个礼物，可是不知道送什么。",
      "她想买一个漂亮的钟。",
      "可是同学告诉她：“在中国，不能送钟。”",
      "安娜又想送一把伞，同学说这也不太好。",
      "最后，安娜自己做了一个蛋糕，还写了一张中文卡片。",
      "卡片上写着：“祝你生日快乐，天天开心！”",
      "小美看了很感动：“这是我最喜欢的礼物！”"
     ]
    },
    {
     "type": "quiz",
     "title": "Did you understand?",
     "items": [
      {
       "q": "How long has Anna studied Chinese in Beijing?",
       "options": [
        "One month",
        "One year",
        "Two years",
        "Six months"
       ],
       "answer": 1
      },
      {
       "q": "Why shouldn't you give a clock?",
       "options": [
        "Clocks are too cheap",
        "Clocks are much too expensive",
        "Nobody uses clocks now",
        "It sounds unlucky"
       ],
       "answer": 3
      },
      {
       "q": "What's the problem with giving an umbrella?",
       "options": [
        "It sounds like “split up”",
        "It's only a gift for old people",
        "It means bad weather",
        "It's too big"
       ],
       "answer": 0
      },
      {
       "q": "What does Anna give in the end?",
       "options": [
        "A cake she made and a card",
        "An expensive clock from a shop",
        "A big red umbrella and a hat",
        "A book"
       ],
       "answer": 0
      },
      {
       "q": "Listen. What does the card say?",
       "say": "祝你生日快乐！",
       "options": [
        "Happy New Year",
        "Happy birthday to you",
        "Thank you for the present",
        "Good luck in your exam"
       ],
       "answer": 1
      },
      {
       "q": "{{感动}} means…",
       "options": [
        "a little bit angry",
        "very surprised",
        "really tired",
        "moved, touched"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u6-poem",
   "icon": "月",
   "title": "Poem: Quiet Night Thoughts",
   "subtitle": "Li Bai's famous Tang poem 《静夜思》, line by line.",
   "minutes": 15,
   "goals": [
    "Read and understand 《静夜思》 line by line",
    "Recite the poem with a natural rhythm",
    "Compare poetic words with modern ones"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "《静夜思》 (Jìng Yè Sī, ‘Quiet Night Thoughts’) was written by **Li Bai** ({{李白}}, 701–762), one of the greatest poets of the Tang dynasty. Almost every Chinese child learns it by heart. It's short, simple and beautiful: a traveller sees moonlight and misses home."
    },
    {
     "type": "vocab",
     "title": "Words in the poem",
     "items": [
      {
       "t": "李白",
       "tr": "Lǐ Bái",
       "mean": "Li Bai, Tang dynasty poet"
      },
      {
       "t": "明月",
       "tr": "míngyuè",
       "mean": "bright moon"
      },
      {
       "t": "光",
       "tr": "guāng",
       "mean": "light"
      },
      {
       "t": "霜",
       "tr": "shuāng",
       "mean": "frost"
      },
      {
       "t": "举头",
       "tr": "jǔ tóu",
       "mean": "to raise your head"
      },
      {
       "t": "低头",
       "tr": "dī tóu",
       "mean": "to lower your head"
      },
      {
       "t": "故乡",
       "tr": "gùxiāng",
       "mean": "hometown (literary)"
      }
     ]
    },
    {
     "type": "text",
     "text": "**静夜思** · 李白 (Jìng Yè Sī · Lǐ Bái)",
     "title": "The poem, line by line"
    },
    {
     "type": "sentence",
     "t": "床前明月光，",
     "tr": "Chuáng qián míng yuè guāng,",
     "mean": "Before my bed, the bright moonlight shines;",
     "words": [
      {
       "t": "床",
       "mean": "bed"
      },
      {
       "t": "前",
       "mean": "in front of"
      },
      {
       "t": "明",
       "mean": "bright"
      },
      {
       "t": "月",
       "mean": "moon"
      },
      {
       "t": "光",
       "mean": "light"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "疑是地上霜。",
     "tr": "yí shì dì shàng shuāng.",
     "mean": "I wonder if it's frost upon the ground.",
     "words": [
      {
       "t": "疑",
       "mean": "wonder, suspect"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "地",
       "mean": "ground"
      },
      {
       "t": "上",
       "mean": "on"
      },
      {
       "t": "霜",
       "mean": "frost"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "举头望明月，",
     "tr": "Jǔ tóu wàng míng yuè,",
     "mean": "I raise my head and gaze at the bright moon;",
     "words": [
      {
       "t": "举",
       "mean": "raise"
      },
      {
       "t": "头",
       "mean": "head"
      },
      {
       "t": "望",
       "mean": "gaze at"
      },
      {
       "t": "明",
       "mean": "bright"
      },
      {
       "t": "月",
       "mean": "moon"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "低头思故乡。",
     "tr": "dī tóu sī gùxiāng.",
     "mean": "I lower my head and think of home.",
     "words": [
      {
       "t": "低",
       "mean": "lower"
      },
      {
       "t": "头",
       "mean": "head"
      },
      {
       "t": "思",
       "mean": "think of, miss"
      },
      {
       "t": "故乡",
       "mean": "hometown"
      }
     ]
    },
    {
     "type": "compare",
     "title": "Poetic vs everyday words",
     "items": [
      {
       "t": "望",
       "label": "wàng (poetic)",
       "desc": "To gaze into the distance. In everyday speech: {{看}} (kàn)."
      },
      {
       "t": "思",
       "label": "sī (literary)",
       "desc": "To think of, to miss. In everyday speech: {{想}} (xiǎng)."
      },
      {
       "t": "故乡",
       "label": "gùxiāng (literary)",
       "desc": "Hometown. In everyday speech: {{老家}} (lǎojiā)."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The poem has 4 lines of 5 characters, a form called {{五言绝句}} (wǔyán juéjù). Lines 1, 2 and 4 rhyme: guāng, shuāng, xiāng."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Scholars still debate what {{床}} means here. Today it means ‘bed’, but some think Li Bai meant a folding seat or the railing around a well. Either way, the feeling of homesickness is the same."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The poem is a favourite at the Mid-Autumn Festival, when the moon is full and people think of family far away."
    },
    {
     "type": "steps",
     "title": "How to recite it",
     "items": [
      {
       "title": "Read slowly in 2 + 3 beats",
       "t": "床前，明月光，",
       "tr": "Chuáng qián, míng yuè guāng,",
       "mean": "Before my bed, bright moonlight,",
       "desc": "Make a tiny pause after the second character of every line."
      },
      {
       "title": "Stretch the rhyme",
       "t": "疑是地上霜。",
       "tr": "Yí shì dì shàng shuāng.",
       "mean": "I wonder if it's frost on the ground.",
       "desc": "Let the last syllable of lines 1, 2 and 4 ring a little longer."
      },
      {
       "title": "Look up as you say line 3",
       "t": "举头望明月，",
       "tr": "Jǔ tóu wàng míng yuè,",
       "mean": "I raise my head and gaze at the moon,",
       "desc": "Acting it out helps you remember."
      },
      {
       "title": "Look down for line 4",
       "t": "低头思故乡。",
       "tr": "Dī tóu sī gùxiāng.",
       "mean": "I lower my head and think of home."
      }
     ]
    },
    {
     "type": "write",
     "level": "line",
     "items": [
      "床前明月光",
      "疑是地上霜",
      "举头望明月",
      "低头思故乡"
     ],
     "note": "Copy each line in your notebook, saying it aloud as you write."
    },
    {
     "type": "practice",
     "title": "Recite the poem",
     "text": "Recite the whole poem. Then try it from memory!",
     "lines": [
      "床前明月光，",
      "疑是地上霜。",
      "举头望明月，",
      "低头思故乡。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Who wrote 《静夜思》?",
       "options": [
        "Du Fu (杜甫)",
        "Confucius (孔子)",
        "Li Bai (李白)",
        "Lu Xun (鲁迅)"
       ],
       "answer": 2
      },
      {
       "q": "At first, what does the poet think the moonlight is?",
       "options": [
        "Snow falling on the mountains",
        "Frost on the ground",
        "A lamp by the bed",
        "Water in the river"
       ],
       "answer": 1
      },
      {
       "q": "{{故乡}} means…",
       "options": [
        "old friend",
        "far away",
        "hometown",
        "the night sky"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which line is this?",
       "say": "举头望明月",
       "options": [
        "举头望明月",
        "低头思故乡",
        "床前明月光",
        "疑是地上霜"
       ],
       "answer": 0
      },
      {
       "q": "Li Bai lived during which dynasty?",
       "options": [
        "Song",
        "Ming",
        "Qing",
        "Tang"
       ],
       "answer": 3
      },
      {
       "q": "Which words rhyme in the poem?",
       "options": [
        "床, 月, 头",
        "前, 是, 望",
        "明, 举, 低",
        "光, 霜, 乡"
       ],
       "answer": 3
      },
      {
       "q": "In everyday Chinese, {{思}} (to miss) is usually…",
       "options": [
        "看 (kàn)",
        "想 (xiǎng)",
        "说 (shuō)",
        "听 (tīng)"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u6-chengyu",
   "icon": "成",
   "title": "Chengyu & Everyday Sayings",
   "subtitle": "Four-character idioms and sayings that make your Chinese shine.",
   "minutes": 15,
   "goals": [
    "Know what a chengyu is",
    "Use a few common chengyu and sayings",
    "Learn two famous idiom stories"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A {{成语}} (chéngyǔ) is a fixed idiom, usually four characters long. Many come from old stories or classic books. Using one at the right moment always impresses Chinese speakers!"
    },
    {
     "type": "rule",
     "name": "What makes a chengyu",
     "color": "orange",
     "desc": "Usually 4 characters, fixed word order, a meaning that is more than the sum of its parts.",
     "examples": [
      {
       "t": "一举两得",
       "tr": "yì jǔ liǎng dé"
      },
      {
       "t": "入乡随俗",
       "tr": "rù xiāng suí sú"
      }
     ],
     "how": "Learn the literal meaning AND the real meaning, plus when to use it."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "一路平安",
       "tr": "yí lù píng'ān",
       "mean": "Have a safe trip!",
       "note": "Literally: ‘the whole road, peace’. Say it to someone setting off."
      },
      {
       "t": "熟能生巧",
       "tr": "shú néng shēng qiǎo",
       "mean": "Practice makes perfect.",
       "note": "Literally: ‘familiarity gives birth to skill’."
      },
      {
       "t": "入乡随俗",
       "tr": "rù xiāng suí sú",
       "mean": "When in Rome, do as the Romans do.",
       "note": "Literally: ‘enter a village, follow its customs’."
      },
      {
       "t": "一举两得",
       "tr": "yì jǔ liǎng dé",
       "mean": "Kill two birds with one stone.",
       "note": "Literally: ‘one action, two gains’."
      },
      {
       "t": "马马虎虎",
       "tr": "mǎmǎhūhū",
       "mean": "So-so; careless.",
       "note": "Literally: ‘horse horse tiger tiger’."
      },
      {
       "t": "对牛弹琴",
       "tr": "duì niú tán qín",
       "mean": "To talk to the wrong audience.",
       "note": "Literally: ‘play the zither to a cow’."
      },
      {
       "t": "半途而废",
       "tr": "bàn tú ér fèi",
       "mean": "To give up halfway.",
       "note": "Literally: ‘stop halfway along the road’."
      },
      {
       "t": "马到成功",
       "tr": "mǎ dào chéng gōng",
       "mean": "Instant success! (a good-luck wish)",
       "note": "Literally: ‘the horse arrives, success’."
      }
     ],
     "title": "Useful chengyu"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "**守株待兔** (shǒu zhū dài tù): A farmer saw a rabbit run into a tree stump and die. He stopped farming and waited by the stump every day for another rabbit. None came, and his fields went to weeds. It means waiting for luck instead of working.",
     "title": "Story: waiting by the stump"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "**画蛇添足** (huà shé tiān zú): Some friends raced to draw a snake to win a cup of wine. The fastest finished, then decided to add feet. Another man finished and took the wine: ‘Snakes don't have feet!’ It means spoiling something by adding what isn't needed.",
     "title": "Story: drawing feet on a snake"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "慢慢来",
       "tr": "màn màn lái",
       "mean": "Take your time; no rush."
      },
      {
       "t": "活到老，学到老",
       "tr": "huó dào lǎo, xué dào lǎo",
       "mean": "You're never too old to learn."
      },
      {
       "t": "百闻不如一见",
       "tr": "bǎi wén bù rú yí jiàn",
       "mean": "Seeing once beats hearing a hundred times."
      },
      {
       "t": "千里之行，始于足下",
       "tr": "qiān lǐ zhī xíng, shǐ yú zú xià",
       "mean": "A journey of a thousand li begins with a single step.",
       "note": "From the {{道德经}} (Dào Dé Jīng). A {{里}} (lǐ) is a traditional unit of distance."
      },
      {
       "t": "三人行，必有我师",
       "tr": "sān rén xíng, bì yǒu wǒ shī",
       "mean": "Among any three people, one can teach me something.",
       "note": "Adapted from the Analects of Confucius."
      }
     ],
     "title": "Everyday sayings"
    },
    {
     "type": "sentence",
     "t": "学汉语要慢慢来。",
     "tr": "Xué Hànyǔ yào màn màn lái.",
     "mean": "Learning Chinese takes time; go step by step.",
     "words": [
      {
       "t": "学",
       "mean": "learn"
      },
      {
       "t": "汉语",
       "mean": "Chinese"
      },
      {
       "t": "要",
       "mean": "need to"
      },
      {
       "t": "慢慢来",
       "mean": "take it slowly"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "熟能生巧，每天练习吧！",
     "tr": "Shú néng shēng qiǎo, měitiān liànxí ba!",
     "mean": "Practice makes perfect, so practise every day!",
     "words": [
      {
       "t": "熟能生巧",
       "mean": "practice makes perfect"
      },
      {
       "t": "每天",
       "mean": "every day"
      },
      {
       "t": "练习",
       "mean": "practise"
      },
      {
       "t": "吧",
       "mean": "(let's)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "祝你一路平安！",
     "tr": "Zhù nǐ yí lù píng'ān!",
     "mean": "Have a safe trip!",
     "words": [
      {
       "t": "祝",
       "mean": "wish"
      },
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "一路平安",
       "mean": "a safe journey"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Chengyu are powerful but easy to overuse. One well-chosen chengyu in a conversation is great; five in a row sounds like a textbook!"
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each chengyu and saying aloud. Say the meaning in English after each one.",
     "lines": [
      "一路平安",
      "熟能生巧",
      "入乡随俗",
      "一举两得",
      "马马虎虎",
      "慢慢来",
      "活到老，学到老"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "How many characters does a typical chengyu have?",
       "options": [
        "Four",
        "Two",
        "Six",
        "Eight"
       ],
       "answer": 0
      },
      {
       "q": "Which chengyu means “When in Rome, do as the Romans do”?",
       "options": [
        "一举两得",
        "半途而废",
        "入乡随俗",
        "对牛弹琴"
       ],
       "answer": 2
      },
      {
       "q": "{{画蛇添足}} (drawing feet on a snake) describes…",
       "options": [
        "working hard until the job is done",
        "being lucky",
        "adding something useless",
        "drawing well"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does this mean?",
       "say": "熟能生巧",
       "options": [
        "Practice makes perfect",
        "Have a safe trip",
        "Take your time",
        "Never too old to learn"
       ],
       "answer": 0
      },
      {
       "q": "A friend is leaving for the airport. What do you say?",
       "options": [
        "马马虎虎！",
        "一路平安！",
        "半途而废！",
        "对牛弹琴！"
       ],
       "answer": 1
      },
      {
       "q": "{{守株待兔}} warns against…",
       "options": [
        "hunting rabbits in the forest",
        "cutting down old trees",
        "farming in winter",
        "waiting for luck"
       ],
       "answer": 3
      },
      {
       "q": "{{马马虎虎}}, literally ‘horse horse tiger tiger’, means…",
       "options": [
        "so-so, careless",
        "very brave",
        "fast and strong",
        "wild animals"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u6-festivals",
   "icon": "节",
   "title": "Chinese Festivals",
   "subtitle": "Spring Festival, Mid-Autumn and Dragon Boat: food, customs and greetings.",
   "minutes": 18,
   "goals": [
    "Name the three big traditional festivals",
    "Know their foods, customs and greetings",
    "Understand puns behind festival traditions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Traditional Chinese festivals follow the lunar calendar, so their dates change every year on the Western calendar. Each one has its own food, stories and greetings."
    },
    {
     "type": "table",
     "head": [
      "Festival",
      "When",
      "Food",
      "Greeting"
     ],
     "rows": [
      [
       "{{春节}} Spring Festival",
       "1st day of the 1st lunar month (late Jan to mid Feb)",
       "{{饺子}}, fish, {{年糕}}",
       "{{新年快乐！}} {{过年好！}}"
      ],
      [
       "{{中秋节}} Mid-Autumn Festival",
       "15th day of the 8th lunar month (Sept or early Oct)",
       "{{月饼}} mooncakes",
       "{{中秋快乐！}}"
      ],
      [
       "{{端午节}} Dragon Boat Festival",
       "5th day of the 5th lunar month (usually June)",
       "{{粽子}} sticky rice in bamboo leaves",
       "{{端午安康！}}"
      ]
     ],
     "title": "Three big festivals"
    },
    {
     "type": "vocab",
     "title": "Festival words",
     "items": [
      {
       "t": "春节",
       "tr": "Chūn Jié",
       "mean": "Spring Festival, Chinese New Year"
      },
      {
       "t": "除夕",
       "tr": "Chúxī",
       "mean": "New Year's Eve (lunar)"
      },
      {
       "t": "年夜饭",
       "tr": "niányèfàn",
       "mean": "New Year's Eve reunion dinner"
      },
      {
       "t": "红包",
       "tr": "hóngbāo",
       "mean": "red envelope (with money)"
      },
      {
       "t": "春联",
       "tr": "chūnlián",
       "mean": "New Year couplets (red door poems)"
      },
      {
       "t": "恭喜发财",
       "tr": "gōngxǐ fācái",
       "mean": "wishing you prosperity!"
      },
      {
       "t": "中秋节",
       "tr": "Zhōngqiū Jié",
       "mean": "Mid-Autumn Festival"
      },
      {
       "t": "月饼",
       "tr": "yuèbing",
       "mean": "mooncake"
      },
      {
       "t": "赏月",
       "tr": "shǎng yuè",
       "mean": "to admire the moon"
      },
      {
       "t": "端午节",
       "tr": "Duānwǔ Jié",
       "mean": "Dragon Boat Festival"
      },
      {
       "t": "粽子",
       "tr": "zòngzi",
       "mean": "sticky rice wrapped in bamboo leaves"
      },
      {
       "t": "龙舟",
       "tr": "lóngzhōu",
       "mean": "dragon boat"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "Going home for the New Year",
     "lines": [
      {
       "who": "Mia",
       "t": "春节你回老家吗？",
       "tr": "Chūn Jié nǐ huí lǎojiā ma?",
       "mean": "Are you going back to your hometown for Spring Festival?"
      },
      {
       "who": "Xiao Zhang",
       "t": "回！我们全家一起吃年夜饭。",
       "tr": "Huí! Wǒmen quán jiā yìqǐ chī niányèfàn.",
       "mean": "Yes! My whole family has the reunion dinner together."
      },
      {
       "who": "Mia",
       "t": "你们吃什么？",
       "tr": "Nǐmen chī shénme?",
       "mean": "What do you eat?"
      },
      {
       "who": "Xiao Zhang",
       "t": "饺子、鱼，还有很多菜。年年有余嘛！",
       "tr": "Jiǎozi, yú, hái yǒu hěn duō cài. Nián nián yǒu yú ma!",
       "mean": "Dumplings, fish and lots of dishes. ‘Surplus every year’, you know!"
      },
      {
       "who": "Mia",
       "t": "你会收到红包吗？",
       "tr": "Nǐ huì shōudào hóngbāo ma?",
       "mean": "Will you get red envelopes?"
      },
      {
       "who": "Xiao Zhang",
       "t": "当然！奶奶每年都给我红包。",
       "tr": "Dāngrán! Nǎinai měi nián dōu gěi wǒ hóngbāo.",
       "mean": "Of course! Grandma gives me one every year."
      },
      {
       "who": "Mia",
       "t": "那我先祝你新年快乐！",
       "tr": "Nà wǒ xiān zhù nǐ xīnnián kuàilè!",
       "mean": "Then let me wish you a happy New Year in advance!"
      },
      {
       "who": "Xiao Zhang",
       "t": "谢谢！也祝你新年快乐！",
       "tr": "Xièxie! Yě zhù nǐ xīnnián kuàilè!",
       "mean": "Thanks! Happy New Year to you too!"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Fish ({{鱼}}, yú) sounds like {{余}} (yú, ‘surplus’), so {{年年有余}} means ‘may you have more than enough every year’. That's why fish is served at the New Year's Eve dinner."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "You'll see {{福}} (fú, good fortune) hung upside down on doors. ‘Upside down’ is {{倒}} (dào), which sounds like {{到}} (dào, ‘to arrive’): good fortune has arrived!"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Red envelopes ({{红包}}) are given by older relatives to children, and by married adults to younger unmarried relatives. Amounts with 8 are popular and amounts with 4 are avoided. Many people now also send digital red envelopes on WeChat."
    },
    {
     "type": "sentence",
     "t": "中秋节我们一起吃月饼、赏月。",
     "tr": "Zhōngqiū Jié wǒmen yìqǐ chī yuèbing, shǎng yuè.",
     "mean": "At Mid-Autumn we eat mooncakes and admire the moon together.",
     "words": [
      {
       "t": "中秋节",
       "mean": "Mid-Autumn Festival"
      },
      {
       "t": "我们",
       "mean": "we"
      },
      {
       "t": "一起",
       "mean": "together"
      },
      {
       "t": "吃",
       "mean": "eat"
      },
      {
       "t": "月饼",
       "mean": "mooncakes"
      },
      {
       "t": "赏月",
       "mean": "admire the moon"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Mid-Autumn is a time for family reunion ({{团圆}}, tuányuán). The legend says the goddess {{嫦娥}} (Cháng'é) lives on the moon with a jade rabbit. China's moon probes are named Chang'e after her."
    },
    {
     "type": "sentence",
     "t": "端午节有龙舟比赛。",
     "tr": "Duānwǔ Jié yǒu lóngzhōu bǐsài.",
     "mean": "There are dragon boat races at the Dragon Boat Festival.",
     "words": [
      {
       "t": "端午节",
       "mean": "Dragon Boat Festival"
      },
      {
       "t": "有",
       "mean": "there are"
      },
      {
       "t": "龙舟",
       "mean": "dragon boat"
      },
      {
       "t": "比赛",
       "mean": "races"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The Dragon Boat Festival remembers the poet {{屈原}} (Qū Yuán), who drowned himself in the Miluo River about 2,300 years ago. Legend says people raced out in boats to find him. Because of this sad origin, many people prefer the greeting {{端午安康}} (‘peace and health’)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The Spring Festival season ends with the Lantern Festival ({{元宵节}}, Yuánxiāo Jié) on the 15th day, with lanterns, riddles and sweet rice balls ({{汤圆}}, tāngyuán)."
    },
    {
     "type": "steps",
     "title": "Role-play: Spring Festival greetings",
     "items": [
      {
       "title": "Greet friends",
       "t": "新年快乐！",
       "tr": "Xīnnián kuàilè!",
       "mean": "Happy New Year!"
      },
      {
       "title": "Greet older relatives",
       "t": "过年好！",
       "tr": "Guònián hǎo!",
       "mean": "Happy New Year!",
       "desc": "A warm, traditional greeting, often said to elders."
      },
      {
       "title": "Wish prosperity",
       "t": "恭喜发财！",
       "tr": "Gōngxǐ fācái!",
       "mean": "Wishing you prosperity!",
       "desc": "Children sometimes cheekily add {{红包拿来！}}: ‘now hand over the red envelope!’"
      },
      {
       "title": "Wish good health",
       "t": "身体健康！",
       "tr": "Shēntǐ jiànkāng!",
       "mean": "Good health!"
      },
      {
       "title": "Wish surplus",
       "t": "年年有余！",
       "tr": "Nián nián yǒu yú!",
       "mean": "Plenty every year!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each festival greeting aloud.",
     "lines": [
      "新年快乐！",
      "过年好！",
      "恭喜发财！",
      "中秋快乐！",
      "端午安康！",
      "年年有余！"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "When is the Spring Festival?",
       "options": [
        "Always on 1 January every year",
        "In the middle of summer",
        "Every October 1st",
        "Late Jan to mid Feb"
       ],
       "answer": 3
      },
      {
       "q": "What do people eat at the Mid-Autumn Festival?",
       "options": [
        "粽子 rice in leaves",
        "汤圆 sweet rice balls",
        "月饼 mooncakes",
        "饺子 dumplings"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is the greeting?",
       "say": "新年快乐！",
       "options": [
        "Happy birthday",
        "Happy New Year",
        "Happy Mid-Autumn",
        "Have a safe trip"
       ],
       "answer": 1
      },
      {
       "q": "Why is {{福}} hung upside down?",
       "options": [
        "It's an old printing mistake",
        "To keep away the winter cold",
        "A pun on “arrived”",
        "So children can read it"
       ],
       "answer": 2
      },
      {
       "q": "The Dragon Boat Festival remembers…",
       "options": [
        "the moon goddess Chang'e",
        "the poet Qu Yuan",
        "the first emperor",
        "Confucius"
       ],
       "answer": 1
      },
      {
       "q": "Why is fish served at the New Year's Eve dinner?",
       "options": [
        "It's the cheapest dish",
        "Fish is the national animal",
        "Children love fish most of all",
        "Its name sounds like “surplus”"
       ],
       "answer": 3
      },
      {
       "q": "A {{红包}} is…",
       "options": [
        "a red envelope with money",
        "a red paper lantern for the door",
        "a New Year poem",
        "a firecracker"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u6-customs",
   "icon": "福",
   "title": "Culture Tips: Names, Gifts, Numbers & Table Manners",
   "subtitle": "Everyday customs that help you make a great impression.",
   "minutes": 18,
   "goals": [
    "Understand Chinese names and titles",
    "Give and receive gifts politely",
    "Know lucky and unlucky numbers",
    "Follow basic table manners"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Good manners open doors everywhere. These tips cover the situations visitors meet most: names, gifts, numbers and meals. Customs vary by region and family, so watch what others do and follow along."
    },
    {
     "type": "text",
     "text": "In Chinese names the **surname comes first**. In {{王小明}}, {{王}} (Wáng) is the surname and {{小明}} (Xiǎomíng) the given name. The most common surnames include {{王}}, {{李}}, {{张}}, {{刘}} and {{陈}}.",
     "title": "Names"
    },
    {
     "type": "table",
     "head": [
      "Title",
      "Pinyin",
      "Use it for"
     ],
     "rows": [
      [
       "{{王先生}}",
       "Wáng xiānsheng",
       "Mr Wang"
      ],
      [
       "{{王女士}}",
       "Wáng nǚshì",
       "Ms Wang"
      ],
      [
       "{{王老师}}",
       "Wáng lǎoshī",
       "Teacher Wang (also polite for respected professionals)"
      ],
      [
       "{{小王}}",
       "Xiǎo Wáng",
       "a younger friend or colleague"
      ],
      [
       "{{老王}}",
       "Lǎo Wáng",
       "an older friend or colleague (friendly, not rude)"
      ],
      [
       "{{阿姨}} / {{叔叔}}",
       "āyí / shūshu",
       "auntie / uncle: any adult of your parents' age"
      ]
     ],
     "title": "Titles and forms of address"
    },
    {
     "type": "sentence",
     "t": "您贵姓？",
     "tr": "Nín guìxìng?",
     "mean": "What's your surname? (very polite)",
     "words": [
      {
       "t": "您",
       "mean": "you (polite)"
      },
      {
       "t": "贵姓",
       "mean": "honourable surname"
      }
     ],
     "note": "Answer with {{我姓……}}, e.g. {{我姓李}} (My surname is Li)."
    },
    {
     "type": "text",
     "text": "Bring a small gift when you visit someone's home: fruit, tea, sweets or something from your country. Give and receive gifts **with both hands**.",
     "title": "Gifts"
    },
    {
     "type": "sentence",
     "t": "一点儿小意思，请收下。",
     "tr": "Yìdiǎnr xiǎo yìsi, qǐng shōuxià.",
     "mean": "Just a little something, please accept it.",
     "words": [
      {
       "t": "一点儿",
       "mean": "a little"
      },
      {
       "t": "小意思",
       "mean": "small token"
      },
      {
       "t": "请",
       "mean": "please"
      },
      {
       "t": "收下",
       "mean": "accept"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "People may politely refuse a gift once or twice before accepting, so offer again kindly. Gifts are often not opened in front of the giver."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Traditionally avoided gifts: clocks ({{钟}}, sounds like ‘end of life’), umbrellas ({{伞}}, sounds like ‘separate’), pears to share ({{梨}} lí sounds like {{离}} lí, ‘to part’) and green hats (a joke about an unfaithful partner). Red and gold wrapping is festive; plain white or black is linked to funerals."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "八",
       "tr": "bā",
       "mean": "8: sounds like {{发}} (fā, to prosper). The luckiest number!"
      },
      {
       "t": "六",
       "tr": "liù",
       "mean": "6: {{六六大顺}}, ‘everything goes smoothly’."
      },
      {
       "t": "九",
       "tr": "jiǔ",
       "mean": "9: sounds like {{久}} (jiǔ, long-lasting). Lucky for love and long life."
      },
      {
       "t": "四",
       "tr": "sì",
       "mean": "4: sounds like {{死}} (sǐ, death). Some buildings skip 4th floors."
      },
      {
       "t": "五二零",
       "tr": "wǔ èr líng",
       "mean": "520: sounds a bit like {{我爱你}} (I love you). 20 May is an online ‘love day’."
      }
     ],
     "title": "Lucky and unlucky numbers"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The Beijing Olympics opened on 8 August 2008 at 8:08 p.m. Lucky eights everywhere!"
    },
    {
     "type": "text",
     "text": "At a meal, wait for the host or the eldest person to start. The host often orders and may put food in your bowl as a kind gesture.",
     "title": "Table manners"
    },
    {
     "type": "vocab",
     "title": "At the table",
     "items": [
      {
       "t": "筷子",
       "tr": "kuàizi",
       "mean": "chopsticks"
      },
      {
       "t": "干杯",
       "tr": "gānbēi",
       "mean": "cheers! (literally ‘dry the glass’)"
      },
      {
       "t": "敬酒",
       "tr": "jìngjiǔ",
       "mean": "to propose a toast"
      },
      {
       "t": "随意",
       "tr": "suíyì",
       "mean": "as you like (drink as much as you want)"
      },
      {
       "t": "请客",
       "tr": "qǐngkè",
       "mean": "to treat (pay for others)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我敬您一杯！",
     "tr": "Wǒ jìng nín yì bēi!",
     "mean": "Let me drink a toast to you!",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "敬",
       "mean": "respectfully toast"
      },
      {
       "t": "您",
       "mean": "you (polite)"
      },
      {
       "t": "一杯",
       "mean": "a glass"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "大家慢慢吃。",
     "tr": "Dàjiā mànmàn chī.",
     "mean": "Enjoy your meal, everyone.",
     "words": [
      {
       "t": "大家",
       "mean": "everyone"
      },
      {
       "t": "慢慢",
       "mean": "slowly"
      },
      {
       "t": "吃",
       "mean": "eat"
      }
     ],
     "note": "Say this if you finish and leave the table before others."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Never stand your chopsticks upright in a bowl of rice: it looks like incense sticks at a funeral. Don't tap your bowl with them or point them at people either."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "When clinking glasses with an older person or a boss, hold your glass a little lower than theirs to show respect. If you don't want to drink it all, say {{随意}} and just take a sip."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Hosts traditionally order more than everyone can eat, to show generosity. Today many people also support the ‘Clean Plate’ campaign ({{光盘行动}}, guāngpán xíngdòng) against food waste, so finishing your rice is fine."
    },
    {
     "type": "steps",
     "title": "Role-play: visiting a Chinese family",
     "items": [
      {
       "title": "Give your gift",
       "t": "一点儿小意思。",
       "tr": "Yìdiǎnr xiǎo yìsi.",
       "mean": "Just a little something.",
       "desc": "Use both hands."
      },
      {
       "title": "Greet the parents",
       "t": "叔叔好！阿姨好！",
       "tr": "Shūshu hǎo! Āyí hǎo!",
       "mean": "Hello, uncle! Hello, auntie!"
      },
      {
       "title": "Praise the food",
       "t": "太好吃了！",
       "tr": "Tài hǎochī le!",
       "mean": "It's delicious!"
      },
      {
       "title": "Toast your host",
       "t": "我敬您一杯！",
       "tr": "Wǒ jìng nín yì bēi!",
       "mean": "A toast to you!",
       "desc": "Hold your glass a little lower than theirs."
      },
      {
       "title": "Thank them and leave",
       "t": "谢谢款待，我先走了。",
       "tr": "Xièxie kuǎndài, wǒ xiān zǒu le.",
       "mean": "Thank you for your hospitality. I'll be going now."
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "您贵姓？",
      "我姓李。",
      "一点儿小意思，请收下。",
      "我敬您一杯！",
      "干杯！",
      "大家慢慢吃。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "In the name {{王小明}}, which part is the surname?",
       "options": [
        "小明",
        "明",
        "王",
        "小"
       ],
       "answer": 2
      },
      {
       "q": "Which number is considered unlucky?",
       "options": [
        "8",
        "4",
        "6",
        "9"
       ],
       "answer": 1
      },
      {
       "q": "Why is 8 a lucky number?",
       "options": [
        "Its shape looks like a dragon",
        "It's the emperor's age",
        "It's the number of festivals",
        "It sounds like “prosper”"
       ],
       "answer": 3
      },
      {
       "q": "What should you NOT do with chopsticks?",
       "options": [
        "Stand them up in your rice",
        "Use them to pick up vegetables",
        "Put them down on the chopstick rest",
        "Hold them near the top"
       ],
       "answer": 0
      },
      {
       "q": "How do you give or receive a gift politely?",
       "options": [
        "With your left hand only",
        "With both hands",
        "Without looking at the person",
        "Quickly and silently"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What does it mean?",
       "say": "干杯！",
       "options": [
        "Enjoy your meal!",
        "Thank you!",
        "Cheers!",
        "Goodbye!"
       ],
       "answer": 2
      },
      {
       "q": "520 is popular online because it sounds like…",
       "options": [
        "“I'm hungry”",
        "“Happy birthday”",
        "“Goodbye”",
        "“I love you”"
       ],
       "answer": 3
      },
      {
       "q": "Which gift is traditionally avoided?",
       "options": [
        "A clock",
        "A basket of fruit",
        "A box of tea",
        "Chocolate"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u6-review",
   "icon": "复",
   "title": "Final Review Lab",
   "subtitle": "Bring everything together: conversation, reading, culture and the poem.",
   "minutes": 20,
   "goals": [
    "Follow a longer conversation that mixes many topics",
    "Check your listening and writing",
    "Review culture, chengyu and the poem"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Congratulations on reaching the final lab! This lesson mixes everything from Units 5 and 6. Read, listen, write and test yourself. Don't worry about mistakes: {{慢慢来}}!"
    },
    {
     "type": "dialogue",
     "title": "Plans for Mid-Autumn",
     "lines": [
      {
       "who": "Xiaomei",
       "t": "安娜，中秋节你有什么打算？",
       "tr": "Ānnà, Zhōngqiū Jié nǐ yǒu shénme dǎsuan?",
       "mean": "Anna, what are your plans for Mid-Autumn?"
      },
      {
       "who": "Anna",
       "t": "还没想好。你呢？",
       "tr": "Hái méi xiǎng hǎo. Nǐ ne?",
       "mean": "I haven't decided yet. And you?"
      },
      {
       "who": "Xiaomei",
       "t": "来我家吧！我妈妈会做很多菜。",
       "tr": "Lái wǒ jiā ba! Wǒ māma huì zuò hěn duō cài.",
       "mean": "Come to my place! My mum will cook lots of dishes."
      },
      {
       "who": "Anna",
       "t": "太好了！我带什么礼物好呢？",
       "tr": "Tài hǎo le! Wǒ dài shénme lǐwù hǎo ne?",
       "mean": "Great! What gift should I bring?"
      },
      {
       "who": "Xiaomei",
       "t": "带一盒月饼就行，别带钟啊！",
       "tr": "Dài yì hé yuèbing jiù xíng, bié dài zhōng a!",
       "mean": "A box of mooncakes is fine. Just don't bring a clock!"
      },
      {
       "who": "Anna",
       "t": "哈哈，我知道！晚上我们一起赏月吧。",
       "tr": "Hāhā, wǒ zhīdào! Wǎnshang wǒmen yìqǐ shǎng yuè ba.",
       "mean": "Haha, I know! Let's admire the moon together in the evening."
      },
      {
       "who": "Xiaomei",
       "t": "好啊。天气预报说那天是晴天。",
       "tr": "Hǎo a. Tiānqì yùbào shuō nà tiān shì qíngtiān.",
       "mean": "Sure. The forecast says it'll be sunny that day."
      },
      {
       "who": "Anna",
       "t": "那我们可以一起念《静夜思》！",
       "tr": "Nà wǒmen kěyǐ yìqǐ niàn “Jìng Yè Sī”!",
       "mean": "Then we can recite “Quiet Night Thoughts” together!"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你周末想去哪儿玩？",
     "tr": "Nǐ zhōumò xiǎng qù nǎr wán?",
     "mean": "Where do you want to go this weekend?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "周末",
       "mean": "weekend"
      },
      {
       "t": "想",
       "mean": "want"
      },
      {
       "t": "去",
       "mean": "go"
      },
      {
       "t": "哪儿",
       "mean": "where"
      },
      {
       "t": "玩",
       "mean": "have fun"
      }
     ],
     "title": "Sentence puzzle 1"
    },
    {
     "type": "sentence",
     "t": "我在中国学了很多东西。",
     "tr": "Wǒ zài Zhōngguó xué le hěn duō dōngxi.",
     "mean": "I learned a lot in China.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "在",
       "mean": "in"
      },
      {
       "t": "中国",
       "mean": "China"
      },
      {
       "t": "学了",
       "mean": "learned"
      },
      {
       "t": "很多",
       "mean": "a lot of"
      },
      {
       "t": "东西",
       "mean": "things"
      }
     ],
     "title": "Sentence puzzle 2"
    },
    {
     "type": "sentence",
     "t": "请问，附近有好吃的饭馆吗？",
     "tr": "Qǐngwèn, fùjìn yǒu hǎochī de fànguǎn ma?",
     "mean": "Excuse me, is there a good restaurant nearby?",
     "words": [
      {
       "t": "请问",
       "mean": "excuse me"
      },
      {
       "t": "附近",
       "mean": "nearby"
      },
      {
       "t": "有",
       "mean": "is there"
      },
      {
       "t": "好吃的",
       "mean": "tasty"
      },
      {
       "t": "饭馆",
       "mean": "restaurant"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ],
     "title": "Sentence puzzle 3"
    },
    {
     "type": "dictation",
     "title": "Listen and write",
     "items": [
      {
       "t": "多少钱？",
       "tr": "Duōshao qián?",
       "mean": "How much is it?"
      },
      {
       "t": "往左拐。",
       "tr": "Wǎng zuǒ guǎi.",
       "mean": "Turn left."
      },
      {
       "t": "我头疼。",
       "tr": "Wǒ tóuténg.",
       "mean": "I have a headache."
      },
      {
       "t": "你有空吗？",
       "tr": "Nǐ yǒu kòng ma?",
       "mean": "Are you free?"
      },
      {
       "t": "新年快乐！",
       "tr": "Xīnnián kuàilè!",
       "mean": "Happy New Year!"
      },
      {
       "t": "举头望明月。",
       "tr": "Jǔ tóu wàng míng yuè.",
       "mean": "I raise my head and gaze at the bright moon."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Challenge: a day out in China",
     "items": [
      {
       "title": "Ask the way",
       "t": "请问，地铁站怎么走？",
       "tr": "Qǐngwèn, dìtiězhàn zěnme zǒu?",
       "mean": "Excuse me, how do I get to the subway station?"
      },
      {
       "title": "Take the subway",
       "t": "去西单坐几号线？",
       "tr": "Qù Xīdān zuò jǐ hào xiàn?",
       "mean": "Which line goes to Xidan?"
      },
      {
       "title": "Go shopping",
       "t": "太贵了，便宜一点儿吧！",
       "tr": "Tài guì le, piányi yìdiǎnr ba!",
       "mean": "Too expensive. Make it cheaper!"
      },
      {
       "title": "Order lunch",
       "t": "来一碗牛肉面，不要太辣。",
       "tr": "Lái yì wǎn niúròu miàn, bú yào tài là.",
       "mean": "A bowl of beef noodles, not too spicy."
      },
      {
       "title": "Message a friend",
       "t": "我们晚上见吧，不见不散！",
       "tr": "Wǒmen wǎnshang jiàn ba, bú jiàn bú sàn!",
       "mean": "Let's meet tonight. See you there!"
      }
     ]
    },
    {
     "type": "selfcheck",
     "title": "Can you do it?",
     "items": [
      "I can order food, ask about spice and pay the bill.",
      "I can ask prices and bargain politely.",
      "I can ask for and follow directions.",
      "I can take a taxi or the subway.",
      "I can make plans and say no politely.",
      "I can tell a doctor what's wrong.",
      "I can read a short story in characters.",
      "I can recite 《静夜思》 from memory.",
      "I can explain three festivals and a few customs."
     ]
    },
    {
     "type": "practice",
     "title": "Final read-aloud",
     "text": "Read these favourite lines from the course aloud.",
     "lines": [
      "买单！",
      "便宜一点儿吧。",
      "不见不散！",
      "多喝热水！",
      "熟能生巧。",
      "床前明月光，疑是地上霜。",
      "举头望明月，低头思故乡。"
     ]
    },
    {
     "type": "quiz",
     "title": "Final quiz",
     "items": [
      {
       "q": "You're at a restaurant and want the bill. You say…",
       "options": [
        "打包！",
        "买单！",
        "点菜！",
        "干杯！"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the shopper asking?",
       "say": "便宜一点儿吧。",
       "options": [
        "It's too small",
        "I'll take two",
        "Do you have any other colours?",
        "Make it a bit cheaper"
       ],
       "answer": 3
      },
      {
       "q": "{{往左拐}} means…",
       "options": [
        "turn left",
        "turn right",
        "go straight",
        "get off"
       ],
       "answer": 0
      },
      {
       "q": "Which festival has dragon boat races?",
       "options": [
        "春节",
        "中秋节",
        "端午节",
        "元宵节"
       ],
       "answer": 2
      },
      {
       "q": "Complete the poem: 举头望明月，……",
       "options": [
        "低头思故乡",
        "疑是地上霜",
        "床前明月光",
        "低头看月亮"
       ],
       "answer": 0
      },
      {
       "q": "Which gift should you avoid?",
       "options": [
        "茶 (tea)",
        "水果 (fruit)",
        "钟 (a clock)",
        "月饼 (mooncakes)"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What does the speaker say?",
       "say": "我对花生过敏。",
       "options": [
        "I like peanuts",
        "I have a cold",
        "Peanuts are cheap here",
        "I'm allergic to peanuts"
       ],
       "answer": 3
      },
      {
       "q": "{{熟能生巧}} means…",
       "options": [
        "Take your time",
        "Practice makes perfect",
        "Safe journey",
        "Never too old to learn anything"
       ],
       "answer": 1
      }
     ]
    }
   ]
  }
 ]
});
