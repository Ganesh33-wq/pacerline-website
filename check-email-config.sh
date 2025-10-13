#!/bin/bash

# Email Configuration Checker for Pacerline Website
# This script helps verify email setup

echo "📧 PACERLINE EMAIL CONFIGURATION CHECKER"
echo "========================================"

# Check if .env.production exists
if [ -f ".env.production" ]; then
    echo "✅ .env.production file found"
    
    # Check if required environment variables are set
    source .env.production
    
    echo ""
    echo "📋 Configuration Check:"
    
    if [ -z "$EMAIL_HOST" ]; then
        echo "❌ EMAIL_HOST not set"
    else
        echo "✅ EMAIL_HOST: $EMAIL_HOST"
    fi
    
    if [ -z "$EMAIL_PORT" ]; then
        echo "❌ EMAIL_PORT not set"
    else
        echo "✅ EMAIL_PORT: $EMAIL_PORT"
    fi
    
    if [ -z "$EMAIL_USER" ]; then
        echo "❌ EMAIL_USER not set"
    else
        echo "✅ EMAIL_USER: $EMAIL_USER"
    fi
    
    if [ -z "$EMAIL_PASS" ] || [ "$EMAIL_PASS" = "your_app_specific_password_here" ]; then
        echo "❌ EMAIL_PASS not configured (still default value)"
        echo "   Please generate Gmail app password and update .env.production"
    else
        echo "✅ EMAIL_PASS: [CONFIGURED]"
    fi
    
    if [ -z "$ADMIN_EMAIL" ]; then
        echo "❌ ADMIN_EMAIL not set"
    else
        echo "✅ ADMIN_EMAIL: $ADMIN_EMAIL"
    fi
    
else
    echo "❌ .env.production file not found"
    echo "   Please create .env.production with email configuration"
fi

echo ""
echo "🔧 Next Steps:"
echo "1. Generate Gmail app password"
echo "2. Update EMAIL_PASS in .env.production"
echo "3. Restart application: pm2 restart all"
echo "4. Test forms on website"

echo ""
echo "📖 For detailed setup instructions, see:"
echo "   EMAIL_SETUP.md"