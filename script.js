// ══════════════════════════════════════════
// ATLAS SIGNALS — Site Scripts
// ══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── Navbar scroll effect ──
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ── Scroll fade-in animations ──
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => observer.observe(el));
  }

  // ── Disclaimer Modal (first visit) ──
  const disclaimerModal = document.getElementById('disclaimerModal');
  const disclaimerAccept = document.getElementById('disclaimerAccept');
  if (disclaimerModal && disclaimerAccept) {
    if (localStorage.getItem('atlas_disclaimer_accepted')) {
      disclaimerModal.classList.add('hidden');
    }
    disclaimerAccept.addEventListener('click', () => {
      localStorage.setItem('atlas_disclaimer_accepted', 'true');
      disclaimerModal.classList.add('hidden');
    });
  }

  // ── Cookie/GDPR Banner ──
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieManage = document.getElementById('cookieManage');
  if (cookieBanner) {
    if (localStorage.getItem('atlas_cookies_accepted')) {
      cookieBanner.classList.add('hidden');
    }
    if (cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        localStorage.setItem('atlas_cookies_accepted', 'true');
        cookieBanner.classList.add('hidden');
      });
    }
    if (cookieManage) {
      cookieManage.addEventListener('click', () => {
        localStorage.setItem('atlas_cookies_accepted', 'minimal');
        cookieBanner.classList.add('hidden');
      });
    }
  }

  // ── Active nav link based on current page ──
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/') ||
        (currentPath.includes(href) && href !== '/' && !link.classList.contains('nav-cta'))) {
      link.classList.add('active');
    }
  });
});