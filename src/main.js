// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mobileNav.classList.toggle('hidden');
});

// Simple contact form handler - opens user's email client.
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

// Load projects from projects/projects.json and render into #projectsGrid
async function loadProjects() {
  try {
    const res = await fetch('/projects/projects.json');
    if (!res.ok) throw new Error('Projects not found');
    const projects = await res.json();
    const grid = document.getElementById('projectsGrid');
    const tpl = document.getElementById('projectTemplate');
    projects.forEach(p => {
      const clone = tpl.content.cloneNode(true);
      const img = clone.querySelector('img');
      img.setAttribute('data-src', p.image);
      img.alt = p.title + ' screenshot';
      clone.querySelector('.project-title').textContent = p.title;
      clone.querySelector('.project-desc').textContent = p.description;
      const live = clone.querySelector('.project-live');
      if (p.live) { live.href = p.live; } else { live.style.display = 'none'; }
      const repo = clone.querySelector('.project-repo');
      if (p.repo) { repo.href = p.repo; repo.textContent = 'Repo'; } else { repo.style.display = 'none'; }
      grid.appendChild(clone);
    });

    // lazy-load images
    const lazyImgs = document.querySelectorAll('.lazy-img');
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) img.src = src;
          img.classList.remove('lazy-img');
          observer.unobserve(img);
        }
      });
    });
    lazyImgs.forEach(i => io.observe(i));

  } catch (err) {
    console.warn('Could not load projects.json, leaving hardcoded projects.');
  }
}

loadProjects();
