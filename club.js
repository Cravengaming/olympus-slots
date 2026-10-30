// Shared pieces for every screen: the club name, god symbols, scenery, reading the
// address, scaling, and the effects (sparks, coins, petals, bubbles, lightning).
// Symbol order matches the controller's reels:
// 0 Athena, 1 Artemis, 2 Dionysus, 3 Aphrodite, 4 Poseidon, 5 Zeus (jackpot).

const CLUB_DEFAULT = 'Olympus';
const GODS = [
  { name: 'Athena', color: '#c9d4ff' },
  { name: 'Artemis', color: '#c3b4ff' },
  { name: 'Dionysus', color: '#c77dff' },
  { name: 'Aphrodite', color: '#ff7ad1' },
  { name: 'Poseidon', color: '#3ff3ff' },
  { name: 'Zeus', color: '#ffe27a' }
];
// Outcome names sent by the controller, as shown to people
const OUTCOMES = { JACKPOT: 'Zeus', POSEIDON: 'Poseidon', APHRODITE: 'Aphrodite', DIONYSUS: 'Dionysus',
                   ATHENA: 'Athena', ARTEMIS: 'Artemis', PAIR: 'Pair', MISS: 'Miss' };

(function sprite() {
  let grapes = '';
  [[23, 30], [41, 30], [59, 30], [77, 30], [32, 46], [50, 46], [68, 46], [41, 62], [59, 62], [50, 78]]
    .forEach(([x, y]) => grapes += `<circle cx="${x}" cy="${y}" r="9.5" fill="url(#gDio)" stroke="#3a0a5e" stroke-width="2.5"/>`);
  let ribs = '';
  [[20, 36], [30, 22], [40, 14], [50, 11], [60, 14], [70, 22], [80, 36]]
    .forEach(([x, y]) => ribs += `<path d="M50 82L${x} ${y}" stroke="#b0206e" stroke-width="2.5" stroke-linecap="round"/>`);
  document.body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="gAth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6ff"/><stop offset="1" stop-color="#7c86c9"/></linearGradient>
  <linearGradient id="gArt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#9d8cff"/></linearGradient>
  <radialGradient id="gDio" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#f3d2ff"/><stop offset=".5" stop-color="#b14dff"/><stop offset="1" stop-color="#5a12a0"/></radialGradient>
  <linearGradient id="gAph" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe6f6"/><stop offset="1" stop-color="#ff4fb8"/></linearGradient>
  <linearGradient id="gPos" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9ffff"/><stop offset="1" stop-color="#14b8d4"/></linearGradient>
  <linearGradient id="gZeus" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffbe0"/><stop offset=".5" stop-color="#ffd23f"/><stop offset="1" stop-color="#ff9f1c"/></linearGradient>
  <linearGradient id="gLeaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7dffc0"/><stop offset="1" stop-color="#1f8a6a"/></linearGradient>
  <symbol id="god0" viewBox="0 0 100 100">
    <path d="M50 94C26 94 18 72 21 50L16 10L35 25Q50 19 65 25L84 10L79 50C82 72 74 94 50 94Z" fill="url(#gAth)" stroke="#2c2f6b" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M34 74q8 6 16 0q8 6 16 0M38 84q6 5 12 0q6 5 12 0" fill="none" stroke="#2c2f6b" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>
    <circle cx="37" cy="46" r="12" fill="#fff" stroke="#2c2f6b" stroke-width="3"/><circle cx="63" cy="46" r="12" fill="#fff" stroke="#2c2f6b" stroke-width="3"/>
    <circle cx="37" cy="46" r="6.5" fill="#ffb300"/><circle cx="63" cy="46" r="6.5" fill="#ffb300"/>
    <circle cx="37" cy="46" r="3" fill="#1a1030"/><circle cx="63" cy="46" r="3" fill="#1a1030"/>
    <path d="M45 57H55L50 67Z" fill="#ff9f1c" stroke="#2c2f6b" stroke-width="2" stroke-linejoin="round"/>
  </symbol>
  <symbol id="god1" viewBox="0 0 100 100">
    <path d="M64 8A44 44 0 1 0 64 92A36 36 0 1 1 64 8Z" fill="url(#gArt)" stroke="#3a2a8a" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M80 22l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#fff6c2" stroke="#3a2a8a" stroke-width="2" stroke-linejoin="round"/>
    <path d="M84 58l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#fff6c2" stroke="#3a2a8a" stroke-width="1.5" stroke-linejoin="round"/>
  </symbol>
  <symbol id="god2" viewBox="0 0 100 100">
    <path d="M50 22Q52 12 60 6" fill="none" stroke="#6b3b12" stroke-width="4" stroke-linecap="round"/>
    <path d="M53 18Q70 2 88 12Q78 30 56 24Z" fill="#5be39a" stroke="#0f5a3a" stroke-width="3" stroke-linejoin="round"/>
    ${grapes}
  </symbol>
  <symbol id="god3" viewBox="0 0 100 100">
    <path d="M50 84L12 44Q14 12 50 10Q86 12 88 44Z" fill="url(#gAph)" stroke="#8a1458" stroke-width="3.5" stroke-linejoin="round"/>
    ${ribs}
    <path d="M38 82H62L58 93H42Z" fill="url(#gAph)" stroke="#8a1458" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="50" cy="60" r="6" fill="#fff" stroke="#8a1458" stroke-width="2"/>
  </symbol>
  <symbol id="god4" viewBox="0 0 100 100">
    <path d="M50 1L58 14H54V54H46V14H42Z M18 10L25 1L32 10H28V32Q34 44 46 47V55Q28 52 22 36V10Z M82 10L75 1L68 10H72V32Q66 44 54 47V55Q72 52 78 36V10Z"
          fill="url(#gPos)" stroke="#04384a" stroke-width="3" stroke-linejoin="round"/>
    <rect x="39" y="52" width="22" height="8" rx="2" fill="url(#gPos)" stroke="#04384a" stroke-width="3"/>
    <rect x="46" y="60" width="8" height="37" rx="3" fill="url(#gPos)" stroke="#04384a" stroke-width="3"/>
  </symbol>
  <symbol id="god5" viewBox="0 0 100 100">
    <path d="M60 2L20 54H45L33 98L82 38H56L72 2Z" fill="url(#gZeus)" stroke="#7a3d00" stroke-width="4" stroke-linejoin="round"/>
  </symbol>
</defs></svg>`);
})();

const sym = i => GODS[i] ? `<svg class="god god${i}"><use href="#god${i}"/></svg>` : '';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const dec = s => { try { return decodeURIComponent(s || ''); } catch (e) { return s || ''; } };
const nowSec = () => Math.floor(Date.now() / 1000);
// Each god's signature rhythm, for the control screen's toy meter.
// Keep in sync with RHYTHMS in the controller script.
const RHYTHMS = {
  thunder: { label: 'Thunderstorm', ms: 600, steps: '6;8;6;9;7;20;20;8;10;7;9;20;20;20;9;11;8;12;10;20;18;20;12;14;16;18;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20;20' },
  tide: { label: 'Rolling tide', ms: 400, steps: '4;6;9;12;15;16;15;12;9;6;6;9;12;15;18;19;18;15;12;9;8;11;14;17;20;20;20;17;14;11;8;11;14;17;20;20;20;17;14;11;8;11;14;17;20;20;20;17;14;11' },
  heart: { label: 'Heartbeat', ms: 200, steps: '14;3;11;0;0;0;14;3;11;0;0;0;14;3;11;0;0;0;17;4;14;0;0;17;4;14;0;0;17;4;14;0;0;17;4;14;0;0;20;6;17;0;20;6;17;0;20;6;17;0' },
  party: { label: 'Party beat', ms: 235, steps: '16;4;12;4;18;4;12;4;16;4;12;4;18;4;12;4;18;6;14;6;20;6;14;6;18;6;14;6;20;6;14;6;18;6;14;6;20;6;14;6;18;6;14;6;20;6;14;6;20;20' },
  climb: { label: 'Disciplined climb', ms: 500, steps: '6;6;6;8;8;8;10;10;10;12;12;12;14;14;14;16;16;16;18;18;18;18;18;18' },
  arrows: { label: 'Volley of arrows', ms: 150, steps: '20;3;20;3;20;3;3;3;3;20;3;20;3;20;3;3;3;3;20;3;20;3;20;3;3;3;3;20;3;20;3;20;3;3;3;3;20;3;20;3;20;3;3;3;3;20;20;20;3;3' },
  tease: { label: 'Tease', ms: 300, steps: '4;8;4;9;5;10;5;11;6;12;6;13;7;14;7;15;8;15;9;16;9;16;10;17;10;17;12' }
};
Object.values(RHYTHMS).forEach(r => r.steps = r.steps.split(';').map(Number));

const fmt = s => { const h = s / 3600 | 0, m = (s % 3600) / 60 | 0; return h ? `${h}h ${m}m` : m ? `${m}m ${s % 60}s` : `${s}s`; };

// The scripts put the screen's state after "#". Values stay escaped until read, so
// separators inside names never clash.
function readHash() {
  const o = {};
  location.hash.slice(1).split('&').forEach(kv => { const i = kv.indexOf('='); if (i > 0) o[kv.slice(0, i)] = kv.slice(i + 1); });
  return o;
}

// Shrinks a glowing title until it fits (clipping would cut its glow off square)
function fitText(el, text, maxW, px) {
  el.textContent = text;
  el.style.fontSize = px + 'px';
  while (el.scrollWidth > maxW && px > 14) el.style.fontSize = (px -= 2) + 'px';
}

// Fills the screen edge to edge. In Second Life the screen is always 2:1, so stretching is invisible;
// in a browser window of a very different shape it keeps the proportions instead.
function fit(stage) {
  const go = () => {
    const kx = innerWidth / 1024, ky = innerHeight / 512, off = Math.abs(kx / ky - 1);
    const k = Math.min(kx, ky);
    stage.style.transform = off < .15 ? `translate(-50%, -50%) scale(${kx}, ${ky})` : `translate(-50%, -50%) scale(${k})`;
  };
  addEventListener('resize', go); go();
}

// A vine winding up a column: dark parts pass behind it, bright parts in front
function vineSvg(h, seed) {
  const W = 74, top = h * (seed ? .18 : .32), amp = 30, per = 74;
  let back = '', front = '', leaves = '';
  let prev = null;
  for (let y = h + 6; y >= top; y -= 3) {
    const ph = (h - y) / per * Math.PI * 2 + seed * 2;
    const x = W / 2 + Math.sin(ph) * amp, inFront = Math.cos(ph) > 0;
    if (prev) {
      if (inFront) front += `M${prev[0]} ${prev[1]}L${x.toFixed(1)} ${y}`;
      else back += `M${prev[0]} ${prev[1]}L${x.toFixed(1)} ${y}`;
    }
    prev = [x.toFixed(1), y];
  }
  for (let y = h - 10, i = 0; y >= top + 6; y -= 19, i++) {
    const ph = (h - y) / per * Math.PI * 2 + seed * 2;
    const x = W / 2 + Math.sin(ph) * amp, inFront = Math.cos(ph) > 0;
    const rot = (i % 2 ? 40 : -140) + Math.sin(ph) * 30, s = 0.8 + (i % 3) * .15;
    leaves += `<path transform="translate(${x.toFixed(1)} ${y}) rotate(${rot.toFixed(0)}) scale(${s})" d="M0 0C4 -6 13 -8 16 -2C18 3 13 8 6 7C10 2 5 -1 0 0Z"
      fill="${inFront ? 'url(#gLeaf)' : '#0f4a3a'}" stroke="#0a3328" stroke-width="1" opacity="${inFront ? 1 : .6}"/>`;
  }
  return `<svg class="vine" width="${W}" height="${h + 10}" viewBox="0 0 ${W} ${h + 10}">
    <path d="${back}" stroke="#13503e" stroke-width="3" stroke-linecap="round" opacity=".6"/>
    ${leaves}
    <path d="${front}" stroke="#3fae7a" stroke-width="3.2" stroke-linecap="round"/></svg>`;
}

function scenery(stage, moon) {
  stage.insertAdjacentHTML('afterbegin',
    `<div class="grid"></div><div class="stars"></div><div class="pool"></div><div class="key top"></div><div class="key bottom"></div>`
    + `<div class="neon"></div><div class="wash"></div><div class="sweep"></div>`
    + (moon ? `<div class="moon" style="left:${moon[0]}px;top:${moon[1]}px"></div>` : ''));
  const s = stage.querySelector('.stars');
  for (let i = 0; i < 70; i++) {
    const d = document.createElement('i');
    d.style.left = (Math.random() * 100) + '%'; d.style.top = (Math.random() * 100) + '%';
    d.style.animationDelay = (Math.random() * 3) + 's'; d.style.opacity = .3 + Math.random() * .7;
    s.appendChild(d);
  }
  // inline height, since a column inside a hidden layer has no measured size yet
  stage.querySelectorAll('.column').forEach((c, i) =>
    c.insertAdjacentHTML('beforeend', vineSvg(parseFloat(c.style.height) || c.offsetHeight, i % 2)));
}

// Particle, lightning and arrow effects on a full-stage canvas
function Fx(canvas) {
  const cx = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
  let parts = [], bolts = [], arrows = [], on = false;
  const jag = (x, tx, ty) => {
    const pts = [[x, -10]];
    for (let i = 1; i <= 14; i++) { const t = i / 14; pts.push([x + (tx - x) * t + (Math.random() - .5) * 60 * (1 - t * .4), -10 + (ty + 10) * t]); }
    return pts;
  };
  const heart = r => { cx.beginPath(); cx.moveTo(0, r * .35); cx.bezierCurveTo(-r * 1.2, -r * .5, -r * .4, -r * 1.2, 0, -r * .45);
    cx.bezierCurveTo(r * .4, -r * 1.2, r * 1.2, -r * .5, 0, r * .35); cx.fill(); };
  const star = r => { cx.beginPath(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, d = i % 2 ? r * .3 : r * 1.4; cx.lineTo(Math.cos(a) * d, Math.sin(a) * d); } cx.fill(); };
  function loop() {
    cx.clearRect(0, 0, W, H);
    bolts = bolts.filter(b => b.life-- > 0);
    for (const b of bolts) {
      if (b.life % 3 === 0) b.pts = jag(b.x, b.tx, b.ty);
      cx.save(); cx.globalAlpha = Math.min(1, b.life / 8);
      cx.strokeStyle = '#ffffff'; cx.shadowColor = '#9fdcff'; cx.shadowBlur = 30; cx.lineWidth = 4 + Math.random() * 4; cx.lineJoin = 'round';
      cx.beginPath(); b.pts.forEach((p, i) => i ? cx.lineTo(p[0], p[1]) : cx.moveTo(p[0], p[1])); cx.stroke();
      cx.lineWidth = 1.5; cx.shadowBlur = 0; cx.stroke(); cx.restore();
    }
    arrows = arrows.filter(a => a.life-- > 0 && a.x < W + 120);
    for (const a of arrows) {
      a.x += a.vx; a.y += a.vy;
      cx.save(); cx.translate(a.x, a.y); cx.rotate(Math.atan2(a.vy, a.vx));
      const g = cx.createLinearGradient(-160, 0, 0, 0); g.addColorStop(0, '#c3b4ff00'); g.addColorStop(1, '#ffffffcc');
      cx.strokeStyle = g; cx.lineWidth = 6; cx.beginPath(); cx.moveTo(-160, 0); cx.lineTo(-40, 0); cx.stroke();
      cx.shadowColor = '#c3b4ff'; cx.shadowBlur = 14; cx.strokeStyle = '#f6f2ff'; cx.lineWidth = 3;
      cx.beginPath(); cx.moveTo(-60, 0); cx.lineTo(0, 0); cx.stroke();
      cx.fillStyle = '#fff6d8'; cx.beginPath(); cx.moveTo(10, 0); cx.lineTo(-6, -7); cx.lineTo(-6, 7); cx.fill();
      cx.fillStyle = '#c3b4ff'; cx.beginPath(); cx.moveTo(-60, 0); cx.lineTo(-70, -8); cx.lineTo(-52, 0); cx.lineTo(-70, 8); cx.fill();
      cx.restore();
    }
    parts = parts.filter(p => p.life-- > 0 && p.y < H + 40 && p.y > -300);
    for (const p of parts) {
      p.vy += p.g; p.vx *= p.drag; p.y += p.vy; p.a += p.spin;
      p.x += p.vx + (p.kind === 'confetti' || p.kind === 'petal' ? Math.sin(p.a) * .8 : 0);
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c;
      if (p.kind === 'coin') { cx.fillStyle = '#ffd23f'; cx.strokeStyle = '#a86a00'; cx.lineWidth = 1.5; cx.beginPath(); cx.ellipse(0, 0, p.r * 1.4, p.r * 1.4 * Math.abs(Math.cos(p.a)) + .5, 0, 0, 7); cx.fill(); cx.stroke(); }
      else if (p.kind === 'petal') { cx.beginPath(); cx.ellipse(0, 0, p.r * 1.3, p.r * .6, 0, 0, 7); cx.fill(); }
      else if (p.kind === 'heart') { cx.shadowColor = p.c; cx.shadowBlur = 10; heart(p.r * 1.2); }
      else if (p.kind === 'confetti') { cx.fillRect(-p.r, -p.r * .35, p.r * 2, p.r * .7 * Math.abs(Math.cos(p.a * 2)) + 1); }
      else if (p.kind === 'grape') { cx.fillStyle = '#7a1fd0'; cx.beginPath(); cx.arc(0, 0, p.r, 0, 7); cx.fill(); cx.fillStyle = '#e9c2ff'; cx.beginPath(); cx.arc(-p.r * .35, -p.r * .35, p.r * .3, 0, 7); cx.fill(); }
      else if (p.kind === 'star') { cx.shadowColor = p.c; cx.shadowBlur = 14; star(p.r); }
      else if (p.kind === 'bubble') { cx.strokeStyle = '#d8ffff'; cx.globalAlpha = .8; cx.lineWidth = 2; cx.beginPath(); cx.arc(0, 0, p.r, 0, 7); cx.stroke(); }
      else { cx.shadowColor = p.c; cx.shadowBlur = 12; cx.beginPath(); cx.arc(0, 0, p.r * .55, 0, 7); cx.fill(); }
      cx.restore();
    }
    if (parts.length || bolts.length || arrows.length) requestAnimationFrame(loop); else { on = false; cx.clearRect(0, 0, W, H); }
  }
  const start = () => { if (!on) { on = true; requestAnimationFrame(loop); } };
  return {
    // from: 'center' bursts up and out, 'top' rains down, 'bottom' rises (bubbles)
    burst(n, kinds, colors, from) {
      for (let i = 0; i < n; i++) {
        const r = Math.random, p = { kind: kinds[i % kinds.length], c: colors[i % colors.length], r: 4 + r() * 7, a: r() * 6, spin: (r() - .5) * .3, life: 360, drag: 1 };
        if (from === 'top') Object.assign(p, { x: r() * W, y: -20 - r() * 260, vx: (r() - .5) * 3, vy: 1 + r() * 2, g: .07 });
        else if (from === 'bottom') Object.assign(p, { x: r() * W, y: H + 10 + r() * 120, vx: (r() - .5), vy: -1.5 - r() * 3, g: -.015 });
        else Object.assign(p, { x: W / 2 + (r() - .5) * 360, y: H * .47, vx: (r() - .5) * 16, vy: -5 - r() * 10, g: .18, drag: .99 });
        parts.push(p);
      }
      start();
    },
    lightning(count) {
      for (let i = 0; i < count; i++) bolts.push({ x: Math.random() * W, tx: W * (.15 + Math.random() * .7), ty: H * (.45 + Math.random() * .45), life: 16 + i * 5, pts: [] });
      start();
    },
    arrows(count) {
      for (let i = 0; i < count; i++) arrows.push({ x: -100 - i * 140 - Math.random() * 80, y: 60 + Math.random() * (H - 140), vx: 22 + Math.random() * 10, vy: (Math.random() - .5) * 2, life: 200 });
      start();
    }
  };
}

// Synth sounds, no sound files needed. Silently does nothing if the viewer blocks audio.
const Sound = (() => {
  let ac, out;
  const ctx = () => {
    if (!ac) {
      try {
        ac = new (window.AudioContext || window.webkitAudioContext)();
        out = ac.createDynamicsCompressor();
        out.connect(ac.destination);
      } catch (e) { return null; }
    }
    if (ac.state === 'suspended') ac.resume().catch(() => {});
    return ac;
  };
  function tone(f, d, o = {}) {
    const a = ctx(); if (!a) return;
    const t = a.currentTime + (o.when || 0), osc = a.createOscillator(), g = a.createGain();
    osc.type = o.type || 'sine'; osc.frequency.setValueAtTime(f, t);
    if (o.slide) osc.frequency.exponentialRampToValueAtTime(f * o.slide, t + d);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(o.v || .15, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    osc.connect(g).connect(out); osc.start(t); osc.stop(t + d + .05);
  }
  function noise(d, o = {}) {
    const a = ctx(); if (!a) return;
    const t = a.currentTime + (o.when || 0), len = Math.floor(a.sampleRate * d), buf = a.createBuffer(1, len, a.sampleRate), data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = a.createBufferSource(), fl = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf; fl.type = o.filter || 'lowpass'; fl.frequency.setValueAtTime(o.f || 800, t);
    if (o.f2) fl.frequency.exponentialRampToValueAtTime(o.f2, t + d);
    fl.Q.value = o.q || 1;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(o.v || .3, t + (o.attack || .02)); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    src.connect(fl).connect(g).connect(out); src.start(t); src.stop(t + d);
  }
  const arp = (notes, step, o) => notes.forEach((f, i) => tone(f, o.d || .5, Object.assign({}, o, { when: (o.when || 0) + i * step })));
  return {
    whoosh() { noise(.6, { v: .25, filter: 'bandpass', f: 400, f2: 2400, q: 1.2, attack: .2 }); },
    tick() { tone(1100 + Math.random() * 400, .03, { type: 'square', v: .03 }); },
    stop() { tone(160, .22, { type: 'triangle', v: .35, slide: .55 }); noise(.08, { v: .15, f: 1500 }); },
    thunder() {
      noise(.3, { v: 1, f: 4000, f2: 400 });
      noise(3.2, { v: .8, f: 700, f2: 50, when: .12, attack: .1 });
      noise(2.2, { v: .6, f: 300, f2: 40, when: 1.1, attack: .15 });
      tone(48, 2.4, { type: 'sawtooth', v: .14, slide: .5 });
    },
    fanfare() {
      arp([392, 523, 659, 784], .13, { type: 'sawtooth', v: .07, d: .3 });
      [523, 659, 784, 1047].forEach(f => tone(f, 1.8, { type: 'triangle', v: .09, when: .6 }));
      arp([1047, 1319, 1568, 2093], .09, { v: .07, d: .8, when: 1.1 });
    },
    wave() {
      noise(3.4, { v: .7, filter: 'bandpass', f: 250, f2: 1600, q: .7, attack: 1 });
      noise(2.6, { v: .45, filter: 'lowpass', f: 1200, f2: 150, when: 1.4, attack: .3 });
    },
    harp(notes, when) { arp(notes, .07, { type: 'triangle', v: .13, d: 1.4, when: when || 0 }); },
    party() {
      [0, .2, .4, .6, .7].forEach(w => { tone(120, .18, { v: .5, slide: .45, when: w }); noise(.05, { v: .25, filter: 'highpass', f: 6000, when: w + .1 }); });
      arp([392, 494, 587, 784, 988], .1, { type: 'square', v: .06, d: .25, when: .15 });
      [784, 988, 1175].forEach(f => tone(f, .8, { type: 'sawtooth', v: .04, when: .7 }));
    },
    chime(notes) { arp(notes, .16, { v: .2, d: 1.8 }); arp(notes.map(n => n * 2), .16, { v: .05, d: 1.3 }); },
    shimmer(when) { for (let i = 0; i < 20; i++) tone(1500 + Math.random() * 1600, .45, { v: .05, when: (when || 0) + i * .05 }); },
    twang(n) { for (let i = 0; i < n; i++) { tone(200, .3, { type: 'sawtooth', v: .07, slide: 2.6, when: i * .22 }); noise(.25, { v: .2, filter: 'bandpass', f: 1800, f2: 7000, when: i * .22 }); } },
    sparkle() { arp([1047, 1319, 1568, 2093], .07, { v: .14, d: .7 }); }
  };
})();

// Every outcome gets a show. sub: line under the god's name (default: the god's epithet). sound: play sounds.
const EPITHETS = { JACKPOT: 'JACKPOT', POSEIDON: 'Lord of the seas', APHRODITE: 'Goddess of love', DIONYSUS: 'Let the wine flow',
                   ATHENA: 'Wisdom smiles on you', ARTEMIS: 'Blessed by moonlight' };
function celebrate(stage, fx, outcome, godtext, tide, sub, sound) {
  const S = sound ? Sound : null;
  const later = (ms, f) => setTimeout(f, ms);
  const replay = (el, cls, ms) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); later(ms, () => el.classList.remove(cls)); };
  const show = (cls, big, ms) => {
    godtext.className = 'godtext show ' + cls;
    godtext.innerHTML = `<div class="big">${esc(big)}</div><div class="sub">${esc(sub || EPITHETS[outcome] || '')}</div>`;
    later(ms, () => godtext.classList.remove('show'));
  };
  const wash = (color, ms) => { const w = stage.querySelector('.wash'); w.style.setProperty('--wash', color); replay(w, 'go', ms); };

  switch (outcome) {
    case 'JACKPOT':
      replay(stage, 'flash', 1600); replay(stage, 'quake', 1400);
      [0, 400, 900, 1500, 2200, 3000].forEach((w, i) => later(w, () => fx.lightning(i < 3 ? 5 : 3)));
      if (S) { S.thunder(); later(1800, () => S.thunder()); later(900, () => S.fanfare()); }
      show('zeus', 'ZEUS', 5000);
      later(600, () => fx.burst(320, ['coin', 'spark', 'coin', 'star'], ['#ffe27a', '#fff6c2', '#9fdcff', '#ffffff'], 'top'));
      later(1800, () => fx.burst(160, ['coin', 'star'], ['#ffe27a', '#ffffff'], 'center'));
      break;
    case 'POSEIDON':
      replay(tide, 'show', 4300); replay(stage, 'sway', 3700);
      fx.burst(180, ['bubble'], ['#d8ffff'], 'bottom');
      later(1300, () => fx.burst(120, ['bubble', 'spark'], ['#d8ffff', '#3ff3ff'], 'bottom'));
      if (S) { S.wave(); S.harp([196, 247, 294, 392, 494, 587, 784, 988], .8); }
      show('poseidon', 'POSEIDON', 4200);
      break;
    case 'APHRODITE':
      wash('#ff4fd8', 2800);
      fx.burst(240, ['petal', 'heart', 'petal'], ['#ff7ad1', '#ff2f6e', '#ffd1ec', '#ffffff'], 'top');
      fx.burst(90, ['heart', 'spark'], ['#ff4fd8', '#ffffff', '#ff2f6e'], 'center');
      if (S) { S.harp([523, 659, 784, 1047, 1319, 1568, 2093]); later(900, () => S.harp([784, 1047, 1319, 1568])); }
      show('aphrodite', 'APHRODITE', 3800);
      break;
    case 'DIONYSUS':
      replay(stage, 'bounce', 1200); wash('#b14dff', 2000);
      fx.burst(200, ['confetti', 'grape', 'confetti'], ['#c77dff', '#5be3a0', '#ff4fd8', '#ffe27a', '#3ff3ff'], 'center');
      later(500, () => fx.burst(160, ['confetti', 'grape'], ['#c77dff', '#5be3a0', '#ffe27a'], 'top'));
      if (S) S.party();
      show('dionysus', 'DIONYSUS', 3800);
      break;
    case 'ATHENA':
      replay(stage.querySelector('.sweep'), 'go', 2800); wash('#c9d4ff', 1800);
      fx.burst(170, ['star', 'spark'], ['#ffffff', '#c9d4ff', '#9fdcff', '#ffe27a'], 'center');
      later(700, () => fx.burst(100, ['star'], ['#ffffff', '#c9d4ff'], 'top'));
      if (S) S.chime([659, 784, 988, 1319, 1568]);
      show('athena', 'ATHENA', 3800);
      break;
    case 'ARTEMIS': {
      const moon = stage.querySelector('.moon');
      if (moon) replay(moon, 'full', 3300);
      fx.arrows(7); later(900, () => fx.arrows(5));
      fx.burst(140, ['star', 'spark'], ['#fff6d8', '#c3b4ff', '#ffffff'], 'top');
      if (S) { S.twang(4); S.shimmer(.8); }
      show('artemis', 'ARTEMIS', 3800);
      break;
    }
    case 'PAIR':
      fx.burst(110, ['star', 'spark'], ['#ffe27a', '#ffffff', '#ff4fd8', '#3ff3ff'], 'center');
      wash('#ffe27a', 1400);
      if (S) S.sparkle();
      break;
  }
}
