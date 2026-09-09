/**
 * Edit this file to personalise the site. Everything user-facing (name, bio,
 * social links, nav) is driven from here so you never have to touch components.
 */
export const site = {
  title: 'Dasun Pubudumal',
  /** Short tagline shown in the browser tab and meta description. */
  tagline: 'Engineer, researcher, and writer exploring systems at the edge.',
  /** Longer intro used on the home page hero. */
  intro:
    'I build software, dig into hard systems problems, and write about what I learn along the way. This is my corner of the web — notes from the frontier.',
  author: 'Dasun Pubudumal',
  email: 'pubudumald@gmail.com',
  url: 'https://dasunpubudumal.github.io',
  locale: 'en',

  /** Social / external links. Remove any you don't want; icons are auto-picked. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/dasunpubudumal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dasunpubudumal/' },
    { label: 'Email', href: 'mailto:pubudumald@gmail.com' },
  ],

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Writing', href: '/blog' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
  ],

  /** Posts per page on the writing index. */
  postsPerPage: 10,
};

export type Social = (typeof site.socials)[number];
