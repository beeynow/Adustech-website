# ADUSTECH Website - Vercel Deployment Guide

## 🚀 Deployment Instructions

### Prerequisites
- Vercel account (free tier works perfectly)
- Git repository (optional but recommended)

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to website directory**
   ```bash
   cd website
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   - Push the `website` folder to your GitHub/GitLab/Bitbucket repository

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your repository
   - Set **Root Directory** to `website`
   - Click **Deploy**

3. **Configuration**
   - Framework Preset: **Other**
   - Build Command: Leave empty
   - Output Directory: `.`
   - Install Command: Leave empty

### Method 3: Drag & Drop Deploy

1. Go to https://vercel.com/new
2. Drag and drop the entire `website` folder
3. Click **Deploy**

## ✅ What's Included

- ✅ Download count updated to **10,000+**
- ✅ Dark theme completely removed
- ✅ Production-ready `vercel.json` configuration
- ✅ Security headers configured
- ✅ Asset caching optimized
- ✅ Clean URLs enabled
- ✅ SEO-friendly structure

## 📁 Files Ready for Production

```
website/
├── index.html              # Main landing page
├── vercel.json             # Vercel configuration
├── .vercelignore           # Files to ignore during deployment
├── assets/
│   ├── css/
│   │   └── style.css       # Clean, light theme only
│   ├── js/
│   │   └── script.js       # Interactive features
│   └── images/             # Website images
├── pages/                  # Additional pages
└── downloads/              # APK/AAB files
```

## 🔧 Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Download count shows **10,000+**
- [ ] No dark theme toggle visible
- [ ] All navigation links work
- [ ] Download buttons functional
- [ ] Mobile menu works properly
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] No console errors

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## 📊 Performance Optimizations

The website includes:
- Minified assets ready for CDN delivery
- Browser caching headers
- Security headers (XSS, clickjacking protection)
- Clean HTML structure
- Optimized CSS (no unused dark theme code)
- Lazy loading support

## 🆘 Troubleshooting

**Issue: 404 errors on subpages**
- Solution: Vercel.json is configured with proper rewrites

**Issue: Assets not loading**
- Solution: Check that all paths are relative and start with `/` or `./`

**Issue: Download files not available**
- Solution: Ensure APK/AAB files are in the `downloads/` folder

## 📱 Testing

Test on multiple devices:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## 🎯 Production Ready Features

1. **SEO Optimized**
   - Meta tags configured
   - Semantic HTML structure
   - Fast loading times

2. **Security**
   - Security headers enabled
   - No inline scripts
   - XSS protection

3. **Performance**
   - Static site (instant loading)
   - CDN distribution via Vercel
   - Asset caching

4. **Mobile Responsive**
   - Works on all screen sizes
   - Touch-friendly navigation
   - Optimized for mobile

## 📞 Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Community: https://github.com/vercel/vercel/discussions

---

**Deployment Status:** ✅ Production Ready
**Last Updated:** 2026-01-31
