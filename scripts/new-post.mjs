#!/usr/bin/env node
/**
 * Scaffold a new blog post.
 *
 *   npm run new "My Post Title"
 *   npm run new "My Post Title" --tags systems,notes
 *
 * Creates src/content/blog/<slug>.md with frontmatter filled in, as a draft.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const args = process.argv.slice(2);
const title = args.find((a) => !a.startsWith('--'));

if (!title) {
  console.error('Usage: npm run new "Post title" [--tags a,b,c]');
  process.exit(1);
}

const tagIdx = args.indexOf('--tags');
const tags =
  tagIdx !== -1 && args[tagIdx + 1]
    ? args[tagIdx + 1].split(',').map((t) => t.trim()).filter(Boolean)
    : [];

const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

const today = new Date().toISOString().slice(0, 10);
const dir = join(process.cwd(), 'src', 'content', 'blog');
const file = join(dir, `${slug}.md`);

try {
  await access(file);
  console.error(`✗ ${slug}.md already exists.`);
  process.exit(1);
} catch {
  /* good, does not exist */
}

const body = `---
title: ${JSON.stringify(title)}
description: ''
pubDate: ${today}
tags: [${tags.map((t) => JSON.stringify(t)).join(', ')}]
draft: true
---

Write here.
`;

await mkdir(dir, { recursive: true });
await writeFile(file, body, 'utf8');

console.log(`✓ Created src/content/blog/${slug}.md`);
console.log('  Run `npm run dev` to preview it, then set `draft: false` to publish.');
