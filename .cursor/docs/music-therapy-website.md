# Music, Memory & Alzheimer’s — Website Documentation

This document describes the static multi-page site built from the product spec at `.cursor/prompts/music_therapy_website_prompt.md`. All build notes, file map, and local run instructions live under `.cursor` as requested.

---

## Purpose and audience

Public education site: warm, accessible, scientifically grounded copy on how music therapy may support people with Alzheimer’s disease, centered on the thesis:

**Music → emotional arousal → stronger brain connectivity → better-supported memory**, with extra emphasis on **nostalgia-inducing, personalized music**.

---

## Information architecture (single dynamic page)

All content lives in **`index.html`**. Section `id`s drive in-page navigation; the primary nav uses hash links (`#intro`, `#thesis`, …). **`script.js`** runs a lightweight **scroll spy** that sets `aria-current="page"` on the nav item for the section nearest the top of the viewport (after a sticky-header offset). **`style.css`** adds **`scroll-margin-top`** on those anchors so in-page jumps are not hidden under the sticky bar.

| Anchor | Spec coverage |
|--------|----------------|
| `#intro` | Hero (title, subtitle, visual layers, scroll CTA to thesis) |
| `#thesis` | Evidence chain (music → emotion → connectivity → memory) |
| *(jump cards)* | Quick links into the sections below |
| `#alzheimers` | “What is Alzheimer’s?”, brain diagram (SVG + legend) |
| `#music-emotion` | Music & emotions + two research briefs |
| `#emotion-memory` | Emotions & memory + two research briefs |
| `#therapy` | Music therapy & Alzheimer’s + two research briefs |
| `#closing` | Conclusion / CTA + pull quote |
| `#references` | Six papers |

Shared chrome: sticky header, primary nav, skip link, footer disclaimer.

---

## Asset files

| File | Role |
|------|------|
| `style.css` | Editorial palette (deep background, amber accents, light section bands), Playfair Display + Source Sans 3 (via Google Fonts), layout, research `details` styling, brain figure, cards, footer |
| `script.js` | Mobile nav toggle, Intersection Observer for `.reveal`, hero parallax, **scroll spy** for nav `aria-current` on section scroll / after nav clicks |

No build step, no npm, no external data APIs.

---

## Design and UX decisions

- **Typography**: Playfair Display (headings) and Source Sans 3 (body) — avoids Inter, Roboto, and Arial as primary faces per spec.
- **Research “toggles”**: Native `<details>` / `<summary>` with editorial card styling (not generic FAQ chrome). Body wrapper uses a **CSS grid `0fr` → `1fr`** pattern for smoother height transitions when supported.
- **Brain diagram**: Inline SVG lateral silhouette with numbered markers and a text legend mapping regions to cited literature (not a placeholder rectangle).
- **Motion**: `.reveal` elements fade/slide in once when entering the viewport (Intersection Observer); hero background uses light `translateY` tied to scroll (`requestAnimationFrame`). **Nav scroll spy** updates which primary link is marked current while you move through sections.
- **Accessibility**: Semantic landmarks (`header`, `main`, `nav`, `section`, `figure`), skip link, focus-visible link styles, `aria-current="page"` on active nav item, meaningful SVG `<title>` / `<desc>`.
- **Links**: In-page hash navigation only — no placeholder `href="#"` links.

---

## Running on localhost

From the repository root (`music-alzheimers`), serve static files with any HTTP server so font and script paths resolve correctly.

**Python 3 (recommended):**

```bash
cd /Users/kumikoueda/GitHub/music-alzheimers
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/` in a browser. Use `index.html` at the root or follow in-app navigation.

**Alternative (Node):**

```bash
npx --yes serve -l 8080
```

---

## Optional / unused files

None required for the live site; the entry point is **`index.html`** at the repository root.

---

## Spec compliance checklist

- [x] Hero with title, subtitle, visual layers (noise + waves), scroll CTA  
- [x] Alzheimer’s explainer (plain language, brain changes, treatment limits)  
- [x] Brain regions called out with citations (diagram + legend)  
- [x] Music & emotions + two research briefs  
- [x] Emotions & memory + two research briefs  
- [x] Music therapy & Alzheimer’s + two research briefs  
- [x] Conclusion / CTA + pull quote  
- [x] Six references listed  
- [x] Google Fonts, responsive layout, semantic HTML, keyboard-friendly toggles  
- [x] Vanilla JS: Intersection Observer + parallax + scroll-spy nav  
- [x] Single-page experience (matches original prompt file layout; consolidated from an earlier multi-page experiment)

---

## Maintenance notes

- To add a new section: add a block in `index.html` with a unique `id`, add matching `scroll-margin-top` in `style.css` (same list pattern as existing anchors), register a nav link in `.site-nav`, append the id to `spyIds` in `script.js`, and optionally add a jump card.
- Global styles and behavior: edit `style.css` and `script.js` only; `index.html` links them from the site root.
