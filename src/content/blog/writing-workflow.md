---
title: 'A friction-free writing workflow'
description: 'Draft locally, preview instantly, publish by pushing. The tooling that keeps writing cheap.'
pubDate: 2026-08-22
tags: ['workflow', 'writing']
draft: false
---

The best writing setup is the one that disappears. Here's how I keep the gap
between *thought* and *published* as small as possible.

## Preview while you write

```bash
npm run dev
```

This starts a local server at `http://localhost:4321` with hot reload. Save the
Markdown file and the browser updates. Drafts (`draft: true`) are visible here so
you can live with a piece before committing to it.

## A blockquote, because posts need them

> The scariest moment is always just before you start.
> — Stephen King

## Checklists render fine

- [x] Write the draft
- [x] Read it out loud
- [ ] Actually publish it

## Publishing

When it's ready, flip `draft` to `false`, then:

```bash
git add .
git commit -m "post: friction-free writing workflow"
git push
```

The deploy workflow takes it from there — usually live in a minute or two.
