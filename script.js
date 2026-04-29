/* ================================================================
   CLÍNICA DO RIM – script.js
   Vanilla JS | Sem dependências externas
   ================================================================ */

(function () {
  'use strict';

  /* ── 1. MOBILE MENU ─────────────────────────────────────── */
  const burgerBtn  = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = burgerBtn.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.hidden = !isOpen;
    });

    // Close menu when any link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !mobileMenu.hidden) {
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
        burgerBtn.focus();
      }
    });
  }

  /* ── 2. NAVBAR SHADOW ON SCROLL ─────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,.12)'
        : '0 2px 8px rgba(0,0,0,.08)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 3. SCROLL REVEAL ANIMATION ─────────────────────────── */
  // Only animate if user hasn't requested reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const revealTargets = document.querySelectorAll(
      '.stat-card, .servico-card, .dep-card, .medico__card, .sobre__text, .sobre__stats'
    );

    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger siblings within the same parent
            const siblings = Array.from(entry.target.parentElement.children);
            const delay = siblings.indexOf(entry.target) * 80;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach(el => observer.observe(el));
  }

  /* ── 4. WHATSAPP FLOAT – Show/hide tooltip on mobile tap ── */
  const waFloat = document.getElementById('whatsapp-float');
  if (waFloat) {
    // On touch devices show tooltip briefly before navigating
    waFloat.addEventListener('touchstart', () => {
      waFloat.classList.add('touched');
      setTimeout(() => waFloat.classList.remove('touched'), 1500);
    }, { passive: true });
  }

  /* ── 5. SMOOTH SCROLL for anchor links (Safari fallback) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── 6. ACTIVE NAV LINK on scroll ───────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.navbar__links a[href^="#"]');

  if (sections.length && navLinks.length) {
    const setActive = () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 90;
        if (window.scrollY >= top) current = sec.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  /* ── 7. YEAR in footer (future-proof) ───────────────────── */
  const yearEl = document.querySelector('.footer__bottom p');
  if (yearEl) {
    yearEl.innerHTML = yearEl.innerHTML.replace(
      /\d{4}/,
      new Date().getFullYear()
    );
  }

})();
