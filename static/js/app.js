/**
 * PYCORA GOTHIC SSG - PURE VANILLA JAVASCRIPT MASTERPIECE
 * Handles 3D Levitation, Smoke/Fog Canvas, Philosophy Cards,
 * FAQ Accordion, Real-time Search, Article Modals, SSG Compiler Altar & Ambient Drone.
 */

document.addEventListener('DOMContentLoaded', () => {
	initCinematicVideo(); 
  initHeader();
  initGothicCanvas();
  init3DParallax();
  initFaqAccordion();
  initPhilosophyModal();
  initPycoraPlayground();
  initAmbientAudio();
   initVersionVideo(); 
});

/* ==========================================================================
   1. HEADER & NAVIGATION LOGIC
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.gothic-header');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }
}

/* ==========================================================================
   2. 3D FLOATING MEDUSA LEVITATION & PARALLAX
   ========================================================================== */
function init3DParallax() {
  const medusaWrapper = document.getElementById('floating-medusa-3d');
  if (!medusaWrapper) return;

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 35;
    const moveY = (clientY - centerY) / 35;

    const rotateX = (clientY - centerY) / -45;
    const rotateY = (clientX - centerX) / 45;

    medusaWrapper.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
}

/* ==========================================================================
   3. PHILOSOPHY OF PYCORA (pycora.axcora.com Philosophy & Articles)
   ========================================================================== */
const PHILOSOPHY_ARTICLES = {
  philosophy: {
    title: "The Immutable Stone: Why Pycora Rejects Runtime Complexity",
    category: "PYCORA PHILOSOPHY",
    author: "Axcora Gothic Council",
    date: "Aug 2026",
    content: `
      <p>In the digital age, web architecture has become bloated with heavy JavaScript runtimes, endless hydration cycles, and fragile node dependencies. <strong>Pycora</strong> stands as a gothic monument to pure, unyielding static performance.</p>

      <blockquote>"Like Medusa's ancient gaze that turns moving flesh into eternal granite, Pycora freezes dynamic code into indestructible, lightning-fast static HTML."</blockquote>

      <h3>The 4 Sacred Commandments of Pycora SSG:</h3>
      <ul>
        <li><strong>Pure Python Devotion:</strong> Engineered exclusively in clean Python with zero Node.js or npm dependencies.</li>
        <li><strong>Zero Runtime Overhead:</strong> Ships pure pre-rendered HTML and lightweight Axcora CSS directly to CDN edge servers.</li>
        <li><strong>Jinja2 Templating Mastery:</strong> Complete layout flexibility, custom macros, components, and inheritance.</li>
        <li><strong>Maximum Security & Longevity:</strong> Immutable static files eliminate server-side injection vectors entirely.</li>
      </ul>

      <p>Pycora is not merely a generator; it is a declaration of independence from client-side bloat. Visit official project docs at <a href="https://pycora.axcora.com" target="_blank" style="color: #10b981; text-decoration: underline;">pycora.axcora.com</a>.</p>
    `
  },
  serpent: {
    title: "The Serpent's Speed: Venomous Build Velocity in Pure Python",
    category: "ENGINEERING ARCHITECTURE",
    author: "Pycora Core Team",
    date: "Aug 2026",
    content: `
      <p>How does Pycora achieve build speeds exceeding thousands of pages per second? By utilizing optimized Python standard libraries alongside fast Markdown and Jinja2 compilers.</p>

      <p>Pycora eliminates the standard multi-pass bundling pipelines. When you run <code>pycora build</code>, the compiler ingests Markdown frontmatter directly into memory structures and renders layout files in a single, continuous stream.</p>

      <div class="code-block-wrapper">
        <button class="code-copy-btn">Copy</button>
        <code># Execute Pycora Build Ritual
python -m pycora build --theme gothic --output ./dist</code>
      </div>

      <p>The resulting <code>dist/</code> bundle contains pure static HTML and CSS ready to be deployed to any host instantly.</p>
    `
  },
  gorgon: {
    title: "Gothic Conceptual Design & Axcora CSS Architecture",
    category: "AESTHETIC MANIFESTO",
    author: "Axcora Design Guild",
    date: "Aug 2026",
    content: `
      <p>Web design should evoke emotional depth and architectural grandeur. The pairing of Pycora SSG with <strong>Axcora CSS</strong> creates a sinister, highly polished visual experience without requiring hundreds of megabytes of utility CSS frameworks.</p>

      <p>Axcora CSS provides lightweight, fast responsive primitives that harmonize with dark gothic aesthetics, glowing serpent accents, and crisp typography.</p>

      <blockquote>"Craft is not measured by dependency count, but by spatial harmony, contrast, and mathematical precision."</blockquote>
    `
  },
  covenant: {
    title: "The Covenant of Pure Python: Deploying Pycora to the Edge",
    category: "DEPLOYMENT RITUALS",
    author: "Pycora Systems Architect",
    date: "Aug 2026",
    content: `
      <p>Because Pycora outputs plain static HTML, CSS, and JS, your site can be hosted anywhere in the realm with 100% uptime guarantees.</p>

      <h3>Recommended Edge Hosts:</h3>
      <ul>
        <li><strong>Cloudflare Pages:</strong> Free unlimited bandwidth with global edge deployment.</li>
        <li><strong>GitHub Pages:</strong> Automated build pipeline using GitHub Actions.</li>
        <li><strong>Vercel & Netlify:</strong> Instant git-backed deployment triggers on every commit.</li>
        <li><strong>Apache / NGINX:</strong> Simply copy the <code>./dist</code> folder to your web root.</li>
      </ul>
    `
  }
};

