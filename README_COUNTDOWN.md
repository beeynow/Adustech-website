# 🕐 Website Countdown Timer Setup Guide

## Overview

The ADUSTECH website now includes a countdown timer feature that blocks access to the main site until a specified time. This is perfect for launching the website at a specific time or creating anticipation for a new release.

---

## 🎯 Features

✅ **Configurable Duration**: Set countdown in hours or specific date/time  
✅ **Persistent Timer**: Uses localStorage to maintain countdown across sessions  
✅ **Beautiful UI**: Polished countdown page with animations  
✅ **Progress Bar**: Visual indicator of time remaining  
✅ **Responsive Design**: Works perfectly on mobile and desktop  
✅ **Animated Particles**: Engaging background effects  
✅ **Auto-redirect**: Automatically redirects to main site when countdown ends  

---

## 📁 Files Added

```
website/
├── config.js              # Configuration file (main settings)
├── countdown.html         # Countdown page (shown during countdown)
├── .env                   # Environment configuration
├── .env.example          # Example environment file
└── README_COUNTDOWN.md   # This file
```

---

## 🔧 Configuration

### Quick Setup (Most Common)

**To set a 10-hour countdown:**

1. Open `website/config.js`
2. Find the configuration section:
   ```javascript
   countdown: {
     enabled: true,           // Keep as true
     hoursFromNow: 10,        // Change this number
     launchDate: null,        // Keep as null
   }
   ```
3. Change `hoursFromNow` to your desired hours
4. Save the file

**Example countdown durations:**
- 1 hour: `hoursFromNow: 1`
- 5 hours: `hoursFromNow: 5`
- 12 hours: `hoursFromNow: 12`
- 24 hours (1 day): `hoursFromNow: 24`
- 48 hours (2 days): `hoursFromNow: 48`

### Advanced Setup (Specific Launch Date)

**To launch at a specific date/time:**

1. Open `website/config.js`
2. Set a specific launch date:
   ```javascript
   countdown: {
     enabled: true,
     hoursFromNow: 10,        // This will be ignored
     launchDate: '2026-02-06T00:00:00Z',  // Set your date here
   }
   ```

**Date Format:** `YYYY-MM-DDTHH:mm:ssZ` (UTC timezone)

**Examples:**
- Feb 6, 2026 at midnight UTC: `'2026-02-06T00:00:00Z'`
- Feb 10, 2026 at 3:30 PM UTC: `'2026-02-10T15:30:00Z'`
- March 1, 2026 at 9:00 AM UTC: `'2026-03-01T09:00:00Z'`

---

## 🚀 How to Use

### Enable Countdown Mode

1. **Edit `website/config.js`:**
   ```javascript
   countdown: {
     enabled: true,           // Set to true
     hoursFromNow: 10,        // Set your hours
     launchDate: null,
   }
   ```

2. **Deploy your website** with all the new files

3. **Users will see the countdown page** when they visit

4. **Website automatically unlocks** when countdown reaches zero

### Disable Countdown Mode

To show the main website immediately:

1. **Edit `website/config.js`:**
   ```javascript
   countdown: {
     enabled: false,          // Set to false
     hoursFromNow: 10,
     launchDate: null,
   }
   ```

2. **Redeploy** and the main site will be accessible

---

## 🎨 Customization

### Change Countdown Duration

**In `website/config.js`:**
```javascript
hoursFromNow: 10,  // Change to any number of hours
```

### Change Background Colors

**In `website/countdown.html`, find the CSS:**
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Popular gradient options:**
- Blue to Purple: `#667eea 0%, #764ba2 100%`
- Ocean: `#2E3192 0%, #1BFFFF 100%`
- Sunset: `#FF6B6B 0%, #FFE66D 100%`
- Forest: `#134E5E 0%, #71B280 100%`
- Fire: `#F83600 0%, #F9D423 100%`

### Change Logo

**In `website/countdown.html`, find:**
```html
<div class="logo">A</div>
```

Change the "A" to any letter or emoji you want!

---

## 🧪 Testing

### Test Countdown Locally

