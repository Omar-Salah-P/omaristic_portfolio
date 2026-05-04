// Custom Cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card, .skill-tag, .filter-tab').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = 'rgba(240,184,112,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'rgba(240,184,112,0.5)';
    });
  });

  // Nav scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

  function closeMenu() {
    mobileMenu.classList.remove('open');
  }
  // close when clicking any link inside menu
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// close when clicking outside menu content
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

  // Form submit
  document.querySelector('.form-submit').addEventListener('click', function() {
    this.textContent = 'Message Sent ✓';
    this.style.background = '#2D0A6B';
    this.style.color = '#F0B870';
    setTimeout(() => {
      this.textContent = 'Send Message →';
      this.style.background = '';
      this.style.color = '';
    }, 3000);
  });