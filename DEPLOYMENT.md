# Deployment Guide

This guide will help you deploy your portfolio to Netlify with automatic CI/CD.

## 📋 Prerequisites

- GitHub account
- Netlify account (free tier available)
- Your portfolio code pushed to GitHub

## 🚀 Step-by-Step Deployment

### Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Premium portfolio"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Sign up" or "Log in"
3. Click "New site from Git"
4. Select GitHub as your Git provider
5. Authorize Netlify to access your GitHub account
6. Select your portfolio repository

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js configuration, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (or higher)

### Step 4: Set Environment Variables

1. In Netlify dashboard, go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add your environment variables:

```
NEXT_PUBLIC_SITE_URL=https://yourportfolio.netlify.app
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
NEXT_PUBLIC_EMAIL=your.email@example.com
```

### Step 5: Deploy

1. Click **Deploy site**
2. Netlify will build and deploy your site
3. Your site will be available at `https://yourportfolio.netlify.app`

## 🌐 Custom Domain

### Add Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add domain**
3. Enter your custom domain (e.g., `yourportfolio.com`)
4. Follow the DNS configuration instructions

### DNS Configuration

For most domain registrars:

1. Go to your domain registrar's DNS settings
2. Add a CNAME record:
   - **Name**: `www`
   - **Value**: `yourportfolio.netlify.app`
3. Add an A record for the root domain (instructions vary by registrar)

Or use Netlify's nameservers:
1. In Netlify, click **Change nameservers**
2. Update your domain registrar to use Netlify's nameservers

## 🔄 Continuous Deployment

Once connected to GitHub, your site will automatically:

1. **Build** when you push to the main branch
2. **Deploy** if the build succeeds
3. **Rollback** if the build fails

### Deploy Preview

For every pull request, Netlify creates a preview deployment:

1. Push to a new branch
2. Create a pull request on GitHub
3. Netlify automatically builds and deploys a preview
4. Share the preview URL for feedback
5. Merge to main to deploy to production

## 🔐 Security

### HTTPS

Netlify automatically provides free HTTPS with Let's Encrypt.

### Security Headers

The `netlify.toml` file includes security headers:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

### Environment Variables

Never commit sensitive information:

1. Use `.env.local` for local development
2. Set environment variables in Netlify dashboard
3. Add `.env.local` to `.gitignore`

## 📊 Monitoring

### Build Logs

1. In Netlify dashboard, go to **Deploys**
2. Click on a deployment to view build logs
3. Check for errors or warnings

### Performance

1. Use Lighthouse to check performance
2. Monitor Core Web Vitals in Netlify Analytics
3. Optimize images and code as needed

### Analytics

Enable Netlify Analytics:

1. Go to **Site settings** → **Analytics**
2. Click **Enable Netlify Analytics**
3. View traffic and performance data

## 🐛 Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Verify environment variables are set
3. Ensure `package.json` has all dependencies
4. Test locally: `npm run build`

### Site Not Updating

1. Check if deployment is in progress
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check if changes were pushed to main branch
4. Verify build succeeded in Netlify dashboard

### Custom Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check domain registrar settings
4. Use DNS checker tool: https://dnschecker.org

### Performance Issues

1. Optimize images using Next.js Image component
2. Enable caching in `netlify.toml`
3. Use CDN for static assets
4. Minimize JavaScript bundle size

## 📝 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Repository connected to Netlify
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Site deployed successfully
- [ ] Custom domain configured (optional)
- [ ] HTTPS working
- [ ] Performance optimized
- [ ] Analytics enabled
- [ ] Backup plan in place

## 🔄 Updating Your Site

After deployment, to update your site:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
4. Netlify automatically builds and deploys
5. Your site updates within minutes

## 🆘 Support

- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Netlify Support](https://support.netlify.com)

## 💡 Tips

- Use preview deployments for testing
- Monitor build times and optimize if needed
- Set up notifications for failed builds
- Regularly update dependencies
- Keep backups of your code

---

Your portfolio is now live! 🎉

For more help, check the [README.md](./README.md) or [CUSTOMIZATION.md](./CUSTOMIZATION.md).
