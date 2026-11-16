/* ══════════════════════════════════════════════════════════════════════════
   map.config.js — Jake Van Clief's field map. THIS is the file you edit.
   ══════════════════════════════════════════════════════════════════════════

   The engine (index.html beside this file) draws the paper wall, the travelling
   fox, the smooth scroll, the seamless loop. Everything that makes this map
   *Jake's* — his stops, his words, his photos, which artwork sits where —
   lives here as plain data.

   Each stop is a page from a field journal, written to be read from across a
   room while he presents:
     story.kicker / place   typed heading            "00 · THE CORPS — JAPAN"
     story.headline         one statement in pen     two short lines, ≤ 16 characters each
     story.sub              two supporting lines     ≤ 36 characters each
     story.why              why it mattered          highlighted, ≤ 32 characters
     story.stamp            the proof, rubber-stamped   { big, small: [one or two lines] }
     aphorism               his line, on a typed strip
     captions               typed slips under the photos
     strips                 any other typed note (the closing line)

   ── the storyline (rewritten 2026-11-16 for an executive room) ──
   Six stops. Each one answers a question a leader has, and every technical
   fact is tied to strategy, cost or governance:
     00 the corps      he saw automation and AI in military systems a decade ago
     01 the field      from systems to people: data and political science, in the field
     02 two tracks     studying it while installing it for firms and professors
     03 the research   ethics and data papers, audits with labs: test before you trust
     04 the method     folders that run the work: $10K a month down to under $400
     05 in companies   300+ trained in person, KPMG and Pacific Life
   The life-story version is kept beside this file as map.config.before-2026-11-16.js.

   ── the two coordinate rules ──
   • x runs WEST→EAST. Bigger x = further into the journey.
   • y is HEIGHT on the wall. y≈2–3 is low near the route; y≈7 is up top.
   ══════════════════════════════════════════════════════════════════════════ */

/* Where each stop starts (wpX). Photo stops are wider so the prints have room.
   Every x below is written as W.<stop> + offset, so a stop can move or grow
   without re-tuning the rest. Inside a 16-wide stop:
     journal page  +3     y 5.9
     typed strip   +11.5  y 7.05
     stamp         +11.5  y 4.7
     backdrop      +7     y 2.6  (wallPin)        photos: wallPin, zPin .06      */
const W = { corps: 15.2, field: 39.2, tracks: 57.2, research: 73.2, method: 89.2, companies: 105.2 };

