# Nullscape Software Website

A modern, responsive website for Nullscape Software built with React, TypeScript, and Tailwind CSS.

## Features

- **Animated Particle Background** - Interactive particle effects using tsparticles
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Service Cards** - Showcase of three main services
- **Contact Form** - Form validation with react-hook-form
- **Static Site Generation** - Optimized for GitHub Pages hosting

## Technology Stack

- React 19 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for styling
- tsparticles for animated backgrounds
- react-hook-form for form management
- pnpm for package management

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This site is configured for GitHub Pages deployment. The GitHub Actions workflow will automatically build and deploy the site when you push to the `main` branch.

### Manual Deployment

1. Build the project: `pnpm build`
2. The `dist/` folder contains the static files ready for deployment

### GitHub Pages Configuration

1. Go to your repository Settings > Pages
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

**Note**: If deploying to a custom domain or different repository name, update the `base` path in `vite.config.ts`.

## Project Structure

```
nullscape-website/
├── public/
│   ├── assets/          # Static images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## License

Private - Nullscape Software Ltd
