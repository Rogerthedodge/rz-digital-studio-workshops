# Alex Chen's Portfolio Website

A modern, minimalist portfolio website showcasing Alex Chen's achievements, projects, and leadership experience.

## 🎯 Website Structure

The portfolio includes 8 main sections:

### 1. **Header/Navigation** (`components/Header.tsx`)
- Sticky navigation with Alex's name and tagline
- Navigation links to all sections
- Mobile-responsive menu
- Quick contact button

### 2. **Hero Section** (`components/HeroSection.tsx`)
- Full-width introduction with identity DNA
- Eye-catching call-to-action buttons
- Quick stats: CHI publication, 4.0 GPA, Nationals achievement
- Responsive profile image placeholder

### 3. **About Section** (`components/AboutSection.tsx`)
- Major and background information
- GPA progression visualization (3.7 → 3.9 → 4.0)
- Interactive Easter egg reveal (country naming skill)
- Research and skill highlights

### 4. **Experience Section** (`components/ExperienceSection.tsx`)
- STAR narrative presented as interactive timeline
- Situation → Task → Action → Result flow
- Visual icons and connectors
- Key takeaways highlighted

### 5. **Achievements Section** (`components/AchievementsSection.tsx`)
- Honor cards with icons
- Recognition badges
- Detailed explanations of what achievements mean
- Academic and competition recognition

### 6. **Projects Section** (`components/ProjectsSection.tsx`)
- Project cards with metrics
- EcoTrack App (50 users, 15% waste reduction)
- Solar Array Prototype (4-person team, 22% efficiency gain)
- Technology tags for each project
- Project philosophy section

### 7. **Leadership Section** (`components/LeadershipSection.tsx`)
- Founder of Coding Club
- 30+ students in community
- Weekly Python workshops
- Leadership impact and philosophy

### 8. **Footer** (`components/Footer.tsx`)
- Contact information and email link
- Functional contact form with submission feedback
- Social media links (LinkedIn, GitHub)
- Copyright and legal links

## 🎨 Design Specifications

**Color Scheme: Minimalist White**
- White backgrounds (#ffffff)
- Dark gray text (#1f2937, #374151, #6b7280)
- Blue accent color (#2563eb) for highlights and buttons
- Light gray backgrounds (#f3f4f6, #f9fafb) for sections

**Typography**
- Clean, modern sans-serif fonts (system fonts)
- Clear hierarchy with bold headings
- Generous whitespace for clarity

**Layout**
- Mobile-first, responsive design
- Max width of 6rem (1536px) for content
- Consistent padding and margins
- Grid-based layout for components

**Animations**
- Subtle hover effects on interactive elements
- Smooth transitions (200-300ms)
- Smooth scroll behavior on anchor links
- Progress bar animation for GPA chart

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.9
- **React**: 18.3.1
- **Styling**: Tailwind CSS 3.4.19
- **Language**: TypeScript 5.9.3
- **Code Quality**: ESLint + Prettier

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page integrating all sections
│   └── globals.css         # Global Tailwind styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section
│   ├── AboutSection.tsx    # About section
│   ├── ExperienceSection.tsx # STAR narrative
│   ├── AchievementsSection.tsx # Honors & recognition
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── LeadershipSection.tsx # Leadership role
│   └── Footer.tsx          # Contact & footer
```

## 🚀 Getting Started

### Prerequisites
- Node.js v24.12.0 or higher
- npm 11.6.2 or higher

### Installation

```bash
# Navigate to project directory
cd code-samples

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

The website will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

## ✨ Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Smooth Navigation** - Sticky header with smooth scroll  
✅ **Interactive Elements** - Easter egg reveal, form submission  
✅ **Data Visualization** - GPA progress chart  
✅ **Professional Layout** - Minimalist white design aesthetic  
✅ **Accessible** - Semantic HTML, proper focus management  
✅ **SEO Optimized** - Metadata and proper heading hierarchy  
✅ **Performance** - Optimized images and assets  

## 📝 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Run production build
npm run lint      # Check code quality with ESLint
```

## 🔧 Customization Guide

### Change Colors
Edit the Tailwind classes in component files. Blue accent color (#2563eb) is used throughout:
```tsx
// Current: bg-blue-600, text-blue-600
// Change to: bg-green-600, text-green-600
```

### Update Personal Information
Edit the data directly in component files:
- **Header**: Name in navigation
- **Hero**: Tagline and stats
- **About**: Major and biography
- **Projects**: Project names, descriptions, metrics

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the JSX with proper ID for navigation

### Modify Email
Change `alex.chen@email.com` to your email in:
- Header.tsx (contact button)
- HeroSection.tsx (CTA button)
- Footer.tsx (contact info)

## 🔍 Performance & Quality

### TypeScript
- Strict mode enabled
- Full type definitions
- Type-safe props and state

### Code Quality
- ESLint configured for React and Next.js
- Prettier formatting (single quotes, no semicolons)
- Tailwind CSS class ordering with Prettier plugin

### Accessibility
- Semantic HTML elements
- Proper focus management
- ARIA labels where needed
- Keyboard navigation support

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# 1. Push code to GitHub
git add .
git commit -m "Add Alex Chen portfolio"
git push

# 2. Import project in Vercel dashboard
# 3. Auto-deploy on push
```

### Other Platforms
```bash
# Build project
npm run build

# Deploy the .next folder and public files
# Ensure Node.js runtime is available
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
PORT=3001 npm run dev
```

### Build fails with TypeScript errors
```bash
npx tsc --noEmit
# Fix reported errors in source files
npm run build
```

### Styles not loading
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
# Clear browser cache (Ctrl+Shift+Delete)
```

### Components not rendering
Check that all imports in `page.tsx` match component file names exactly.

## 📝 SEO & Metadata

The website includes:
- Descriptive title and meta tags
- Proper heading hierarchy
- Schema.org structured data ready
- Open Graph tags for social sharing
- Mobile viewport optimization

## ✅ Quality Checklist

- ✅ All sections render correctly
- ✅ Responsive on mobile, tablet, desktop
- ✅ Navigation links work and smooth scroll
- ✅ Contact form functional
- ✅ Easter egg interactive
- ✅ No console errors or warnings
- ✅ Build completes successfully
- ✅ TypeScript strict mode passes
- ✅ ESLint checks pass
- ✅ Performance optimized

## 📄 License

This portfolio is personal work and copyright Alex Chen, 2024.

---

**Ready to showcase your achievements!** 🎉

For questions or improvements, reach out to alex.chen@email.com
