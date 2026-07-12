---
title: How to Customize Your PyCora Theme
description: Learn how to customize the look and feel of your PyCora static site
image: /img/python-static-site-generator-pycora (14).webp
date: 2024-01-19
tags:
  - customization
  - theming
  - css
  - design
author: Axcora
layout: post
---

# How to Customize Your PyCora Theme

PyCora is designed to be easily customizable. You can change the look and feel of your site by modifying the templates and CSS.

## CSS Customization

Place your custom CSS in `static/css/main.css`:

```css
/* Custom colors */
:root {
  --primary-color: #6C63FF;
  --secondary-color: #FF6584;
}

/* Custom fonts */
body {
  font-family: 'Inter', sans-serif;
}

/* Custom styling */
.blog-card {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
```

## Template Customization

PyCora uses Jinja2 templates located in the `templates/` directory:

- `base.html` - Main layout with navbar, footer, SEO
- `landing.html` - Homepage design
- `blog.html` - Blog listing page
- `post.html` - Single post layout
- `page.html` - Static page layout

## Changing Colors

Edit `config.yaml` or directly in `base.html`:

```html
<style>
  .text-gradient {
    background: linear-gradient(135deg, #your-color-1, #your-color-2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
```

## Adding Fonts

Add custom fonts in `base.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

---

**Create your unique look with PyCora!** 🎨