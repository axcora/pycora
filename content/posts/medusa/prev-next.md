---
title: Medusa Fixes Prev Next Post and Absolute URL 404
description: Fixing two critical bugs prev next post missing and relative URL
date: 2026-08-27
tags: 
  - pycora
  - medusa
  - prev-next
  - bugfix
  - url
author: Axcora
image: /img/python-static-site-generator-pycora (13).webp
layout: medusa/posts
---

Two bugs fixed in Medusa V2.1.0:

## Bug 1: Prev/Next Post Missing

Old ssg.py `generate_all_items()` didn't pass `prev_post`, `next_post`, `related_posts` to template.

**Fix:**
```python
sorted_items = sorted(all_items, key=date, reverse=True)
prev_post = sorted_items[idx-1]
next_post = sorted_items[idx+1]
related_posts = [post with same tags]
```

Now in `post.html`:
```jinja
{ % if prev_post % }
  < a href="/blog/{ { prev_post.slug } }">Previous: { { prev_post.title } }< /a>
{ % endif % }
```

## Bug 2: URL /blog/page/2/posts/nyiblorong/better

Cause: `href="{ { post.slug } }"` relative!

When at `/blog/page/2/` and slug is `posts/nyiblorong/better`, browser resolves to `/blog/page/2/posts/nyiblorong/better` → 404!

**Fix:**
Always absolute: `href="/{ { post.slug } }/"`

And generate all URL variants:
- `/posts/nyiblorong/post-1/` (new)
- `/blog/post-1/` (old github)
- `/blog/nyiblorong/post-1/`
- `/blog/posts/nyiblorong/post-1/` (for old relative templates)

Now no more 404!

