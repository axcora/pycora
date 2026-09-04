---
title: Medusa  Free Collections - No Hardcode Explained
date: 2026-08-25
tags: ['pycora', 'medusa', '', 'python', 'collections']
description: How Medusa implements  style free collections - every folder auto becomes collection, no hardcode, slicing [:3], limit(), where() filters
author: Axcora
image: /img/python-static-site-generator-pycora (6).webp
layout: medusa/posts
---


# Medusa  Free Collections - No Hardcode

In Nyiblorong version, collection was hardcoded to `posts` only. In Medusa V2.1.0, we implement  style free collections.

## How it works:

`scan_content()` scans `content/` recursively:

- `content/posts/` → `collections['posts']`
- `content/posts/medusa/` → `collections['posts/medusa']` + `collections['posts']._subs['medusa']`
- `content/projects/` → `collections['projects']`

All exposed to Jinja as direct vars: `{{ posts }}`, `{{ posts.medusa }}`, `{{ projects }}`

## Python Slicing:

```jinja
for post in posts.medusa[:3]
  Latest 3 medusa posts!
endfor
```

This uses `CollectionList` class that supports `__getitem__` slice!

## Filters:

- `| limit(3)` → `[:3]`
- `| slice(3)` → `[:3]`
- `| where("featured", true)` → filter by field
- `| filter_tag("python")` → filter by tag

## Sort Free:

In `content/blog.md`:
```yaml
sort_by: date        # or title, featured, category, author
sort_order: desc     # asc / desc
```

No more hardcoded `date` only!

This is inspired by Eleventy (11ty) and jekyll but implemented in Python with zero dependencies.

