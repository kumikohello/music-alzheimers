# The Music of Memory

A static, single-page educational site about **music, emotion, and Alzheimer’s disease** for a general audience—curious readers, caregivers, and anyone interested in how memory and the brain respond to music.

The page walks through one evidence-based thread: music can heighten emotional engagement; emotional arousal supports communication across brain networks; and that connectivity helps what we hold onto in memory. It also highlights why **personalized, nostalgia-evoking music** may matter in clinical and everyday contexts.

## What you’ll find on the site

- A plain-language overview of Alzheimer’s and how it affects key brain regions (with a simple diagram and citations).
- Sections on music and emotions, emotions and memory, and music therapy in dementia—each with short research summaries you can expand.
- A conclusion, references list, and a clear note that the site is for **education only**, not medical advice.

## Tech stack

Plain **HTML**, **CSS**, and **JavaScript**—no framework, no build step, no package manager. Fonts load from Google Fonts; everything else is self-contained in this repository.

## Run it locally

From the project root, serve the folder over HTTP (so asset paths resolve correctly):

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

## GitHub Pages

This repository includes a GitHub Actions workflow that publishes the live site. It uploads only the site files at the root (`index.html`, `style.css`, `script.js`, and `.nojekyll`) so the deployed site stays a small, static bundle.

1. Push to **`main`** or **`master`** (or run **Actions → Deploy GitHub Pages** manually).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”) so that workflow is used.
4. After the first successful run, Pages shows the site URL. For a project repository it is usually `https://<your-username>.github.io/<repository-name>/`.
