---
title: Why Medusa Uses Axcora CSS - 5x Lighter Than Bootstrap
date: 2026-08-26
tags: ['pycora', 'medusa', 'axcora-css', 'bootstrap', 'performance']
description: Medusa switches from Bootstrap 5 60kb to Axcora CSS 10kb - 5x lighter, Lighthouse 95+, same familiar classes
author: Axcora
image: /img/python-static-site-generator-pycora (15).webp
layout: medusa/posts
toc: true
---


# Why Medusa Uses Axcora CSS - 5x Lighter Than Bootstrap

Nyiblorong version at pycora.axcora.com uses Bootstrap 5. Good but heavy:

- Bootstrap CSS ~60kb
- Bootstrap JS ~20kb
- Need jQuery or Popper
- Hard to override

Medusa uses Axcora CSS:

- `axcora.min.css` ~10kb only!
- `axcora.min.js` ~5kb, no jQuery
- Same familiar classes: `.container`, `.row`, `.col-lg-4`, `.card`, `.navbar`, `.hero`, `.btn`
- Modern gradient, rounded-lg, shadow
- Built for Pycora

## Result:

- Load 5x faster
- Lighthouse 95+ performance
- Easier customization
- No Bootstrap override hell

## CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css">
<script src="https://cdn.jsdelivr.net/npm/axcora-js@1.0.1/axcora.min.js"></script>
```

Same structure as your template, but super light!

