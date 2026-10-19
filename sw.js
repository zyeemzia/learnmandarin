/* Offline cache for Learn Mandarin. Copyright © ZyeemZia
   Pages and files open instantly from the cache and are refreshed in the background.
   VERSION is stamped by the build; a new version clears the old cache. */
const VERSION = '054d9fc514';
const CACHE = 'learnmandarin-' + VERSION;
const CORE = ['./', 'index.html', 'app.css', 'fonts.css', 'data.bundle.js', 'core.js', 'app.js', 'favicon.svg', 'book.html', 'book.css', 'book.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('learnmandarin-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request; const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.endsWith('.pdf')) return; // the large PDF is never cached
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || fresh;
  }));
});
