# Music, Memory & Alzheimer's Disease — Public education website (internal brief)

## Project Overview

Build a **single-page, public-facing educational website** about music therapy as a treatment for Alzheimer's disease. The target audience is the general public — curious adults, caregivers, and anyone interested in neuroscience, memory, or Alzheimer's. The tone should be warm, accessible, and scientifically grounded — not clinical or academic.

The site argues one core thesis:
> Music therapy could be a treatment for patients with Alzheimer's disease because music enhances emotions → emotions strengthen brain connectivity → greater connectivity improves memory.

An additional argument: **nostalgia-inducing music** may specifically benefit Alzheimer's patients both behaviorally and neurally, particularly for autobiographical memory retrieval.

---

## Aesthetic Direction

Go for a **editorial/magazine aesthetic** — refined, immersive, and human. Think long-form science journalism (Quanta Magazine, The Atlantic). Use:

- **Color palette**: Deep midnight blue or warm charcoal as the dominant background, with warm amber/gold accents and soft off-white text. Sections can alternate between dark and light.
- **Typography**: A distinctive serif display font (e.g., Playfair Display, DM Serif Display, or Lora) for headings; a clean humanist sans-serif (e.g., Source Sans Pro, Lato, or Nunito) for body text. Load from Google Fonts.
- **Animations**: Subtle scroll-triggered fade-ins and slide-ups for section content. A gentle parallax on the hero. Smooth expand/collapse for research paper toggles.
- **Backgrounds**: Use a soft brain/waveform SVG or CSS noise texture as a background layer on the hero section. Add subtle gradient overlays to section dividers.
- **Spacing**: Generous negative space. Sections should breathe. Max content width of ~800px centered.

---

## Site Structure & Content

### 1. Hero Section
- Full-screen or near-full-screen header
- Title: **"The Music of Memory"** or **"Can Music Heal the Mind?"**
- Subtitle: *"Exploring how music therapy could help Alzheimer's patients remember"*
- A large, tasteful background image or CSS-generated visual (brain + sound waves, abstract)
- A smooth scroll-down CTA button

---

### 2. What Is Alzheimer's Disease?
A concise, plain-language explainer section (~2–3 short paragraphs) covering:
- What Alzheimer's disease is (a progressive neurodegenerative disease that impairs memory and cognition)
- How it affects the brain (loss of neurons, reduced connectivity, especially in hippocampus and prefrontal cortex)
- Why current pharmacological treatments are limited

---

### 3. Brain Activation Diagram
- A **visual of the brain** highlighting the regions activated by music and music-induced nostalgia:
  - **Angular gyrus** — enhanced by music intervention (Lyu et al.)
  - **Supplementary motor area** — activated by familiar/preferred music (King et al.)
  - **Default mode network, medial temporal lobe, insula, posteromedial cortex** — nostalgia-related (Hennessy et al.; Barrett & Janata)
  - **Frontal-temporal regions** — connectivity enhanced by music therapy (Lyu et al.)
  - **Substantia nigra, inferior frontal gyrus, cerebellum** — nostalgia-related tonal processing (Barrett & Janata)
- Labels should be clear but not overwhelming. Use an SVG illustration or a stylized annotated brain image.
- Include a short caption: *"Brain regions activated during music listening and music-induced nostalgia"*

---

### 4. Section — "Music & Emotions"

**Intro paragraph (~2 sentences):** Music is a uniquely powerful trigger of emotion. Emotional arousal doesn't just feel good — it has measurable effects on brain function.

**Research Toggle 1 — Barrett & Janata (2016)**
- Title: *"How Nostalgia-Evoking Music Lights Up the Brain"*
- Summary: Barrett and Janata used fMRI to identify brain regions where nostalgia evoked by music correlated with BOLD signal activity. They found that nostalgia-inducing music engaged the reward and emotion regulation networks (inferior frontal gyrus, substantia nigra, cerebellum, insula), especially in people prone to nostalgia. Their findings show music is a powerful and individualized emotional trigger.

**Research Toggle 2 — Hennessy et al. (2025)**
- Title: *"Nostalgia Across the Lifespan: What Happens in the Aging Brain"*
- Summary: Using a machine-learning method to categorize personalized nostalgic vs. familiar non-nostalgic vs. unfamiliar music, Hennessy et al. scanned 57 participants aged 18–60+. Nostalgic music activated the default mode network, salience network, reward network, medial temporal lobe, and supplementary motor regions — and increased functional connectivity between self-referential and affect-related areas. Crucially, older adults showed *stronger* BOLD signals than younger adults in nostalgia-related regions.

---

