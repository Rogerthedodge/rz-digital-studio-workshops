# 🚀 Quick Start Guide

## Starting the Development Server

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Files Overview

### Entry Point
- [src/app/layout.tsx](src/app/layout.tsx) - Root layout component
- [src/app/page.tsx](src/app/page.tsx) - Home page
- [src/app/globals.css](src/app/globals.css) - Global styles

### Components
- [src/components/Hero.tsx](src/components/Hero.tsx) - Hero section with CTA
- [src/components/About.tsx](src/components/About.tsx) - About section
- [src/components/Portfolio.tsx](src/components/Portfolio.tsx) - Portfolio showcase
- [src/components/Contact.tsx](src/components/Contact.tsx) - Contact form

### Configuration
- [tailwind.config.ts](tailwind.config.ts) - Tailwind CSS settings
- [tsconfig.json](tsconfig.json) - TypeScript settings
- [next.config.ts](next.config.ts) - Next.js settings
- [eslint.config.mjs](eslint.config.mjs) - ESLint rules
- [.prettierrc.json](.prettierrc.json) - Prettier formatting

### Utilities
- [postcss.config.mjs](postcss.config.mjs) - PostCSS for Tailwind
- [.gitignore](.gitignore) - Git ignore rules
- [README.md](README.md) - Full documentation

---

## Customizing Your Portfolio

### 1. Update Content
Edit component files in `src/components/` to change text, images, and data.

### 2. Change Colors
Edit `tailwind.config.ts` to modify theme colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

### 3. Add New Sections
1. Create a new component in `src/components/NewSection.tsx`
2. Import it in `src/app/page.tsx`
3. Add it to the JSX

### 4. Styling
All components use Tailwind CSS utility classes:
- Dark theme: `bg-slate-900`, `bg-slate-800`
- Accents: `text-purple-400`, `bg-purple-600`
- Responsive: `sm:text-6xl`, `lg:grid-cols-3`

---

## Available Commands

```bash
# Development server (auto-reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Need to clear cache?
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### TypeScript errors?
```bash
npx tsc --noEmit
```

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel dashboard
3. Deploy

### Other Platforms
```bash
npm run build
npm start
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## Tips

✅ Use `'use client'` directive for components with interactivity  
✅ Keep components small and focused  
✅ Use TypeScript for type safety  
✅ Format with `npm run lint` before committing  
✅ Test responsiveness on different screen sizes

Happy coding! 🎉
