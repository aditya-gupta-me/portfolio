# Migration Notes: React+Vite → Next.js App Router

## Language
- **Plain JavaScript** (`.jsx` / `.js`) — no TypeScript anywhere in the project.

## Virtual Pages → Real Routes

The SPA uses `useState("about")` in `App.jsx` with a `switch` statement to conditionally render one of 7 section components. Each becomes a real route:

| Tab Key       | Component       | Proposed Route   | Sitemap Priority |
|---------------|-----------------|------------------|------------------|
| `about`       | `About.jsx`     | `/` (homepage)   | 1.0              |
| `education`   | `Education.jsx` | `/education`     | 0.6              |
| `projects`    | `Projects.jsx`  | `/projects`      | 0.9              |
| `skills`      | `Skills.jsx`    | `/skills`        | 0.7              |
| `experience`  | `Experience.jsx`| `/experience`    | 0.7              |
| `resume`      | `Resume.jsx`    | `/resume`        | 0.5 (new)        |
| `contact`     | `Contact.jsx`   | `/contact`       | 0.8              |

**Dead code:** `Display.jsx` is never imported — will not be migrated.

## Component Inventory

| Component      | Stateful? | Browser APIs                     | Needs `'use client'`? |
|----------------|-----------|----------------------------------|-----------------------|
| `App.jsx`      | Yes       | `localStorage`, `document.body`  | N/A (replaced by layout) |
| `Sidebar.jsx`  | No (props)| None                             | Yes (will use `usePathname`) |
| `MobileNav.jsx`| No (props)| `window.scrollTo`                | Yes |
| `About.jsx`    | No        | `import.meta.env`                | No (env → build-time) |
| `Education.jsx`| No        | None                             | No |
| `Projects.jsx` | No        | None                             | No |
| `Skills.jsx`   | No        | None                             | No |
| `Experience.jsx`| No       | None                             | No |
| `Resume.jsx`   | No        | `import.meta.env`                | Yes (iframe) |
| `Contact.jsx`  | No        | None                             | No |

## Styling

### Tailwind Config (`tailwind.config.js`)
- **Content**: `["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]` → needs update
- **Dark mode**: `"class"` strategy (toggles `body.dark` class)
- **Custom colors**: `primary` scale (50–950, purple-based)
- **Font family**: `"Neue Haas Grotesk"` with system fallbacks
- **Background**: `light: rgba(250, 249, 247, 1)`, `dark: #0f0f0f`
- **No plugins**

### Global CSS (`src/index.css`, 318 lines)
- `@font-face` for Neue Haas Grotesk Medium (local `.ttf`)
- Body base styles + `body.dark` overrides
- Tab button animations (`.tab-button`, `.tab-button.active`, scale transforms)
- Zigzag underline effect (SVG background on `::after`)
- Tab content fade-in animation (`@keyframes fadeIn`)
- Skill card hover, theme toggle rotate, project thumbnail scale
- Dark mode overrides for: skill cards, project cards, inputs, form inputs, sidebar, mobile nav, profile picture, resume button, coding icons
- `App.css` — only `#root { min-height: 100vh; }` (trivial, folded into globals)

### Fonts
- **Neue Haas Grotesk Medium** — loaded from `fonts/NeueHaasGrotesk-Medium.ttf` via `@font-face`
- No Google Fonts `<link>` tags
- Will migrate to `next/font/local`

## Icon Inventory

All icons are **inline SVG markup** pasted directly into components. Sources include Boxicons, SimpleIcons, and Phosphor Icons. They are NOT from any npm package.

### Sidebar.jsx / MobileNav.jsx
- Sun icon (light mode toggle) — custom SVG path
- Moon icon (dark mode toggle) — custom SVG path

### About.jsx
- Download icon (in "Download Resume" button) — Boxicons `bx-cloud-download` variant

### Projects.jsx (repeated per project)
- GitHub logo — Phosphor Icons `GithubLogo` (viewBox 0 0 256 256)
- Globe/link icon — Phosphor Icons `Globe` (viewBox 0 0 256 256)

### Skills.jsx
- Java logo — Boxicons `bxl-java`
- C++ logo — Boxicons `bxl-c-plus-plus`
- Python logo — Boxicons `bxl-python`
- JavaScript logo — Boxicons `bxl-javascript`
- Shell Script logo — custom SVG
- React logo — SimpleIcons `react`
- React Native — custom SVG (looks like Vercel triangle, possibly wrong icon)
- Tailwind CSS logo — Boxicons `bxl-tailwind-css`
- Node.js logo — Boxicons `bxl-nodejs`
- Express.js logo — custom SVG
- PostgreSQL logo — Boxicons `bxl-postgresql`
- MySQL logo — SimpleIcons `mysql`
- MongoDB logo — Boxicons `bxl-mongodb`
- GitHub logo — SimpleIcons `github`
- Docker logo — Boxicons `bxl-docker`
- AWS logo — Boxicons `bxl-aws`
- Postman — SVG file from `public/postman-svgrepo-com.svg` (loaded as `<img>`)
- VS Code logo — SimpleIcons `visualstudiocode`
- React logo again (in Certifications) — same SVG as above
- AWS logo again (in Certifications) — same SVG as above

