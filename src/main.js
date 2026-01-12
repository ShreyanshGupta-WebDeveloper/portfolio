// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Simple contact form handler - this avoids needing a backend. It opens user's email client.
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Contact from ${name} (${email})`);
  const body = encodeURIComponent(message);
  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
});
