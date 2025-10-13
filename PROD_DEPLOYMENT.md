# Production Deployment Guide - Code Updates
**Pacerline Website - Full-Stack Application**

This guide explains how to deploy new code updates to your production server while preserving your database and existing data.

## 🔄 **Quick Update Commands (Copy & Paste)**

```bash
#!/bin/bash
# Production Update Script
cd /var/www/pacerline-website

# 1. Backup current database (safety first!)
cp production.db production.db.backup.$(date +%Y%m%d_%H%M%S)

# 2. Stop application
pm2 stop all

# 3. Pull latest code
git pull origin main

# 4. Install new dependencies (if any)
npm install

# 5. Rebuild application
npm run build

# 6. Regenerate Prisma client (if schema changed)
npx prisma generate

# 7. Apply database migrations (safe - won't delete data)
npx prisma db push

# 8. Restart application
pm2 restart all

# 9. Check status
pm2 status
pm2 logs --lines 10

echo "✅ Deployment completed!"
echo "🌐 Website: https://pacerline.com"
echo "🔐 Admin: https://pacerline.com/admin/login"
```

## 📋 **Step-by-Step Manual Process**

### **1. Backup Database (Always do this first!)**
```bash
cd /var/www/pacerline-website
cp production.db production.db.backup.$(date +%Y%m%d_%H%M%S)
ls -la *.db.backup*  # Verify backup was created
```

### **2. Stop Application**
```bash
pm2 stop all
pm2 status  # Verify all processes are stopped
```

### **3. Pull Latest Code**
```bash
git status  # Check current status
git pull origin main  # Get latest code
```

### **4. Install Dependencies**
```bash
# Only if package.json changed
npm install

# Check for new packages
npm audit  # Optional: check for vulnerabilities
```

### **5. Rebuild Application**
```bash
npm run build
ls -la .next/  # Verify build completed
cat .next/BUILD_ID  # Should show build ID
```

### **6. Update Database Schema (if needed)**
```bash
# Generate new Prisma client
npx prisma generate

# Apply schema changes (safe - preserves data)
npx prisma db push

# Optional: View database
npx prisma studio --port 5556  # Run in background
```

### **7. Restart Application**
```bash
pm2 restart all
pm2 status
pm2 logs --lines 20  # Check for errors
```

### **8. Verify Deployment**
```bash
# Check if port 3000 is listening
netstat -tlnp | grep :3000

# Test local connection
curl -I http://localhost:3000

# Test live website
curl -I https://pacerline.com

# Test admin API
curl -X POST https://pacerline.com/api/admin/auth \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

## 🛡️ **Database Safety Features**

### **What's Protected:**
- ✅ Database files (`*.db`) are **excluded from git**
- ✅ `prisma db push` **preserves existing data**
- ✅ Automatic backup before each deployment
- ✅ Uploaded files in `/uploads/` are **preserved**

### **What Gets Updated:**
- ✅ Application code (pages, components, APIs)
- ✅ Dependencies (npm packages)
- ✅ Database schema (new tables/columns only)
- ✅ Static assets (images, CSS, JS)

## 🚨 **Emergency Rollback**

If something goes wrong:

```bash
# 1. Stop application
pm2 stop all

# 2. Restore database backup
cd /var/www/pacerline-website
ls -la *.db.backup*  # Find latest backup
cp production.db.backup.YYYYMMDD_HHMMSS production.db

# 3. Rollback code (if needed)
git log --oneline -5  # See recent commits
git reset --hard HEAD~1  # Go back 1 commit
# OR
git reset --hard <commit-hash>  # Go to specific commit

# 4. Rebuild and restart
npm run build
npx prisma generate
pm2 restart all
```

## 📁 **File Structure (What's in Git vs What's Not)**

### **IN GIT (gets updated):**
```
pacerline-website/
├── pages/           ✅ Application code
├── components/      ✅ React components
├── lib/            ✅ Utilities
├── styles/         ✅ CSS files
├── public/         ✅ Static assets
├── prisma/schema.prisma  ✅ Database schema
├── package.json    ✅ Dependencies
└── ...config files ✅ Configuration
```

### **NOT IN GIT (preserved during updates):**
```
pacerline-website/
├── production.db      ❌ Database file
├── dev.db            ❌ Development database
├── .env              ❌ Environment variables
├── uploads/          ❌ User uploaded files
├── *.db.backup.*     ❌ Database backups
└── node_modules/     ❌ Installed packages
```

## ⚡ **Quick Commands Reference**

```bash
# Quick update (one-liner)
cd /var/www/pacerline-website && cp production.db production.db.backup.$(date +%Y%m%d_%H%M%S) && pm2 stop all && git pull origin main && npm install && npm run build && npx prisma generate && npx prisma db push && pm2 restart all && pm2 status

# Check application status
pm2 status
pm2 logs --lines 10

# Check website
curl -I https://pacerline.com

# View database backups
ls -la /var/www/pacerline-website/*.db.backup*

# Monitor in real-time
pm2 monit
```

## 🔧 **Troubleshooting Common Issues**

### **Build Fails:**
```bash
# Clear cache and retry
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### **Database Issues:**
```bash
# Reset Prisma client
npx prisma generate --force
npx prisma db push --force-reset  # ⚠️ Only if necessary
```

### **Application Won't Start:**
```bash
# Check logs
pm2 logs --lines 50

# Restart from scratch
pm2 delete all
pm2 start ecosystem.production.js
```

### **Environment Variables:**
```bash
# Verify .env file exists
cat /var/www/pacerline-website/.env

# Check if PM2 loaded environment
pm2 env 0
```

## 📞 **Support**

If you encounter issues:
1. Check PM2 logs: `pm2 logs --lines 50`
2. Check Nginx logs: `tail -f /var/log/nginx/error.log`
3. Verify port 3000: `netstat -tlnp | grep :3000`
4. Test local connection: `curl -I http://localhost:3000`

---
**Remember:** Always backup your database before deploying updates! 🛡️