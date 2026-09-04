---
title: Pycora Medusa Documentation
description: Complete documentation for Pycora Medusa - free collections, Axcora CSS, blog.md controller, prev/next, .pax support, old and new docs combined
date: 2026-08-28
layout: medusa/page
toc: true
---
# Pycora Medusa Documentation

**Python • Markdown • YAML • Axcora CSS •  Free Collections • Fast • Minimal • Elegant**

> Old docs: https://pycora.axcora.com/docs/ (Nyiblorong Bootstrap version)
> New docs: This page - Medusa Axcora CSS version

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.3/src/lite-yt-embed.min.css">
<script src="https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.3/src/lite-yt-embed.min.js"></script>
<div class="mt-2 mb-2">
<lite-youtube  title="pycora medusa python static site generator" videoid="N3x3oQFju1w" params="rel=0&modestbranding=1" style="border-radius:12px"></lite-youtube>
</div>

## Table of Contents
- Features (Old + New)
- Requirements
- Quick Start
- Project Structure (Old + Medusa)
- Content Format (MD + PAX)
- Templating (2 styles - extends + frontmatter layout)
- Configuration (_data/site.yaml)
- Medusa Features:  Free Collections, Axcora CSS, Blog.md Controller, Prev/Next, URL Fix, PAX
- Customization
- Deployment

---

## Features

| Feature | Old Nyiblorong | New Medusa V2.1.0 |
|---------|---------------|-------------------|
| CSS Framework | Bootstrap 5 ~60kb | Axcora CSS ~10kb - 5x lighter |
| Collections | Hardcoded posts only |  Free - every folder auto collection |
| Slicing | No | Yes - posts.nyiblorong[:3], limit(), slice(), where() |
| Sort | date only | Free - date/title/featured/category/author |
| Pagination | Built-in | Built-in + blog.md controller |
| Tags | Auto | Auto + related_posts |
| Prev/Next | Yes (old) but broken in some builds | Fixed - prev_post, next_post, related_posts |
| URL | Relative - 404 at /blog/page/2/ | Absolute fix - no 404 |
| Templates | .html only | .html + .pax with PAXLoader |
| SEO | Meta, OG, Twitter, Sitemap, RSS | Same + TOC, reading_time, word_count |
| Live Dev | Auto-rebuild | Auto-rebuild with watchdog |
| Performance | Good | Lighthouse 95+ |
| Deploy | Netlify, Vercel, GH Pages, Cloudflare | Same |

**Old features kept:** Lightning Fast, Markdown+YAML, Beautiful Typography, Responsive, Secure, Easy Deployment, Zero Dependencies

**New features added:** Axcora CSS,  Free Collections, Slicing, Free sort_by, Blog.md Controller, Prev/Next Fix, Absolute URL Fix, PAX Support, Nested Frontmatter

---

## Requirements

- Python 3.8+
- pip
- Git (optional)

Dependencies (install via `python install.py`):
- markdown
- PyYAML
- Jinja2
- python-frontmatter (optional)
- watchdog (optional for live reload)

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/mesinkasir/pycora.git
cd pycora

# 2. Install deps
python install.py

# 3. Run dev server with live reload
python dev.py
# or
python run.py -> Choose 2

# Open http://localhost:8000

# 4. Build
python ssg.py
# Output in output/ folder
```

NPM scripts also work:
```bash
npm run dev
npm run build
```

---

## Project Structure - Old vs Medusa

**Old Nyiblorong (Bootstrap):**
```
pycora/
├── content/
│   ├── posts/ -> {{ posts }} only
│   └── pages/
├── templates/
│   ├── base.html (Bootstrap)
│   ├── landing.html
│   └── post.html
├── static/ (Bootstrap CSS)
└── output/
```

**New Medusa V2.1.0 (Axcora CSS +  Free):**
```
pycora/
├── content/
│   ├── posts/           # {{ posts }} - 11 items
│   │   ├── medusa/      # {{ posts.medusa }} - 4 items + test.pax
│   │   │   ├── medusa--free-collections.md
│   │   │   ├── medusa-axcora-css.md
│   │   │   └── test.pax -> frontmatter layout: medusa/default
│   │   └── nyiblorong/  # {{ posts.nyiblorong }} - 6 items
│   ├── medusa/          # {{ medusa }} - 1 item (test.pax)
│   │   └── test.pax
│   ├── about.md
│   ├── docs.md (this file) - layout: medusa/default
│   ├── medusa-version.md - layout: medusa/landing
│   ├── index.md - layout: medusa/landing
│   └── blog.md - Controller: collection posts, pagination 6, sort_by date desc
├── templates/
│   ├── medusa/
│   │   ├── default.html + .pax - Axcora CSS base with {% block content %}
│   │   ├── landing.html + .pax - Medusa landing
│   │   ├── blog.html + .pax - Medusa blog
│   │   └── test.pax + test.html - {% extends "default.html" %} example
│   ├── nyiblorong/
│   │   └── blog.html - Old blog template
│   ├── base.html, post.html, page.html, default.html
│   └── ...
├── _data/site.yaml - site config, nav, hero, features, footer
├── ssg.py - Medusa builder with PAXLoader, CollectionList, prev/next, .pax support
├── dev.py - Dev server + live reload
└── output/
    ├── index.html
    ├── medusa/test/ (from content/medusa/test.pax)
    ├── posts/medusa/...
    ├── posts/nyiblorong/...
    ├── blog/ + blog/page/2/
    ├── about/, docs/, medusa-version/
