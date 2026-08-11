// ============================================
// NAVBAR: fundo sólido ao rolar
// ============================================
const nav = document.getElementById('nav');
function updateNavBg() {
  if (window.scrollY > 40) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
}
updateNavBg();
window.addEventListener('scroll', updateNavBg, { passive: true });

// ============================================
// MENU MOBILE
// ============================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// ACCORDION (FAQ)
// ============================================
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion__item');
    const panel = item.querySelector('.accordion__panel');
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // Fecha os outros itens abertos
    document.querySelectorAll('.accordion__trigger').forEach((t) => {
      if (t !== trigger) {
        t.setAttribute('aria-expanded', 'false');
        t.closest('.accordion__item').querySelector('.accordion__panel').style.maxHeight = null;
      }
    });

    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
  });
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ============================================
// LINHA ORGÂNICA: "cresce" conforme a rolagem
// ============================================
const rootPath = document.getElementById('rootPath');

if (rootPath) {
  const pathLength = rootPath.getTotalLength();
  rootPath.style.strokeDasharray = pathLength;
  rootPath.style.strokeDashoffset = pathLength;

  function updateRootLine() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    rootPath.style.strokeDashoffset = pathLength - pathLength * progress;
  }

  updateRootLine();
  window.addEventListener('scroll', updateRootLine, { passive: true });
  window.addEventListener('resize', updateRootLine);
}
