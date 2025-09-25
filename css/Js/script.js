// ===== 1. Smooth Scroll for Navbar Links =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== 2. Hero Section Text Animation =====
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-content');
  heroText.style.opacity = '0';
  heroText.style.transform = 'translateY(30px)';
  setTimeout(() => {
    heroText.style.transition = 'all 1s ease';
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  }, 300);
});

// ===== 3. Fade-in Animation on Scroll =====
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Apply to all sections and cards
document.querySelectorAll('.section, .card, .profile-card, .job-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== 4. Sticky Header Shadow =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== 5. Highlight Active Section in Navbar =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== 6. Apply Button Interaction =====
document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Your application has been submitted successfully!');
  });
});
