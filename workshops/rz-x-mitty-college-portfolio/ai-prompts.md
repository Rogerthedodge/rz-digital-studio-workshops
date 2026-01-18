# AI Prompts for VS Code Agent - College Portfolio Workflow

## Prompt 1: Environment Setup

```
Task: Set up the complete development environment for building a college application portfolio website.

Requirements:
1. Install Git (if not installed)
2. Install Node.js and npm (latest LTS version)
3. Install Visual Studio Code (if not installed)
4. Install Python 3.9+ (if not installed)
5. Verify all installations are successful

Environment Setup Details:
- Use a package manager appropriate for Windows (chocolatey, winget, or manual downloads)
- Configure git with user name and email
- Create a new project directory for the portfolio
- Initialize npm and install the following packages:
  - React 18+
  - Tailwind CSS 3+
  - Next.js (latest)
  - TypeScript
  - ESLint
  - Prettier

Post-Installation:
- Verify all tools are accessible from command line
- Create a test React component with Tailwind CSS to confirm everything works
- Set up a .gitignore file for the project
- Create an initial project structure

Output:
- Confirmation of all installations
- List of installed versions
- Test React component rendering successfully with Tailwind styling
```

---

## Prompt 2: Create Portfolio Prototype Website

```
Task: Build a prototype portfolio website for Alex Chen based on the provided data using React, Tailwind CSS, and Next.js.

Provided Data:
{
  "contact": {
    "name": "Alex Chen",
    "email": "alex.chen@email.com",
    "major": "Human-Computer Interaction"
  },
  "identityDNA": "A Human-Computer Interaction researcher with a published paper at CHI who is also a competitive rock climber",
  "starNarrative": {
    "situation": "Robotics team's main sensor failed 48 hours before regional competition",
    "task": "Find a software workaround to replace the hardware data feed",
    "action": "Spent 12 hours recoding the movement algorithm using peripheral ultrasonic sensors instead of primary LiDAR",
    "result": "Robot achieved 95% accuracy in navigation, secured 2nd place and spot at Nationals"
  },
  "easterEgg": "Can name every country in the world in under 3 minutes",
  "academicTrends": {
    "gpa": [3.7, 3.9, 4.0],
    "note": "Maintained upward trend while increasing rigor with four AP STEM classes"
  },
  "honors": [
    "AP Scholar with Distinction | Top 10% of global test-takers",
    "Regional Robotics MVP | 1 of 50 students"
  ],
  "projects": [
    {
      "name": "EcoTrack App",
      "description": "React Native app helping 50 users reduce personal waste by 15%"
    },
    {
      "name": "Solar Array Prototype",
      "description": "Led team of 4 to build tracking solar panel increasing efficiency by 22%"
    }
  ],
  "leadership": "Founder of Coding Club | Led 30 peers in weekly Python workshops",
  "aestheticPreference": "Minimalist White"
}

Website Requirements:

Structure:
1. Header/Navigation
   - Name and contact info
   - Navigation menu (About, Experience, Projects, Contact)

2. Hero Section
   - Eye-catching introduction with identity DNA
   - Profile image or placeholder
   - Call-to-action button

3. About Section
   - Major and background
   - Identity DNA narrative
   - GPA progression chart
   - Easter egg (hidden or revealed on interaction)

4. Experience Section
   - STAR narrative presented in an engaging timeline format
   - Situation → Task → Action → Result flow
   - Visual separation and icons

5. Achievements Section
   - Honors and recognition cards
   - Academic honors with badges
   - Robotics achievements

6. Projects Section
   - Project cards with:
     - Project name and description
     - Key metrics/results
     - Responsive grid layout

7. Leadership Section
   - Leadership role description
   - Impact metrics

8. Footer
   - Contact information
   - Social links (placeholder)
   - Copyright

Design Specifications:
- Color Scheme: Minimalist White (white background, dark text, accent colors sparingly)
- Typography: Clean, modern sans-serif fonts
- Layout: Mobile-first, responsive design
- Animations: Subtle, professional transitions
- Spacing: Generous whitespace for clarity

Technical Implementation:
- Use Next.js for the main framework
- Implement Tailwind CSS for styling
- Create reusable React components for cards, sections, and UI elements
- Implement smooth scrolling and navigation
- Add responsive design for mobile, tablet, and desktop
- Include proper semantic HTML

Files to Create:
- pages/index.tsx (main page)
- components/Header.tsx
- components/HeroSection.tsx
- components/AboutSection.tsx
- components/ExperienceSection.tsx
- components/AchievementsSection.tsx
- components/ProjectsSection.tsx
- components/LeadershipSection.tsx
- components/Footer.tsx
- styles/globals.css (global Tailwind config)

Output:
- Fully functional prototype website
- All sections rendering with provided data
- Mobile-responsive design verified
- Code follows best practices
- Ready for local development server testing
- Git initialized with first commit
```

