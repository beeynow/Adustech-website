// Website Configuration
// This file contains configuration for the countdown timer

const WEBSITE_CONFIG = {
  // Countdown Configuration
  // CHANGE THESE VALUES IN .env FILE OR HERE
  countdown: {
    // Enable or disable countdown mode
    // Set to false to make website immediately accessible
    enabled: true,
    
    // Set countdown duration in hours from now
    // This will be used if no specific launch date is set
    // CHANGE THIS VALUE TO ADJUST COUNTDOWN DURATION
    hoursFromNow: 10,  // Change this number in .env file: COUNTDOWN_HOURS=10
    
    // OR set a specific launch date/time (UTC)
    // Format: 'YYYY-MM-DDTHH:mm:ssZ'
    // Example: '2026-02-06T00:00:00Z'
    // Leave as null to use hoursFromNow instead
    launchDate: null,
    
    // Countdown expiry key for localStorage
    storageKey: 'adustech_launch_time',
  },
  
  // Website metadata
  metadata: {
    name: 'ADUSTECH',
    tagline: 'Campus Hub for Students',
    description: 'Connect, share, and stay informed with your campus community',
  }
};

// Calculate the target launch time
function getCountdownTarget() {
  const config = WEBSITE_CONFIG.countdown;
  
  // Check if we already have a countdown target in localStorage
  const storedTarget = localStorage.getItem(config.storageKey);
  if (storedTarget) {
    const targetTime = new Date(storedTarget);
    // Only use stored target if it's in the future
    if (targetTime > new Date()) {
      return targetTime;
    }
  }
  
  // Calculate new target time
  let targetTime;
  
  if (config.launchDate) {
    // Use specific launch date
    targetTime = new Date(config.launchDate);
  } else {
    // Use hours from now
    targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + config.hoursFromNow);
  }
  
  // Store the target time
  localStorage.setItem(config.storageKey, targetTime.toISOString());
  
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
