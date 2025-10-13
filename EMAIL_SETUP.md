# 📧 EMAIL SETUP GUIDE - Pacerline Website

## 🎯 Email System Overview

Your website now sends automatic emails for:

### 📩 **Demo Booking Form**
- **Admin Email**: Complete booking details with client info, date, time, service
- **Client Email**: Confirmation with booking details and next steps

### 📞 **Contact Form** 
- **Admin Email**: Complete contact details with name, email, phone, message
- **Client Email**: Thank you message with confirmation

### ℹ️ **About Form**
- **Admin Email**: Visitor details and inquiry information  
- **Client Email**: Thank you message and company information

### 💼 **Job Applications**
- **Client Email ONLY**: Application confirmation (no admin email)

## 🔧 Gmail Setup Instructions

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Follow the steps to enable 2FA

### Step 2: Generate App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **App passwords**
3. Select **Mail** and **Other (Custom name)**
4. Enter "Pacerline Website" as the name
5. Copy the 16-character app password

### Step 3: Update Environment Files
Replace `your_app_specific_password_here` in both files:
- `.env.local` (for local development)
- `.env.production` (for production server)

```bash
EMAIL_PASS=your_16_character_app_password
```

## 🧪 Testing Email System

### Local Testing:
```bash
# Update .env.local with app password first
node test-email.js
```

### Production Testing:
```bash
# SSH to your server
ssh root@srv1007931

# Navigate to project
cd /var/www/pacerline-website

# Update .env.production with app password
nano .env.production

# Test the form on website
curl -X POST https://pacerline.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","query":"Test message"}'
```

## 📧 Email Configuration Details

### SMTP Settings:
- **Host**: smtp.gmail.com
- **Port**: 587 (STARTTLS)
- **Security**: STARTTLS
- **Authentication**: Username/App Password

### Email Addresses:
- **From**: info@pacerline.com (sender)
- **Admin**: ramy@pacerline.com (receives notifications)
- **Clients**: Their submitted email (receives confirmations)

## 🔍 Troubleshooting

### Common Issues:

#### 1. "Invalid login" Error
**Solution**: Generate and use Gmail app password instead of regular password

#### 2. "Authentication failed" Error  
**Solutions**:
- Enable 2-factor authentication on Gmail
- Generate new app password
- Check username spelling: `info@pacerline.com`

#### 3. "Connection timeout" Error
**Solutions**:
- Check internet connection
- Verify SMTP host: `smtp.gmail.com`
- Verify port: `587`

#### 4. Emails not being received
**Check**:
1. Spam/Junk folders
2. Email addresses are correct
3. Check server logs: `pm2 logs`

## 📋 Production Deployment Checklist

### Before Deploying:
- [ ] Gmail app password generated
- [ ] `.env.production` updated with correct app password
- [ ] Tested email locally with `node test-email.js`

### After Deploying:
- [ ] Upload `.env.production` to server
- [ ] Restart application: `pm2 restart all`
- [ ] Test contact form on live website
- [ ] Check both admin and client receive emails

## 🚀 Quick Setup Commands

### For Production Server:
```bash
# Upload environment file
scp .env.production root@srv1007931:/var/www/pacerline-website/

# SSH to server
ssh root@srv1007931

# Navigate to project
cd /var/www/pacerline-website

# Restart application
pm2 restart all

# Check logs
pm2 logs --lines 20
```

## 📊 Email Templates

All email templates are professional with:
- ✅ Responsive HTML design
- ✅ Company branding
- ✅ Clear call-to-actions  
- ✅ Contact information
- ✅ Professional styling

## 🎉 Success Indicators

When working correctly, you'll see in logs:
```
✅ Demo booking emails sent successfully
✅ Contact form emails sent successfully  
✅ About form emails sent successfully
✅ Job application acknowledgment email sent successfully
```

---

**🔗 Important Links:**
- Gmail App Passwords: https://support.google.com/mail/answer/185833
- Gmail 2FA Setup: https://support.google.com/accounts/answer/185839
- SMTP Troubleshooting: https://support.google.com/mail/answer/7126229

**📞 Need Help?**
Check server logs with: `pm2 logs` or `tail -f /var/log/nginx/error.log`
