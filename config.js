// Website Configuration
// This file contains configuration for the countdown timer

const WEBSITE_CONFIG = {
  // Countdown Configuration
  // CHANGE THESE VALUES WHEN YOU DEPLOY
  countdown: {
    // Enable or disable countdown mode
    // Set to false to make website immediately accessible
    enabled: true,
    
    // Set countdown duration in hours from countdownStartTime
    // This will be used if no specific launch date is set
    // CHANGE THIS VALUE TO ADJUST COUNTDOWN DURATION
    hoursFromNow: 10,  // Change this number: COUNTDOWN_HOURS=10
    
    // Fixed start time for countdown (when the countdown was first set)
    // This ensures ALL USERS see the SAME countdown
    // Format: ISO 8601 timestamp (UTC)
    // Set this to the EXACT time you want the countdown to start from
    // Example: '2026-02-05T15:00:00Z' means countdown starts from Feb 5, 2026 at 3:00 PM UTC
    // IMPORTANT: Change this to the current time when you deploy!
    countdownStartTime: '2026-02-05T15:00:00Z', // ⚠️ CHANGE THIS WHEN YOU DEPLOY
    
    // OR set a specific launch date/time (UTC)
    // Format: 'YYYY-MM-DDTHH:mm:ssZ'
    // Example: '2026-02-06T01:00:00Z' means launch at Feb 6, 2026 at 1:00 AM UTC
    // This takes precedence over hoursFromNow
    // Leave as null to use countdownStartTime + hoursFromNow
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
  const hoursToAdd = WEBSITE_CONFIG.countdown.hoursFromNow;
  const targetTime = new Date(startTime.getTime() + hoursToAdd * 60 * 60 * 1000);
  
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
