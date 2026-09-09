// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkKeys from './src/plugins/remark-keys.mjs';

// Deployed as a GitHub *user* site -> served from the domain root.
export default defineConfig({
  site: 'https://dasunpubudumal.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    // `++Ctrl+K++` -> styled <kbd> key caps (see src/plugins/remark-keys.mjs).
    remarkPlugins: [remarkKeys],
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
