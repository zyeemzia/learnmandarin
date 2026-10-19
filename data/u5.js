/* Unit 5: Everyday Conversations. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.units.push({
 "id": "talk",
 "order": 5,
 "icon": "说",
 "color": "rose",
 "title": "Everyday Conversations",
 "subtitle": "Real-life Mandarin for restaurants, shops, travel, phones, plans, the doctor and work.",
 "lessons": [
  {
   "id": "u5-restaurant",
   "icon": "饭",
   "title": "Ordering at a Restaurant",
   "subtitle": "Get a table, order dishes, ask about spice and pay the bill.",
   "minutes": 15,
   "goals": [
    "Answer “How many people?” and ask for the menu",
    "Order dishes with 来 and 要",
    "Ask if a dish is spicy",
    "Ask for the bill and take leftovers away"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Eating out is one of the best parts of life in China. Food is cheap, tasty and shared by the whole table. In this lesson you will get a table, order, ask about spice and pay."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "服务员",
       "tr": "fúwùyuán",
       "mean": "waiter, waitress",
       "example": {
        "t": "服务员，菜单！",
        "tr": "Fúwùyuán, càidān!",
        "mean": "Excuse me, the menu please!"
       }
      },
      {
       "t": "菜单",
       "tr": "càidān",
       "mean": "menu"
      },
      {
       "t": "点菜",
       "tr": "diǎn cài",
       "mean": "to order (dishes)",
       "example": {
        "t": "我们点菜吧。",
        "tr": "Wǒmen diǎn cài ba.",
        "mean": "Let's order."
       }
      },
      {
       "t": "米饭",
       "tr": "mǐfàn",
       "mean": "(cooked) rice"
      },
      {
       "t": "饺子",
       "tr": "jiǎozi",
       "mean": "dumplings"
      },
      {
       "t": "碗",
       "tr": "wǎn",
       "mean": "bowl (also a measure word)",
       "example": {
        "t": "一碗面",
        "tr": "yì wǎn miàn",
        "mean": "a bowl of noodles"
       }
      },
      {
       "t": "辣",
       "tr": "là",
       "mean": "spicy, hot"
      },
      {
       "t": "好吃",
       "tr": "hǎochī",
       "mean": "tasty, delicious"
      },
      {
       "t": "买单",
       "tr": "mǎidān",
       "mean": "to pay the bill; “The bill, please!”"
      },
      {
       "t": "打包",
       "tr": "dǎbāo",
       "mean": "to pack (leftovers) to take away"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "At a Sichuan restaurant",
     "lines": [
      {
       "who": "Waiter",
       "t": "您好！几位？",
       "tr": "Nín hǎo! Jǐ wèi?",
       "mean": "Hello! How many people?"
      },
      {
       "who": "Anna",
       "t": "两位。",
       "tr": "Liǎng wèi.",
       "mean": "Two."
      },
      {
       "who": "Waiter",
       "t": "这边请。这是菜单。",
       "tr": "Zhèbiān qǐng. Zhè shì càidān.",
       "mean": "This way, please. Here is the menu."
      },
      {
       "who": "Anna",
       "t": "你们这儿有什么好吃的？",
       "tr": "Nǐmen zhèr yǒu shénme hǎochī de?",
       "mean": "What's good here?"
      },
      {
       "who": "Waiter",
       "t": "我们的宫保鸡丁很有名。",
       "tr": "Wǒmen de gōngbǎo jīdīng hěn yǒumíng.",
       "mean": "Our kung pao chicken is famous."
      },
      {
       "who": "Anna",
       "t": "辣不辣？",
       "tr": "Là bu là?",
       "mean": "Is it spicy?"
      },
      {
       "who": "Waiter",
       "t": "有一点儿辣。",
       "tr": "Yǒu yìdiǎnr là.",
       "mean": "A little spicy."
      },
      {
       "who": "Anna",
       "t": "好，来一个宫保鸡丁，两碗米饭，一壶茶。",
       "tr": "Hǎo, lái yí ge gōngbǎo jīdīng, liǎng wǎn mǐfàn, yì hú chá.",
       "mean": "OK, one kung pao chicken, two bowls of rice and a pot of tea."
      },
      {
       "who": "Waiter",
       "t": "好的，请稍等。",
       "tr": "Hǎo de, qǐng shāo děng.",
       "mean": "Sure, one moment please."
      },
      {
       "who": "Anna",
       "t": "服务员，买单！",
       "tr": "Fúwùyuán, mǎidān!",
       "mean": "Excuse me, the bill please!"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "To order, say {{来}} (lái, ‘bring’) or {{要}} (yào, ‘want’) + number + measure word + dish: {{来一盘饺子}} = ‘a plate of dumplings, please’."
    },
    {
     "type": "sentence",
     "t": "我要一碗牛肉面。",
     "tr": "Wǒ yào yì wǎn niúròu miàn.",
     "mean": "I'd like a bowl of beef noodles.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "要",
       "mean": "want"
      },
      {
       "t": "一",
       "mean": "one"
      },
      {
       "t": "碗",
       "mean": "bowl (measure word)"
      },
      {
       "t": "牛肉",
       "mean": "beef"
      },
      {
       "t": "面",
       "mean": "noodles"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "请不要放辣椒。",
     "tr": "Qǐng bú yào fàng làjiāo.",
     "mean": "Please don't add chilli.",
     "words": [
      {
       "t": "请",
       "mean": "please"
      },
      {
       "t": "不要",
       "mean": "don't"
      },
      {
       "t": "放",
       "mean": "put in"
      },
      {
       "t": "辣椒",
       "mean": "chilli pepper"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "可以用手机付钱吗？",
     "tr": "Kěyǐ yòng shǒujī fù qián ma?",
     "mean": "Can I pay with my phone?",
     "words": [
      {
       "t": "可以",
       "mean": "can"
      },
      {
       "t": "用",
       "mean": "use"
      },
      {
       "t": "手机",
       "mean": "mobile phone"
      },
      {
       "t": "付钱",
       "mean": "pay"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Dishes are shared. Everyone orders together, the plates go in the middle and each person has a small bowl of rice. Tipping is not expected in mainland China."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Calling {{服务员！}} across the room is normal and not rude. Many restaurants also have a QR code on the table: you scan it to order and pay on your phone."
    },
    {
     "type": "steps",
     "title": "Role-play: dinner for two",
     "items": [
      {
       "title": "Get a table",
       "t": "两位。",
       "tr": "Liǎng wèi.",
       "mean": "Two people.",
       "desc": "Answer the question {{几位？}} (How many people?)."
      },
      {
       "title": "Ask for the menu",
       "t": "请给我菜单。",
       "tr": "Qǐng gěi wǒ càidān.",
       "mean": "Please give me the menu."
      },
      {
       "title": "Ask what's good",
       "t": "有什么推荐的？",
       "tr": "Yǒu shénme tuījiàn de?",
       "mean": "What do you recommend?"
      },
      {
       "title": "Order",
       "t": "来一盘饺子，两碗米饭。",
       "tr": "Lái yì pán jiǎozi, liǎng wǎn mǐfàn.",
       "mean": "A plate of dumplings and two bowls of rice."
      },
      {
       "title": "Pay",
       "t": "买单！",
       "tr": "Mǎidān!",
       "mean": "The bill, please!",
       "desc": "Then try {{打包}} if there is food left."
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud. Tap any word to hear it.",
     "lines": [
      "服务员，菜单！",
      "我要一碗米饭。",
      "辣不辣？",
      "不要太辣。",
      "太好吃了！",
      "买单！"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "What does {{买单}} mean?",
       "options": [
        "The menu, please!",
        "One more bowl!",
        "The bill, please!",
        "Not spicy, please!"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is being asked?",
       "say": "辣不辣？",
       "options": [
        "Is it tasty?",
        "Is it expensive?",
        "Is the soup hot enough?",
        "Is it spicy?"
       ],
       "answer": 3
      },
      {
       "q": "The waiter greets you at the door. Which question means “How many people?”",
       "options": [
        "几位？",
        "多少钱？",
        "几点？",
        "哪里？"
       ],
       "answer": 0
      },
      {
       "q": "Which word means “menu”?",
       "options": [
        "米饭",
        "菜单",
        "服务员",
        "打包"
       ],
       "answer": 1
      },
      {
       "q": "You want to take the leftovers home. Which word do you need?",
       "options": [
        "买单",
        "点菜",
        "好吃",
        "打包"
       ],
       "answer": 3
      },
      {
       "q": "Is tipping expected in most restaurants in mainland China?",
       "options": [
        "Yes, about 10%",
        "Yes, always 20 percent",
        "No, not usually",
        "Only for big groups at dinner"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u5-shopping",
   "icon": "买",
   "title": "Shopping & Bargaining",
   "subtitle": "Ask prices, try things on and bargain with a smile.",
   "minutes": 15,
   "goals": [
    "Ask “How much?” and understand prices",
    "Say “too expensive” and ask for a lower price",
    "Ask to try something on",
    "Know where bargaining is normal"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Shopping in China ranges from huge malls to busy street markets. In this lesson you will ask prices, try things on and practise friendly bargaining."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "多少钱",
       "tr": "duōshao qián",
       "mean": "how much (money)?",
       "example": {
        "t": "这个多少钱？",
        "tr": "Zhège duōshao qián?",
        "mean": "How much is this?"
       }
      },
      {
       "t": "块",
       "tr": "kuài",
       "mean": "yuan (spoken word for money)"
      },
      {
       "t": "贵",
       "tr": "guì",
       "mean": "expensive"
      },
      {
       "t": "便宜",
       "tr": "piányi",
       "mean": "cheap"
      },
      {
       "t": "一点儿",
       "tr": "yìdiǎnr",
       "mean": "a little, a bit",
       "example": {
        "t": "便宜一点儿吧。",
        "tr": "Piányi yìdiǎnr ba.",
        "mean": "Make it a bit cheaper."
       }
      },
      {
       "t": "试",
       "tr": "shì",
       "mean": "to try (on)"
      },
      {
       "t": "件",
       "tr": "jiàn",
       "mean": "measure word for tops and jackets",
       "example": {
        "t": "一件衣服",
        "tr": "yí jiàn yīfu",
        "mean": "a piece of clothing"
       }
      },
      {
       "t": "衣服",
       "tr": "yīfu",
       "mean": "clothes"
      },
      {
       "t": "颜色",
       "tr": "yánsè",
       "mean": "colour"
      },
      {
       "t": "买",
       "tr": "mǎi",
       "mean": "to buy"
      },
      {
       "t": "卖",
       "tr": "mài",
       "mean": "to sell"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Spoken",
      "Written / on price tags",
      "Value"
     ],
     "rows": [
      [
       "{{块}} kuài",
       "{{元}} yuán",
       "1 yuan"
      ],
      [
       "{{毛}} máo",
       "{{角}} jiǎo",
       "0.1 yuan"
      ],
      [
       "{{两块五}} liǎng kuài wǔ",
       "{{2.5元}}",
       "2.50 yuan"
      ]
     ],
     "title": "Talking about money"
    },
    {
     "type": "dialogue",
     "title": "At a clothes market",
     "lines": [
      {
       "who": "Ben",
       "t": "老板，这件衣服多少钱？",
       "tr": "Lǎobǎn, zhè jiàn yīfu duōshao qián?",
       "mean": "Excuse me (boss), how much is this top?"
      },
      {
       "who": "Seller",
       "t": "两百块。",
       "tr": "Liǎngbǎi kuài.",
       "mean": "200 yuan."
      },
      {
       "who": "Ben",
       "t": "我可以试一下吗？",
       "tr": "Wǒ kěyǐ shì yíxià ma?",
       "mean": "Can I try it on?"
      },
      {
       "who": "Seller",
       "t": "可以，那边可以试。",
       "tr": "Kěyǐ, nàbiān kěyǐ shì.",
       "mean": "Sure, you can try it over there."
      },
      {
       "who": "Ben",
       "t": "有点儿贵，便宜一点儿吧。",
       "tr": "Yǒudiǎnr guì, piányi yìdiǎnr ba.",
       "mean": "It's a bit expensive. Make it a little cheaper."
      },
      {
       "who": "Seller",
       "t": "一百八，怎么样？",
       "tr": "Yìbǎi bā, zěnmeyàng?",
       "mean": "180, how about that?"
      },
      {
       "who": "Ben",
       "t": "一百块，可以吗？",
       "tr": "Yìbǎi kuài, kěyǐ ma?",
       "mean": "100 yuan, OK?"
      },
      {
       "who": "Seller",
       "t": "不行不行，一百五，最低了。",
       "tr": "Bù xíng bù xíng, yìbǎi wǔ, zuì dī le.",
       "mean": "No way. 150 is my lowest."
      },
      {
       "who": "Ben",
       "t": "一百二吧，不行我就走了。",
       "tr": "Yìbǎi èr ba, bù xíng wǒ jiù zǒu le.",
       "mean": "Say 120. If not, I'll go."
      },
      {
       "who": "Seller",
       "t": "好吧好吧，一百二，给你。",
       "tr": "Hǎo ba hǎo ba, yìbǎi èr, gěi nǐ.",
       "mean": "Fine, fine. 120, it's yours."
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Short prices drop the last unit: {{一百八}} = 180 (not 108!) and {{两块五}} = 2.50 yuan."
    },
    {
     "type": "sentence",
     "t": "这个多少钱？",
     "tr": "Zhège duōshao qián?",
     "mean": "How much is this?",
     "words": [
      {
       "t": "这个",
       "mean": "this"
      },
      {
       "t": "多少",
       "mean": "how much"
      },
      {
       "t": "钱",
       "mean": "money"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "有没有大一点儿的？",
     "tr": "Yǒu méiyǒu dà yìdiǎnr de?",
     "mean": "Do you have a bigger one?",
     "words": [
      {
       "t": "有没有",
       "mean": "do you have"
      },
      {
       "t": "大",
       "mean": "big"
      },
      {
       "t": "一点儿",
       "mean": "a bit"
      },
      {
       "t": "的",
       "mean": "one (thing)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我只是看看。",
     "tr": "Wǒ zhǐshì kànkan.",
     "mean": "I'm just looking.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "只是",
       "mean": "just"
      },
      {
       "t": "看看",
       "mean": "have a look"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Bargaining is normal at street markets and small stalls, and in tourist markets the first price can be far too high. In malls, supermarkets and chain stores prices are fixed, so don't bargain there."
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "Stay friendly and smile. Walking away politely is the strongest move: the seller may call you back with a better price."
    },
    {
     "type": "steps",
     "title": "Role-play: bargain for a souvenir",
     "items": [
      {
       "title": "Ask the price",
       "t": "这个多少钱？",
       "tr": "Zhège duōshao qián?",
       "mean": "How much is this?"
      },
      {
       "title": "React",
       "t": "太贵了！",
       "tr": "Tài guì le!",
       "mean": "Too expensive!"
      },
      {
       "title": "Make an offer",
       "t": "五十块，可以吗？",
       "tr": "Wǔshí kuài, kěyǐ ma?",
       "mean": "50 yuan, OK?"
      },
      {
       "title": "Meet in the middle",
       "t": "六十吧。",
       "tr": "Liùshí ba.",
       "mean": "Let's say 60."
      },
      {
       "title": "Close the deal",
       "t": "好，我买了。",
       "tr": "Hǎo, wǒ mǎi le.",
       "mean": "OK, I'll take it."
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud, like a real shopper.",
     "lines": [
      "多少钱？",
      "太贵了！",
      "便宜一点儿吧。",
      "我可以试一下吗？",
      "有没有小一点儿的？",
      "好，我买了。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "Listen. What does the speaker think?",
       "say": "太贵了！",
       "options": [
        "It's very cheap",
        "It's too expensive",
        "It's too small",
        "It's the wrong colour for me"
       ],
       "answer": 1
      },
      {
       "q": "In everyday speech, the word for “yuan” is…",
       "options": [
        "块 (kuài)",
        "件 (jiàn)",
        "毛 (máo)",
        "个 (gè)"
       ],
       "answer": 0
      },
      {
       "q": "Where is bargaining normal?",
       "options": [
        "At a street market",
        "In a supermarket",
        "At a big chain store",
        "In a shopping mall shop"
       ],
       "answer": 0
      },
      {
       "q": "{{便宜}} means…",
       "options": [
        "expensive",
        "pretty",
        "cheap",
        "new"
       ],
       "answer": 2
      },
      {
       "q": "How do you say “I'm just looking”?",
       "options": [
        "我可以试一下吗？",
        "我只是看看。",
        "我买了。",
        "太贵了！"
       ],
       "answer": 1
      },
      {
       "q": "The seller says {{一百二}}. What is the price?",
       "options": [
        "102 yuan",
        "112 yuan",
        "1,200 yuan",
        "120 yuan"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u5-directions",
   "icon": "路",
   "title": "Asking for Directions",
   "subtitle": "Find your way with left, right, straight on and landmarks.",
   "minutes": 15,
   "goals": [
    "Ask where a place is and how to get there",
    "Understand left, right, straight and turn",
    "Describe where things are with position words"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Even with a map app, it helps to ask a real person. Learn to ask where something is, follow simple directions and check that you understood."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "在哪儿",
       "tr": "zài nǎr",
       "mean": "where is…?",
       "example": {
        "t": "地铁站在哪儿？",
        "tr": "Dìtiězhàn zài nǎr?",
        "mean": "Where is the subway station?"
       }
      },
      {
       "t": "怎么走",
       "tr": "zěnme zǒu",
       "mean": "how do I get there?"
      },
      {
       "t": "一直走",
       "tr": "yìzhí zǒu",
       "mean": "go straight on"
      },
      {
       "t": "往左拐",
       "tr": "wǎng zuǒ guǎi",
       "mean": "turn left"
      },
      {
       "t": "往右拐",
       "tr": "wǎng yòu guǎi",
       "mean": "turn right"
      },
      {
       "t": "路口",
       "tr": "lùkǒu",
       "mean": "intersection, crossing"
      },
      {
       "t": "红绿灯",
       "tr": "hónglǜdēng",
       "mean": "traffic lights"
      },
      {
       "t": "远",
       "tr": "yuǎn",
       "mean": "far"
      },
      {
       "t": "近",
       "tr": "jìn",
       "mean": "near, close"
      },
      {
       "t": "旁边",
       "tr": "pángbiān",
       "mean": "next to, beside"
      },
      {
       "t": "对面",
       "tr": "duìmiàn",
       "mean": "opposite"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "Looking for the subway",
     "lines": [
      {
       "who": "Lily",
       "t": "请问，地铁站在哪儿？",
       "tr": "Qǐngwèn, dìtiězhàn zài nǎr?",
       "mean": "Excuse me, where is the subway station?"
      },
      {
       "who": "Mr Li",
       "t": "地铁站？离这儿不远。",
       "tr": "Dìtiězhàn? Lí zhèr bù yuǎn.",
       "mean": "The subway station? It's not far from here."
      },
      {
       "who": "Lily",
       "t": "怎么走？",
       "tr": "Zěnme zǒu?",
       "mean": "How do I get there?"
      },
      {
       "who": "Mr Li",
       "t": "你一直往前走，到第二个路口往右拐。",
       "tr": "Nǐ yìzhí wǎng qián zǒu, dào dì-èr ge lùkǒu wǎng yòu guǎi.",
       "mean": "Go straight ahead and turn right at the second intersection."
      },
      {
       "who": "Lily",
       "t": "第二个路口往右拐，对吗？",
       "tr": "Dì-èr ge lùkǒu wǎng yòu guǎi, duì ma?",
       "mean": "Turn right at the second intersection, right?"
      },
      {
       "who": "Mr Li",
       "t": "对。地铁站就在银行旁边。",
       "tr": "Duì. Dìtiězhàn jiù zài yínháng pángbiān.",
       "mean": "Yes. The station is right next to the bank."
      },
      {
       "who": "Lily",
       "t": "走路要多长时间？",
       "tr": "Zǒulù yào duō cháng shíjiān?",
       "mean": "How long does it take on foot?"
      },
      {
       "who": "Mr Li",
       "t": "大概五分钟。",
       "tr": "Dàgài wǔ fēnzhōng.",
       "mean": "About five minutes."
      },
      {
       "who": "Lily",
       "t": "太好了，谢谢您！",
       "tr": "Tài hǎo le, xièxie nín!",
       "mean": "Great, thank you!"
      },
      {
       "who": "Mr Li",
       "t": "不客气。",
       "tr": "Bú kèqi.",
       "mean": "You're welcome."
      }
     ]
    },
    {
     "type": "rule",
     "name": "Saying where something is",
     "color": "blue",
     "desc": "Thing + {{在}} + landmark + position word.",
     "examples": [
      {
       "t": "学校在公园旁边。",
       "tr": "Xuéxiào zài gōngyuán pángbiān.",
       "hl": "旁边"
      },
      {
       "t": "书在桌子上。",
       "tr": "Shū zài zhuōzi shang.",
       "hl": "上"
      },
      {
       "t": "咖啡店在银行对面。",
       "tr": "Kāfēidiàn zài yínháng duìmiàn.",
       "hl": "对面"
      }
     ],
     "how": "The position word comes AFTER the landmark, the opposite of English: ‘the bank’s opposite’, not ‘opposite the bank’."
    },
    {
     "type": "sentence",
     "t": "请问，洗手间在哪儿？",
     "tr": "Qǐngwèn, xǐshǒujiān zài nǎr?",
     "mean": "Excuse me, where is the restroom?",
     "words": [
      {
       "t": "请问",
       "mean": "excuse me (may I ask)"
      },
      {
       "t": "洗手间",
       "mean": "restroom"
      },
      {
       "t": "在",
       "mean": "is at"
      },
      {
       "t": "哪儿",
       "mean": "where"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "银行在超市对面。",
     "tr": "Yínháng zài chāoshì duìmiàn.",
     "mean": "The bank is opposite the supermarket.",
     "words": [
      {
       "t": "银行",
       "mean": "bank"
      },
      {
       "t": "在",
       "mean": "is at"
      },
      {
       "t": "超市",
       "mean": "supermarket"
      },
      {
       "t": "对面",
       "mean": "opposite"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "到红绿灯往左拐。",
     "tr": "Dào hónglǜdēng wǎng zuǒ guǎi.",
     "mean": "Turn left at the traffic lights.",
     "words": [
      {
       "t": "到",
       "mean": "when you reach"
      },
      {
       "t": "红绿灯",
       "mean": "traffic lights"
      },
      {
       "t": "往",
       "mean": "towards"
      },
      {
       "t": "左",
       "mean": "left"
      },
      {
       "t": "拐",
       "mean": "turn"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In Beijing and other northern cities, people often give directions with compass points: {{往东走}} (wǎng dōng zǒu, go east) or {{往北走}} (wǎng běi zǒu, go north). Further south, left and right are more common."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Start with {{请问}} (‘may I ask’) to stop someone politely. To older strangers you can say {{阿姨}} (āyí, auntie) or {{叔叔}} (shūshu, uncle). It sounds warm and friendly."
    },
    {
     "type": "steps",
     "title": "Role-play: find the train station",
     "items": [
      {
       "title": "Get attention",
       "t": "不好意思，请问一下。",
       "tr": "Bù hǎoyìsi, qǐngwèn yíxià.",
       "mean": "Sorry, may I ask something?"
      },
      {
       "title": "Ask where",
       "t": "火车站在哪儿？",
       "tr": "Huǒchēzhàn zài nǎr?",
       "mean": "Where is the train station?"
      },
      {
       "title": "Ask how",
       "t": "怎么走？",
       "tr": "Zěnme zǒu?",
       "mean": "How do I get there?"
      },
      {
       "title": "Check you understood",
       "t": "往左拐，对吗？",
       "tr": "Wǎng zuǒ guǎi, duì ma?",
       "mean": "Turn left, right?",
       "desc": "Repeating the key words is a great way to check."
      },
      {
       "title": "Ask the distance",
       "t": "远不远？",
       "tr": "Yuǎn bu yuǎn?",
       "mean": "Is it far?"
      },
      {
       "title": "Thank them",
       "t": "谢谢您！",
       "tr": "Xièxie nín!",
       "mean": "Thank you!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each direction aloud. Point the way with your hand as you say it!",
     "lines": [
      "一直往前走。",
      "往左拐。",
      "往右拐。",
      "在银行旁边。",
      "离这儿不远。",
      "远不远？"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{往右拐}} means…",
       "options": [
        "turn left",
        "go straight",
        "turn right",
        "go back"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What should you do?",
       "say": "一直往前走。",
       "options": [
        "Turn at the lights",
        "Go straight ahead",
        "It's next to the bank",
        "It's very far from here"
       ],
       "answer": 1
      },
      {
       "q": "Which sentence means “The bank is opposite the supermarket”?",
       "options": [
        "银行对面在超市。",
        "在超市银行对面。",
        "超市在银行旁边。",
        "银行在超市对面。"
       ],
       "answer": 3
      },
      {
       "q": "Which word means “near”?",
       "options": [
        "近",
        "远",
        "左",
        "右"
       ],
       "answer": 0
      },
      {
       "q": "What is a {{路口}}?",
       "options": [
        "an intersection",
        "a traffic light",
        "a subway station",
        "a restroom"
       ],
       "answer": 0
      },
      {
       "q": "In Beijing someone says {{往北走}}. Which way do you go?",
       "options": [
        "South",
        "North",
        "East",
        "West"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u5-transport",
   "icon": "车",
   "title": "Taxi & Subway",
   "subtitle": "Tell a driver where to go and find your way on the metro.",
   "minutes": 15,
   "goals": [
    "Give a taxi driver a destination",
    "Ask which subway line to take and where to change",
    "Pay and get off politely"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Chinese cities have huge subway systems and plenty of taxis. Learn the words you need to ride, change lines and pay."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "出租车",
       "tr": "chūzūchē",
       "mean": "taxi"
      },
      {
       "t": "打车",
       "tr": "dǎchē",
       "mean": "to take a taxi"
      },
      {
       "t": "师傅",
       "tr": "shīfu",
       "mean": "driver (polite word for skilled workers)"
      },
      {
       "t": "地铁",
       "tr": "dìtiě",
       "mean": "subway, metro"
      },
      {
       "t": "号线",
       "tr": "hào xiàn",
       "mean": "(subway) line",
       "example": {
        "t": "二号线",
        "tr": "èr hào xiàn",
        "mean": "Line 2"
       }
      },
      {
       "t": "站",
       "tr": "zhàn",
       "mean": "station, stop"
      },
      {
       "t": "换乘",
       "tr": "huànchéng",
       "mean": "to change lines, transfer"
      },
      {
       "t": "上车",
       "tr": "shàng chē",
       "mean": "to get on"
      },
      {
       "t": "下车",
       "tr": "xià chē",
       "mean": "to get off"
      },
      {
       "t": "堵车",
       "tr": "dǔchē",
       "mean": "traffic jam"
      },
      {
       "t": "票",
       "tr": "piào",
       "mean": "ticket"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "In a taxi",
     "lines": [
      {
       "who": "Tom",
       "t": "师傅，去北京站。",
       "tr": "Shīfu, qù Běijīng Zhàn.",
       "mean": "Driver, to Beijing Railway Station, please."
      },
      {
       "who": "Driver",
       "t": "好的。您赶时间吗？",
       "tr": "Hǎo de. Nín gǎn shíjiān ma?",
       "mean": "OK. Are you in a hurry?"
      },
      {
       "who": "Tom",
       "t": "有点儿急。大概要多长时间？",
       "tr": "Yǒudiǎnr jí. Dàgài yào duō cháng shíjiān?",
       "mean": "A bit. About how long will it take?"
      },
      {
       "who": "Driver",
       "t": "不堵车的话，二十分钟。",
       "tr": "Bù dǔchē dehuà, èrshí fēnzhōng.",
       "mean": "If there's no traffic, twenty minutes."
      },
      {
       "who": "Tom",
       "t": "师傅，前面停一下就行。",
       "tr": "Shīfu, qiánmiàn tíng yíxià jiù xíng.",
       "mean": "Driver, just stop up ahead, that's fine."
      },
      {
       "who": "Driver",
       "t": "好，到了。一共三十五块。",
       "tr": "Hǎo, dào le. Yígòng sānshíwǔ kuài.",
       "mean": "OK, we're here. 35 yuan in total."
      },
      {
       "who": "Tom",
       "t": "我用手机付。",
       "tr": "Wǒ yòng shǒujī fù.",
       "mean": "I'll pay with my phone."
      },
      {
       "who": "Driver",
       "t": "行，扫这个码。",
       "tr": "Xíng, sǎo zhège mǎ.",
       "mean": "Sure, scan this code."
      },
      {
       "who": "Tom",
       "t": "好了。谢谢师傅！",
       "tr": "Hǎo le. Xièxie shīfu!",
       "mean": "Done. Thank you!"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "去天安门坐几号线？",
     "tr": "Qù Tiān'ānmén zuò jǐ hào xiàn?",
     "mean": "Which line goes to Tiananmen?",
     "words": [
      {
       "t": "去",
       "mean": "go to"
      },
      {
       "t": "天安门",
       "mean": "Tiananmen"
      },
      {
       "t": "坐",
       "mean": "take (ride)"
      },
      {
       "t": "几",
       "mean": "which number"
      },
      {
       "t": "号线",
       "mean": "line"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "在下一站换乘二号线。",
     "tr": "Zài xià yí zhàn huànchéng èr hào xiàn.",
     "mean": "Change to Line 2 at the next stop.",
     "words": [
      {
       "t": "在",
       "mean": "at"
      },
      {
       "t": "下一站",
       "mean": "the next stop"
      },
      {
       "t": "换乘",
       "mean": "change to"
      },
      {
       "t": "二号线",
       "mean": "Line 2"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我在这儿下车。",
     "tr": "Wǒ zài zhèr xià chē.",
     "mean": "I'll get off here.",
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
       "t": "这儿",
       "mean": "here"
      },
      {
       "t": "下车",
       "mean": "get off"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Taxi drivers are usually called {{师傅}} (shīfu, ‘master’), a respectful word for people with a skill. Most people now book rides with an app and pay by phone."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Subways in big Chinese cities are fast and cheap, and stops are announced in Chinese and English. At most entrances your bag goes through a security scanner, just like at an airport."
    },
    {
     "type": "steps",
     "title": "Role-play: ride the subway to the airport",
     "items": [
      {
       "title": "Ask which line",
       "t": "去机场坐几号线？",
       "tr": "Qù jīchǎng zuò jǐ hào xiàn?",
       "mean": "Which line goes to the airport?"
      },
      {
       "title": "Buy a ticket",
       "t": "我要一张去西单的票。",
       "tr": "Wǒ yào yì zhāng qù Xīdān de piào.",
       "mean": "I'd like a ticket to Xidan."
      },
      {
       "title": "Ask where to change",
       "t": "在哪儿换乘？",
       "tr": "Zài nǎr huànchéng?",
       "mean": "Where do I change?"
      },
      {
       "title": "Ask how many stops",
       "t": "还有几站？",
       "tr": "Hái yǒu jǐ zhàn?",
       "mean": "How many more stops?"
      },
      {
       "title": "Get off",
       "t": "不好意思，我下车。",
       "tr": "Bù hǎoyìsi, wǒ xià chē.",
       "mean": "Excuse me, I'm getting off.",
       "desc": "Say this to people near the door."
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "师傅，去机场。",
      "前面停一下。",
      "一共多少钱？",
      "坐几号线？",
      "在哪儿换乘？",
      "我在这儿下车。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "What do people usually call a taxi driver?",
       "options": [
        "老师 (lǎoshī)",
        "服务员 (fúwùyuán)",
        "老板 (lǎobǎn)",
        "师傅 (shīfu)"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What should you do?",
       "say": "在下一站换乘。",
       "options": [
        "Get off at the last stop on this line",
        "Buy a ticket here",
        "Change lines at the next stop",
        "Take a taxi"
       ],
       "answer": 2
      },
      {
       "q": "{{堵车}} means…",
       "options": [
        "a car park",
        "a traffic jam",
        "a bus stop",
        "a very fast train"
       ],
       "answer": 1
      },
      {
       "q": "How do you say “I'll get off here”?",
       "options": [
        "我在这儿上车。",
        "我去这儿。",
        "我在这儿下车。",
        "我在这儿换乘。"
       ],
       "answer": 2
      },
      {
       "q": "Which line is {{四号线}}?",
       "options": [
        "Line 4",
        "Line 10",
        "Line 14",
        "Line 40"
       ],
       "answer": 0
      },
      {
       "q": "The driver says {{一共三十五块}}. How much do you pay?",
       "options": [
        "53 yuan",
        "30 yuan",
        "350 yuan",
        "35 yuan"
       ],
       "answer": 3
      }
     ]
    }
   ]
  },
  {
   "id": "u5-hotel",
   "icon": "住",
   "title": "At the Hotel",
   "subtitle": "Check in, ask about breakfast and Wi-Fi, and check out.",
   "minutes": 15,
   "goals": [
    "Check in with a reservation",
    "Ask about breakfast, Wi-Fi and check-out time",
    "Read room numbers the Chinese way"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A smooth check-in makes the whole trip easier. Here are the phrases you'll use at the front desk ({{前台}}, qiántái)."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "酒店",
       "tr": "jiǔdiàn",
       "mean": "hotel"
      },
      {
       "t": "前台",
       "tr": "qiántái",
       "mean": "front desk, reception"
      },
      {
       "t": "预订",
       "tr": "yùdìng",
       "mean": "to book, reserve"
      },
      {
       "t": "房间",
       "tr": "fángjiān",
       "mean": "room"
      },
      {
       "t": "单人间",
       "tr": "dānrénjiān",
       "mean": "single room"
      },
      {
       "t": "双人间",
       "tr": "shuāngrénjiān",
       "mean": "twin room"
      },
      {
       "t": "护照",
       "tr": "hùzhào",
       "mean": "passport"
      },
      {
       "t": "押金",
       "tr": "yājīn",
       "mean": "deposit"
      },
      {
       "t": "早餐",
       "tr": "zǎocān",
       "mean": "breakfast"
      },
      {
       "t": "密码",
       "tr": "mìmǎ",
       "mean": "password"
      },
      {
       "t": "退房",
       "tr": "tuì fáng",
       "mean": "to check out"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "Checking in",
     "lines": [
      {
       "who": "Reception",
       "t": "您好，欢迎光临！",
       "tr": "Nín hǎo, huānyíng guānglín!",
       "mean": "Hello, welcome!"
      },
      {
       "who": "Anna",
       "t": "你好，我预订了一个房间。",
       "tr": "Nǐ hǎo, wǒ yùdìng le yí ge fángjiān.",
       "mean": "Hi, I booked a room."
      },
      {
       "who": "Reception",
       "t": "请问您贵姓？",
       "tr": "Qǐngwèn nín guìxìng?",
       "mean": "May I have your surname?"
      },
      {
       "who": "Anna",
       "t": "我姓史密斯，叫安娜。",
       "tr": "Wǒ xìng Shǐmìsī, jiào Ānnà.",
       "mean": "My surname is Smith, first name Anna."
      },
      {
       "who": "Reception",
       "t": "好的，请给我看一下您的护照。",
       "tr": "Hǎo de, qǐng gěi wǒ kàn yíxià nín de hùzhào.",
       "mean": "OK, please show me your passport."
      },
      {
       "who": "Anna",
       "t": "给您。早餐几点开始？",
       "tr": "Gěi nín. Zǎocān jǐ diǎn kāishǐ?",
       "mean": "Here you are. What time does breakfast start?"
      },
      {
       "who": "Reception",
       "t": "早上七点到十点，在二楼。",
       "tr": "Zǎoshang qī diǎn dào shí diǎn, zài èr lóu.",
       "mean": "From 7 to 10 a.m., on the second floor."
      },
      {
       "who": "Anna",
       "t": "明天几点退房？",
       "tr": "Míngtiān jǐ diǎn tuì fáng?",
       "mean": "What time is check-out tomorrow?"
      },
      {
       "who": "Reception",
       "t": "中午十二点以前。这是您的房卡，八零六房间。",
       "tr": "Zhōngwǔ shí'èr diǎn yǐqián. Zhè shì nín de fángkǎ, bā líng liù fángjiān.",
       "mean": "Before 12 noon. Here is your key card, room 806."
      }
     ]
    },
    {
     "type": "sentence",
     "t": "无线网的密码是多少？",
     "tr": "Wúxiànwǎng de mìmǎ shì duōshao?",
     "mean": "What's the Wi-Fi password?",
     "words": [
      {
       "t": "无线网",
       "mean": "Wi-Fi"
      },
      {
       "t": "的",
       "mean": "('s)"
      },
      {
       "t": "密码",
       "mean": "password"
      },
      {
       "t": "是",
       "mean": "is"
      },
      {
       "t": "多少",
       "mean": "what (number)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "房间里没有热水。",
     "tr": "Fángjiān li méiyǒu rè shuǐ.",
     "mean": "There's no hot water in the room.",
     "words": [
      {
       "t": "房间",
       "mean": "room"
      },
      {
       "t": "里",
       "mean": "in"
      },
      {
       "t": "没有",
       "mean": "there isn't"
      },
      {
       "t": "热水",
       "mean": "hot water"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "可以帮我叫一辆出租车吗？",
     "tr": "Kěyǐ bāng wǒ jiào yí liàng chūzūchē ma?",
     "mean": "Could you call a taxi for me?",
     "words": [
      {
       "t": "可以",
       "mean": "can"
      },
      {
       "t": "帮",
       "mean": "help"
      },
      {
       "t": "我",
       "mean": "me"
      },
      {
       "t": "叫",
       "mean": "call"
      },
      {
       "t": "一",
       "mean": "one"
      },
      {
       "t": "辆",
       "mean": "(measure word for vehicles)"
      },
      {
       "t": "出租车",
       "mean": "taxi"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "memory",
     "text": "Room and phone numbers are read digit by digit, and 1 is often said {{幺}} (yāo) so it isn't confused with 7 (qī). Room 618 = liù yāo bā."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Hotels in China must register every guest, so the front desk will always ask for your passport. A refundable deposit ({{押金}}) is also common at check-in."
    },
    {
     "type": "steps",
     "title": "Role-play: check in and out",
     "items": [
      {
       "title": "Say you booked",
       "t": "我预订了一个房间。",
       "tr": "Wǒ yùdìng le yí ge fángjiān.",
       "mean": "I booked a room."
      },
      {
       "title": "Give your name",
       "t": "我姓林。",
       "tr": "Wǒ xìng Lín.",
       "mean": "My surname is Lin.",
       "desc": "Use your own surname."
      },
      {
       "title": "Hand over your passport",
       "t": "这是我的护照。",
       "tr": "Zhè shì wǒ de hùzhào.",
       "mean": "Here is my passport."
      },
      {
       "title": "Ask about breakfast",
       "t": "有早餐吗？",
       "tr": "Yǒu zǎocān ma?",
       "mean": "Is there breakfast?"
      },
      {
       "title": "Ask for the Wi-Fi",
       "t": "无线网的密码是多少？",
       "tr": "Wúxiànwǎng de mìmǎ shì duōshao?",
       "mean": "What's the Wi-Fi password?"
      },
      {
       "title": "Check out",
       "t": "我要退房。",
       "tr": "Wǒ yào tuì fáng.",
       "mean": "I'd like to check out."
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "我预订了一个房间。",
      "这是我的护照。",
      "早餐几点开始？",
      "密码是多少？",
      "我要退房。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{退房}} means…",
       "options": [
        "to check in",
        "to book a room",
        "to change rooms",
        "to check out"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What does the receptionist want?",
       "say": "请给我看一下您的护照。",
       "options": [
        "Your phone number",
        "Your passport",
        "The room key card",
        "Your breakfast order"
       ],
       "answer": 1
      },
      {
       "q": "How would hotel staff usually read room 618?",
       "options": [
        "liù yāo bā",
        "liùbǎi yīshíbā",
        "liù bǎi bā",
        "bā yāo liù"
       ],
       "answer": 0
      },
      {
       "q": "Why does the front desk ask for your passport?",
       "options": [
        "To keep it until you check out",
        "To check your online booking app",
        "Guests must be registered",
        "To give you a discount"
       ],
       "answer": 2
      },
      {
       "q": "A {{单人间}} is…",
       "options": [
        "a twin room",
        "a suite",
        "a single room",
        "a dormitory bed"
       ],
       "answer": 2
      },
      {
       "q": "{{押金}} is a…",
       "options": [
        "deposit",
        "discount",
        "receipt",
        "room service menu"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u5-phone",
   "icon": "话",
   "title": "Phone Calls & Messaging",
   "subtitle": "Answer the phone, leave a message and swap WeChat contacts.",
   "minutes": 15,
   "goals": [
    "Start and end a phone call",
    "Say phone numbers correctly",
    "Talk about messages, WeChat and batteries"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Phones are at the centre of daily life in China. Learn how to answer a call, ask for someone, give your number and add friends on WeChat."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "打电话",
       "tr": "dǎ diànhuà",
       "mean": "to make a phone call"
      },
      {
       "t": "喂",
       "tr": "wéi",
       "mean": "hello? (on the phone only)"
      },
      {
       "t": "手机号",
       "tr": "shǒujīhào",
       "mean": "mobile number"
      },
      {
       "t": "微信",
       "tr": "Wēixìn",
       "mean": "WeChat"
      },
      {
       "t": "加微信",
       "tr": "jiā Wēixìn",
       "mean": "to add someone on WeChat"
      },
      {
       "t": "扫一扫",
       "tr": "sǎo yi sǎo",
       "mean": "to scan (a QR code)"
      },
      {
       "t": "发",
       "tr": "fā",
       "mean": "to send",
       "example": {
        "t": "我发给你。",
        "tr": "Wǒ fā gěi nǐ.",
        "mean": "I'll send it to you."
       }
      },
      {
       "t": "语音",
       "tr": "yǔyīn",
       "mean": "voice message"
      },
      {
       "t": "回电话",
       "tr": "huí diànhuà",
       "mean": "to call back"
      },
      {
       "t": "打错了",
       "tr": "dǎcuò le",
       "mean": "wrong number"
      },
      {
       "t": "没电了",
       "tr": "méi diàn le",
       "mean": "the battery is dead"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "Calling a teacher",
     "lines": [
      {
       "who": "Xiao Lin",
       "t": "喂，你好！请问是王老师吗？",
       "tr": "Wéi, nǐ hǎo! Qǐngwèn shì Wáng lǎoshī ma?",
       "mean": "Hello! Is this Teacher Wang?"
      },
      {
       "who": "Mr Wang",
       "t": "我就是。您是哪位？",
       "tr": "Wǒ jiù shì. Nín shì nǎ wèi?",
       "mean": "Speaking. Who's calling?"
      },
      {
       "who": "Xiao Lin",
       "t": "我是小林，是您的学生。",
       "tr": "Wǒ shì Xiǎo Lín, shì nín de xuésheng.",
       "mean": "It's Xiao Lin, your student."
      },
      {
       "who": "Mr Wang",
       "t": "哦，小林！有什么事？",
       "tr": "Ò, Xiǎo Lín! Yǒu shénme shì?",
       "mean": "Oh, Xiao Lin! What's up?"
      },
      {
       "who": "Xiao Lin",
       "t": "我明天不能来上课，我感冒了。",
       "tr": "Wǒ míngtiān bù néng lái shàngkè, wǒ gǎnmào le.",
       "mean": "I can't come to class tomorrow. I've caught a cold."
      },
      {
       "who": "Mr Wang",
       "t": "没关系，好好休息。",
       "tr": "Méi guānxi, hǎohǎo xiūxi.",
       "mean": "That's OK. Get plenty of rest."
      },
      {
       "who": "Xiao Lin",
       "t": "您能把作业发到我的微信上吗？",
       "tr": "Nín néng bǎ zuòyè fā dào wǒ de Wēixìn shang ma?",
       "mean": "Could you send the homework to my WeChat?"
      },
      {
       "who": "Mr Wang",
       "t": "可以。你的手机号是多少？",
       "tr": "Kěyǐ. Nǐ de shǒujīhào shì duōshao?",
       "mean": "Sure. What's your mobile number?"
      },
      {
       "who": "Xiao Lin",
       "t": "一三九，八八六七，二零五四。",
       "tr": "Yāo sān jiǔ, bā bā liù qī, èr líng wǔ sì.",
       "mean": "139 8867 2054."
      },
      {
       "who": "Mr Wang",
       "t": "好，我一会儿加你。",
       "tr": "Hǎo, wǒ yíhuìr jiā nǐ.",
       "mean": "OK, I'll add you in a moment."
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你打错了。",
     "tr": "Nǐ dǎcuò le.",
     "mean": "You've got the wrong number.",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "打错",
       "mean": "dialled wrongly"
      },
      {
       "t": "了",
       "mean": "(done)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我手机没电了。",
     "tr": "Wǒ shǒujī méi diàn le.",
     "mean": "My phone battery is dead.",
     "words": [
      {
       "t": "我",
       "mean": "my"
      },
      {
       "t": "手机",
       "mean": "mobile phone"
      },
      {
       "t": "没",
       "mean": "has no more"
      },
      {
       "t": "电",
       "mean": "power"
      },
      {
       "t": "了",
       "mean": "(change)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我们加个微信吧。",
     "tr": "Wǒmen jiā ge Wēixìn ba.",
     "mean": "Let's add each other on WeChat.",
     "words": [
      {
       "t": "我们",
       "mean": "we"
      },
      {
       "t": "加",
       "mean": "add"
      },
      {
       "t": "个",
       "mean": "(measure word)"
      },
      {
       "t": "微信",
       "mean": "WeChat"
      },
      {
       "t": "吧",
       "mean": "(suggestion)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "tip",
     "text": "On the phone, {{喂}} is usually said with a rising tone (wéi) and means ‘hello?’. Face to face it sounds like ‘hey, you!’, so don't use it to greet people in person."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "WeChat ({{微信}}) is used for almost everything in China: chatting, voice messages, paying, booking and work groups. When people meet, they often scan each other's QR code instead of swapping numbers."
    },
    {
     "type": "steps",
     "title": "Role-play: call an office",
     "items": [
      {
       "title": "Answer or start",
       "t": "喂，你好！",
       "tr": "Wéi, nǐ hǎo!",
       "mean": "Hello?"
      },
      {
       "title": "Ask for someone",
       "t": "请问李经理在吗？",
       "tr": "Qǐngwèn Lǐ jīnglǐ zài ma?",
       "mean": "Is Manager Li there, please?"
      },
      {
       "title": "Ask who is calling",
       "t": "请问您是哪位？",
       "tr": "Qǐngwèn nín shì nǎ wèi?",
       "mean": "May I ask who's calling?"
      },
      {
       "title": "Leave a message",
       "t": "请他给我回电话。",
       "tr": "Qǐng tā gěi wǒ huí diànhuà.",
       "mean": "Please ask him to call me back."
      },
      {
       "title": "Say goodbye",
       "t": "好的，再见！",
       "tr": "Hǎo de, zàijiàn!",
       "mean": "OK, goodbye!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud. Then say your own phone number in Chinese!",
     "lines": [
      "喂，你好！",
      "您是哪位？",
      "你的手机号是多少？",
      "我们加个微信吧。",
      "我手机没电了。",
      "请给我回电话。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "On the phone, {{喂}} means…",
       "options": [
        "Goodbye",
        "Hello?",
        "Thank you",
        "Wrong number"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the problem?",
       "say": "你打错了。",
       "options": [
        "The phone is off",
        "Please call me back later this evening",
        "The signal is bad",
        "Wrong number"
       ],
       "answer": 3
      },
      {
       "q": "How is the 1 in a phone number like 139 usually said?",
       "options": [
        "yāo",
        "yī",
        "yí",
        "shí"
       ],
       "answer": 0
      },
      {
       "q": "{{我手机没电了}} means…",
       "options": [
        "I don't have a phone",
        "My phone is new",
        "I lost my mobile phone yesterday",
        "My battery is dead"
       ],
       "answer": 3
      },
      {
       "q": "How do people often add each other on WeChat?",
       "options": [
        "Exchange business cards",
        "Write an email",
        "Scan a QR code",
        "Send a letter"
       ],
       "answer": 2
      },
      {
       "q": "{{回电话}} means…",
       "options": [
        "to hang up",
        "to call back",
        "to make a video call",
        "to send a text"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u5-plans",
   "icon": "约",
   "title": "Making Plans",
   "subtitle": "Invite a friend, agree on a time and place, or say no politely.",
   "minutes": 15,
   "goals": [
    "Ask if someone is free",
    "Suggest activities with 吧",
    "Set a time and place to meet",
    "Decline an invitation politely"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Making plans with friends is great practice. Learn to invite, suggest, agree on a time and place, and politely say no."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "有空",
       "tr": "yǒu kòng",
       "mean": "to be free (have time)"
      },
      {
       "t": "周末",
       "tr": "zhōumò",
       "mean": "weekend"
      },
      {
       "t": "一起",
       "tr": "yìqǐ",
       "mean": "together"
      },
      {
       "t": "看电影",
       "tr": "kàn diànyǐng",
       "mean": "to see a film"
      },
      {
       "t": "见面",
       "tr": "jiànmiàn",
       "mean": "to meet"
      },
      {
       "t": "约",
       "tr": "yuē",
       "mean": "to arrange (to meet)"
      },
      {
       "t": "门口",
       "tr": "ménkǒu",
       "mean": "entrance, at the door"
      },
      {
       "t": "怎么样",
       "tr": "zěnmeyàng",
       "mean": "how about it?"
      },
      {
       "t": "改天",
       "tr": "gǎitiān",
       "mean": "another day"
      },
      {
       "t": "不见不散",
       "tr": "bú jiàn bú sàn",
       "mean": "see you there! (we won't leave until we meet)"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "A weekend plan",
     "lines": [
      {
       "who": "Xiao Zhang",
       "t": "米娅，这个周末你有空吗？",
       "tr": "Mǐyà, zhège zhōumò nǐ yǒu kòng ma?",
       "mean": "Mia, are you free this weekend?"
      },
      {
       "who": "Mia",
       "t": "星期六有事，星期天有空。怎么了？",
       "tr": "Xīngqīliù yǒu shì, xīngqītiān yǒu kòng. Zěnme le?",
       "mean": "I'm busy on Saturday, free on Sunday. Why?"
      },
      {
       "who": "Xiao Zhang",
       "t": "我们一起去看电影吧！",
       "tr": "Wǒmen yìqǐ qù kàn diànyǐng ba!",
       "mean": "Let's go and see a film together!"
      },
      {
       "who": "Mia",
       "t": "好啊！看什么电影？",
       "tr": "Hǎo a! Kàn shénme diànyǐng?",
       "mean": "Sure! Which film?"
      },
      {
       "who": "Xiao Zhang",
       "t": "有一个新的中国电影，听说很好看。",
       "tr": "Yǒu yí ge xīn de Zhōngguó diànyǐng, tīngshuō hěn hǎokàn.",
       "mean": "There's a new Chinese film. I hear it's really good."
      },
      {
       "who": "Mia",
       "t": "几点见面？在哪儿见？",
       "tr": "Jǐ diǎn jiànmiàn? Zài nǎr jiàn?",
       "mean": "What time shall we meet? Where?"
      },
      {
       "who": "Xiao Zhang",
       "t": "下午两点，在电影院门口，怎么样？",
       "tr": "Xiàwǔ liǎng diǎn, zài diànyǐngyuàn ménkǒu, zěnmeyàng?",
       "mean": "2 p.m. at the cinema entrance, how's that?"
      },
      {
       "who": "Mia",
       "t": "没问题。看完电影一起吃饭吧。",
       "tr": "Méi wèntí. Kàn wán diànyǐng yìqǐ chī fàn ba.",
       "mean": "No problem. Let's eat together after the film."
      },
      {
       "who": "Xiao Zhang",
       "t": "好主意！星期天见，不见不散！",
       "tr": "Hǎo zhǔyi! Xīngqītiān jiàn, bú jiàn bú sàn!",
       "mean": "Good idea! See you Sunday. Be there!"
      },
      {
       "who": "Mia",
       "t": "不见不散！",
       "tr": "Bú jiàn bú sàn!",
       "mean": "See you there!"
      }
     ]
    },
    {
     "type": "rule",
     "name": "Suggest with 吧 (ba)",
     "color": "green",
     "desc": "Put {{吧}} at the end of a sentence to make a friendly suggestion: ‘Let's…’.",
     "examples": [
      {
       "t": "我们走吧。",
       "tr": "Wǒmen zǒu ba.",
       "hl": "吧"
      },
      {
       "t": "一起去吧！",
       "tr": "Yìqǐ qù ba!",
       "hl": "吧"
      },
      {
       "t": "我们喝咖啡吧。",
       "tr": "Wǒmen hē kāfēi ba.",
       "hl": "吧"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你明天晚上有空吗？",
     "tr": "Nǐ míngtiān wǎnshang yǒu kòng ma?",
     "mean": "Are you free tomorrow evening?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "明天",
       "mean": "tomorrow"
      },
      {
       "t": "晚上",
       "mean": "evening"
      },
      {
       "t": "有空",
       "mean": "are free"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "不好意思，我那天有事。",
     "tr": "Bù hǎoyìsi, wǒ nà tiān yǒu shì.",
     "mean": "Sorry, I'm busy that day.",
     "words": [
      {
       "t": "不好意思",
       "mean": "sorry"
      },
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "那天",
       "mean": "that day"
      },
      {
       "t": "有事",
       "mean": "have something on"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我们改天再约吧。",
     "tr": "Wǒmen gǎitiān zài yuē ba.",
     "mean": "Let's make it another day.",
     "words": [
      {
       "t": "我们",
       "mean": "we"
      },
      {
       "t": "改天",
       "mean": "another day"
      },
      {
       "t": "再",
       "mean": "again"
      },
      {
       "t": "约",
       "mean": "arrange"
      },
      {
       "t": "吧",
       "mean": "(suggestion)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "A direct ‘no’ can feel harsh. People often decline with {{我那天有事}} (‘I have something on that day’) or {{下次吧}} (‘next time’). If someone says {{改天吧}} without naming a day, it may simply be a polite no."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Whoever invites often pays, and friends may playfully ‘fight’ over the bill. Among young people, splitting the bill is also common: it's called {{AA制}} (AA zhì)."
    },
    {
     "type": "steps",
     "title": "Role-play: invite a friend hiking",
     "items": [
      {
       "title": "Ask if they're free",
       "t": "你周六有空吗？",
       "tr": "Nǐ zhōuliù yǒu kòng ma?",
       "mean": "Are you free on Saturday?"
      },
      {
       "title": "Suggest an activity",
       "t": "我们去爬山吧！",
       "tr": "Wǒmen qù pá shān ba!",
       "mean": "Let's go hiking!"
      },
      {
       "title": "Set a time",
       "t": "早上九点怎么样？",
       "tr": "Zǎoshang jiǔ diǎn zěnmeyàng?",
       "mean": "How about 9 a.m.?"
      },
      {
       "title": "Set a place",
       "t": "在地铁站见。",
       "tr": "Zài dìtiězhàn jiàn.",
       "mean": "Let's meet at the subway station."
      },
      {
       "title": "Confirm",
       "t": "不见不散！",
       "tr": "Bú jiàn bú sàn!",
       "mean": "See you there!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "你周末有空吗？",
      "我们一起去吧！",
      "几点见面？",
      "在门口见。",
      "不好意思，我有事。",
      "不见不散！"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{有空}} means…",
       "options": [
        "to be busy",
        "to be late",
        "to be free",
        "to be hungry"
       ],
       "answer": 2
      },
      {
       "q": "Listen. What is your friend suggesting?",
       "say": "我们一起去看电影吧！",
       "options": [
        "Did you see the film?",
        "Seeing a film together",
        "Shall we watch TV at my place tonight?",
        "The cinema is closed"
       ],
       "answer": 1
      },
      {
       "q": "What does {{吧}} add to {{我们走吧}}?",
       "options": [
        "a question",
        "past tense",
        "makes it a negative sentence",
        "a suggestion (let's)"
       ],
       "answer": 3
      },
      {
       "q": "People say {{不见不散}} when…",
       "options": [
        "confirming a plan to meet",
        "turning down an invite",
        "apologising for being late",
        "saying goodbye forever"
       ],
       "answer": 0
      },
      {
       "q": "A friend says {{改天吧}} with no date. It probably means…",
       "options": [
        "yes, tomorrow",
        "let's meet right now",
        "maybe not this time",
        "I'll pay for everything"
       ],
       "answer": 2
      },
      {
       "q": "Which word means “weekend”?",
       "options": [
        "周六",
        "周末",
        "晚上",
        "明天"
       ],
       "answer": 1
      }
     ]
    }
   ]
  },
  {
   "id": "u5-doctor",
   "icon": "医",
   "title": "At the Doctor",
   "subtitle": "Say what's wrong, understand advice and get medicine.",
   "minutes": 15,
   "goals": [
    "Say how you feel and what hurts",
    "Say how long you've been ill and mention allergies",
    "Understand how to take medicine"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Nobody wants to get sick abroad, but knowing a few phrases makes it much less stressful. Learn to explain your symptoms and understand the doctor."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "医院",
       "tr": "yīyuàn",
       "mean": "hospital"
      },
      {
       "t": "医生",
       "tr": "yīshēng",
       "mean": "doctor"
      },
      {
       "t": "不舒服",
       "tr": "bù shūfu",
       "mean": "unwell, not feeling well"
      },
      {
       "t": "疼",
       "tr": "téng",
       "mean": "to hurt, ache",
       "example": {
        "t": "头疼",
        "tr": "tóuténg",
        "mean": "headache"
       }
      },
      {
       "t": "发烧",
       "tr": "fāshāo",
       "mean": "to have a fever"
      },
      {
       "t": "咳嗽",
       "tr": "késou",
       "mean": "to cough"
      },
      {
       "t": "感冒",
       "tr": "gǎnmào",
       "mean": "a cold; to catch a cold"
      },
      {
       "t": "过敏",
       "tr": "guòmǐn",
       "mean": "allergic; allergy"
      },
      {
       "t": "药",
       "tr": "yào",
       "mean": "medicine"
      },
      {
       "t": "药店",
       "tr": "yàodiàn",
       "mean": "pharmacy"
      },
      {
       "t": "挂号",
       "tr": "guàhào",
       "mean": "to register (at a hospital)"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "Seeing the doctor",
     "lines": [
      {
       "who": "Doctor",
       "t": "你好，哪儿不舒服？",
       "tr": "Nǐ hǎo, nǎr bù shūfu?",
       "mean": "Hello, what's the problem?"
      },
      {
       "who": "David",
       "t": "我头疼，还有点儿发烧。",
       "tr": "Wǒ tóuténg, hái yǒudiǎnr fāshāo.",
       "mean": "I have a headache and a slight fever."
      },
      {
       "who": "Doctor",
       "t": "几天了？",
       "tr": "Jǐ tiān le?",
       "mean": "For how many days?"
      },
      {
       "who": "David",
       "t": "两天了。晚上一直咳嗽。",
       "tr": "Liǎng tiān le. Wǎnshang yìzhí késou.",
       "mean": "Two days. I keep coughing at night."
      },
      {
       "who": "Doctor",
       "t": "我看看。张开嘴，说“啊”。",
       "tr": "Wǒ kànkan. Zhāngkāi zuǐ, shuō “ā”.",
       "mean": "Let me see. Open your mouth and say “ah”."
      },
      {
       "who": "Doctor",
       "t": "你感冒了，不太严重。你对什么药过敏吗？",
       "tr": "Nǐ gǎnmào le, bú tài yánzhòng. Nǐ duì shénme yào guòmǐn ma?",
       "mean": "You have a cold, not too serious. Are you allergic to any medicine?"
      },
      {
       "who": "David",
       "t": "没有。",
       "tr": "Méiyǒu.",
       "mean": "No."
      },
      {
       "who": "Doctor",
       "t": "这个药一天吃三次，一次两片。",
       "tr": "Zhège yào yì tiān chī sān cì, yí cì liǎng piàn.",
       "mean": "Take this medicine three times a day, two tablets each time."
      },
      {
       "who": "David",
       "t": "我明天能上班吗？",
       "tr": "Wǒ míngtiān néng shàngbān ma?",
       "mean": "Can I go to work tomorrow?"
      },
      {
       "who": "Doctor",
       "t": "最好在家休息两天，多喝热水。",
       "tr": "Zuìhǎo zài jiā xiūxi liǎng tiān, duō hē rè shuǐ.",
       "mean": "Better rest at home for two days, and drink plenty of hot water."
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
       "{{头疼}}",
       "tóuténg",
       "headache"
      ],
      [
       "{{牙疼}}",
       "yá téng",
       "toothache"
      ],
      [
       "{{肚子疼}}",
       "dùzi téng",
       "stomach ache"
      ],
      [
       "{{嗓子疼}}",
       "sǎngzi téng",
       "sore throat"
      ],
      [
       "{{腿疼}}",
       "tuǐ téng",
       "my leg hurts"
      ]
     ],
     "title": "Body part + 疼 = it hurts"
    },
    {
     "type": "sentence",
     "t": "我肚子疼。",
     "tr": "Wǒ dùzi téng.",
     "mean": "I have a stomach ache.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "肚子",
       "mean": "stomach"
      },
      {
       "t": "疼",
       "mean": "hurts"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我对花生过敏。",
     "tr": "Wǒ duì huāshēng guòmǐn.",
     "mean": "I'm allergic to peanuts.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "对",
       "mean": "to"
      },
      {
       "t": "花生",
       "mean": "peanuts"
      },
      {
       "t": "过敏",
       "mean": "allergic"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "附近有药店吗？",
     "tr": "Fùjìn yǒu yàodiàn ma?",
     "mean": "Is there a pharmacy nearby?",
     "words": [
      {
       "t": "附近",
       "mean": "nearby"
      },
      {
       "t": "有",
       "mean": "there is"
      },
      {
       "t": "药店",
       "mean": "pharmacy"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "In China people usually go to a hospital ({{医院}}) even for small problems, rather than to a family doctor. First you register ({{挂号}}), often on an app or a machine, then wait for your number to be called."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "‘Drink more hot water’ ({{多喝热水}}) is the classic Chinese advice for almost any illness. It's a caring thing to say, and a popular joke too!"
    },
    {
     "type": "tip",
     "kind": "warn",
     "text": "In an emergency in mainland China, call {{120}} for an ambulance (110 is the police, 119 the fire service)."
    },
    {
     "type": "steps",
     "title": "Role-play: at the clinic",
     "items": [
      {
       "title": "Say you feel unwell",
       "t": "我不舒服。",
       "tr": "Wǒ bù shūfu.",
       "mean": "I don't feel well."
      },
      {
       "title": "Say what hurts",
       "t": "我嗓子疼。",
       "tr": "Wǒ sǎngzi téng.",
       "mean": "My throat hurts."
      },
      {
       "title": "Say how long",
       "t": "三天了。",
       "tr": "Sān tiān le.",
       "mean": "For three days."
      },
      {
       "title": "Mention allergies",
       "t": "我对青霉素过敏。",
       "tr": "Wǒ duì qīngméisù guòmǐn.",
       "mean": "I'm allergic to penicillin.",
       "desc": "Learn the name of anything you are allergic to before you travel."
      },
      {
       "title": "Ask about the medicine",
       "t": "这个药怎么吃？",
       "tr": "Zhège yào zěnme chī?",
       "mean": "How do I take this medicine?"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "我不舒服。",
      "我头疼。",
      "我发烧了。",
      "我对花生过敏。",
      "这个药怎么吃？",
      "多喝热水！"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{发烧}} means…",
       "options": [
        "to cough",
        "to have a headache",
        "to sneeze",
        "to have a fever"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What's wrong?",
       "say": "我头疼。",
       "options": [
        "I have a headache",
        "My stomach hurts",
        "I have a fever",
        "I'm allergic to peanuts"
       ],
       "answer": 0
      },
      {
       "q": "{{一天吃三次}} means take it…",
       "options": [
        "for three days",
        "three times a day",
        "three tablets at once",
        "once every three days"
       ],
       "answer": 1
      },
      {
       "q": "Which number calls an ambulance in mainland China?",
       "options": [
        "110",
        "119",
        "120",
        "999"
       ],
       "answer": 2
      },
      {
       "q": "{{我对花生过敏}} means…",
       "options": [
        "I love eating peanuts",
        "I ate peanuts",
        "Peanuts are good for you",
        "I'm allergic to peanuts"
       ],
       "answer": 3
      },
      {
       "q": "How do you ask “Is there a pharmacy nearby?”",
       "options": [
        "附近有药店吗？",
        "医院在哪儿？",
        "你哪儿不舒服？",
        "这个药怎么吃？"
       ],
       "answer": 0
      }
     ]
    }
   ]
  },
  {
   "id": "u5-smalltalk",
   "icon": "天",
   "title": "Small Talk & the Weather",
   "subtitle": "Chat with neighbours about the weather and daily life.",
   "minutes": 15,
   "goals": [
    "Talk about the weather and temperature",
    "Use everyday greetings like 你吃了吗",
    "Handle personal questions with a smile"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Small talk builds friendships. Chinese small talk is often about food, work and daily life, and of course the weather."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "天气",
       "tr": "tiānqì",
       "mean": "weather"
      },
      {
       "t": "晴天",
       "tr": "qíngtiān",
       "mean": "sunny day"
      },
      {
       "t": "下雨",
       "tr": "xià yǔ",
       "mean": "to rain"
      },
      {
       "t": "下雪",
       "tr": "xià xuě",
       "mean": "to snow"
      },
      {
       "t": "刮风",
       "tr": "guā fēng",
       "mean": "to be windy"
      },
      {
       "t": "冷",
       "tr": "lěng",
       "mean": "cold"
      },
      {
       "t": "热",
       "tr": "rè",
       "mean": "hot"
      },
      {
       "t": "度",
       "tr": "dù",
       "mean": "degree(s)"
      },
      {
       "t": "天气预报",
       "tr": "tiānqì yùbào",
       "mean": "weather forecast"
      },
      {
       "t": "伞",
       "tr": "sǎn",
       "mean": "umbrella"
      },
      {
       "t": "最近",
       "tr": "zuìjìn",
       "mean": "recently, lately"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "A cold morning",
     "lines": [
      {
       "who": "Auntie Liu",
       "t": "山姆，早啊！去哪儿啊？",
       "tr": "Shānmǔ, zǎo a! Qù nǎr a?",
       "mean": "Morning, Sam! Where are you off to?"
      },
      {
       "who": "Sam",
       "t": "刘阿姨，早！我去上班。",
       "tr": "Liú āyí, zǎo! Wǒ qù shàngbān.",
       "mean": "Morning, Auntie Liu! I'm going to work."
      },
      {
       "who": "Auntie Liu",
       "t": "今天真冷啊！你穿得太少了。",
       "tr": "Jīntiān zhēn lěng a! Nǐ chuān de tài shǎo le.",
       "mean": "It's so cold today! You're not wearing enough."
      },
      {
       "who": "Sam",
       "t": "是啊，昨天还挺暖和的。",
       "tr": "Shì a, zuótiān hái tǐng nuǎnhuo de.",
       "mean": "Yes, yesterday it was still quite warm."
      },
      {
       "who": "Auntie Liu",
       "t": "天气预报说下午要下雪。",
       "tr": "Tiānqì yùbào shuō xiàwǔ yào xià xuě.",
       "mean": "The forecast says it will snow this afternoon."
      },
      {
       "who": "Sam",
       "t": "真的吗？那我带把伞吧。",
       "tr": "Zhēn de ma? Nà wǒ dài bǎ sǎn ba.",
       "mean": "Really? Then I'll take an umbrella."
      },
      {
       "who": "Auntie Liu",
       "t": "最近工作忙不忙？",
       "tr": "Zuìjìn gōngzuò máng bu máng?",
       "mean": "Is work busy these days?"
      },
      {
       "who": "Sam",
       "t": "挺忙的，不过还好。您身体好吗？",
       "tr": "Tǐng máng de, búguò hái hǎo. Nín shēntǐ hǎo ma?",
       "mean": "Quite busy, but OK. Are you keeping well?"
      },
      {
       "who": "Auntie Liu",
       "t": "好着呢！快去吧，别迟到了。",
       "tr": "Hǎo zhe ne! Kuài qù ba, bié chídào le.",
       "mean": "Very well! Off you go, don't be late."
      },
      {
       "who": "Sam",
       "t": "好，回头见！",
       "tr": "Hǎo, huítóu jiàn!",
       "mean": "OK, see you later!"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "今天多少度？",
     "tr": "Jīntiān duōshao dù?",
     "mean": "What's the temperature today?",
     "words": [
      {
       "t": "今天",
       "mean": "today"
      },
      {
       "t": "多少",
       "mean": "how many"
      },
      {
       "t": "度",
       "mean": "degrees"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "明天会下雨吗？",
     "tr": "Míngtiān huì xià yǔ ma?",
     "mean": "Will it rain tomorrow?",
     "words": [
      {
       "t": "明天",
       "mean": "tomorrow"
      },
      {
       "t": "会",
       "mean": "will"
      },
      {
       "t": "下雨",
       "mean": "rain"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "你吃了吗？",
     "tr": "Nǐ chī le ma?",
     "mean": "Have you eaten?",
     "words": [
      {
       "t": "你",
       "mean": "you"
      },
      {
       "t": "吃",
       "mean": "eat"
      },
      {
       "t": "了",
       "mean": "(done)"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ],
     "note": "A friendly greeting, especially from older people. Just answer {{吃了}} (chī le). It is not an invitation to lunch!"
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Many everyday greetings are really comments on what you're doing: {{去哪儿啊？}} (Where are you off to?), {{上班啊？}} (Off to work?), {{你吃了吗？}} (Have you eaten?). They are greetings, not real questions, so a short answer is fine."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Chinese friends may ask your age, salary or whether you're married. This is usually friendly curiosity. If you'd rather not answer, smile and say {{保密！}} (bǎomì, ‘It's a secret!’)."
    },
    {
     "type": "tip",
     "kind": "fun",
     "text": "Temperatures are given in Celsius. {{零下五度}} (língxià wǔ dù) means −5 °C."
    },
    {
     "type": "steps",
     "title": "Role-play: chat with a neighbour",
     "items": [
      {
       "title": "Greet them",
       "t": "早啊！",
       "tr": "Zǎo a!",
       "mean": "Morning!"
      },
      {
       "title": "Comment on the weather",
       "t": "今天真热啊！",
       "tr": "Jīntiān zhēn rè a!",
       "mean": "It's so hot today!"
      },
      {
       "title": "Ask about the forecast",
       "t": "明天会下雨吗？",
       "tr": "Míngtiān huì xià yǔ ma?",
       "mean": "Will it rain tomorrow?"
      },
      {
       "title": "Ask about their life",
       "t": "最近忙吗？",
       "tr": "Zuìjìn máng ma?",
       "mean": "Busy lately?"
      },
      {
       "title": "Leave politely",
       "t": "我先走了，回头见！",
       "tr": "Wǒ xiān zǒu le, huítóu jiàn!",
       "mean": "I'll be off, see you later!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud with feeling.",
     "lines": [
      "今天真冷啊！",
      "今天真热啊！",
      "明天会下雨吗？",
      "你吃了吗？",
      "最近忙不忙？",
      "回头见！"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{下雪}} means…",
       "options": [
        "to rain",
        "to snow",
        "to be windy",
        "to be sunny"
       ],
       "answer": 1
      },
      {
       "q": "Listen. What is the speaker saying?",
       "say": "今天真冷啊！",
       "options": [
        "It's really hot today",
        "It will rain today",
        "Today is very busy",
        "It's really cold today"
       ],
       "answer": 3
      },
      {
       "q": "A neighbour greets you with {{你吃了吗？}}. A good reply is…",
       "options": [
        "吃了，你呢？",
        "我不饿。",
        "请我吃饭吧！",
        "不要。"
       ],
       "answer": 0
      },
      {
       "q": "{{零下五度}} is…",
       "options": [
        "5 °C",
        "15 °C",
        "−5 °C",
        "50 °C"
       ],
       "answer": 2
      },
      {
       "q": "You'd rather not say your salary. You can smile and say…",
       "options": [
        "保密！",
        "没问题！",
        "不客气！",
        "再见！"
       ],
       "answer": 0
      },
      {
       "q": "{{天气预报}} is…",
       "options": [
        "an umbrella",
        "a sunny day",
        "the weather forecast",
        "the temperature in degrees Celsius"
       ],
       "answer": 2
      }
     ]
    }
   ]
  },
  {
   "id": "u5-school-work",
   "icon": "学",
   "title": "At School & Work",
   "subtitle": "Introduce yourself to classmates and colleagues and talk about your day.",
   "minutes": 15,
   "goals": [
    "Introduce yourself at a new class or job",
    "Talk about timetables, meetings and exams",
    "Use titles and polite set phrases"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Starting at a new school or office? These words and phrases help you fit in from day one."
    },
    {
     "type": "vocab",
     "title": "Key words",
     "items": [
      {
       "t": "学校",
       "tr": "xuéxiào",
       "mean": "school"
      },
      {
       "t": "同学",
       "tr": "tóngxué",
       "mean": "classmate"
      },
      {
       "t": "上课",
       "tr": "shàngkè",
       "mean": "to have class; class starts"
      },
      {
       "t": "作业",
       "tr": "zuòyè",
       "mean": "homework"
      },
      {
       "t": "考试",
       "tr": "kǎoshì",
       "mean": "exam"
      },
      {
       "t": "公司",
       "tr": "gōngsī",
       "mean": "company"
      },
      {
       "t": "同事",
       "tr": "tóngshì",
       "mean": "colleague"
      },
      {
       "t": "上班",
       "tr": "shàngbān",
       "mean": "to go to work, start work"
      },
      {
       "t": "下班",
       "tr": "xiàbān",
       "mean": "to finish work"
      },
      {
       "t": "开会",
       "tr": "kāihuì",
       "mean": "to have a meeting"
      },
      {
       "t": "加班",
       "tr": "jiābān",
       "mean": "to work overtime"
      },
      {
       "t": "请假",
       "tr": "qǐngjià",
       "mean": "to ask for time off"
      }
     ]
    },
    {
     "type": "dialogue",
     "title": "First day at the office",
     "lines": [
      {
       "who": "Manager Chen",
       "t": "大家好，这位是新同事李乐。",
       "tr": "Dàjiā hǎo, zhè wèi shì xīn tóngshì Lǐ Lè.",
       "mean": "Hi everyone, this is our new colleague, Li Le."
      },
      {
       "who": "Li Le",
       "t": "大家好！我叫李乐，请多关照！",
       "tr": "Dàjiā hǎo! Wǒ jiào Lǐ Lè, qǐng duō guānzhào!",
       "mean": "Hello everyone! I'm Li Le. I look forward to working with you!"
      },
      {
       "who": "Zhou Ting",
       "t": "欢迎欢迎！我叫周婷，坐你旁边。",
       "tr": "Huānyíng huānyíng! Wǒ jiào Zhōu Tíng, zuò nǐ pángbiān.",
       "mean": "Welcome! I'm Zhou Ting. I sit next to you."
      },
      {
       "who": "Li Le",
       "t": "你好！我们几点上班？",
       "tr": "Nǐ hǎo! Wǒmen jǐ diǎn shàngbān?",
       "mean": "Hi! What time do we start work?"
      },
      {
       "who": "Zhou Ting",
       "t": "九点上班，六点下班，中午休息一个小时。",
       "tr": "Jiǔ diǎn shàngbān, liù diǎn xiàbān, zhōngwǔ xiūxi yí ge xiǎoshí.",
       "mean": "We start at 9 and finish at 6, with an hour's break at noon."
      },
      {
       "who": "Li Le",
       "t": "经常加班吗？",
       "tr": "Jīngcháng jiābān ma?",
       "mean": "Do we often work overtime?"
      },
      {
       "who": "Zhou Ting",
       "t": "有时候。对了，下午三点要开会。",
       "tr": "Yǒu shíhou. Duì le, xiàwǔ sān diǎn yào kāihuì.",
       "mean": "Sometimes. Oh, and there's a meeting at 3 p.m."
      },
      {
       "who": "Li Le",
       "t": "在哪个会议室？",
       "tr": "Zài nǎge huìyìshì?",
       "mean": "In which meeting room?"
      },
      {
       "who": "Zhou Ting",
       "t": "三楼的大会议室。中午一起去食堂吃饭吧！",
       "tr": "Sān lóu de dà huìyìshì. Zhōngwǔ yìqǐ qù shítáng chī fàn ba!",
       "mean": "The big one on the third floor. Let's go to the canteen together at lunch!"
      },
      {
       "who": "Li Le",
       "t": "好啊，谢谢你！",
       "tr": "Hǎo a, xièxie nǐ!",
       "mean": "Great, thank you!"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "老师，我可以问一个问题吗？",
     "tr": "Lǎoshī, wǒ kěyǐ wèn yí ge wèntí ma?",
     "mean": "Teacher, may I ask a question?",
     "words": [
      {
       "t": "老师",
       "mean": "teacher"
      },
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "可以",
       "mean": "may"
      },
      {
       "t": "问",
       "mean": "ask"
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
       "t": "问题",
       "mean": "question"
      },
      {
       "t": "吗",
       "mean": "(question word)"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "明天有考试，我得复习。",
     "tr": "Míngtiān yǒu kǎoshì, wǒ děi fùxí.",
     "mean": "There's an exam tomorrow, so I have to revise.",
     "words": [
      {
       "t": "明天",
       "mean": "tomorrow"
      },
      {
       "t": "有",
       "mean": "there is"
      },
      {
       "t": "考试",
       "mean": "exam"
      },
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "得",
       "mean": "have to"
      },
      {
       "t": "复习",
       "mean": "revise"
      }
     ]
    },
    {
     "type": "sentence",
     "t": "我想请一天假。",
     "tr": "Wǒ xiǎng qǐng yì tiān jià.",
     "mean": "I'd like to take a day off.",
     "words": [
      {
       "t": "我",
       "mean": "I"
      },
      {
       "t": "想",
       "mean": "would like"
      },
      {
       "t": "请",
       "mean": "ask for"
      },
      {
       "t": "一",
       "mean": "one"
      },
      {
       "t": "天",
       "mean": "day"
      },
      {
       "t": "假",
       "mean": "leave"
      }
     ],
     "note": "{{请假}} splits around the length of time: {{请两天假}} = take two days off."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "{{请多关照}} (qǐng duō guānzhào, ‘please look after me’) is a polite set phrase for a first day at work or school. Saying it makes a great first impression."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "Use titles: surname + job title, like {{王经理}} (Manager Wang) or {{李老师}} (Teacher Li). Calling a teacher or boss by their given name alone can sound too casual."
    },
    {
     "type": "tip",
     "kind": "culture",
     "text": "The {{高考}} (gāokǎo), the national university entrance exam, takes place every June. It's a huge event: families plan around it and even traffic is kept quiet near exam halls."
    },
    {
     "type": "steps",
     "title": "Role-play: your first day",
     "items": [
      {
       "title": "Greet everyone",
       "t": "大家好！",
       "tr": "Dàjiā hǎo!",
       "mean": "Hello everyone!"
      },
      {
       "title": "Say your name",
       "t": "我叫马克。",
       "tr": "Wǒ jiào Mǎkè.",
       "mean": "My name is Mark.",
       "desc": "Use your own name."
      },
      {
       "title": "Say who you are",
       "t": "我是新来的同事。",
       "tr": "Wǒ shì xīn lái de tóngshì.",
       "mean": "I'm the new colleague.",
       "desc": "At school, say {{新同学}} (new classmate) instead."
      },
      {
       "title": "Ask something practical",
       "t": "请问，打印机在哪儿？",
       "tr": "Qǐngwèn, dǎyìnjī zài nǎr?",
       "mean": "Excuse me, where's the printer?"
      },
      {
       "title": "Finish politely",
       "t": "请多关照！",
       "tr": "Qǐng duō guānzhào!",
       "mean": "I look forward to working with you!"
      }
     ]
    },
    {
     "type": "practice",
     "title": "Say it aloud",
     "text": "Read each line aloud.",
     "lines": [
      "大家好！",
      "请多关照！",
      "几点上班？",
      "下午要开会。",
      "明天有考试。",
      "我想请一天假。"
     ]
    },
    {
     "type": "quiz",
     "title": "Quick quiz",
     "items": [
      {
       "q": "{{下班}} means…",
       "options": [
        "to start work",
        "to work overtime",
        "to have a meeting",
        "to finish work"
       ],
       "answer": 3
      },
      {
       "q": "Listen. What's happening this afternoon?",
       "say": "下午三点要开会。",
       "options": [
        "Work ends at 3 p.m.",
        "A meeting at 3",
        "Class starts at 3 p.m.",
        "The exam is at 3 p.m."
       ],
       "answer": 1
      },
      {
       "q": "What do you say when you join a new team?",
       "options": [
        "请多关照！",
        "多少钱？",
        "不见不散！",
        "买单！"
       ],
       "answer": 0
      },
      {
       "q": "How should you address Manager Wang?",
       "options": [
        "王",
        "经理王",
        "小王经理",
        "王经理"
       ],
       "answer": 3
      },
      {
       "q": "{{同学}} means…",
       "options": [
        "colleague",
        "classmate",
        "teacher",
        "manager"
       ],
       "answer": 1
      },
      {
       "q": "{{请假}} means…",
       "options": [
        "to take an exam",
        "to work late overtime",
        "to ask for leave",
        "to do homework"
       ],
       "answer": 2
      }
     ]
    }
   ]
  }
 ]
});
