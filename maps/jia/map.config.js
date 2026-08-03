/* ══════════════════════════════════════════════════════════════════════════
   map.config.js — Jia's field map.
   ══════════════════════════════════════════════════════════════════════════
   Prose version: ../02_extract/chapters.md — change the words THERE first.
   Schema:        ../../../_shared/config-schema.md
   Build:         node scripts/build.mjs jia

   Purpose: an intro Jia opens a meeting with, before the deck. It ends where
   the deck begins. All three threads land on the finale, because his own
   thesis is "ItsHours pulls from every chapter of my life."

   Layout grid (same as the Jake map — chapter at wpX = W):
     main note   x = W + 3.0    y = 6.3   h = 2.75
     aphorism    x = W + 11.5   y = 7.0
     evidence    x = W + 11.5   y = 4.7   h ≈ 1.9–2.1
   Threads dip through y ≈ 2.3–4.1.

   ART: painted for this map (2026-08-03) — the coati mascot + walk cycle + hero,
   the touring bicycle, the NYC skyline, the Costa Rican coast, the dock, the
   studio desk and the macro camera. Raws in ../04_art/_raw, baked in
   ../04_art/baked, and the build overlays baked/ onto the engine's assets.
   Still shipped placeholders: terrain-t1 (US countryside — correct as-is),
   plane, prop-compass, prop-twine.
   ══════════════════════════════════════════════════════════════════════════ */

