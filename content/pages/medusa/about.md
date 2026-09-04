---
title: About Pycora Medusa
description: About Pycora Python SSG - Medusa Version with Axcora CSS lightweight framework
date: 2026-08-28
layout: medusa/page
---

# About Pycora Medusa

Pycora is Python Static Site Generator - Fast, Minimal, Elegant. Built with love by Axcora Technology.

## Two Versions:

### Nyiblorong Version (Old) - Bootstrap 5
- Live at https://pycora.axcora.com
- Uses Bootstrap 5 ~60kb
- Hardcoded collection `posts` only
- Good for starter, but heavy

### Medusa Version (New) V2.1.0 - Axcora CSS
- Uses Axcora CSS ~10kb - 5x lighter
-  Free Collections - No Hardcode - every folder auto collection
- Slicing `[:3]`, `limit()`, `where()` filters
- `sort_by: date/title/featured/category` free
- `blog.md` controller - pagination, sorting, filtering
- `prev_post`, `next_post`, `related_posts` by tags
- Absolute URL fix - no more 404 at `/blog/page/2/`
- `.pax` template support
- Nested frontmatter, TOC, reading_time

## Tech Stack:
- Python 3.8+
- Markdown + YAML frontmatter
- Jinja2 templating
- Axcora CSS (https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css)
- Axcora JS

## Creator:
Axcora Technology - https://axcora.com
Github: https://github.com/mesinkasir/pycora
