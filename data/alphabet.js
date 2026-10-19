/* Learn Mandarin course data. Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
LC.alphabet = {
 "groups": [
  {
   "id": "initials",
   "label": "Initials",
   "note": "The consonant that starts a syllable. Mandarin has 21, plus y and w as spelling helpers."
  },
  {
   "id": "finals",
   "label": "Finals",
   "note": "Everything after the initial: simple vowels, vowel glides and finals ending in n or ng."
  },
  {
   "id": "tones",
   "label": "Tones",
   "note": "The pitch of the voice. Four main tones plus a light neutral tone change the meaning of a syllable."
  }
 ],
 "items": [
  {
   "id": "b",
   "ch": "b",
   "name": "b",
   "say": "爸",
   "tr": "bà",
   "group": "initials",
   "sound": "Like the p in \"spin\": lips together, then open with no puff of air. To English ears it sounds close to b.",
   "example": {
    "t": "爸爸",
    "tr": "bàba",
    "mean": "dad"
   },
   "tip": "Hold a tissue in front of your lips: for b it should hardly move."
  },
  {
   "id": "p",
   "ch": "p",
   "name": "p",
   "say": "怕",
   "tr": "pà",
   "group": "initials",
   "sound": "Like the p in \"pie\", with a strong puff of air.",
   "example": {
    "t": "朋友",
    "tr": "péngyou",
    "mean": "friend"
   },
   "tip": "For p the tissue should flutter. b and p differ by the puff, not by the voice."
  },
  {
   "id": "m",
   "ch": "m",
   "name": "m",
   "say": "妈",
   "tr": "mā",
   "group": "initials",
   "sound": "Just like English m in \"mum\".",
   "example": {
    "t": "妈妈",
    "tr": "māma",
    "mean": "mum"
   }
  },
  {
   "id": "f",
   "ch": "f",
   "name": "f",
   "say": "发",
   "tr": "fā",
   "group": "initials",
   "sound": "Just like English f in \"fun\".",
   "example": {
    "t": "米饭",
    "tr": "mǐfàn",
    "mean": "cooked rice"
   }
  },
  {
   "id": "d",
   "ch": "d",
   "name": "d",
   "say": "大",
   "tr": "dà",
   "group": "initials",
   "sound": "Like the t in \"stop\": tongue tip behind the top teeth, no puff of air. Sounds close to English d.",
   "example": {
    "t": "弟弟",
    "tr": "dìdi",
    "mean": "younger brother"
   }
  },
  {
   "id": "t",
   "ch": "t",
   "name": "t",
   "say": "他",
   "tr": "tā",
   "group": "initials",
   "sound": "Like the t in \"top\", with a strong puff of air.",
   "example": {
    "t": "天气",
    "tr": "tiānqì",
    "mean": "weather"
   }
  },
  {
   "id": "n",
   "ch": "n",
   "name": "n",
   "say": "那",
   "tr": "nà",
   "group": "initials",
   "sound": "Just like English n in \"no\".",
   "example": {
    "t": "你",
    "tr": "nǐ",
    "mean": "you"
   }
  },
  {
   "id": "l",
   "ch": "l",
   "name": "l",
   "say": "拉",
   "tr": "lā",
   "group": "initials",
   "sound": "Just like English l in \"let\".",
   "example": {
    "t": "老师",
    "tr": "lǎoshī",
    "mean": "teacher"
   }
  },
  {
   "id": "g",
   "ch": "g",
   "name": "g",
   "say": "哥",
   "tr": "gē",
   "group": "initials",
   "sound": "Like the k in \"skin\": no puff of air. Sounds close to the g in \"go\".",
   "example": {
    "t": "哥哥",
    "tr": "gēge",
    "mean": "older brother"
   }
  },
  {
   "id": "k",
   "ch": "k",
   "name": "k",
   "say": "可",
   "tr": "kě",
   "group": "initials",
   "sound": "Like the k in \"kite\", with a strong puff of air.",
   "example": {
    "t": "咖啡",
    "tr": "kāfēi",
    "mean": "coffee"
   }
  },
  {
   "id": "h",
   "ch": "h",
   "name": "h",
   "say": "喝",
   "tr": "hē",
   "group": "initials",
   "sound": "Rougher than English h: the air rubs at the back of the mouth, a little like a soft \"ch\" in Scottish \"loch\".",
   "example": {
    "t": "好",
    "tr": "hǎo",
    "mean": "good"
   }
  },
  {
   "id": "j",
   "ch": "j",
   "name": "j",
   "say": "鸡",
   "tr": "jī",
   "group": "initials",
   "sound": "Like the j in \"jeep\", but keep the tongue tip down behind your lower teeth and smile. No puff of air.",
   "example": {
    "t": "家",
    "tr": "jiā",
    "mean": "home, family"
   },
   "tip": "j, q and x only ever come before i or ü."
  },
  {
   "id": "q",
   "ch": "q",
   "name": "q",
   "say": "七",
   "tr": "qī",
   "group": "initials",
   "sound": "Like the ch in \"cheese\", but with the tongue tip down behind your lower teeth, plus a puff of air.",
   "example": {
    "t": "钱",
    "tr": "qián",
    "mean": "money"
   },
   "tip": "q is never \"kw\"! 七 qī sounds like \"chee\"."
  },
  {
   "id": "x",
   "ch": "x",
   "name": "x",
   "say": "西",
   "tr": "xī",
   "group": "initials",
   "sound": "Between s and sh: tongue tip down behind the lower teeth, lips in a smile, like \"sh\" in \"sheep\" said while smiling.",
   "example": {
    "t": "谢谢",
    "tr": "xièxie",
    "mean": "thank you"
   },
   "tip": "x is never \"ks\"! 西 xī sounds like \"shee\"."
  },
  {
   "id": "zh",
   "ch": "zh",
   "name": "zh",
   "say": "知",
   "tr": "zhī",
   "group": "initials",
   "sound": "Like the j in \"judge\", but with the tongue tip curled back to touch the roof of the mouth. No puff of air.",
   "example": {
    "t": "中国",
    "tr": "Zhōngguó",
    "mean": "China"
   }
  },
  {
   "id": "ch",
   "ch": "ch",
   "name": "ch",
   "say": "吃",
   "tr": "chī",
   "group": "initials",
   "sound": "Like the ch in \"church\", with the tongue tip curled back and a puff of air.",
   "example": {
    "t": "茶",
    "tr": "chá",
    "mean": "tea"
   }
  },
  {
   "id": "sh",
   "ch": "sh",
   "name": "sh",
   "say": "十",
   "tr": "shí",
   "group": "initials",
   "sound": "Like the sh in \"shirt\", with the tongue tip curled back.",
   "example": {
    "t": "书",
    "tr": "shū",
    "mean": "book"
   }
  },
  {
   "id": "r",
   "ch": "r",
   "name": "r",
   "say": "日",
   "tr": "rì",
   "group": "initials",
   "sound": "Curl the tongue back as for sh and add your voice: somewhere between the r in \"run\" and the s in \"pleasure\".",
   "example": {
    "t": "人",
    "tr": "rén",
    "mean": "person"
   }
  },
  {
   "id": "z",
   "ch": "z",
   "name": "z",
   "say": "字",
   "tr": "zì",
   "group": "initials",
   "sound": "Like the ds in \"kids\". No puff of air.",
   "example": {
    "t": "再见",
    "tr": "zàijiàn",
    "mean": "goodbye"
   }
  },
  {
   "id": "c",
   "ch": "c",
   "name": "c",
   "say": "词",
   "tr": "cí",
   "group": "initials",
   "sound": "Like the ts in \"cats\", with a strong puff of air.",
   "example": {
    "t": "菜",
    "tr": "cài",
    "mean": "dish, vegetable"
   },
   "tip": "c is never k! 菜 cài sounds like \"tsai\"."
  },
  {
   "id": "s",
   "ch": "s",
   "name": "s",
   "say": "四",
   "tr": "sì",
   "group": "initials",
   "sound": "Just like the s in \"sun\".",
   "example": {
    "t": "三",
    "tr": "sān",
    "mean": "three"
   }
  },
  {
   "id": "y",
   "ch": "y",
   "name": "y",
   "say": "牙",
   "tr": "yá",
   "group": "initials",
   "sound": "Like the y in \"yes\". In pinyin, y is really a spelling for i or ü at the start of a syllable.",
   "example": {
    "t": "医生",
    "tr": "yīshēng",
    "mean": "doctor"
   }
  },
  {
   "id": "w",
   "ch": "w",
   "name": "w",
   "say": "我",
   "tr": "wǒ",
   "group": "initials",
   "sound": "Like the w in \"we\". In pinyin, w is really a spelling for u at the start of a syllable.",
   "example": {
    "t": "晚上",
    "tr": "wǎnshang",
    "mean": "evening"
   }
  },
  {
   "id": "a",
   "ch": "a",
   "name": "a",
   "say": "啊",
   "tr": "ā",
   "group": "finals",
   "sound": "Like the a in \"father\", with the mouth wide open.",
   "example": {
    "t": "大",
    "tr": "dà",
    "mean": "big"
   }
  },
  {
   "id": "o",
   "ch": "o",
   "name": "o",
   "say": "哦",
   "tr": "ò",
   "group": "finals",
   "sound": "Like \"aw\" with rounded lips. After b p m f a tiny \"w\" slips in: bo sounds like \"bwaw\".",
   "example": {
    "t": "伯伯",
    "tr": "bóbo",
    "mean": "uncle (dad's older brother)"
   }
  },
  {
   "id": "e",
   "ch": "e",
   "name": "e",
   "say": "饿",
   "tr": "è",
   "group": "finals",
   "sound": "Not like English e! Say the \"u\" of \"duh\" further back in the throat, lips relaxed and spread.",
   "example": {
    "t": "喝",
    "tr": "hē",
    "mean": "to drink"
   }
  },
  {
   "id": "i",
   "ch": "i",
   "name": "i",
   "say": "一",
   "tr": "yī",
   "group": "finals",
   "sound": "Like the ee in \"see\". After z c s zh ch sh r it is not \"ee\" but a buzz (see Unit 1).",
   "example": {
    "t": "米",
    "tr": "mǐ",
    "mean": "rice (grain)"
   }
  },
  {
   "id": "u",
   "ch": "u",
   "name": "u",
   "say": "五",
   "tr": "wǔ",
   "group": "finals",
   "sound": "Like the oo in \"food\", with lips well rounded.",
   "example": {
    "t": "书",
    "tr": "shū",
    "mean": "book"
   }
  },
  {
   "id": "u-umlaut",
   "ch": "ü",
   "name": "ü",
   "say": "鱼",
   "tr": "yú",
   "group": "finals",
   "sound": "Say \"ee\", then round your lips as for \"oo\" without moving your tongue. Like French u or German ü.",
   "example": {
    "t": "女",
    "tr": "nǚ",
    "mean": "woman, female"
   },
   "tip": "Smile-and-kiss: tongue says \"ee\", lips say \"oo\"."
  },
  {
   "id": "er",
   "ch": "er",
   "name": "er",
   "say": "二",
   "tr": "èr",
   "group": "finals",
   "sound": "Like \"are\" in American English, with the tongue tip curled back.",
   "example": {
    "t": "儿子",
    "tr": "érzi",
    "mean": "son"
   }
  },
  {
   "id": "ai",
   "ch": "ai",
   "name": "ai",
   "say": "爱",
   "tr": "ài",
   "group": "finals",
   "sound": "Like \"eye\".",
   "example": {
    "t": "白",
    "tr": "bái",
    "mean": "white"
   }
  },
  {
   "id": "ei",
   "ch": "ei",
   "name": "ei",
   "say": "飞",
   "tr": "fēi",
   "group": "finals",
   "sound": "Like the \"ay\" in \"say\".",
   "example": {
    "t": "黑",
    "tr": "hēi",
    "mean": "black"
   }
  },
  {
   "id": "ao",
   "ch": "ao",
   "name": "ao",
   "say": "好",
   "tr": "hǎo",
   "group": "finals",
   "sound": "Like the \"ow\" in \"cow\".",
   "example": {
    "t": "猫",
    "tr": "māo",
    "mean": "cat"
   }
  },
  {
   "id": "ou",
   "ch": "ou",
   "name": "ou",
   "say": "欧",
   "tr": "ōu",
   "group": "finals",
   "sound": "Like the \"o\" in \"go\".",
   "example": {
    "t": "狗",
    "tr": "gǒu",
    "mean": "dog"
   }
  },
  {
   "id": "an",
   "ch": "an",
   "name": "an",
   "say": "安",
   "tr": "ān",
   "group": "finals",
   "sound": "Like \"ahn\": the a of \"father\" plus a clear n.",
   "example": {
    "t": "饭",
    "tr": "fàn",
    "mean": "meal"
   }
  },
  {
   "id": "en",
   "ch": "en",
   "name": "en",
   "say": "门",
   "tr": "mén",
   "group": "finals",
   "sound": "Like the \"un\" in \"under\" plus n, or the \"en\" in \"taken\".",
   "example": {
    "t": "很",
    "tr": "hěn",
    "mean": "very"
   }
  },
  {
   "id": "ang",
   "ch": "ang",
   "name": "ang",
   "say": "忙",
   "tr": "máng",
   "group": "finals",
   "sound": "Like \"ahng\": the a of \"father\" plus the ng of \"sing\".",
   "example": {
    "t": "汤",
    "tr": "tāng",
    "mean": "soup"
   }
  },
  {
   "id": "eng",
   "ch": "eng",
   "name": "eng",
   "say": "冷",
   "tr": "lěng",
   "group": "finals",
   "sound": "Like the \"ung\" in \"lung\".",
   "example": {
    "t": "灯",
    "tr": "dēng",
    "mean": "lamp, light"
   }
  },
  {
   "id": "ong",
   "ch": "ong",
   "name": "ong",
   "say": "东",
   "tr": "dōng",
   "group": "finals",
   "sound": "Between the \"ong\" of \"song\" and \"oong\", with rounded lips.",
   "example": {
    "t": "红",
    "tr": "hóng",
    "mean": "red"
   }
  },
  {
   "id": "ia",
   "ch": "ia",
   "name": "ia",
   "say": "家",
   "tr": "jiā",
   "group": "finals",
   "sound": "\"ee\" + \"ah\" glided together, like \"yah\".",
   "example": {
    "t": "下",
    "tr": "xià",
    "mean": "down, below"
   }
  },
  {
   "id": "ie",
   "ch": "ie",
   "name": "ie",
   "say": "也",
   "tr": "yě",
   "group": "finals",
   "sound": "\"ee\" + \"eh\", like the \"ye\" in \"yes\".",
   "example": {
    "t": "谢谢",
    "tr": "xièxie",
    "mean": "thank you"
   }
  },
  {
   "id": "iao",
   "ch": "iao",
   "name": "iao",
   "say": "要",
   "tr": "yào",
   "group": "finals",
   "sound": "\"ee\" + \"ow\", like \"yow\".",
   "example": {
    "t": "小",
    "tr": "xiǎo",
    "mean": "small"
   }
  },
  {
   "id": "iu",
   "ch": "iu (iou)",
   "name": "iu",
   "say": "六",
   "tr": "liù",
   "group": "finals",
   "sound": "Short for iou: \"ee\" + \"oh\", like \"yo\". 六 liù sounds like \"lyoh\".",
   "example": {
    "t": "九",
    "tr": "jiǔ",
    "mean": "nine"
   }
  },
  {
   "id": "ian",
   "ch": "ian",
   "name": "ian",
   "say": "天",
   "tr": "tiān",
   "group": "finals",
   "sound": "Careful: ian sounds like \"yen\", not \"yan\".",
   "example": {
    "t": "钱",
    "tr": "qián",
    "mean": "money"
   },
   "tip": "ian rhymes with \"ten\", not with \"fan\"."
  },
  {
   "id": "in",
   "ch": "in",
   "name": "in",
   "say": "心",
   "tr": "xīn",
   "group": "finals",
   "sound": "Like the \"een\" in \"seen\", but shorter.",
   "example": {
    "t": "今天",
    "tr": "jīntiān",
    "mean": "today"
   }
  },
  {
   "id": "iang",
   "ch": "iang",
   "name": "iang",
   "say": "想",
   "tr": "xiǎng",
   "group": "finals",
   "sound": "\"ee\" + \"ahng\", like \"yahng\".",
   "example": {
    "t": "两",
    "tr": "liǎng",
    "mean": "two (of something)"
   }
  },
  {
   "id": "ing",
   "ch": "ing",
   "name": "ing",
   "say": "听",
   "tr": "tīng",
   "group": "finals",
   "sound": "Like the \"ing\" in \"sing\", often with a light \"uh\" glide before the ng.",
   "example": {
    "t": "名字",
    "tr": "míngzi",
    "mean": "name"
   }
  },
  {
   "id": "iong",
   "ch": "iong",
   "name": "iong",
   "say": "用",
   "tr": "yòng",
   "group": "finals",
   "sound": "\"ee\" + \"oong\", like \"yoong\".",
   "example": {
    "t": "熊",
    "tr": "xióng",
    "mean": "bear"
   }
  },
  {
   "id": "ua",
   "ch": "ua",
   "name": "ua",
   "say": "花",
   "tr": "huā",
   "group": "finals",
   "sound": "\"oo\" + \"ah\", like \"wah\".",
   "example": {
    "t": "西瓜",
    "tr": "xīguā",
    "mean": "watermelon"
   }
  },
  {
   "id": "uo",
   "ch": "uo",
   "name": "uo",
   "say": "多",
   "tr": "duō",
   "group": "finals",
   "sound": "\"oo\" + \"aw\", like \"waw\".",
   "example": {
    "t": "国",
    "tr": "guó",
    "mean": "country"
   }
  },
  {
   "id": "uai",
   "ch": "uai",
   "name": "uai",
   "say": "快",
   "tr": "kuài",
   "group": "finals",
   "sound": "\"oo\" + \"eye\", like \"why\".",
   "example": {
    "t": "筷子",
    "tr": "kuàizi",
    "mean": "chopsticks"
   }
  },
  {
   "id": "ui",
   "ch": "ui (uei)",
   "name": "ui",
   "say": "对",
   "tr": "duì",
   "group": "finals",
   "sound": "Short for uei: \"oo\" + \"ay\", like \"way\". 对 duì sounds like \"dway\".",
   "example": {
    "t": "水",
    "tr": "shuǐ",
    "mean": "water"
   }
  },
  {
   "id": "uan",
   "ch": "uan",
   "name": "uan",
   "say": "欢",
   "tr": "huān",
   "group": "finals",
   "sound": "\"oo\" + \"ahn\", like \"wahn\".",
   "example": {
    "t": "玩",
    "tr": "wán",
    "mean": "to play"
   }
  },
  {
   "id": "un",
   "ch": "un (uen)",
   "name": "un",
   "say": "春",
   "tr": "chūn",
   "group": "finals",
   "sound": "Short for uen: \"oo\" + \"un\", like \"won\".",
   "example": {
    "t": "困",
    "tr": "kùn",
    "mean": "sleepy"
   }
  },
  {
   "id": "uang",
   "ch": "uang",
   "name": "uang",
   "say": "黄",
   "tr": "huáng",
   "group": "finals",
   "sound": "\"oo\" + \"ahng\", like \"wahng\".",
   "example": {
    "t": "床",
    "tr": "chuáng",
    "mean": "bed"
   }
  },
  {
   "id": "u-umlaut-e",
   "ch": "üe",
   "name": "üe",
   "say": "月",
   "tr": "yuè",
   "group": "finals",
   "sound": "ü + \"eh\": start with rounded lips, then open to \"eh\".",
   "example": {
    "t": "学",
    "tr": "xué",
    "mean": "to study"
   }
  },
  {
   "id": "u-umlaut-an",
   "ch": "üan",
   "name": "üan",
   "say": "远",
   "tr": "yuǎn",
   "group": "finals",
   "sound": "ü + \"en\": like \"ywen\".",
   "example": {
    "t": "元",
    "tr": "yuán",
    "mean": "yuan (money)"
   }
  },
  {
   "id": "u-umlaut-n",
   "ch": "ün",
   "name": "ün",
   "say": "云",
   "tr": "yún",
   "group": "finals",
   "sound": "ü + n: keep the lips rounded, then close with n.",
   "example": {
    "t": "裙子",
    "tr": "qúnzi",
    "mean": "skirt"
   }
  },
  {
   "id": "tone-1",
   "ch": "mā",
   "name": "1st tone (high and level)",
   "say": "妈",
   "tr": "mā",
   "group": "tones",
   "sound": "High and flat, like holding one long note when you sing. Keep the voice up and steady.",
   "example": {
    "t": "妈妈",
    "tr": "māma",
    "mean": "mum"
   },
   "tip": "The mark ¯ is flat, just like the voice."
  },
  {
   "id": "tone-2",
   "ch": "má",
   "name": "2nd tone (rising)",
   "say": "麻",
   "tr": "má",
   "group": "tones",
   "sound": "Rising from middle to high, like a surprised \"What?\".",
   "example": {
    "t": "茶",
    "tr": "chá",
    "mean": "tea"
   },
   "tip": "The mark ´ climbs up, just like the voice."
  },
  {
   "id": "tone-3",
   "ch": "mǎ",
   "name": "3rd tone (low, dipping)",
   "say": "马",
   "tr": "mǎ",
   "group": "tones",
   "sound": "Low, dipping down and coming back up, like a doubtful \"Well...?\". In quick speech it often just stays low.",
   "example": {
    "t": "好",
    "tr": "hǎo",
    "mean": "good"
   },
   "tip": "The mark ˇ is a valley: down, then up."
  },
  {
   "id": "tone-4",
   "ch": "mà",
   "name": "4th tone (falling)",
   "say": "骂",
   "tr": "mà",
   "group": "tones",
   "sound": "Falling sharply from high to low, like a firm \"No!\" or \"Go!\".",
   "example": {
    "t": "不",
    "tr": "bù",
    "mean": "not, no"
   },
   "tip": "The mark ` drops down, just like the voice."
  },
  {
   "id": "tone-0",
   "ch": "ma",
   "name": "Neutral tone (light)",
   "say": "吗",
   "tr": "ma",
   "group": "tones",
   "sound": "Short, light and unstressed, with no mark. Its pitch depends on the syllable before it.",
   "example": {
    "t": "谢谢",
    "tr": "xièxie",
    "mean": "thank you"
   },
   "tip": "No mark, no effort: just let it drop lightly."
  }
 ]
};
