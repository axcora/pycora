---
title: Medusa .PAX Template Support - Cleaner Templating
date: 2026-08-28
tags: ['pycora', 'medusa', 'pax', 'jinja', 'templating']
description: Medusa introduces .pax template support - have both .html and .pax, PAXLoader auto fallback, cleaner separation
author: Axcora
image: /img/python-static-site-generator-pycora (12).webp
layout: medusa/posts
---


# Medusa .PAX Support

Medusa introduces `.pax` extension alongside `.html`.

## PAXLoader:

Custom Jinja loader that:
- Tries `landing.html` first
- If not found, tries `landing.pax`
- If `.pax` requested, tries `.html`
- Searches subfolders recursively
- No hardcode layout path!

## Why .pax?

- Cleaner separation for tester
- Can have `medusa/landing.html` and `medusa/landing.pax` both valid
- For Medusa tester we use `.pax` to keep new version clean
- Old Nyiblorong still uses `.html` - both work!

## Example:

```
templates/
├── medusa/
│   ├── landing.html  # Medusa version
│   └── landing.pax   # Same but .pax tester
├── nyiblorong/
│   └── blog.html
└── post.html
```

In `content/index.md`:
```yaml
layout: medusa/landing  # will find .html or .pax automatically!
```

This makes Medusa more flexible than Nyiblorong.

