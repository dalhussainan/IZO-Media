# IZO Media — Website

Source code for **izo-media.com** — a creative video & photography studio based in Kuwait.

## Stack

- **Static HTML** (no build step required)
- **Decap CMS** for content management at `/admin`
- **Netlify** for hosting + Identity for admin login
- **GitHub** for version control

## Pages

- `index.html` — Homepage
- `about.html` — About page
- `admin/` — Decap CMS admin panel (login at `/admin`)

## Content folders

- `projects/` — Portfolio projects (one .md file per project, managed via CMS)
- `posts/` — Journal/blog posts
- `_settings/` — Site-wide settings (showreel URL, stats, contact info)
- `assets/uploads/` — Images uploaded via CMS

## Local development

Just open `index.html` in a browser. No build step.

## Adding a new project

1. Go to `https://izo-media.com/admin`
2. Login with your GitHub or email
3. Click "Projects" → "+ New"
4. Fill in the form, upload images
5. Click "Publish" — site updates within ~30 seconds

## Owner

**Dhari Alhesinan** — Founder, IZO Media
- 📞 96690879
- 📧 hello@izo-media.com
