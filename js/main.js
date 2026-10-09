/**
 * Studio Ferani Planejados - Premium JavaScript
 * Handles all interactivity, animations, and functionality
 */

(function() {
  'use strict';

  // =========================================
  // DOM Elements
  // =========================================
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const progressBar = document.getElementById('progressBar');

  // =========================================
  // WhatsApp Configuration
  // =========================================
  const WhatsAppConfig = {
    phoneNumber: '5500000000000',
    message: 'Olá! Conheci o site do Studio Ferani Planejados e gostaria de conversar sobre um projeto de móveis planejados.'
  };

  // =========================================
  // Mobile Menu Toggle
  // =========================================
  function toggleMenu() {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
    const isExpanded = navToggle.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    }
  });

  // Close menu when clicking a nav link (mobile)
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // =========================================
  // Sticky Header with Scroll Effect
  // =========================================
  function handleHeaderScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);

  // =========================================
  // Smooth Scroll with Active Link Tracking
  // =========================================
  function smoothScroll(e) {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
      const id = target.getAttribute('href');
      if (id !== '#' && id !== '') {
        const element = document.querySelector(id);
        if (element) {
          e.preventDefault();
          const headerHeight = header.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  }

  // Add smooth scroll to all anchor links
  document.addEventListener('click', function(e) {
    smoothScroll(e);
  });

  // =========================================
  // Scroll Progress Indicator
  // =========================================
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', updateProgress);

  // One entrance, on the hero panel only. The rest of the page stays still.
  function initHeroEntrance() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const panel = document.querySelector('.hero__panel');
    if (!panel) return;

    const styleId = 'hero-entrance';
    if (!document.getElementById(styleId)) {
      const animationStyles = document.createElement('style');
      animationStyles.id = styleId;
      animationStyles.textContent = `
        .hero__panel {
          animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); filter: blur(6px); }
          to { opacity: 1; transform: none; filter: none; }
        }
      `;
      document.head.appendChild(animationStyles);
    }
  }

  // =========================================
  // WhatsApp Button - Dynamic Functionality
  // =========================================
  function setupWhatsAppButton() {
    const buttons = document.querySelectorAll('.button--whatsapp, .whatsapp-float');
    const url = `https://wa.me/${WhatsAppConfig.phoneNumber}?text=${encodeURIComponent(WhatsAppConfig.message)}`;

    buttons.forEach(function(btn) {
      btn.href = url;
    });
  }

  // =========================================
  // Preload Images with Fade-in Effect
  // =========================================
  function preloadImages() {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    images.forEach(function(img) {
      if (img.complete) {
        img.classList.add('loaded');
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0';
        img.addEventListener('load', function() {
          img.classList.add('loaded');
          setTimeout(function() {
            img.style.opacity = '1';
          }, 50);
        });
      }
    });
  }

  // =========================================
  // Initialize on DOM Ready
  // =========================================
  function init() {
    console.log('%c Studio Ferani Planejados ', 'background: #790808; color: #C9A34A; font-size: 14px; padding: 10px; font-family: monospace;');
    console.log('%c Bem-vindo ao nosso site premium ', 'background: #FCFAF7; color: #282522; font-size: 12px; padding: 5px; font-family: monospace;');

    initHeroEntrance();

    // Setup WhatsApp buttons
    setupWhatsAppButton();

    // Preload images
    preloadImages();

    // Update progress on scroll
    window.addEventListener('scroll', updateProgress);
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // =========================================
  // Keyboard Navigation Enhancements
  // =========================================
  document.addEventListener('keydown', function(e) {
    // Close menu with Escape key
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      toggleMenu();
      navToggle.focus();
    }
  });

})();
