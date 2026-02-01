# 🎓 ADUSTECH Mobile App - Download Website

Beautiful, professional website for downloading the ADUSTECH mobile application.

---

## 🌟 Features

- ✅ **Modern Design** - Clean, professional university-style aesthetics
- ✅ **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- ✅ **Interactive UI** - Smooth animations and transitions
- ✅ **Download Options** - APK and AAB file downloads
- ✅ **Features Showcase** - Highlight app capabilities
- ✅ **Fast Loading** - Optimized performance
- ✅ **SEO Friendly** - Meta tags and semantic HTML
- ✅ **Accessible** - ARIA labels and keyboard navigation

---

## 📁 File Structure

```
website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   ├── js/
│   │   └── script.js       # Interactive JavaScript
│   └── images/
│       └── favicon.png     # Website favicon
├── downloads/
│   ├── adustech.apk        # Android APK file
│   └── adustech.aab        # Android AAB file
└── README.md               # This file
```

---

## 🚀 Quick Start

### Option 1: Open Locally

1. Open `index.html` in your web browser
2. That's it! No build process required.

### Option 2: Use Live Server (Recommended for Development)

```bash
# If you have Python installed:
cd website
python -m http.server 8000
# Visit: http://localhost:8000

# OR using Node.js (install live-server):
npm install -g live-server
cd website
live-server
```

---

## 📦 Adding Your APK/AAB Files

1. Build your React Native app:
   ```bash
   cd adustech
   
   # For APK:
   cd android
   ./gradlew assembleRelease
   # File: android/app/build/outputs/apk/release/app-release.apk
   
   # For AAB:
   ./gradlew bundleRelease
   # File: android/app/build/outputs/bundle/release/app-release.aab
   ```

2. Copy files to website:
   ```bash
   cp android/app/build/outputs/apk/release/app-release.apk ../website/downloads/adustech.apk
   cp android/app/build/outputs/bundle/release/app-release.aab ../website/downloads/adustech.aab
   ```

3. Update file sizes in `index.html` if needed

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd website
vercel

# For production
vercel --prod
```

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `website` folder
3. Done! Your site is live.

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push the `website` folder
3. Go to Settings → Pages
4. Select branch and `/website` folder
5. Save and get your URL

### Option 4: Railway

```bash
# Create railway.toml in website folder:
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "python -m http.server 8000"
```

Then push to Railway.

### Option 5: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
cd website
firebase init hosting

# Deploy
firebase deploy
```

---

## 🎨 Customization

### Colors

Edit `assets/css/style.css` - Change CSS variables:

```css
:root {
    --primary-color: #1e40af;      /* Main blue */
    --secondary-color: #059669;     /* Green */
    --accent-color: #f59e0b;        /* Orange */
}
```

### Content

Edit `index.html` to update:
- University name
- Contact information
- Features list
- About section
- Social media links

### Images

Replace placeholder images in `assets/images/`:
- `favicon.png` - Website icon (32x32px)
- Add app screenshots
- Add university logo

---

## 📱 Sections

### 1. Hero Section
- Eye-catching headline
- Download CTAs
- Stats (downloads, rating, reviews)
- Animated phone mockup

### 2. Features Section
- 6 key features with icons
- Hover animations
- Clean card design

### 3. Download Section
- APK and AAB download cards
- File size and version info
- Installation instructions

### 4. About Section
- University information
- App benefits
- Trust indicators

### 5. Contact Section
- Email support
- Phone number
- Location

### 6. Footer
- Quick links
- Social media
- Copyright info

---

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

### Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Performance

- ⚡ Fast loading (< 1 second)
- 📱 Mobile-first design
- 🎨 Optimized animations
- 💾 Minimal file size (~50KB total)

---

## 🎯 SEO Optimization

The website includes:
- Meta description
- Meta keywords
- Open Graph tags (add these)
- Semantic HTML structure
- Alt text for images
- Descriptive headings

### Add Open Graph Tags (Optional)

Add to `<head>` in index.html:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="ADUSTECH Mobile App">
<meta property="og:description" content="Official mobile app for ADUSTECH students">
<meta property="og:image" content="assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="ADUSTECH Mobile App">
<meta property="twitter:description" content="Official mobile app for ADUSTECH students">
<meta property="twitter:image" content="assets/images/og-image.jpg">
```

---

## 📊 Analytics (Optional)

### Add Google Analytics

Add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Downloads Not Working?

1. Ensure APK/AAB files are in `downloads/` folder
2. Check file permissions (should be readable)
3. Verify file paths in HTML match actual filenames

### Styling Issues?

1. Clear browser cache (Ctrl+Shift+R)
2. Check CSS file is loading (Network tab in DevTools)
3. Verify no CSS syntax errors

### Mobile Menu Not Opening?

1. Check JavaScript console for errors
2. Ensure script.js is loading
3. Test on different browsers

---

## 📝 Checklist Before Going Live

- [ ] Replace placeholder images
- [ ] Add actual APK and AAB files
- [ ] Update contact information
- [ ] Test all download links
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Optimize images
- [ ] Add favicon
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Test form submissions (if any)
- [ ] Check all links work
- [ ] Proofread all content

---

## 🚀 Going Production

### Update Before Launch:

1. **Contact Info** - Add real email, phone, address
2. **Social Links** - Update footer social media links
3. **File Sizes** - Update actual APK/AAB file sizes
4. **Version Number** - Update version (currently 1.0.0)
5. **Stats** - Update download count, ratings (or remove)
6. **University Logo** - Add official ADUSTECH logo

---

## 📞 Support

For issues or questions:
- Email: support@adustech.edu.ng
- Website: https://adustech.edu.ng

---

## 📄 License

© 2026 ADUSTECH. All rights reserved.

---

**Built with ❤️ for ADUSTECH Students**
# Adustech-website