```

---

## Content Format - MD + PAX (NEW in Medusa)

### 1. Blog Post Markdown (Old + New)

**File:** `content/posts/2024-01-01-hello-world.md`

```markdown
---
title: Hello World
description: Welcome
date: 2024-01-01
author: Axcora
tags: [python, ssg, medusa]
image: /images/hello.jpg
layout: post
featured: true
category: tutorial
# Nested frontmatter FREE in Medusa!
seo:
  image: /img/seo.jpg
  keywords: [ssg, python]
pricing:
  price: 50000
---

# Welcome

Content in Markdown.

- Fast
- Secure
- Simple

{% for post in posts.medusa[:3] %}  # Medusa slicing works in markdown too!
```

**Frontmatter fields (all free, no hardcode):**
- title, description, date, author, tags, image, layout, excerpt, slug
- featured, category, any custom field: `my_custom_field: value`
- Nested: `seo.image`, `pricing.price` - all accessible via `post.metadata.seo.image`

Medusa auto adds:
- `toc` - Table of Contents
- `word_count`
- `reading_time` (minutes)
- `slug`, `_rel_path`, `_file`

### 2. PAX Content File (NEW in Medusa V2.1.0)

**File:** `content/medusa/test.pax` - Raw HTML with frontmatter layout

```markdown
---
layout: medusa/default
title: Medusa Test PAX
description: Test PAX file
---

<main class="container mt-2 mb-2">
<header class="container mt-3">
<div class="hero">
  <div class="hero-content">
    <h1>Modern Hero Section</h1>
    <p>Create beautiful intro...</p>
    <div class="hero-actions">
      <button class="btn btn-warning">Get Started</button>
      <button class="btn btn-dark">Learn More</button>
    </div>
  </div>
</div>
</header>
</main>
```

- `ssg.py` now scans `content/**/*.md` + `content/**/*.pax`
- For `.pax`, content is kept as **raw HTML**, not markdown converted
- So you can write pure HTML + Jinja inside!
- Output: `/medusa/test/` with layout `medusa/default`

This is **Style 1: Frontmatter Layout** - content file defines layout.

### 3. Blog.md Controller (Medusa -  style)

**File:** `content/blog.md`

```yaml
---
collection: posts
pagination: 6
sort_by: date        # FREE: date, title, featured, category, author, slug
sort_order: desc     # asc / desc - robust, handles mistake sort_order: date
filter_tag: python   # optional
filter_by: featured  # optional
filter_value: true   # optional
limit: 10
title: Blog Post
layout: nyiblorong/blog  # or medusa/blog
---

Optional content for blog page
```

- `collection: posts` → take from `{{ posts }}` collection
- `pagination: 6` → 6 per page → `/blog/`, `/blog/page/2/`
- `sort_by` free, no hardcode!
- Generates pagination URLs absolute: `/blog/`, `/blog/page/2/`

---

## Templating - 2 Styles Supported (NEW in Medusa)

Medusa supports **both** templating styles - must both work!

### Style 1: Frontmatter Layout (content file with layout)

**File:** `content/medusa/test.pax` or `content/about.md`

```markdown
---
layout: medusa/default
title: My Page
---

<main class="container">
<h1>{{ page.title }}</h1>
<p>{{ content|safe }}</p>
</main>
```

- `layout: medusa/default` → looks for `templates/medusa/default.html` or `.pax` via PAXLoader
- Content is injected via `{{ content|safe }}` in layout
- Variables: `{{ page }}`, `{{ site }}`, `{{ posts }}`, `{{ collections }}` all available

**This is what you showed:**
```markdown
---
layout: medusa/default
---
<main class="container mt-2 mb-2">
<header>...</header>
</main>
```

✅ **Works in Medusa** - ssg.py reads .pax content, keeps raw HTML, renders with layout medusa/default

### Style 2: Extends Default (template file)

**File:** `templates/medusa/test.pax` or `templates/medusa/test.html`

```jinja
{% extends "default.html" %}
{% block content %}

