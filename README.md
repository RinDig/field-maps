# Field Maps

Scrollable, hand-painted field maps of a life — a mascot travels a paper wall east
through the chapters of someone's work, with threads strung between the ones that
turned out to be connected.

**→ https://rindig.github.io/field-maps/**

Built on [The Cartographer's Desk](https://github.com/Danneytrieu/cartographers-desk)
by Danney Trieu.

---

Everything in this repo is **generated**. Don't edit it here — it is built from
`07-field-maps/` in the authoring workspace:

```bash
node scripts/build.mjs --all      # engine + each map's config and art -> hub/
node scripts/verify.mjs --all     # headless QA
```

Maps marked `unlisted` are reachable by link, carry `noindex`, and are kept off the
gallery until their subject asks to be listed.
