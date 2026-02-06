#!/bin/bash

# Script to automatically set countdown start time to NOW
# This ensures all users see a synchronized countdown

echo "🕐 Setting Countdown Start Time..."

# Get current UTC time in ISO format
CURRENT_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "Current UTC Time: $CURRENT_TIME"

# Update config.js with current time
if [ -f "config.js" ]; then
    # For macOS (BSD sed)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/countdownStartTime: '[^']*'/countdownStartTime: '$CURRENT_TIME'/" config.js
    else
        # For Linux (GNU sed)
        sed -i "s/countdownStartTime: '[^']*'/countdownStartTime: '$CURRENT_TIME'/" config.js
    fi
    
    echo "✅ Countdown start time updated to: $CURRENT_TIME"
    echo ""
    echo "📋 Current Configuration:"
    grep -A 1 "countdownStartTime:" config.js
    grep "hoursFromNow:" config.js
    echo ""
    echo "🚀 The countdown will now be synchronized for all users!"
    echo "   Launch time will be: $CURRENT_TIME + hoursFromNow"
else
    echo "❌ Error: config.js not found!"
    echo "   Make sure you're in the website directory"
    exit 1
fi
