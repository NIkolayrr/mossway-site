# Mossway Site

The Mossway website is a Next.js App Router application. Routes live in `src/app`, reusable UI lives in `src/components`, and the home, privacy, and terms pages are rendered by the Next.js server.

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

This keeps request-time server rendering and requires a Next.js-compatible Node.js host.

## GitHub Pages

```bash
npm run build:pages
```

This creates a static export in `out/`. After pushes to `main`, the GitHub Actions workflow commits that directory to the `gh-pages` branch.

In the repository settings, configure **Pages > Build and deployment** to deploy from the `gh-pages` branch and the `/ (root)` directory.
