// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkKeys from './src/plugins/remark-keys.mjs';
import remarkPdf from './src/plugins/remark-pdf.mjs';

// Deployed as a GitHub *user* site -> served from the domain root.
export default defineConfig({
  site: 'https://dasunpubudumal.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    // `++Ctrl+K++` -> styled <kbd> key caps (see src/plugins/remark-keys.mjs).
    // `remark-math` + `rehype-katex` render `$…$` / `$$…$$` LaTeX to static
    // HTML at build time (no client-side JS). The KaTeX stylesheet + fonts are
    // pulled in by `src/layouts/BaseLayout.astro`.
    // `remark-pdf` turns a standalone Markdown link to a `.pdf` into an
    // embedded viewer (see src/plugins/remark-pdf.mjs).
    remarkPlugins: [remarkKeys, remarkMath, remarkPdf],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
    shikiConfig: {
      // Futuristic, high-contrast code blocks. Both themes are bundled so the
      // site's light/dark toggle can swap them with CSS variables.
      themes: {
        light: 'night-owl-light',
        dark: 'night-owl',
      },
      wrap: false,
    },
  },
});
