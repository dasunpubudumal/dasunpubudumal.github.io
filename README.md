# dasunpubudumal.github.io

My personal site and blog. Futuristic theme, posts written in Markdown, compiled
to a static site by [Astro](https://astro.build), and deployed to GitHub Pages by
GitHub Actions on every push to `main`.

**Live:** https://dasunpubudumal.github.io

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 — hot reload
```

## Writing a post

1. Scaffold a file:

   ```bash
   npm run new "The title of my post" --tags systems,notes
   ```

   This creates `src/content/blog/the-title-of-my-post.md` as a **draft** with
   the frontmatter filled in. (You can also just create the `.md` file by hand.)

2. Write. Run `npm run dev` and the browser live-reloads as you save. Drafts are
   visible locally but excluded from the production build.

3. Publish: set `draft: false` in the frontmatter, then:

   ```bash
   git add .
   git commit -m "post: the title of my post"
   git push
   ```

   The deploy workflow builds and publishes — live in a minute or two. Watch it
   under the repo's **Actions** tab.

### Frontmatter reference

```yaml
---
title: 'Required. Shown as the H1 and in previews.'
description: 'Required. 1–2 sentences for cards, search, and social previews.'
pubDate: 2026-09-09          # required (YYYY-MM-DD)
updatedDate: 2026-09-20      # optional
tags: ['systems', 'notes']   # optional
draft: false                 # optional, defaults to false
cover: './hero.png'          # optional image next to the post file
---
```

Markdown supports GitHub-flavored syntax: tables, task lists, footnotes, and
fenced code blocks with build-time syntax highlighting (no client-side JS).

### LaTeX / math

Math is written in LaTeX between dollar signs and rendered to static HTML at
build time by [`remark-math`](https://github.com/remarkjs/remark-math) +
[`rehype-katex`](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex).
There is **no client-side JS and no MathJax request** — the page ships plain
HTML plus the self-hosted [KaTeX](https://katex.org) stylesheet and fonts.

- **Inline math:** wrap it in single dollar signs — `The mass–energy relation is
  $E = mc^2$.` → The mass–energy relation is $E = mc^2$.
- **Display math:** put `$$` on their own lines around the expression:

  ```markdown
  $$
  \int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}
  $$
  ```

  Display blocks are centered and scroll horizontally if an equation is wider
  than the text column.

Notes and gotchas:

- **Escape a literal dollar sign** outside math as `\$` (e.g. `\$5`), otherwise
  a later `$` on the same paragraph may start a math span.
- **No space** may follow the opening `$` or precede the closing `$` in inline
  math: `$x + y$`, not `$ x + y $`.
- Use LaTeX subscript/superscript syntax inside math (`x_1`, `a^{2n}`); braces
  group multi-character scripts.
- KaTeX supports a large but not complete subset of LaTeX — see the
  [supported functions](https://katex.org/docs/supported.html) list. Unknown
  commands render as red error text rather than failing the build (`strict:
  false` in `astro.config.mjs`).
- Math inherits the post's text color, so it adapts to the light/dark toggle
  automatically. Tune sizing/spacing in `src/styles/global.css` (`.katex` /
  `.katex-display`).
- Everything works the same in standalone Markdown pages (`src/pages/*.md`) and
  the résumé.

Common examples:

| Markdown | Renders |
| --- | --- |
| `$\alpha,\ \beta,\ \gamma$` | Greek letters |
| `$\frac{a}{b}$` | fraction |
| `$\sqrt{x}$`, `$\sqrt[3]{x}$` | roots |
| `$\sum_{i=1}^{n} i$`, `$\prod$`, `$\int_a^b$` | big operators |
| `$\vec{v}$`, `$\hat{x}$`, `$\bar{x}$` | accents |
| `$\mathbb{R}$`, `$\mathcal{L}$`, `$\mathbf{A}$` | letter styles |
| `$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$` | matrix |
| `$x \approx y$`, `$a \le b$`, `$p \Rightarrow q$` | relations |

### Embedding a PDF

A paragraph whose **only** content is a Markdown link to a `.pdf` turns into an
inline viewer — the browser's native PDF renderer in an `<iframe>`, with a title
bar carrying **Open** (new tab) and **Download** links. No client-side JS, no
PDF.js bundle. Implemented in `src/plugins/remark-pdf.mjs`.

1. Put the file in `public/` — e.g. `public/papers/attention.pdf`.
2. Link to it from the post with a **root-absolute path** on its own line:

   ```markdown
   [Attention Is All You Need](/papers/attention.pdf)
   ```

The link text becomes the title shown in the bar; leave it empty
(`[](/papers/attention.pdf)`) to fall back to the file name. An absolute URL
(`https://…/paper.pdf`) works too.

**Set the height** with a Markdown link title (any number in it = pixels):

```markdown
[Long report](/papers/report.pdf "900")
```

Default height is `min(80vh, 780px)`, dropping to `65vh` on narrow screens.
Tune the frame and title bar in `src/styles/global.css` (`.pdf`).

**A PDF link inside a sentence stays an ordinary link** — only a link that is
alone in its paragraph becomes a viewer:

```markdown
See [the paper](/papers/attention.pdf) for the full derivation.
```

Notes:

- Relative paths (`./paper.pdf` next to the post) are **not** resolved — there's
  no asset pipeline for PDFs. Use `public/` + an absolute path.
- Mobile browsers often show only the title bar's **Download** link instead of
  rendering inline; that's expected.
- The résumé's `pdf:` frontmatter (a download button, no embed) is separate —
  see `src/pages/resume.md`.

**Keyboard shortcuts.** Write `++Super+Space++` (or `++Super + Space++`) and it
renders as styled key caps. Names like `super`, `cmd`, `ctrl`, `opt`, `esc`,
`return`, `up`/`down`/`left`/`right` are normalised; `++f5++` → `F5`; anything
else is shown as typed. Implemented in `src/plugins/remark-keys.mjs` — a small
remark plugin in the spirit of pymdown-extensions' *keys*.

**Images.** Every image in a post is click-to-zoom: it opens in a full-screen
viewer with arrow-key / on-screen navigation between all images in the post and
click-to-toggle 1:1 zoom (`src/components/Lightbox.astro`). The `alt` text is
shown as the caption.

## Customizing

| What | Where |
| --- | --- |
| Name, tagline, bio, social links, nav | `src/site.config.ts` |
| Colors, fonts, effects | `src/styles/global.css` (CSS custom properties at the top) |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Résumé (Markdown) | `src/pages/resume.md` — plain Markdown via `src/layouts/MarkdownPage.astro`. Add a `pdf:` frontmatter line pointing at a file in `public/` to show a "Download PDF" button |
| Nav links | `src/site.config.ts` → `nav` |
| Code themes (light / dark) | `astro.config.mjs` → `markdown.shikiConfig` |
| Markdown plugins (e.g. key caps) | `src/plugins/`, wired in `astro.config.mjs` → `markdown.remarkPlugins` |
| LaTeX / math rendering | `astro.config.mjs` → `remark-math` + `rehype-katex`; KaTeX CSS imported in `src/layouts/BaseLayout.astro`; `.katex` styles in `src/styles/global.css` |
| PDF embed viewer | `src/plugins/remark-pdf.mjs` (wired in `astro.config.mjs`); `.pdf` styles in `src/styles/global.css` |
| Favicon / social image | `public/favicon.svg`, `public/og-default.svg` (+ regenerate `og-default.png`) |

Regenerate the social preview PNG after editing the SVG:

```bash
node -e "const s=require('sharp'),f=require('fs');s(Buffer.from(f.readFileSync('public/og-default.svg'))).resize(1200,630).png().toFile('public/og-default.png')"
```

### View counts

Per-post view counts are shown on each post and on the writing index, powered by
[GoatCounter](https://www.goatcounter.com) (privacy-friendly: no cookies, no
personal data). To turn them on:

1. Create a free GoatCounter account — pick a site code (the `NAME` in
   `NAME.goatcounter.com`).
2. In GoatCounter → **Settings**, tick **"Allow adding visitor counts on your
   website"** (off by default — numbers stay hidden on the site until this is on).
3. Set `analytics.goatcounter` in `src/site.config.ts` to your site code.

That's it — `src/components/Analytics.astro` loads the tracker and fills the
counts client-side. Leave the config value empty to disable tracking and hide
every count. A post with no views yet shows nothing (not "0 views").

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check, then build to `./dist` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check only |
| `npm run new "Title"` | Scaffold a new draft post |

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`:

1. `npm ci`
2. `npm run check` (type-check)
3. `npm run build:site` (Astro → static HTML in `dist/`)
4. Upload `dist/` as a Pages artifact and deploy it

### One-time GitHub setup

This repo **must be named `dasunpubudumal.github.io`** (it's a GitHub *user*
site, served from the domain root).

1. Create the repo and push this code to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push again (or run the workflow from the Actions tab). Done.

No custom domain — if you add one later, drop a `public/CNAME` file and set
`site` in `astro.config.mjs`.

## Stack

- [Astro](https://astro.build) — static site generator
- [Shiki](https://shiki.style) — build-time syntax highlighting
- [KaTeX](https://katex.org) via `remark-math` / `rehype-katex` — build-time
  LaTeX math (self-hosted fonts, no client-side JS)
- Variable fonts via [Fontsource](https://fontsource.org) (self-hosted, no
  external font requests)
- `@astrojs/sitemap` — `sitemap-index.xml`
- [GoatCounter](https://www.goatcounter.com) — optional, privacy-friendly view counts
- GitHub Actions + GitHub Pages — hosting

## License

Code is MIT (`LICENSE`). Prose in `src/content/` is © Dasun Pubudumal, all
rights reserved.
