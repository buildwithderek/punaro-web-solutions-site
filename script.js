/* ========== MENU OVERLAY ========== */
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
});

// Close menu when a link is clicked
menuOverlay.querySelectorAll('.menu-overlay__link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});


/* ========== HERO LOAD ANIMATION ========== */
document.addEventListener('DOMContentLoaded', () => {
  // Trigger hero staggered animations
  setTimeout(() => document.body.classList.add('loaded'), 100);

  // Feature word reveal (after hero loads)
  setTimeout(() => {
    document.querySelectorAll('.hero__feature').forEach((el, i) => {
      const delay = parseInt(el.dataset.revealDelay || 0, 10);
      setTimeout(() => el.classList.add('revealed'), delay);
    });
  }, 1400);
});


/* ========== SCROLL ANIMATIONS (Intersection Observer) ========== */
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  scrollObserver.observe(el);
});


/* ========== ANIMATED LINES ========== */
const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      lineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-line').forEach(el => {
  lineObserver.observe(el);
});


/* ========== FAQ ACCORDION ========== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const wasActive = item.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Toggle the clicked item
    if (!wasActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Open the first FAQ item by default
const firstFaq = document.querySelector('.faq-item.active');
if (firstFaq) {
  const firstAnswer = firstFaq.querySelector('.faq-answer');
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
}


/* ========== SMOOTH SCROLL ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ========== NAV SCROLL EFFECT ========== */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
}, { passive: true });


/* ========== CONTACT FORM ========== */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.contact__submit');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'MESSAGE SENT!';
    submitBtn.disabled = true;
    submitBtn.style.background = '#22c55e';

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}