### Contact.jsx
- Send/plane icon (in heading) — Boxicons `bxs-send` variant
- Gmail/email icon — SimpleIcons `gmail`
- LinkedIn logo — Boxicons `bxl-linkedin-square`
- X (Twitter) logo — SimpleIcons `x`
- GitHub logo — SimpleIcons `github` (same as Projects)
- LeetCode logo — custom SVG
- Stack Overflow logo — SimpleIcons `stackoverflow`
- CodeChef icon — external `<img>` from `img.icons8.com`
- Codeforces icon — external `<img>` from `img.icons8.com`

### Resume.jsx
- Document icon (x2) — Boxicons `bxs-file-doc` variant

## index.html Porting Checklist

From the Vite `index.html`:
- [x] `<meta charset="UTF-8">`
- [x] `<meta name="viewport">` — Next.js adds automatically
- [x] `<title>` → `metadata.title` in layout
- [x] `<meta name="description">` → `metadata.description`
- [x] `<meta name="keywords">` → `metadata.keywords`
- [x] `<meta name="author">` → `metadata.authors`
- [x] `<meta name="robots">` → `metadata.robots`
- [x] `<link rel="canonical">` → `metadata.alternates.canonical`
- [x] Open Graph tags → `metadata.openGraph`
- [x] Twitter Card tags → `metadata.twitter`
- [x] Favicon → `public/favicon.ico` (auto-detected by Next.js)
- [x] JSON-LD structured data → `<script>` in homepage `page.jsx`
- [x] No Google Fonts links to port
- [x] No third-party scripts (analytics is via npm package)

## Environment Variables

| Vite Variable | Next.js Equivalent | Used In |
|---|---|---|
| `VITE_RESUME_FOLDER_URL` | `NEXT_PUBLIC_RESUME_FOLDER_URL` | About.jsx, Resume.jsx |
| `VITE_RESUME_FILE_ID` | `NEXT_PUBLIC_RESUME_FILE_ID` | Resume.jsx |

## Existing SEO Assets

### sitemap.xml
- 6 URLs, all using `/#section` hash fragments
- `lastmod`: 2025-10-05 for all
- `changefreq`: monthly (most), yearly (education, contact)
- `priority`: 1.0 (home), 0.9 (projects), 0.8 (about, contact), 0.7 (skills, experience), 0.6 (education)

### robots.txt
- `User-agent: *`, `Allow: /`
- `Disallow: /assets/`, `Disallow: /fonts/`
- Sitemap reference

## Image Files (in `public/`)

| File | Used In | Alt Text |
|---|---|---|
| `PP.jpg` | About (profile picture) | "Aditya Gupta" |
| `Code_Editor.png` | Projects (CodeHat) | "CodeHat Preview" |
| `Screen_1.png` | Projects (HeyDoc!) | "HeyDoc! Preview" |
| `transform_crypt.png` | Projects (Transform Crypt) | "transform-crypt" |
| `sumnote_ai.png` | Projects (Sumnote.ai) | Full descriptive alt ✓ |
| `homepage.gif` | Not used in any component! | N/A |
| `postman-svgrepo-com.svg` | Skills (Postman) | `alt=""` ⚠️ needs fix |
| `favicon.ico` | index.html (favicon) | N/A |

### Missing alt text flags
- `postman-svgrepo-com.svg` has `alt=""` — should be `alt="Postman"`

## Surprises / Notes

1. **`homepage.gif`** in `public/` is unused by any component — will keep but not reference
2. **External image dependencies**: CodeChef and Codeforces icons load from `img.icons8.com` — these are external URLs that could break. Will keep as-is for now.
3. **Favicon path oddity**: `index.html` has `href="public/favicon.ico"` which is incorrect for Vite (should be `/favicon.ico`). Next.js auto-detects `favicon.ico` in `app/` or `public/`.
4. **No `vercel.json`** — no custom redirects to port
5. **No `.env` files committed** — env vars managed via Vercel dashboard
6. **React Native icon** in Skills seems visually wrong (shows a triangle/Vercel-like shape, not the React atom) — preserving as-is per user instruction
7. **`className`ification typo** in Projects.jsx line 89: "classNameification" — this is a JSX artifact where "classification" got its "class" replaced. Will fix in migration.
