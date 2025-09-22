# Pacerline Property Management Website

A modern, responsive website for Pacerline Property Management Services built with Next.js, React, and Tailwind CSS.

**Version:** 1.0.0  
**Release Date:** September 23, 2025  
**Status:** Initial Version

## 🚀 Quick Start

### For Windows Users:
```bash
# Double-click setup.bat or run in Command Prompt:
setup.bat
```

### For Mac/Linux Users:
```bash
# Make the script executable and run:
chmod +x setup.sh
./setup.sh
```

The website will automatically open at `http://localhost:3000`

## ✨ Features

### 🎨 Modern Design
- Responsive design with Tailwind CSS
- Gradient backgrounds and modern typography
- Interactive 3D flip card animations
- Smooth hover effects and transitions

### 🧭 Advanced Navigation
- Three-tier dropdown menu system:
  - **Accounting Services**: General Accounting, Property Management, USA Bookkeeping, Australia Accounting
  - **AppFolio Services**: AppFolio Integration, AppFolio Bookkeeping, AppFolio Administration
  - **Buildium Services**: Buildium Integration, Buildium Bookkeeping, Buildium Administration
- Mobile-responsive navigation
- Smooth dropdown animations

### 💼 Service Pages
1. **Property Management Accounting** - 3D flip cards with service details
2. **USA Bookkeeping & Tax Services** - IRS compliance focused
3. **Australia Accounting & Tax** - ATO compliance featured
4. **AppFolio Services** - Complete AppFolio integration suite
5. **Buildium Services** - Comprehensive Buildium solutions
6. **Virtual Assistant** - Property management support
7. **Digital Marketing** - Property marketing services

### 🎯 Interactive Elements
- **3D Flip Cards**: Hover to reveal detailed service information
- **Dynamic Content**: Real-time metrics and performance indicators
- **Animated Backgrounds**: Gradient orbs with pulse animations
- **Progressive Enhancement**: Smooth loading animations

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Cross-browser compatibility

## 🛠 Technology Stack

- **Framework**: Next.js 14.0.0
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.3.0
- **Language**: TypeScript
- **Build Tool**: PostCSS
- **Development**: ESLint for code quality

## 🎮 Interactive Features

### 3D Flip Card Animations
- **Property Management**: Service cards flip to show features and benefits
- **USA Bookkeeping**: IRS compliance details on card backs
- **Australia Accounting**: ATO compliance information revealed
- **CSS 3D Transforms**: `perspective-1000`, `preserve-3d`, `backface-hidden`

### Enhanced AppFolio Page
- **Dynamic Service Showcase**: Auto-rotating service highlights
- **Performance Metrics**: Real-time dashboard with accuracy rates
- **Property Type Specialization**: Residential, Commercial, Multi-Family
- **Compliance Features**: Regulatory compliance, tax optimization
- **Advanced Analytics**: ROI optimization and predictive modeling

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

**Enjoy building with the Pacerline website! 🚀**
- 📧 **Contact Forms**: Interactive contact forms for lead generation
- 🌐 **Multi-Service**: Showcases accounting, bookkeeping, tax, and digital marketing services

## Services Covered

- Accounting Services
- Bookkeeping
- Tax Services (USA & Australia)
- Property Management Accounting
- AppFolio & Buildium Administration
- Virtual Assistant Services
- Digital Marketing

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── services.tsx    # Services page
│   └── contact.tsx     # Contact page
├── styles/             # CSS styles
│   └── globals.css     # Global styles with Tailwind
└── public/             # Static assets
```

## Customization

### Colors
The website uses a professional blue color scheme defined in `tailwind.config.js`. You can customize the primary and secondary colors by modifying the color palette.

### Content
- Update company information in the components and pages
- Add your actual contact details in the footer and contact page
- Replace placeholder content with your business information

### Logo
Add your company logo to the `public/` directory and update the header component.

## Deployment

This website can be deployed to various platforms:

- **Vercel** (Recommended): Push to GitHub and connect to Vercel
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS S3**: Build static files with `npm run build`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons

## License

This project is licensed under the MIT License.
