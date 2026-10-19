/* ZyeemZia language courses — printable book and workbook (same data as the web app).
   Copyright © ZyeemZia */
(function () {
  'use strict';
  const { C, esc, md, plain, hl, fold, prepare, seeded, isHan } = window.LX;
  const MOTIF = String(C.htmlLang || 'fr').split('-')[0];
  const ART = (window.LXART || {})[MOTIF] || { scene: '', icon: '', corner: '' };
  document.documentElement.setAttribute('data-motif', MOTIF);
  const D = prepare();
  const HL = C.htmlLang || 'und';
  const L1 = (C.lang || 'the language').split(' ')[0];
  const KEYS = ['A', 'B', 'C', 'D'];
  const tg = (t, cls) => `<span class="${cls || 'tg'}" lang="${HL}">${esc(t)}</span>`;
  const glen = s => [...String(s).replace(/\s/g, '')].length;
  const sz = t => glen(t) > 5 ? 'long' : glen(t) > 3 ? 'mid' : '';
  const badge = (u, txt, cls) => { const t = txt || u.icon; const n = glen(t); return `<span class="badge star ${cls || ''} ${n >= 4 ? 'bx4' : n === 3 ? 'bx3' : ''}" data-c="${u.color}" lang="${HL}">${esc(t)}</span>`; };
  const HZ = {}; // stroke data for Chinese characters, loaded before rendering

  /* ---------- copybook rows ---------- */
  function copyRow(text, level, reps) {
    if (C.hanzi && [...text].every(isHan) && text.length <= 2) return gridRow(text);
    const wide = level === 'line' || glen(text) > 9;
    if (wide) return `<div class="wk-row wide lv-${level}"><div class="wk-copy"><span class="m" lang="${HL}">${esc(text)}</span></div><div class="wk-copy"><span class="g" lang="${HL}">${esc(text)}</span></div><div class="wk-free"></div><div class="wk-free"></div></div>`;
    const ghosts = `<span class="g" lang="${HL}">${esc(text)}</span>`.repeat(Math.max(0, reps - 1));
    return `<div class="wk-row lv-${level}"><div class="wk-copy"><span class="m" lang="${HL}">${esc(text)}</span>${ghosts}</div><div class="wk-free"></div></div>`;
  }
  /* Chinese practice grid (tian zi ge): model, faint copies, empty boxes */
  function gridRow(text) {
    const chars = [...text]; const cells = [];
    for (let i = 0; i < 12; i++) {
      const ch = chars[i % chars.length];
      cells.push(`<span class="tz ${i < chars.length ? 'm' : i < chars.length * 4 ? 'g' : ''}" lang="${HL}">${i < chars.length * 4 ? esc(ch) : ''}</span>`);
    }
    return `<div class="tz-row">${cells.join('')}</div>`;
  }
  /* stroke-by-stroke diagram from Hanzi Writer data (1024 grid, y up) */
  function strokeStrip(ch) {
    const d = HZ[ch]; if (!d || !d.strokes) return '';
    const g = k => d.strokes.map((p, i) => i > k ? '' : `<path d="${p}" class="${i === k ? 'now' : 'done'}"/>`).join('');
    return `<div class="so">${d.strokes.map((_, k) => `<svg viewBox="0 0 1024 1024"><g transform="translate(0,900) scale(1,-1)">${g(k)}</g><text x="40" y="150" class="so-n">${k + 1}</text></svg>`).join('')}</div>`;
  }

  function cover() {
    return `<section class="page cover"><div class="khatam"></div><div class="cover-in">
      <div class="cover-top">${D.units.length} Units · ${D.lessons.length} Lessons · English to ${esc(C.lang || "")}</div>
      <div class="cover-cal" lang="${HL}">${esc(C.native || '')}</div>
      <h1>${esc(C.title || '')}<span class="sub">Book &amp; Workbook</span></h1>
      <p class="cover-lead">${esc(C.tagline || '')}</p>
      <div class="cover-art">${ART.scene}</div>
      <div class="cover-units" style="grid-template-columns:repeat(${D.units.length},minmax(0,1fr))">${D.units.map(u => `<div><b lang="${HL}">${esc(u.icon)}</b>${md(u.title)}</div>`).join('')}</div>
      <div class="cover-copy">Copyright © ZyeemZia · ${esc(C.domain || '')}</div>
    </div></section>`;
  }

  function intro() {
    return `<section class="page" style="page:bare">
      <div class="eyebrow">Before you begin</div>
      <h1 class="h-page">How to use this book</h1>
      <p>This book and the interactive web app at <b>${esc(C.domain || '')}</b> are the same course. Write and practise in the book; use the web app to hear every word and sentence, take quizzes, review words with flashcards and play games.</p>
      <div class="howto">
        <div><b>1. Listen first</b>Open the same lesson in the web app and tap each word to hear it. Copy the sound, not the spelling.</div>
        <div><b>2. Read aloud</b>Say every example and sentence out loud. Your mouth learns ${esc(L1)} sounds faster than your eyes do.</div>
        <div><b>3. Use a pencil</b>Use a pencil for quizzes and writing so you can erase and retry. Answers are at the end of each unit.</div>
        <div><b>4. Little but daily</b>15 minutes a day, 5 days a week: two or three lessons a week. Steady beats fast.</div>
      </div>
      <div class="routine">
        <div><b>3′</b>Review the last lesson</div>
        <div><b>7′</b>New lesson</div>
        <div><b>3′</b>Read aloud &amp; write</div>
        <div><b>2′</b>Quiz or flashcards</div>
      </div>
      <div class="learner">
        <div>Learner's name <span class="line"></span></div>
        <div>Start date <span class="line"></span> My goal <span class="line"></span></div>
      </div>
      <p style="margin-top:6mm;font-size:9pt;color:var(--ink-2)">Pronunciation help: ${esc(C.trNote || (C.cjk ? 'pinyin with tone marks is printed under every word.' : 'an easy English-style respelling is printed under every word.'))}</p>
      <p class="imprint">${esc(C.title || '')} · ${esc(C.native || '')}<br>Copyright © ZyeemZia. All rights reserved.</p>
    </section>`;
  }

  function toc() {
    let n = 0;
    return `<section class="flow" style="page:bare"><div class="eyebrow">Contents</div><h1 class="h-page">What you will learn</h1>
      ${D.units.map(u => `<div class="toc-unit" data-c="${u.color}"><h3>${badge(u)} Unit ${u.order}: ${md(u.title)}</h3>
        <ol start="${n + 1}">${u.lessons.map(l => { n++; return `<li>${md(l.title)}</li>`; }).join('')}</ol></div>`).join('')}
      <div class="toc-unit" data-c="teal"><h3>${badge({ color: 'teal', icon: '+' })} Appendix</h3>
        <ol>${['Word-search puzzles', 'Sentence puzzles', `${C.rootsLabel || 'Word families'}`, `My ${L1} journal & blank copybook`, 'Puzzle answers', 'Progress tracker', 'Certificate'].map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>
    </section>`;
  }

  function alphabetChart() {
    if (!D.alphabet.length) return '';
    return `<section class="flow"><div class="eyebrow">At a glance</div><h1 class="h-page">${esc(C.alphabetTitle || 'Letters')}</h1>
      ${D.groups.map(g => { const items = D.alphabet.filter(a => a.group === g.id); return items.length ? `<h3 class="blk-title">${esc(g.label)}</h3>${g.note ? `<p class="wk-help">${md(g.note)}</p>` : ''}
        <div class="alpha">${items.map(a => `<div><div class="a ${sz(a.ch)}" lang="${HL}">${esc(a.ch)}</div><b>${esc(a.name)}</b><small>/${esc(a.tr)}/</small><div class="f">${tg(a.example.t, 'tg-in')} ${md(a.example.mean)}</div></div>`).join('')}</div>` : ''; }).join('')}
      </section>`;
  }

  function block(b, ctx) {
    const T = b.title ? `<h3 class="blk-title">${md(b.title)}</h3>` : '';
    const wrap = h => `<div class="blk">${T}${h}</div>`;
    switch (b.type) {
      case 'text': return wrap(`<p>${md(b.text)}</p>`);
      case 'tip': return wrap(`<aside class="tip tip-${esc(b.kind)}"><span class="tip-label">${{ tip: 'Tip', warn: 'Watch out', memory: 'Memory trick', fun: 'Did you know?', culture: 'Culture note' }[b.kind] || ''}</span>${md(b.text)}</aside>`);
      case 'letters': return wrap(`<div class="lgrid">${b.items.map(id => D.letterById[id]).filter(Boolean).map(a => `<div class="lcard"><span class="a ${sz(a.ch)}" lang="${HL}">${esc(a.ch)}</span><b>${esc(a.name)}</b><small>/${esc(a.tr)}/</small><small>${tg(a.example.t, 'tg-in')} ${md(a.example.mean)}</small></div>`).join('')}</div>`);
      case 'examples': return wrap(`<div class="exg">${b.items.map(x => `<div class="ex"><span class="tg" lang="${HL}">${hl(x.t, x.hl)}</span><span class="t">${esc(x.tr)}</span>${x.mean ? `<span class="m">${md(x.mean)}</span>` : ''}${x.note ? `<span class="m">${md(x.note)}</span>` : ''}</div>`).join('')}</div>`);
      case 'table': return wrap(`<table>${b.head ? `<thead><tr>${b.head.map(h => `<th>${md(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      case 'build': return wrap(`<table class="build"><thead><tr><th></th>${b.marks.map((m, j) => `<th style="text-align:center">${b.labels ? md(b.labels[j]) : ''} ${tg(m, 'tg-in')}</th>`).join('')}</tr></thead><tbody>${b.base.map(base => `<tr><td class="base" lang="${HL}">${esc(base)}</td>${b.marks.map(m => `<td>${tg(base + m)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      case 'compare': return wrap(`<div class="cmp">${b.items.map(x => `<div>${tg(x.t)}<b>${md(x.label)}</b><p>${md(x.desc)}</p></div>`).join('')}</div>`);
      case 'rule': return wrap(`<section class="rule" style="--rc:var(--tj-${esc(b.color)})"><div class="rule-h"><h4>${md(b.name)}</h4></div>
        <p>${md(b.desc)}</p>${b.how ? `<div class="how"><b>How to say it:</b> ${md(b.how)}</div>` : ''}
        ${b.examples && b.examples.length ? `<div class="exs">${b.examples.map(x => `<span lang="${HL}">${hl(x.t, x.hl, 'tj-' + b.color)}<small>${esc(x.tr)}</small></span>`).join('')}</div>` : ''}</section>`);
      case 'practice': return wrap(`<div class="practice"><p style="font-size:9.5pt;margin-bottom:1mm">${md(b.text)}</p>${b.lines.map(l => `<div class="ln" lang="${HL}">${esc(l)}</div>`).join('')}</div>`);
      case 'vocab': return wrap(`<table class="vt"><thead><tr><th>${esc(L1)}</th><th>Say it</th><th>Meaning</th></tr></thead><tbody>${b.items.map(w => `<tr><td class="tgc" lang="${HL}">${esc(w.t)}</td><td>${esc(w.tr)}</td><td>${md(w.mean)}${w.root ? ` <span class="root" lang="${HL}">${esc(w.root)}</span>` : ''}${w.example ? `<div class="exr">${tg(w.example.t, 'tg-in')}${w.example.tr ? ` (${esc(w.example.tr)})` : ''} — ${md(w.example.mean)}</div>` : ''}</td></tr>`).join('')}</tbody></table>`);
      case 'sentence': return wrap(`<div class="sent"><div class="txt" lang="${HL}">${esc(b.t)}</div>
          ${b.words && b.words.length ? `<div class="wbw">${b.words.map(w => `<div>${tg(w.t)}<small>${md(w.mean)}</small></div>`).join('')}</div>` : ''}
          <div class="tr">${esc(b.tr)}</div><p style="margin-top:1mm">${md(b.mean)}</p>${b.note ? `<p class="note">${md(b.note)}</p>` : ''}</div>`);
      case 'dialogue': return wrap(`<div class="dlg">${b.lines.map(x => `<div class="dl"><b>${esc(x.who)}</b><div><span class="tg" lang="${HL}">${esc(x.t)}</span><small class="dtr">${esc(x.tr)}</small><small>${md(x.mean)}</small></div></div>`).join('')}</div>`);
      case 'steps': return wrap(`<ol class="steps">${b.items.map(x => `<li><div><b>${md(x.title)}</b>
          ${x.t ? tg(x.t) : ''}${x.tr ? `<div class="tr">${esc(x.tr)}</div>` : ''}${x.mean ? `<div>${md(x.mean)}</div>` : ''}${x.desc ? `<div class="d">${md(x.desc)}</div>` : ''}</div></li>`).join('')}</ol>`);
      case 'howto': {
        const a = D.alphabet.find(x => x.ch.split(' ').includes(b.char) || x.ch === b.char);
        const strip = C.hanzi && isHan(b.char) ? strokeStrip(b.char) : '';
        return wrap(`<div class="wk-howto"><div class="wk-hm"><span class="wk-big" lang="${HL}">${esc(b.char)}</span>${b.name ? `<b>${md(b.name)}</b>` : a ? `<b>${esc(a.name)}</b><small>/${esc(a.tr)}/</small>` : ''}</div>
          <div><ol class="wk-steps">${b.steps.map(st => `<li>${md(st)}</li>`).join('')}</ol>${b.tip ? `<p class="wk-tip">★ ${md(b.tip)}</p>` : ''}</div></div>
          ${strip}${copyRow(b.char, 'letter', 6)}`);
      }
      case 'write': {
        const reps = { letter: 6, word: 3, line: 1 }[b.level] || 3;
        return wrap(`<div class="wk">${b.note ? `<p class="wk-help">${md(b.note)}</p>` : `<p class="wk-help">Look at the model → write over the light copies → write on your own on the empty line.</p>`}
          ${b.items.map(x => copyRow(x, b.level, reps)).join('')}</div>`);
      }
      case 'dictation': {
        const start = ctx.dict.length + 1; b.items.forEach(x => ctx.dict.push({ x }));
        return wrap(`<div class="wk wk-dict"><p class="wk-help">A teacher or friend reads each item aloud, or press "Listen" in the web app. Write what you hear; answers are at the end of the unit.</p>
          <ol start="${start}" class="wk-dl">${b.items.map(() => `<li><span class="wk-line"></span></li>`).join('')}</ol></div>`);
      }
      case 'selfcheck': return wrap(`<div class="wk-check"><b>Check yourself</b>${b.items.map(x => `<div>☐ ${md(x)}</div>`).join('')}
          <div class="wk-stars">Give your work today some stars ☆ ☆ ☆ ☆ ☆</div></div>`);
      case 'quiz': {
        const start = ctx.q.length + 1;
        b.items.forEach(q => ctx.q.push({ q }));
        return wrap(`<div class="quiz"><h4>Quiz</h4><ol start="${start}">${b.items.map(q => `<li>${md(q.q)}${q.say ? ` <span class="listen">(listen in the web app: ${tg(q.say, 'tg-in')})</span>` : ''}${q.t ? `<div class="qa" lang="${HL}">${esc(q.t)}</div>` : ''}<div class="opts">${q.options.map((o, k) => `<span>${KEYS[k]}) ${md(o)}</span>`).join('')}</div></li>`).join('')}</ol></div>`);
      }
      default: return '';
    }
  }

  function unitSection(u) {
    const ctx = { q: [], dict: [] };
    let h = `<section class="page opener" data-c="${u.color}"><div class="khatam"></div>
      ${badge(u)}<div class="u-n">Unit ${u.order}</div><h1>${md(u.title)}</h1>
      <p style="font-size:12pt">${md(u.subtitle)}</p>
      <ol>${u.lessons.map(l => `<li>${md(l.title)}</li>`).join('')}</ol><div class="opener-art">${ART.scene}</div></section>`;
    u.lessons.forEach((l, i) => {
      h += `<section class="flow" data-c="${u.color}">
        <header class="lesson-h"><div class="khatam"></div><div class="head-corner">${ART.corner}</div>${badge(u, l.icon)}<div><div class="meta">Unit ${u.order} · Lesson ${i + 1} · ${l.minutes} minutes</div>
        <h2>${md(l.title)}</h2><p style="color:var(--ink-2);font-size:9.5pt">${md(l.subtitle)}</p></div></header>
        ${l.goals && l.goals.length ? `<ul class="goals">${l.goals.map(g => `<li>${md(g)}</li>`).join('')}</ul>` : ''}
        ${l.blocks.map(b => block(b, ctx)).join('')}
        <p style="font-size:9pt;color:var(--ink-3);margin-top:3mm">☐ Lesson done &nbsp;&nbsp; Date: ____________</p>
      </section>`;
    });
    if (ctx.q.length || ctx.dict.length) {
      h += `<section class="flow" data-c="${u.color}"><div class="eyebrow">Unit ${u.order}</div><h1 class="h-page">Answer key</h1>
        ${ctx.dict.length ? `<h3 class="blk-title">Dictation</h3><div class="key key-dict">${ctx.dict.map((d, i) => `<div><b>${i + 1}.</b> ${tg(d.x.t, 'tg-in')} <small>(${esc(d.x.tr)})</small></div>`).join('')}</div><h3 class="blk-title" style="margin-top:4mm">Quiz</h3>` : ''}
        <div class="key">${ctx.q.map((x, i) => `<div><b>${i + 1}.</b> ${KEYS[x.q.answer]}) ${md(x.q.options[x.q.answer])}${x.q.explain ? `<br><span style="color:var(--ink-2)">${md(x.q.explain)}</span>` : ''}</div>`).join('')}</div></section>`;
    }
    return h;
  }

  /* ---------- word search: Latin letters (accents folded), Bangla letter clusters or Chinese characters ---------- */
  const SEG = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(HL, { granularity: 'grapheme' }) : null;
  function cells(w) {
    if (C.cjk) return [...w].filter(isHan);
    if (HL === 'bn') return (SEG ? [...SEG.segment(w)].map(x => x.segment) : [...w]).filter(g => /[ঀ-৿]/.test(g));
    return [...fold(w).toUpperCase()].filter(c => /[A-Z]/.test(c));
  }
  function wordSearch(words, seed, fill) {
    const N = C.cjk ? 8 : 10, rnd = seeded(seed), grid = Array.from({ length: N }, () => Array(N).fill(''));
    const placed = [];
    words.forEach(w => {
      const L = cells(w.t); if (L.length < (C.cjk ? 2 : 3) || L.length > N) return;
      for (let t = 0; t < 150; t++) {
        const dir = rnd() < .55 ? [0, 1] : [1, 0];   // across (left to right) or down
        const r = Math.floor(rnd() * (N - dir[0] * (L.length - 1))), c = Math.floor(rnd() * (N - dir[1] * (L.length - 1)));
        if (L.every((ch, i) => { const g = grid[r + dir[0] * i][c + dir[1] * i]; return !g || g === ch; })) {
          const cs = L.map((ch, i) => { const rr = r + dir[0] * i, cc = c + dir[1] * i; grid[rr][cc] = ch; return rr * N + cc; });
          placed.push({ w, cells: cs }); break;
        }
      }
    });
    const ans = new Set(placed.flatMap(p => p.cells));
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = fill[Math.floor(rnd() * fill.length)];
    return { grid, placed, ans, N };
  }
  function puzzles() {
    const fill = C.cjk || HL === 'bn' ? D.vocab.flatMap(w => cells(w.t)) : [...'ABCDEEEFGHIILLMNNOPRRSSTTUU'];
    if (!fill.length) return { pages: '', key: '' };
    let pages = '', key = '', n = 0;
    D.lessons.forEach((l, li) => {
      if (n >= 12) return;
      const lo = C.cjk ? 2 : 3, hi = C.cjk ? 4 : 8;
      const words = l.blocks.filter(b => b.type === 'vocab').flatMap(b => b.items).filter(w => { const k = cells(w.t).length; return k >= lo && k <= hi && !/\s/.test(w.t.trim()); });
      if (words.length < 5) return;
      const pick = words.filter((w, i, a) => a.findIndex(x => cells(x.t).join('') === cells(w.t).join('')) === i).slice(0, 8);
      const ws = wordSearch(pick, 7919 * (li + 3), fill); if (ws.placed.length < 4) return; n++;
      const table = on => `<table class="ws ${C.cjk ? 'ws-cjk' : ''}" lang="${HL}">${ws.grid.map((row, r) => `<tr>${row.map((ch, c) => `<td class="${on && ws.ans.has(r * ws.N + c) ? 'on' : ''}">${esc(ch)}</td>`).join('')}</tr>`).join('')}</table>`;
      pages += `<section class="flow puzzle-page"><div class="eyebrow">Word search ${n}</div><h2 class="h-page" style="font-size:16pt">${md(l.title)}</h2>
        <p class="wk-help">Find and circle the words in the grid. They run left to right or top to bottom.${HL === 'fr' ? ' The grid uses capital letters without accents.' : ''}</p>
        <div class="ws-wrap">${table(false)}<ol class="ws-list">${ws.placed.map(p => `<li>${tg(p.w.t, 'tg-in')} — ${md(p.w.mean)}</li>`).join('')}</ol></div></section>`;
      key += `<div class="ws-key"><b>${n}. ${md(l.title)}</b>${table(true)}</div>`;
    });
    return { pages, key };
  }
  /* ---------- sentence puzzles: number the shuffled words ---------- */
  function sentencePuzzles() {
    const ss = D.sentences.filter(b => b.words && b.words.length >= 3 && b.words.length <= 8).filter((b, i, a) => a.findIndex(x => x.t === b.t) === i).slice(0, 16);
    if (!ss.length) return { page: '', key: '' };
    const rnd = seeded(2027);
    const items = ss.map(b => { const order = b.words.map((w, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } if (order.every((v, i) => v === i)) order.reverse(); return { b, order }; });
    const page = `<section class="flow"><div class="eyebrow">Sentence puzzles</div><h1 class="h-page">Rebuild each sentence</h1>
      <p class="wk-help">Write the correct order number under each word (first word = 1). Use the English meaning as a clue, then write the whole sentence on the line below.</p>
      ${items.map(({ b, order }, i) => `<div class="ap"><div class="ap-h"><b>${i + 1}.</b> ${md(b.mean)}</div>
        <div class="ap-words">${order.map(k => `<span class="ap-w">${tg(b.words[k].t, 'tg-in')}<i></i></span>`).join('')}</div><div class="wk-free"></div></div>`).join('')}</section>`;
    const key = items.map(({ b, order }, i) => `<div><b>${i + 1}.</b> ${order.map(k => k + 1).join(', ')} — ${tg(b.t, 'tg-in')}</div>`).join('');
    return { page, key };
  }
  /* ---------- word families / radicals ---------- */
  function rootTrees() {
    const m = {}; D.vocab.forEach(w => { if (!w.root) return; const r = w.root.trim(); (m[r] = m[r] || []).push(w); });
    let fams = Object.entries(m).filter(([, ws]) => ws.length >= 3);
    if (fams.length < 6) fams = Object.entries(m).filter(([, ws]) => ws.length >= 2);
    fams = fams.sort((a, b) => b[1].length - a[1].length).slice(0, 16);
    if (!fams.length) return '';
    return `<section class="flow"><div class="eyebrow">Appendix</div><h1 class="h-page">${esc(C.rootsLabel || 'Word families')}</h1>
      <p class="wk-help">${C.hanzi ? 'Characters that share a radical often share part of their meaning. On each card, add one more word you find yourself.' : 'Words in one family share a part and a meaning. On each card, add one more word you find yourself.'}</p>
      <div class="rt-grid">${fams.map(([r, ws]) => `<div class="rt"><div class="rt-root" lang="${HL}">${esc(r)}</div><ul>${ws.slice(0, 6).map(w => `<li>${tg(w.t, 'tg-in')} <small>${md(w.mean)}</small></li>`).join('')}<li class="rt-blank">…………………</li></ul></div>`).join('')}</div></section>`;
  }
  function journal() {
    const prompts = [`Three new ${L1} words I learned today`, `A sentence about me in ${L1}`, `What I did today (in ${L1})`, `A question I want to ask a ${L1} speaker`];
    return `<section class="flow"><div class="eyebrow">Appendix</div><h1 class="h-page">My ${esc(L1)} journal</h1>
      ${prompts.map(pr => `<div class="jr"><b>${esc(pr)}</b><div class="wk-free"></div><div class="wk-free"></div></div>`).join('')}</section>
      <section class="flow"><div class="eyebrow">Appendix</div><h1 class="h-page">Blank copybook pages</h1>
      <p class="wk-help">${C.hanzi ? 'Write one character in each box. The dashed cross helps you keep the parts balanced.' : 'The bold line is the baseline: letters sit on it. The dashed lines help you measure height.'}</p>
      ${C.hanzi ? ('<div class="tz-row">' + '<span class="tz"></span>'.repeat(12) + '</div>').repeat(14) : '<div class="wk-free tall"></div>'.repeat(9)}</section>`;
  }
  function tracker() {
    return `<section class="flow"><div class="eyebrow">Appendix</div><h1 class="h-page">Progress tracker</h1>
      <table class="tracker"><thead><tr><th>#</th><th>Lesson</th><th>Date</th><th>Quiz</th><th>✓</th></tr></thead>
      <tbody>${D.lessons.map((l, i) => `<tr><td>${i + 1}</td><td>${md(l.title)}</td><td style="width:28mm"></td><td style="width:18mm">&nbsp;&nbsp;&nbsp;/${l.blocks.filter(b => b.type === 'quiz').reduce((n, b) => n + b.items.length, 0)}</td><td style="width:10mm"></td></tr>`).join('')}</tbody></table></section>`;
  }
  function certificate() {
    return `<section class="flow"><div class="cert"><div class="khatam"></div>${['tl', 'tr', 'bl', 'br'].map(k => `<div class="cert-corner ${k}">${ART.corner}</div>`).join('')}
      <div class="cal" lang="${HL}">${esc((C.wish && C.wish.t) || '')}</div>
      <div class="eyebrow">Certificate of completion</div>
      <h1>${esc(C.title || '')}<span class="sub" lang="${HL}">${esc(C.native || '')}</span></h1>
      <p>This is to certify that</p><div class="name"></div>
      <p>has successfully completed all ${D.lessons.length} lessons of ${esc(C.title || '')}: ${D.units.map(u => plain(u.title)).join(', ')}.</p>
      <div class="cert-art">${ART.scene}</div>
      <div class="sig"><div>Date</div><div>Teacher / Guardian</div></div>
      <p style="font-size:8.5pt;color:var(--ink-3)">Copyright © ZyeemZia · ${esc(C.domain || '')}</p></div></section>`;
  }

  const render = () => {
    const pz = puzzles(), sp = sentencePuzzles();
    const keys = (pz.key || sp.key) ? `<section class="flow"><div class="eyebrow">Appendix</div><h1 class="h-page">Puzzle answers</h1>
      ${sp.key ? `<h3 class="blk-title">Sentence puzzles</h3><div class="key">${sp.key}</div>` : ''}${pz.key ? `<h3 class="blk-title" style="margin-top:4mm">Word search</h3><div class="ws-keys">${pz.key}</div>` : ''}</section>` : '';
    // build the book in chunks so the browser stays responsive on phones
    const el = document.getElementById('book'); el.innerHTML = '';
    const parts = [() => cover() + intro() + toc() + alphabetChart()].concat(D.units.map(u => () => unitSection(u)),
      [() => pz.pages + sp.page, () => rootTrees() + journal() + keys + tracker() + certificate()]);
    let i = 0;
    (function step() {
      el.insertAdjacentHTML('beforeend', parts[i++]());
      if (i < parts.length) setTimeout(step, 0); else document.body.setAttribute('data-ready', '1');
    })();
  };
  // stroke data for the Chinese "how to write" blocks (bundled in hanzi/), then every font face
  const hzChars = C.hanzi ? [...new Set(D.lessons.flatMap(l => l.blocks.filter(b => b.type === 'howto' && isHan(b.char)).map(b => b.char)))] : [];
  const hzLoad = Promise.all(hzChars.map(ch => fetch('hanzi/' + encodeURIComponent(ch) + '.json').then(r => r.ok ? r.json() : null).then(d => { if (d) HZ[ch] = d; }).catch(() => null)));
  const tgFam = C.cjk ? null : String(C.targetFont || '').split(',')[0].trim();
  const faces = ['400 16px Figtree', '600 16px Figtree', '700 16px Figtree', '500 16px "Reem Kufi"', '600 16px "Reem Kufi"', '700 16px "Reem Kufi"']
    .concat(tgFam ? ['400', '600', '700'].map(w => `${w} 16px ${tgFam}`) : []);
  const fontsReady = document.fonts && document.fonts.load ? Promise.all(faces.map(f => document.fonts.load(f, 'Aaàéঅআ'))) : Promise.resolve();
  Promise.all([fontsReady, hzLoad]).then(render, render);
})();