1. **Set a short countdown** (e.g., 5 minutes):
   ```javascript
   hoursFromNow: 0.083,  // 5 minutes (5/60 hours)
   ```

2. **Open `countdown.html`** in your browser

3. **Wait 5 minutes** and it should redirect to `index.html`

### Test Immediate Access

1. **Set enabled to false:**
   ```javascript
   enabled: false,
   ```

2. **Visit the website** - should see main site immediately

### Reset Countdown

If you need to reset the countdown timer:

1. **Open browser console** (F12)
2. **Run this command:**
   ```javascript
   localStorage.removeItem('adustech_launch_time');
   ```
3. **Refresh the page**

---

## 📊 How It Works

### Flow Diagram

```
User visits website
       ↓
config.js loads
       ↓
Is countdown enabled? ──No──→ Show main website
       ↓
      Yes
       ↓
Is there a stored launch time? ──No──→ Calculate new launch time
       ↓                                        ↓
      Yes                              Store in localStorage
       ↓                                        ↓
Is current time < launch time? ────────────────┘
       ↓
      Yes ──→ Show countdown.html
       ↓
      No ──→ Show main website (index.html)
```

### Persistence

- **localStorage Key:** `adustech_launch_time`
- **Stored Value:** ISO date string of launch time
- **Duration:** Persists until countdown ends or localStorage cleared
- **Cross-tab:** Works across multiple tabs/windows

---

## 🔒 Security Notes

- Configuration is client-side only
- Users can bypass by disabling JavaScript or clearing localStorage
- For true access control, use server-side authentication
- This is best for announcements, not security

---

## 🚨 Troubleshooting

### Countdown doesn't show

**Check:**
1. `enabled: true` in config.js?
2. Files uploaded correctly?
3. Browser JavaScript enabled?
4. Check browser console for errors (F12)

### Countdown shows wrong time

**Fix:**
1. Check your `hoursFromNow` or `launchDate` setting
2. Clear localStorage: `localStorage.removeItem('adustech_launch_time')`
3. Refresh page

### Can't access main site

**Quick fix:**
1. Set `enabled: false` in config.js
2. Or clear localStorage in browser console
3. Redeploy website

### Countdown finished but still showing

**Fix:**
1. Hard refresh page (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Clear localStorage

---

## 📱 Mobile Compatibility

✅ Fully responsive design  
✅ Touch-friendly interface  
✅ Optimized for all screen sizes  
✅ Works on iOS and Android browsers  

---

## 🎉 Examples

### Launch in 1 hour
```javascript
countdown: {
  enabled: true,
  hoursFromNow: 1,
  launchDate: null,
}
```

### Launch tomorrow at noon UTC
```javascript
countdown: {
  enabled: true,
  hoursFromNow: 10,  // Ignored when launchDate is set
  launchDate: '2026-02-06T12:00:00Z',
}
```

### Launch in 3 days
```javascript
countdown: {
  enabled: true,
  hoursFromNow: 72,  // 24 * 3 = 72 hours
  launchDate: null,
}
```

---

## 📞 Support

For issues or questions:
1. Check this README
2. Review the code comments in config.js
3. Check browser console for errors
4. Test with a short countdown first

---

## ✅ Deployment Checklist

Before deploying with countdown:

- [ ] Set desired countdown duration in config.js
- [ ] Test countdown locally
- [ ] Verify all files are uploaded:
  - [ ] config.js
  - [ ] countdown.html
  - [ ] index.html (with countdown check)
- [ ] Test on mobile device
- [ ] Verify auto-redirect works
- [ ] Set enabled to true in config.js
- [ ] Deploy to production

After countdown ends:

- [ ] Verify main site is accessible
- [ ] Consider setting enabled to false
- [ ] Monitor for any issues

---

## 🔄 Future Enhancements

Potential additions:
- Admin panel to change countdown time
- Email notification when countdown ends
- Multiple countdown stages
- Custom messages for different time ranges
- Analytics tracking

---

**Last Updated:** February 5, 2026  
**Version:** 1.0  
**Status:** ✅ Ready to Use
