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
const W = { corps: 15.2, road: 39.2, practice: 57.2, edinburgh: 73.2,
            institute: 89.2, icm: 105.2, notes: 121.2, lyceum: 137.2 };

export const MAP = {
  /* ── who this map is for ── */
  title: 'The Field Map of Jake Van Clief',
  badge: 'J. Van Clief',
  odometerKm: 7700,
  // span is derived from the last stop (W.lyceum + 16.8 = 154).

  /* ── the opening panel ── */
  opening: {
    headline: ['The Field Map of', 'Jake Van Clief'],
    tagline:  'a life, charted',
    arc:      'Marine  →  war journalist  →  AI researcher  →  teaches teams to build',
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
    { from: 'corps', to: 'icm',
      label: 'signals → systems',
      ink: '#7d6a45', dip: 3.95, sag: .5 },

    { from: 'road', to: 'notes',
      label: 'the writer → the teacher',
      ink: '#4c6378', dip: 3.2, sag: .45 },

    { from: 'institute', to: 'lyceum',
      label: 'measure it → install it',
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
        headline: ['Systems that', 'cannot fail.'],
        sub: ['F-18 and F-35 avionics and crypto,', 'on the border of North Korea.'],
        why: 'I still build to that standard',
        stamp: { big: '8 years', small: ['U.S. Marine Corps'], x: W.corps + 19.6 },
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
      id: 'road',
      wp: 'WP·01',  wpX: W.road,
      ride: 'moto',
      story: {
        kicker: '01 · the road', place: 'Middle East', x: W.road + 3, tilt: .015,
        headline: ['Reporting from', 'conflict zones.'],
        sub: ['I worked the region as a journalist,', 'then wrote at vcwriting.com.'],
        why: 'I learned to explain hard things',
        stamp: { big: 'Press', small: ['war journalist', 'Middle East'], x: W.road + 14, ink: '#24345a' },
      },
      aphorism: { lines: ['“AI changes the starting line', ' without redrawing the finish line.”'], x: W.road + 14, tilt: -.015 },
      captions: [ { text: 'fig. 3 — me in the Middle East', x: W.road + 8.6, y: 1.75, tilt: .02 } ],
      art: [
        { file: 'photo-middle-east.png', x: W.road + 8.6, y: 4.75, h: 5.6, wallPin: true, zPin: .06, sway: .004 },
      ],
      props: [ { file: 'prop-inkpot.png', x: W.road + 5.0, h: 1.1, zBack: 1.3, sway: .01 } ],
    },

    {
      id: 'practice',
      wp: 'WP·02',  wpX: W.practice,
      ride: 'moto',
      story: {
        kicker: '02 · the practice', place: 'Flagler, 2024', x: W.practice + 3, tilt: -.015,
        headline: ['Paid to teach', 'my own teachers.'],
        sub: ['Flagler College hired me first.', 'Then the companies called.'],
        why: 'the gap was in understanding',
        stamp: { big: '14 films', small: ['delivered to NLP Logix'], x: W.practice + 11.5 },
      },
      aphorism: { lines: ['“Stop selling agents.', ' Sell a company.”'], x: W.practice + 11.5, tilt: -.015 },
      props: [ { file: 'prop-tea.png', x: W.practice + 7, h: .85, zBack: 1.3, sway: .01 } ],
    },

    {
      id: 'edinburgh',
      wp: 'WP·03',  wpX: W.edinburgh,
      ride: 'plane',
      story: {
        kicker: '03 · the turn', place: 'Edinburgh', x: W.edinburgh + 3, tilt: -.012,
        headline: ['From running it', 'to governing it.'],
        sub: ['My M.Sc. in Future Governance: data', 'science and political philosophy.'],
        why: 'I chose the more peaceful route',
        // raised so the plane passes under it
        stamp: { big: 'M.Sc.', small: ['University of Edinburgh'], x: W.edinburgh + 11.5, y: 5.1 },
      },
      aphorism: { lines: ['“In a world full of answers,', ' questions become valuable.”'], x: W.edinburgh + 11.5, tilt: -.015 },
      art: [ { file: 'prop-edinburgh-skyline.png', x: W.edinburgh + 7.8, y: 2.5, h: 5.6, wallPin: true, sway: 0 } ],
    },

    {
      id: 'institute',
      wp: 'WP·04',  wpX: W.institute,
      story: {
        kicker: '04 · the research', place: '2025', x: W.institute + 3, tilt: .015,
        headline: ['Measuring machines', 'like people.'],
        sub: ['With language models since BERT;', 'Edinburgh researchers use my engine.'],
        why: 'test it before you trust it',
        stamp: { big: '10,000+', small: ['AI responses scored', 'The Ethics Engine'], x: W.institute + 11.5 },
      },
      aphorism: { lines: ['“You can’t write a reward function', ' for your opinion.”'], x: W.institute + 11.5, tilt: .015 },
      props: [ { file: 'prop-magnifier.png', x: W.institute + 7.4, h: 1.1, zBack: 1.2, sway: .012 } ],
    },

    {
      id: 'icm',
      wp: 'WP·05',  wpX: W.icm,
      story: {
        kicker: '05 · the method', place: 'Mar 2026', x: W.icm + 3, tilt: .012,
        headline: ['Folders that', 'run the work.'],
        sub: ['Numbered folders are stages, and', 'markdown carries the context.'],
        why: 'anyone can run it, no framework',
        stamp: { big: '1,949', small: ['GitHub stars', 'ICM Architect'], x: W.icm + 11.5 },
      },
      aphorism: { lines: ['“The folder IS the agent.”'], x: W.icm + 11.5, tilt: .015 },
      art: [ { file: 'prop-folder-mountains.png', x: W.icm + 7.2, h: 4.2, zBack: 1.5, sway: .006 } ],
    },

    {
      id: 'notes',
      wp: 'WP·06',  wpX: W.notes,
      story: {
        kicker: '06 · in public', place: 'Mar 2026 →', x: W.notes + 3, tilt: -.015,
        headline: ['Teaching it', 'in public.'],
        sub: ['Millions of views on Instagram;', 'a Skool community rated 5.0.'],
        why: 'that is how my method spread',
        stamp: { big: '50K', small: ['students in Skool', 'since March 2026'], x: W.notes + 11.5 },
      },
      aphorism: { lines: ['“Map your work,', ' don’t just store it.”'], x: W.notes + 11.5, tilt: .015 },
      art: [ { file: 'prop-lighthouse-village.png', x: W.notes + 7.1, y: 2.45, h: 5.4, wallPin: true, sway: 0 } ],
    },

    {
      id: 'lyceum',
      wp: 'WP·07',  wpX: W.lyceum,
      finale: true,
      story: {
        kicker: '07 · the lyceum', place: '2026', x: W.lyceum + 3, tilt: .015,
        headline: ['Teams that build', 'their own systems.'],
        sub: ['Companies send their people to learn', 'my method and map their own work.'],
        why: 'now it runs inside companies',
        stamp: { big: '$120K', small: ['one 3-week contract', 'Dubai'], x: W.lyceum + 11.5 },
      },
      aphorism: { lines: ['“We didn’t fire anyone', ' to do it.”'], x: W.lyceum + 11.5, tilt: -.015 },
      props: [
        { file: 'prop-compass.png', x: W.lyceum + 6.4, h: 1.1, zBack: 1.4, sway: .01 },
        { file: 'prop-twine.png',   x: W.lyceum + 15,  h: .8,  zBack: 1.2, sway: .012 },
      ],
      strips: [
        { lines: ['The map is never finished,', 'and neither is the work.', 'Keep scrolling →'], x: W.lyceum + 12.6, y: 2.2, tilt: -.015 },
      ],
    },
  ],
};