export const MAP = {
  /* ── who this map is for ── */
  title: 'The Field Map of Jake Van Clief',
  badge: 'J. Van Clief',
  odometerKm: 7700,
  // span is derived from the last stop (W.companies + 16.8).

  /* ── the opening panel ── */
  opening: {
    headline: ['The Field Map of', 'Jake Van Clief'],
    tagline:  'a life, charted',
    arc:      'Marine  →  researcher  →  teaches teams to build',
    hero:     { image: 'fox-hero.png', caption: 'fig. 0 — the cartographer' },
    place: {
      headline: { x: 5.2, y: 5.0, h: 2.6, tilt: -.02, font: '700 96px "Caveat"', ink: '#3b2f21' },
      tagline:  { x: 5.2, y: 6.6, h: .8,  z: .06,     font: '500 58px "Caveat"', ink: '#8a765a' },
      arc:      { x: 5.4, y: 3.4, h: .72, z: .06, tilt: .015, w: 1400, font: '500 52px "Caveat"', ink: '#6d5c43' },
      hero:     { x: 11.3, y: 4.7, h: 3.1, sway: .008 },
      caption:  { x: 11.3, y: 2.85, h: .5, z: .05, font: '500 44px "Caveat"', ink: '#8a765a' },
    },
    props: [
      { file: 'prop-compass.png', x: 3.4,  h: 1.2, zBack: 1.6, sway: .01 },
      { file: 'prop-twine.png',   x: 13.6, h: .85, zBack: 1.2, sway: .012 },
    ],
  },

  /* ── the mascot ── */
  mascot: {
    scale: 1.15,
    sit:   { file: 'fox.png',        h: 1.3,  yOff: 0, perch: [-.19, 0] },
    walkA: { file: 'fox-walk-a.png', h: 0.72 },
    walkB: { file: 'fox-walk-b.png', h: 0.72 },
  },

  /* ── the vehicles ── */
  vehicles: {
    tank:  { file: 'tank.png',  h: 2.0,  yOff: -.53, perch: [.68,  -.12] },
    plane: { file: 'plane.png', h: 2.35, yOff: .1,   perch: [1.12,  .08], flies: true },
    moto:  { file: 'moto.png',  h: 1.65, yOff: -.52, perch: [.22,  -.04] },
  },

  /* ── THE THREADS — what each early stop turned into later ──
     Twine from one stop's main card to another's. They hang behind the
     paintings and the cards; `dip` staggers them so they never stack.      */
  threads: [
    { from: 'corps', to: 'method',
      label: 'signals → systems',
      ink: '#7d6a45', dip: 3.95, sag: .5 },

    { from: 'field', to: 'research',
      label: 'the field → the audit',
      ink: '#4c6378', dip: 3.2, sag: .45 },

    { from: 'tracks', to: 'companies',
      label: 'studying it → installing it',
      ink: '#96543f', dip: 2.45, sag: .4 },
  ],

  /* ── THE STOPS — west to east, in the order they happened ── */
  chapters: [
    {
      id: 'corps',
      wp: 'WP·00',  wpX: W.corps,
      ride: 'tank',
      story: {
        kicker: '00 · the corps', place: 'Japan', x: W.corps + 3, tilt: -.015,
        headline: ['AI in the field,', 'a decade ago.'],
        sub: ['Cryptography and avionics on the', 'F-18 and F-35: math that must hold.'],
        why: 'I saw automation run early',
        stamp: { big: '8 years', small: ['U.S. Marine Corps', 'crypto + avionics'], x: W.corps + 19.6 },
      },
      aphorism: { lines: ['“Build at the layer that survives.”'], x: W.corps + 19.6, tilt: .015 },
      captions: [
        { text: 'fig. 1 — me, USMC', x: W.corps + 7.7, y: 2.85, tilt: -.02 },
        { text: 'fig. 2 — the F-35B I worked on', x: W.corps + 12.7, y: 4.45, tilt: .015 },
      ],
      art: [
        { file: 'terrain-t1.png', x: W.corps + 12.6, y: 2.7, h: 6.4, wallPin: true, sway: 0 },
        { file: 'photo-marine.png', x: W.corps + 7.7, y: 5.25, h: 4.4, wallPin: true, zPin: .06, sway: .004 },
        { file: 'photo-f35.png',    x: W.corps + 12.7, y: 6.25, h: 3.0, wallPin: true, zPin: .061, sway: .004 },
      ],
    },

    {
      id: 'field',
      wp: 'WP·01',  wpX: W.field,
      ride: 'moto',
      story: {
        kicker: '01 · the field', place: 'Middle East', x: W.field + 3, tilt: .015,
        headline: ['From systems', 'to people.'],
        sub: ['Data science and political science,', 'tested in the field as a journalist.'],
        why: 'models must meet real decisions',
        stamp: { big: 'Press', small: ['field work', 'Middle East'], x: W.field + 14, ink: '#24345a' },
      },
      aphorism: { lines: ['“AI changes the starting line', ' without redrawing the finish line.”'], x: W.field + 14, tilt: -.015 },
      captions: [ { text: 'fig. 3 — me in the Middle East', x: W.field + 8.6, y: 1.75, tilt: .02 } ],
      art: [
        { file: 'photo-middle-east.png', x: W.field + 8.6, y: 4.75, h: 5.6, wallPin: true, zPin: .06, sway: .004 },
      ],
      props: [ { file: 'prop-inkpot.png', x: W.field + 5.0, h: 1.1, zBack: 1.3, sway: .01 } ],
    },

    {
      id: 'tracks',
      wp: 'WP·02',  wpX: W.tracks,
      ride: 'plane',
      story: {
        kicker: '02 · two tracks', place: 'Edinburgh', x: W.tracks + 3, tilt: -.012,
        headline: ['Studying it and', 'installing it.'],
        sub: ['Through my degrees I taught firms', 'and professors to adopt software.'],
        why: 'I learned where the return is',
        // raised so the plane passes under it
        stamp: { big: 'M.Sc.', small: ['Future Governance', 'Univ. of Edinburgh'], x: W.tracks + 11.5, y: 5.1 },
      },
      aphorism: { lines: ['“In a world full of answers,', ' questions become valuable.”'], x: W.tracks + 11.5, tilt: -.015 },
      art: [ { file: 'prop-edinburgh-skyline.png', x: W.tracks + 7.8, y: 2.5, h: 5.6, wallPin: true, sway: 0 } ],
    },

    {
      id: 'research',
      wp: 'WP·03',  wpX: W.research,
      story: {
        kicker: '03 · the research', place: '2025', x: W.research + 3, tilt: .015,
        headline: ['Test it before', 'you trust it.'],
        sub: ['Papers on AI ethics and data;', 'audits with labs and live systems.'],
        why: 'governance you can check',
        stamp: { big: '10,000+', small: ['AI responses scored', 'The Ethics Engine'], x: W.research + 11.5 },
      },
      aphorism: { lines: ['“You can’t write a reward function', ' for your opinion.”'], x: W.research + 11.5, tilt: .015 },
      props: [ { file: 'prop-magnifier.png', x: W.research + 7.4, h: 1.1, zBack: 1.2, sway: .012 } ],
    },

    {
      id: 'method',
      wp: 'WP·04',  wpX: W.method,
      story: {
        kicker: '04 · the method', place: '2026', x: W.method + 3, tilt: .012,
        headline: ['Folders that', 'run the work.'],
        sub: ['I saw teams overbuild. My paper', 'shows a simpler, auditable way.'],
        why: 'cheaper, auditable, easy to adopt',
        stamp: { big: '$10K → $400', small: ['a month in AI spend', 'one team of five'], x: W.method + 11.5 },
      },
      aphorism: { lines: ['“The folder IS the agent.”'], x: W.method + 11.5, tilt: .015 },
      art: [ { file: 'prop-folder-mountains.png', x: W.method + 7.2, h: 4.2, zBack: 1.5, sway: .006 } ],
      strips: [
        { lines: ['50,000 people now learn it,', 'mostly CTOs, COOs and executives.'], x: W.method + 12.6, y: 2.2, tilt: -.015 },
      ],
    },

    {
      id: 'companies',
      wp: 'WP·05',  wpX: W.companies,
      finale: true,
      story: {
        kicker: '05 · in companies', place: 'today', x: W.companies + 3, tilt: .015,
        headline: ['Teams that build', 'their own systems.'],
        sub: ['KPMG, Pacific Life and others send', 'their people to learn the method.'],
        why: 'it runs inside companies now',
        stamp: { big: '300+', small: ['trained in person', 'KPMG · Pacific Life'], x: W.companies + 11.5 },
      },
      aphorism: { lines: ['“We didn’t fire anyone', ' to do it.”'], x: W.companies + 11.5, tilt: -.015 },
      art: [ { file: 'prop-lighthouse-village.png', x: W.companies + 7.1, y: 2.45, h: 5.4, wallPin: true, sway: 0 } ],
      props: [
        { file: 'prop-twine.png',   x: W.companies + 15,  h: .8,  zBack: 1.2, sway: .012 },
      ],
      strips: [
        { lines: ['The map is never finished,', 'and neither is the work.', 'Keep scrolling →'], x: W.companies + 12.6, y: 2.2, tilt: -.015 },
      ],
    },
  ],
};
