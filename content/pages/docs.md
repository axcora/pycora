---
title: PyCora Documentation
description: Complete documentation for PyCora - Static Site Generator with Python, Markdown, and YAML
image: /img/python-static-site-generator-pycora (7).webp
author: Axcora Technology
layout: page
---

# PyCora Documentation

Welcome to the complete documentation for **PyCora** - a lightweight, fast, and elegant static site generator built with Python.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Content Creation](#content-creation)
- [Configuration](#configuration)
- [Templates](#templates)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

PyCora is a static site generator that converts Markdown files with YAML frontmatter into fully functional HTML websites.

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/mesinkasir/pycora.git
cd pycora
```

### 2. Install dependencies

```bash
python install.py
```

### 3. Build the site

```bash
python ssg.py
```

### 4. Preview locally

```bash
python dev.py
```

---

## Project Structure

```
pycora/
├── content/
│   ├── posts/           # Blog posts (Markdown + YAML)
│   │   └── 2024-01-01-hello-world.md
│   └── pages/           # Static pages (Markdown + YAML)
│       └── about.md
├── templates/           # Jinja2 templates
│   ├── base.html        # Base layout
│   ├── landing.html     # Homepage
│   ├── blog.html        # Blog listing
│   ├── post.html        # Single post
│   ├── page.html        # Static page
│   ├── tags.html        # Tags index
│   ├── tag.html         # Tag detail
│   ├── 404.html         # 404 page
│   ├── feed.xml         # RSS feed
│   └── sitemap.xml      # Sitemap
├── static/              # Static assets
│   ├── css/
│   │   ├── bs.css
│   │   └── main.css
│   ├── js/
│   └── images/
├── output/              # Generated site (build output)
│   ├── index.html
│   ├── blog/
│   ├── tags/
│   ├── feed.xml
│   └── sitemap.xml
├── ssg.py               # Main builder
├── dev.py               # Development server
├── install.py           # Dependency installer
├── run.py               # Menu interface
├── config.yaml          # Site configuration
├── package.json         # NPM scripts
├── requirements.txt     # Python dependencies
└── README.md            # Documentation
```

---

## Content Creation

### Blog Post Format

Create a new Markdown file in `content/posts/` with YAML frontmatter:

```markdown
---
title: My First Post
description: A brief description of my post
date: 2024-01-15
author: Your Name
tags:
  - python
  - ssg
  - markdown
image: /images/post-image.jpg
layout: post
---

# Welcome to My Blog

This is my first post using PyCora.

## Why Static Sites?

- Fast - No database queries
- Secure - No vulnerabilities
- Simple - Write in Markdown

```python
print("Hello, PyCora!")
```
```

### Static Page Format

Create a new Markdown file in `content/pages/`:

```markdown
---
title: About Me
description: Learn more about me
date: 2024-01-15
author: Your Name
layout: page
---

# About Me

This is the about page.
```

---

## Configuration

Edit `config.yaml` to customize your site:

```yaml
site:
  name: PyCora
  description: Static Site Generator with Python
  url: http://localhost:8000
  author: Your Name
  twitter_username: yourusername
  image: /static/images/og-image.jpg

  nav:
    list:
      - name: Home
        url: /
      - name: Blog
        url: /blog
      - name: About
        url: /about

  hero:
    title: Write
    sub_title: Content
    title2: in Markdown
    text: "Static Site Generator with Python - Fast, Minimal, Elegant."
    button1:
      text: Read blog
      url: /blog/
    button2:
      text: Learn More
      url: /about/
    terminal:
      title: Quick Start
      info: "Simple. Fast. Elegant."
      list:
        - text: "$ python ssg.py build"
        - text: "$ Building site..."
        - text: "$ Pycora is ready for Deploy !!"

  features:
    title: Why Choose PyCora?
    list:
      - icon: "fas fa-bolt text-primary"
        title: Lightning Fast
        text: "Pure static HTML. No database. No server-side processing."

  footer:
    list:
      - name: Github
        icon: fab fa-github
        url: https://github.com/yourusername
```

---

## Templates

PyCora uses Jinja2 templates located in the `templates/` directory:

- `base.html` - Base layout with navbar, footer, SEO
- `landing.html` - Homepage with hero and features
- `blog.html` - Blog listing with pagination
- `post.html` - Single post with author, tags, next/prev
- `page.html` - Static page layout
- `tags.html` - Tags index page
- `tag.html` - Posts filtered by tag
- `404.html` - Custom 404 error page
- `feed.xml` - RSS feed template
- `sitemap.xml` - Sitemap template

---

## Commands

### Build Site

```bash
python ssg.py
```

### Development Server (Auto-rebuild)

```bash
python dev.py
```

### Menu Interface

```bash
python run.py
```

### Install Dependencies

```bash
python install.py
```

### NPM Scripts

```bash
npm run build   # Build site
npm run dev     # Development server
npm run serve   # Serve output directory
npm run menu    # Menu interface
```

---

## Deployment

### GitHub Pages

```bash
# Build the site
python ssg.py

# Deploy to gh-pages branch
git subtree push --prefix output origin gh-pages
```

### Netlify / Vercel

1. Build the site: `python ssg.py`
2. Deploy the `output/` directory

### Any Static Hosting

Upload the `output/` directory to any static hosting service.

---

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT License - see LICENSE file for details.

---

## Credits

PyCora is built with:

- Python - Core programming language
- Python-Markdown - Markdown parsing
- Jinja2 - Templating engine
- Bootstrap 5 - CSS framework
- Font Awesome - Icons

---

**PyCora** - Built with ❤️ by Axcora Technology