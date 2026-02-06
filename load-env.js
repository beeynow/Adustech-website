// Load environment variables from .env file for the website
// This allows configuration without editing config.js

(function() {
  // Default configuration
  window.ENV_CONFIG = {
    COUNTDOWN_MINUTES: 10,
    COUNTDOWN_HOURS: 10,
    COUNTDOWN_ENABLED: true
  };

  // Try to load .env file (if served via server)
  // For static hosting, these values will be replaced during build
  
  // Note: In production, you can either:
  // 1. Use a build script to inject .env values into config.js
  // 2. Manually update config.js before deployment
  // 3. Use a simple server-side script to serve env values
  
  // For now, we'll read from config.js which can be updated via script
})();