function initPhilosophyModal() {
  const modalOverlay = document.getElementById('article-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalBody = document.getElementById('modal-body');

  document.querySelectorAll('.open-philosophy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-key');
      const data = PHILOSOPHY_ARTICLES[key];

      if (data && modalOverlay && modalTitle && modalMeta && modalBody) {
        modalTitle.textContent = data.title;
        modalMeta.textContent = `${data.category} • ${data.author} • ${data.date}`;
        modalBody.innerHTML = data.content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Bind copy buttons inside modal
        modalBody.querySelectorAll('.code-copy-btn').forEach(copyBtn => {
          copyBtn.addEventListener('click', () => {
            const code = copyBtn.nextElementSibling?.textContent || '';
            navigator.clipboard.writeText(code);
            copyBtn.textContent = 'COPIED!';
            setTimeout(() => copyBtn.textContent = 'Copy', 2000);
          });
        });
      }
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ==========================================================================
   4. DOCUMENTATION FAQ ACCORDION & SEARCH (pycora.axcora.com/docs)
   ========================================================================== */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const searchInput = document.getElementById('faq-search-input');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  // Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      accordionItems.forEach(item => {
        const text = item.textContent?.toLowerCase() || '';
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
          item.classList.remove('active');
        }
      });
    });
  }

  // Copy buttons in FAQ
  document.querySelectorAll('.code-copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const codeBlock = btn.parentElement?.querySelector('code');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent || '');
        const orig = btn.textContent;
        btn.textContent = 'COPIED!';
        btn.style.background = '#10b981';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      }
    });
  });
}

/* ==========================================================================
   5. INTERACTIVE PYCORA SSG COMPILER ALTAR
   ========================================================================== */
const ALTAR_TEMPLATES = {
  philosophy: `---
title: "The Medusa Code Manifesto"
author: "Pycora Serpent Architect"
theme: "Gothic Dark"
date: "2026-08-08"
---

# Pycora Static Site Generator

Pycora compiles raw Markdown and YAML Frontmatter into immutable static HTML.

### Why Pycora?
- **Zero JavaScript Runtime:** Lightning fast performance.
- **Pure Python Power:** Standard Jinja2 layout engine.
- **Axcora CSS Styling:** High contrast gothic visual theme.

> "Turn fragile dynamic applications into eternal stone."`,

  docs: `---
title: "Pycora SSG Documentation Guide"
version: "1.0.4"
source: "pycora.axcora.com/docs"
---

# Pycora SSG Quickstart

Install via Pip:
\`\`\`bash
pip install pycora-ssg
\`\`\`

Generate your site:
\`\`\`bash
pycora build --config pycora.json
\`\`\`

All pre-rendered HTML files are emitted directly into \`./dist/\`!`,

  gothic: `---
title: "Shadows of the Serpent Realm"
category: "Articles & Philosophy"
tags: ["python", "ssg", "gothic", "medusa"]
---

# The Medusa Gorgon Architecture

Pycora combines ancient gothic aesthetics with modern Python velocity.

Explore documentation at pycora.axcora.com!`
};

