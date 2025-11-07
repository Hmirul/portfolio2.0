# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies (1 min)

```bash
npm install
```

### 2. Configure Environment (1 min)

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your information:

```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
NEXT_PUBLIC_EMAIL=your.email@example.com
```

### 3. Start Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Customize Content (2 min)

Edit these files with your information:

- `lib/about.ts` - Your bio and values
- `lib/projects.ts` - Your projects
- `lib/skills.ts` - Your skills
- `lib/experience.ts` - Your work experience
- `lib/blog.ts` - Your blog posts

## 🚀 Deploy in 2 Minutes

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Click "Deploy"

Done! Your site is live! 🎉

## 📝 Common Tasks

### Update Your Name

Edit `lib/constants.ts`:

```typescript
export const SITE_NAME = 'Your Name'
```

### Change Brand Color

Edit `tailwind.config.ts`:

```typescript
accent: {
  500: '#your-color-here',
}
```

### Add a Project

Edit `lib/projects.ts`:

```typescript
{
  id: '9',
  title: 'My New Project',
  description: 'Project description',
  // ... other fields
}
```

### Add a Blog Post

Edit `lib/blog.ts`:

```typescript
{
  id: '4',
  slug: 'my-post',
  title: 'My Blog Post',
  // ... other fields
}
```

### Update Social Links

Edit `.env.local`:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

## 🎨 Customization Shortcuts

| Task | File | Line |
|------|------|------|
| Change colors | `tailwind.config.ts` | ~20 |
| Update bio | `lib/about.ts` | ~5 |
| Add projects | `lib/projects.ts` | ~10 |
| Add skills | `lib/skills.ts` | ~15 |
| Add experience | `lib/experience.ts` | ~10 |
| Add blog posts | `lib/blog.ts` | ~20 |
| Update social links | `.env.local` | ~5 |

## 📚 Full Guides

- [README.md](./README.md) - Complete documentation
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed customization
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) - Project structure

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Dependencies Not Installing

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
npm run build
```

Check error messages and fix issues.

## 💡 Pro Tips

1. **Test locally first**: Always run `npm run dev` before deploying
2. **Use preview deployments**: Test changes on Netlify before merging
3. **Keep it updated**: Regularly update your projects and blog
4. **Monitor performance**: Use Lighthouse to check performance
5. **Backup your code**: Always push to GitHub

## 🎯 Next Steps

1. ✅ Install and run locally
2. ✅ Customize with your information
3. ✅ Test all pages and links
4. ✅ Deploy to Netlify
5. ✅ Set up custom domain (optional)
6. ✅ Share with the world!

## 📞 Need Help?

- Check [README.md](./README.md)
- Read [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- See [DEPLOYMENT.md](./DEPLOYMENT.md)
- Open an issue on GitHub

---

Happy building! 🚀
