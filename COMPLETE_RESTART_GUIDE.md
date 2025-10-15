# 🔄 Complete Server Restart Commands

## 🚀 **Complete System Restart Guide**

### 1️⃣ **Stop All Services**
```bash
# Stop PM2 processes (Node.js app)
pm2 stop all
pm2 delete all

# Stop Nginx
sudo systemctl stop nginx

# Kill any remaining Node processes
sudo pkill -f node
sudo pkill -f npm

# Check if anything is still running on port 3000
sudo lsof -ti:3000 | xargs sudo kill -9
```

### 2️⃣ **Clean Application Cache**
```bash
# Navigate to project directory
cd ~/pacerline-website

# Remove build cache
rm -rf .next
rm -rf node_modules/.cache

# Clear npm cache
npm cache clean --force

# Remove and reinstall node_modules
rm -rf node_modules package-lock.json
npm install
```

### 3️⃣ **Reset Database & Prisma**
```bash
# Generate Prisma client
npx prisma generate

# Reset and push database schema
npx prisma db push --force-reset

# Verify database
npx prisma studio --port 5555 &
```

### 4️⃣ **Rebuild Application**
```bash
# Build the Next.js application
npm run build

# Check build success
echo "Build completed with exit code: $?"
```

### 5️⃣ **Configure Nginx**
```bash
# Test Nginx configuration
sudo nginx -t

# If config is good, start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check Nginx status
sudo systemctl status nginx
```

### 6️⃣ **Start Application**
```bash
# Start with PM2
pm2 start ecosystem.config.js

# OR start directly if no ecosystem file
pm2 start npm --name "pacerline-website" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to auto-start on boot
pm2 startup
```

### 7️⃣ **Verify Everything is Running**
```bash
# Check PM2 status
pm2 status
pm2 logs

# Check Nginx status
sudo systemctl status nginx

# Check ports
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443
sudo netstat -tulpn | grep :3000

# Test application
curl http://localhost:3000
curl http://localhost
```

---

## ⚡ **Quick Restart Scripts**

### **complete-restart.sh**
```bash
#!/bin/bash
echo "🔄 Starting complete server restart..."

# Stop all services
echo "🛑 Stopping all services..."
pm2 stop all
pm2 delete all
sudo systemctl stop nginx
sudo pkill -f node

# Clean cache
echo "🧹 Cleaning cache..."
cd ~/pacerline-website
rm -rf .next node_modules/.cache
npm cache clean --force

# Reinstall dependencies
echo "📦 Reinstalling dependencies..."
rm -rf node_modules package-lock.json
npm install

# Setup Prisma
echo "🗄️ Setting up database..."
npx prisma generate
npx prisma db push

# Build application
echo "🔨 Building application..."
npm run build

# Start Nginx
echo "🌐 Starting Nginx..."
sudo systemctl start nginx

# Start application
echo "🚀 Starting application..."
pm2 start ecosystem.config.js
pm2 save

# Verify
echo "✅ Verifying services..."
pm2 status
sudo systemctl status nginx

echo "🎉 Complete restart finished!"
```

### **Make script executable and run:**
```bash
chmod +x complete-restart.sh
./complete-restart.sh
```

---

## 🌐 **Nginx Specific Commands**

### **Restart Nginx Only**
```bash
# Method 1: Restart
sudo systemctl restart nginx

# Method 2: Stop and Start
sudo systemctl stop nginx
sudo systemctl start nginx

# Method 3: Reload (for config changes)
sudo systemctl reload nginx

# Check status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### **Test Nginx Configuration**
```bash
# Test config syntax
sudo nginx -t

# Show Nginx version and config
nginx -V

# Check which config files are loaded
sudo nginx -T
```

---

## 🔧 **Application Specific Restart**

### **Frontend/Backend Reset**
```bash
# Stop application
pm2 stop all

# Clean everything
rm -rf .next node_modules/.cache
npm cache clean --force

# Fresh install
rm -rf node_modules package-lock.json
npm install

# Prisma setup
npx prisma generate
npx prisma db push

# Build and start
npm run build
pm2 start ecosystem.config.js
```

### **Database Reset**
```bash
# Complete database reset
npx prisma db push --force-reset

# Regenerate Prisma client
npx prisma generate

# Seed database (if you have seeds)
npx prisma db seed
```

---

## 🔍 **Troubleshooting Commands**

### **Check What's Running**
```bash
# Check all processes
ps aux | grep -E "(node|nginx|pm2)"

# Check ports in use
sudo ss -tulpn

# Check PM2 processes
pm2 list
pm2 logs --lines 50

# Check system resources
htop
df -h
free -h
```

### **Force Kill Everything**
```bash
# Kill all Node.js processes
sudo pkill -f node

# Kill all npm processes
sudo pkill -f npm

# Kill processes on specific ports
sudo fuser -k 3000/tcp
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp

# Kill PM2 daemon
pm2 kill
```

---

## 🛠️ **Service Management Commands**

### **Systemd Services**
```bash
# Restart all web services
sudo systemctl restart nginx
sudo systemctl restart pm2-root  # if PM2 is a service

# Check service status
sudo systemctl status nginx
sudo systemctl status pm2-root

# Enable auto-start on boot
sudo systemctl enable nginx
```

### **PM2 Management**
```bash
# Restart all PM2 apps
pm2 restart all

# Restart specific app
pm2 restart pacerline-website

# Reload without downtime
pm2 reload all

# Monitor in real-time
pm2 monit

# View logs
pm2 logs --lines 100
```

---

## 🚀 **One-Line Complete Restart**
```bash
pm2 stop all && pm2 delete all && sudo systemctl stop nginx && cd ~/pacerline-website && rm -rf .next node_modules && npm install && npx prisma generate && npx prisma db push && npm run build && sudo systemctl start nginx && pm2 start ecosystem.config.js && pm2 save && pm2 status
```

---

## 📋 **Restart Checklist**

- [ ] Stop PM2 processes
- [ ] Stop Nginx service  
- [ ] Kill remaining Node processes
- [ ] Clean build cache and node_modules
- [ ] Reinstall dependencies
- [ ] Generate Prisma client
- [ ] Push database schema
- [ ] Build application
- [ ] Start Nginx
- [ ] Start application with PM2
- [ ] Save PM2 configuration
- [ ] Verify all services are running
- [ ] Test application endpoints

---

## 🎯 **Quick Health Check**
```bash
# Test all endpoints
curl -I http://localhost
curl -I http://localhost:3000
curl -I http://localhost:3000/api/health

# Check response times
time curl http://localhost
```

**🎉 This will completely reset and restart your entire stack!**