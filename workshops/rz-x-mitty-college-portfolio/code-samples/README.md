# College Portfolio Website

A modern, responsive college application portfolio website built with Next.js 15, React 18, Tailwind CSS 3, and TypeScript.

## 🚀 Features

- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern UI** - Gradient backgrounds, smooth animations, and glassmorphism effects
- **TypeScript** - Full type safety for better development experience
- **Tailwind CSS** - Utility-first CSS for rapid UI development
- **SEO Optimized** - Metadata and semantic HTML
- **Form Handling** - Contact form with client-side state management
- **Code Quality** - ESLint and Prettier pre-configured

## 📋 Prerequisites

- **Node.js**: v20.0.0 or higher
- **npm**: 11.0.0 or higher
- **Git**: 2.40.0 or higher
- **Python**: 3.9 or higher (optional, for scripts)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd college-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Installed Packages

### Production Dependencies
- `next@^15.1.2` - React framework
- `react@^18.3.1` - UI library
- `react-dom@^18.3.1` - React DOM rendering

### Development Dependencies
- `typescript@^5.6.3` - Type system for JavaScript
- `tailwindcss@^3.4.15` - Utility-first CSS framework
- `autoprefixer@^10.4.20` - PostCSS plugin for vendor prefixes
- `postcss@^8.4.45` - CSS transformation tool
- `eslint@^8.57.1` - JavaScript linter
- `eslint-config-next@^15.1.2` - ESLint config for Next.js
- `prettier@^3.3.3` - Code formatter
- `prettier-plugin-tailwindcss@^0.6.8` - Tailwind CSS Prettier plugin

## 🗂️ Project Structure

```
college-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Portfolio.tsx   # Portfolio/projects section
│   │   └── Contact.tsx     # Contact form section
├── public/                  # Static files
├── .gitignore             # Git ignore rules
├── .prettierrc.json       # Prettier configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🧩 Components

### Hero Component
- Full-screen hero section with gradient background
- Eye-catching heading with gradient text
- Call-to-action button

### About Component
- Introduction section
- Three feature cards with hover effects
- Responsive grid layout

### Portfolio Component
- Project showcase with 6 sample projects
- Category badges for each project
- Hover effects and animations
- Responsive grid (1-3 columns)

### Contact Component
- Functional contact form with validation
- Form state management using React hooks
- Responsive form layout
- Success feedback on submission

## 🎨 Styling

All components use **Tailwind CSS** for styling with:
- Dark theme (slate-900, slate-800, slate-700)
- Purple and pink accent colors
- Smooth transitions and hover effects
- Responsive breakpoints (sm, lg)
- Gradient effects and shadows

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
Configured in [tailwind.config.ts](tailwind.config.ts) with custom theme extensions

### TypeScript
Configured in [tsconfig.json](tsconfig.json) with path aliases (@/*)

### ESLint
Configured in [eslint.config.mjs](eslint.config.mjs) using Next.js core-web-vitals

### Prettier
Configured in [.prettierrc.json](.prettierrc.json) with Tailwind CSS support

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables if needed
4. Deploy automatically on push

### Other Platforms
1. Build the project: `npm run build`
2. Start server: `npm start`
3. Deploy the `.next` folder

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## ✨ Customization

### Change Colors
Edit [tailwind.config.ts](tailwind.config.ts) to modify theme colors

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the main page

### Modify Content
Edit component files directly to update text, images, and data

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a template for college application portfolio websites.

---

**Happy coding! 🎉**
