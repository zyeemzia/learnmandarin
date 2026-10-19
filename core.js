/* ZyeemZia language courses — shared helpers for the app (app.js) and the printable book (book.js).
   Copyright © ZyeemZia */
window.LC = window.LC || { course: null, alphabet: null, units: [] };
(function () {
  const C = LC.course || {};
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // target-script runs inside English text get the target font automatically (Bangla, Chinese); French relies on {{…}}
  const SCRIPT = C.cjk ? /([㐀-鿿豈-﫿　-〿＀-￯](?:[㐀-鿿豈-﫿　-〿＀-￯\s]*[㐀-鿿豈-﫿　-〿＀-￯])?)/g
    : C.htmlLang === 'bn' ? /([ঀ-৿](?:[ঀ-৿\s‌‍]*[ঀ-৿])?)/g : null;
  const tgSpan = t => `<span class="tg-in" lang="${esc(C.htmlLang || '')}">${t}</span>`;

  /* inline markup: **bold**, {{target}}; target-script runs are wrapped automatically for Bangla/Chinese */
  function md(s) {
    const parts = String(s == null ? '' : s).split(/\{\{([\s\S]+?)\}\}/);
    return parts.map((p, i) => {
      if (i % 2) return tgSpan(esc(p));
      let h = esc(p);
      if (SCRIPT) h = h.replace(SCRIPT, m => tgSpan(m));
      return h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    }).join('');
  }
  const plain = s => String(s == null ? '' : s).replace(/\{\{|\}\}|\*\*/g, '');
  function hl(t, h, cls) {
    if (!h || String(t).indexOf(h) < 0) return esc(t);
    const i = t.indexOf(h);
    return esc(t.slice(0, i)) + `<mark class="${cls || 'hl'}">${esc(h)}</mark>` + esc(t.slice(i + h.length));
  }
  /* search/compare: lower case, no accents or tone marks */
  const fold = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const isTarget = s => typeof s === 'string' && SCRIPT ? new RegExp(SCRIPT.source).test(s) : false;

  function prepare() {
    const units = (LC.units || []).slice().sort((a, b) => a.order - b.order);
    const lessons = [];
    units.forEach(u => u.lessons.forEach((l, i) => { l.unit = u; l.index = i; l.gi = lessons.length; lessons.push(l); }));
    const vocab = []; const seen = new Set();
    lessons.forEach(l => l.blocks.forEach(b => {
      if (b.type !== 'vocab') return;
      b.items.forEach(w => { if (!seen.has(w.t)) { seen.add(w.t); vocab.push(Object.assign({ lesson: l, unit: l.unit }, w)); } });
    }));
    const A = (LC.alphabet && LC.alphabet.items) || [];
    const letterById = {}; A.forEach(a => letterById[a.id] = a);
    const sentences = lessons.flatMap(l => l.blocks.filter(b => b.type === 'sentence').map(b => Object.assign({ lesson: l }, b)));
    return { units, lessons, vocab, letterById, alphabet: A, groups: (LC.alphabet && LC.alphabet.groups) || [], sentences };
  }
  function seeded(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
  const joiner = C.cjk ? '' : ' ';
  const isHan = ch => /^[㐀-鿿豈-﫿]$/.test(ch);

  window.LX = { C, esc, md, plain, hl, fold, isTarget, prepare, seeded, joiner, isHan };
})();
