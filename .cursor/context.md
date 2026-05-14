# Internal notes (not part of the public site copy)

This directory holds **maintainer and editor context** for the repository: product prompts, implementation notes, and deployment details that are intentionally kept out of the root `README.md` so the public README stays focused on the project and the website itself.

| Path | Contents |
|------|----------|
| `prompts/music_therapy_website_prompt.md` | Original design and content brief used to shape the site (tone, structure, aesthetic). |
| `docs/music-therapy-website.md` | Technical documentation: file map, anchors, accessibility choices, scroll behavior, localhost commands, GitHub Pages options (including minimal deploy vs. branch deploy). |

The GitHub Pages workflow copies only `index.html`, `style.css`, `script.js`, and `.nojekyll` into the published artifact; other repository files (including this folder) are not deployed by that workflow.
