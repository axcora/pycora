---
title: Pycora Medusa Version -  Free Collections + Axcora CSS
description: Medusa V2.1.0 - Lightweight Python SSG with Axcora CSS 10kb,  free collections no hardcode, prev/next fix, absolute URL fix
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60
hero:
  title: Medusa Version
  description: Static Site Generator with Python - Pycora the Medusa Version -  free collections, no hardcode
  button1:
    text: Get Started
    url: /pages/medusa/docs/
  button2:
    text: ZIP Download
    url: https://creativitaz.gumroad.com/l/pycora
section1:
  title: Pycora The Medusa Version
  description: Pycora Medusa is a lightweight Python Static Site Generator built with the spirit of . It focuses on simplicity, flexibility, and speed - allowing you to create blogs, professional websites, and documentation from a single codebase. Built with Python, Markdown, and Jinja2, it generates 93 files in just 1.1 seconds with AttrDict safe chaining and CollectionList that preserves sub-collections.
  image: https://images.unsplash.com/photo-1573798484153-da43eda898f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0
  image_alt: Pycora Medusa Python SSG
section2:
  title:  Free Collections Concept
  description: Inspired by the flexibility of , Pycora introduces free collections with no hardcode. Every folder and file in content can become its own collection automatically. content/posts/my-article.md becomes collections.posts, content/docs/guide.md becomes collections.docs. Just add collection and pagination in frontmatter to create automatic listing pages. Built-in support for toc, footnotes, admonition, tables, and attr_list for documentation ready sites.
  image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0
  image_alt: Free Collections Concept
  list:
    - content/posts/my-article.md → collections.posts
    - content/docs/guide.md → collections.docs
    - collection + pagination → automatic /services/ pages
    - toc, footnotes, admonition ready
section3:
  title: Built for Speed, Designed for Simplicity
  subtitle: Pycora Medusa V2.1.0 • Axcora CSS 10kb • Absolute URL Fix • Prev/Next Fix • Sitemap + RSS + JSON Feed Ready
  note: Part of Axcora SSG Ecosystem - CAX (C) • DAX (Dotnet) • GAX (Go) • LUAX (Lua) • ONTA (Perl) • BAX (Bash) • AX (Experimental)
layout: medusa/index
---

## Pycora Medusa Version V2.1.0 -  Free Collections + Axcora CSS

Medusa Version is total rewrite from **Nyiblorong Bootstrap Version** (at pycora.axcora.com) to **Axcora CSS super lightweight**.

### Installation

How to install Pycora Medusa Version (Open Terminal)

```
git clone https://github.com/mesinkasir/pycora
# Run Installation
python install.py
# Python Run
python run.py
# Build Production
python ssg.py
# Dev Mode
python dev.py
# Access Dev
open localhost://8000
```

### Why Medusa?

**Nyiblorong** uses Bootstrap 5 ~60kb. Good but heavy. **Medusa** uses Axcora CSS ~10kb - 5x lighter, Lighthouse 95+, clean classes: `.card`, `.navbar`, `.hero`, `.row`.

### Main Features:

**1.  Free Collections - No Hardcode**
Every folder in `content/` automatically becomes collection! No hardcode:
```
content/posts/ → {{ posts }}
content/posts/nyiblorong/ → {{ posts.nyiblorong }}
content/posts/medusa/ → {{ posts.medusa }}
content/projects/ → {{ projects }}
```

Loop free:
- `{% for post in posts.nyiblorong[:3] %}` - slicing
- `{{ posts.nyiblorong | limit(3) }}` - limit filter
- `{{ posts | where("featured", true) }}` - where filter
- `sort_by: date / title / featured / category` FREE!

**2. Blog.md Controller**
File `content/blog.md` controls pagination, sorting, filtering without code.

**3. Prev/Next + Related Posts**
Every post now has `prev_post`, `next_post`, `related_posts` by same tags.

**4. Absolute URL Fix**
Old `href="{{ post.slug }}"` relative caused 404 at `/blog/page/2/posts/...`. Now absolute `/{slug}/` - no more 404!

**5. .PAX Support**
Supports `.pax` templates - `landing.html` and `landing.pax` auto fallback.

**6. Nested Frontmatter + TOC + Reading Time**
`seo.image`, `pricing.price`, `toc`, `word_count` all free.
