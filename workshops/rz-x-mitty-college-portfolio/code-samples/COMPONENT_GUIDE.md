# 🧩 Component Examples & How to Extend

This guide shows how to create and customize components for your portfolio.

---

## Understanding the Component Structure

Each component follows this pattern:

```typescript
// Client component (interactive)
'use client'

import { useState } from 'react'

export default function ComponentName() {
  const [state, setState] = useState('')

  return (
    <section className="px-4 py-20 bg-slate-900">
      {/* Content here */}
    </section>
  )
}
```

---

## Component Examples

### 1. Hero Component (Hero.tsx)

**Features:**
- Full-screen height
- Gradient background
- Gradient text effect
- Call-to-action button

**Key Classes:**
- `min-h-screen` - Full viewport height
- `bg-gradient-to-br` - Gradient background
- `text-transparent` - For gradient text
- `hover:shadow-lg` - Hover effects

**How to customize:**
```typescript
// Change the heading
<h1 className="text-5xl font-bold">
  Your Custom Title
</h1>

// Change button color
<button className="bg-blue-600 hover:bg-blue-700">
  Click Me
</button>
```

---

### 2. About Component (About.tsx)

**Features:**
- Intro paragraph
- Three feature cards
- Hover effects
- Responsive grid

**Key Classes:**
- `grid gap-8` - Grid layout with spacing
- `sm:grid-cols-2` - 2 columns on small screens
- `hover:border-purple-500` - Interactive borders
- `rounded-lg` - Rounded corners

**How to add more cards:**
```typescript
{[
  { title: 'New Item', description: 'Description' },
  // Add more items here
].map((item) => (
  <div key={item.title} className="...">
    {/* Card content */}
  </div>
))}
```

---

### 3. Portfolio Component (Portfolio.tsx)

**Features:**
- Project showcase
- Category badges
- Grid layout
- Interactive cards

**Key Classes:**
- `border-purple-500/20` - Semi-transparent borders
- `transition-all duration-300` - Smooth animations
- `hover:shadow-lg` - Hover effects

**How to add projects:**
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'What you did',
    category: 'Category',
  },
  // Add more projects
]
```

---

### 4. Contact Component (Contact.tsx)

**Features:**
- Form with validation
- Client-side state management
- Form submission handling
- Input focus styles

**Key Classes:**
- `focus:ring-2` - Focus rings
- `focus:border-purple-500` - Focus borders
- `transition-colors` - Smooth color changes

**How to customize:**
```typescript
// Add more fields
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  phone: '', // Add this
})

// Update in form
<input
  type="tel"
  name="phone"
  placeholder="Your phone"
  // Add to form
/>
```

---

## Creating New Components

### Step 1: Create the File
Create `src/components/NewComponent.tsx`:

```typescript
'use client'

export default function NewComponent() {
  return (
    <section className="px-4 py-20 bg-slate-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white">
          Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

### Step 2: Import in Page
Edit `src/app/page.tsx`:

```typescript
import NewComponent from '@/components/NewComponent'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <NewComponent /> {/* Add here */}
      <Portfolio />
      <Contact />
    </main>
  )
}
```

### Step 3: Style with Tailwind
Use utility classes:

```typescript
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

---

## Common Tailwind Patterns

### Responsive Text
```typescript
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

### Card Layout
```typescript
<div className="rounded-lg border border-slate-700 bg-slate-800 p-6 hover:border-purple-500">
  {/* Card content */}
</div>
```

### Gradient
```typescript
<div className="bg-gradient-to-r from-purple-600 to-pink-600">
  {/* Content */}
</div>
```

### Hover Effects
```typescript
<button className="transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
  Hover Me
</button>
```

### Grid Layouts
```typescript
{/* 1 column on mobile, 2 on tablet, 3 on desktop */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

---

## Useful Tailwind Classes

### Colors
- Text: `text-white`, `text-slate-300`, `text-purple-400`
- Background: `bg-slate-900`, `bg-slate-800`, `bg-purple-600`
- Border: `border-slate-700`, `border-purple-500`

### Sizing
- Width: `w-full`, `max-w-4xl`, `max-w-2xl`
- Height: `h-full`, `min-h-screen`
- Padding: `p-4`, `px-6`, `py-8`

### Layout
- Display: `flex`, `grid`, `block`
- Flexbox: `flex-col`, `items-center`, `justify-between`
- Grid: `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`

### Typography
- Size: `text-sm`, `text-lg`, `text-4xl`, `text-6xl`
- Weight: `font-light`, `font-bold`, `font-semibold`
- Style: `italic`, `uppercase`, `line-through`

### Effects
- Rounded: `rounded-lg`, `rounded-full`
- Shadow: `shadow-lg`, `shadow-xl`
- Opacity: `opacity-50`, `bg-purple-500/20`
- Transitions: `transition-all`, `duration-300`, `hover:`

---

## Form Examples

### Text Input
```typescript
<input
  type="text"
  className="border border-slate-600 bg-slate-700 px-4 py-3 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
  placeholder="Your input"
/>
```

### Textarea
```typescript
<textarea
  rows={5}
  className="border border-slate-600 bg-slate-700 px-4 py-3 rounded-lg text-white focus:border-purple-500"
  placeholder="Your message"
/>
```

### Button
```typescript
<button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-semibold hover:bg-purple-700 transition-colors duration-200">
  Submit
</button>
```

---

## Tips for Success

✅ **Mobile First** - Design for mobile, then add complexity for larger screens  
✅ **Consistent Colors** - Use the same color palette across components  
✅ **Spacing** - Use consistent padding and margin spacing  
✅ **Typography** - Limit to 2-3 font sizes for heading levels  
✅ **Contrast** - Ensure text is readable against backgrounds  
✅ **Hover States** - Always provide visual feedback on interactive elements  
✅ **Accessibility** - Use semantic HTML (`<button>`, `<input>`, etc.)  
✅ **Performance** - Use `'use client'` only when necessary

---

## Resources

- [Tailwind CSS Class Reference](https://tailwindcss.com/docs/installation)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Next.js App Router](https://nextjs.org/docs/app)

---

Happy building! 🎨
