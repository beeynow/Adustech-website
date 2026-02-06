#!/bin/bash

# Script to apply .env configuration to config.js
# This reads COUNTDOWN_MINUTES from .env and updates config.js

echo "🔧 Applying .env configuration to config.js..."

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found!"
    echo "   Create .env file first (copy from .env.example)"
    exit 1
fi

# Read COUNTDOWN_MINUTES from .env
COUNTDOWN_MINUTES=$(grep "^COUNTDOWN_MINUTES=" .env | cut -d '=' -f2)
COUNTDOWN_ENABLED=$(grep "^COUNTDOWN_ENABLED=" .env | cut -d '=' -f2)
LAUNCH_DATE=$(grep "^LAUNCH_DATE=" .env | cut -d '=' -f2)

# Validate
if [ -z "$COUNTDOWN_MINUTES" ]; then
    COUNTDOWN_MINUTES=10
    echo "⚠️  COUNTDOWN_MINUTES not set, using default: 10 minutes"
fi

if [ -z "$COUNTDOWN_ENABLED" ]; then
    COUNTDOWN_ENABLED=true
    echo "⚠️  COUNTDOWN_ENABLED not set, using default: true"
fi

echo ""
echo "📋 Configuration from .env:"
echo "   COUNTDOWN_MINUTES: $COUNTDOWN_MINUTES"
echo "   COUNTDOWN_ENABLED: $COUNTDOWN_ENABLED"
if [ -n "$LAUNCH_DATE" ]; then
    echo "   LAUNCH_DATE: $LAUNCH_DATE"
fi
echo ""

# Get current UTC time
CURRENT_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Update config.js
if [ -f "config.js" ]; then
    # Update minutesFromNow
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/minutesFromNow: [0-9]*,/minutesFromNow: $COUNTDOWN_MINUTES,/" config.js
        sed -i '' "s/enabled: [a-z]*,/enabled: $COUNTDOWN_ENABLED,/" config.js
        sed -i '' "s/countdownStartTime: '[^']*'/countdownStartTime: '$CURRENT_TIME'/" config.js
        
        if [ -n "$LAUNCH_DATE" ]; then
            sed -i '' "s/launchDate: null,/launchDate: '$LAUNCH_DATE',/" config.js
        fi
    else
        sed -i "s/minutesFromNow: [0-9]*,/minutesFromNow: $COUNTDOWN_MINUTES,/" config.js
        sed -i "s/enabled: [a-z]*,/enabled: $COUNTDOWN_ENABLED,/" config.js
        sed -i "s/countdownStartTime: '[^']*'/countdownStartTime: '$CURRENT_TIME'/" config.js
        
        if [ -n "$LAUNCH_DATE" ]; then
            sed -i "s/launchDate: null,/launchDate: '$LAUNCH_DATE',/" config.js
        fi
    fi
    
    echo "✅ Configuration applied successfully!"
    echo ""
    echo "📊 Countdown Details:"
    echo "   Start Time: $CURRENT_TIME"
    echo "   Duration: $COUNTDOWN_MINUTES minutes"
    
    # Calculate end time
    if command -v date >/dev/null 2>&1; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            END_TIME=$(date -u -v+${COUNTDOWN_MINUTES}M +"%Y-%m-%dT%H:%M:%SZ")
        else
            END_TIME=$(date -u -d "+${COUNTDOWN_MINUTES} minutes" +"%Y-%m-%dT%H:%M:%SZ")
        fi
        echo "   End Time: $END_TIME"
    fi
    
    echo ""
    echo "🚀 Website will launch in $COUNTDOWN_MINUTES minutes from deployment!"
    echo "   All users will see the same countdown."
    
else
    echo "❌ Error: config.js not found!"
    exit 1
fi
