---
title: Getting Started with PyCora Static Site Generator
description: A complete guide to getting started with PyCora, the Python-based static site generator
image: /img/python-static-site-generator-pycora (11).webp
date: 2024-01-15
tags:
  - tutorial
  - python
  - ssg
  - getting-started
author: Axcora
layout: post
---

# Getting Started with PyCora

PyCora is a lightweight, fast, and elegant static site generator built with Python. In this tutorial, we'll walk through the process of setting up your first PyCora site.

## Why Choose PyCora?

- **⚡ Blazing Fast** - Pure static HTML, no database queries
- **📝 Markdown Support** - Write content in Markdown with YAML frontmatter
- **🎨 Beautiful Design** - Clean typography with Bootstrap 5
- **🔍 SEO Ready** - Built-in meta tags, Open Graph, Twitter Cards

## Installation

```bash
git clone https://github.com/mesinkasir/pycora.git
cd pycora
python install.py
```

## Create Your First Post

Create a new Markdown file in `content/posts/` with YAML frontmatter:

```markdown
---
title: My First Post
date: 2024-01-15
tags:
  - hello
  - world
---

# Welcome to My Blog

This is my first post using PyCora.
```

## Build Your Site

```bash
python ssg.py
```

Your static site will be generated in the `output/` directory!

## Development Server

For local development with auto-rebuild and live reload:

```bash
python dev.py
```

---

**Start building your static site with PyCora today!** 🚀