<section class="container mt-3">
<div class="hero rounded-lg" style="background: linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#334155 100%); color:#fff;">
  <div class="hero-content p-4">
    <h1>{{ site.hero.title }}</h1>
    <p>{{ site.hero.text }}</p>
  </div>
</div>
</section>

{% endblock %}
```

- `{% extends "default.html" %}` → extends `templates/default.html` or `templates/medusa/default.html` via PAXLoader search
- `{% block content %}` → content block
- This is **pure template**, not content file - placed in `templates/` folder
- Used as layout: `layout: medusa/test` in content file

✅ **Works in Medusa** - PAXLoader searches recursively, supports .html and .pax fallback

### PAXLoader (NEW)

Custom Jinja loader in ssg.py:

- Tries `template.html` first
- If not found, tries `template.pax`
- If `template.pax` requested, tries `template.html`
- If no extension, tries `.pax` and `.html`
- Tries `layouts/` prefix
- Searches subfolders recursively: `medusa/default` → finds `templates/medusa/default.html`
- So `layout: medusa/default` works even if you write `medusa/default.html` or `medusa/default.pax`!

---

## Configuration - _data/site.yaml (Old + New)

**File:** `_data/site.yaml` - Site config, nav, hero, features, footer

```yaml
name: PYCORA
description: Static Site Generator...
url: http://localhost:8000
author: Axcora
image: /img/axcoranewlogored.webp
favicon: /img/axcoranewlogored.webp
nav:
  title: PYCORA
  list:
    - name: Home
      url: /
    - name: About
      url: /about
    - name: Docs
      url: /docs
    - name: Blog
      url: /blog
hero:
  icon: fas fa-code
  info: Static Site Generator
  title: Write
  sub_title: Content
  title2: in Markdown
  text: Pycora Python SSG...
  button1:
    text: Read Docs
    url: /docs/
  button2:
    text: Download
    url: https://...
  terminal:
    title: Quick Start
    list:
      - text: $ git clone...
features:
  title: Why Choose PyCora?
  list:
    - icon: fas fa-bolt
      title: Lightning Fast
      text: Pure static HTML...
footer:
  list:
    - name: Github
      url: https://...
```

All accessible in templates: `{{ site.name }}`, `{{ site.nav.list }}`, `{{ site.hero.title }}`, etc.

Medusa adds no hardcode for collections - all folders auto become `{{ site.collections }}` plus direct vars.

---

## Medusa Features Deep Dive

### 1.  Free Collections - No Hardcode

Old Nyiblorong: hardcoded `posts` only.

Medusa: `scan_content()` scans `content/` recursively:

- `content/posts/` → `collections['posts']` → `{{ posts }}`
- `content/posts/medusa/` → `collections['posts/medusa']` → `{{ posts.medusa }}` + `collections['posts']._subs['medusa']`
- `content/projects/` → `{{ projects }}`

**CollectionList class** supports:
- `posts[0]` - first post
- `posts[:3]` - slicing 3 latest
- `posts.medusa` - sub-collection via `__getattr__`
- `posts['medusa']` - via `__getitem__`

### 2. Filters - limit, slice, where, filter_tag

In `ssg.py` env.filters:

```jinja
{% for post in posts.medusa[:3] %}  # Python slicing

{% for post in posts.medusa | limit(3) %}  # limit filter
{% for post in posts.medusa | slice(3) %}  # slice filter

{% for post in posts | where("featured", true) %}  # where filter
{% for post in posts | where("category", "premium") %}

{% for post in posts | filter_tag("python") %}  # filter_tag

{% for post in posts | filter_by("author", "Axcora") %}
```

### 3. Blog.md Controller + Sorting Free

`content/blog.md` controller:

- `collection: posts` - which collection to paginate
- `pagination: 6` - per page
- `sort_by: date` - FREE: date, title, author, category, featured, slug, any field!
- `sort_order: desc` - asc/desc, robust handling if you write `sort_order: date` (mistake) → auto fixes to date desc
- `limit: 10` - max items
- `filter_tag: python` - filter by tag
- `filter_by` + `filter_value` - filter by field
- `layout: nyiblorong/blog` or `medusa/blog`

Generates: `/blog/`, `/blog/page/2/`, etc with `pagination` object: `pagination.total_items`, `pagination.current_page`, `pagination.total_pages`, `pagination.prev_url`, `pagination.next_url`

### 4. Prev/Next + Related Posts (Fixed in Medusa)

In `generate_all_items()`, sort all items by date desc, then for each post find prev/next + related by tags.

In `post.html`:

```jinja
<div class="post-nav">
  {% if prev_post %}
  <a href="/blog/{{ prev_post.slug }}">Previous: {{ prev_post.metadata.title }}</a>
  {% endif %}
  {% if next_post %}
  <a href="/blog/{{ next_post.slug }}">Next: {{ next_post.title }}</a>
  {% endif %}