### 5. Section — "Emotions & Memory"

**Intro paragraph (~2 sentences):** Emotional experiences are remembered better — this is not just intuition, but neuroscience. Emotional arousal strengthens memory encoding through large-scale brain network integration.

**Research Toggle 1 — Park et al. (2026)**
- Title: *"Why We Remember Emotional Moments Better"*
- Summary: Park and colleagues found that emotional arousal enhances narrative memory by strengthening functional integration across large-scale brain networks. This provides a neural mechanism linking music-induced emotional arousal directly to improved memory encoding and retrieval.

**Research Toggle 2 — Tambini et al. (2010)**
- Title: *"Brain Connectivity at Rest Predicts What We Remember"*
- Summary: Tambini et al. showed that enhanced brain connectivity during rest (following an experience) correlates with better memory for that experience. This foundational finding connects directly to music therapy research: if music increases brain connectivity, it should also improve memory performance.

---

### 6. Section — "Music Therapy & Alzheimer's Disease"

**Intro paragraph (~2 sentences):** Music therapy is a non-pharmacological, safe, and increasingly supported approach to slowing cognitive decline in Alzheimer's patients. Two recent neuroimaging studies offer compelling evidence.

**Research Toggle 1 — Lyu et al. (2025)**
- Title: *"Six Months of Music Therapy Improves Cognition in Mild Alzheimer's"*
- Summary: In a randomized study of 50 patients with mild AD, Lyu et al. assigned participants to either a music-based intervention (20 min, 3×/week for 6 months) or standard care. The music group showed significant improvements in cognitive assessments (MoCA), depression (GDS), neuropsychiatric symptoms (NPI), word fluency, and verbal learning. fMRI revealed enhanced frontal-temporal connectivity and increased angular gyrus activity — consistent with improved memory via network strengthening.

**Research Toggle 2 — King et al. (2019)**
- Title: *"Preferred Music Boosts Brain Connectivity in Alzheimer's Patients"*
- Summary: King and colleagues studied 17 patients with Alzheimer's dementia who underwent a personalized music listening program. fMRI showed that preferred music specifically activated the supplementary motor area (typically spared in early AD) and produced widespread increases in functional connectivity across corticocortical and corticocerebellar networks. This transient effect on brain synchronization offers a mechanism for the behavioral improvements seen with music therapy.

---

### 7. Conclusion / Call to Action

Short closing section (~1–2 paragraphs):
- Summarize the chain of evidence: music → emotional arousal → brain connectivity → improved memory
- Note the special promise of nostalgia-evoking, personalized music for Alzheimer's patients
- Encourage readers to explore music therapy as a complement to other care approaches

Optional: A quote callout styled as a pull quote, e.g.:
> *"Music accesses parts of the brain that Alzheimer's hasn't yet touched — and that may be the key to unlocking memories."*

---

### 8. References Section

A clean, styled references list at the bottom. Include all six papers:
- Lyu et al. (2025) — *Journal of Alzheimer's Disease*
- King et al. (2019) — *Journal of Prevention of Alzheimer's Disease*
- Barrett & Janata (2016) — *Neuropsychologia*
- Hennessy et al. (2025) — *Human Brain Mapping*
- Tambini et al. (2010) — *Neuron*
- Park et al. (2026) — *Nature Human Behaviour*

---

## Technical Requirements

- **Framework**: Plain HTML + CSS + vanilla JavaScript (no build tool needed), OR React if preferred
- **Fonts**: Load from Google Fonts
- **Toggle/Accordion**: Each research paper is hidden behind a styled toggle button. Clicking expands a card with the paper summary. Smooth CSS transition on open/close.
- **Scroll animations**: Use Intersection Observer API to trigger fade-in/slide-up animations as sections enter the viewport
- **Responsive**: Must look great on mobile, tablet, and desktop
- **Accessibility**: Use semantic HTML (`<section>`, `<article>`, `<details>`/`<summary>` or ARIA for toggles), sufficient color contrast, keyboard navigable
- **No external data dependencies** — all content is hardcoded

---

## File Structure (if using plain HTML)

```
index.html
style.css
script.js
```

Or a single `index.html` with embedded `<style>` and `<script>` tags is acceptable.

---

## Do NOT

- Use purple gradients on white backgrounds (generic AI aesthetic)
- Use Inter, Roboto, or Arial as the primary font
- Make the toggle cards feel like FAQ accordions — they should feel like opening a research brief
- Make the brain diagram a placeholder box — either render a real SVG brain or use a thoughtful CSS/canvas alternative
- Include any broken links or placeholder `#` anchors in the final output
