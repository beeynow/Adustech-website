# 🕐 Website Countdown Timer - Instructions

## Overview
The website includes a beautiful countdown timer that makes the site inaccessible until a specified time. This is perfect for launch announcements!

**IMPORTANT:** The countdown is now **synchronized for all users** - everyone sees the same countdown time!

---

## 📝 How to Configure

### **Quick Setup (When Deploying)**

1. **Open `website/config.js`**
2. **Set the countdown start time to NOW:**
   ```javascript
   countdownStartTime: '2026-02-05T15:30:00Z', // Change to current UTC time
   ```
   
3. **Set how many hours from that time:**
   ```javascript
   hoursFromNow: 10, // 10 hours from the start time
   ```

### **Automatic Setup (Recommended)**

Run this command to automatically set the current time:
```bash
cd website
node -e "const fs=require('fs'); const now=new Date().toISOString(); const cfg=fs.readFileSync('config.js','utf8'); fs.writeFileSync('config.js', cfg.replace(/countdownStartTime: '[^']+'/,'countdownStartTime: \\''+now+'\\''));"
echo "Countdown start time set to current time!"
```

### **Manual Configuration**

1. **Open `website/config.js`**
2. **Modify these settings:**
   ```javascript
   const WEBSITE_CONFIG = {
     countdown: {
       enabled: true,        // Set to false to disable countdown
       hoursFromNow: 10,     // Hours from countdownStartTime
       countdownStartTime: '2026-02-05T15:00:00Z', // START TIME (UTC)
       launchDate: null,     // Or set specific launch date
     }
   };
   ```

---

## ⚙️ Configuration Options

### COUNTDOWN_HOURS
- **Description**: Number of hours until website launch
- **Examples**:
  - `COUNTDOWN_HOURS=10` - 10 hours countdown
  - `COUNTDOWN_HOURS=24` - 24 hours (1 day) countdown
  - `COUNTDOWN_HOURS=168` - 168 hours (1 week) countdown
  - `COUNTDOWN_HOURS=0` - No countdown (immediate access)

### COUNTDOWN_ENABLED
- **Description**: Enable or disable countdown mode
- **Values**:
  - `true` - Countdown is active, website is inaccessible
  - `false` - No countdown, website is immediately accessible

### LAUNCH_DATE (Advanced)
- **Description**: Set a specific launch date/time
- **Format**: `YYYY-MM-DDTHH:mm:ssZ` (UTC timezone)
- **Example**: `LAUNCH_DATE=2026-02-06T00:00:00Z`
- **Note**: Leave empty to use `COUNTDOWN_HOURS` instead

---

## 🚀 How It Works

1. **First Visit**: When a user first visits the site, a countdown starts based on `COUNTDOWN_HOURS`
2. **Persistence**: The countdown end time is saved in browser localStorage
3. **Page Refresh**: The countdown persists across page refreshes
4. **Completion**: When countdown reaches zero, users are automatically redirected to the main website
5. **Auto-Redirect**: The system checks on every page load if countdown is active

---

## 🎨 Features

✅ **Beautiful Design**: Animated gradient background with floating particles  
✅ **Real-time Countdown**: Days, hours, minutes, and seconds  
✅ **Progress Bar**: Visual indicator of launch progress  
✅ **Persistent**: Countdown survives page refreshes  
✅ **Responsive**: Works perfectly on mobile and desktop  
✅ **Auto-Redirect**: Automatically redirects when countdown completes  
✅ **Configurable**: Easy to adjust countdown duration  

---

## 📱 Testing the Countdown

### Test with 1 Minute Countdown:
```bash
# In website/.env
COUNTDOWN_HOURS=0.0167  # 1 minute (0.0167 hours = 1 minute)
```

### Test with 5 Minutes:
```bash
COUNTDOWN_HOURS=0.0833  # 5 minutes
```

### Test with 1 Hour:
```bash
COUNTDOWN_HOURS=1
```

### Disable Countdown (Immediate Access):
```bash
COUNTDOWN_ENABLED=false
# OR
COUNTDOWN_HOURS=0
```

