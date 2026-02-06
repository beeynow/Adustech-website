// Website Configuration
// This file contains configuration for the countdown timer

const WEBSITE_CONFIG = {
  // Countdown Configuration
  // ⚙️ CONFIGURABLE VIA .env FILE
  countdown: {
    // Enable or disable countdown mode
    // From .env: COUNTDOWN_ENABLED=true/false
    enabled: true,
    
    // Countdown duration in MINUTES (easier for testing!)
    // From .env: COUNTDOWN_MINUTES=10 (for 10 minutes)
    // Examples: 10 minutes, 60 minutes (1 hour), 600 minutes (10 hours)
    minutesFromNow: 10,  // ⏱️ 10 MINUTES for easy testing
    
    // Fixed start time for countdown (when the countdown was first set)
    // This ensures ALL USERS see the SAME countdown
    // Format: ISO 8601 timestamp (UTC)
    // ⚠️ IMPORTANT: This gets automatically updated when you run set-countdown-now.sh
    countdownStartTime: '2026-02-06T16:47:33Z',
    
    // OR set a specific launch date/time (UTC)
    // Format: 'YYYY-MM-DDTHH:mm:ssZ'
    // Example: '2026-02-06T01:00:00Z'
    // This takes precedence over minutesFromNow
    // Leave as null to use countdownStartTime + minutesFromNow
    launchDate: null,
  },
  
  // Website metadata
  metadata: {
    name: 'ADUSTECH',
    tagline: 'Campus Hub for Students',
    description: 'Connect, share, and stay informed with your campus community',
  }
};

// Get countdown target time (synchronized for all users - NO localStorage)
function getCountdownTarget() {
  // If specific launch date is set, use it (highest priority)
  if (WEBSITE_CONFIG.countdown.launchDate) {
    return new Date(WEBSITE_CONFIG.countdown.launchDate);
  }
  
  // Calculate target from fixed countdown start time
  // This ensures ALL users see the SAME countdown
  const startTime = new Date(WEBSITE_CONFIG.countdown.countdownStartTime);
  const minutesToAdd = WEBSITE_CONFIG.countdown.minutesFromNow;
  const targetTime = new Date(startTime.getTime() + minutesToAdd * 60 * 1000);
  
  return targetTime;
}

// Check if countdown is active
function isCountdownActive() {
  if (!WEBSITE_CONFIG.countdown.enabled) {
    return false;
  }
  
  const targetTime = getCountdownTarget();
  return new Date() < targetTime;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEBSITE_CONFIG;
}
