# Premium Portfolio Website

A premium, minimalist portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a modern iOS/Apple aesthetic with smooth animations, dark mode support, and full responsiveness.

## 🎨 Features

- **Modern Design**: iOS/Apple-inspired minimalist aesthetic
- **Smooth Animations**: Premium animations with Framer Motion
- **Dark Mode**: Full light/dark mode support with next-themes
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with Next.js 14
- **SEO Ready**: Metadata and structured data included
- **Accessible**: WCAG compliant with proper semantic HTML
- **Blog**: Markdown support with syntax highlighting
- **Contact Form**: Built-in contact form with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your information:
```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
NEXT_PUBLIC_EMAIL=your.email@example.com
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── experience/        # Experience page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├���─ ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── Timeline.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/                   # Utility functions and data
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── blog.ts
│   ├── about.ts
│   ├── animations.ts
│   ├── utils.ts
│   ├── constants.ts
│   └── theme.ts
├── hooks/                 # Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useMediaQuery.ts
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎯 Customization

### Update Your Information

1. **Personal Info**: Edit `lib/about.ts`
2. **Projects**: Edit `lib/projects.ts`
3. **Skills**: Edit `lib/skills.ts`
4. **Experience**: Edit `lib/experience.ts`
5. **Blog Posts**: Edit `lib/blog.ts`
6. **Social Links**: Update `.env.local`

### Change Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  accent: {
    500: '#0ea5e9', // Change this to your brand color
    // ... other shades
  }
}
```

### Modify Fonts

Update font imports in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the Next.js configuration
4. Set environment variables in Netlify dashboard
5. Deploy!

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📚 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Theme**: next-themes
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Netlify

## 📖 Documentation

- [Customization Guide](./CUSTOMIZATION.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Folder Structure](./FOLDER_STRUCTURE.md)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Use the blog section to share your knowledge and improve SEO
- Keep your projects updated with your latest work
- Customize the colors to match your personal brand
- Test on mobile devices to ensure responsiveness
- Use the contact form to collect inquiries

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
