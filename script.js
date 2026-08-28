const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.textContent = open ? 'MENU' : 'CLOSE';
  nav.classList.toggle('open', !open);
});

nav?.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle && (toggle.textContent = 'MENU');
  nav.classList.remove('open');
});

document.querySelector('#year').textContent = new Date().getFullYear();
