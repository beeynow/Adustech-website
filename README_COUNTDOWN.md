# 🕐 Website Countdown Timer System

## Quick Start

### 1. Configure the Countdown
Edit `website/.env`:
```bash
COUNTDOWN_ENABLED=true
COUNTDOWN_HOURS=10
```

### 2. Test It
```bash
cd website
python3 -m http.server 8080
```
Open: http://localhost:8080/test-countdown.html

### 3. Deploy
Upload all files and it's ready to go!

---

## Configuration

### Change Countdown Duration
Open `website/.env` and modify:
```bash
COUNTDOWN_HOURS=10  # Change to any number
```

**Examples:**
- `0.0167` = 1 minute (testing)
- `1` = 1 hour
- `10` = 10 hours (default)
- `24` = 24 hours (1 day)
- `168` = 1 week

### Enable/Disable Countdown
```bash
COUNTDOWN_ENABLED=true   # Show countdown
COUNTDOWN_ENABLED=false  # Show website immediately
```

---

## Files Overview

| File | Purpose |
|------|---------|
| `.env` | **EDIT THIS** - Main configuration |
| `config.js` | JavaScript countdown logic |
| `countdown.html` | Beautiful countdown page |
| `index.html` | Main website (auto-redirects if countdown active) |
| `test-countdown.html` | Test & debug tool |
| `COUNTDOWN_INSTRUCTIONS.md` | Complete documentation |

---

## How It Works

1. User visits your website
2. `config.js` checks if countdown is active
3. If active → Redirect to countdown page
4. Countdown shows time remaining
5. When timer expires → Redirect to main website

---

## Testing

### Quick 1-Minute Test
1. Edit `config.js`
2. Change `hoursFromNow: 0.0167` (1 minute)
3. Open `test-countdown.html`
4. Click "Clear Countdown Data"
5. Click "Test Redirect"

### Full Test
1. Keep default `COUNTDOWN_HOURS=10`
2. Open your website
3. Should see countdown page
4. Wait or manually advance time

---

## Resetting Countdown

**Method 1:** Use test page
- Open `test-countdown.html`
- Click "Clear Countdown Data"

**Method 2:** Browser DevTools
- F12 → Application → localStorage
- Delete key: `adustech_launch_time`

**Method 3:** Private/Incognito Window
- Opens fresh countdown every time

---

## Customization

Edit `countdown.html`:
- **Colors:** Modify CSS gradient
- **Logo:** Change emoji/image
- **Message:** Update text content
- **Social Links:** Uncomment and add links

---

## Features

✅ Configurable via .env file  
✅ Beautiful animated design  
✅ Real-time countdown (days, hours, minutes, seconds)  
✅ Progress bar  
✅ Persistent across page refreshes  
✅ Mobile responsive  
✅ Auto-redirect when complete  
✅ Test & debug tools included  

---

## Support

For detailed instructions, see `COUNTDOWN_INSTRUCTIONS.md`

---

**Status:** ✅ Production Ready  
**Version:** 1.0  
**Last Updated:** February 5, 2026
