# Portfolio (improved)

This repository contains a responsive single-page portfolio scaffold using Tailwind via CDN. Improvements added:

- SEO meta tags and social preview tags
- Favicon (assets/favicon.svg)
- Projects are now dynamic: stored in `projects/projects.json` and rendered on load
- Lazy-loading for project images
- Accessibility tweaks (skip link, aria attributes)

Added sample projects (see `projects/projects.json`) — replace or update those entries with your real projects and links.

Files added/updated:
- `index.html` — updated
- `src/main.js` — updated (dynamic projects)
- `projects/projects.json` — sample project entries
- `assets/favicon.svg` — simple SVG favicon

Next steps you can ask me to do:
- Replace placeholder project images with real screenshots in `assets/`.
- Add live links and repo links for each project.
- Set up a Tailwind build pipeline and GitHub Actions to produce an optimized CSS and deploy automatically to GitHub Pages.
- Connect a custom domain or setup Pages (I can enable Pages or add an Actions workflow).

To preview locally:
- git clone
- open `index.html` or run a static server (eg `python -m http.server`)

Want me to now:
- scan your other GitHub repos (I can search your account) and pull project info automatically into `projects/projects.json`?
- set up a GitHub Actions workflow to build/publish?

Tell me which of those you want next.
