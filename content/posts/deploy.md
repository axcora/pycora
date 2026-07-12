---
title: Deploy Your Static Site Anywhere
description: Learn how to deploy your PyCora static site to various hosting platforms
image: /img/python-static-site-generator-pycora (13).webp
date: 2024-01-18
tags:
  - deployment
  - hosting
  - netlify
  - vercel
  - github-pages
author: Axcora
layout: post
---

# Deploy Your Static Site Anywhere

One of the biggest advantages of static sites is the ability to deploy them anywhere. Here's how to deploy your PyCora site to various hosting platforms.

## Netlify

1. Build your site: `python ssg.py`
2. Drag and drop the `output/` folder to Netlify dashboard
3. Or connect your GitHub repository for automatic deployments

## Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd output
vercel --prod
```

## GitHub Pages

```bash
# Build your site
python ssg.py

# Deploy to gh-pages branch
git subtree push --prefix output origin gh-pages
```

## Cloudflare Pages

1. Build your site: `python ssg.py`
2. Connect your GitHub repository to Cloudflare Pages
3. Set build command: `python ssg.py`
4. Set output directory: `output`

## Any Static Hosting

Just upload the `output/` directory to:
- **Hostinger**
- **Namecheap**
- **Bluehost**
- **AWS S3**
- **Firebase Hosting**
- **Any web hosting provider**

---

**Deploy your PyCora site anywhere!** 🚀