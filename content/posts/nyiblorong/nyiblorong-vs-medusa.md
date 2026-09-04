---
title: Nyiblorong vs Medusa - Comparison Guide
date: 2026-08-21
tags: ['pycora', 'nyiblorong', 'medusa', 'comparison', 'python']
description: Compare Nyiblorong Bootstrap vs Medusa Axcora CSS - which to choose for your Python SSG project
author: Axcora
image: https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&auto=format&fit=crop&q=60
layout: nyiblorong/post
---


# Nyiblorong vs Medusa - Which to Choose?

## Nyiblorong (Old):

- Framework: Bootstrap 5
- Size: 60kb CSS + 20kb JS
- Collections: Hardcoded `posts` only
- Sorting: `date` only
- Features: Basic pagination
- URL: Relative → 404 bug
- Template: .html only

**Best for:** Bootstrap lovers, quick starter.

## Medusa (New) V2.1.0:

- Framework: Axcora CSS ~10kb
- Size: 5x lighter, Lighthouse 95+
- Collections:  Free - every folder auto collection
- Sorting: `date/title/featured/category/author` free
- Features: `posts.nyiblorong[:3]`, `limit()`, `where()`, `prev_post`, `next_post`, `related_posts`, TOC, reading_time
- URL: Absolute fix, all variants generated
- Template: .html + .pax with PAXLoader

**Best for:** Modern blog, performance focused, free collections, Python slicing.

## Migration:

Change `templates/` from Bootstrap classes to Axcora CSS - mostly same: `.container`, `.row`, `.col-lg-4`, `.card`, `.navbar` still works!

Content stays same Markdown + YAML.

Build: `python ssg.py` same!

So Medusa is drop-in replacement but lighter and more free.
