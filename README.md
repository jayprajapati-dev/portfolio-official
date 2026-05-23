# Jay Prajapati (JP) — Personal Portfolio

> Tech Builder & Cloud Enthusiast from Gujarat, India.
> My Evolution: Diverse Web Tech → Automated SaaS Tools → Cloud Architecture.

A production-ready, dark-themed personal portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. Features an interactive particle background, glassmorphism UI, numbered sections, and full SEO optimization.

**Live Site** → [jayprajapati-official.vercel.app](https://jayprajapati-official.vercel.app)

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **About Me** | Bio, evolution timeline, stats badge, terminal JSON card |
| 02 | **Skills & Tools** | 6 category grids — Frontend, Backend, Database, Tools, Learning, Other |
| 03 | **Featured Projects** | 6 project cards with tech badges + 8 other builds grid |
| 04 | **Currently Learning** | Roadmap with Lucide status icons (Completed / In Progress / Planned) |
| 05 | **Experience & Education** | Timeline with diploma info and self-taught developer highlights |
| 06 | **Get In Touch** | Two-column layout — email + socials + "Open to Work" badge + contact form |

---

## Tech Stack

**Framework**
`Next.js 16` `React 19` `TypeScript` `Tailwind CSS 4`

**Animation & UI**
`Framer Motion` `Lucide React` `Glassmorphism` `Custom Particle Canvas`

**SEO & Performance**
`JSON-LD Structured Data` `Open Graph` `Twitter Cards` `Sitemap.xml` `Robots.txt` `Canonical URLs` `Google Search Console`

---

## Features

- **Premium dark-themed UI** — Minimalist design with deep slate palette and emerald/cyan accents
- **Interactive particle background** — Canvas-based network that responds to cursor movement
- **Numbered sections** — Clean, scannable layout inspired by brittanychiang.com
- **Glassmorphism cards** — Frosted-glass aesthetic with backdrop blur and subtle emerald borders
- **Zero placeholder content** — Every link, project, and credential is real and verifiable
- **JP monogram logo** — Custom SVG favicon and navbar logo with bold J + P letterforms
- **Contact form** — Name, Email, Message fields with send animation + email copy-to-clipboard
- **"Open to Work" badge** — Animated availability indicator in the Contact section
- **Full SEO architecture** — Meta tags, hreflang, structured data (Person, WebSite, ProfilePage), sitemap
- **Google Search Console** — Verified with meta tag + HTML verification file
- **Fast load times** — Static generation, font preconnect, DNS prefetch, optimized assets

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, JSON-LD, font preloads
│   ├── page.tsx            # Main page — composes all sections
│   ├── globals.css         # Tailwind config, glass utilities, animations
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt with sitemap reference
│   └── api/route.ts        # API route (placeholder)
│
├── components/
│   ├── portfolio/
│   │   ├── Navbar.tsx           # Sticky glass navbar + JP logo + mobile menu
│   │   ├── HeroSection.tsx      # Hero with gradient text + CTA buttons
│   │   ├── AboutSection.tsx     # Bio + stats + terminal JSON card
│   │   ├── SkillsSection.tsx    # 6 badge-grid categories
│   │   ├── ProjectsSection.tsx  # 6 featured + 8 other builds
│   │   ├── LearningSection.tsx  # Roadmap with Lucide status icons
│   │   ├── ExperienceSection.tsx# Education + self-taught timeline
│   │   ├── ContactSection.tsx   # Email + socials + contact form
│   │   ├── ParticleBackground.tsx # Interactive canvas particle network
│   │   └── Footer.tsx           # Minimal footer with social icons
│   └── ui/                      # shadcn/ui primitives
│
└── public/
    ├── favicon.svg              # JP monogram (emerald on dark)
    └── google6263e3567b4789ad.html  # GSC verification
```

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/jayprajapati-dev/portfolio.git
cd portfolio

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
```

The site runs on `http://localhost:3000`.

### Build for Production

```bash
bun run build
bun run start
```

---

## SEO Configuration

| Feature | Details |
|---------|---------|
| **Site URL** | `https://jayprajapati-official.vercel.app` |
| **Sitemap** | `/sitemap.xml` — auto-generated with all sections |
| **Robots.txt** | Allows all crawlers, references sitemap |
| **Google Verification** | Meta tag + HTML file |
| **Structured Data** | Person, WebSite, ProfilePage (JSON-LD) |
| **Open Graph** | Title, description, image, locale |
| **Canonical** | Self-referencing canonical URL |
| **Hreflang** | `x-default`, `en`, `en-IN`, `en-US`, `en-GB` |

---

## Links

- **Portfolio** — [jayprajapati-official.vercel.app](https://jayprajapati-official.vercel.app)
- **GitHub** — [github.com/jayprajapati-dev](https://github.com/jayprajapati-dev)
- **LinkedIn** — [linkedin.com/in/jayprajapati171120](https://www.linkedin.com/in/jayprajapati171120/)

---

Designed & built by **Jay Prajapati**.