</div>

{% if related_posts %}
  {% for related in related_posts[:3] %}
    <a href="/{{ related.slug }}/">{{ related.title }}</a>
  {% endfor %}
{% endif %}
```

### 5. Absolute URL Fix

Old bug: `href="{{ post.slug }}"` relative → at `/blog/page/2/` becomes `/blog/page/2/posts/nyiblorong/better` → 404!

Fix: Always absolute: `href="/{{ post.slug }}/"` or `href="/blog/{{ post.slug }}/"`

Medusa generates all variants for backward compat:
- `/posts/nyiblorong/post-1/` (new )
- `/blog/post-1/` (old github)
- `/blog/nyiblorong/post-1/`
- `/blog/posts/nyiblorong/post-1/` (for old relative templates)

Now no 404!

### 6. PAX Support + PAXLoader

- Templates can be `.html` or `.pax`
- PAXLoader tries fallback: `.html` → `.pax`, `.pax` → `.html`, no ext → both, searches subfolders
- Content files can be `.md` or `.pax` (new in Medusa)
- For `.pax` content, raw HTML kept, not markdown converted

### 7. Axcora CSS

Replace Bootstrap 5 ~60kb with Axcora CSS ~10kb:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css">
<script src="https://cdn.jsdelivr.net/npm/axcora-js@1.0.1/axcora.min.js"></script>
```

Classes: `.container`, `.navbar`, `.hero`, `.card`, `.row`, `.col-lg-4`, `.btn`, `.badge`, `.rounded-lg`, `.shadow`, `.p-3`, `.mt-3` - same familiar but lightweight.

### 8. Other Medusa Improvements

- Nested frontmatter: `seo.image`, `pricing.price` - free, accessible via `post.metadata.seo.image`
- TOC: `{{ toc|safe }}` auto generated
- word_count, reading_time
- `site` globals from `_data/site.yaml` + `site` collection
- No hardcode port - reads from `site.url` `http://localhost:8000` → port 8000

---

## Customization

### CSS

Place custom CSS in `static/css/main.css` or override via `<style>` in template.

Medusa uses Axcora CSS CDN, but you can add your own:

```html
<link rel="stylesheet" href="/css/custom.css">
```

### Templates

Edit in `templates/`:

- `base.html` - Base layout with navbar, footer, SEO meta
- `default.html` - Default base
- `medusa/default.html` - Medusa Axcora CSS base with `{% block content %}`
- `medusa/landing.html` - Homepage with hero, features, latest posts
- `medusa/blog.html` - Blog listing
- `post.html` - Single post with prev/next/related
- `page.html` - Static page

### Static Assets

Add images to `static/` or `public/` - copied to `output/` via `copy_static()`.

---

## Deployment

### Build

```bash
python ssg.py
# Output in output/ folder - 50+ files for Medusa with all posts
```

### GitHub Pages

```bash
git subtree push --prefix output origin gh-pages
```

### Netlify / Vercel

- Build command: `python ssg.py`
- Publish directory: `output`
- Or drag and drop `output/` folder

### Any Static Hosting

Upload `output/` to:
- Netlify, Vercel, GitHub Pages, Cloudflare Pages, AWS S3, Firebase, Cpanel

---

## Medusa Test Files - Both Templating Styles Must Work

### Test 1: content/medusa/test.pax - Frontmatter Layout Style

**File:** `content/medusa/test.pax`
```yaml
---
layout: medusa/default
title: Test PAX
---
<main class="container">...</main>
```

Output: `/medusa/test/` - uses `templates/medusa/default.html` layout, raw HTML kept.

### Test 2: templates/medusa/test.pax - Extends Style

**File:** `templates/medusa/test.pax`
```jinja
{% extends "default.html" %}
{% block content %}
<section>...</section>
{% endblock %}
```

Output: Can be used as layout: `layout: medusa/test` in content file.

Both must work - Medusa PAXLoader + scan_content .pax support ensures it!

---

## Credits

- Python, Markdown, Jinja2, PyYAML, Watchdog
- Axcora CSS - https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css
- Bootstrap 5 (old Nyiblorong)
- Axcora Technology - https://axcora.com
- GitHub: mesinkasir/pycora
- Docs: https://pycora.axcora.com/docs/ (old) + this page (new Medusa)

---

**Pycora Medusa V2.1.0 -  Free Collections + Axcora CSS - Build 0.4s, 50 files, deploy anywhere!**
