/* Learn Mandarin course data. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "characters",
 "order": 2,
 "icon": "字",
 "color": "cyan",
 "title": "Characters & Writing",
 "subtitle": "Strokes, stroke order, radicals and your first 17 characters",
 "lessons": [
  {
   "id": "u2-what-are-characters",
   "icon": "字",
   "title": "What Are Chinese Characters?",
   "subtitle": "Pictures, ideas, and meaning + sound",
   "minutes": 10,
   "goals": [
    "Know what a character is",
    "Recognise pictographs and ideographs",
    "Spot the meaning part and the sound part"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Chinese is not written with an alphabet. Each **character** (汉字 hànzì) stands for one syllable and carries a meaning. Some started life as little pictures, but most are clever combinations of parts."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The oldest known Chinese writing was carved on bones and turtle shells more than 3,000 years ago. Many characters you will learn today come from those ancient shapes."
    },
    {
     "type": "text",
     "text": "A pictograph is a simplified drawing of a thing. Over centuries the curves became straight strokes, but you can still see the picture.",
     "title": "Type 1: pictographs"
    },
    {
     "type": "table",
     "head": [
      "Character",
      "Pinyin",
      "Meaning",
      "The picture"
     ],
     "rows": [
      [
       "{{人}}",
       "rén",
       "person",
       "a person walking, two legs striding"
      ],
      [
       "{{日}}",
       "rì",
       "sun, day",
       "once a circle with a dot in the middle"
      ],
      [
       "{{月}}",
       "yuè",
       "moon, month",
       "a crescent moon"
      ],
      [
       "{{山}}",
       "shān",
       "mountain",
       "three peaks"
      ],
      [
       "{{水}}",
       "shuǐ",
       "water",
       "a stream with splashes"
      ],
      [
       "{{火}}",
       "huǒ",
       "fire",
       "flames rising"
      ],
      [
       "{{木}}",
       "mù",
       "tree, wood",
       "branches above, roots below"
      ],
      [
       "{{口}}",
       "kǒu",
       "mouth",
       "an open mouth"
      ]
     ]
    },
    {
     "type": "text",
     "text": "Ideas that are hard to draw are shown with simple signs.",
     "title": "Type 2: simple ideographs"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "一 二 三",
       "tr": "yī èr sān",
       "mean": "one, two, three",
       "note": "one, two and three lines"
      },
      {
       "t": "上",
       "tr": "shàng",
       "mean": "up, above",
       "note": "a mark above a line"
      },
      {
       "t": "下",
       "tr": "xià",
       "mean": "down, below",
       "note": "a mark below a line"
      },
      {
       "t": "本",
       "tr": "běn",
       "mean": "root, origin",
       "note": "a tree 木 with a mark at its base"
      }
     ]
    },
    {
     "type": "text",
     "text": "Two or more meaningful parts join to make a new idea.",
     "title": "Type 3: compound ideographs"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "休",
       "tr": "xiū",
       "mean": "to rest",
       "note": "a person 亻 leaning on a tree 木"
      },
      {
       "t": "明",
       "tr": "míng",
       "mean": "bright",
       "note": "sun 日 + moon 月"
      },
      {
       "t": "林",
       "tr": "lín",
       "mean": "woods",
       "note": "two trees"
      },
      {
       "t": "森",
       "tr": "sēn",
       "mean": "forest",
       "note": "three trees: lots of trees!"
      },
      {
       "t": "好",
       "tr": "hǎo",
       "mean": "good",
       "note": "woman 女 + child 子"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Type 4: meaning part + sound part",
     "color": "purple",
     "desc": "Most characters (roughly 80%) combine a **meaning part** (often called the radical) with a **sound part** that hints at the pronunciation.",
     "how": "妈 = 女 (woman: the meaning) + 马 mǎ (horse: just for the sound). So 妈 is a woman who sounds like \"ma\": mum!",
     "examples": [
      {
       "t": "妈",
       "tr": "mā"
      },
      {
       "t": "吗",
       "tr": "ma"
      },
      {
       "t": "骂",
       "tr": "mà"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "When you meet a new character, ask two questions: \"What is the meaning part?\" and \"What is the sound part?\" You will remember it twice as fast."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "About 2,500 common characters cover around 98% of everyday written Chinese. You do not need tens of thousands!"
    },
    {
     "type": "practice",
     "text": "Tap each character and say it. Can you see the picture or the idea?",
     "lines": [
      "人",
      "日",
      "月",
      "山",
      "水",
      "火",
      "木",
      "口",
      "休",
      "明",
      "林",
      "森",
      "好",
      "妈"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A Chinese character stands for...",
       "options": [
        "one letter",
        "a whole sentence",
        "one syllable with a meaning",
        "a sound with no meaning"
       ],
       "answer": 2
      },
      {
       "q": "Which character began as a picture of a mountain?",
       "options": [
        "山",
        "水",
        "日",
        "人"
       ],
       "answer": 0
      },
      {
       "q": "{{明}} (bright) is made of...",
       "options": [
        "tree + tree",
        "person + tree",
        "woman + child",
        "sun + moon"
       ],
       "answer": 3
      },
      {
       "q": "In {{妈}}, which part gives the sound?",
       "options": [
        "女",
        "马",
        "both",
        "neither"
       ],
       "answer": 1
      },
      {
       "q": "Most Chinese characters are made of...",
       "options": [
        "pure pictures",
        "a meaning part + a sound part",
        "letters",
        "numbers"
       ],
       "answer": 1
      },
      {
       "q": "{{休}} means \"to rest\" because it shows...",
       "options": [
        "three trees",
        "the sun over a mountain",
        "a mouth and water",
        "a person by a tree"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-strokes",
   "icon": "丿",
   "title": "The Basic Strokes",
   "subtitle": "Eight strokes build every character",
   "minutes": 10,
   "goals": [
    "Name the eight basic strokes",
    "Write each stroke in the right direction",
    "Spot strokes inside characters"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every character is built from a small set of **strokes**: a stroke is one movement of the pen, from touching the paper to lifting it. Learn these eight and you can write anything."
    },
    {
     "type": "table",
     "head": [
      "Stroke",
      "Name",
      "How to write it",
      "Found in"
     ],
     "rows": [
      [
       "一",
       "héng · horizontal",
       "left to right, slightly rising",
       "{{一}} {{二}} {{十}}"
      ],
      [
       "丨",
       "shù · vertical",
       "top to bottom, straight down",
       "{{十}} {{中}}"
      ],
      [
       "丿",
       "piě · left-falling",
       "from top right sweeping down to the left",
       "{{人}} {{八}}"
      ],
      [
       "㇏",
       "nà · right-falling",
       "from top left down to the right, ending in a flat tail",
       "{{人}} {{大}}"
      ],
      [
       "丶",
       "diǎn · dot",
       "a short press, down and to the right",
       "{{六}} {{小}}"
      ],
      [
       "㇀",
       "tí · rising",
       "from lower left flicking up to the right",
       "{{打}} {{汉}}"
      ],
      [
       "㇕",
       "zhé · turn",
       "change direction without lifting the pen",
       "{{口}} {{日}}"
      ],
      [
       "亅",
       "gōu · hook",
       "a quick flick at the end of a stroke",
       "{{小}} {{子}}"
      ]
     ],
     "title": "The eight basic strokes"
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "横",
       "tr": "héng",
       "mean": "horizontal stroke"
      },
      {
       "t": "竖",
       "tr": "shù",
       "mean": "vertical stroke"
      },
      {
       "t": "撇",
       "tr": "piě",
       "mean": "left-falling stroke"
      },
      {
       "t": "捺",
       "tr": "nà",
       "mean": "right-falling stroke"
      },
      {
       "t": "点",
       "tr": "diǎn",
       "mean": "dot"
      },
      {
       "t": "提",
       "tr": "tí",
       "mean": "rising stroke"
      },
      {
       "t": "折",
       "tr": "zhé",
       "mean": "turning stroke"
      },
      {
       "t": "钩",
       "tr": "gōu",
       "mean": "hook"
      }
     ],
     "title": "Stroke names"
    },
    {
     "type": "rule",
     "name": "Strokes have a direction",
     "color": "red",
     "desc": "Horizontals go left → right. Verticals go top → bottom. A turn (折) is one single stroke: do not lift the pen at the corner.",
     "how": "The top and right side of 口 are ONE stroke (横折).",
     "examples": [
      {
       "t": "口",
       "tr": "kǒu"
      },
      {
       "t": "日",
       "tr": "rì"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Strokes combine: a horizontal that turns down is 横折 héngzhé; a vertical with a hook is 竖钩 shùgōu. You will see these names in the stroke-order steps."
    },
    {
     "type": "howto",
     "char": "八",
     "name": "bā · eight",
     "steps": [
      "Stroke 1: 撇, a stroke from the top sweeping down to the left.",
      "Stroke 2: 捺, a separate stroke from the top sweeping down to the right."
     ],
     "tip": "Two strokes parting like a gate opening: 八 means eight, and it is a lucky number in China!"
    },
    {
     "type": "howto",
     "char": "六",
     "name": "liù · six",
     "steps": [
      "Stroke 1: 点, a dot at the top.",
      "Stroke 2: 横, a long horizontal.",
      "Stroke 3: 撇, a short stroke down to the left.",
      "Stroke 4: 点, a dot on the lower right."
     ],
     "tip": "A little person with a hat (the dot) and legs apart."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Calligraphers practise with {{永}} yǒng (forever), because this one character contains nearly all the basic strokes. It is called \"the eight principles of 永\"."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Remember the eight with a story: \"Line (横), pole (竖), slide left (撇), slide right (捺), drop (点), flick up (提), bend (折), hook (钩).\""
    },
    {
     "type": "write",
     "level": "letter",
     "items": [
      "一",
      "八",
      "六",
      "十"
     ],
     "note": "Trace each stroke slowly. Say its name as you write it."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which way is a horizontal stroke (横) written?",
       "options": [
        "Left to right",
        "Right to left",
        "Bottom to top",
        "Either way"
       ],
       "answer": 0
      },
      {
       "q": "Which stroke sweeps down to the left?",
       "options": [
        "捺 nà",
        "提 tí",
        "撇 piě",
        "点 diǎn"
       ],
       "answer": 2
      },
      {
       "q": "Which stroke flicks up to the right?",
       "options": [
        "提 tí",
        "竖 shù",
        "撇 piě",
        "横 héng"
       ],
       "answer": 0
      },
      {
       "q": "How many strokes make the top and right side of {{口}}?",
       "options": [
        "Two",
        "Three",
        "One",
        "Four"
       ],
       "answer": 2
      },
      {
       "q": "What is a stroke?",
       "options": [
        "One complete character",
        "One pen movement before lifting",
        "A radical",
        "A tone mark"
       ],
       "answer": 1
      },
      {
       "q": "{{八}} is written with...",
       "options": [
        "捺 then 撇",
        "横 then 竖",
        "two dots",
        "撇 then 捺"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-stroke-order",
   "icon": "顺",
   "title": "Stroke-Order Rules",
   "subtitle": "Seven rules that tell you which stroke comes first",
   "minutes": 12,
   "goals": [
    "Learn the seven main stroke-order rules",
    "Apply them to new characters",
    "Know the common exceptions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Chinese people write strokes in a fixed order. It is not just tradition: the right order makes characters faster to write, better balanced, and easier to read in handwriting. A handful of rules covers almost everything."
    },
    {
     "type": "rule",
     "name": "1. Horizontal before vertical",
     "color": "blue",
     "desc": "When a horizontal and a vertical cross, write the horizontal first.",
     "how": "先横后竖 xiān héng hòu shù",
     "examples": [
      {
       "t": "十",
       "tr": "shí"
      },
      {
       "t": "干",
       "tr": "gàn"
      }
     ]
    },
    {
     "type": "rule",
     "name": "2. Left-falling before right-falling",
     "color": "blue",
     "desc": "When 撇 and 捺 meet, write 撇 (down-left) first.",
     "how": "先撇后捺 xiān piě hòu nà",
     "examples": [
      {
       "t": "人",
       "tr": "rén"
      },
      {
       "t": "八",
       "tr": "bā"
      }
     ]
    },
    {
     "type": "rule",
     "name": "3. Top to bottom",
     "color": "green",
     "desc": "Write the upper strokes or parts before the lower ones.",
     "how": "从上到下 cóng shàng dào xià",
     "examples": [
      {
       "t": "三",
       "tr": "sān"
      },
      {
       "t": "字",
       "tr": "zì"
      }
     ]
    },
    {
     "type": "rule",
     "name": "4. Left to right",
     "color": "green",
     "desc": "Write the left strokes or parts before the right ones.",
     "how": "从左到右 cóng zuǒ dào yòu",
     "examples": [
      {
       "t": "川",
       "tr": "chuān"
      },
      {
       "t": "林",
       "tr": "lín"
      }
     ]
    },
    {
     "type": "rule",
     "name": "5. Outside before inside",
     "color": "orange",
     "desc": "Write the frame first, then what is inside it.",
     "how": "从外到内 cóng wài dào nèi",
     "examples": [
      {
       "t": "月",
       "tr": "yuè"
      },
      {
       "t": "同",
       "tr": "tóng"
      }
     ]
    },
    {
     "type": "rule",
     "name": "6. Inside before closing the box",
     "color": "orange",
     "desc": "For a fully closed box, write the left side and top first, then the inside, and close the bottom last.",
     "how": "先里头后封口 xiān lǐtou hòu fēngkǒu",
     "examples": [
      {
       "t": "日",
       "tr": "rì"
      },
      {
       "t": "回",
       "tr": "huí"
      },
      {
       "t": "国",
       "tr": "guó"
      }
     ]
    },
    {
     "type": "rule",
     "name": "7. Middle before the sides",
     "color": "purple",
     "desc": "When a character has a strong middle stroke with small parts on both sides, write the middle first.",
     "how": "先中间后两边 xiān zhōngjiān hòu liǎngbiān",
     "examples": [
      {
       "t": "小",
       "tr": "xiǎo"
      },
      {
       "t": "水",
       "tr": "shuǐ"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "A short chant: \"Across, then down. Left slide, then right. Top, then bottom. Left, then right. Outside, then inside, then shut the door. Middle, then the wings.\""
    },
    {
     "type": "howto",
     "char": "回",
     "name": "huí · to return",
     "steps": [
      "Stroke 1: 竖, the left side of the big box.",
      "Stroke 2: 横折, the top and right side of the big box in one stroke.",
      "Strokes 3–5: the small box inside: left side, top-and-right (横折), then its bottom line.",
      "Stroke 6: 横, close the big box at the bottom. Total: 6 strokes."
     ],
     "tip": "A box inside a box: you go \"back\" inside before you shut the door."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Some exceptions: a dot at the top right often comes last, as in {{书}} shū (book). And the \"walking\" part 辶 in {{这}} zhè (this) and {{进}} jìn (to enter) is written after the part it holds.",
     "title": "Exceptions"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "On the website, tap a character to watch its stroke order animate, then try the stroke-by-stroke writing quiz."
    },
    {
     "type": "practice",
     "text": "Say which rule each character follows, then write it in the air.",
     "lines": [
      "十",
      "人",
      "三",
      "川",
      "月",
      "日",
      "回",
      "小"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In {{十}}, which stroke comes first?",
       "options": [
        "The vertical",
        "Either",
        "Both together",
        "The horizontal"
       ],
       "answer": 3
      },
      {
       "q": "In {{人}}, which stroke comes first?",
       "options": [
        "捺 (down-right)",
        "撇 (down-left)",
        "Either",
        "A dot"
       ],
       "answer": 1
      },
      {
       "q": "In {{日}}, when is the bottom line written?",
       "options": [
        "First",
        "Second",
        "Last",
        "Third"
       ],
       "answer": 2
      },
      {
       "q": "In {{小}}, which stroke comes first?",
       "options": [
        "The middle hook",
        "The left dot",
        "The right dot",
        "Any of them"
       ],
       "answer": 0
      },
      {
       "q": "Which rule fits {{林}} (two trees side by side)?",
       "options": [
        "Inside before closing",
        "Middle before sides",
        "Left to right",
        "Bottom to top"
       ],
       "answer": 2
      },
      {
       "q": "Why does stroke order matter?",
       "options": [
        "Faster, better-balanced, readable writing",
        "It changes the meaning",
        "It changes the tone",
        "It is only for exams"
       ],
       "answer": 0
      },
      {
       "q": "How many strokes does {{回}} have?",
       "options": [
        "4",
        "5",
        "8",
        "6"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-first-characters-1",
   "icon": "一",
   "title": "First Characters: Numbers, People, Sun and Moon",
   "subtitle": "一 二 三 十 人 口 日 月 大",
   "minutes": 18,
   "goals": [
    "Write nine basic characters in the correct stroke order",
    "Remember each one with a picture",
    "Read simple words made from them"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Now the fun part: writing real characters! Each one comes with its stroke order and a memory trick. Write each one several times, saying the strokes aloud."
    },
    {
     "type": "howto",
     "char": "一",
     "name": "yī · one",
     "steps": [
      "1 stroke: 横, from left to right.",
      "Press at the start, move steadily, and lift gently at the end."
     ],
     "tip": "One line means one. The easiest character there is!"
    },
    {
     "type": "howto",
     "char": "二",
     "name": "èr · two",
     "steps": [
      "Stroke 1: a short 横 on top.",
      "Stroke 2: a longer 横 underneath."
     ],
     "tip": "Two lines, two. The bottom line is longer, like a shelf holding the top one."
    },
    {
     "type": "howto",
     "char": "三",
     "name": "sān · three",
     "steps": [
      "Stroke 1: a medium 横 on top.",
      "Stroke 2: a short 横 in the middle.",
      "Stroke 3: the longest 横 at the bottom."
     ],
     "tip": "Three lines, three. The middle one is the shortest, the bottom one the longest."
    },
    {
     "type": "howto",
     "char": "十",
     "name": "shí · ten",
     "steps": [
      "Stroke 1: 横, from left to right.",
      "Stroke 2: 竖, from top to bottom, crossing the middle of the 横."
     ],
     "tip": "Looks like a plus sign: hold up both hands and add them up: ten!"
    },
    {
     "type": "howto",
     "char": "人",
     "name": "rén · person",
     "steps": [
      "Stroke 1: 撇, start at the top and sweep down to the left.",
      "Stroke 2: 捺, start on the 撇 just below its top and sweep down to the right."
     ],
     "tip": "A person walking: two legs striding along."
    },
    {
     "type": "howto",
     "char": "口",
     "name": "kǒu · mouth",
     "steps": [
      "Stroke 1: 竖, the left side, top to bottom.",
      "Stroke 2: 横折, across the top and down the right side in one stroke.",
      "Stroke 3: 横, the bottom line closes the box."
     ],
     "tip": "A wide-open mouth saying \"Oh!\". Make it a little narrower at the bottom."
    },
    {
     "type": "howto",
     "char": "日",
     "name": "rì · sun, day",
     "steps": [
      "Stroke 1: 竖, the left side.",
      "Stroke 2: 横折, the top and right side in one stroke.",
      "Stroke 3: 横, the middle line (inside first!).",
      "Stroke 4: 横, the bottom line closes the box."
     ],
     "tip": "A window with the sun shining through. It is taller than it is wide."
    },
    {
     "type": "howto",
     "char": "月",
     "name": "yuè · moon, month",
     "steps": [
      "Stroke 1: 竖撇, down the left side, curving left at the bottom.",
      "Stroke 2: 横折钩, across the top and down the right side, ending in a small hook to the left.",
      "Stroke 3: 横, the upper line inside.",
      "Stroke 4: 横, the lower line inside."
     ],
     "tip": "A tall crescent moon with two clouds drifting across it. The bottom stays open."
    },
    {
     "type": "howto",
     "char": "大",
     "name": "dà · big",
     "steps": [
      "Stroke 1: 横, a long horizontal.",
      "Stroke 2: 撇, from above the 横, through it, sweeping down to the left.",
      "Stroke 3: 捺, from where the strokes cross, sweeping down to the right."
     ],
     "tip": "A person 人 stretching their arms wide: \"The fish was THIS big!\""
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "一",
       "tr": "yī",
       "mean": "one",
       "example": {
        "t": "一月",
        "tr": "yīyuè",
        "mean": "January"
       }
      },
      {
       "t": "二",
       "tr": "èr",
       "mean": "two",
       "example": {
        "t": "二十",
        "tr": "èrshí",
        "mean": "twenty"
       }
      },
      {
       "t": "三",
       "tr": "sān",
       "mean": "three",
       "example": {
        "t": "三月",
        "tr": "sānyuè",
        "mean": "March"
       }
      },
      {
       "t": "十",
       "tr": "shí",
       "mean": "ten",
       "example": {
        "t": "十一",
        "tr": "shíyī",
        "mean": "eleven"
       }
      },
      {
       "t": "人",
       "tr": "rén",
       "mean": "person",
       "example": {
        "t": "大人",
        "tr": "dàrén",
        "mean": "adult"
       }
      },
      {
       "t": "口",
       "tr": "kǒu",
       "mean": "mouth",
       "example": {
        "t": "人口",
        "tr": "rénkǒu",
        "mean": "population"
       }
      },
      {
       "t": "日",
       "tr": "rì",
       "mean": "sun, day",
       "example": {
        "t": "日子",
        "tr": "rìzi",
        "mean": "day; life"
       }
      },
      {
       "t": "月",
       "tr": "yuè",
       "mean": "moon, month",
       "example": {
        "t": "二月",
        "tr": "èryuè",
        "mean": "February"
       }
      },
      {
       "t": "大",
       "tr": "dà",
       "mean": "big",
       "example": {
        "t": "大人",
        "tr": "dàrén",
        "mean": "adult"
       }
      }
     ],
     "title": "Your new characters"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Chinese months are just numbers: 一月 is \"month one\" (January), 二月 \"month two\" (February), all the way to 十二月 shí'èryuè (December)."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "人 + 一 = 大: a person with arms stretched out is big. Add one more line on top and you get 天 tiān (sky): what is above the big person."
    },
    {
     "type": "write",
     "level": "letter",
     "items": [
      "一",
      "二",
      "三",
      "十",
      "人",
      "口",
      "日",
      "月",
      "大"
     ],
     "note": "Follow the stroke order. Write each character at least five times."
    },
    {
     "type": "write",
     "level": "word",
     "items": [
      "三月",
      "十一",
      "大人",
      "人口",
      "二十"
     ],
     "note": "Two characters per word: keep them the same size."
    },
    {
     "type": "practice",
     "text": "Read the characters and words aloud.",
     "lines": [
      "一 二 三 十",
      "人 口 日 月 大",
      "一月 二月 三月",
      "十一 二十",
      "大人 人口"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which character is it?",
       "say": "日",
       "options": [
        "月",
        "日",
        "口",
        "十"
       ],
       "answer": 1
      },
      {
       "q": "Which character means \"big\"?",
       "options": [
        "人",
        "大",
        "十",
        "口"
       ],
       "answer": 1
      },
      {
       "q": "How many strokes does {{口}} have?",
       "options": [
        "4",
        "2",
        "5",
        "3"
       ],
       "answer": 3
      },
      {
       "q": "In {{日}}, which stroke is written third?",
       "options": [
        "The middle line",
        "The bottom line",
        "The left side",
        "The top line"
       ],
       "answer": 0
      },
      {
       "q": "What does {{三月}} mean?",
       "options": [
        "Three moons",
        "Wednesday",
        "March",
        "Thirty days"
       ],
       "answer": 2
      },
      {
       "q": "Which line of {{三}} is the shortest?",
       "options": [
        "The middle one",
        "The top one",
        "The bottom one",
        "They are equal"
       ],
       "answer": 0
      },
      {
       "q": "{{二十}} means...",
       "options": [
        "twelve",
        "two",
        "twenty",
        "February"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-first-characters-2",
   "icon": "山",
   "title": "First Characters: Nature and Family",
   "subtitle": "小 中 山 水 火 木 女 子",
   "minutes": 18,
   "goals": [
    "Write eight more characters in the correct stroke order",
    "Use the middle-first rule",
    "Read words made from your characters"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Eight more characters, full of nature and people. Several of them follow the \"middle first\" rule, so watch the first stroke carefully."
    },
    {
     "type": "howto",
     "char": "小",
     "name": "xiǎo · small",
     "steps": [
      "Stroke 1: 竖钩, a vertical line down the middle with a small hook to the left.",
      "Stroke 2: 点, a short dot on the left.",
      "Stroke 3: 点, a dot on the right."
     ],
     "tip": "One tall stick with two small crumbs beside it: small things!"
    },
    {
     "type": "howto",
     "char": "中",
     "name": "zhōng · middle",
     "steps": [
      "Stroke 1: 竖, the left side of the box.",
      "Stroke 2: 横折, the top and right side in one stroke.",
      "Stroke 3: 横, close the bottom of the box.",
      "Stroke 4: 竖, a long line straight through the middle, written last."
     ],
     "tip": "An arrow right through the middle of a target. China is 中国, the \"Middle Country\"."
    },
    {
     "type": "howto",
     "char": "山",
     "name": "shān · mountain",
     "steps": [
      "Stroke 1: 竖, the tall middle peak.",
      "Stroke 2: 竖折, down the left side and along the bottom in one stroke.",
      "Stroke 3: 竖, the right peak."
     ],
     "tip": "Three peaks, the middle one the tallest."
    },
    {
     "type": "howto",
     "char": "水",
     "name": "shuǐ · water",
     "steps": [
      "Stroke 1: 竖钩, the long middle line with a hook to the left.",
      "Stroke 2: 横撇, on the left: a short horizontal that turns down to the left.",
      "Stroke 3: 撇, a short stroke on the upper right.",
      "Stroke 4: 捺, sweeping down to the lower right."
     ],
     "tip": "A river running down the middle with splashes on both sides."
    },
    {
     "type": "howto",
     "char": "火",
     "name": "huǒ · fire",
     "steps": [
      "Stroke 1: 点, a short dot on the upper left.",
      "Stroke 2: 撇, a short stroke on the upper right, pointing down to the left.",
      "Stroke 3: 撇, the long main stroke from the top centre down to the left.",
      "Stroke 4: 捺, from the middle of stroke 3, sweeping down to the right."
     ],
     "tip": "A campfire with two sparks jumping out of it."
    },
    {
     "type": "howto",
     "char": "木",
     "name": "mù · tree, wood",
     "steps": [
      "Stroke 1: 横, the branches.",
      "Stroke 2: 竖, the trunk, from top to bottom through the 横.",
      "Stroke 3: 撇, the root on the left.",
      "Stroke 4: 捺, the root on the right."
     ],
     "tip": "Branches across, trunk down, roots spreading. Two trees 林 make woods; three trees 森 make a forest."
    },
    {
     "type": "howto",
     "char": "女",
     "name": "nǚ · woman",
     "steps": [
      "Stroke 1: 撇点, go down to the left, then turn down to the right, in one stroke.",
      "Stroke 2: 撇, from the upper right sweep down to the lower left, crossing stroke 1.",
      "Stroke 3: 横, a long line across the middle."
     ],
     "tip": "A dancer with crossed legs and arms stretched out wide."
    },
    {
     "type": "howto",
     "char": "子",
     "name": "zǐ · child",
     "steps": [
      "Stroke 1: 横撇, a short horizontal that turns down to the left.",
      "Stroke 2: 弯钩, a gently curved line down the middle with a hook to the left.",
      "Stroke 3: 横, a long line across the middle."
     ],
     "tip": "A baby wrapped in a blanket, arms stretched out for a hug."
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "In {{木}} the last stroke is a long 捺. When 木 sits on the left of another character, as in {{林}} lín, it gets squeezed and that stroke becomes a short dot."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "小",
       "tr": "xiǎo",
       "mean": "small",
       "example": {
        "t": "大小",
        "tr": "dàxiǎo",
        "mean": "size"
       }
      },
      {
       "t": "中",
       "tr": "zhōng",
       "mean": "middle",
       "example": {
        "t": "中国",
        "tr": "Zhōngguó",
        "mean": "China"
       }
      },
      {
       "t": "山",
       "tr": "shān",
       "mean": "mountain",
       "example": {
        "t": "火山",
        "tr": "huǒshān",
        "mean": "volcano"
       }
      },
      {
       "t": "水",
       "tr": "shuǐ",
       "mean": "water",
       "example": {
        "t": "山水",
        "tr": "shānshuǐ",
        "mean": "landscape"
       }
      },
      {
       "t": "火",
       "tr": "huǒ",
       "mean": "fire",
       "example": {
        "t": "火山",
        "tr": "huǒshān",
        "mean": "volcano"
       }
      },
      {
       "t": "木",
       "tr": "mù",
       "mean": "tree, wood",
       "example": {
        "t": "木头",
        "tr": "mùtou",
        "mean": "wood (material)"
       }
      },
      {
       "t": "女",
       "tr": "nǚ",
       "mean": "woman, female",
       "example": {
        "t": "女人",
        "tr": "nǚrén",
        "mean": "woman"
       }
      },
      {
       "t": "子",
       "tr": "zǐ",
       "mean": "child, son",
       "example": {
        "t": "子女",
        "tr": "zǐnǚ",
        "mean": "sons and daughters"
       }
      }
     ],
     "title": "Your new characters"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "火 + 山 = 火山 huǒshān, a \"fire mountain\": a volcano! And 山 + 水 = 山水, \"mountains and water\", the word for a landscape (and for classic Chinese landscape painting)."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "女 + 子 makes {{好}} hǎo (good). One old explanation: a woman with her child is a good thing."
    },
    {
     "type": "write",
     "level": "letter",
     "items": [
      "小",
      "中",
      "山",
      "水",
      "火",
      "木",
      "女",
      "子"
     ],
     "note": "Watch the first stroke: 小 and 水 start in the middle."
    },
    {
     "type": "write",
     "level": "word",
     "items": [
      "大小",
      "火山",
      "山水",
      "女人",
      "子女"
     ],
     "note": "Keep both characters the same size, each in its own square."
    },
    {
     "type": "practice",
     "text": "Read the characters and words aloud.",
     "lines": [
      "小 中 山 水",
      "火 木 女 子",
      "大小 火山 山水",
      "女人 子女 中国"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which character is it?",
       "say": "水",
       "options": [
        "火",
        "水",
        "山",
        "木"
       ],
       "answer": 1
      },
      {
       "q": "What is the first stroke of {{小}}?",
       "options": [
        "The left dot",
        "The right dot",
        "A horizontal",
        "The middle hook"
       ],
       "answer": 3
      },
      {
       "q": "What is the last stroke of {{中}}?",
       "options": [
        "The bottom line",
        "The left side",
        "The top line",
        "The long middle vertical"
       ],
       "answer": 3
      },
      {
       "q": "{{火山}} means...",
       "options": [
        "campfire",
        "volcano",
        "mountain water",
        "big fire"
       ],
       "answer": 1
      },
      {
       "q": "Which character means \"woman\"?",
       "options": [
        "子",
        "大",
        "女",
        "人"
       ],
       "answer": 2
      },
      {
       "q": "How many strokes does {{山}} have?",
       "options": [
        "3",
        "4",
        "2",
        "5"
       ],
       "answer": 0
      },
      {
       "q": "Which two characters make {{好}} (good)?",
       "options": [
        "人 + 木",
        "日 + 月",
        "女 + 子",
        "小 + 大"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-radicals",
   "icon": "氵",
   "title": "Common Radicals",
   "subtitle": "The meaning parts that unlock thousands of characters",
   "minutes": 15,
   "goals": [
    "Recognise ten common radicals",
    "Guess the meaning area of a new character",
    "Write the radicals in the correct stroke order"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **radical** (部首 bùshǒu) is the part of a character that hints at its meaning. Dictionaries are organised by radicals, and once you know the common ones, new characters stop looking like random strokes."
    },
    {
     "type": "table",
     "head": [
      "Radical",
      "Name",
      "Meaning area",
      "Examples"
     ],
     "rows": [
      [
       "氵",
       "sāndiǎnshuǐ · \"three drops of water\"",
       "water, liquids",
       "{{河}} hé river, {{海}} hǎi sea, {{洗}} xǐ to wash"
      ],
      [
       "亻",
       "dānrénpáng · \"person side\"",
       "people",
       "{{你}} nǐ you, {{他}} tā he, {{休}} xiū rest"
      ],
      [
       "口",
       "kǒuzìpáng · \"mouth side\"",
       "mouth, speaking, eating",
       "{{吃}} chī eat, {{喝}} hē drink, {{叫}} jiào call"
      ],
      [
       "女",
       "nǚzìpáng · \"woman side\"",
       "women, family",
       "{{妈}} mā mum, {{姐}} jiě big sister, {{她}} tā she"
      ],
      [
       "木",
       "mùzìpáng · \"tree side\"",
       "trees, wood",
       "{{树}} shù tree, {{林}} lín woods, {{桌}} zhuō table"
      ],
      [
       "心 / 忄",
       "xīnzìdǐ / shùxīnpáng · \"heart\"",
       "feelings, thinking",
       "{{想}} xiǎng think, {{忙}} máng busy, {{快}} kuài fast"
      ],
      [
       "讠",
       "yánzìpáng · \"speech side\"",
       "speech, words",
       "{{说}} shuō speak, {{话}} huà words, {{请}} qǐng please"
      ],
      [
       "扌",
       "tíshǒupáng · \"hand side\"",
       "hand actions",
       "{{打}} dǎ hit, {{找}} zhǎo look for, {{拉}} lā pull"
      ],
      [
       "艹",
       "cǎozìtóu · \"grass top\"",
       "plants",
       "{{花}} huā flower, {{茶}} chá tea, {{草}} cǎo grass"
      ],
      [
       "宀",
       "bǎogàitóu · \"roof top\"",
       "houses, shelter",
       "{{家}} jiā home, {{字}} zì character, {{安}} ān peace"
      ]
     ],
     "title": "Ten radicals to know"
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "氵 is three drops of water sliding down a window. 亻 is a person standing sideways. 扌 is a hand with fingers spread. 艹 is two little sprouts. 宀 is a roof with a chimney."
    },
    {
     "type": "howto",
     "char": "氵",
     "name": "water radical",
     "steps": [
      "Stroke 1: 点, a dot at the top.",
      "Stroke 2: 点, a second dot below it.",
      "Stroke 3: 提, a rising stroke flicking up to the right."
     ],
     "tip": "Three drops: drip, drip, splash!"
    },
    {
     "type": "howto",
     "char": "亻",
     "name": "person radical",
     "steps": [
      "Stroke 1: 撇, a short stroke down to the left.",
      "Stroke 2: 竖, a vertical line hanging from the middle of the 撇."
     ],
     "tip": "A person standing sideways to make room for a friend."
    },
    {
     "type": "howto",
     "char": "讠",
     "name": "speech radical",
     "steps": [
      "Stroke 1: 点, a dot.",
      "Stroke 2: 横折提, a short horizontal, down, then flick up to the right, all in one stroke."
     ],
     "tip": "A mouth (the dot) and the words coming out."
    },
    {
     "type": "howto",
     "char": "扌",
     "name": "hand radical",
     "steps": [
      "Stroke 1: 横, a short horizontal.",
      "Stroke 2: 竖钩, a vertical line with a hook to the left.",
      "Stroke 3: 提, a rising stroke crossing the 竖 from lower left to upper right."
     ],
     "tip": "A hand ready to grab something."
    },
    {
     "type": "howto",
     "char": "艹",
     "name": "grass radical",
     "steps": [
      "Stroke 1: 横, a horizontal.",
      "Stroke 2: 竖, a short vertical on the left.",
      "Stroke 3: 竖, a short vertical on the right."
     ],
     "tip": "Two blades of grass poking through the ground. In mainland China it is written with 3 strokes."
    },
    {
     "type": "howto",
     "char": "宀",
     "name": "roof radical",
     "steps": [
      "Stroke 1: 点, a dot on top (the chimney).",
      "Stroke 2: 点, a short dot on the left.",
      "Stroke 3: 横钩, a horizontal across with a hook down at the right."
     ],
     "tip": "A roof with a chimney: 宀 + 子 = 字, a child under a roof learning characters."
    },
    {
     "type": "howto",
     "char": "忄",
     "name": "heart radical (side form)",
     "steps": [
      "Stroke 1: 点, a short dot on the left.",
      "Stroke 2: 点, a short dot on the right.",
      "Stroke 3: 竖, a long vertical line down the middle."
     ],
     "tip": "心 stands up straight when it sits on the side: a heart beating with feelings."
    },
    {
     "type": "vocab",
     "items": [
      {
       "t": "河",
       "tr": "hé",
       "mean": "river",
       "root": "氵"
      },
      {
       "t": "洗",
       "tr": "xǐ",
       "mean": "to wash",
       "root": "氵"
      },
      {
       "t": "你",
       "tr": "nǐ",
       "mean": "you",
       "root": "亻"
      },
      {
       "t": "吃",
       "tr": "chī",
       "mean": "to eat",
       "root": "口"
      },
      {
       "t": "妈",
       "tr": "mā",
       "mean": "mum",
       "root": "女"
      },
      {
       "t": "树",
       "tr": "shù",
       "mean": "tree",
       "root": "木"
      },
      {
       "t": "想",
       "tr": "xiǎng",
       "mean": "to think; to want",
       "root": "心"
      },
      {
       "t": "说",
       "tr": "shuō",
       "mean": "to speak",
       "root": "讠"
      },
      {
       "t": "打",
       "tr": "dǎ",
       "mean": "to hit; to play (ball)",
       "root": "扌"
      },
      {
       "t": "花",
       "tr": "huā",
       "mean": "flower",
       "root": "艹"
      },
      {
       "t": "家",
       "tr": "jiā",
       "mean": "home, family",
       "root": "宀"
      }
     ],
     "title": "Words grouped by radical"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "A radical gives the **area** of meaning, not the exact meaning. 忙 (busy) has the heart radical: being busy is a state of mind!"
    },
    {
     "type": "write",
     "level": "letter",
     "items": [
      "氵",
      "亻",
      "讠",
      "扌",
      "艹",
      "宀",
      "忄"
     ],
     "note": "Radicals are usually written narrow or flat, because they share a square with another part."
    },
    {
     "type": "practice",
     "text": "Read each group. Say the radical they share.",
     "lines": [
      "河 海 洗",
      "你 他 休",
      "吃 喝 叫",
      "妈 姐 她",
      "说 话 请",
      "花 茶 草",
      "家 字 安"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A character with 氵 probably has to do with...",
       "options": [
        "water",
        "people",
        "plants",
        "speech"
       ],
       "answer": 0
      },
      {
       "q": "Which radical is in {{说}}, {{话}} and {{请}}?",
       "options": [
        "氵",
        "扌",
        "亻",
        "讠"
       ],
       "answer": 3
      },
      {
       "q": "{{花}} (flower) has which radical?",
       "options": [
        "宀",
        "艹",
        "木",
        "口"
       ],
       "answer": 1
      },
      {
       "q": "Which character has the \"person\" radical?",
       "options": [
        "她",
        "他",
        "吃",
        "河"
       ],
       "answer": 1
      },
      {
       "q": "The radical 宀 shows...",
       "options": [
        "a hand",
        "a heart",
        "a mouth",
        "a roof"
       ],
       "answer": 3
      },
      {
       "q": "{{打}} (to hit) has the hand radical. What does a radical tell you?",
       "options": [
        "The general area of meaning",
        "The exact pronunciation",
        "The tone",
        "The stroke count"
       ],
       "answer": 0
      },
      {
       "q": "Which radical is a form of 心 (heart)?",
       "options": [
        "亻",
        "讠",
        "忄",
        "扌"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-building",
   "icon": "好",
   "title": "Building Characters from Parts",
   "subtitle": "Shapes, idea combinations and sound families",
   "minutes": 15,
   "goals": [
    "Recognise left-right, top-bottom and enclosed shapes",
    "Read idea combinations like 休 and 明",
    "Use sound parts to guess pronunciation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most characters are built like Lego: two or three parts snapped together in a square. Learn the parts and the ways they fit, and every new character becomes a little puzzle you can solve."
    },
    {
     "type": "table",
     "head": [
      "Shape",
      "How the parts fit",
      "Examples"
     ],
     "rows": [
      [
       "left + right",
       "two parts side by side",
       "{{你}} {{好}} {{林}} {{妈}}"
      ],
      [
       "top + bottom",
       "one part above another",
       "{{字}} {{花}} {{想}} {{家}}"
      ],
      [
       "left + middle + right",
       "three parts side by side",
       "{{树}} {{谢}}"
      ],
      [
       "full enclosure",
       "a box around the inside",
       "{{国}} {{回}} {{四}}"
      ],
      [
       "half enclosure",
       "a frame on two or three sides",
       "{{这}} {{同}} {{医}}"
      ]
     ],
     "title": "How parts fit together"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Every character fits in an imaginary square, no matter how many strokes it has. A part on the left gets thin; a part on top gets flat."
    },
    {
     "type": "text",
     "text": "Put meanings together and a new meaning appears.",
     "title": "Idea combinations"
    },
    {
     "type": "examples",
     "items": [
      {
       "t": "休",
       "tr": "xiū",
       "mean": "to rest",
       "note": "亻 person + 木 tree: resting against a tree"
      },
      {
       "t": "明",
       "tr": "míng",
       "mean": "bright",
       "note": "日 sun + 月 moon: the brightest things in the sky"
      },
      {
       "t": "好",
       "tr": "hǎo",
       "mean": "good",
       "note": "女 woman + 子 child"
      },
      {
       "t": "林",
       "tr": "lín",
       "mean": "woods",
       "note": "木 + 木: two trees"
      },
      {
       "t": "森",
       "tr": "sēn",
       "mean": "forest",
       "note": "木 + 木 + 木: many trees"
      },
      {
       "t": "从",
       "tr": "cóng",
       "mean": "from; to follow",
       "note": "人 + 人: one person following another"
      },
      {
       "t": "众",
       "tr": "zhòng",
       "mean": "crowd",
       "note": "人 + 人 + 人: lots of people"
      },
      {
       "t": "尖",
       "tr": "jiān",
       "mean": "pointed, sharp",
       "note": "小 small on top + 大 big below"
      },
      {
       "t": "男",
       "tr": "nán",
       "mean": "man, male",
       "note": "田 field + 力 strength: working in the fields"
      },
      {
       "t": "安",
       "tr": "ān",
       "mean": "peace, safe",
       "note": "宀 roof + 女 woman"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "{{尖}} is the easiest one ever: small on top of big makes a point, like the tip of a pencil."
    },
    {
     "type": "rule",
     "name": "Sound families",
     "color": "purple",
     "desc": "Characters that share a sound part often sound similar. The meaning part on the side tells them apart.",
     "how": "Same sound part 马, different radicals: 女 woman, 口 mouth, 石 stone...",
     "examples": [
      {
       "t": "马",
       "tr": "mǎ · horse"
      },
      {
       "t": "妈",
       "tr": "mā · mum"
      },
      {
       "t": "吗",
       "tr": "ma · question word"
      },
      {
       "t": "骂",
       "tr": "mà · to scold"
      },
      {
       "t": "码",
       "tr": "mǎ · code, number"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Character",
      "Pinyin",
      "Meaning part",
      "Meaning"
     ],
     "rows": [
      [
       "{{青}}",
       "qīng",
       "(the sound part)",
       "blue-green; young"
      ],
      [
       "{{清}}",
       "qīng",
       "氵 water",
       "clear (like water)"
      ],
      [
       "{{晴}}",
       "qíng",
       "日 sun",
       "sunny"
      ],
      [
       "{{请}}",
       "qǐng",
       "讠 speech",
       "please; to invite"
      ],
      [
       "{{情}}",
       "qíng",
       "忄 heart",
       "feeling"
      ],
      [
       "{{睛}}",
       "jīng",
       "目 eye",
       "eyeball"
      ]
     ],
     "title": "The 青 family"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "Sound parts give a hint, not a guarantee. Tones often differ, and sometimes the sound has changed a lot over the centuries: 睛 is jīng, not qīng."
    },
    {
     "type": "table",
     "head": [
      "Character",
      "Pinyin",
      "Meaning part",
      "Meaning"
     ],
     "rows": [
      [
       "{{包}}",
       "bāo",
       "(the sound part)",
       "bag; to wrap"
      ],
      [
       "{{饱}}",
       "bǎo",
       "饣 food",
       "full (after eating)"
      ],
      [
       "{{跑}}",
       "pǎo",
       "足 foot (squeezed on the left)",
       "to run"
      ],
      [
       "{{抱}}",
       "bào",
       "扌 hand",
       "to hug"
      ],
      [
       "{{泡}}",
       "pào",
       "氵 water",
       "to soak; bubble"
      ]
     ],
     "title": "The 包 family"
    },
    {
     "type": "practice",
     "text": "Read each family. Notice how similar they sound.",
     "lines": [
      "马 妈 吗 骂",
      "青 清 晴 请 情",
      "包 饱 跑 抱 泡",
      "休 明 林 森 尖"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does {{明}} (sun + moon) mean?",
       "options": [
        "bright",
        "night",
        "month",
        "sky"
       ],
       "answer": 0
      },
      {
       "q": "{{晴}} has 日 on the left. It probably means...",
       "options": [
        "clear water",
        "feeling",
        "sunny",
        "please"
       ],
       "answer": 2
      },
      {
       "q": "In {{请}} (please), what does 青 give?",
       "options": [
        "The meaning",
        "The sound",
        "The tone",
        "Nothing"
       ],
       "answer": 1
      },
      {
       "q": "{{尖}} means \"pointed\" because...",
       "options": [
        "it has a sharp hook",
        "it looks like a knife",
        "it is a pictograph of a pen",
        "small sits on top of big"
       ],
       "answer": 3
      },
      {
       "q": "Which shape is {{国}}?",
       "options": [
        "left + right",
        "top + bottom",
        "half enclosure",
        "full enclosure"
       ],
       "answer": 3
      },
      {
       "q": "Which character is about running (with a foot radical)?",
       "options": [
        "抱",
        "跑",
        "饱",
        "泡"
       ],
       "answer": 1
      },
      {
       "q": "{{众}} (three people) means...",
       "options": [
        "family",
        "to follow",
        "crowd",
        "one person"
       ],
       "answer": 2
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-simplified-traditional",
   "icon": "繁",
   "title": "Simplified and Traditional Characters",
   "subtitle": "Two ways of writing the same language",
   "minutes": 8,
   "goals": [
    "Know where each system is used",
    "Recognise a few common pairs",
    "Understand how characters were simplified"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "There are two standard sets of Chinese characters. This course teaches **Simplified** characters, used in mainland China. It is useful to know that **Traditional** characters exist too."
    },
    {
     "type": "table",
     "head": [
      "Feature",
      "Simplified 简体字",
      "Traditional 繁體字"
     ],
     "rows": [
      [
       "Used in",
       "mainland China, Singapore, Malaysia",
       "Taiwan, Hong Kong, Macau, many overseas communities"
      ],
      [
       "Since",
       "officially from the 1950s–60s",
       "the older standard forms"
      ],
      [
       "Strokes",
       "fewer",
       "more"
      ]
     ],
     "title": "Two systems"
    },
    {
     "type": "table",
     "head": [
      "Simplified",
      "Traditional",
      "Pinyin",
      "Meaning"
     ],
     "rows": [
      [
       "{{马}}",
       "{{馬}}",
       "mǎ",
       "horse"
      ],
      [
       "{{门}}",
       "{{門}}",
       "mén",
       "door"
      ],
      [
       "{{车}}",
       "{{車}}",
       "chē",
       "vehicle"
      ],
      [
       "{{说}}",
       "{{說}}",
       "shuō",
       "to speak"
      ],
      [
       "{{国}}",
       "{{國}}",
       "guó",
       "country"
      ],
      [
       "{{学}}",
       "{{學}}",
       "xué",
       "to study"
      ],
      [
       "{{书}}",
       "{{書}}",
       "shū",
       "book"
      ],
      [
       "{{龙}}",
       "{{龍}}",
       "lóng",
       "dragon"
      ]
     ],
     "title": "Common pairs"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Shorter components",
       "t": "说",
       "tr": "shuō",
       "mean": "to speak",
       "desc": "A common part gets a short form: 言 → 讠, 馬 → 马, 門 → 门."
      },
      {
       "title": "Handwriting shapes",
       "t": "书",
       "tr": "shū",
       "mean": "book",
       "desc": "Flowing handwritten forms became standard: 書 → 书, 東 → 东."
      },
      {
       "title": "Keeping just a part",
       "t": "声",
       "tr": "shēng",
       "mean": "sound",
       "desc": "Only part of the old character remains: 聲 → 声."
      },
      {
       "title": "A simpler sound part",
       "t": "远",
       "tr": "yuǎn",
       "mean": "far",
       "desc": "A sound part with fewer strokes replaced the old one: 遠 → 远."
      }
     ],
     "title": "How characters were simplified"
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "The dragon {{龙}} has 5 strokes in Simplified, but {{龍}} has 16 in Traditional!"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "A popular joke: Traditional {{愛}} (love) has a heart 心 inside, but Simplified {{爱}} lost it and gained 友 (friend) instead. Love without a heart, but with a friend!"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Good news: all 17 characters you learned in this unit (一 二 三 十 人 口 日 月 大 小 中 山 水 火 木 女 子) are the same in both systems. Pinyin and the spoken language are also the same."
    },
    {
     "type": "practice",
     "text": "Read the simplified characters aloud.",
     "lines": [
      "马 门 车",
      "说 国 学",
      "书 龙 爱"
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which character set does mainland China use?",
       "options": [
        "Simplified",
        "Traditional",
        "Both equally",
        "Neither"
       ],
       "answer": 0
      },
      {
       "q": "Where are Traditional characters used?",
       "options": [
        "Beijing and Shanghai",
        "Singapore",
        "Taiwan and Hong Kong",
        "Only in old books"
       ],
       "answer": 2
      },
      {
       "q": "What is the Simplified form of {{門}}?",
       "options": [
        "门",
        "问",
        "们",
        "间"
       ],
       "answer": 0
      },
      {
       "q": "Which pair matches?",
       "options": [
        "学 / 書",
        "马 / 龍",
        "说 / 車",
        "国 / 國"
       ],
       "answer": 3
      },
      {
       "q": "Simplified characters usually have...",
       "options": [
        "more strokes",
        "fewer strokes",
        "different sounds",
        "no radicals"
       ],
       "answer": 1
      },
      {
       "q": "Are {{人}} and {{山}} different in Traditional?",
       "options": [
        "Yes, both changed",
        "No, they are the same",
        "Only 人 changed",
        "Only 山 changed"
       ],
       "answer": 1
      }
     ],
     "title": "Quick quiz"
    }
   ]
  },
  {
   "id": "u2-copywork",
   "icon": "写",
   "title": "Copywork and Dictation",
   "subtitle": "Write, listen, and check yourself",
   "minutes": 15,
   "goals": [
    "Copy characters neatly in the correct order",
    "Write characters from dictation",
    "Check your progress"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Practice makes characters stick. In this lesson you copy, then write from memory, then check yourself. A few minutes every day works much better than one long session."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Look",
       "desc": "Study the character. Find its parts and count its strokes."
      },
      {
       "title": "Trace",
       "desc": "Trace it in the grid, saying each stroke name."
      },
      {
       "title": "Copy",
       "desc": "Write it by yourself, looking at the model."
      },
      {
       "title": "Recall",
       "desc": "Cover the model and write it from memory."
      },
      {
       "title": "Use",
       "desc": "Write a word with it, and say it aloud with the right tone."
      }
     ],
     "title": "A five-step routine"
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Keep each character in its own square, centred and balanced. Write strokes firmly; do not go back over them."
    },
    {
     "type": "write",
     "level": "letter",
     "items": [
      "一",
      "二",
      "三",
      "十",
      "人",
      "口",
      "日",
      "月",
      "大",
      "小",
      "中",
      "山",
      "水",
      "火",
      "木",
      "女",
      "子"
     ],
     "note": "Copywork: all 17 characters from this unit."
    },
    {
     "type": "write",
     "level": "word",
     "items": [
      "大人",
      "人口",
      "日子",
      "大小",
      "火山",
      "山水",
      "女人",
      "子女",
      "一月",
      "十二月"
     ],
     "note": "Copy each word. Say it aloud as you write."
    },
    {
     "type": "write",
     "level": "line",
     "items": [
      "三月十一日",
      "二月二十日",
      "大山小山",
      "日月山水"
     ],
     "note": "Write each line in one go. 三月十一日 means \"11 March\"."
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Before writing from memory, close your eyes and \"see\" the character with its memory picture: the campfire 火, the three peaks 山, the arrow through the target 中."
    },
    {
     "type": "dictation",
     "items": [
      {
       "t": "山",
       "tr": "shān",
       "mean": "mountain"
      },
      {
       "t": "水",
       "tr": "shuǐ",
       "mean": "water"
      },
      {
       "t": "火",
       "tr": "huǒ",
       "mean": "fire"
      },
      {
       "t": "人",
       "tr": "rén",
       "mean": "person"
      },
      {
       "t": "中",
       "tr": "zhōng",
       "mean": "middle"
      },
      {
       "t": "大小",
       "tr": "dàxiǎo",
       "mean": "size"
      },
      {
       "t": "火山",
       "tr": "huǒshān",
       "mean": "volcano"
      },
      {
       "t": "三月",
       "tr": "sānyuè",
       "mean": "March"
      }
     ],
     "title": "Dictation: listen and write the characters"
    },
    {
     "type": "selfcheck",
     "items": [
      "I can name the eight basic strokes.",
      "I know the seven stroke-order rules.",
      "I can write all 17 characters from memory in the correct order.",
      "I can recognise the ten common radicals.",
      "I can explain how 妈 gets its meaning and its sound.",
      "I know the difference between Simplified and Traditional characters."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Listen. Which character is it?",
       "say": "火",
       "options": [
        "水",
        "大",
        "人",
        "火"
       ],
       "answer": 3
      },
      {
       "q": "Listen. Which word is it?",
       "say": "山水",
       "options": [
        "山水",
        "火山",
        "大小",
        "日子"
       ],
       "answer": 0
      },
      {
       "q": "Which character has 4 strokes?",
       "options": [
        "口",
        "人",
        "木",
        "山"
       ],
       "answer": 2
      },
      {
       "q": "Which character has only 2 strokes?",
       "options": [
        "人",
        "大",
        "女",
        "子"
       ],
       "answer": 0
      },
      {
       "q": "{{日子}} means...",
       "options": [
        "Sunday",
        "son",
        "day; life",
        "sunshine"
       ],
       "answer": 2
      },
      {
       "q": "What is the best way to learn characters?",
       "options": [
        "One long session a month",
        "A little practice every day",
        "Only reading pinyin",
        "Guessing the strokes"
       ],
       "answer": 1
      },
      {
       "q": "{{三月十一日}} is the date...",
       "options": [
        "3 November",
        "31 January",
        "13 March",
        "11 March"
       ],
       "answer": 3
      }
     ],
     "title": "Quick quiz"
    }
   ]
  }
 ]
});
