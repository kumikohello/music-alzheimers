# The Music of Memory

Static educational site about music, emotion, and Alzheimer’s disease.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## GitHub Pages

This repo includes a workflow that deploys **`index.html`**, **`style.css`**, **`script.js`**, and **`.nojekyll`** only (so `.cursor` and other files stay off the public site).

1. Push to GitHub on the **`main`** or **`master`** branch (or run the workflow manually under **Actions**).
2. In the repository on GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”) so the workflow above is used.
4. After the first successful run, Pages shows the site URL (for a project repo it is usually  
   `https://<user>.github.io/<repository>/`).

Design notes live in `.cursor/docs/music-therapy-website.md`.
