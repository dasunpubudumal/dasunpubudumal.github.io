---
layout: post
title:  "Implementing a Lexer in Rust"
date:   2024-07-05 13:19:11 +0100
categories: rlox
---

I've started following Robert Nystrom's [Crafting Interpreters](https://craftinginterpreters.com/contents.html){:target="_blank"} recently. The online version of the book is free, and is very good. It starts with basics related to concepts related to a compiler, and goes on to implement a compiler from scratch. Nystrom develops the lexer in Java, and I decided to do it in Rust.

## Getting Started

