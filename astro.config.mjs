// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub *user* site -> served from the domain root.
export default defineConfig({
  site: 'https://dasunpubudumal.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Futuristic, high-contrast code blocks. Both themes are bundled so the
      // site's light/dark toggle can swap them with CSS variables.
      themes: {
        light: 'github-light',
        dark: 'tokyo-night',
      },
      wrap: false,
    },
  },
});
