# Myaluza Civils (PTY) LTD — Official Website

> **Where Tradition Meets Innovation**

Professional corporate website for **Myaluza Civils (PTY) LTD**, a 100% Black-Owned, BBBEE Level 1 certified civil engineering and general construction company based in KwaZulu-Natal, South Africa.

**Live Site:** [https://myaluza-civils.vercel.app](https://myaluza-civils.vercel.app)

---

## Company Information

| Detail | Value |
|---|---|
| **Company Name** | Myaluza Civils (PTY) LTD |
| **Registration No.** | 2012/210804/07 |
| **Established** | 2012 |
| **Ownership** | 100% Black-Owned |
| **BBBEE Rating** | Level 1 |
| **CIDB Grading** | 5 GB PE (General Building) · 6 CE PE (Civil Engineering) |

### Office Locations

- **Head Office:** 102 Trelawney Road, Fairmade, Pietermaritzburg, 3201
- **Branch:** P17 Inadi Road, Emabovini, Greytown, 3250
- **Branch:** 4 Clarancier House, 184 Clark Road, Glenwood, Durban, 4001

### Contact

- **Phone:** 078 349 2494 / 079 787 0766
- **Fax:** 086 764 1531
- **Email:** admin@myaluzacivils.co.za

---

## Core Services

### Civil Engineering
- Water reticulation — design and installation of piped water supply networks
- Concrete structures — chambers, retaining walls and culverts
- Roads — surfacing, sidewalks, paving, kerbing and channel construction

### General Building
- Construction of new residential and commercial buildings
- Renovations to existing structures — upgrade and refurbishment
- Extensions to existing structures — expanding your footprint

### Owned Plant & Equipment
- 2× TLB 4X4
- 2× Tipper Trucks
- 1× Water Cart
- 1× Excavator
- 1× Grader
- 1× Roller
- 1× Bob Cat

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 7** | Build tool and dev server |
| **CSS3 Custom Properties** | Design system and theming |
| **Framer Motion** | Animations |
| **Vercel** | Deployment and hosting |
| **GitHub** | Version control |

### Design System

The site uses a custom light-theme palette with CSS variables:

| Token | Color | Usage |
|---|---|---|
| `--navy` | `#0D1F3C` | Primary text, headings, nav |
| `--orange` | `#F47920` | CTA buttons, accents, highlights |
| `--orange-hover` | `#E8640A` | Button hover states |
| `--bg-page` | `#F5F7FA` | Page background |
| `--bg-white` | `#FFFFFF` | Card backgrounds |
| `--text-muted` | `#5A6A84` | Supporting text |

**Fonts:** Bebas Neue · Syne · DM Sans (Google Fonts)

---

## Project Structure

```
myaluza-site/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, logos, project photos
│   │   ├── LOGO 1.png
│   │   ├── LOGO 2.png
│   │   ├── LOGO 3.png
│   │   ├── Back.jpg                          # Hero background
│   │   ├── BBBEE-White-Background.png        # BBBEE badge
│   │   ├── Civil Engineering.jpg             # Service photo
│   │   ├── General Building.jpg              # Service photo
│   │   ├── Water Reticulation Network.jpg    # Portfolio
│   │   ├── Road Surfacing & Kerbing.jpg      # Portfolio
│   │   ├── Commercial Building Construction.jpg
│   │   ├── concrete retaining walls and culverts.jpg
│   │   ├── Structural Renovations & Extensions.jpg
│   │   ├── Paving & Sidewalk Projects.jpg
│   │   ├── vision 1.png
│   │   └── targeting.png
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application-specific styles
│   ├── index.css            # Complete design system & styles
│   └── main.jsx             # React entry point
├── index.html               # HTML entry with meta tags & fonts
├── vercel.json              # Vercel deployment configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
git clone https://github.com/colaziest2-ops/Myaluza-Civils.git
cd Myaluza-Civils
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

---

## Deployment

The site is deployed on **Vercel** and auto-deploys from the `main` branch.

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Website Sections

1. **Navigation** — Fixed top nav with mobile hamburger menu
2. **Hero** — Full-width background image with company tagline and CTA buttons
3. **About (Bento Grid)** — Company background, vision, mission, years of experience, BBBEE badge
4. **Impact Stats** — Animated counters for years, offices, projects, ownership
5. **Services** — Civil Engineering, General Building, Industry Registrations
6. **Portfolio Showcase** — Horizontal scroll gallery of completed projects
7. **Partner** — Partnership types and CTA
8. **Intelligence** — Lead generation form to request Company Profile
9. **FAQ Accordion** — Common construction queries with expand/collapse
10. **Contact** — Head office, branches, phone, email, fax, registration details
11. **Footer** — Logo and copyright

---

## SEO & Accessibility

- Semantic HTML5 with ARIA labels and roles
- Open Graph meta tags for social sharing
- Descriptive alt text on all images
- Keyboard-navigable FAQ accordion
- WCAG AA contrast compliance
- Responsive design (mobile, tablet, desktop)

---

## License

© 2025 Myaluza Civils (PTY) LTD. All rights reserved.
