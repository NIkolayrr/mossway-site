# Mossway Site

The Mossway website is a Next.js App Router application. Routes live in `src/app`, reusable UI lives in `src/components`, and the home, privacy, and terms pages are rendered by the Next.js server.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Deploy the application to a host that supports the Next.js Node.js runtime, such as Vercel. GitHub Pages only serves static files and cannot run this SSR application.
