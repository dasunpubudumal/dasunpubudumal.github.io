---
title: 'Hello, world — how this site is built'
description: 'A quick tour of the machinery: Markdown in, static HTML out, deployed by GitHub Actions.'
pubDate: 2026-09-09
tags: ['meta', 'astro', 'workflow']
draft: false
---

Welcome. This is the first entry in the log. It exists mostly to explain how the
thing you're reading actually works, so future-me remembers.

## The loop

Writing a post is three steps:

1. Create a Markdown file in `src/content/blog/`.
2. Commit and push to `main`.
3. GitHub Actions builds the site and deploys it.

That's it. No CMS, no database, no server. The published site is a folder of
static HTML, CSS, and a sprinkle of JavaScript.

## Frontmatter

Every post starts with a YAML block:

```yaml
---
title: 'Your title'
description: 'One or two sentences for previews and search.'
pubDate: 2026-09-09
tags: ['systems', 'notes']
draft: false
---
```

Set `draft: true` while a post is cooking — drafts show up when you run the site
locally but are stripped out of the production build.

## Code looks like this

```ts
export function greet(name: string): string {
  return `Hello, ${name}`;
}
```

Syntax highlighting is handled at build time, so there's no client-side
highlighter to download.

## What's next

More notes on the systems I'm poking at. If you spot something wrong, every post
has a "suggest an edit" link straight to the source file.
