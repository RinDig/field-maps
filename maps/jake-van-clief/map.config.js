/* ══════════════════════════════════════════════════════════════════════════
   map.config.js — Jake Van Clief's field map. THIS is the file you edit.
   ══════════════════════════════════════════════════════════════════════════

   The engine (../../../_engine/index.html) draws the paper wall, the travelling
   fox, the smooth scroll, the seamless loop. It is never edited. Everything
   that makes this map *Jake's* — his name, his eras, his notes, his aphorisms,
   which artwork sits where — lives here as plain data.

   Schema:          ../../../_shared/config-schema.md
   Editing prose:   ../02_extract/chapters.md is the readable version of this
                    file. Change the words there first, then bring them here.
   Build:           node scripts/build.mjs jake-van-clief

   ── the layout grid this map uses ──
   Each chapter sits at wpX = W and lays out on a fixed grid, so the whole map
   reads at one rhythm. Keep to it when adding a chapter:
     main note   x = W + 3.0    y = 6.3   h = 2.75
     aphorism    x = W + 11.5   y = 7.0   h = 1.0
     evidence    x = W + 11.5   y = 4.85  h ≈ 1.7–2.1
     backdrop    x = W + 7      y = 2.6   (wallPin, sits behind everything)
   Threads dip through the open band at y ≈ 2.4–4.0, in front of the painted
   backdrops (z .055) but behind the cards (z .07).

   ── the two coordinate rules ──
   • x runs WEST→EAST. Bigger x = further into the journey.
   • y is HEIGHT on the wall. y≈2–3 is low near the route; y≈7 is up top.
   Placement is OPTIONAL — a new map should omit it entirely and let the engine
   lay out. The numbers here are hand-tuned because this map is hand-tuned.
   ══════════════════════════════════════════════════════════════════════════ */

