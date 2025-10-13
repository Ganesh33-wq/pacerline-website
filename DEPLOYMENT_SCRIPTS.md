# Pacerline Website - Deployment Scripts

## 🚀 Quick Deployment Guide

### Files Overview
- `PROD_DEPLOYMENT.md` - Complete deployment documentation
- `deploy-update.sh` - Linux production update script  
- `deploy-update.bat` - Windows local testing script
- `rollback.sh` - Emergency rollback script

### 📋 Database Protection Status
✅ Database files excluded from Git:
- `*.db` 
- `*.sqlite`
- `production.db`
- `uploads/*` (except .gitkeep)

### 🔄 Production Update Process

#### On Your Local Machine (Windows):
```bash
# Test locally first
deploy-update.bat
```

#### On Production Server (Linux):
```bash
# Make script executable (first time only)
chmod +x deploy-update.sh
chmod +x rollback.sh

# Run deployment
sudo ./deploy-update.sh
```

### 🆘 Emergency Rollback
If something goes wrong:
```bash
sudo ./rollback.sh
```

### 📊 Quick Status Check
```bash
# Check application status
pm2 status

# Check recent logs
pm2 logs --lines 20

# Test website
curl -I https://pacerline.com
```

### 🎯 URLs After Deployment
- **Website**: https://pacerline.com
- **Admin Panel**: https://pacerline.com/admin/login
- **Admin Credentials**: admin / admin123

### 📝 What Gets Preserved
- ✅ Database (`production.db`)
- ✅ Uploaded files (`uploads/`)
- ✅ Environment variables
- ✅ PM2 configuration
- ✅ SSL certificates

### 🔄 Typical Workflow
1. **Local Development**: Make changes, test locally
2. **Git Push**: `git add .` → `git commit -m "message"` → `git push`
3. **Production Update**: SSH to server → `sudo ./deploy-update.sh`
4. **Verification**: Check website and admin panel
5. **Rollback if needed**: `sudo ./rollback.sh`

### 📞 Support Information
- Production Server: https://pacerline.com
- Database: SQLite with automatic backups
- Process Manager: PM2 with ecosystem configuration
- Web Server: Nginx reverse proxy with SSL

---
*Last Updated: $(date)*