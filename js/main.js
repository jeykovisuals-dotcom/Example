/* ============================================================
   MAIN.JS — Jeyko Visuals Design System
   Microinteractions for the landing page
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Smooth scroll for anchor links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Card hover elevation (already in CSS, JS adds focus) ── */
  document.querySelectorAll('.how-section__card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.willChange = 'transform';
    });
    card.addEventListener('mouseleave', () => {
      card.style.willChange = '';
    });
  });

  /* ── Nav link active state on scroll ──────────────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.site-nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => sectionObserver.observe(section));

  /* ── Keyboard navigation for carousel ─────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      document.getElementById('prevBtn')?.click();
    } else if (e.key === 'ArrowRight') {
      document.getElementById('nextBtn')?.click();
    }
  });

  console.log('%c✦ Jeyko Visuals — Design For Developers', 
    'color: #4A6CF7; font-weight: bold; font-size: 13px; font-family: Poppins, sans-serif;');
});