export const MAP = {
  /* ── who this map is for ── */
  title: 'The Field Map of Jake Van Clief',
  badge: 'J. Van Clief',
  odometerKm: 5600,
  span: 112,        // pinned: this map's wpX values are hand-tuned.
                    // Omit `span` on new maps — the engine derives it.

  /* ── the opening panel ── */
  opening: {
    headline: ['The Field Map of', 'Jake Van Clief'],
    tagline:  'a life, charted',
    arc:      'Marine cryptographer  →  AI-governance researcher  →  solo operator',
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

  /* ── THE THREADS — the through-lines of the work ──
     Twine strung between two chapters' cards, routed down off one card and up
     into the other. These are what make the map a web instead of a timeline:
     they say "this became that" across decades. `from`/`to` are chapter ids
     (or an `anchor:` on an extra card). `dip` is the band the span hangs in —
     stagger them so three threads don't stack.                              */
  threads: [
    { from: 'corps', to: 'icm',
      label: 'signals → systems',
      ink: '#7d6a45', dip: 3.95, sag: .5 },

    { from: 'edinburgh', to: 'practice',
      label: 'governance → practice',
      ink: '#4c6378', dip: 3.15, sag: .45 },

    { from: 'institute', to: 'notes',
      label: 'measure it → teach it',
      ink: '#96543f', dip: 2.35, sag: .4 },
  ],

  /* ── THE CHAPTERS — waypoints, west to east ── */
  chapters: [
    {
      id: 'corps',
      wp: 'WP·00',  wpX: 15.2,
      ride: 'tank',
      note: {
        title: '00 · the corps',
        lines: ['Cryptography, and the avionics of', 'fifth-generation flight lines.',
                'Signals before software — building', 'things that cannot afford to fail.'],
        x: 18.2, y: 6.3, h: 2.75, tilt: -.03,
      },
      aphorism: { lines: ['“Build at the layer that survives.”'], ink: '#66713f',
                  x: 26.7, y: 7.0, h: .85, tilt: .025, font: '600 62px "Caveat"' },
      extraNotes: [
        { title: 'the flight line',
          big: '8', bigInk: '#66713f',
          lines: ['years, USMC. F-35 and F-18', 'avionics; crypto that had to', 'hold with lives on it.'],
          pin: '#66713f', x: 26.7, y: 4.7, h: 2.3, tilt: .02 },
      ],
      art: [ { file: 'terrain-t1.png', x: 22.5, y: 2.7, h: 6.4, wallPin: true, sway: 0 } ],
    },

    {
      id: 'edinburgh',
      wp: 'WP·01',  wpX: 31.2,
      ride: 'plane',
      note: {
        title: '01 · edinburgh — the turn',
        lines: ['He flies to the birthplace of AI.', 'The turn from running systems',
                'to governing them.'],
        x: 34.2, y: 6.3, h: 2.55, tilt: .03,
      },
      aphorism: { lines: ['“In a world full of answers,', ' questions become valuable.”'], ink: '#4c6378',
                  x: 42.7, y: 7.05, h: 1.35, tilt: -.02, font: '600 56px "Caveat"' },
      extraNotes: [
        { title: 'the qualification',
          lines: ['M.Sc. Artificial Intelligence', 'and Governance — the University', 'of Edinburgh.'],
          pin: '#4c6378', x: 42.7, y: 4.7, h: 1.9, tilt: .025 },
      ],
      art: [ { file: 'prop-edinburgh-skyline.png', x: 39, y: 2.5, h: 5.6, wallPin: true, sway: 0 } ],
    },

    {
      id: 'institute',
      wp: 'WP·02',  wpX: 47.2,
      note: {
        title: '02 · the institute — Edinburgh Futures',
        lines: ['Human psychometric tests, run on', 'the machines — personality and',
                'moral reasoning, measured the way', 'you would measure a person.'],
        x: 50.2, y: 6.3, h: 2.75, tilt: -.025,
      },
      aphorism: { lines: ['“You can’t write a reward function', ' for your opinion.”'], ink: '#694f66',
                  x: 58.7, y: 7.05, h: 1.35, tilt: .02, font: '600 56px "Caveat"' },
      extraNotes: [
        { title: 'the research',
          big: '7', bigInk: '#694f66',
          lines: ['model providers tested head to', 'head. Under peer review at', 'ACM TiiS.'],
          pin: '#694f66', x: 58.7, y: 4.7, h: 2.3, tilt: -.02 },
      ],
      props: [
        { file: 'prop-inkpot.png',    x: 49.0, h: 1.2, zBack: 1.3, sway: .01 },
        { file: 'prop-magnifier.png', x: 63.4, h: 1.1, zBack: 1.2, sway: .012 },
      ],
    },

    {
      id: 'practice',
      wp: 'WP·03',  wpX: 63.2,
      ride: 'moto',
      note: {
        title: '03 · the practice — going solo',
        lines: ['Three people producing at the', 'scale of fifty, advising at up to',
                '$2,000 an hour. The system', 'does the scaling.'],
        x: 66.2, y: 6.3, h: 2.75, tilt: .03,
      },
      aphorism: { lines: ['“Stop selling agents.', ' Sell a company.”'], ink: '#96543f',
                  x: 74.7, y: 7.05, h: 1.4, tilt: -.025, font: '600 60px "Caveat"' },
      extraNotes: [
        { title: 'the client work',
          big: '14', bigInk: '#96543f',
          lines: ['films delivered to NLP Logix —', 'services, case studies, shorts.', 'Built, not outsourced.'],
          pin: '#96543f', x: 74.7, y: 4.7, h: 2.3, tilt: .02 },
      ],
      props: [ { file: 'prop-tea.png', x: 70.2, h: .85, zBack: 1.3, sway: .01 } ],
    },

    {
      id: 'icm',
      wp: 'WP·04',  wpX: 79.2,
      note: {
        title: '04 · ICM — the method',
        lines: ['Folder structure as agent', 'architecture. Numbered folders are',
                'stages; markdown carries the', 'context. No framework required.'],
        x: 82.2, y: 6.3, h: 2.75, tilt: -.02,
      },
      aphorism: { lines: ['“The folder IS the agent.”'], ink: '#a9792f',
                  x: 90.7, y: 7.05, h: .85, tilt: .02, font: '600 64px "Caveat"' },
      extraNotes: [
        { title: 'the paper',
          lines: ['arXiv:2603.16021', 'Van Clief & McDermott', 'github.com/RinDig  ·  MIT'],
          pin: '#a9792f', x: 90.7, y: 4.7, h: 1.9, tilt: .035 },
      ],
      art: [
        { file: 'prop-folder-mountains.png', x: 86.4, h: 4.2, zBack: 1.5, sway: .006 },
        { file: 'concept-a-chart.png', x: 95.6, y: 2.55, h: 3.0, wallPin: true, framed: true, sway: .006 },
      ],
    },

    {
      id: 'notes',
      wp: 'WP·05',  wpX: 95.4,
      finale: true,
      note: {
        title: '05 · clief notes — the teaching layer',
        lines: ['The method taught in public — the', 'folder system, the pipelines, the',
                'way of working. Given away, and', 'the community carries it.'],
        x: 98.4, y: 6.3, h: 2.75, tilt: -.03,
      },
      aphorism: { lines: ['“Map your work,', ' don’t just store it.”'], ink: '#cf7a35',
                  x: 106.9, y: 7.05, h: 1.45, tilt: .02, font: '600 62px "Caveat"' },
      extraNotes: [
        { title: 'the traction',
          big: '48,000', bigInk: '#cf7a35',
          lines: ['from ~200 in four months, zero', 'ad spend. ~1,600 trained;', '~41,500 mapping their work.'],
          pin: '#cf7a35', x: 106.9, y: 4.7, h: 2.3, tilt: -.02 },
      ],
      art: [ { file: 'prop-lighthouse-village.png', x: 102.5, y: 2.45, h: 5.4, wallPin: true, sway: 0 } ],
      extraWriting: [
        { lines: ['the map is never finished —', 'and neither is the work. keep scrolling →'], ink: '#8a765a',
          x: 108.6, y: 1.95, h: 1.15, tilt: -.015, font: '500 52px "Caveat"' },
      ],
    },
  ],
};