---

## 🔄 How It Works Now (Synchronized)

**OLD SYSTEM (localStorage):**
- Each user had their own countdown
- Different users saw different times
- Countdown reset on browser clear

**NEW SYSTEM (Fixed Server Time):**
- ✅ All users see the SAME countdown
- ✅ Countdown is synchronized globally
- ✅ No localStorage dependency
- ✅ Works across all browsers/devices

**How Synchronization Works:**
1. You set `countdownStartTime` to a fixed point (e.g., deployment time)
2. System calculates: `launchTime = countdownStartTime + hoursFromNow`
3. All users calculate from the SAME start time
4. Everyone sees the same countdown!

## 🔄 Changing the Countdown

To change the countdown duration:

### Method 1: Change Hours Only
Edit `config.js`:
```javascript
hoursFromNow: 24, // Change from 10 to 24 hours
```
This changes the duration from the SAME start time.

### Method 2: Reset Everything
1. Set new `countdownStartTime` to current time
2. Set new `hoursFromNow`
3. Refresh website

### Method 3: Use Specific Launch Date
```javascript
launchDate: '2026-02-06T12:00:00Z', // Launch at this exact time
```
This overrides `hoursFromNow`.

---

## 📂 File Structure

```
website/
├── .env                        # Configuration file (EDIT THIS!)
├── .env.example               # Example configuration
├── config.js                  # JavaScript configuration
├── countdown.html             # Countdown page
├── index.html                 # Main website (with redirect check)
└── COUNTDOWN_INSTRUCTIONS.md  # This file
```

---

## 🎯 Common Use Cases

### 1. Launch in 24 Hours
```bash
COUNTDOWN_ENABLED=true
COUNTDOWN_HOURS=24
```

### 2. Launch This Saturday at Midnight UTC
```bash
COUNTDOWN_ENABLED=true
LAUNCH_DATE=2026-02-08T00:00:00Z
```

### 3. Disable Countdown (Go Live Now)
```bash
COUNTDOWN_ENABLED=false
```

### 4. Weekly Launch (168 hours)
```bash
COUNTDOWN_ENABLED=true
COUNTDOWN_HOURS=168
```

---

## 🛠️ Troubleshooting

### Problem: Countdown doesn't start
**Solution**: Check that `COUNTDOWN_ENABLED=true` in .env

### Problem: Countdown time is wrong
**Solution**: Clear browser localStorage and refresh

### Problem: Website is still showing countdown after time expired
**Solution**: Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Problem: Want to test with shorter duration
**Solution**: Use decimal hours (e.g., 0.0167 for 1 minute)

---

## 💡 Tips

1. **Test First**: Always test with a short countdown (1-5 minutes) before setting longer durations
2. **Clear Cache**: When changing configuration, clear browser cache and localStorage
3. **UTC Time**: If setting a specific launch date, use UTC timezone
4. **User Communication**: The countdown page shows a beautiful message - customize it in `countdown.html`
5. **Social Links**: Uncomment social links in `countdown.html` if needed

---

## 🎨 Customization

Want to customize the countdown page? Edit `website/countdown.html`:

- **Colors**: Modify the gradient in the `<style>` section
- **Message**: Change the text in the `<p class="message">` section
- **Logo**: Update the emoji in `<div class="logo">`
- **Social Links**: Uncomment and add your social media links

---

## ✅ Quick Start Checklist

- [ ] Open `website/.env`
- [ ] Set `COUNTDOWN_ENABLED=true`
- [ ] Set `COUNTDOWN_HOURS=10` (or your desired duration)
- [ ] Test with a short countdown first (1-5 minutes)
- [ ] Clear browser localStorage
- [ ] Open `http://localhost/website/` or deploy
- [ ] Verify countdown is working
- [ ] Set actual launch duration
- [ ] Deploy to production

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review `config.js` for configuration options
3. Check browser console for any errors
4. Clear localStorage and try again

---

**Last Updated**: February 5, 2026  
**Version**: 1.0  
**Status**: ✅ Production Ready
