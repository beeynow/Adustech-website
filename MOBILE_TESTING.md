# 📱 Mobile Countdown Testing Guide

## Quick Test on Your Phone

### Step 1: Find Your Computer's IP Address

**On Mac/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

**On Windows:**
```cmd
ipconfig
```

Look for your local IP (usually starts with 192.168.x.x or 10.0.x.x)

### Step 2: Make Sure Server is Running

```bash
cd website
python3 -m http.server 8080
```

### Step 3: Access from Your Phone

**Make sure your phone is on the SAME Wi-Fi network as your computer!**

Then open these URLs in your phone's browser:

1. **Mobile Test Page (Recommended):**
   ```
   http://YOUR_IP:8080/mobile-test.html
   ```
   Example: `http://192.168.1.100:8080/mobile-test.html`

2. **Direct Countdown Page:**
   ```
   http://YOUR_IP:8080/countdown.html
   ```

3. **Main Site (should redirect to countdown):**
   ```
   http://YOUR_IP:8080/
   ```

---

## What You Should See

### If Countdown is ACTIVE (within 10 minutes):
- Opening `/` → Redirects to `countdown.html`
- Beautiful countdown timer
- Days, Hours, Minutes, Seconds
- Progress bar

### If Countdown is EXPIRED:
- Opening `/` → Shows main website
- No redirect

---

## Troubleshooting Mobile Issues

### Issue: Can't Access from Phone

**Solution:**
1. Check both devices on same Wi-Fi
2. Check firewall isn't blocking port 8080
3. Try disabling firewall temporarily:
   ```bash
   # Mac
   sudo pfctl -d
   
   # Linux
   sudo ufw allow 8080
   ```

### Issue: Page Loads but No Redirect

**Solution:**
1. Open mobile browser console (if available)
2. Check `mobile-test.html` to see countdown status
3. Refresh countdown: `./apply-env-config.sh`

### Issue: Countdown Shows Wrong Time

**Solution:**
1. Make sure countdown start time is current
2. Run: `cd website && ./apply-env-config.sh`
3. This sets start time to NOW

---

## Quick Test (1 Minute Countdown)

Want to test quickly? Set to 1 minute:

```bash
cd website
sed -i 's/COUNTDOWN_MINUTES=.*/COUNTDOWN_MINUTES=1/' .env
./apply-env-config.sh
```

Then test on phone within 1 minute!

---

## Reset to 10 Minutes

```bash
cd website
sed -i 's/COUNTDOWN_MINUTES=.*/COUNTDOWN_MINUTES=10/' .env
./apply-env-config.sh
```

---

## Mobile Test Page Features

The `mobile-test.html` page shows:
- ✅ Current countdown status
- ⏰ Current time vs target time
- ⏱️ Time remaining
- 🔄 Auto-refresh every 5 seconds
- 🔘 Quick navigation buttons

Perfect for testing on mobile!

---

## Example Test Session

1. Start server:
   ```bash
   cd website
   python3 -m http.server 8080
   ```

2. Get your IP:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   # Let's say it's 192.168.1.100
   ```

3. On phone, open:
   ```
   http://192.168.1.100:8080/mobile-test.html
   ```

4. Check status - should say "ACTIVE ✅"

5. Click "Go to Main Site" button

6. Should redirect to countdown page!

---

## Production Testing

When deployed to production (e.g., Vercel):

```
https://yourdomain.com/mobile-test.html
https://yourdomain.com/countdown.html
https://yourdomain.com/
```

All should work the same way!

---

Last Updated: February 6, 2026
Status: ✅ Mobile Ready
