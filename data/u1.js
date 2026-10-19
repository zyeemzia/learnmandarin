/* Learn Mandarin course data. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "pinyin",
 "order": 1,
 "icon": "ā",
 "color": "teal",
 "title": "Pinyin & Tones",
 "subtitle": "The sounds of Mandarin: initials, finals, the four tones and how to read pinyin",
 "lessons": [
  {
   "id": "u1-syllable",
   "icon": "音",
   "title": "How a Mandarin Syllable Works",
   "subtitle": "Initial + final + tone: the three parts of every syllable",
   "minutes": 8,
   "goals": [
    "Name the three parts of a Mandarin syllable",
    "See why one character = one syllable",
    "Know what pinyin is for"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Welcome to Mandarin! Before characters, we learn the sounds. Chinese is written in characters, but learners (and Chinese children) use **pinyin**, the official Roman-letter spelling, to see how each character sounds."
    },
    {
     "type": "text",
     "text": "Good news: Mandarin syllables are very regular. Every syllable has the same three parts: an **initial**, a **final** and a **tone**.",
     "title": "Three parts"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Initial",
       "desc": "The consonant at the start, like m, h or zh. Some syllables have no initial at all."
      },
      {
       "title": "Final",
       "desc": "Everything after the initial: a vowel, a glide like ao, or a vowel + n / ng."
      },
      {
       "title": "Tone",
       "desc": "The pitch of your voice: high, rising, dipping or falling. It is shown by a mark over a vowel."
      }
     ],
     "title": "The recipe"
    },
    {
     "type": "table",
     "head": [
      "Character",
      "Initial",
      "Final",
      "Tone",
      "Pinyin"
     ],
     "rows": [
      [
       "{{妈}}",
       "m",
       "a",
       "1st",
       "mā"
      ],
      [
       "{{好}}",
       "h",
       "ao",
       "3rd",
       "hǎo"
      ],
      [
       "{{中}}",
       "zh",
       "ong",
       "1st",
       "zhōng"
      ],
      [
       "{{学}}",
       "x",
       "üe (written ue)",
       "2nd",
       "xué"
      ],
      [
       "{{是}}",
       "sh",
       "i",
       "4th",
       "shì"
      ],
      [
       "{{爱}}",
       "(none)",
       "ai",
       "4th",
       "ài"
      ]
     ],
     "title": "Taking syllables apart"
    },
    {
     "type": "rule",
     "name": "One character = one syllable",
     "color": "blue",
     "desc": "Each Chinese character is read as exactly one syllable. A word of two characters has two syllables.",
     "how": "Count the characters and you know how many syllables to say.",
     "examples": [
      {
       "t": "你好",
       "tr": "nǐ hǎo"
      },
      {
       "t": "中国",
       "tr": "Zhōngguó"
      },
      {
       "t": "谢谢",
       "tr": "xièxie"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Mandarin has only about 400 basic syllables (around 1,300 with tones), while English has thousands. That is why tones matter so much: they keep words apart."
    },
    {
     "type": "text",
     "text": "Same initial, same final, different tone: a completely different word. Tap each one and listen.",
     "title": "Tones change meaning"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "妈",
       "tr": "mā",
       "mean": "mother"
      },
      {
       "t": "麻",
       "tr": "má",
       "mean": "hemp; numb"
      },
      {
       "t": "马",
       "tr": "mǎ",
       "mean": "horse"
      },
      {
       "t": "骂",
       "tr": "mà",
       "mean": "to scold"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Think of a syllable as a sandwich: the initial is the top slice, the final is the filling, and the tone is the sauce. Leave out the sauce and it is a different meal!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Pinyin letters do not always sound like English letters. q, x, c and zh are the big surprises. We meet them all in this unit."
    },
    {
     "type": "letters",
     "items": [
      "m",
      "a",
      "tone-1",
      "h",
      "ao",
      "tone-3"
     ],
     "title": "Sounds in this lesson"
    },
    {
     "type": "practice",
     "text": "Tap each character, listen, then say it out loud. Name its initial, final and tone.",
     "lines": [
      "妈",
      "好",
      "中",
      "学",
      "是",
      "爱"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What are the three parts of a Mandarin syllable?",
       "options": [
        "Root, prefix, suffix",
        "Vowel, accent, stress",
        "Initial, final, tone",
        "Letter, word, phrase"
       ],
       "answer": 2
      },
      {
       "q": "How many syllables does a character have?",
       "options": [
        "One",
        "Two",
        "It depends",
        "Three"
       ],
       "answer": 0
      },
      {
       "q": "In {{好}} hǎo, what is the final?",
       "options": [
        "h",
        "hǎ",
        "o",
        "ao"
       ],
       "answer": 3
      },
      {
       "q": "Which syllable has no initial?",
       "options": [
        "mā",
        "ài",
        "shì",
        "hǎo"
       ],
       "answer": 1
      },
      {
       "q": "What is pinyin?",
       "options": [
        "A kind of character",
        "The official Roman-letter spelling of Mandarin sounds",
        "A Chinese dialect",
        "The name of the 4th tone"
       ],
       "answer": 1
      },
      {
       "q": "{{妈}} mā and {{马}} mǎ differ only in their...",
       "options": [
        "initial",
        "final",
        "number of syllables",
        "tone"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-tones",
   "icon": "ā",
   "title": "The Four Tones + the Neutral Tone",
   "subtitle": "High, rising, dipping, falling, and light",
   "minutes": 12,
   "goals": [
    "Say the four tones clearly",
    "Recognise the tone marks",
    "Hear the difference between tones",
    "Use the light neutral tone"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Tones are the music of Mandarin. Every syllable is said with a pitch shape, and the shape is part of the word. Do not worry: with a little daily practice, your ears and voice will learn them."
    },
    {
     "type": "letters",
     "items": [
      "tone-1",
      "tone-2",
      "tone-3",
      "tone-4",
      "tone-0"
     ],
     "title": "The tones"
    },
    {
     "type": "rule",
     "name": "1st tone: high and level",
     "color": "red",
     "desc": "Start high and stay high, like singing one long note.",
     "how": "Mark: ¯ (a flat line).",
     "examples": [
      {
       "t": "妈",
       "tr": "mā"
      },
      {
       "t": "八",
       "tr": "bā"
      },
      {
       "t": "书",
       "tr": "shū"
      }
     ]
    },
    {
     "type": "rule",
     "name": "2nd tone: rising",
     "color": "orange",
     "desc": "Start in the middle and go up, like asking \"Huh?\" or \"What?\".",
     "how": "Mark: ´ (a line going up).",
     "examples": [
      {
       "t": "麻",
       "tr": "má"
      },
      {
       "t": "茶",
       "tr": "chá"
      },
      {
       "t": "来",
       "tr": "lái"
      }
     ]
    },
    {
     "type": "rule",
     "name": "3rd tone: low and dipping",
     "color": "green",
     "desc": "Go low, dip down, and (when the syllable is said alone) come back up.",
     "how": "Mark: ˇ (a little valley).",
     "examples": [
      {
       "t": "马",
       "tr": "mǎ"
      },
      {
       "t": "好",
       "tr": "hǎo"
      },
      {
       "t": "你",
       "tr": "nǐ"
      }
     ]
    },
    {
     "type": "rule",
     "name": "4th tone: falling",
     "color": "blue",
     "desc": "Start high and drop sharply, like a firm \"No!\".",
     "how": "Mark: ` (a line going down).",
     "examples": [
      {
       "t": "骂",
       "tr": "mà"
      },
      {
       "t": "是",
       "tr": "shì"
      },
      {
       "t": "不",
       "tr": "bù"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Neutral tone: light",
     "color": "gray",
     "desc": "Short, soft and quick, with no mark. It often appears on the second half of a word or on little grammar words.",
     "how": "No mark at all.",
     "examples": [
      {
       "t": "吗",
       "tr": "ma"
      },
      {
       "t": "妈妈",
       "tr": "māma",
       "hl": "妈"
      },
      {
       "t": "谢谢",
       "tr": "xièxie"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Tone",
      "Mark",
      "Pitch",
      "Feels like"
     ],
     "rows": [
      [
       "1st",
       "ā",
       "high, flat",
       "singing a long note"
      ],
      [
       "2nd",
       "á",
       "middle → high",
       "a surprised \"What?\""
      ],
      [
       "3rd",
       "ǎ",
       "low, dip (→ up)",
       "a doubtful \"Well...?\""
      ],
      [
       "4th",
       "à",
       "high → low",
       "a firm \"No!\""
      ],
      [
       "neutral",
       "a",
       "short, light",
       "a quick, soft beat"
      ]
     ],
     "title": "Tones at a glance"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Draw the tone in the air with your hand as you say it: flat line, up, dip, down. Your voice follows your hand."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "汤",
       "label": "1st tone · tāng",
       "desc": "soup"
      },
      {
       "t": "糖",
       "label": "2nd tone · táng",
       "desc": "sugar, sweets"
      },
      {
       "t": "躺",
       "label": "3rd tone · tǎng",
       "desc": "to lie down"
      },
      {
       "t": "烫",
       "label": "4th tone · tàng",
       "desc": "very hot (to touch)"
      }
     ],
     "title": "Same sound, four meanings"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Mixing up tones can be funny: ask for {{汤}} tāng (soup) with the wrong tone and you might be asking for {{糖}} táng (sugar)!"
    },
    {
     "type": "text",
     "text": "Most people speak the 3rd tone low and only rise at the end of a sentence or when the syllable is said alone. Practise the low part first: it is the most important.",
     "title": "About the 3rd tone"
    },
    {
     "type": "practice",
     "text": "Tap and repeat each row. Exaggerate the tones: big tones now, natural tones later.",
     "lines": [
      "妈 麻 马 骂 吗",
      "八 拔 把 爸",
      "汤 糖 躺 烫",
      "书 熟 鼠 树"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which tone do you hear?",
       "say": "马",
       "options": [
        "1st tone",
        "2nd tone",
        "3rd tone",
        "4th tone"
       ],
       "answer": 2,
       "explain": "马 mǎ (horse) has the dipping 3rd tone."
      },
      {
       "q": "Listen. Which tone do you hear?",
       "say": "烫",
       "options": [
        "1st tone",
        "2nd tone",
        "3rd tone",
        "4th tone"
       ],
       "answer": 3,
       "explain": "烫 tàng (very hot) falls: 4th tone."
      },
      {
       "q": "Listen. Which tone do you hear?",
       "say": "书",
       "options": [
        "1st tone",
        "2nd tone",
        "3rd tone",
        "4th tone"
       ],
       "answer": 0,
       "explain": "书 shū (book) is high and level: 1st tone."
      },
      {
       "q": "Listen. Which tone do you hear?",
       "say": "茶",
       "options": [
        "1st tone",
        "2nd tone",
        "3rd tone",
        "4th tone"
       ],
       "answer": 1,
       "explain": "茶 chá (tea) rises: 2nd tone."
      },
      {
       "q": "Which tone mark looks like a little valley?",
       "options": [
        "ǎ",
        "á",
        "à",
        "ā"
       ],
       "answer": 0
      },
      {
       "q": "Which word means \"horse\"?",
       "options": [
        "mā",
        "má",
        "mǎ",
        "mà"
       ],
       "answer": 2
      },
      {
       "q": "How is the neutral tone written?",
       "options": [
        "With no mark",
        "With a dot",
        "With a circle",
        "With two lines"
       ],
       "answer": 0
      },
      {
       "q": "Which tone sounds like a firm \"No!\"?",
       "options": [
        "1st tone",
        "2nd tone",
        "4th tone",
        "Neutral tone"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-initials",
   "icon": "b",
   "title": "Initials, Group by Group",
   "subtitle": "b p m f · d t n l · g k h",
   "minutes": 12,
   "goals": [
    "Say the lip, tongue-tip and back-of-tongue initials",
    "Hear the difference between b and p, d and t, g and k",
    "Learn the puff-of-air trick"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Mandarin has 21 initials. Teachers group them by where in the mouth you make them. Let us start with the easy groups: most of these sound almost like English."
    },
    {
     "type": "letters",
     "items": [
      "b",
      "p",
      "m",
      "f"
     ],
     "title": "Lips: b p m f"
    },
    {
     "type": "text",
     "text": "Made with the lips. m and f are just like English. The trick is **b** versus **p**."
    },
    {
     "type": "letters",
     "items": [
      "d",
      "t",
      "n",
      "l"
     ],
     "title": "Tongue tip: d t n l"
    },
    {
     "type": "text",
     "text": "Made with the tongue tip behind the top teeth. n and l are just like English. The trick is **d** versus **t**."
    },
    {
     "type": "letters",
     "items": [
      "g",
      "k",
      "h"
     ],
     "title": "Back of the tongue: g k h"
    },
    {
     "type": "text",
     "text": "Made at the back of the mouth. The trick is **g** versus **k**, and h is a little rougher than English h."
    },
    {
     "type": "rule",
     "name": "The puff-of-air rule",
     "color": "orange",
     "desc": "In Mandarin, b/p, d/t and g/k are not about voice. They are about air: b, d, g have **no** puff; p, t, k have a **strong** puff.",
     "how": "Hold your hand or a tissue in front of your mouth. No movement: b d g. A clear puff: p t k.",
     "examples": [
      {
       "t": "爸",
       "tr": "bà"
      },
      {
       "t": "怕",
       "tr": "pà"
      },
      {
       "t": "大",
       "tr": "dà"
      },
      {
       "t": "他",
       "tr": "tā"
      },
      {
       "t": "哥",
       "tr": "gē"
      },
      {
       "t": "可",
       "tr": "kě"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "爸",
       "label": "b · no puff",
       "desc": "bà, dad. Soft, like the p in \"spin\"."
      },
      {
       "t": "怕",
       "label": "p · puff",
       "desc": "pà, to be afraid. Like the p in \"pie\"."
      }
     ],
     "title": "b or p?"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "肚",
       "label": "d · no puff",
       "desc": "dù, belly. Soft, like the t in \"stop\"."
      },
      {
       "t": "兔",
       "label": "t · puff",
       "desc": "tù, rabbit. Like the t in \"top\"."
      }
     ],
     "title": "d or t?"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "哥",
       "label": "g · no puff",
       "desc": "gē, older brother."
      },
      {
       "t": "科",
       "label": "k · puff",
       "desc": "kē, subject (of study)."
      }
     ],
     "title": "g or k?"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "The h in Mandarin is made further back, with a little friction, a bit like a gentle version of the \"ch\" in Scottish \"loch\". Try {{喝}} hē (to drink) and {{好}} hǎo (good)."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "p, t, k = \"puff, tissue, kick\": these three blow the tissue away."
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "爸爸",
       "tr": "bàba",
       "mean": "dad"
      },
      {
       "t": "朋友",
       "tr": "péngyou",
       "mean": "friend"
      },
      {
       "t": "妈妈",
       "tr": "māma",
       "mean": "mum"
      },
      {
       "t": "飞机",
       "tr": "fēijī",
       "mean": "plane"
      },
      {
       "t": "弟弟",
       "tr": "dìdi",
       "mean": "younger brother"
      },
      {
       "t": "他",
       "tr": "tā",
       "mean": "he"
      },
      {
       "t": "你",
       "tr": "nǐ",
       "mean": "you"
      },
      {
       "t": "老师",
       "tr": "lǎoshī",
       "mean": "teacher"
      },
      {
       "t": "哥哥",
       "tr": "gēge",
       "mean": "older brother"
      },
      {
       "t": "咖啡",
       "tr": "kāfēi",
       "mean": "coffee"
      },
      {
       "t": "好",
       "tr": "hǎo",
       "mean": "good"
      }
     ],
     "title": "Words to try"
    },
    {
     "type": "practice",
     "text": "Read each pair. Feel the puff on the second one.",
     "lines": [
      "爸 怕",
      "大 他",
      "哥 科",
      "饱 跑",
      "弟 替"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which initial do you hear?",
       "say": "怕",
       "options": [
        "b",
        "p",
        "m",
        "f"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which initial do you hear?",
       "say": "大",
       "options": [
        "t",
        "n",
        "l",
        "d"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which initial do you hear?",
       "say": "可",
       "options": [
        "g",
        "h",
        "d",
        "k"
       ],
       "answer": 3
      },
      {
       "q": "What is the real difference between b and p in Mandarin?",
       "options": [
        "b is louder",
        "p has a puff of air, b does not",
        "p is a vowel",
        "b is always 4th tone"
       ],
       "answer": 1
      },
      {
       "q": "Which group is made with the lips?",
       "options": [
        "d t n l",
        "g k h",
        "b p m f",
        "j q x"
       ],
       "answer": 2
      },
      {
       "q": "Mandarin b sounds most like the English p in...",
       "options": [
        "\"spin\"",
        "\"pie\"",
        "\"phone\"",
        "\"pool\""
       ],
       "answer": 0
      },
      {
       "q": "Which word means \"teacher\"?",
       "options": [
        "哥哥 gēge",
        "咖啡 kāfēi",
        "老师 lǎoshī",
        "弟弟 dìdi"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-tricky-initials",
   "icon": "q",
   "title": "The Tricky Initials",
   "subtitle": "j q x · z c s · zh ch sh r",
   "minutes": 15,
   "goals": [
    "Say j q x with the tongue tip down",
    "Say z c s like \"ds\", \"ts\", \"s\"",
    "Curl the tongue for zh ch sh r",
    "Say the special \"buzzing\" i"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "These ten initials are where pinyin looks least like English. Do not read them with English habits! Take them slowly, one group at a time."
    },
    {
     "type": "letters",
     "items": [
      "j",
      "q",
      "x"
     ],
     "title": "Flat tongue, tip down: j q x"
    },
    {
     "type": "text",
     "text": "Put your tongue tip behind your **lower** front teeth, press the middle of the tongue up, and smile. j has no puff, q has a puff, x is a soft hiss."
    },
    {
     "type": "table",
     "head": [
      "Pinyin",
      "Sounds like",
      "Character"
     ],
     "rows": [
      [
       "j",
       "j in \"jeep\", tongue tip down",
       "{{鸡}} jī, chicken"
      ],
      [
       "q",
       "ch in \"cheese\", tongue tip down, puff",
       "{{七}} qī, seven"
      ],
      [
       "x",
       "sh in \"sheep\" said with a smile",
       "{{西}} xī, west"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "q is never \"kw\" and x is never \"ks\". {{七}} qī sounds like \"chee\", {{谢谢}} xièxie sounds like \"shyeh-shyeh\"."
    },
    {
     "type": "letters",
     "items": [
      "z",
      "c",
      "s"
     ],
     "title": "Tongue at the teeth: z c s"
    },
    {
     "type": "table",
     "head": [
      "Pinyin",
      "Sounds like",
      "Character"
     ],
     "rows": [
      [
       "z",
       "ds in \"kids\"",
       "{{字}} zì, character"
      ],
      [
       "c",
       "ts in \"cats\", with a puff",
       "{{菜}} cài, dish"
      ],
      [
       "s",
       "s in \"sun\"",
       "{{四}} sì, four"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "c is never \"k\" or \"s\": {{菜}} cài sounds like \"tsai\". And z is not the buzzy z of \"zoo\": it is \"ds\", as in \"kids\"."
    },
    {
     "type": "letters",
     "items": [
      "zh",
      "ch",
      "sh",
      "r"
     ],
     "title": "Curled tongue: zh ch sh r"
    },
    {
     "type": "text",
     "text": "Curl the tongue tip up and back towards the roof of your mouth. These are a \"curled\" version of English j, ch, sh and r."
    },
    {
     "type": "table",
     "head": [
      "Pinyin",
      "Sounds like",
      "Character"
     ],
     "rows": [
      [
       "zh",
       "j in \"judge\", tongue curled",
       "{{知}} zhī, to know"
      ],
      [
       "ch",
       "ch in \"church\", tongue curled, puff",
       "{{吃}} chī, to eat"
      ],
      [
       "sh",
       "sh in \"shirt\", tongue curled",
       "{{十}} shí, ten"
      ],
      [
       "r",
       "r in \"run\" mixed with s in \"pleasure\"",
       "{{日}} rì, sun, day"
      ]
     ]
    },
    {
     "type": "rule",
     "name": "The \"buzzing\" i",
     "color": "purple",
     "desc": "After z c s zh ch sh r, the letter i is **not** \"ee\". Hold the tongue where the initial was and just let the voice buzz on.",
     "how": "Compare 西 xī (\"shee\") with 四 sì (\"sz\") and 十 shí (\"shr\").",
     "examples": [
      {
       "t": "字",
       "tr": "zì"
      },
      {
       "t": "四",
       "tr": "sì"
      },
      {
       "t": "知",
       "tr": "zhī"
      },
      {
       "t": "吃",
       "tr": "chī"
      },
      {
       "t": "十",
       "tr": "shí"
      },
      {
       "t": "日",
       "tr": "rì"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "西",
       "label": "x · tongue down",
       "desc": "xī, west. Smiling \"shee\"."
      },
      {
       "t": "四",
       "label": "s · teeth",
       "desc": "sì, four. A plain hiss and buzz."
      },
      {
       "t": "十",
       "label": "sh · curled",
       "desc": "shí, ten. Tongue curled back."
      }
     ],
     "title": "x, s or sh?"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "七",
       "label": "q · tongue down",
       "desc": "qī, seven."
      },
      {
       "t": "吃",
       "label": "ch · curled",
       "desc": "chī, to eat."
      },
      {
       "t": "词",
       "label": "c · teeth",
       "desc": "cí, word."
      }
     ],
     "title": "q, ch or c?"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "j q x are \"smiley\" sounds: tongue down, lips smiling. zh ch sh r are \"curly\" sounds: tongue curled up. z c s are \"snake\" sounds: hissing at the teeth."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In southern China and Taiwan many people pronounce zh ch sh like z c s. Learn the standard curled sounds, but do not be surprised to hear both."
    },
    {
     "type": "practice",
     "text": "Read each line, feeling where your tongue is.",
     "lines": [
      "鸡 七 西",
      "字 词 四",
      "知 吃 十 日",
      "七 吃 词",
      "西 四 十"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which initial do you hear?",
       "say": "七",
       "options": [
        "q",
        "ch",
        "c",
        "j"
       ],
       "answer": 0
      },
      {
       "q": "Listen. Which initial do you hear?",
       "say": "十",
       "options": [
        "x",
        "s",
        "r",
        "sh"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which initial do you hear?",
       "say": "菜",
       "options": [
        "z",
        "c",
        "q",
        "ch"
       ],
       "answer": 1
      },
      {
       "q": "Where is the tongue tip for j q x?",
       "options": [
        "Curled back",
        "Down behind the lower teeth",
        "Between the teeth",
        "Touching the lips"
       ],
       "answer": 1
      },
      {
       "q": "Pinyin c sounds like...",
       "options": [
        "k in \"cat\"",
        "s in \"city\"",
        "ch in \"chat\"",
        "ts in \"cats\""
       ],
       "answer": 3
      },
      {
       "q": "In {{四}} sì, the i sounds like...",
       "options": [
        "a buzz, not \"ee\"",
        "ee in \"see\"",
        "i in \"sit\"",
        "eye"
       ],
       "answer": 0
      },
      {
       "q": "Which group needs a curled tongue?",
       "options": [
        "z c s",
        "j q x",
        "zh ch sh r",
        "b p m f"
       ],
       "answer": 2
      },
      {
       "q": "{{谢谢}} xièxie sounds roughly like...",
       "options": [
        "\"shyeh-shyeh\"",
        "\"ksee-ay ksee-ay\"",
        "\"zee-ay zee-ay\"",
        "\"kyeh-kyeh\""
       ],
       "answer": 0
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-finals",
   "icon": "ü",
   "title": "Finals and the ü Sound",
   "subtitle": "Simple, compound and nasal finals",
   "minutes": 15,
   "goals": [
    "Say the six simple vowels, including ü",
    "Glide through compound finals like ao and iao",
    "Tell n from ng"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Finals are the vowel part of the syllable. There are quite a few, but they are built from just six simple vowels. Learn those first and the rest snap together."
    },
    {
     "type": "letters",
     "items": [
      "a",
      "o",
      "e",
      "i",
      "u",
      "u-umlaut"
     ],
     "title": "The six simple vowels"
    },
    {
     "type": "table",
     "head": [
      "Pinyin",
      "Sounds like",
      "Character"
     ],
     "rows": [
      [
       "a",
       "a in \"father\"",
       "{{啊}} ā"
      ],
      [
       "o",
       "\"aw\" with round lips",
       "{{哦}} ò"
      ],
      [
       "e",
       "\"uh\" from the back of the throat",
       "{{饿}} è, hungry"
      ],
      [
       "i",
       "ee in \"see\"",
       "{{一}} yī, one"
      ],
      [
       "u",
       "oo in \"food\"",
       "{{五}} wǔ, five"
      ],
      [
       "ü",
       "\"ee\" with \"oo\" lips",
       "{{鱼}} yú, fish"
      ]
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Pinyin e is **not** English e. {{饿}} è (hungry) sounds like a deep \"uh\". But inside ie, üe and ei, e sounds like the e in \"yes\"."
    },
    {
     "type": "rule",
     "name": "Making ü",
     "color": "purple",
     "desc": "Say \"ee\" and hold your tongue still. Now round your lips tightly as if to whistle. That is ü!",
     "how": "Smile-and-kiss: tongue says \"ee\", lips say \"oo\".",
     "examples": [
      {
       "t": "鱼",
       "tr": "yú"
      },
      {
       "t": "女",
       "tr": "nǚ"
      },
      {
       "t": "绿",
       "tr": "lǜ"
      },
      {
       "t": "去",
       "tr": "qù"
      }
     ]
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "路",
       "label": "u · lù",
       "desc": "road. Lips round, tongue back."
      },
      {
       "t": "绿",
       "label": "ü · lǜ",
       "desc": "green. Lips round, tongue forward as for \"ee\"."
      }
     ],
     "title": "u or ü?"
    },
    {
     "type": "letters",
     "items": [
      "er"
     ],
     "title": "The curly er"
    },
    {
     "type": "text",
     "text": "{{二}} èr (two) is a special final: say \"uh\" while curling the tongue tip back, like American \"are\"."
    },
    {
     "type": "letters",
     "items": [
      "ai",
      "ei",
      "ao",
      "ou",
      "ia",
      "ie",
      "iao",
      "iu",
      "ua",
      "uo",
      "uai",
      "ui",
      "u-umlaut-e"
     ],
     "title": "Compound finals: glide from vowel to vowel"
    },
    {
     "type": "table",
     "head": [
      "Final",
      "Sounds like",
      "Character"
     ],
     "rows": [
      [
       "ai",
       "eye",
       "{{爱}} ài, love"
      ],
      [
       "ei",
       "ay in \"say\"",
       "{{飞}} fēi, to fly"
      ],
      [
       "ao",
       "ow in \"cow\"",
       "{{好}} hǎo, good"
      ],
      [
       "ou",
       "o in \"go\"",
       "{{狗}} gǒu, dog"
      ],
      [
       "ie",
       "ye in \"yes\"",
       "{{也}} yě, also"
      ],
      [
       "iao",
       "yow",
       "{{小}} xiǎo, small"
      ],
      [
       "iu",
       "yo",
       "{{六}} liù, six"
      ],
      [
       "uo",
       "waw",
       "{{多}} duō, many"
      ],
      [
       "ui",
       "way",
       "{{水}} shuǐ, water"
      ]
     ]
    },
    {
     "type": "letters",
     "items": [
      "an",
      "en",
      "ang",
      "eng",
      "ong",
      "in",
      "ing",
      "ian",
      "iang",
      "iong",
      "uan",
      "un",
      "uang",
      "u-umlaut-an",
      "u-umlaut-n"
     ],
     "title": "Nasal finals: ending in n or ng"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "饭",
       "label": "an · fàn",
       "desc": "meal. Tongue tip touches behind the top teeth for n."
      },
      {
       "t": "放",
       "label": "ang · fàng",
       "desc": "to put. Back of the tongue rises for ng, like \"sing\"."
      }
     ],
     "title": "n or ng?"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "心",
       "label": "in · xīn",
       "desc": "heart. Short, clean n."
      },
      {
       "t": "星",
       "label": "ing · xīng",
       "desc": "star. Ends with ng."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "ian sounds like \"yen\", not \"yan\". {{天}} tiān (sky) sounds like \"tyen\", and {{钱}} qián (money) like \"chyen\"."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "n is \"front door\" (tongue tip at the front), ng is \"back door\" (tongue at the back, as in \"sing\")."
    },
    {
     "type": "practice",
     "text": "Read across each line slowly, gliding smoothly.",
     "lines": [
      "啊 哦 饿 一 五 鱼",
      "爱 飞 好 狗",
      "也 小 六 多 水",
      "饭 放 心 星",
      "天 钱 远 云",
      "路 绿"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which final do you hear?",
       "say": "鱼",
       "options": [
        "u",
        "i",
        "ü",
        "e"
       ],
       "answer": 2
      },
      {
       "q": "Listen. Which final do you hear?",
       "say": "放",
       "options": [
        "an",
        "ang",
        "en",
        "eng"
       ],
       "answer": 1
      },
      {
       "q": "How do you make ü?",
       "options": [
        "Say \"oo\" with a smile",
        "Say \"uh\" with the tongue curled",
        "Say \"ah\" through the nose",
        "Say \"ee\" with rounded lips"
       ],
       "answer": 3
      },
      {
       "q": "The final ian sounds like...",
       "options": [
        "\"yan\"",
        "\"yawn\"",
        "\"eye-an\"",
        "\"yen\""
       ],
       "answer": 3
      },
      {
       "q": "Pinyin ao rhymes with...",
       "options": [
        "\"go\"",
        "\"cow\"",
        "\"say\"",
        "\"see\""
       ],
       "answer": 1
      },
      {
       "q": "Which word means \"green\"?",
       "options": [
        "lù",
        "liù",
        "lǜ",
        "lè"
       ],
       "answer": 2
      },
      {
       "q": "Which pair differs by n and ng?",
       "options": [
        "心 xīn and 星 xīng",
        "路 lù and 绿 lǜ",
        "爱 ài and 飞 fēi",
        "五 wǔ and 鱼 yú"
       ],
       "answer": 0
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-tone-marks",
   "icon": "´",
   "title": "Where the Tone Mark Goes",
   "subtitle": "One simple order: a, then o or e, then the rest",
   "minutes": 8,
   "goals": [
    "Put tone marks on the right vowel",
    "Handle iu and ui correctly",
    "Write ü with tone marks"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A tone mark always sits on a vowel. When a syllable has two or three vowels, which one gets it? There is a simple rule of priority."
    },
    {
     "type": "rule",
     "name": "Tone mark priority",
     "color": "green",
     "desc": "Look for **a** first. No a? Look for **o** or **e** (they never appear together except in ou, and there o wins). Neither? Put it on the **last** vowel.",
     "how": "a  →  o / e  →  last vowel",
     "examples": [
      {
       "t": "好",
       "tr": "hǎo"
      },
      {
       "t": "谢",
       "tr": "xiè"
      },
      {
       "t": "多",
       "tr": "duō"
      },
      {
       "t": "狗",
       "tr": "gǒu"
      },
      {
       "t": "对",
       "tr": "duì"
      },
      {
       "t": "六",
       "tr": "liù"
      }
     ]
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Is there an a?",
       "t": "好",
       "tr": "hǎo",
       "mean": "good",
       "desc": "Yes: mark the a. Also kuài, tiān, xiǎo."
      },
      {
       "title": "No a. Is there an o or e?",
       "t": "谢",
       "tr": "xiè",
       "mean": "to thank",
       "desc": "Mark it: xiè, duō, hēi, gǒu, yuè."
      },
      {
       "title": "Neither? Mark the last vowel.",
       "t": "六",
       "tr": "liù",
       "mean": "six",
       "desc": "iu marks the u, ui marks the i: liù, duì, shuǐ."
      }
     ],
     "title": "Three questions"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "\"**A** gets it first; **O** and **E** take turns; otherwise the **last** one wins.\""
    },
    {
     "type": "table",
     "head": [
      "Final",
      "Marked vowel",
      "Example"
     ],
     "rows": [
      [
       "ao",
       "a",
       "{{好}} hǎo"
      ],
      [
       "ia",
       "a",
       "{{家}} jiā"
      ],
      [
       "ian",
       "a",
       "{{天}} tiān"
      ],
      [
       "ou",
       "o",
       "{{狗}} gǒu"
      ],
      [
       "uo",
       "o",
       "{{国}} guó"
      ],
      [
       "ei",
       "e",
       "{{黑}} hēi"
      ],
      [
       "üe",
       "e",
       "{{学}} xué"
      ],
      [
       "iu",
       "u (last)",
       "{{九}} jiǔ"
      ],
      [
       "ui",
       "i (last)",
       "{{水}} shuǐ"
      ]
     ]
    },
    {
     "type": "rule",
     "name": "The dot on i",
     "color": "gray",
     "desc": "When i carries a tone mark, the mark replaces the dot.",
     "examples": [
      {
       "t": "一",
       "tr": "yī"
      },
      {
       "t": "你",
       "tr": "nǐ"
      },
      {
       "t": "米",
       "tr": "mǐ"
      },
      {
       "t": "是",
       "tr": "shì"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Marks on ü",
     "color": "gray",
     "desc": "ü keeps its two dots and the tone mark goes on top of them.",
     "examples": [
      {
       "t": "女",
       "tr": "nǚ"
      },
      {
       "t": "绿",
       "tr": "lǜ"
      },
      {
       "t": "旅",
       "tr": "lǚ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "On a phone or computer you can usually type ü as \"v\" in pinyin input: \"nv\" gives 女 nǚ."
    },
    {
     "type": "practice",
     "text": "Say each word, then say which vowel carries the mark.",
     "lines": [
      "好",
      "谢谢",
      "多",
      "狗",
      "六",
      "对",
      "水",
      "学"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which spelling is correct for \"good\"?",
       "options": [
        "haǒ",
        "hǎǒ",
        "hǎo",
        "hāo"
       ],
       "answer": 2
      },
      {
       "q": "Which spelling is correct for \"six\"?",
       "options": [
        "liù",
        "lìu",
        "líu",
        "liú"
       ],
       "answer": 0
      },
      {
       "q": "Which spelling is correct for \"water\"?",
       "options": [
        "shǔi",
        "shùi",
        "shúi",
        "shuǐ"
       ],
       "answer": 3
      },
      {
       "q": "In xiè, the mark is on e because...",
       "options": [
        "e is the first vowel",
        "there is no a, so e gets it",
        "i cannot take marks",
        "it is a 4th tone"
       ],
       "answer": 1
      },
      {
       "q": "In ou, which vowel gets the mark?",
       "options": [
        "u",
        "o",
        "neither",
        "both"
       ],
       "answer": 1
      },
      {
       "q": "What happens to the dot on i under a tone mark?",
       "options": [
        "It moves to the side",
        "It becomes two dots",
        "It stays under the mark",
        "The mark replaces it"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-tone-changes",
   "icon": "变",
   "title": "Tone Changes",
   "subtitle": "3rd-tone pairs, 不 bù and 一 yī",
   "minutes": 12,
   "goals": [
    "Change 3rd + 3rd into 2nd + 3rd",
    "Use the low \"half-3rd\" tone",
    "Know when 不 and 一 change tone"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Tones sometimes change when syllables sit next to each other. This is called **tone sandhi**. There are only three common changes, and they make speech flow smoothly."
    },
    {
     "type": "rule",
     "name": "Rule 1: two 3rd tones in a row",
     "color": "green",
     "desc": "When a 3rd tone comes before another 3rd tone, the first one is said as a **2nd tone**. Pinyin still writes the original marks.",
     "how": "3 + 3  →  2 + 3",
     "examples": [
      {
       "t": "你好",
       "tr": "nǐ hǎo → ní hǎo"
      },
      {
       "t": "很好",
       "tr": "hěn hǎo → hén hǎo"
      },
      {
       "t": "水果",
       "tr": "shuǐguǒ → shuíguǒ"
      },
      {
       "t": "可以",
       "tr": "kěyǐ → kéyǐ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Two valleys in a row are hard to walk, so the first one climbs into a hill: ní hǎo!"
    },
    {
     "type": "rule",
     "name": "Rule 2: the half-3rd tone",
     "color": "blue",
     "desc": "Before a 1st, 2nd, 4th or neutral tone, a 3rd tone is usually just **low**, without rising back up.",
     "how": "Say only the low part of the dip.",
     "examples": [
      {
       "t": "老师",
       "tr": "lǎoshī"
      },
      {
       "t": "很忙",
       "tr": "hěn máng"
      },
      {
       "t": "好看",
       "tr": "hǎokàn"
      },
      {
       "t": "你们",
       "tr": "nǐmen"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Rule 3: 不 bù",
     "color": "red",
     "desc": "{{不}} (not) is normally bù, 4th tone. Before another **4th tone** it becomes **bú**, 2nd tone.",
     "how": "bù + 4th  →  bú + 4th",
     "examples": [
      {
       "t": "不是",
       "tr": "bú shì",
       "hl": "不"
      },
      {
       "t": "不对",
       "tr": "bú duì",
       "hl": "不"
      },
      {
       "t": "不要",
       "tr": "bú yào",
       "hl": "不"
      },
      {
       "t": "不好",
       "tr": "bù hǎo",
       "hl": "不"
      },
      {
       "t": "不来",
       "tr": "bù lái",
       "hl": "不"
      },
      {
       "t": "不吃",
       "tr": "bù chī",
       "hl": "不"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "一 is followed by...",
      "Say 一 as",
      "Examples"
     ],
     "rows": [
      [
       "nothing (alone, counting, at the end)",
       "yī (1st)",
       "{{一}} yī, {{十一}} shíyī, {{第一}} dì-yī"
      ],
      [
       "a 4th tone",
       "yí (2nd)",
       "{{一个}} yí gè, {{一样}} yíyàng"
      ],
      [
       "a 1st, 2nd or 3rd tone",
       "yì (4th)",
       "{{一天}} yì tiān, {{一年}} yì nián, {{一起}} yìqǐ"
      ]
     ],
     "title": "Rule 4: 一 yī"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Dates and order numbers keep the plain yī: {{一月}} yīyuè (January), {{第一天}} dì-yī tiān (the first day). Do not change it there."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Many textbooks write the changed tones for 不 and 一 (bú shì, yí gè) to help learners, but dictionaries list the original bù and yī. For 3rd + 3rd, pinyin normally keeps the original marks: nǐ hǎo."
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "不去",
       "label": "bú qù",
       "desc": "not go: 去 is 4th tone, so 不 rises."
      },
      {
       "t": "不忙",
       "label": "bù máng",
       "desc": "not busy: 忙 is 2nd tone, so 不 stays bù."
      }
     ],
     "title": "不: change or not?"
    },
    {
     "type": "compare",
     "items": [
      {
       "t": "一共",
       "label": "yígòng",
       "desc": "altogether: 共 is 4th tone."
      },
      {
       "t": "一点儿",
       "label": "yìdiǎnr",
       "desc": "a little: 点 is 3rd tone."
      }
     ],
     "title": "一: yí or yì?"
    },
    {
     "type": "practice",
     "text": "Read with the tone changes. Listen and copy the flow.",
     "lines": [
      "你好",
      "很好",
      "水果",
      "不是",
      "不好",
      "一个",
      "一天",
      "一起"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you actually say {{你好}}?",
       "options": [
        "ní hǎo",
        "nǐ hǎo with two dips",
        "nì hǎo",
        "nī hāo"
       ],
       "answer": 0
      },
      {
       "q": "What happens to 3rd + 3rd?",
       "options": [
        "Both become 1st tone",
        "The second becomes 4th",
        "The first becomes 2nd tone",
        "Nothing changes"
       ],
       "answer": 2
      },
      {
       "q": "How is {{不是}} said?",
       "options": [
        "bú shì",
        "bù shì",
        "bǔ shì",
        "bū shì"
       ],
       "answer": 0
      },
      {
       "q": "How is {{不好}} said?",
       "options": [
        "bú hǎo",
        "bǔ hǎo",
        "bù hǎo",
        "bū hǎo"
       ],
       "answer": 2
      },
      {
       "q": "How is {{一个}} said?",
       "options": [
        "yī gè",
        "yí gè",
        "yì gè",
        "yǐ gè"
       ],
       "answer": 1
      },
      {
       "q": "How is {{一天}} said?",
       "options": [
        "yí tiān",
        "yī tiān",
        "yǐ tiān",
        "yì tiān"
       ],
       "answer": 3
      },
      {
       "q": "In {{第一}} (first), 一 is said...",
       "options": [
        "yí",
        "yì",
        "yǐ",
        "yī"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-spelling",
   "icon": "y",
   "title": "Pinyin Spelling Rules",
   "subtitle": "y and w, ü after j q x, and short forms",
   "minutes": 12,
   "goals": [
    "Spell syllables that start with i, u or ü",
    "Know when ü is written without dots",
    "Read iu, ui and un correctly",
    "Use the apostrophe"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Pinyin has a few spelling habits. They do not change the sound: they just make syllables easier to see on the page. Once you know them, reading gets much easier."
    },
    {
     "type": "rule",
     "name": "Starting with i → y",
     "color": "blue",
     "desc": "When a syllable has no initial and starts with i, write y. If i is the only vowel (or before n / ng), write yi.",
     "examples": [
      {
       "t": "一",
       "tr": "i → yī"
      },
      {
       "t": "也",
       "tr": "ie → yě"
      },
      {
       "t": "要",
       "tr": "iao → yào"
      },
      {
       "t": "有",
       "tr": "iou → yǒu"
      },
      {
       "t": "烟",
       "tr": "ian → yān"
      },
      {
       "t": "英",
       "tr": "ing → yīng"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Starting with u → w",
     "color": "green",
     "desc": "When a syllable has no initial and starts with u, write w. If u is the only vowel, write wu.",
     "examples": [
      {
       "t": "五",
       "tr": "u → wǔ"
      },
      {
       "t": "我",
       "tr": "uo → wǒ"
      },
      {
       "t": "外",
       "tr": "uai → wài"
      },
      {
       "t": "为",
       "tr": "uei → wèi"
      },
      {
       "t": "问",
       "tr": "uen → wèn"
      },
      {
       "t": "王",
       "tr": "uang → wáng"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Starting with ü → yu",
     "color": "purple",
     "desc": "When a syllable starts with ü, write yu, and drop the dots.",
     "examples": [
      {
       "t": "鱼",
       "tr": "ü → yú"
      },
      {
       "t": "月",
       "tr": "üe → yuè"
      },
      {
       "t": "远",
       "tr": "üan → yuǎn"
      },
      {
       "t": "云",
       "tr": "ün → yún"
      }
     ]
    },
    {
     "type": "rule",
     "name": "ü after j q x: no dots",
     "color": "orange",
     "desc": "j, q, x (and y) never go with u, so after them ü is written plain u. It still **sounds** like ü!",
     "how": "ju, qu, xu, yu = ü sounds.",
     "examples": [
      {
       "t": "去",
       "tr": "qù"
      },
      {
       "t": "句",
       "tr": "jù"
      },
      {
       "t": "学",
       "tr": "xué"
      },
      {
       "t": "鱼",
       "tr": "yú"
      }
     ]
    },
    {
     "type": "rule",
     "name": "ü after n and l: keep the dots",
     "color": "red",
     "desc": "n and l can go with both u and ü, so here the dots matter.",
     "examples": [
      {
       "t": "女",
       "tr": "nǚ"
      },
      {
       "t": "努",
       "tr": "nǔ"
      },
      {
       "t": "绿",
       "tr": "lǜ"
      },
      {
       "t": "路",
       "tr": "lù"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Full form",
      "Written after an initial",
      "Example"
     ],
     "rows": [
      [
       "iou",
       "iu",
       "{{六}} liù, {{九}} jiǔ"
      ],
      [
       "uei",
       "ui",
       "{{对}} duì, {{水}} shuǐ"
      ],
      [
       "uen",
       "un",
       "{{春}} chūn, {{困}} kùn"
      ]
     ],
     "title": "Short forms"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "The hidden vowel is still there in the sound: {{六}} liù is really \"lyoh\", {{对}} duì is \"dway\"."
    },
    {
     "type": "rule",
     "name": "The apostrophe",
     "color": "gray",
     "desc": "When a syllable starting with a, o or e follows another syllable, use an apostrophe so the break is clear.",
     "how": "Xī'ān (two syllables, a city) is not xiān (one syllable, first).",
     "examples": [
      {
       "t": "西安",
       "tr": "Xī'ān"
      },
      {
       "t": "先",
       "tr": "xiān"
      },
      {
       "t": "天安门",
       "tr": "Tiān'ānmén"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "j, q, x are \"too shy\" to sit next to plain u, so any u you see after them is really ü wearing a disguise."
    },
    {
     "type": "practice",
     "text": "Read each word. Think: what is the full form behind the spelling?",
     "lines": [
      "一 也 要 有",
      "五 我 外 为",
      "鱼 月 远 云",
      "去 学 女 路",
      "西安 先"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How do you write the syllable i on its own with the 1st tone?",
       "options": [
        "ī",
        "yī",
        "yiī",
        "wī"
       ],
       "answer": 1
      },
      {
       "q": "How do you write the syllable u with the 3rd tone?",
       "options": [
        "ǔ",
        "yǔ",
        "wǔ",
        "hǔ"
       ],
       "answer": 2
      },
      {
       "q": "In {{去}} qù, the u sounds like...",
       "options": [
        "ü",
        "oo in \"food\"",
        "u in \"cup\"",
        "yoo"
       ],
       "answer": 0
      },
      {
       "q": "Why does {{女}} nǚ keep its dots?",
       "options": [
        "Because it is 3rd tone",
        "Because n is a lip sound",
        "Because nu and nü are both possible",
        "It is a spelling mistake"
       ],
       "answer": 2
      },
      {
       "q": "iu is short for...",
       "options": [
        "iou",
        "ieu",
        "iau",
        "yuu"
       ],
       "answer": 0
      },
      {
       "q": "What does the apostrophe in Xī'ān show?",
       "options": [
        "A neutral tone",
        "A missing letter",
        "A foreign word",
        "Where one syllable ends and the next begins"
       ],
       "answer": 3
      },
      {
       "q": "The final uei with no initial is written...",
       "options": [
        "ui",
        "wei",
        "wui",
        "uei"
       ],
       "answer": 1
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u1-reading-lab",
   "icon": "读",
   "title": "Pinyin Reading Lab",
   "subtitle": "Put it all together with real words and sentences",
   "minutes": 15,
   "goals": [
    "Read everyday words from pinyin",
    "Read short sentences with tone changes",
    "Write pinyin you hear"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Time to use everything: initials, finals, tones, spelling rules and tone changes. Read each item, tap to check, and repeat until it feels natural."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "你好",
       "tr": "nǐ hǎo",
       "mean": "hello",
       "example": {
        "t": "你好！",
        "tr": "nǐ hǎo!",
        "mean": "Hello!"
       }
      },
      {
       "t": "谢谢",
       "tr": "xièxie",
       "mean": "thank you"
      },
      {
       "t": "再见",
       "tr": "zàijiàn",
       "mean": "goodbye"
      },
      {
       "t": "对不起",
       "tr": "duìbuqǐ",
       "mean": "sorry"
      },
      {
       "t": "没关系",
       "tr": "méi guānxi",
       "mean": "it does not matter"
      },
      {
       "t": "老师",
       "tr": "lǎoshī",
       "mean": "teacher"
      },
      {
       "t": "学生",
       "tr": "xuésheng",
       "mean": "student"
      },
      {
       "t": "朋友",
       "tr": "péngyou",
       "mean": "friend"
      },
      {
       "t": "中国",
       "tr": "Zhōngguó",
       "mean": "China"
      },
      {
       "t": "中文",
       "tr": "Zhōngwén",
       "mean": "Chinese (language)"
      }
     ],
     "title": "Word bank"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Some words end in a neutral tone: xièxie, péngyou, xuésheng. Say the last syllable lightly and quickly."
    },
    {
     "type": "sentence",
     "t": "你好吗？",
     "tr": "nǐ hǎo ma?",
     "mean": "How are you?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "好",
       "mean": "good, well"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ],
     "note": "你好 is said ní hǎo (3rd + 3rd). 吗 is a light neutral tone."
    },
    {
     "type": "sentence",
     "t": "我很好。",
     "tr": "wǒ hěn hǎo.",
     "mean": "I am very well.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "很",
       "mean": "very"
      },
      {
       "t": "好",
       "mean": "good, well"
      }
     ],
     "note": "Three 3rd tones! Most people say wǒ hén hǎo or wó hén hǎo."
    },
    {
     "type": "sentence",
     "t": "我不是老师。",
     "tr": "wǒ bú shì lǎoshī.",
     "mean": "I am not a teacher.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "不",
       "mean": "not"
      },
      {
       "t": "是",
       "mean": "am, is, are"
      },
      {
       "t": "老师",
       "mean": "teacher"
      }
     ],
     "note": "不 becomes bú before the 4th-tone 是."
    },
    {
     "type": "sentence",
     "t": "我学中文。",
     "tr": "wǒ xué Zhōngwén.",
     "mean": "I study Chinese.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "学",
       "mean": "study"
      },
      {
       "t": "中文",
       "mean": "Chinese"
      }
     ]
    },
    {
     "type": "dialogue",
     "lines": [
      {
       "who": "Lín",
       "t": "你好！",
       "tr": "nǐ hǎo!",
       "mean": "Hello!"
      },
      {
       "who": "Amy",
       "t": "你好！你好吗？",
       "tr": "nǐ hǎo! nǐ hǎo ma?",
       "mean": "Hello! How are you?"
      },
      {
       "who": "Lín",
       "t": "我很好，谢谢。",
       "tr": "wǒ hěn hǎo, xièxie.",
       "mean": "I am very well, thanks."
      },
      {
       "who": "Amy",
       "t": "再见！",
       "tr": "zàijiàn!",
       "mean": "Goodbye!"
      },
      {
       "who": "Lín",
       "t": "再见！",
       "tr": "zàijiàn!",
       "mean": "Goodbye!"
      }
     ],
     "title": "A first chat"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Friends usually do not ask 你好吗 every day. A friendly 你好 or, among friends, 嗨 hāi (hi) is more common. 你好吗 is still a perfect first phrase to learn."
    },
    {
     "type": "practice",
     "text": "Read each line aloud with good tones.",
     "lines": [
      "你好",
      "谢谢",
      "再见",
      "对不起",
      "没关系",
      "你好吗？",
      "我很好。",
      "我不是老师。",
      "我学中文。"
     ]
    },
    {
     "type": "dictation",
     "items": [
      {
       "t": "你好",
       "tr": "nǐ hǎo",
       "mean": "hello"
      },
      {
       "t": "谢谢",
       "tr": "xièxie",
       "mean": "thank you"
      },
      {
       "t": "老师",
       "tr": "lǎoshī",
       "mean": "teacher"
      },
      {
       "t": "朋友",
       "tr": "péngyou",
       "mean": "friend"
      },
      {
       "t": "中国",
       "tr": "Zhōngguó",
       "mean": "China"
      },
      {
       "t": "再见",
       "tr": "zàijiàn",
       "mean": "goodbye"
      }
     ],
     "title": "Listen and write the pinyin"
    },
    {
     "type": "selfcheck",
     "items": [
      "I can name the initial, final and tone of a syllable.",
      "I can say the four tones and the neutral tone.",
      "I can say j q x, z c s and zh ch sh r.",
      "I can make the ü sound.",
      "I know where tone marks go.",
      "I can use the tone changes for 3rd + 3rd, 不 and 一."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which word is it?",
       "say": "谢谢",
       "options": [
        "zàijiàn",
        "xièxie",
        "nǐ hǎo",
        "duìbuqǐ"
       ],
       "answer": 1
      },
      {
       "q": "Listen. Which word is it?",
       "say": "朋友",
       "options": [
        "lǎoshī",
        "xuésheng",
        "Zhōngguó",
        "péngyou"
       ],
       "answer": 3
      },
      {
       "q": "What does {{对不起}} mean?",
       "options": [
        "sorry",
        "thank you",
        "goodbye",
        "hello"
       ],
       "answer": 0
      },
      {
       "q": "How do you say \"I am not a teacher\"?",
       "options": [
        "wǒ shì lǎoshī",
        "nǐ bú shì lǎoshī",
        "wǒ bú shì lǎoshī",
        "wǒ hěn hǎo"
       ],
       "answer": 2
      },
      {
       "q": "What does {{吗}} do at the end of a sentence?",
       "options": [
        "It makes a yes/no question",
        "It means \"very\"",
        "It means \"mother\"",
        "It makes it polite"
       ],
       "answer": 0
      },
      {
       "q": "{{中文}} means...",
       "options": [
        "China",
        "teacher",
        "Chinese (language)",
        "student"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  }
 ]
});
