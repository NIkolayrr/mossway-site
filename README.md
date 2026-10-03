# Mossway Site

The Mossway website is a Next.js App Router application. Routes live in `src/app`, reusable UI lives in `src/components`, and the home, privacy, and terms pages are prerendered as static HTML.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Node.js Production

```bash
npm run build
npm run start
```

This serves the prerendered pages with Next.js and requires a Node.js host.

## GitHub Pages

```bash
npm run build:pages
```

This creates a static export in `out/`. After pushes to `main`, the GitHub Actions workflow commits that directory to the `gh-pages` branch.

In the repository settings, configure **Pages > Build and deployment** to deploy from the `gh-pages` branch and the `/ (root)` directory.

## Content and SEO

- `src/lib/site.ts` is the source of truth for the production domain, app description, and verified App Store / Google Play URLs.
- Every page has its own title, description, canonical URL, and social metadata. The home page includes Organization, WebSite, and MobileApplication JSON-LD, without invented reviews or ratings.
- `src/app/robots.ts` and `src/app/sitemap.ts` produce crawlable files in both hosting modes. Update the sitemap when adding public pages.
- App artwork and October 2026 screenshots are optimized WebP files in `public/images`. The social preview is a 1200 × 630 JPEG. The app's Cinzel font is hosted locally; its license is in `public/fonts`.
- Navigation, store links, and native FAQ disclosures work without JavaScript. Respect reduced motion and preserve visible keyboard focus when changing styles.

After publishing, submit `https://mossway.site/sitemap.xml` in the domain's Google Search Console property and inspect the home page for indexing. Search visibility depends on crawling and indexing; metadata alone does not guarantee rankings.