---

## Prompt 3: Verify, Check, and Test the Website Locally

```
Task: Verify the portfolio website build, perform quality checks, and test it locally to ensure everything works correctly.

Pre-Flight Checks:
1. Verify all project files are in place and correctly structured
2. Check package.json has all required dependencies
3. Verify no syntax errors in TypeScript/React components
4. Confirm Tailwind CSS is properly configured

Build and Test Steps:
1. Install dependencies (if not already installed)
   - npm install
2. Run development server
   - npm run dev
3. Access the website locally
   - Open http://localhost:3000 in browser
4. Perform manual testing:
   - Check all sections render correctly
   - Test responsive design on mobile, tablet, desktop
   - Verify all navigation links work
   - Test interactive elements and animations
   - Check images/assets load properly
   - Verify text content displays correctly
   - Check for visual consistency with minimalist white design

Automated Tests:
1. Run linter to check for code quality issues
   - npm run lint
2. Check for TypeScript compilation errors
   - npx tsc --noEmit
3. Build for production
   - npm run build
4. Verify build completes without errors

Debugging (if issues found):
1. Check browser console for JavaScript errors
2. Check network tab for failed asset loads
3. Review terminal output for build warnings
4. Check CSS is being applied correctly (inspect elements)
5. Verify data is rendering from components

Performance Check:
1. Use browser DevTools to measure page load time
2. Check Lighthouse scores
3. Verify no console errors or warnings
4. Monitor network requests

Final Validation:
1. All sections rendering properly
2. No console errors or warnings
3. Responsive design working on all screen sizes
4. Navigation and interactions functional
5. Build completes successfully
6. Performance is acceptable

Output:
- Test report confirming all checks passed
- Screenshots of website on different devices
- Performance metrics
- List of any issues found and recommended fixes
- Ready for deployment
```

---

## Manual Command List (If AI Workflow Doesn't Work)

Use these commands to set up and test the portfolio website manually:

### Prerequisites Setup
```bash
# Navigate to project directory
cd /path/to/rz-digital-studio-workshops/workshops/rz-x-mitty-college-portfolio

# Initialize Node project (if not already done)
npm init -y

# Install dependencies
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer typescript @types/react @types/node
npm install -D eslint prettier

# Configure Tailwind
npx tailwindcss init -p
```

### Development Workflow
```bash
# Start development server
npm run dev

# In another terminal, run linter
npm run lint

# Type check
npx tsc --noEmit

# Format code
npx prettier --write .
```

### Testing & Verification
```bash
# Build for production
npm run build

# Check build output size
du -sh .next

# Run Next.js production build locally
npm run build
npm start

# View in browser
# Open http://localhost:3000
```

### Git Operations
```bash
# Check git status
git status

# View recent commits
git log --oneline

# Add and commit changes
git add .
git commit -m "Add portfolio website prototype"

# View file changes
git diff
```

### Debugging & Troubleshooting
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Run specific port if 3000 is busy
PORT=3001 npm run dev
```

### Full Setup & Test (One Command)
```bash
# Complete setup from scratch
npm install && npm run dev
```

### Verification Checklist (Run These Commands)
```bash
# 1. Check Node/npm versions
node --version
npm --version

# 2. Verify dependencies installed
npm list react next tailwindcss

# 3. Check for syntax errors
npx tsc --noEmit

# 4. Run linter
npm run lint

# 5. Build test
npm run build

# 6. Start dev server
npm run dev
# Then open http://localhost:3000 in browser
```

### Common Issues & Solutions

**Issue: Port 3000 already in use**
```bash
# Use different port
PORT=3001 npm run dev
```

**Issue: Dependencies installation fails**
```bash
# Clear cache and retry
npm cache clean --force
npm install
```

**Issue: Tailwind CSS not applying styles**
```bash
# Verify tailwind.config.js exists and rebuild
npm run dev
# Clear browser cache (Ctrl+Shift+Delete)
```

**Issue: TypeScript errors**
```bash
# Check all TypeScript files
npx tsc --noEmit
# Fix errors in source files
```

**Issue: Build fails**
```bash
# Check for errors
npm run build
# Review error messages and fix files
# Retry build
npm run build
```

---

## Implementation Notes

These prompts are designed to be used sequentially with a VS Code AI Agent:

1. **First**: Execute Prompt 1 to set up the development environment
2. **Then**: Execute Prompt 2 to build the portfolio prototype
3. **Finally**: Execute Prompt 3 to verify, test, and validate locally

Each prompt is self-contained and assumes the previous steps have been completed. The agent should:
- Ask clarifying questions if needed
- Break down complex tasks into smaller steps
- Provide progress updates
- Generate and run necessary commands
- Create and edit files as required
- Test functionality before marking complete

### Manual Fallback
If the AI workflow encounters issues or you prefer to work independently, use the **Manual Command List** section above to execute the same steps using your terminal directly.



