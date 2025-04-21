# Elegant Business Card Landing Page

A modern, animated digital business card landing page built with Next.js and Tailwind CSS. This elegant webpage showcases your business information with smooth animations and a professional design.

## Features

- Responsive design that looks great on all devices
- Smooth reveal animations and micro-interactions
- Modern UI with a professional look and feel
- Contact form with validation and success feedback
- SEO optimized structure

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd business-card
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Changing Content

You can customize the content by editing the component files in the `src/components` directory:

- `HeroSection.tsx` - Update the hero section content, background, and logo
- `AboutSection.tsx` - Update the about section content and image
- `ContactForm.tsx` - Update the contact form fields and contact information
- `Footer.tsx` - Update the footer links and copyright information

### Changing Colors

The color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#0f172a',    // Change this to your primary color
      secondary: '#6366f1',  // Change this to your secondary color
      accent: '#f59e0b',     // Change this to your accent color
    },
  }
}
```

### Adding Images

Replace the placeholder images in the `public/images` directory with your own:

- `hero-bg.jpg` - Hero section background
- `about-image.jpg` - About section image
- Add your logo file

## Deployment

This application can be easily deployed to platforms like Vercel or Netlify.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [React Icons](https://react-icons.github.io/react-icons/) - For icons
