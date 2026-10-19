/* ZyeemZia language courses — interactive web app. Renders everything from window.LC (data/*.js).
   Copyright © ZyeemZia */
(function () {
  'use strict';
  const { C, esc, md, plain, hl, fold, prepare, joiner, isHan } = window.LX;
  const MOTIF = String(C.htmlLang || 'fr').split('-')[0];
  const ART = (window.LXART || {})[MOTIF] || { scene: '', icon: '', corner: '' };
  document.documentElement.setAttribute('data-motif', MOTIF);
  const D = prepare();
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const view = $('#view');
  const LANG = C.lang || 'the language';
  const HL = C.htmlLang || 'und';
  const WRITE_UNIT = (D.units.find(u => u.order === 2) || D.units[0] || {}).id || 'writing';

  /* ---------------- state ---------------- */
  const KEY = (C.slug || 'course') + '.v1';
  const defaults = () => ({ voice: 'f', theme: 'auto', tgScale: 1, rate: 0.85, done: {}, quiz: {}, xp: 0, streak: { last: null, count: 0 }, srs: {}, best: {}, fcDir: 'tg', day: {}, checks: {}, memo: {}, certName: '' });
  let S = defaults();
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* storage blocked */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };
  const today = () => new Date().toISOString().slice(0, 10);
  function touchStreak() {
    const t = today(); if (S.streak.last === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1; S.streak.last = t;
  }
  function addXP(n) { S.xp += n; touchStreak(); save(); renderChrome(); }
  const MISSIONS = [['lesson', 1], ['cards', 10], ['write', 3]];
  function today_() { if (S.day.date !== today()) S.day = { date: today(), lesson: 0, cards: 0, write: 0, quiz: 0 }; return S.day; }
  function bumpDaily(k) {
    const d = today_(); const met = () => MISSIONS.every(([m, n]) => (m === 'lesson' ? d.lesson + d.quiz : d[m]) >= n);
    const before = met(); d[k] = (d[k] || 0) + 1; save();
    if (!before && met()) { addXP(30); confetti(); toast('All daily missions done! +30 XP', 3500); }
  }

  /* ---------------- words ---------------- */
  const UI = {
    home: 'Home', learn: 'Lessons', write: 'Write', alphabet: C.alphabetShort || 'Letters', games: 'Games', more: 'Tools', book: 'Book',
    cards: 'Flashcards', settings: 'Settings', cont: 'Continue learning', start: 'Start learning', lesson: 'Lesson', unit: 'Unit', min: 'min',
    complete: 'Mark lesson complete', completed: 'Lesson completed', next: 'Next lesson', prev: 'Previous', nextQ: 'Next question',
    finish: 'See result', retry: 'Try again', score: 'Score', tip: 'Tip', warn: 'Watch out', memory: 'Memory trick', fun: 'Did you know?', culture: 'Culture note',
    goals: 'In this lesson you will learn', playLine: 'Play line', wbw: 'Word by word', listen: 'Listen', clear: 'Clear', checkTrace: 'Check my writing',
    traceHelp: 'Trace over the faint letters with your finger or mouse', xp: 'XP', streak: 'day streak', lessonsDone: 'lessons done', words: 'words mastered',
    wotd: 'Word of the day', units: 'Your journey', tools: 'Learning tools', again: 'Again', hard: 'Hard', easy: 'Easy', flip: 'Tap to flip',
    allDecks: 'All words', noDue: 'All cards done for today!', search: 'Search results', nothing: 'Nothing found', loading: 'Content is loading…',
    play: 'Play', best: 'Best', time: 'Time', again2: 'Play again', sound: 'Sound', example: 'Example', trick: 'Trick', all: 'All', close: 'Close',
    quizBest: 'Best quiz', missions: "Today's missions", roots: C.rootsLabel || 'Word families', cert: 'Certificate'
  };
  const u = k => UI[k] || k;
  const num = n => String(n);
  const tx = s => md(s);

  /* ---------------- icons ---------------- */
  const I = {
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    learn: '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h6"/>',
    alphabet: '<path d="M4 19L9 5l5 14M6 14h6M15 19V9h3a2.5 2.5 0 0 1 0 5h-3"/>',
    cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
    games: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 14h.01"/>',
    book: '<path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5C17 4 14 4.5 12 6zM12 6v14.5"/>',
    play: '<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.6-6.3-4.3-8.5-.4 2-1.5 3.2-2.7 3.7.3-3.2-1.2-6.2-3.7-8.4.2 3.4-4.3 6.6-4.3 11.2C4 18.9 8 22 12 22z" fill="currentColor" stroke="none"/>',
    star: '<path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" fill="currentColor" stroke="none"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    warn: '<path d="M12 3l10 18H2zM12 10v5M12 18h.01"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    arrowL: '<path d="M15 5l-7 7 7 7"/>', arrowR: '<path d="M9 5l7 7-7 7"/>'
  };
  const icon = (n, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra || ''}>${I[n] || ''}</svg>`;
  const playBtn = (text, label) => `<button class="play" type="button" data-say="${esc(text)}" aria-label="${esc(label || u('listen'))}">${icon('play')}</button>`;
  const tg = (t, cls) => `<span class="${cls || 'tg'}" lang="${HL}">${esc(t)}</span>`;

  /* ---------------- speech ---------------- */
  const UA = navigator.userAgent;
  const ENV = {
    windows: /Windows/i.test(UA), android: /Android/i.test(UA), ios: /iPhone|iPad|iPod/i.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1),
    mac: /Macintosh/.test(UA) && !(navigator.maxTouchPoints > 1), edge: /Edg\//.test(UA)
  };
  const VPREFIX = (C.voice || 'en').split('-')[0].toLowerCase();
  let voice = null, voiceWarned = false, voicesLoaded = false;
  function voiceScore(v) {
    const lang = (v.lang || '').replace('_', '-');
    if (lang.toLowerCase().split('-')[0] !== VPREFIX) return -1;
    let s = 10;
    if (lang.toLowerCase() === (C.voice || '').toLowerCase()) s += 4;
    if (VPREFIX === 'zh' && /TW|HK/i.test(lang)) s -= 3;      // prefer Mainland Putonghua voices
    if (/natural|neural|premium|enhanced/i.test(v.name)) s += 6;
    if (/online/i.test(v.name)) s += 2;
    if (/google/i.test(v.name)) s += 2;
    return s;
  }
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices(); if (vs.length) voicesLoaded = true;
    voice = vs.filter(v => voiceScore(v) >= 0).sort((a, b) => voiceScore(b) - voiceScore(a))[0] || null;
    const st = document.getElementById('soundStatus'); if (st) st.outerHTML = soundStatusHTML();
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.addEventListener ? speechSynthesis.addEventListener('voiceschanged', pickVoice) : (speechSynthesis.onvoiceschanged = pickVoice); }
  function soundBanner() {
    if (document.getElementById('soundBanner')) return;
    const el = document.createElement('div'); el.id = 'soundBanner'; el.className = 'sound-banner'; el.setAttribute('role', 'status');
    const edgeBtn = ENV.windows && !ENV.edge ? `<a class="btn btn-primary btn-sm" href="microsoft-edge:${esc(location.href)}">Open in Microsoft Edge</a>` : '';
    el.innerHTML = `<span>${icon('warn')} This browser has no ${esc(LANG)} voice, so you will not hear the pronunciation.</span>
      <span class="sb-actions">${edgeBtn}<a class="btn btn-sm" href="#sound">How to fix</a><button class="icon-btn" type="button" data-sbclose aria-label="Close">${icon('x')}</button></span>`;
    document.body.appendChild(el);
  }
  /* Built-in voices: every text the app speaks has a recorded female (audio/f) and male (audio/m) file, made with
     neural voices by engine/audio.py and listed in LC.audio.tts. The device's own voice is only a fallback. */
  const AUD = LC.audio || {};
  const HAVE = new Set(AUD.tts || []);
  const sayText = t => String(t == null ? '' : t).replace(/[{}*]/g, '').replace(/\s+/g, ' ').trim();
  function akey(str) {   // file name of a text's audio (cyrb53 hash, base 36)
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) { const c = str.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  const voiceFor = alt => { const v = S.voice === 'm' ? 'm' : 'f'; return alt ? (v === 'm' ? 'f' : 'm') : v; };
  let voiceEl = null, quiet = false, speakQueue = [], playId = 0;
  function stopVoice() { playId++; if (voiceEl) { voiceEl.onended = voiceEl.onerror = null; voiceEl.pause(); } if ('speechSynthesis' in window) speechSynthesis.cancel(); }
  /* say(text, rate, onend, alt): alt = the other voice (the second speaker in a conversation) */
  function say(text, rate, onend, alt) {
    const clean = sayText(text); if (!clean || quiet) return;
    stopVoice(); const id = playId;
    const k = akey(clean);
    if (!HAVE.has(k)) return speak(clean, rate, onend);
    if (!voiceEl) { voiceEl = new Audio(); voiceEl.preload = 'auto'; }
    const el = voiceEl, pr = Math.min(1.6, Math.max(0.5, (rate || S.rate) / 0.85));
    el.src = `audio/${voiceFor(alt)}/${k}.mp3`; el.defaultPlaybackRate = pr; el.playbackRate = pr;
    el.onended = () => { if (id === playId && onend) onend(); };
    el.onerror = () => { if (id === playId) speak(clean, rate, onend); };
    const pp = el.play(); if (pp && pp.catch) pp.catch(() => { /* replaced by a newer tap, or the error handler takes over */ });
  }
  function speak(clean, rate, onend) {
    if (!('speechSynthesis' in window)) { soundBanner(); return; }
    if (!voice) pickVoice();
    const ut = new SpeechSynthesisUtterance(clean);
    ut.lang = voice ? voice.lang : (C.voice || 'en-US'); if (voice) ut.voice = voice; ut.rate = rate || S.rate;
    if (onend) ut.onend = onend;
    if (!voice && !voiceWarned && voicesLoaded) { voiceWarned = true; soundBanner(); }
    speechSynthesis.cancel(); speechSynthesis.speak(ut);
  }
  /* speak several lines one after another (dialogues): the two speakers get different voices */
  function sayAll(lines, el) {
    speakQueue = lines.slice(); let i = 0;
    const next = () => {
      $$('.dl-line.on', el).forEach(x => x.classList.remove('on'));
      if (i >= speakQueue.length) return;
      const row = el && $$('.dl-line', el)[speakQueue[i].idx]; if (row) row.classList.add('on');
      const L = speakQueue[i++]; say(L.t, null, () => setTimeout(next, 300), L.idx % 2 === 1);
    };
    next();
  }
  function soundStatusHTML() {
    if (HAVE.size) return `<div id="soundStatus" class="sound-status ok">${icon('check')}<div><b>Built-in ${esc(LANG)} voices are on</b>
      <small>Every word and sentence in this course has a recorded female and male voice, so pronunciation works on every phone and computer with nothing to install. Your device's own voice is only a backup.</small></div></div>`;
    const ok = !!voice;
    return `<div id="soundStatus" class="sound-status ${ok ? 'ok' : 'no'}">${icon(ok ? 'check' : 'warn')}<div><b>${ok ? `${esc(LANG)} voice found` : `No ${esc(LANG)} voice in this browser`}</b>
      <small>${ok ? esc(voice.name) + ' · ' + esc(voice.lang) : (voicesLoaded ? 'Follow the easy steps below.' : 'Loading the voice list…')}</small></div></div>`;
  }
  const voiceSeg = () => `<div class="seg" role="group" aria-label="Voice">${[['f', 'Female'], ['m', 'Male']].map(([k, l]) => `<button type="button" data-voice-set="${k}" aria-pressed="${voiceFor() === k}">${l}</button>`).join('')}</div>`;
  const soundStatusDevice = () => `<p class="muted" style="margin:10px 0">${voice ? `Your device voice: ${esc(voice.name)} (${esc(voice.lang)}).` : `This browser has no ${esc(LANG)} voice of its own. That is fine: the built-in voices work everywhere.`}</p>`;
  function viewSound() {
    const step = (n, s) => `<li><span class="sn">${n}</span><span>${md(s)}</span></li>`;
    const mine = on => on ? '<span class="chip">Your device</span>' : '';
    const win = `<section class="sound-card ${ENV.windows ? 'mine' : ''}"><h3>Windows ${mine(ENV.windows)}</h3>
      <p class="sc-best">**Easiest:** open the site in Microsoft Edge. Edge has natural ${esc(LANG)} voices built in, nothing to install.</p>
      ${ENV.windows && !ENV.edge ? `<a class="btn btn-primary" href="microsoft-edge:${esc(location.origin + location.pathname)}">Open in Edge with one click</a>` : ''}
      <details><summary>Or add a ${esc(LANG)} voice to Windows</summary>
        <ol class="sound-steps"><li><span class="sn">1</span><span><a href="ms-settings:speech">Open Windows Speech settings</a> (Settings → Time &amp; language → Speech)</span></li>
          ${step(2, `Click "Add voices", search "${esc(LANG.split(' ')[0])}", select it and click Add.`)}
          ${step(3, 'Close and reopen the browser. Note: Chrome may not see these voices; if so, use Edge.')}</ol></details></section>`;
    const android = `<section class="sound-card ${ENV.android ? 'mine' : ''}"><h3>Android ${mine(ENV.android)}</h3>
      <ol class="sound-steps">${step(1, 'Settings → Accessibility (or General management) → Text-to-speech output.')}
        ${step(2, 'Choose "Speech Services by Google" as the preferred engine.')}
        ${step(3, `Tap ⚙ next to the engine → Install voice data → download "${esc(LANG.split(' ')[0])}". Then reopen the site.`)}</ol></section>`;
    const ios = `<section class="sound-card ${ENV.ios ? 'mine' : ''}"><h3>iPhone / iPad ${mine(ENV.ios)}</h3>
      <ol class="sound-steps">${step(1, 'Settings → Accessibility → Spoken Content → Voices.')}
        ${step(2, `Choose ${esc(LANG.split(' ')[0])} and download a voice, then reopen the site in Safari.`)}</ol></section>`;
    const mac = `<section class="sound-card ${ENV.mac ? 'mine' : ''}"><h3>Mac ${mine(ENV.mac)}</h3>
      <ol class="sound-steps">${step(1, 'System Settings → Accessibility → Spoken Content → System voice → Manage Voices.')}
        ${step(2, `Download a ${esc(LANG.split(' ')[0])} voice, then reopen the browser.`)}</ol></section>`;
    const order = ENV.android ? [android, ios, win, mac] : ENV.ios ? [ios, android, mac, win] : ENV.mac ? [mac, win, android, ios] : [win, android, ios, mac];
    const testT = (C.soundTest && C.soundTest.t) || C.greeting || '';
    const lead = HAVE.size ? `Every word and sentence is spoken by a built-in natural ${esc(LANG)} voice. Nothing to install.` : `Every word and sentence is spoken by your device's own ${esc(LANG)} voice. Here is how to make sure it is switched on.`;
    return `<div class="page-head"><div class="eyebrow">Sound setup</div><h1 class="page-title">Hear the ${esc(LANG)} pronunciation</h1>
      <p class="muted">${lead}</p></div>
      ${soundStatusHTML()}
      <div class="sound-test"><button class="btn btn-primary" type="button" data-say="${esc(testT)}">${icon('play')} Test the voice</button> ${tg(testT, 'tg-in')}</div>
      ${HAVE.size ? `<div class="set-row" style="margin-bottom:16px"><div><b>Voice</b><small>Choose the voice you hear. In conversations the second speaker uses the other voice.</small></div>${voiceSeg()}</div>
      <details class="sound-more"><summary>Optional: your device's own ${esc(LANG)} voice (backup only)</summary>${soundStatusDevice()}<div class="sound-grid">${order.map(x => x.replace('**Easiest:**', '<b>Easiest:</b>')).join('')}</div></details>`
        : `<div class="sound-grid">${order.map(x => x.replace('**Easiest:**', '<b>Easiest:</b>')).join('')}</div>`}`;
  }

  /* ---------------- toast / confetti ---------------- */
  let toastT;
  function toast(msg, ms) { const el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, ms || 2600); }
  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
    const x = c.getContext('2d'); c.width = document.documentElement.clientWidth; c.height = innerHeight;
    const cs = getComputedStyle(document.documentElement);
    const cols = ['--gold', '--primary', '--c-rose', '--c-indigo', '--c-amber'].map(v => cs.getPropertyValue(v).trim());
    const ps = Array.from({ length: 120 }, () => ({ x: c.width / 2, y: c.height / 2.4, vx: (Math.random() - .5) * 14, vy: Math.random() * -14 - 4, r: Math.random() * 6 + 3, c: cols[Math.random() * cols.length | 0], a: Math.random() * 6 }));
    let f = 0;
    (function tick() {
      x.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => { p.vy += .45; p.x += p.vx; p.y += p.vy; p.a += .2; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6); x.restore(); });
      if (++f < 110) requestAnimationFrame(tick); else c.remove();
    })();
  }

  /* ---------------- chrome ---------------- */
  const NAV = [['home', 'home', '#home'], ['learn', 'learn', '#learn'], ['write', 'pen', '#unit/' + WRITE_UNIT], ['alphabet', 'alphabet', '#alphabet'], ['games', 'games', '#games'], ['more', 'grid', '#tools']];
  const TABS = ['home', 'learn', 'write', 'games', 'more'];
  function applyTheme() {
    const r = document.documentElement;
    if (S.theme === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.theme);
    r.style.setProperty('--tg-scale', S.tgScale);
  }
  function isDark() { return S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches); }
  function renderChrome() {
    const [cur, arg] = location.hash.slice(1).split('/');
    const r = cur || 'home';
    const lessonUnit = r === 'lesson' && D.lessons.find(l => l.id === arg);
    const inWriting = (r === 'unit' && arg === WRITE_UNIT) || (lessonUnit && lessonUnit.unit.id === WRITE_UNIT);
    const owner = inWriting ? 'write' : (r === 'unit' || r === 'lesson') ? 'learn' : (['cards', 'roots', 'certificate', 'settings', 'search', 'sound', 'contact'].includes(r) ? 'more' : r === 'play' ? 'games' : r);
    const active = k => k === owner ? 'aria-current="page"' : '';
    $('#mainnav').innerHTML = NAV.map(([k, , href]) => `<a href="${href}" ${active(k)}>${u(k)}</a>`).join('') + `<a class="nav-book" href="book.html" target="_blank" rel="noopener">${icon('book')}${u('book')}</a>`;
    $('#tabbar').innerHTML = NAV.filter(([k]) => TABS.includes(k)).map(([k, ic, href]) => `<a href="${href}" ${active(k)}>${icon(ic)}<span>${u(k)}</span></a>`).join('');
    $('#themeBtn').innerHTML = icon(isDark() ? 'sun' : 'moon');
    $('#xpChip').innerHTML = `${icon('flame')}<span>${S.streak.count}</span> ${icon('star')}<span>${S.xp}</span><span class="xp-label">XP</span>`;
  }

  /* ---------------- helpers ---------------- */
  const nextLesson = () => D.lessons.find(l => !S.done[l.id]) || D.lessons[0];
  const unitProgress = un => { const n = un.lessons.length; const d = un.lessons.filter(l => S.done[l.id]).length; return { n, d, pct: n ? Math.round(d / n * 100) : 0 }; };
  const glen = s => [...String(s).replace(/\s/g, '')].length;
  const badge = (unit, extra, txt) => { const t = txt || unit.icon; const n = glen(t); return `<span class="u-badge star-clip ${n >= 4 ? 'bx4' : n === 3 ? 'bx3' : ''}" data-c="${unit.color}" ${extra || ''} lang="${HL}">${esc(t)}</span>`; };
  const masteredCount = () => Object.values(S.srs).filter(c => c.box >= 4).length;
  const dayIndex = () => Math.floor(Date.now() / 864e5);
  const wordsOf = b => (b.words || []).map(w => w.t);

  /* ---------------- views ---------------- */
  function viewHome() {
    const nl = nextLesson();
    const doneN = Object.keys(S.done).length;
    const w = D.vocab.length ? D.vocab[dayIndex() % D.vocab.length] : null;
    return `
    <section class="hero">
      <div class="hero-main">
        <div class="pattern" style="opacity:.06"></div>
        <div class="hero-greet" lang="${HL}">${esc(C.greeting || '')}</div>
        <h1>${esc(C.title || '')} <span class="sub">${esc(C.native || '')}</span></h1>
        <p class="hero-lead">${esc(C.tagline || '')} ${D.units.length} units, ${D.lessons.length} lessons, ${D.vocab.length}+ words, writing practice, games and flashcards. Just 15 minutes a day.</p>
        <div class="hero-actions">
          ${nl ? `<a class="btn btn-primary" href="#lesson/${nl.id}">${u(doneN ? 'cont' : 'start')} ${icon('arrowR')}</a>` : ''}
          <a class="btn" href="book.html" target="_blank" rel="noopener">${icon('book')} Read the book</a>
        </div>
        ${nl ? `<div class="muted" style="font-size:.88rem">${u('lesson')} ${nl.gi + 1}: <b>${md(nl.title)}</b></div>` : ''}
        <div class="stats">
          <div class="stat"><b>${S.xp}</b><span>XP</span></div>
          <div class="stat"><b>${S.streak.count}</b><span>${u('streak')}</span></div>
          <div class="stat"><b>${doneN}/${D.lessons.length}</b><span>${u('lessonsDone')}</span></div>
          <div class="stat"><b>${masteredCount()}</b><span>${u('words')}</span></div>
        </div>
      </div>
      ${w ? `<aside class="wotd">
        <div class="pattern"></div>
        <div class="eyebrow">${u('wotd')}</div>
        <div class="wotd-tg ${glen(w.t) > 10 ? 'long' : ''}" lang="${HL}">${esc(w.t)}</div>
        <div class="wotd-tr">${esc(w.tr)}</div>
        <div class="wotd-mean">${md(w.mean)}</div>
        ${playBtn(w.t)}
        <div class="wotd-art">${ART.scene}</div>
      </aside>` : ''}
    </section>
    ${missionsHTML()}
    ${bookBanner()}
    <h2 class="section-title">${u('units')}</h2>
    ${D.units.length ? `<div class="unit-grid">${D.units.map(un => { const p = unitProgress(un); return `
      <a class="unit-card" href="#unit/${un.id}" data-c="${un.color}">
        <div class="u-top">${badge(un)}<div><div class="u-num">${u('unit')} ${un.order}</div><h3>${md(un.title)}</h3></div></div>
        <p>${md(un.subtitle)}</p>
        <div class="bar"><i style="width:${p.pct}%"></i></div>
        <div class="u-meta"><span>${p.d}/${p.n} lessons</span><span>${p.pct}%</span></div>
      </a>`; }).join('')}</div>` : `<div class="empty">${u('loading')}</div>`}
    <h2 class="section-title">${u('tools')}</h2>
    <div class="tools-grid">${toolCards().slice(0, 8).join('')}</div>`;
  }
  function bookBanner() {
    return `<section class="book-banner">
      <a class="bb-cover" href="book.html" target="_blank" rel="noopener" aria-label="Open the book"><span class="pattern"></span><span class="bb-art">${ART.scene}</span><span class="bb-cal" lang="${HL}">${esc(C.native || '')}</span><b>${esc(C.title || '')}</b><small>ZyeemZia</small></a>
      <div class="bb-text"><div class="eyebrow">Printable book &amp; workbook</div>
        <h2>The whole course in one book</h2>
        <p class="muted">Every lesson, writing practice pages, word searches and sentence puzzles, a progress tracker, answer keys and a certificate. Read it online or download the PDF to print.</p>
        <div class="hero-actions"><a class="btn btn-primary" href="book.html" target="_blank" rel="noopener">${icon('book')} Read the book online</a>
          <a class="btn" href="${esc(C.pdf || 'book.pdf')}" download>Download PDF</a></div></div>
    </section>`;
  }
  function missionsHTML() {
    const d = today_(); const nl = nextLesson();
    const items = [['lesson', 1, d.lesson + d.quiz, 'Finish a lesson or quiz', nl ? '#lesson/' + nl.id : '#learn'],
      ['cards', 10, d.cards, 'Review 10 flashcards', '#cards'], ['write', 3, d.write, 'Check your writing 3 times', '#unit/' + WRITE_UNIT]];
    const done = items.filter(x => x[2] >= x[1]).length;
    return `<section class="missions">
      <div class="m-head"><div class="m-ring" style="--p:${done / 3 * 100}"><b>${done}/3</b></div>
        <div><div class="eyebrow">${u('missions')}</div><h2>${done === 3 ? 'All missions done today. Brilliant!' : 'Three small tasks a day, big progress'}</h2><p class="muted">Finish all three for a +30 XP bonus</p></div></div>
      <div class="m-list">${items.map(([k, n, v, label, href]) => `<a class="m-item ${v >= n ? 'done' : ''}" href="${href}"><span class="m-check">${v >= n ? icon('check') : ''}</span><span class="m-text">${label}</span><span class="m-count">${Math.min(v, n)}/${n}</span></a>`).join('')}</div>
    </section>`;
  }
  function toolCards() {
    const due = dueCards('all').length; const a0 = D.alphabet.slice(0, 3).map(a => a.ch.split(' ')[0]).join(' ');
    const T = [
      ['#unit/' + WRITE_UNIT, C.hanzi ? '写' : (D.alphabet[0] || {}).ch || 'Aa', 'Writing studio', C.hanzi ? 'Watch real stroke order and write characters stroke by stroke' : 'Watch the pen, trace and earn stars'],
      ['#alphabet', a0 || 'Aa', C.alphabetTitle || 'Letters', 'Every sound and letter, with audio'],
      ['#cards', '⇄', 'Flashcards', `${due} cards waiting for review`],
      ['#games', '★', 'Games', 'Letter Hunt, Listen & Pick, Sentence Builder and more'],
      ['#roots', '⌘', `${C.rootsLabel || 'Word families'}`, 'See words grouped by the part they share'],
      ['#sound', '♪', 'Sound setup', `The easy way to turn on the ${LANG} voice`],
      ['#certificate', '✓', 'Certificate', 'Make and download your own certificate'],
      ['book.html', '▤', 'Printable book', 'The whole course and workbook as a book'],
      [C.pdf || 'book.pdf', 'PDF', 'Download PDF', 'Read offline or print it'],
      ['#settings', '⚙', 'Progress & settings', 'Theme, text size, speech speed, reset'],
      ['#contact', '✉', 'Contact', 'Questions, corrections or classroom use']
    ];
    return T.map(([href, mark, name, desc]) => `<a class="tool" href="${esc(href)}" ${href.endsWith('.html') ? 'target="_blank" rel="noopener"' : ''} ${href.endsWith('.pdf') ? 'download' : ''}><span class="t-tg" lang="${HL}">${esc(mark)}</span><b>${esc(name)}</b><span>${esc(desc)}</span></a>`);
  }

  function viewLearn() {
    return `<div class="page-head"><div class="eyebrow">${u('learn')}</div><h1 class="page-title">All lessons at a glance</h1>
      <form class="search page-search" id="learnSearch" role="search"><input id="learnSearchInput" type="search" placeholder="Search lessons, words, meanings…" aria-label="Search"></form></div>` +
      D.units.map(un => `<h2 class="section-title" data-c="${un.color}">${badge(un, 'style="width:38px;height:38px;font-size:17px"')} ${md(un.title)}</h2>${pathHTML(un)}`).join('');
  }
  function pathHTML(un) {
    const nl = nextLesson();
    return `<div class="path" data-c="${un.color}">${un.lessons.map((l, i) => {
      const st = S.done[l.id] ? 'done' : (nl && nl.id === l.id ? 'next' : ''); const qb = S.quiz[l.id];
      return `<div class="path-row">
        <a class="node star-clip ${st}" href="#lesson/${l.id}" aria-label="${esc(plain(l.title))}" lang="${HL}">${S.done[l.id] ? icon('check', 'style="width:28px;height:28px"') : `<span class="${glen(l.icon) >= 4 ? 'bx4' : glen(l.icon) === 3 ? 'bx3' : ''}">${esc(l.icon)}</span>`}</a>
        <a class="lesson-link" href="#lesson/${l.id}">
          <span class="l-n">${u('lesson')} ${i + 1} · ${l.minutes} ${u('min')}</span>
          <b>${md(l.title)}</b><small>${md(l.subtitle)}</small>
          ${qb != null ? `<span class="l-meta"><span class="chip">${u('quizBest')}: ${qb}%</span></span>` : ''}
        </a></div>`;
    }).join('')}</div>`;
  }
  function viewUnit(id) {
    const un = D.units.find(x => x.id === id); if (!un) return notFound();
    const p = unitProgress(un);
    return `<div class="crumbs"><a href="#learn">${u('learn')}</a> / <span>${u('unit')} ${un.order}</span></div>
      <section class="unit-hero" data-c="${un.color}" style="margin-top:12px"><div class="pattern"></div><div class="unit-art">${ART.icon}</div>${badge(un)}
        <div><div class="u-num">${u('unit')} ${un.order}</div><h1 class="page-title">${md(un.title)}</h1><p class="muted">${md(un.subtitle)}</p>
        <div class="bar" style="margin-top:12px;max-width:320px"><i style="width:${p.pct}%"></i></div>
        <div class="u-meta" style="max-width:320px;margin-top:4px"><span>${p.d}/${p.n} lessons</span><span>${p.pct}%</span></div></div>
      </section>${pathHTML(un)}`;
  }

  /* ---------- lesson ---------- */
  let quizStates = {};
  function viewLesson(id) {
    const l = D.lessons.find(x => x.id === id); if (!l) return notFound();
    const un = l.unit; quizStates = {};
    const prev = D.lessons[l.gi - 1], next = D.lessons[l.gi + 1];
    return `<article class="lesson" data-c="${un.color}" data-lesson="${l.id}">
      <div class="crumbs"><a href="#learn">${u('learn')}</a> / <a href="#unit/${un.id}">${md(un.title)}</a> / <span>${u('lesson')} ${l.index + 1}</span></div>
      <header class="lesson-head"><div class="pattern"></div><div class="head-corner">${ART.corner}</div>${badge(un, '', l.icon)}
        <div><div class="u-num">${u('unit')} ${un.order} · ${u('lesson')} ${l.index + 1}/${un.lessons.length} · ${l.minutes} ${u('min')}</div>
        <h1>${md(l.title)}</h1><p>${md(l.subtitle)}</p>
        ${l.goals && l.goals.length ? `<ul class="goals" aria-label="${u('goals')}">${l.goals.map(g => `<li><span>${md(g)}</span></li>`).join('')}</ul>` : ''}</div>
      </header>
      <div class="blocks">${l.blocks.map((b, i) => renderBlock(b, i, l)).join('')}</div>
      <footer class="lesson-foot">
        ${prev ? `<a class="btn btn-ghost" href="#lesson/${prev.id}">${icon('arrowL')} ${u('prev')}</a>` : '<span></span>'}
        <div id="completeSlot">${completeHTML(l)}</div>
        ${next ? `<a class="btn" href="#lesson/${next.id}">${u('next')} ${icon('arrowR')}</a>` : '<span></span>'}
      </footer></article>`;
  }
  const completeHTML = l => S.done[l.id] ? `<span class="done-banner">${icon('check')} ${u('completed')}</span>`
    : `<button class="btn btn-gold" type="button" data-complete="${l.id}">${icon('check')} ${u('complete')} <small>+20 XP</small></button>`;
  const blockTitle = b => b.title ? `<h3 class="block-title">${md(b.title)}</h3>` : '';
  const tipIcon = { tip: 'bulb', warn: 'warn', memory: 'brain', fun: 'spark', culture: 'globe' };

  function renderBlock(b, i, lesson) {
    const T = blockTitle(b);
    switch (b.type) {
      case 'text': return `<div>${T}<p class="b-text">${md(b.text)}</p></div>`;
      case 'tip': return `<aside class="tip tip-${esc(b.kind)}"><span class="tip-label">${icon(tipIcon[b.kind] || 'bulb')} ${u(b.kind)}</span>${T}<div>${md(b.text)}</div></aside>`;
      case 'letters': return `<div>${T}<div class="letter-grid">${b.items.map(id => D.letterById[id]).filter(Boolean).map(letterTile).join('')}</div></div>`;
      case 'examples': return `<div>${T}<div class="ex-grid">${b.items.map(x => `
        <button class="ex" type="button" data-say="${esc(x.t)}">
          <span class="tg" lang="${HL}">${hl(x.t, x.hl)}</span>
          <span class="ex-tr">${esc(x.tr)}</span>
          ${x.mean ? `<span class="ex-mean">${md(x.mean)}</span>` : ''}
          ${x.note ? `<span class="ex-note">${md(x.note)}</span>` : ''}
        </button>`).join('')}</div></div>`;
      case 'table': return `<div>${T}<div class="tbl-wrap"><table>${b.head ? `<thead><tr>${b.head.map(h => `<th>${md(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
      case 'build': {
        const cols = b.marks.length;
        const head = `<div class="build-row" style="--cols:${cols}"><span></span>${b.marks.map((m, j) => `<span class="build-head">${b.labels ? md(b.labels[j]) : ''}<br>${tg(m, 'tg-in')}</span>`).join('')}</div>`;
        const rows = b.base.map(base => `<div class="build-row" style="--cols:${cols}"><span class="build-base" lang="${HL}">${esc(base)}</span>${b.marks.map(m => `<button class="build-cell" type="button" data-say="${esc(base + m)}">${tg(base + m)}</button>`).join('')}</div>`).join('');
        return `<div>${T}<div class="build">${head}${rows}</div></div>`;
      }
      case 'compare': return `<div>${T}<div class="compare">${b.items.map(x => `<div class="cmp">${tg(x.t)}${playBtn(x.t)}<b>${md(x.label)}</b><p>${md(x.desc)}</p></div>`).join('')}</div></div>`;
      case 'rule': return `<section class="rule">${T}
        <div class="rule-head"><span class="rule-swatch" style="background:var(--tj-${esc(b.color)})"></span><h4 class="tj-${esc(b.color)}">${md(b.name)}</h4></div>
        <div class="rule-body"><div>${md(b.desc)}</div>
          ${b.how ? `<div class="rule-how"><b>How to say it</b>${md(b.how)}</div>` : ''}
          ${b.examples && b.examples.length ? `<div class="rule-ex">${b.examples.map(x => `<button type="button" data-say="${esc(x.t)}"><span class="tg" lang="${HL}">${hl(x.t, x.hl, 'tj-' + b.color)}</span><small>${esc(x.tr)}</small></button>`).join('')}</div>` : ''}
        </div></section>`;
      case 'practice': return `<section class="practice">${T}
        <div class="practice-top"><div>${md(b.text)}</div></div>
        ${b.lines.map(line => `<div class="p-line" lang="${HL}">${(C.cjk ? [line] : line.split(/\s+/).filter(Boolean).reduce((o, w) => { if (o.length && !/\p{L}|\d/u.test(w)) o[o.length - 1] += ' ' + w; else o.push(w); return o; }, [])).map(w => `<button class="p-word" type="button" data-say="${esc(w)}">${esc(w)}</button>`).join('')}${playBtn(line, u('playLine'))}</div>`).join('')}
      </section>`;
      case 'vocab': return `<div>${T}<div class="vocab">${b.items.map(w => `
        <div class="vrow">
          <span class="tg" lang="${HL}" data-say="${esc(w.t)}">${esc(w.t)}</span>
          <span class="v-tr">${esc(w.tr)}</span>
          <span class="v-mean">${md(w.mean)} ${w.root ? `<span class="root" title="${esc(u('roots'))}">${esc(w.root)}</span>` : ''}</span>
          ${playBtn(w.t)}
          ${w.example ? `<div class="v-ex">${tg(w.example.t, 'tg-in')} ${w.example.tr ? `<span class="muted">(${esc(w.example.tr)})</span>` : ''} — ${md(w.example.mean)}</div>` : ''}
        </div>`).join('')}</div></div>`;
      case 'sentence': {
        const key = lesson.id + ':' + i;
        return `<section class="sent" data-t="${esc(b.t)}">${T}
          <div class="sent-top"><span class="sent-label">${icon('chat')} Sentence</span>
            <span class="sent-btns">${S.memo[key] ? `<span class="chip memo-chip">${icon('check')} Memorised</span>` : ''}<button class="btn btn-sm" type="button" data-wbw>${u('wbw')}</button><button class="btn btn-sm" type="button" data-memo="${esc(key)}">${icon('brain')} Memorise</button><button class="btn btn-sm btn-primary" type="button" data-say="${esc(b.t)}">${icon('play')} ${u('listen')}</button></span></div>
          <div class="memo-bar" hidden><span class="memo-level"></span><span class="memo-actions"><button class="btn btn-sm" type="button" data-memorep="${esc(b.t)}">${icon('play')} ×3</button><button class="btn btn-sm" type="button" data-memodone="${esc(key)}">${icon('check')} I know it</button></span></div>
          <div class="sent-tg" lang="${HL}">${(b.words || []).map((w, j) => `<span class="w" data-wi="${j}" data-say="${esc(w.t)}">${esc(w.t)}</span>`).join(C.cjk ? '' : ' ')}</div>
          <div class="wbw" hidden>${(b.words || []).map(w => `<div class="wbw-w" data-say="${esc(w.t)}">${tg(w.t)}<small>${md(w.mean)}</small></div>`).join('')}</div>
          <div class="sent-tr">${esc(b.tr)}</div>
          <div class="sent-mean">${md(b.mean)}</div>
          ${b.note ? `<div class="sent-note">${md(b.note)}</div>` : ''}
        </section>`;
      }
      case 'dialogue': return `<section class="dialogue">${T}
        <div class="dl-top"><span class="sent-label">${icon('chat')} Conversation</span><span class="sent-btns"><button class="btn btn-sm" type="button" data-roleplay>Role-play</button><button class="btn btn-sm btn-primary" type="button" data-playall>${icon('play')} Play all</button></span></div>
        ${b.lines.map((x, j) => { const side = j % 2 ? 'b' : 'a'; return `<div class="dl-line ${side}" data-idx="${j}" data-t="${esc(x.t)}">
          <span class="dl-who">${esc(x.who)}</span>
          <div class="dl-bubble"><div class="tg" lang="${HL}" data-alt="${j % 2}" data-say="${esc(x.t)}">${esc(x.t)}</div><div class="dl-tr">${esc(x.tr)}</div><div class="dl-mean">${md(x.mean)}</div></div>
          ${playBtn(x.t).replace('data-say=', `data-alt="${j % 2}" data-say=`)}</div>`; }).join('')}
      </section>`;
      case 'steps': return `<div>${T}<ol class="steps">${b.items.map(x => `<li><div class="st-body">
          <b>${md(x.title)}</b>
          ${x.t ? `<div class="tg" lang="${HL}" data-say="${esc(x.t)}">${esc(x.t)}</div>` : ''}
          ${x.tr ? `<div class="st-tr">${esc(x.tr)}</div>` : ''}
          ${x.mean ? `<div>${md(x.mean)}</div>` : ''}
          ${x.desc ? `<div class="st-desc">${md(x.desc)}</div>` : ''}
        </div></li>`).join('')}</ol></div>`;
      case 'howto': {
        const a = D.alphabet.find(x => x.ch.split(' ').includes(b.char) || x.ch === b.char);
        const hz = C.hanzi && isHan(b.char);
        return `<section class="howto">${T}
          <div class="howto-model">${hz ? `<div class="hz-box hz-anim" data-hz="${esc(b.char)}" data-mode="anim"></div>` : `<span class="howto-tg" lang="${HL}" data-say="${esc(a ? a.say : b.char)}">${esc(b.char)}</span>`}
            <button class="btn btn-sm" type="button" data-howto>${icon('play')} ${hz ? 'Animate strokes' : 'Replay'}</button></div>
          <div class="howto-body"><h4>${b.name ? md(b.name) : a ? esc(a.name) : tg(b.char, 'tg-in')}</h4>
            <ol class="howto-steps">${b.steps.map(st => `<li><span>${md(st)}</span></li>`).join('')}</ol>
            ${b.tip ? `<p class="howto-tip">${icon('bulb')} ${md(b.tip)}</p>` : ''}</div></section>`;
      }
      case 'write': {
        const chars = C.hanzi ? b.items.filter(x => [...x].every(isHan)) : [];
        if (C.hanzi && chars.length === b.items.length) return `<div>${T}${b.note ? `<p class="b-text muted">${md(b.note)}</p>` : ''}${hanziPad([...new Set(b.items.join('').split(''))], 'wr' + i)}</div>`;
        return `<div>${T}${b.note ? `<p class="b-text muted">${md(b.note)}</p>` : ''}${traceHTML(b.items, 'wr' + i, { level: b.level })}</div>`;
      }
      case 'dictation': return `<div>${T}${traceHTML(b.items.map(x => x.t), 'dc' + i, { blind: true })}</div>`;
      case 'selfcheck': return `<section class="selfcheck">${T || '<h3 class="block-title">Check yourself</h3>'}
        ${b.items.map((x, j) => { const key = lesson.id + ':' + i + ':' + j; return `<label class="sc-item"><input type="checkbox" data-check="${esc(key)}" ${S.checks[key] ? 'checked' : ''}><span>${md(x)}</span></label>`; }).join('')}</section>`;
      case 'quiz': quizStates['q' + i] = { i: 0, picked: null, right: 0, results: [], items: b.items, lesson: lesson.id };
        return `<div>${T}<section class="quiz" id="q${i}">${quizInner('q' + i)}</section></div>`;
      default: return '';
    }
  }
  function letterTile(a) {
    const n = D.alphabet.indexOf(a) + 1;
    return `<button class="ltile" type="button" data-letter="${esc(a.id)}" aria-label="${esc(a.name)}">
      <span class="l-num">${n}</span><span class="l-tg" lang="${HL}">${esc(a.ch)}</span><span class="l-name">${esc(a.name)}</span><span class="l-tr">${esc(a.tr)}</span></button>`;
  }

  /* ---------- quiz ---------- */
  function quizInner(qid) {
    const st = quizStates[qid]; const n = st.items.length;
    const dots = `<div class="quiz-dots">${st.items.map((_, k) => `<i class="${st.results[k] === true ? 'ok' : st.results[k] === false ? 'no' : ''} ${k === st.i && st.i < n ? 'cur' : ''}"></i>`).join('')}</div>`;
    if (st.i >= n) {
      const pct = Math.round(st.right / n * 100);
      return `<div class="quiz-top"><b>Quiz</b>${dots}</div><div class="quiz-result"><div class="big">${st.right}/${n}</div>
        <div>${pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good work! One more look and you will master it.' : 'No worries. Review the lesson and try again.'}</div>
        <div class="muted">+${st.right * 5} XP</div><button class="btn" type="button" data-qretry="${qid}">${u('retry')}</button></div>`;
    }
    const q = st.items[st.i]; const answered = st.picked != null;
    return `<div class="quiz-top"><b>Quiz · ${st.i + 1}/${n}</b>${dots}</div>
      <div class="quiz-q">${md(q.q)}</div>
      ${q.say ? `<div class="quiz-say"><button class="btn btn-primary" type="button" data-say="${esc(q.say)}">${icon('play')} Listen</button></div>` : ''}
      ${q.t ? `<div class="quiz-tg" lang="${HL}" data-say="${esc(q.t)}">${esc(q.t)}</div>` : ''}
      <div class="quiz-opts">${q.options.map((o, k) => {
        let cls = ''; if (answered) { if (k === q.answer) cls = 'ok'; else if (k === st.picked) cls = 'no'; }
        return `<button class="opt ${cls}" type="button" data-qopt="${qid}:${k}" ${answered ? 'disabled' : ''}><span class="k">${'ABCD'[k]}</span><span>${md(o)}</span></button>`;
      }).join('')}</div>
      ${answered && q.explain ? `<div class="quiz-explain">${md(q.explain)}</div>` : ''}
      ${answered ? `<div class="quiz-foot"><button class="btn btn-primary" type="button" data-qnext="${qid}">${st.i + 1 < n ? u('nextQ') : u('finish')} ${icon('arrowR')}</button></div>` : ''}`;
  }
  function quizPick(qid, k) {
    const st = quizStates[qid]; if (!st || st.picked != null) return;
    st.picked = k; const ok = k === st.items[st.i].answer; st.results[st.i] = ok; if (ok) st.right++;
    $('#' + qid).innerHTML = quizInner(qid);
  }
  function quizNext(qid) {
    const st = quizStates[qid]; st.i++; st.picked = null;
    if (st.i >= st.items.length) {
      const pct = Math.round(st.right / st.items.length * 100);
      S.quiz[st.lesson] = Math.max(S.quiz[st.lesson] || 0, pct); bumpDaily('quiz'); addXP(st.right * 5);
      if (pct >= 80) confetti();
    }
    $('#' + qid).innerHTML = quizInner(qid);
  }

  /* ---------- Chinese characters: real stroke order (Hanzi Writer) ---------- */
  let hzLoading = null;
  function loadHanzi() {
    if (window.HanziWriter) return Promise.resolve();
    if (!hzLoading) hzLoading = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5.0/dist/hanzi-writer.min.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    return hzLoading;
  }
  function hanziPad(chars, id) {
    return `<div class="hz-pad" id="${id}" data-chars="${esc(JSON.stringify(chars))}">
      <div class="hz-stage"><div class="hz-box hz-quiz" data-hz="${esc(chars[0])}" data-mode="quiz"></div></div>
      <div class="trace-side">
        <div class="muted" style="font-size:.88rem">Watch the strokes, then write each stroke in the right order. A wrong stroke flashes red; after three tries you get a hint.</div>
        ${chars.length > 1 ? `<div class="trace-letters">${chars.map((c, k) => `<button type="button" data-hzpick="${k}" aria-pressed="${k === 0}" lang="${HL}">${esc(c)}</button>`).join('')}</div>` : ''}
        <div class="trace-score" aria-live="polite"></div>
        <div class="trace-btns"><button class="btn btn-sm" type="button" data-hzanim>${icon('play')} Watch the strokes</button><button class="btn btn-primary btn-sm" type="button" data-hzquiz>Write it</button><button class="btn btn-sm" type="button" data-say="${esc(chars[0])}">${icon('play')} ${u('listen')}</button></div>
      </div></div>`;
  }
  function initHanzi(root) {
    const boxes = $$('.hz-box', root).filter(b => !b._init);
    if (!boxes.length) return;
    loadHanzi().then(() => boxes.forEach(box => mountHanzi(box))).catch(() => boxes.forEach(b => { b.textContent = b.dataset.hz; b.classList.add('hz-fallback'); }));
  }
  function mountHanzi(box) {
    if (box._init) return; box._init = true; box.innerHTML = '';
    const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
    const size = Math.min(260, Math.max(150, box.clientWidth || 220));
    const w = window.HanziWriter.create(box, box.dataset.hz, {
      width: size, height: size, padding: 8, showOutline: true, strokeAnimationSpeed: 1, delayBetweenStrokes: 220,
      strokeColor: css('--ink') || '#222', outlineColor: css('--line') || '#ddd', drawingColor: css('--primary') || '#0a6',
      highlightColor: css('--gold') || '#c90', radicalColor: css('--primary') || null,
      // stroke data ships with the site (hanzi/), the open data set online is the fallback
      charDataLoader: (ch, done, fail) => fetch('hanzi/' + encodeURIComponent(ch) + '.json').then(r => r.ok ? r.json() : Promise.reject())
        .catch(() => fetch('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/' + encodeURIComponent(ch) + '.json').then(r => r.ok ? r.json() : Promise.reject()))
        .then(done, () => { box.textContent = ch; box.classList.add('hz-fallback'); if (fail) fail(); })
    });
    box._writer = w;
    if (box.dataset.mode === 'anim') setTimeout(() => w.animateCharacter(), 300);
  }
  function hanziQuiz(pad) {
    const box = $('.hz-box', pad); const w = box && box._writer; if (!w) return;
    const out = $('.trace-score', pad); out.innerHTML = '<small>Write the first stroke…</small>';
    w.quiz({ onMistake: s => { out.innerHTML = `<small>Not quite, try stroke ${s.strokeNum + 1} again.</small>`; },
      onCorrectStroke: s => { out.innerHTML = `<small>Stroke ${s.strokeNum + 1} of ${s.strokeNum + 1 + s.strokesRemaining}. Good!</small>`; },
      onComplete: s => { const m = s.totalMistakes; const stars = m === 0 ? 3 : m <= 2 ? 2 : 1; out.innerHTML = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}<small>${m === 0 ? 'Perfect stroke order!' : `Done with ${m} mistake${m > 1 ? 's' : ''}.`}</small>`; bumpDaily('write'); if (stars === 3) addXP(2); } });
  }

  /* ---------- writing pad (tracing, pen demo, dictation) ---------- */
  function traceHTML(items, tid, opts) {
    const o = opts || {}; const wide = o.level === 'line' || items.some(x => glen(x) > 6);
    return `<div class="trace ${wide ? 'trace-wide' : ''}" data-trace="${tid}" data-items="${esc(JSON.stringify(items))}" ${o.blind ? 'data-blind="1"' : ''}>
      <div class="trace-pad"><canvas class="t-guide"></canvas><canvas class="t-demo"></canvas><canvas class="t-ink"></canvas></div>
      <div class="trace-side">
        <div class="muted" style="font-size:.88rem">${o.blind ? 'Listen, then write without looking. Reveal the answer to check.' : u('traceHelp')}</div>
        ${items.length > 1 ? `<div class="trace-letters">${items.map((x, k) => `<button type="button" data-tpick="${k}" aria-pressed="${k === 0}" lang="${HL}">${o.blind ? k + 1 : esc(x)}</button>`).join('')}</div>` : ''}
        <div class="trace-score" aria-live="polite"></div>
        <div class="trace-btns">
          ${o.blind ? `<button class="btn btn-primary btn-sm" type="button" data-tsay>${icon('play')} ${u('listen')}</button><button class="btn btn-sm" type="button" data-treveal>Show answer</button>`
            : `<button class="btn btn-sm" type="button" data-tdemo>${icon('play')} Watch the pen</button>`}
          <button class="btn btn-primary btn-sm" type="button" data-tcheck>${u('checkTrace')}</button>
          <button class="btn btn-sm" type="button" data-tclear>${u('clear')}</button>
          ${items.length > 1 ? `<button class="btn btn-sm btn-ghost" type="button" data-tnext>Next ${icon('arrowR')}</button>` : ''}
        </div>
      </div></div>`;
  }
  function initTraces(root) {
    initHanzi(root);
    $$('.trace', root).forEach(box => {
      if (box._init) return; box._init = true;
      const items = JSON.parse(box.dataset.items); let cur = 0; let revealed = !box.dataset.blind;
      const guide = $('.t-guide', box), demo = $('.t-demo', box), ink = $('.t-ink', box), pad = $('.trace-pad', box);
      const g = guide.getContext('2d'), dm = demo.getContext('2d'), k = ink.getContext('2d');
      let W = 0, H = 0, dpr = 1, drawing = false, last = null, mask = null, geo = null, anim = 0;
      const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
      const FONT = css('--f-tg') || 'serif';
      function size() {
        const r = pad.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1);
        W = Math.max(10, r.width); H = Math.max(10, r.height);
        [guide, demo, ink].forEach(c => { c.width = W * dpr; c.height = H * dpr; });
        [g, dm, k].forEach(c => c.setTransform(dpr, 0, 0, dpr, 0, 0)); drawGuide();
      }
      function layout(ctx) {
        let fs = H * .5; ctx.font = `${fs}px ${FONT}`;
        const w = ctx.measureText(items[cur]).width; if (w > W * .86) fs *= (W * .86) / w;
        return { fs, base: H * (C.cjk ? .7 : .64) };
      }
      function rules(ctx) {
        ctx.save(); ctx.strokeStyle = css('--line'); ctx.lineWidth = 1;
        const step = geo.fs * .34;
        [geo.base - step * 2, geo.base - step, geo.base + step].forEach(y => { ctx.setLineDash([3, 6]); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); });
        ctx.setLineDash([]); ctx.strokeStyle = css('--ink-3'); ctx.globalAlpha = .55; ctx.beginPath(); ctx.moveTo(0, geo.base); ctx.lineTo(W, geo.base); ctx.stroke();
        ctx.restore();
      }
      function model(ctx, color, alpha) {
        ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = color;
        ctx.font = `${geo.fs}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(items[cur], W / 2, geo.base); ctx.restore();
      }
      function drawGuide() {
        g.clearRect(0, 0, W, H); dm.clearRect(0, 0, W, H); geo = layout(g); rules(g);
        if (revealed) model(g, css('--ink-3'), .3);
        const m = document.createElement('canvas'); m.width = Math.max(4, Math.round(W / 4)); m.height = Math.max(4, Math.round(H / 4));
        const mx = m.getContext('2d'); mx.scale(.25, .25); model(mx, '#000', 1); mask = mx.getImageData(0, 0, m.width, m.height);
      }
      function playDemo() {   // "watch the pen": reveal left to right
        cancelAnimationFrame(anim); const t0 = performance.now(); const dur = 900 + 260 * glen(items[cur]); const col = css('--primary');
        (function frame(now) {
          const f = Math.min(1, (now - t0) / dur); dm.clearRect(0, 0, W, H);
          dm.save(); dm.beginPath(); dm.rect(0, 0, W * f, H); dm.clip(); model(dm, col, .9); dm.restore();
          dm.save(); dm.fillStyle = css('--gold'); dm.beginPath(); dm.arc(W * f - 4, geo.base - geo.fs * .25, 6, 0, 7); dm.fill(); dm.restore();
          if (f < 1) anim = requestAnimationFrame(frame); else setTimeout(() => dm.clearRect(0, 0, W, H), 700);
        })(t0);
      }
      function pos(e) { const r = ink.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
      ink.addEventListener('pointerdown', e => { drawing = true; last = pos(e); ink.setPointerCapture(e.pointerId); dot(last); });
      ink.addEventListener('pointermove', e => { if (!drawing) return; const p = pos(e); line(last, p); last = p; });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => ink.addEventListener(ev, () => { drawing = false; }));
      function style() { k.strokeStyle = css('--primary'); k.fillStyle = k.strokeStyle; k.lineWidth = Math.max(6, Math.min(W, H * 1.4) / 34); k.lineCap = 'round'; k.lineJoin = 'round'; }
      function dot(p) { style(); k.beginPath(); k.arc(p.x, p.y, k.lineWidth / 2, 0, 7); k.fill(); }
      function line(a, b) { style(); k.beginPath(); k.moveTo(a.x, a.y); k.lineTo(b.x, b.y); k.stroke(); }
      function select(i) {
        cur = (i + items.length) % items.length; revealed = !box.dataset.blind;
        $$('[data-tpick]', box).forEach((b, j) => b.setAttribute('aria-pressed', j === cur));
        k.clearRect(0, 0, W, H); drawGuide(); $('.trace-score', box).innerHTML = ''; say(items[cur]);
      }
      box.addEventListener('click', e => {
        const pick = e.target.closest('[data-tpick]'); if (pick) select(+pick.dataset.tpick);
        if (e.target.closest('[data-tnext]')) select(cur + 1);
        if (e.target.closest('[data-tclear]')) { k.clearRect(0, 0, W, H); $('.trace-score', box).innerHTML = ''; }
        if (e.target.closest('[data-tcheck]')) score();
        if (e.target.closest('[data-tdemo]')) playDemo();
        if (e.target.closest('[data-tsay]')) say(items[cur]);
        if (e.target.closest('[data-treveal]')) { revealed = true; drawGuide(); $('.trace-score', box).innerHTML = tg(items[cur], 'tg-in'); }
      });
      function score() {
        const sw = mask.width, sh = mask.height; const small = document.createElement('canvas'); small.width = sw; small.height = sh;
        const sx = small.getContext('2d'); sx.drawImage(ink, 0, 0, sw, sh); const inkD = sx.getImageData(0, 0, sw, sh).data; const mD = mask.data;
        let letterPx = 0, covered = 0, inkPx = 0, onLetter = 0;
        const near = p => { const idx = (p - 3) / 4, x = idx % sw, y = (idx / sw) | 0; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < sw && yy < sh && mD[(yy * sw + xx) * 4 + 3] > 80) return true; } return false; };
        for (let p = 3; p < mD.length; p += 4) { const isL = mD[p] > 80, isI = inkD[p] > 40; if (isL) letterPx++; if (isI) inkPx++; if (isL && isI) covered++; if (isI && near(p)) onLetter++; }
        const out = $('.trace-score', box);
        if (inkPx < 5) { out.innerHTML = '<small>Write first, then check</small>'; return; }
        const cov = covered / Math.max(1, letterPx), prec = onLetter / inkPx;
        const sc = Math.round(Math.min(1, (2 * cov * prec) / Math.max(.01, cov + prec) * 1.45) * 100);
        const stars = sc >= 80 ? 3 : sc >= 55 ? 2 : sc >= 30 ? 1 : 0;
        if (!revealed) { revealed = true; drawGuide(); }
        out.innerHTML = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)} ${sc}%<small>${stars === 3 ? 'Beautiful writing!' : stars ? 'Good! Stay a little closer to the guide.' : 'Try again, slowly.'}</small>`;
        bumpDaily('write'); if (stars === 3) addXP(2);
      }
      size(); new ResizeObserver(() => { const r = pad.getBoundingClientRect(); if (Math.abs(r.width - W) > 2) size(); }).observe(pad);
      if (document.fonts) document.fonts.ready.then(drawGuide);
    });
  }

  /* ---------- alphabet ---------- */
  let alphaFilter = 'all';
  function viewAlphabet() {
    const F = [['all', 'All']].concat(D.groups.map(g => [g.id, g.label]));
    return `<div class="page-head"><div class="eyebrow">${esc(C.alphabetTitle || 'Letters')}</div><h1 class="page-title">${esc(C.alphabetTitle || 'Letters')}</h1>
      <p class="muted">${esc(C.alphabetIntro || '')}</p></div>
      <div class="filters" role="group">${F.map(([k, l]) => `<button type="button" data-afilter="${esc(k)}" aria-pressed="${alphaFilter === k}">${esc(l)}</button>`).join('')}</div>
      <div id="alphaGrid">${alphaGrid()}</div>`;
  }
  function alphaGrid() {
    if (!D.alphabet.length) return `<div class="empty">${u('loading')}</div>`;
    const groups = alphaFilter === 'all' ? D.groups : D.groups.filter(g => g.id === alphaFilter);
    return groups.map(g => { const items = D.alphabet.filter(a => a.group === g.id); return items.length ? `<section class="a-group"><h3 class="block-title">${esc(g.label)}</h3>${g.note ? `<p class="muted" style="margin:-4px 0 8px">${md(g.note)}</p>` : ''}<div class="letter-grid">${items.map(letterTile).join('')}</div></section>` : ''; }).join('');
  }
  function openLetter(id) {
    const A = D.alphabet; const i = A.findIndex(a => a.id === id); const a = A[i]; if (!a) return;
    const prev = A[(i - 1 + A.length) % A.length], next = A[(i + 1) % A.length];
    const writeItems = C.hanzi ? null : [a.ch.split(' ').pop(), a.example.t].filter(Boolean);
    const exHan = C.hanzi && [...a.example.t].filter(isHan)[0];
    $('#modalCard').innerHTML = `
      <button class="icon-btn lm-close" type="button" data-close aria-label="Close">${icon('x')}</button>
      <div class="lm-head"><div class="pattern"></div><div class="lm-big" lang="${HL}">${esc(a.ch)}</div>
        <div><div class="eyebrow">${i + 1} / ${A.length} · ${esc((D.groups.find(g => g.id === a.group) || {}).label || '')}</div><h2>${esc(a.name)}</h2>
        <div class="muted">${esc(a.tr)}${a.alt ? ` · also written ${tg(a.alt, 'tg-in')}` : ''}</div>
        <div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-primary btn-sm" type="button" data-say="${esc(a.say)}">${icon('play')} ${u('listen')}</button></div></div>
      </div>
      <div class="lm-body">
        <dl class="kv">
          <dt>${u('sound')}</dt><dd>${md(a.sound)}</dd>
          ${a.tip ? `<dt>${u('trick')}</dt><dd>${md(a.tip)}</dd>` : ''}
          <dt>${u('example')}</dt><dd><span class="tg-in" lang="${HL}" style="font-size:1.6em;cursor:pointer" data-say="${esc(a.example.t)}">${esc(a.example.t)}</span> ${a.example.tr ? `(${esc(a.example.tr)})` : ''} = ${md(a.example.mean)}</dd>
        </dl>
        ${exHan ? hanziPad([...a.example.t].filter(isHan), 'lmhz') : writeItems ? traceHTML(writeItems, 'lm') : ''}
        <div class="lm-nav"><button class="btn" type="button" data-letter="${esc(prev.id)}">${icon('arrowL')} ${esc(prev.name)}</button><button class="btn" type="button" data-letter="${esc(next.id)}">${esc(next.name)} ${icon('arrowR')}</button></div>
      </div>`;
    $('#modal').hidden = false; initTraces($('#modalCard')); say(a.say);
    $('.lm-close').focus();
  }
  function closeModal() { $('#modal').hidden = true; $('#modalCard').innerHTML = ''; }

  /* ---------- flashcards (Leitner) ---------- */
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32];
  let fcDeck = 'all', fcQueue = [], fcFlip = false;
  const deckWords = deck => D.vocab.filter(w => deck === 'all' || !deck || w.unit.id === deck);
  function dueCards(deck) {
    const now = Date.now(); const words = deckWords(deck || 'all');
    return words.filter(w => S.srs[w.t] && S.srs[w.t].due <= now).concat(words.filter(w => !S.srs[w.t]).slice(0, 12));
  }
  function viewCards() {
    const decks = D.units.filter(un => D.vocab.some(w => w.unit.id === un.id));
    fcQueue = dueCards(fcDeck); fcFlip = false;
    const words = deckWords(fcDeck);
    const boxes = [0, 1, 2, 3, 4, 5].map(b => words.filter(w => b === 0 ? !S.srs[w.t] : (S.srs[w.t] && Math.min(5, S.srs[w.t].box) === b)).length);
    const names = ['New', 'Box 1', 'Box 2', 'Box 3', 'Box 4', 'Mastered'];
    return `<div class="fc-wrap">
      <div class="page-head"><div class="eyebrow">${u('cards')}</div><h1 class="page-title">Smart flashcards</h1>
      <p class="muted">Spaced repetition: words you know come back later, words you forget come back sooner. A little every day.</p></div>
      <div class="fc-bar">
        <label><span class="muted" style="font-size:.85rem">Deck: </span><select id="fcDeck">${['all'].concat(decks.map(d => d.id)).map(id => `<option value="${id}" ${fcDeck === id ? 'selected' : ''}>${id === 'all' ? u('allDecks') : esc(plain(D.units.find(x => x.id === id).title))}</option>`).join('')}</select></label>
        <div class="seg" role="group"><button type="button" data-fcdir="tg" aria-pressed="${S.fcDir === 'tg'}">${esc(LANG.split(' ')[0])} → English</button><button type="button" data-fcdir="mean" aria-pressed="${S.fcDir === 'mean'}">English → ${esc(LANG.split(' ')[0])}</button></div>
      </div>
      <div class="boxes">${boxes.map((n, b) => `<div><b>${n}</b><small>${names[b]}</small></div>`).join('')}</div>
      <div id="fcStage">${fcStage()}</div></div>`;
  }
  function fcStage() {
    if (!D.vocab.length) return `<div class="empty">${u('loading')}</div>`;
    const w = fcQueue[0];
    if (!w) return `<div class="result-card"><div class="big">${icon('check', 'style="width:56px;height:56px"')}</div><b>${u('noDue')}</b><p class="muted">Come back tomorrow, or pick another deck.</p></div>`;
    const front = S.fcDir === 'tg' ? `<div class="tg" lang="${HL}">${esc(w.t)}</div>` : `<div class="fc-mean">${md(w.mean)}</div>`;
    const back = `<div class="tg" lang="${HL}" style="font-size:calc(2.6rem * var(--tg-scale))">${esc(w.t)}</div>
      <div style="color:var(--primary);font-weight:600">${esc(w.tr)}</div><div class="fc-mean">${md(w.mean)}</div>
      ${w.root ? `<span class="root">${esc(w.root)}</span>` : ''}
      ${w.example ? `<div class="muted" style="font-size:.9rem">${tg(w.example.t, 'tg-in')} — ${md(w.example.mean)}</div>` : ''}`;
    return `<div class="muted" style="text-align:center;font-size:.85rem;margin-bottom:8px">${fcQueue.length} cards left today</div>
      <div class="card3d ${fcFlip ? 'flip' : ''}" id="fcCard" role="button" tabindex="0" aria-label="${u('flip')}">
        <div class="card3d-in"><div class="face"><div class="pattern"></div>${front}<span class="hint">${u('flip')}</span></div><div class="face back"><div class="pattern"></div>${back}</div></div></div>
      <div style="display:flex;justify-content:center;margin:12px 0">${playBtn(w.t)}</div>
      <div class="fc-actions">
        <button class="btn" type="button" data-fc="0" style="color:var(--bad)">${u('again')}<small>soon</small></button>
        <button class="btn" type="button" data-fc="1">${u('hard')}<small>tomorrow</small></button>
        <button class="btn btn-primary" type="button" data-fc="2">${u('easy')}<small>later</small></button>
      </div>`;
  }
  function fcGrade(gr) {
    const w = fcQueue.shift(); if (!w) return;
    const c = S.srs[w.t] || { box: 0, due: 0 };
    if (gr === 0) { c.box = 1; c.due = Date.now() + 60e3; fcQueue.splice(Math.min(3, fcQueue.length), 0, w); }
    else if (gr === 1) { c.box = Math.max(1, c.box); c.due = Date.now() + 864e5; }
    else { c.box = Math.min(6, c.box + 1); c.due = Date.now() + INTERVALS[c.box] * 864e5; }
    S.srs[w.t] = c; fcFlip = false; addXP(gr === 0 ? 0 : 1); bumpDaily('cards');
    $('#fcStage').innerHTML = fcStage();
  }

  /* ---------- games ---------- */
  const QUIZ_POOL = () => D.lessons.flatMap(l => l.blocks.filter(b => b.type === 'quiz').flatMap(b => b.items));
  function viewGames() {
    const L1 = LANG.split(' ')[0];
    const Gs = [
      ['hunt', (D.alphabet[0] || {}).ch || 'A', 'teal', 'Letter Hunt', `Read the name or sound, then spot the right ${C.hanzi ? 'pinyin' : 'letter'}. 60 seconds, look-alikes included!`],
      ['listen', '♪', 'indigo', 'Listen & Pick', `Hear a ${L1} word, then pick it from four. Trains your ears and eyes together.`],
      ['match', '⇄', 'rose', 'Word Match', `Match ${L1} words with their English meanings. Fewer moves means a higher score.`],
      ['puzzle', '▦', 'violet', 'Sentence Builder', 'Put the shuffled words back in order. The English meaning is your clue.'],
      ['speed', '⚡', 'amber', 'Speed Quiz', 'Answer as many questions from the whole course as you can in 60 seconds.'],
      ['write', C.hanzi ? '写' : '✎', 'cyan', 'Writing Challenge', C.hanzi ? 'Write characters stroke by stroke and win three stars.' : 'Watch the pen, trace and win three stars.']
    ];
    return `<div class="page-head"><div class="eyebrow">${u('games')}</div><h1 class="page-title">Learn while you play</h1></div>
      <div class="game-grid">${Gs.map(([id, mark, c, n, d]) => `<div class="game-card" data-c="${c}"><div class="pattern" style="background:var(--uc);opacity:.07"></div><div class="g-tg" lang="${HL}">${esc(mark)}</div><h3>${n}</h3><p>${d}</p>
        <div style="display:flex;justify-content:space-between;align-items:center"><span class="chip">${u('best')}: ${S.best[id] || 0}</span><a class="btn btn-primary" href="${id === 'write' ? '#unit/' + WRITE_UNIT : '#play/' + id}">${u('play')} ${icon('arrowR')}</a></div></div>`).join('')}</div>`;
  }
  let G = null;
  function stopGame() { if (G && G.timer) clearInterval(G.timer); G = null; }
  function viewPlay(id) {
    stopGame();
    G = { id, score: 0, combo: 0, time: 60, moves: 0 };
    setTimeout(() => { if (id === 'match') matchStart(); else if (id === 'puzzle') puzzleStart(); else { roundStart(); if (G) G.timer = setInterval(tickGame, 1000); } }, 0);
    return `<div class="arena" id="arena"></div>`;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
  function tickGame() { if (!G) return; G.time--; const t = $('#gTimer'); if (t) t.style.width = (G.time / 60 * 100) + '%'; const tt = $('#gTime'); if (tt) tt.textContent = G.time; if (G.time <= 0) endGame(); }
  function arenaTop() {
    return `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span>${u('score')}: ${G.score} ${G.combo > 2 ? `<span class="chip" style="background:var(--gold-soft);color:var(--gold)">×${G.combo}</span>` : ''}</span><span>${u('time')}: <span id="gTime">${G.time}</span></span></div>
      <div class="timer"><i id="gTimer" style="width:${G.time / 60 * 100}%"></i></div>`;
  }
  function roundStart() {
    if (!G) return;
    let opts, prompt, answer, words = false;
    if (G.id === 'listen') {
      const pool = D.vocab.filter(w => glen(w.t) <= 14);
      if (pool.length < 4) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return stopGame(); }
      const w = pool[Math.random() * pool.length | 0];
      answer = w.t; opts = shuffle([w].concat(shuffle(pool.filter(x => x.t !== w.t)).slice(0, 3))).map(x => x.t); words = true;
      prompt = `<div class="muted">Listen: which word is it?</div><button class="btn btn-primary listen-btn" type="button" data-say="${esc(w.t)}">${icon('play')} ${u('listen')}</button><div class="muted" style="margin-top:8px">${md(w.mean)}</div>`;
      setTimeout(() => say(w.t), 250);
    } else if (G.id === 'speed') {
      const pool = QUIZ_POOL().filter(q => !q.say && q.options.every(o => glen(o) <= 40));
      if (!pool.length) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return stopGame(); }
      const q = pool[Math.random() * pool.length | 0];
      answer = String(q.answer); G.qopts = q.options;
      $('#arena').innerHTML = `${arenaTop()}<div class="prompt"><div class="quiz-q">${md(q.q)}</div>${q.t ? `<div class="quiz-tg" lang="${HL}">${esc(q.t)}</div>` : ''}</div>
        <div class="answers answers-text">${q.options.map((o, k) => `<button type="button" data-gans="${k}">${md(o)}</button>`).join('')}</div>`;
      G.answer = answer; return;
    } else {
      const A = D.alphabet; if (A.length < 4) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return stopGame(); }
      const a = A[Math.random() * A.length | 0];
      const same = shuffle(A.filter(x => x.group === a.group && x !== a)), rest = shuffle(A.filter(x => x.group !== a.group));
      opts = shuffle([a].concat(same.slice(0, 2), rest).slice(0, 4)).map(x => x.ch); answer = a.ch;
      prompt = `<div class="muted">Find this ${C.hanzi ? 'sound' : 'letter'}</div><div class="big">${esc(a.name)}</div><div class="muted">${esc(a.tr)}</div>`;
    }
    G.answer = answer;
    $('#arena').innerHTML = `${arenaTop()}<div class="prompt">${prompt}</div><div class="answers ${words ? 'answers-words' : ''}">${opts.map(o => `<button type="button" data-gans="${esc(o)}" lang="${HL}">${esc(o)}</button>`).join('')}</div>`;
  }
  function gameAnswer(btn) {
    if (!G || G.lock) return; G.lock = true;
    const ok = btn.dataset.gans === G.answer;
    btn.classList.add(ok ? 'ok' : 'no');
    if (!ok) $$('[data-gans]').forEach(b => { if (b.dataset.gans === G.answer) b.classList.add('ok'); });
    if (ok) { G.combo++; G.score += 10 + Math.min(G.combo, 10) * 2; } else G.combo = 0;
    if (G.id === 'hunt') { const a = D.alphabet.find(x => x.ch === G.answer); if (a) say(a.say); }
    else if (G.id === 'listen') say(G.answer);
    setTimeout(() => { if (!G) return; G.lock = false; roundStart(); }, ok ? 450 : 1100);
  }
  function endGame() {
    if (!G) return; clearInterval(G.timer); const id = G.id, sc = G.score;
    const isBest = sc > (S.best[id] || 0); if (isBest) S.best[id] = sc;
    addXP(Math.round(sc / 10)); if (isBest && sc > 0) confetti();
    $('#arena').innerHTML = `<div class="result-card"><div class="eyebrow">${isBest ? 'New record!' : u('score')}</div><div class="big">${sc}</div><div class="muted">${u('best')}: ${S.best[id] || 0} · +${Math.round(sc / 10)} XP</div>
      <div style="display:flex;gap:8px"><a class="btn" href="#games">${u('games')}</a><button class="btn btn-primary" type="button" data-replay="${id}">${u('again2')}</button></div></div>`;
    G = null;
  }
  function matchStart() {
    const pool = shuffle(D.vocab.filter(w => glen(w.t) <= 14 && plain(w.mean).length <= 26)).slice(0, 6);
    if (pool.length < 3) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return; }
    G.pairs = pool.length; G.found = 0; G.sel = null;
    const tiles = shuffle(pool.flatMap((w, k) => [{ k, html: tg(w.t, 'tg-in'), say: w.t }, { k, html: `<span>${md(w.mean)}</span>` }]));
    $('#arena').innerHTML = `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span id="gMoves">Moves: 0</span></div>
      <div class="memory">${tiles.map(t => `<button class="mem" type="button" data-mem="${t.k}" ${t.say ? `data-say="${esc(t.say)}"` : ''}>${t.html}</button>`).join('')}</div>`;
  }
  function memClick(b) {
    if (!G || b.classList.contains('matched') || b === G.sel) return;
    if (!G.sel) { G.sel = b; b.classList.add('sel'); return; }
    G.moves++; $('#gMoves').textContent = `Moves: ${G.moves}`;
    const a = G.sel; G.sel = null; a.classList.remove('sel');
    if (a.dataset.mem === b.dataset.mem) {
      a.classList.add('matched'); b.classList.add('matched'); G.found++;
      if (G.found === G.pairs) { G.score = Math.max(10, 120 - (G.moves - G.pairs) * 10); setTimeout(endGame, 500); }
    } else [a, b].forEach(x => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 400); });
  }
  function puzzleStart() {
    G.pool = shuffle(D.sentences.filter(b => b.words && b.words.length >= 3 && b.words.length <= 9));
    if (!G.pool.length) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return; }
    G.round = 0; G.rounds = Math.min(5, G.pool.length); puzzleRound();
  }
  function puzzleRound() {
    const b = G.pool[G.round]; G.sn = b; G.placed = []; G.tries = 0;
    G.tiles = shuffle(b.words.map((w, i) => ({ i, t: w.t })));
    if (G.tiles.every((t, k) => t.i === k)) G.tiles.reverse();
    puzzleDraw();
  }
  function puzzleDraw(state) {
    const b = G.sn;
    $('#arena').innerHTML = `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span>Round ${G.round + 1}/${G.rounds} · ${u('score')}: ${G.score}</span></div>
      <div class="prompt puzzle-prompt"><div class="eyebrow">Build this sentence</div><p>${md(b.mean)}</p></div>
      <div class="pz-answer ${state || ''}" lang="${HL}" aria-label="Your answer">${G.placed.length ? G.placed.map((t, k) => `<button type="button" class="pz-tile" data-pans="${k}">${esc(t.t)}</button>`).join('') : '<span class="pz-empty">Tap the words in order</span>'}</div>
      <div class="pz-bank" lang="${HL}">${G.tiles.map((t, k) => `<button type="button" class="pz-tile" data-ptile="${k}">${esc(t.t)}</button>`).join('')}</div>
      ${state === 'ok' ? `<div class="pz-foot"><button class="btn btn-primary" type="button" data-pnext>${G.round + 1 < G.rounds ? 'Next sentence' : u('finish')} ${icon('arrowR')}</button></div>` : ''}`;
  }
  function puzzleMove(from, k) {
    if (!G || !G.tiles) return;
    if (from === 'bank') G.placed.push(G.tiles.splice(k, 1)[0]); else G.tiles.push(G.placed.splice(k, 1)[0]);
    if (!G.tiles.length) {
      const ok = G.placed.every((t, j) => t.t === G.sn.words[j].t);
      if (ok) { G.score += Math.max(10, 30 - G.tries * 10); puzzleDraw('ok'); say(G.sn.t); confetti(); return; }
      G.tries++; puzzleDraw('no'); setTimeout(() => { if (G && G.tiles) { G.tiles = G.placed.concat(G.tiles); G.placed = []; puzzleDraw(); } }, 1100);
      toast('Not quite. Read the meaning again and retry.'); return;
    }
    puzzleDraw();
  }

  /* ---------- search ---------- */
  function viewSearch(q) {
    q = decodeURIComponent(q || '').trim(); if (!q) return notFound();
    const f = fold(q);
    const ls = D.lessons.filter(l => fold(l.title + ' ' + l.subtitle).includes(f)).slice(0, 20);
    const ws = D.vocab.filter(w => fold(w.t + ' ' + w.tr + ' ' + w.mean).includes(f)).slice(0, 40);
    const as = D.alphabet.filter(a => fold(a.ch + ' ' + a.name + ' ' + a.tr).split(/\s+/).includes(f));
    return `<div class="page-head"><div class="eyebrow">${u('search')}</div><h1 class="page-title">“${esc(q)}”</h1></div>
      ${!ls.length && !ws.length && !as.length ? `<div class="empty">${u('nothing')}</div>` : ''}
      ${as.length ? `<div class="letter-grid" style="margin-bottom:18px">${as.map(letterTile).join('')}</div>` : ''}
      ${ls.length ? `<div class="results" style="margin-bottom:18px">${ls.map(l => `<a class="result" href="#lesson/${l.id}" data-c="${l.unit.color}">${badge(l.unit, 'style="width:40px;height:40px;font-size:16px"', l.icon)}<div><b>${md(l.title)}</b><div class="muted" style="font-size:.85rem">${md(l.unit.title)}</div></div></a>`).join('')}</div>` : ''}
      ${ws.length ? `<div class="results">${ws.map(w => `<a class="result" href="#lesson/${w.lesson.id}">${tg(w.t)}<div><b>${md(w.mean)}</b><div class="muted" style="font-size:.85rem">${esc(w.tr)} — ${md(w.lesson.title)}</div></div></a>`).join('')}</div>` : ''}`;
  }

  /* ---------- settings, tools, roots, certificate ---------- */
  function viewSettings() {
    return `<div class="page-head"><div class="eyebrow">${u('settings')}</div><h1 class="page-title">Your progress &amp; settings</h1></div>
    <div class="settings">
      <div class="stats" style="margin:0 0 6px">
        <div class="stat"><b>${S.xp}</b><span>XP</span></div><div class="stat"><b>${S.streak.count}</b><span>${u('streak')}</span></div>
        <div class="stat"><b>${Object.keys(S.done).length}</b><span>${u('lessonsDone')}</span></div><div class="stat"><b>${masteredCount()}</b><span>${u('words')}</span></div>
      </div>
      <div class="set-row"><div><b>${esc(LANG.split(' ')[0])} text size</b><small>Make the ${esc(LANG.split(' ')[0])} text bigger for easier reading</small></div><input id="tgScale" type="range" min="0.8" max="1.6" step="0.1" value="${S.tgScale}"></div>
      <div class="set-row"><div><b>Voice</b><small>${HAVE.size ? 'Built-in recorded voices, nothing to install.' : voice ? esc(voice.name) : `No ${esc(LANG)} voice in this browser`} <a href="#sound">Sound setup</a></small></div>${HAVE.size ? voiceSeg() : '<a class="btn" href="#sound">Open sound setup</a>'}</div>
      <div class="set-row"><div><b>Speech speed</b><small>Slower is easier for beginners</small></div>
        <span style="display:flex;gap:8px;align-items:center"><input id="rate" type="range" min="0.4" max="1.1" step="0.05" value="${S.rate}">${playBtn(C.greeting || '')}</span></div>
      <div class="set-row"><div><b>Theme</b></div><div class="seg" role="group">${[['auto', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([k, l]) => `<button type="button" data-theme-set="${k}" aria-pressed="${S.theme === k}">${l}</button>`).join('')}</div></div>
      <div class="set-row"><div><b>${u('book')}</b><small>Read online, or download the PDF to print</small></div><span style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn" href="book.html" target="_blank" rel="noopener">Open the book</a><a class="btn btn-primary" href="${esc(C.pdf || 'book.pdf')}" download>Download PDF</a></span></div>
      <div class="set-row"><div><b>Reset progress</b><small>Clears XP, lessons, quiz scores and flashcards on this device</small></div>
        <span id="resetSlot"><button class="btn" type="button" data-reset="ask" style="color:var(--bad)">Reset</button></span></div>
    </div>`;
  }
  function viewTools() {
    return `<div class="page-head"><div class="eyebrow">${u('more')}</div><h1 class="page-title">All learning tools</h1></div>${missionsHTML()}<div class="tools-grid" style="margin-top:18px">${toolCards().join('')}</div>`;
  }
  function rootMap() {
    const m = {}; D.vocab.forEach(w => { if (!w.root) return; const r = w.root.trim(); (m[r] = m[r] || []).push(w); });
    return Object.entries(m).sort((a, b) => b[1].length - a[1].length);
  }
  let rootQuery = '';
  function viewRoots() {
    const all = rootMap(); if (!all.length) return `<div class="empty">No ${esc(u('roots').toLowerCase())} yet.</div>`;
    const featured = all.filter(([, ws]) => ws.length >= 2); const pick = featured.length ? featured[dayIndex() % featured.length] : all[0];
    return `<div class="page-head"><div class="eyebrow">${esc(u('roots'))}</div><h1 class="page-title">${esc(u('roots'))} explorer</h1>
      <p class="muted">${C.hanzi ? 'Many characters share a radical that hints at the meaning. Learn the radical and whole groups of words start to make sense.' : 'Words in the same family share a part and a meaning. Learn one and you recognise the others.'}</p></div>
      <section class="root-hero"><div class="pattern"></div><div class="eyebrow">Featured today</div><div class="root-big" lang="${HL}">${esc(pick[0])}</div>
        <div class="root-fam">${pick[1].map(w => `<button class="root-w" type="button" data-say="${esc(w.t)}">${tg(w.t, 'tg-in')}<small>${md(w.mean)}</small></button>`).join('')}</div></section>
      <form class="search page-search" id="rootSearch" role="search"><input id="rootSearchInput" type="search" value="${esc(rootQuery)}" placeholder="Filter by ${esc(u('roots').toLowerCase())} or meaning…" aria-label="Filter"></form>
      <div class="root-grid" id="rootGrid">${rootGrid(all)}</div>`;
  }
  function rootGrid(all) {
    const q = fold(rootQuery.trim());
    const list = (all || rootMap()).filter(([r, ws]) => !q || fold(r).includes(q) || ws.some(w => fold(w.t + ' ' + w.mean + ' ' + w.tr).includes(q)));
    if (!list.length) return `<div class="empty">${u('nothing')}</div>`;
    return list.map(([r, ws]) => `<details class="root-card"><summary><span class="root-letters" lang="${HL}">${esc(r)}</span><span class="chip">${ws.length} word${ws.length > 1 ? 's' : ''}</span><span class="root-hint">${md(ws[0].mean)}</span></summary>
      <div class="root-list">${ws.map(w => `<div class="root-row">${tg(w.t)}<span><b>${md(w.mean)}</b><small class="muted"> · ${esc(w.tr)}</small></span>${playBtn(w.t)}</div>`).join('')}</div></details>`).join('');
  }
  function viewCertificate() {
    const doneN = Object.keys(S.done).length;
    return `<div class="page-head"><div class="eyebrow">${u('cert')}</div><h1 class="page-title">Your certificate</h1>
      <p class="muted">You have finished ${doneN} of ${D.lessons.length} lessons. Type your name to make your certificate, then download it as an image to share or print.</p></div>
      <div class="cert-tools"><label class="cert-name"><span>Your name</span><input id="certName" type="text" maxlength="40" value="${esc(S.certName || '')}" placeholder="e.g. Sam Rahman"></label>
        <button class="btn btn-primary" type="button" data-certdl>Download image (PNG)</button></div>
      <canvas id="certCanvas" class="cert-canvas" width="1600" height="1130" aria-label="Certificate preview"></canvas>`;
  }
  /* the course artwork as images for the certificate canvas (fixed colours) */
  const CERT_IMG = {};
  function certImages() {
    if (CERT_IMG.scene || !ART.scene) return;
    const fix = (svg, ink, ac) => { const i = svg.indexOf('>') + 1; return svg.slice(0, i) + `<style>svg{color:${ink}} .ac{color:${ac}} .ac2{color:${ink}}</style>` + svg.slice(i); };
    const src = svg => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    const ink = getComputedStyle(document.documentElement).getPropertyValue('--primary-print').trim() || '#16425b';
    [['scene', ART.scene, 600, 200], ['corner', ART.corner, 64, 64]].forEach(([k, svg, w, h]) => {
      const im = new Image(); im.onload = () => drawCert(); im.src = src(fix(svg.replace(/<svg /, `<svg width="${w}" height="${h}" `), ink, '#b07a17')); CERT_IMG[k] = im;
    });
  }
  function drawCert() {
    const c = $('#certCanvas'); if (!c) return; const x = c.getContext('2d'); const W = c.width, H = c.height;
    const cs = getComputedStyle(document.documentElement); const P = cs.getPropertyValue('--primary-print').trim() || '#16425b', GOLD = '#b07a17';
    const TF = cs.getPropertyValue('--f-tg').trim() || 'serif', DF = cs.getPropertyValue('--f-display').trim() || 'serif';
    const doneN = Object.keys(S.done).length, all = D.lessons.length, finished = doneN >= all;
    x.fillStyle = '#fbfaf6'; x.fillRect(0, 0, W, H);
    x.strokeStyle = GOLD; x.lineWidth = 14; x.strokeRect(40, 40, W - 80, H - 80); x.lineWidth = 3; x.strokeRect(70, 70, W - 140, H - 140);
    const star = (cx, cy, r) => { x.beginPath(); for (let i = 0; i < 16; i++) { const a = Math.PI / 8 * i - Math.PI / 2, rr = i % 2 ? r * .7 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); x.fill(); };
    const ready = CERT_IMG.corner && CERT_IMG.corner.complete && CERT_IMG.corner.naturalWidth;
    if (ready) { [[120, 120], [W - 120, 120], [120, H - 120], [W - 120, H - 120]].forEach(([a, b]) => x.drawImage(CERT_IMG.corner, a - 46, b - 46, 92, 92)); }
    else { x.fillStyle = P; [[120, 120], [W - 120, 120], [120, H - 120], [W - 120, H - 120]].forEach(([a, b]) => star(a, b, 34)); }
    if (CERT_IMG.scene && CERT_IMG.scene.complete && CERT_IMG.scene.naturalWidth) { x.save(); x.globalAlpha = .16; x.drawImage(CERT_IMG.scene, W / 2 - 420, H - 380, 840, 280); x.restore(); }
    x.textAlign = 'center';
    x.fillStyle = GOLD; x.font = `700 72px ${TF}`; x.fillText((C.wish && C.wish.t) || '', W / 2, 220);
    x.fillStyle = P; x.font = '600 30px Figtree, sans-serif'; x.fillText('CERTIFICATE OF ACHIEVEMENT', W / 2, 290);
    x.fillStyle = '#1b2a33'; x.font = `700 66px ${DF}`; x.fillText(C.title || '', W / 2, 390);
    x.font = `500 36px ${TF}`; x.fillStyle = '#4c5d66'; x.fillText(C.native || '', W / 2, 445);
    x.font = '400 32px Figtree, sans-serif'; x.fillText('This is to certify that', W / 2, 530);
    x.fillStyle = '#1b2a33'; x.font = `700 76px ${DF}`; x.fillText(S.certName || '________________', W / 2, 640);
    x.strokeStyle = GOLD; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 380, 665); x.lineTo(W / 2 + 380, 665); x.stroke();
    x.fillStyle = '#4c5d66'; x.font = '400 32px Figtree, sans-serif';
    x.fillText(finished ? `has successfully completed all ${all} lessons of ${C.title}` : `has completed ${doneN} of ${all} lessons, and the journey continues`, W / 2, 750);
    x.font = '400 26px Figtree, sans-serif'; x.fillText(`${S.xp} XP · ${new Date().toLocaleDateString('en-GB')} · ${C.domain || ''}`, W / 2, 960);
    x.fillText('Copyright © ZyeemZia', W / 2, 1000);
  }
  /* ---------- contact: the shared ZyeemZia Direct Transmission Hub, loaded only when opened ---------- */
  const TX_BASE = 'https://zyeemzia.com/';
  let txP = null;
  const loadTransmit = () => window.ZZTransmit ? Promise.resolve() : txP || (txP = new Promise((res, rej) => {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = TX_BASE + 'transmit.css?v=3'; document.head.appendChild(l);
    const sc = document.createElement('script'); sc.src = TX_BASE + 'transmit.js?v=3'; sc.onload = () => res(); sc.onerror = () => { txP = null; rej(); }; document.head.appendChild(sc);
  }));
  function viewContact() {
    return `<div class="page-head"><div class="eyebrow">Contact</div><h1 class="page-title">Talk to ZyeemZia</h1><p class="muted">Questions about ${esc(C.title || '')}, a mistake you spotted, or using the course in your class? Send a message and the reply will come to your email.</p></div>
      <section class="tx-mount" id="contact" data-tx-topic="academy" data-tx-dark='html[data-theme="dark"]' data-tx-light='html[data-theme="light"]' data-tx-auto="media"
        data-tx-regarding="${esc(`${C.title} (${C.native})`)}" data-tx-source="${esc(C.domain || '')} · Course" data-tx-lead="Questions about this course, the book or your certificate? Transmit a message straight to the ZyeemZia command desk."><p class="muted">Loading the contact form…</p></section>`;
  }
  function mountContact() {
    loadTransmit().then(() => { const el = $('#view .tx-mount'); if (el && window.ZZTransmit) window.ZZTransmit.mount(el); })
      .catch(() => { const el = $('#view .tx-mount'); if (el) el.innerHTML = '<p class="muted">The contact form could not load. Check your connection, or email admin@zyeemzia.com.</p>'; });
  }
  function notFound() { return `<div class="empty"><div class="tg">?</div><p>Page not found.</p><a class="btn" href="#home">${u('home')}</a></div>`; }

  /* ---------------- router ---------------- */
  function route() {
    stopGame(); stopVoice();
    const [r, arg] = location.hash.slice(1).split('/');
    const V = { home: viewHome, '': viewHome, learn: viewLearn, unit: viewUnit, lesson: viewLesson, alphabet: viewAlphabet, cards: viewCards, games: viewGames, play: viewPlay, search: viewSearch, settings: viewSettings, tools: viewTools, roots: viewRoots, certificate: viewCertificate, sound: viewSound, contact: viewContact }[r || ''] || notFound;
    view.innerHTML = V(arg);
    renderChrome(); initTraces(view);
    if (r === 'contact') mountContact();
    if (r === 'certificate') { certImages(); drawCert(); if (document.fonts) document.fonts.ready.then(drawCert); }
    window.scrollTo(0, 0); onScroll();
    const l = r === 'lesson' && D.lessons.find(x => x.id === arg);
    document.title = l ? plain(l.title) + ' · ' + (C.title || '') : (C.title || '') + ' · ' + (C.native || '');
  }
  function rerender() { const y = scrollY; if (location.hash.slice(1).split('/')[0] === 'play') return renderChrome(); view.innerHTML = ''; route(); window.scrollTo(0, y); }
  function onScroll() {
    const p = $('#readProgress'); if (!location.hash.startsWith('#lesson/')) { p.style.width = '0'; return; }
    const h = document.documentElement.scrollHeight - innerHeight; p.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  }

  /* ---------------- events ---------------- */
  document.addEventListener('click', e => {
    const t = e.target;
    if (t.closest('#themeBtn')) { S.theme = isDark() ? 'light' : 'dark'; save(); applyTheme(); renderChrome(); return; }
    const vs = t.closest('[data-voice-set]'); if (vs) { S.voice = vs.dataset.voiceSet; save(); rerender(); say(C.greeting); return; }
    const ts = t.closest('[data-theme-set]'); if (ts) { S.theme = ts.dataset.themeSet; save(); applyTheme(); rerender(); return; }
    if (t.closest('[data-close]')) { closeModal(); return; }
    if (t.closest('[data-sbclose]')) { const sb = $('#soundBanner'); if (sb) sb.remove(); return; }
    const pt = t.closest('[data-ptile]'); if (pt) { puzzleMove('bank', +pt.dataset.ptile); return; }
    const pa = t.closest('[data-pans]'); if (pa) { puzzleMove('ans', +pa.dataset.pans); return; }
    if (t.closest('[data-pnext]')) { G.round++; if (G.round >= G.rounds) endGame(); else puzzleRound(); return; }
    if (t.closest('[data-certdl]')) { drawCert(); const a = document.createElement('a'); a.download = (C.slug || 'course') + '-certificate.png'; a.href = $('#certCanvas').toDataURL('image/png'); document.body.appendChild(a); a.click(); a.remove(); return; }
    const hw = t.closest('[data-howto]'); if (hw) {
      const sec = hw.closest('.howto'); const hz = $('.hz-box', sec);
      if (hz && hz._writer) hz._writer.animateCharacter(); else { const el = $('.howto-tg', sec); if (el) { el.classList.remove('play'); void el.offsetWidth; el.classList.add('play'); say(el.dataset.say); } }
      return;
    }
    const hp = t.closest('[data-hzpick]'); if (hp) {
      const pad = hp.closest('.hz-pad'); const chars = JSON.parse(pad.dataset.chars); const ch = chars[+hp.dataset.hzpick];
      $$('[data-hzpick]', pad).forEach(b => b.setAttribute('aria-pressed', b === hp));
      const box = $('.hz-box', pad); box._init = false; box.dataset.hz = ch; $('.trace-score', pad).innerHTML = '';
      const sb = $('.trace-btns [data-say]', pad); if (sb) sb.dataset.say = ch;
      mountHanzi(box); say(ch); return;
    }
    const ha = t.closest('[data-hzanim]'); if (ha) { const box = $('.hz-box', ha.closest('.hz-pad')); if (box && box._writer) { box._writer.cancelQuiz && box._writer.cancelQuiz(); box._writer.animateCharacter(); } return; }
    const hq = t.closest('[data-hzquiz]'); if (hq) { hanziQuiz(hq.closest('.hz-pad')); return; }
    const mm0 = t.closest('button[data-memo]'); if (mm0) {
      const sec = mm0.closest('.sent'); const lvl = ((+sec.dataset.memoLevel || 0) + 1) % 4; sec.dataset.memoLevel = lvl;
      $$('.sent-tg .w', sec).forEach((w, j) => w.classList.toggle('hid', lvl === 3 || (lvl === 2 && j % 2 === 1) || (lvl === 1 && j % 3 === 2)));
      $('.memo-bar', sec).hidden = lvl === 0; $('.wbw', sec).hidden = true;
      $('.memo-level', sec).textContent = ['', 'Level 1: a few words hidden', 'Level 2: half the words hidden', 'Level 3: say the whole sentence'][lvl];
      mm0.classList.toggle('btn-primary', lvl > 0); return;
    }
    const mr = t.closest('[data-memorep]'); if (mr) { let n = 0; const txt = mr.dataset.memorep; const go = () => { if (n++ < 3) say(txt, null, () => setTimeout(go, 400)); }; go(); return; }
    const md0 = t.closest('[data-memodone]'); if (md0) { S.memo[md0.dataset.memodone] = today(); addXP(5); save(); toast('Marked as memorised. Revise it again tomorrow!'); return; }
    const hidw = t.closest('.sent-tg .w.hid'); if (hidw) { hidw.classList.add('peek'); setTimeout(() => hidw.classList.remove('peek'), 1400); }
    const lt = t.closest('[data-letter]'); if (lt) { openLetter(lt.dataset.letter); return; }
    const qo = t.closest('[data-qopt]'); if (qo) { const [q, k] = qo.dataset.qopt.split(':'); quizPick(q, +k); return; }
    const qn = t.closest('[data-qnext]'); if (qn) { quizNext(qn.dataset.qnext); return; }
    const qr = t.closest('[data-qretry]'); if (qr) { const st = quizStates[qr.dataset.qretry]; Object.assign(st, { i: 0, picked: null, right: 0, results: [] }); $('#' + qr.dataset.qretry).innerHTML = quizInner(qr.dataset.qretry); return; }
    const cp = t.closest('[data-complete]'); if (cp) {
      const id = cp.dataset.complete; if (!S.done[id]) { S.done[id] = today(); addXP(20); confetti(); bumpDaily('lesson'); }
      $('#completeSlot').innerHTML = completeHTML(D.lessons.find(l => l.id === id));
      const nx = D.lessons[D.lessons.findIndex(l => l.id === id) + 1];
      toast(nx ? `Well done! Next: ${plain(nx.title)}` : 'You finished the whole course. Congratulations!', 3500); return;
    }
    const wb = t.closest('[data-wbw]'); if (wb) { const box = $('.wbw', wb.closest('.sent')); box.hidden = !box.hidden; wb.classList.toggle('btn-primary', !box.hidden); return; }
    const pl = t.closest('[data-playall]'); if (pl) { const dl = pl.closest('.dialogue'); sayAll($$('.dl-line', dl).map((r, idx) => ({ t: r.dataset.t, idx })), dl); return; }
    const rp0 = t.closest('[data-roleplay]'); if (rp0) { const dl = rp0.closest('.dialogue'); dl.classList.toggle('roleplay'); rp0.classList.toggle('btn-primary'); toast(dl.classList.contains('roleplay') ? 'Role-play: the second speaker is hidden. Say those lines yourself, then tap to check.' : 'Role-play off'); return; }
    const af = t.closest('[data-afilter]'); if (af) { alphaFilter = af.dataset.afilter; $$('[data-afilter]').forEach(b => b.setAttribute('aria-pressed', b === af)); $('#alphaGrid').innerHTML = alphaGrid(); return; }
    if (t.closest('#fcCard')) { fcFlip = !fcFlip; $('#fcCard').classList.toggle('flip', fcFlip); if (fcFlip && fcQueue[0]) say(fcQueue[0].t); return; }
    const fg = t.closest('[data-fc]'); if (fg) { fcGrade(+fg.dataset.fc); return; }
    const fd = t.closest('[data-fcdir]'); if (fd) { S.fcDir = fd.dataset.fcdir; save(); rerender(); return; }
    const ga = t.closest('[data-gans]'); if (ga) { gameAnswer(ga); return; }
    const mm = t.closest('[data-mem]'); if (mm) { if (mm.dataset.say) say(mm.dataset.say); memClick(mm); return; }
    const rp = t.closest('[data-replay]'); if (rp) { view.innerHTML = viewPlay(rp.dataset.replay); return; }
    const rs = t.closest('[data-reset]'); if (rs) {
      if (rs.dataset.reset === 'ask') $('#resetSlot').innerHTML = `<span style="display:flex;gap:6px"><button class="btn btn-sm" type="button" data-reset="no">Cancel</button><button class="btn btn-sm" type="button" data-reset="yes" style="background:var(--bad);color:#fff;border-color:transparent">Yes, erase everything</button></span>`;
      else if (rs.dataset.reset === 'yes') { S = Object.assign(defaults(), { theme: S.theme, tgScale: S.tgScale, rate: S.rate, voice: S.voice }); save(); rerender(); toast('Progress reset.'); }
      else rerender();
      return;
    }
    const sy = t.closest('[data-say]'); if (sy) {
      say(sy.dataset.say, null, null, sy.dataset.alt === '1');
      const w = sy.closest('.sent-tg .w'); if (w) { $$('.sent-tg .w.on').forEach(x => x.classList.remove('on')); w.classList.add('on'); const sec = w.closest('.sent'); const box = $('.wbw', sec); if (box.hidden) { box.hidden = false; $('[data-wbw]', sec).classList.add('btn-primary'); } const tgt = box.children[+w.dataset.wi]; if (tgt) { tgt.style.outline = '2px solid var(--gold)'; setTimeout(() => { tgt.style.outline = ''; }, 1200); } }
      const bub = sy.closest('.roleplay .dl-line.b .tg'); if (bub) bub.closest('.dl-line').classList.add('shown');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.id === 'fcCard') { e.preventDefault(); document.activeElement.click(); }
  });
  document.addEventListener('input', e => {
    if (e.target.id === 'tgScale') { S.tgScale = +e.target.value; applyTheme(); save(); }
    if (e.target.id === 'rate') { S.rate = +e.target.value; save(); }
    if (e.target.id === 'certName') { S.certName = e.target.value; save(); drawCert(); }
    if (e.target.id === 'rootSearchInput') { rootQuery = e.target.value; $('#rootGrid').innerHTML = rootGrid(); }
  });
  document.addEventListener('change', e => {
    if (e.target.id === 'fcDeck') { fcDeck = e.target.value; rerender(); }
    if (e.target.dataset && e.target.dataset.check) { S.checks[e.target.dataset.check] = e.target.checked; if (e.target.checked) addXP(1); save(); }
  });
  document.addEventListener('submit', e => {
    if (e.target.closest('#rootSearch')) { e.preventDefault(); return; }
    const f = e.target.closest('#searchForm, #learnSearch'); if (!f) return;
    e.preventDefault(); const q = $('input', f).value.trim(); if (q) location.hash = '#search/' + encodeURIComponent(q);
  });
  addEventListener('hashchange', route);
  addEventListener('scroll', onScroll, { passive: true });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.theme === 'auto') renderChrome(); });

  /* index.html?saylist lists every text the app can speak (engine/audio.py records them); not linked anywhere */
  function sayList() {
    quiet = true;
    const out = {}; const add = t => { const c = sayText(t); if (c && /\p{L}/u.test(c)) out[akey(c)] = c; };
    const pages = [viewHome(), viewAlphabet(), viewRoots(), viewSettings(), viewSound(), viewCards()];
    D.lessons.forEach(l => pages.push(viewLesson(l.id)));
    D.alphabet.forEach(a => { openLetter(a.id); pages.push($('#modalCard').innerHTML); }); closeModal();
    const box = document.createElement('div');
    pages.forEach(h => {
      box.innerHTML = h;
      $$('[data-say]', box).forEach(el => add(el.dataset.say));
      $$('[data-memorep]', box).forEach(el => add(el.dataset.memorep));
      $$('[data-items]', box).forEach(el => JSON.parse(el.dataset.items).forEach(add));
      $$('[data-chars]', box).forEach(el => JSON.parse(el.dataset.chars).forEach(add));
    });
    D.vocab.forEach(w => add(w.t)); D.sentences.forEach(b => { add(b.t); (b.words || []).forEach(w => add(w.t)); });
    D.alphabet.forEach(a => { add(a.say); add(a.example.t); }); add(C.greeting);
    const pre = document.createElement('pre'); pre.id = 'saylist'; pre.textContent = JSON.stringify(out); document.body.appendChild(pre);
    quiet = false;
  }

  applyTheme(); route();
  if (/[?&]saylist\b/.test(location.search)) sayList();
  if ('serviceWorker' in navigator && location.protocol === 'https:') addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { /* optional */ }));
})();