export const MAP = {
  title: 'The Field Map of Jia',
  badge: 'Jia',
  odometerKm: 3702,          // the ride: Portland to Portland
  odometerUnit: 'mi',        // his number is in miles, not km
  span: 112,

  // Reachable by link, but noindex'd and kept off the public gallery. This is
  // someone else's biography — it stays unlisted until Jia has seen it and said
  // he wants it public. Delete this line when he does.
  unlisted: true,

  opening: {
    headline: ['The Field Map of', 'Jia'],
    tagline:  'a polymath, charted',
    arc:      'Film scoring  →  podcasts, scenes and a bicycle  →  building the thing that fixes it',
    hero:     { image: 'coati-hero.png', caption: 'fig. 0 — the builder' },
    place: {
      headline: { x: 5.2, y: 5.0, h: 2.6, tilt: -.02, font: '700 96px "Caveat"', ink: '#3b2f21' },
      tagline:  { x: 5.2, y: 6.6, h: .8,  z: .06,     font: '500 58px "Caveat"', ink: '#8a765a' },
      arc:      { x: 5.4, y: 3.4, h: .78, z: .06, tilt: .015, w: 1600, font: '500 52px "Caveat"', ink: '#6d5c43' },
      hero:     { x: 11.3, y: 4.7, h: 3.4, sway: .008 },
      caption:  { x: 11.3, y: 2.85, h: .5, z: .05, font: '500 44px "Caveat"', ink: '#8a765a' },
    },
    props: [
      { file: 'prop-compass.png', x: 3.4,  h: 1.2, zBack: 1.6, sway: .01 },
      { file: 'prop-twine.png',   x: 13.6, h: .85, zBack: 1.2, sway: .012 },
    ],
  },

  /* Sizes and perches are MEASURED from the baked sprites' alpha bounds, not
     inherited from the fox. The coati walk frames carry ~38% transparent margin
     that the fox's tightly-cropped ones did not, so the fox's h: 0.72 rendered
     the trot 38% too small. h: 1.16 makes it trot at the same size it sits. */
  mascot: {
    scale: 1.4,
    sit:   { file: 'coati.png',        h: 1.3,  yOff: 0, perch: [-.24, 0] },
    walkA: { file: 'coati-walk-a.png', h: 1.16 },
    walkB: { file: 'coati-walk-b.png', h: 1.16 },
  },

  /* Perch = [y, x]. Measuring the sprite's alpha bottom overshoots, because the
     coati's TAIL hangs below its body — align the tail to a saddle and the animal
     floats above it. So: bicycle is measured-then-dropped to seat the body, and
     the plane keeps the fox's hand-tuned 1.12 with the same −.05 the foot perch
     needed (the coati sits slightly lower in frame than the fox did). */
  vehicles: {
    bicycle: { file: 'bicycle.png', h: 1.65, yOff: -.52, perch: [.30, -.04] },
    plane:   { file: 'plane.png',   h: 2.35, yOff: .1,   perch: [1.07, .08], flies: true },
  },

  /* ── THE THREADS — five careers converging on one ──
     All three land on `itshours`. The convergence IS the argument.            */
  threads: [
    { from: 'berklee', to: 'itshours',
      label: 'the ear → provenance',
      ink: '#7d5f78', dip: 3.95, sag: .5 },

    { from: 'acast', to: 'itshours',
      label: 'inside the machine → paid from view one',
      ink: '#4c6378', dip: 3.15, sag: .45 },

    { from: 'scene', to: 'itshours',
      label: 'everyone’s an influencer → back people early',
      ink: '#96543f', dip: 2.35, sag: .4 },
  ],

  chapters: [
    {
      id: 'berklee',
      wp: 'WP·00',  wpX: 15.2,
      note: {
        title: '00 · berklee',
        lines: ['Film scoring at Berklee, then straight', 'into audio — engineering, producing,',
                'sound design. Learning to hear a', 'thing before learning to build one.'],
        x: 18.2, y: 6.3, h: 2.75, tilt: -.03,
      },
      aphorism: { lines: ['“I come from music.”'], ink: '#694f66',
                  x: 26.7, y: 7.0, h: .85, tilt: .025, font: '600 62px "Caveat"' },
      extraNotes: [
        // no `big:` here — "2" is a weak hero number and only crowds the card
        { title: 'the credits',
          lines: ['Two indie games scored and', 'sound-designed. One shipped', 'on PS4 and Switch.'],
          pin: '#694f66', x: 26.7, y: 4.75, h: 1.85, tilt: .02 },
      ],
      props: [ { file: 'studio-desk.png', x: 22.2, h: 2.2, zBack: 1.35, sway: .01 } ],
    },

    {
      id: 'acast',
      wp: 'WP·01',  wpX: 31.2,
      note: {
        title: '01 · the office — Acast, NYC, 2017',
        lines: ['A freelance engineer in Acast’s early', 'New York office, sharing the room with',
                'people who had brought Spotify to the', 'States. He watched how the money moved.'],
        x: 34.2, y: 6.3, h: 2.75, tilt: .03,
      },
      aphorism: { lines: ['“Thresholds are a lie', ' of convenience.”'], ink: '#4c6378',
                  x: 42.7, y: 7.05, h: 1.3, tilt: -.02, font: '600 58px "Caveat"' },
      extraNotes: [
        { title: 'the lesson',
          lines: ['How content monetisation actually', 'works — learned in 2017, from', 'the inside. It is in Hours’ DNA.'],
          pin: '#4c6378', x: 42.7, y: 4.7, h: 1.95, tilt: .025 },
      ],
      art: [ { file: 'nyc-skyline.png', x: 38.5, y: 2.6, h: 4.3, wallPin: true, sway: 0 } ],
    },

    {
      id: 'ride',
      wp: 'WP·02',  wpX: 47.2,
      ride: 'bicycle',
      note: {
        title: '02 · the long ride — 2017',
        lines: ['Portland to Portland by bicycle.', 'Forty days, about a hundred miles',
                'a day. When he started training', 'for it he weighed 350 pounds.'],
        x: 50.2, y: 6.3, h: 2.75, tilt: -.025,
      },
      aphorism: { lines: ['“I finish what I start, and it’s', ' usually the unreasonable version.”'], ink: '#66713f',
                  x: 58.7, y: 7.05, h: 1.35, tilt: .02, font: '600 54px "Caveat"' },
      extraNotes: [
        { title: 'the ride',
          big: '3,702', bigInk: '#66713f',
          lines: ['miles, coast to coast, in forty', 'days. He finished.'],
          pin: '#66713f', x: 58.7, y: 4.7, h: 2.1, tilt: -.02 },
      ],
      art: [ { file: 'terrain-t1.png', x: 54.0, y: 2.7, h: 6.0, wallPin: true, sway: 0 } ],
    },

    {
      id: 'scene',
      wp: 'WP·03',  wpX: 63.2,
      note: {
        title: '03 · the scene — California',
        lines: ['Macro photographer and content', 'maker in the California canna scene,',
                'working across the whole state. He', 'ran a service called Slow Toke.'],
        x: 66.2, y: 6.3, h: 2.75, tilt: .03,
      },
      aphorism: { lines: ['“Everyone’s an influencer.”'], ink: '#96543f',
                  x: 74.7, y: 7.0, h: .85, tilt: -.025, font: '600 62px "Caveat"' },
      extraNotes: [
        { title: 'the hunch',
          lines: ['That scaled content marketing', 'beats influencer marketing. The', 'deck’s argument — run first, live.'],
          pin: '#96543f', x: 74.7, y: 4.7, h: 1.95, tilt: .02 },
      ],
      props: [ { file: 'macro-camera.png', x: 70.0, h: 1.7, zBack: 1.35, sway: .012 } ],
    },

    {
      id: 'costa-rica',
      wp: 'WP·04',  wpX: 79.2,
      ride: 'plane',
      note: {
        title: '04 · costa rica',
        lines: ['Home, on the other side of it. Dual', 'citizen, family all from here. He taught',
                'himself to code — and sings lead in', 'a cover band the next town over.'],
        x: 82.2, y: 6.3, h: 2.75, tilt: -.02,
      },
      aphorism: { lines: ['“This project is', ' my magnum opus.”'], ink: '#a9792f',
                  x: 90.7, y: 7.05, h: 1.25, tilt: .02, font: '600 58px "Caveat"' },
      extraNotes: [
        { title: 'the other life',
          lines: ['Past round one of Nace una', 'estrella. Strangers in the region', 'still ask if he’s the singer.'],
          pin: '#a9792f', x: 90.7, y: 4.7, h: 1.95, tilt: .035 },
      ],
      art: [ { file: 'costa-rica-coast.png', x: 86.0, y: 2.6, h: 3.7, wallPin: true, sway: 0 } ],
    },

    {
      id: 'itshours',
      wp: 'WP·05',  wpX: 95.4,
      finale: true,
      note: {
        title: '05 · ItsHours',
        lines: ['A year and a half writing the backend', 'alone — hand-typed at first, then',
                'agents. Hardware you own, holding', 'your work. Paid from the first view.'],
        x: 98.4, y: 6.3, h: 2.75, tilt: -.03,
      },
      aphorism: { lines: ['“Own your work. Own your', ' audience. Own the money.”'], ink: '#cf7a35',
                  x: 106.9, y: 7.05, h: 1.4, tilt: .02, font: '600 56px "Caveat"' },
      extraNotes: [
        { title: 'the build',
          big: '1',  bigInk: '#cf7a35',
          lines: ['view is all it should take to get', 'paid. Backend written solo;', 'open source, built in the open.'],
          pin: '#cf7a35', x: 106.9, y: 4.7, h: 2.3, tilt: -.02 },
      ],
      // the dock is an object, not a landscape — a framed specimen plate, not a backdrop
      art: [ { file: 'dock.png', x: 102.6, y: 3.0, h: 2.6, wallPin: true, framed: true, sway: .006 } ],
      extraWriting: [
        { lines: ['music, audio, games, photography, code —', 'and a lived belief that creators get a raw deal. →'],
          ink: '#8a765a', x: 108.9, y: 1.95, h: 1.15, tilt: -.015, font: '500 50px "Caveat"' },
      ],
    },
  ],
};