function initPycoraPlayground() {
  const textarea = document.getElementById('playground-editor');
  const previewContainer = document.getElementById('playground-preview');
  const buildBtn = document.getElementById('build-ssg-btn');
  const logBar = document.getElementById('build-log-status');
  const templateBtns = document.querySelectorAll('.template-btn');

  if (!textarea || !previewContainer) return;

  function renderMarkdownToPycoraHTML(markdown) {
    let frontmatter = {};
    let content = markdown;

    if (markdown.startsWith('---')) {
      const parts = markdown.split('---');
      if (parts.length >= 3) {
        const rawFrontmatter = parts[1];
        content = parts.slice(2).join('---').trim();
        
        rawFrontmatter.split('\n').forEach(line => {
          const [key, ...val] = line.split(':');
          if (key && val.length > 0) {
            frontmatter[key.trim()] = val.join(':').replace(/["']/g, '').trim();
          }
        });
      }
    }

    let htmlContent = content
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/ - (.*$)/gim, '<li>$1</li>');

    return `
      <div class="pycora-rendered-site">
        <div class="meta-tag">🐍 Pycora Static Output • ${frontmatter.theme || 'Gothic Theme'} • ${frontmatter.date || 'Aug 2026'}</div>
        ${frontmatter.title ? `<h1>${frontmatter.title}</h1>` : ''}
        ${frontmatter.author ? `<div style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1rem;">By ${frontmatter.author}</div>` : ''}
        <div class="rendered-body">
          <p>${htmlContent}</p>
        </div>
      </div>
    `;
  }

  templateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tplKey = btn.getAttribute('data-template');
      if (ALTAR_TEMPLATES[tplKey]) {
        templateBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        textarea.value = ALTAR_TEMPLATES[tplKey];
        runBuildSimulation();
      }
    });
  });

  function runBuildSimulation() {
    if (logBar) {
      logBar.innerHTML = '⚡ <span style="color:#eab308">Parsing Markdown & YAML Frontmatter...</span>';
    }

    setTimeout(() => {
      if (logBar) {
        logBar.innerHTML = '🐍 <span style="color:#38bdf8">Binding Jinja2 Gothic Templates...</span>';
      }
    }, 150);

    setTimeout(() => {
      const compiledHTML = renderMarkdownToPycoraHTML(textarea.value);
      previewContainer.innerHTML = compiledHTML;

      if (logBar) {
        logBar.innerHTML = '✨ <span style="color:#10b981">Build Succeeded in 0.014s! Generated 1 static page in ./dist/</span>';
      }
    }, 350);
  }

  buildBtn?.addEventListener('click', runBuildSimulation);
  textarea.value = ALTAR_TEMPLATES.philosophy;
  runBuildSimulation();
}

/* ==========================================================================
   6. AMBIENT MP3 PLAYER - FIXED
   ========================================================================== */
let ambientAudio = null;
let isAudioPlaying = false;
let fadeInterval = null;

const MP3_URL = '/pycora.mp3';

function initAmbientAudio() {
  const toggleBtn = document.getElementById('ambient-toggle-btn');
  if (!toggleBtn) return;

  ambientAudio = new Audio();
  ambientAudio.loop = true;
  ambientAudio.volume = 0;
  ambientAudio.preload = 'none';
  ambientAudio.src = MP3_URL;

  let isLoaded = false;
  
  const loadAudio = () => {
    if (isLoaded) return;
    isLoaded = true;
    ambientAudio.load();
    console.log('⏳ Loading:', MP3_URL);
  };

  toggleBtn.addEventListener('mouseenter', loadAudio, { once: true });
  toggleBtn.addEventListener('touchstart', loadAudio, { once: true });

  ambientAudio.addEventListener('canplaythrough', () => {
    console.log('✅ MP3 ready!');
  }, { once: true });

  ambientAudio.addEventListener('error', () => {
    console.error('❌ MP3 404 - cek file /pycora.mp3 ?');
  });

  toggleBtn.addEventListener('click', async () => {
    if (!isLoaded) {
      loadAudio();
      // tunggu dikit biar load dulu
      await new Promise(r => setTimeout(r, 200));
    }
    
    if (!isAudioPlaying) {
      await startAmbientAudio();
      toggleBtn.classList.add('playing');
      const status = toggleBtn.querySelector('.ambient-status');
      if (status) status.textContent = 'AMBIENT: ON';
      const indicator = toggleBtn.querySelector('.ambient-indicator');
      if (indicator) indicator.classList.add('active');
      isAudioPlaying = true;
    } else {
      stopAmbientAudio();
      toggleBtn.classList.remove('playing');
      const status = toggleBtn.querySelector('.ambient-status');
      if (status) status.textContent = 'AMBIENT: OFF';
      const indicator = toggleBtn.querySelector('.ambient-indicator');
      if (indicator) indicator.classList.remove('active');
      isAudioPlaying = false;
    }
  });
}

async function startAmbientAudio() {
  try {
    if (!ambientAudio) return;
    ambientAudio.volume = 0;
    ambientAudio.currentTime = 0;
    
    const playPromise = ambientAudio.play();
    if (playPromise !== undefined) {
      await playPromise;
      let vol = 0;
      if (fadeInterval) clearInterval(fadeInterval);
      
      fadeInterval = setInterval(() => {
        vol += 0.025;
        if (vol >= 0.25) {
          vol = 0.25;
          clearInterval(fadeInterval);
          fadeInterval = null;
        }
        if (ambientAudio) ambientAudio.volume = vol;
      }, 40);
    }
  } catch (err) {
    console.warn('Autoplay blocked / error:', err);
  }
}

function stopAmbientAudio() {
  if (!ambientAudio) return;
  let vol = ambientAudio.volume;
  if (fadeInterval) clearInterval(fadeInterval);
  
  fadeInterval = setInterval(() => {
    vol -= 0.05;
    if (vol <= 0) {
      vol = 0;
      clearInterval(fadeInterval);
      fadeInterval = null;
      ambientAudio.pause();
      ambientAudio.currentTime = 0;
    }
    ambientAudio.volume = vol;
  }, 40);
}

// INIT
document.addEventListener('DOMContentLoaded', initAmbientAudio);

/* ==========================================================================
   7. 3D SMOKE, FOG, AND SERPENT EMBERS CANVAS
   ========================================================================== */
function initGothicCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Embers & Fog Particles
  const particles = [];
  const particleCount = Math.min(Math.floor(width / 20), 80);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.5 + 0.5,
      speedY: -(Math.random() * 0.7 + 0.15),
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.35 ? 'rgba(16, 185, 129, ' : 'rgba(239, 68, 68, '
    });
  }

  // Floating Fog Puffs
  const fogPuffs = [];
  for (let f = 0; f < 8; f++) {
    fogPuffs.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 250 + 150,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.08 + 0.03
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw fog clouds
    fogPuffs.forEach(fog => {
      fog.x += fog.speedX;
      fog.y += fog.speedY;

      if (fog.x < -fog.radius) fog.x = width + fog.radius;
      if (fog.x > width + fog.radius) fog.x = -fog.radius;
      if (fog.y < -fog.radius) fog.y = height + fog.radius;
      if (fog.y > height + fog.radius) fog.y = -fog.radius;

      const grad = ctx.createRadialGradient(fog.x, fog.y, 10, fog.x, fog.y, fog.radius);
      grad.addColorStop(0, `rgba(16, 185, 129, ${fog.opacity})`);
      grad.addColorStop(0.5, `rgba(10, 12, 16, ${fog.opacity * 0.5})`);
      grad.addColorStop(1, 'rgba(5, 6, 8, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(fog.x, fog.y, fog.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw particles / embers
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.opacity + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color.includes('16') ? '#10b981' : '#ef4444';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}
/* ==========================================================================
   8. CINEMATIC VIDEO - PERFORMANCE OPTIMIZED
   ========================================================================== */
function initCinematicVideo() {
  const video = document.getElementById('bg-video');
  const fallback = document.getElementById('bg-fallback');
  const loading = document.getElementById('video-loading-global');
  const scrollIndicator = document.getElementById('scroll-indicator');
  
  if (!video) return;
  
  // Tampilin fallback image dulu (0ms load)
  if (fallback) {
    fallback.classList.add('show');
  }
  
  // Load video cuma pas user scroll ke hero section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && video.dataset.loaded !== 'true') {
        video.dataset.loaded = 'true';
        video.preload = 'metadata';
        video.load();
        
        video.addEventListener('canplaythrough', () => {
          video.classList.add('loaded');
          if (loading) loading.style.display = 'none';
          if (fallback) fallback.classList.remove('show');
          video.play().catch(() => {});
        }, { once: true });
        
        // Timeout fallback
        setTimeout(() => {
          if (loading) loading.style.display = 'none';
          video.classList.add('loaded');
          if (fallback) fallback.classList.remove('show');
        }, 3000);
        
        observer.unobserve(video);
      }
    });
  }, { rootMargin: '200px' });
  
  observer.observe(video);
  
  // Scroll indicator
  if (scrollIndicator) {
    let hasScrolled = false;
    window.addEventListener('scroll', () => {
      if (!hasScrolled && window.scrollY > 100) {
        hasScrolled = true;
        scrollIndicator.classList.add('hidden');
      }
    }, { passive: true });
    
    scrollIndicator.addEventListener('click', () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   9. PERFORMANCE THROTTLE & OPTIMIZATION UTILITIES
   ========================================================================== */

/**
 * Throttle - Batasi eksekusi fungsi (misal: scroll, resize)
 * @param {Function} fn - Fungsi yang mau di-throttle
 * @param {number} delay - Delay dalam milidetik (default: 250ms)
 * @returns {Function} - Fungsi yang sudah di-throttle
 */
function throttle(fn, delay = 250) {
  let lastCall = 0;
  let timeoutId = null;
  
  return function(...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCall);
    
    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCall = now;
      fn.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        timeoutId = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

/**
 * Debounce - Tunggu sampai user berhenti interaksi
 * @param {Function} fn - Fungsi yang mau di-debounce
 * @param {number} delay - Delay dalam milidetik (default: 300ms)
 * @returns {Function} - Fungsi yang sudah di-debounce
 */
function debounce(fn, delay = 300) {
  let timeoutId = null;
  
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * requestIdleCallback wrapper - Jalankan fungsi saat idle
 * @param {Function} fn - Fungsi yang mau dijalankan
 * @param {Object} options - Opsi { timeout: 2000 }
 */
function runWhenIdle(fn, options = { timeout: 2000 }) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(fn, options);
  } else {
    setTimeout(fn, 0);
  }
}

/**
 * RAF Throttle - Batasi eksekusi ke requestAnimationFrame
 * @param {Function} fn - Fungsi yang mau di-throttle
 * @returns {Function} - Fungsi yang di-throttle ke RAF
 */
function rafThrottle(fn) {
  let rafId = null;
  
  return function(...args) {
    if (rafId) return;
    
    rafId = requestAnimationFrame(() => {
      fn.apply(this, args);
      rafId = null;
    });
  };
}

/* ==========================================================================
   10. APPLY THROTTLE TO EXISTING FUNCTIONS
   ========================================================================== */

// Throttle untuk 3D Parallax (biar smooth & ringan)
const originalInit3D = init3DParallax;
init3DParallax = function() {
  const medusaWrapper = document.getElementById('floating-medusa-3d');
  if (!medusaWrapper) return;

  // Pake throttle biar gak terlalu sering update
  const handleMouseMove = throttle((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 35;
    const moveY = (clientY - centerY) / 35;
    const rotateX = (clientY - centerY) / -45;
    const rotateY = (clientX - centerX) / 45;

    medusaWrapper.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, 16); // ~60fps

  document.addEventListener('mousemove', handleMouseMove);
};

// Debounce untuk resize canvas (biar gak berat)
const originalResize = window.addEventListener;
window.addEventListener = function(event, listener, options) {
  if (event === 'resize') {
    // Bungkus listener dengan debounce
    const debouncedListener = debounce(listener, 250);
    originalResize.call(window, event, debouncedListener, options);
  } else {
    originalResize.call(window, event, listener, options);
  }
};

// Throttle untuk scroll event (header)
const originalScroll = window.addEventListener;
window.addEventListener = function(event, listener, options) {
  if (event === 'scroll') {
    const throttledListener = throttle(listener, 100);
    originalScroll.call(window, event, throttledListener, options);
  } else {
    originalScroll.call(window, event, listener, options);
  }
};

// RAF Throttle untuk Canvas render (biar tetap 60fps)
const originalCanvas = initGothicCanvas;
initGothicCanvas = function() {
  // Panggil fungsi asli
  originalCanvas.call(this);
  
  // Override render loop dengan RAF throttle
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  
  // Throttle update biar gak terlalu berat
  const throttledUpdate = rafThrottle(() => {
    // Canvas udah pake requestAnimationFrame, jadi gak perlu tambahan
  });
  
  // Panggil sekali
  throttledUpdate();
};

/* ==========================================================================
   11. PERFORMANCE MONITOR (OPSIONAL - BUAT DEBUG)
   ========================================================================== */

/**
 * Performance monitor sederhana
 * Bisa diaktifkan dengan flag debug
 */
const PERFORMANCE_DEBUG = false; // Set true buat liat FPS

if (PERFORMANCE_DEBUG) {
  let fps = 0;
  let lastFpsUpdate = performance.now();
  let frameCount = 0;

  function monitorFPS() {
    frameCount++;
    const now = performance.now();
    if (now - lastFpsUpdate >= 1000) {
      console.log(`🎯 FPS: ${frameCount}`);
      frameCount = 0;
      lastFpsUpdate = now;
    }
    requestAnimationFrame(monitorFPS);
  }
  
  // Jalankan monitor pas idle
  runWhenIdle(() => {
    monitorFPS();
  });
}

/* ==========================================================================
   12. MEMORY CLEANUP - HAPUS LISTENER SAAT UNLOAD
   ========================================================================== */

window.addEventListener('beforeunload', () => {
  // Cleanup audio
  if (ambientAudio) {
    ambientAudio.pause();
    ambientAudio.src = '';
    ambientAudio = null;
  }
  
  // Cleanup video
  const video = document.getElementById('bg-video');
  if (video) {
    video.pause();
    video.src = '';
    video.load();
  }
  
  // Cleanup canvas
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  console.log('🧹 Memory cleaned up');
});

console.log('⚡ Performance utilities loaded!');

/* ==========================================================================
   11. VERSION VIDEOS - LAZY LOAD (TERPISAH)
   ========================================================================== */
function initVersionVideos() {
  const videos = document.querySelectorAll('.version-video iframe');
  
  if (!videos.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        const src = iframe.getAttribute('data-src');
        
        if (src && !iframe.getAttribute('src')) {
          iframe.setAttribute('src', src);
          console.log('🎬 Version video loaded!');
        }
        
        observer.unobserve(iframe);
      }
    });
  }, { rootMargin: '200px' });
  
  videos.forEach(iframe => {
    // Simpan src asli ke data-src
    const originalSrc = iframe.getAttribute('src');
    if (originalSrc) {
      iframe.setAttribute('data-src', originalSrc);
      iframe.removeAttribute('src');
      observer.observe(iframe);
    }
  });
}

// Panggil di DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... semua init lain
  initVersionVideos(); // <-- Tambahkan
});

// PLAYGROUND - PYCORA NYIBLORONG + MEDUSA - ANTI BOCOR v2.4.1
const PLAYGROUND_TEMPLATES = {
  nyiblorong: "---\ntitle: Nyiblorong - First Mantra\nlayout: post.html\ntags: [nyiblorong, classic]\n---\n\n# Nyiblorong Classic\n\nLike early Jekyll.\n\n- content/posts/ = Markdown\n- templates/ = Jinja2 base.html\n- static/ = css/js\n- output/ = frozen HTML\n\nRun: python ssg.py\n",
  medusa: "---\ntitle: Medusa - PAX + Jinja Fix\nlayout: nyiblorong/landing.pax\ntheme: gothic\n---\n\n# Medusa PAX\n\nEvolved curse. Like Eleventy WebC but Python.\n\nssg.py v2.4.1 fix:\n- PAX loader.pax >.html priority\n- [:3] becomes | limit(3)\n- [1:3] becomes | slice(1,3)\n- Axcora CSS gothic\n\npython ssg.py\n",
  eleventy: "---\ntitle: 11ty Collections\nlayout: blog.html\npagination:\n data: collections.posts\n size: 5\n---\n\n# 11ty Collections in Python\n\nInspired by 11ty, done in Pycora.\n\nTemplate:\nfor post in collections.posts limit 3\n h2 post.title\n\nPycora supports:\n- collections.posts\n- limit filter and slice\n- pagination\n- PAX layouts\n",
  jekyll: "---\ntitle: Jekyll Style\nlayout: post\n---\n\n# Jekyll Spirit, Python Soul\n\nJekyll: Ruby + Liquid\nPycora: Python + Jinja2\n\nSame frontmatter:\ntitle: Hello World\nlayout: post\n\nBut Python:\npython ssg.py -> output/\n"
};

function initPlayground() {
  const editor = document.getElementById('playground-editor');
  const preview = document.getElementById('playground-preview');
  const btns = document.querySelectorAll('.template-btn');
  const status = document.getElementById('preview-status');
  const stats = document.getElementById('preview-stats');
  const buildBtn = document.getElementById('build-ssg-btn');
  if (!editor ||!preview) return;

  function md2html(md) {
    let t = md.replace(/^---[\s\S]*?---\n/, '');
    t = t.replace(/^# (.*)$/gm, '<h1 style="color:#10b981">$1</h1>')
        .replace(/^## (.*)$/gm, '<h2 style="color:#f8fafc">$1</h2>')
        .replace(/\n- (.*)/g, '<div style="color:#cbd5e1">- $1</div>')
        .replace(/\n\n/g, '<br><br>');
    return '<div style="color:#cbd5e1;line-height:1.7">' + t + '</div>';
  }

  function load(k) {
    const c = PLAYGROUND_TEMPLATES[k] || '';
    editor.value = c;
    preview.innerHTML = md2html(c) + '<div style="margin-top:1rem;color:#64748b;font-size:0.75rem;border-top:1px solid #1e293b;padding-top:0.5rem">🗿 ' + c.length + ' chars • Frozen stone • ' + k + '</div>';
    if (status) status.textContent = 'COMPILED: ' + k.toUpperCase();
    if (stats) stats.textContent = (Math.random()*0.02+0.005).toFixed(3) + 's • 0 KB';
  }

  btns.forEach(function(b){
    b.addEventListener('click', function(){
      btns.forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');
      load(b.dataset.template);
    });
  });

  editor.addEventListener('input', function(){
    preview.innerHTML = md2html(editor.value);
    if (status) status.textContent = 'TYPING...';
    clearTimeout(window._t);
    window._t = setTimeout(function(){ if(status) status.textContent='COMPILED'; }, 400);
  });

  if (buildBtn) {
    buildBtn.addEventListener('click', function(){
      const log = document.getElementById('build-log-status');
      const key = document.querySelector('.template-btn.active').dataset.template;
      if (log) log.innerHTML = '✨ <span style="color:#10b981">Build OK ' + (Math.random()*0.02+0.01).toFixed(3) + 's • ' + key + ' -> output/index.html • Medusa v2.4.1 PAX FIX</span>';
    });
  }

  const first = document.querySelector('.template-btn.active');
  if (first) load(first.dataset.template);
}

document.addEventListener('DOMContentLoaded', initPlayground);