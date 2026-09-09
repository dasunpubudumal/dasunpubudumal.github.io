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
    'I build software, experiment with them, and write about what I learn along the way. This is my corner of the web.',
  author: 'Dasun Pubudumal',
  email: 'pubudumald@gmail.com',
  url: 'https://dasunpubudumal.github.io',
  locale: 'en',

  /** Social / external links. Remove any you don't want; icons are auto-picked. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/dasunpubudumal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dasun-pubudumal/' },
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

  /**
   * Privacy-friendly page-view counts via GoatCounter (https://www.goatcounter.com) —
   * no cookies, no personal data, GDPR-friendly.
   *
   *   1. Make a free account. Your "site code" is the sub-domain part of
   *      <code>.goatcounter.com — put just that string below.
   *   2. In GoatCounter → Settings → tick
   *      "Allow adding visitor counts on your website" (it defaults to OFF, and
   *      the numbers on the site stay hidden until it's on).
   *
   * Leave `goatcounter` empty to disable tracking and hide every view count.
   */
  analytics: {
    goatcounter: 'dasunpubudumal',
  },
};

export type Social = (typeof site.socials)[number];
