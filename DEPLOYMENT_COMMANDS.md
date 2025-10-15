# 🚀 Server Deployment Commands - Step by Step

## 📋 **Complete Deployment Process**

### 1️⃣ **Connect to Your Server**
```bash
# SSH into your server (replace with your server details)
ssh username@your-server-ip
# OR if using a key file
ssh -i /path/to/your-key.pem username@your-server-ip
```

### 2️⃣ **Navigate to Project Directory**
```bash
# Go to your project folder
cd /path/to/your/pacerline-website
# OR if it's in home directory
cd ~/pacerline-website
```

### 3️⃣ **Check Current Status**
```bash
# Check current git status
git status

# Check current branch
git branch

# Check if there are any running processes
pm2 list
```

### 4️⃣ **Pull Latest Code**
```bash
# Fetch latest changes from GitHub
git fetch origin

# Pull the latest code from main branch
git pull origin main

# OR force pull if there are conflicts
git reset --hard origin/main
```

### 5️⃣ **Install Dependencies**
```bash
# Install any new npm packages
npm install

# OR if using yarn
yarn install

# Clear npm cache if needed
npm cache clean --force
```

### 6️⃣ **Environment Setup**
```bash
# Copy production environment variables
cp .env.example .env.production

# Edit environment variables if needed
nano .env.production
# OR
vim .env.production
```

### 7️⃣ **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Push database schema changes
npx prisma db push

# OR run migrations if you have them
npx prisma migrate deploy
```

### 8️⃣ **Build the Application**
```bash
# Build the Next.js application
npm run build

# OR if using yarn
yarn build
```

### 9️⃣ **Stop Current Application**
```bash
# Stop PM2 processes
pm2 stop all

# OR stop specific app
pm2 stop pacerline-website

# Check status
pm2 list
```

### 🔟 **Start Application**
```bash
# Start with PM2 using ecosystem file
pm2 start ecosystem.config.js

# OR start directly
pm2 start npm --name "pacerline-website" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
```

---

## 🔧 **Alternative Commands (if PM2 not working)**

### **Using Direct Node**
```bash
# Start in production mode
NODE_ENV=production npm start

# OR start in background with nohup
nohup NODE_ENV=production npm start > app.log 2>&1 &
```

### **Using Docker (if containerized)**
```bash
# Rebuild Docker image
docker build -t pacerline-website .

# Stop current container
docker stop pacerline-container

# Remove old container
docker rm pacerline-container

# Start new container
docker run -d --name pacerline-container -p 3000:3000 pacerline-website
```

---

## 🔍 **Verification Commands**

### **Check Application Status**
```bash
# Check PM2 status
pm2 status

# Check application logs
pm2 logs pacerline-website

# Check if app is running on port
netstat -tulpn | grep :3000

# Test application response
curl http://localhost:3000

# Check system resources
pm2 monit
```

### **Check Database**
```bash
# Open Prisma Studio (if needed)
npx prisma studio --port 5555

# Check database connection
npx prisma db seed
```

---

## 🌐 **Domain & SSL Commands**

### **Nginx Configuration (if using)**
```bash
# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Restart nginx if needed
sudo systemctl restart nginx
```

### **SSL Certificate (if using Let's Encrypt)**
```bash
# Renew SSL certificate
sudo certbot renew

# Test SSL certificate
curl -I https://yourdomain.com
```

---

## 📊 **Monitoring Commands**

### **Real-time Monitoring**
```bash
# Watch PM2 processes
pm2 monit

# Watch application logs
pm2 logs --lines 50

# Watch system resources
htop
```

### **Health Check**
```bash
# Test all endpoints
curl http://localhost:3000/api/health
curl http://localhost:3000/api/admin/login
curl http://localhost:3000

# Check response time
time curl http://localhost:3000
```

---

## 🚨 **Troubleshooting Commands**

### **If Build Fails**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version
npm --version
```

### **If Database Issues**
```bash
# Reset database
npx prisma db push --force-reset

# Check database file permissions
ls -la prisma/

# Regenerate Prisma client
npx prisma generate
```

### **If Port Issues**
```bash
# Check what's running on port 3000
lsof -i :3000

# Kill process on port 3000
kill -9 $(lsof -t -i:3000)

# Find available ports
netstat -tulpn | grep LISTEN
```

---

## 📝 **Complete Deployment Script**

### **Create deployment script (deploy.sh)**
```bash
#!/bin/bash
echo "🚀 Starting deployment..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build application
echo "🔨 Building application..."
npm run build

# Setup database
echo "🗄️ Setting up database..."
npx prisma generate
npx prisma db push

# Restart application
echo "🔄 Restarting application..."
pm2 restart all

# Check status
echo "✅ Checking status..."
pm2 status

echo "🎉 Deployment complete!"
```

### **Make it executable and run**
```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

---

## 🎯 **Quick Deployment (One-liner)**
```bash
git pull origin main && npm install && npm run build && npx prisma generate && npx prisma db push && pm2 restart all && pm2 status
```

---

## 📋 **Deployment Checklist**

- [ ] SSH into server
- [ ] Navigate to project directory
- [ ] Pull latest code from GitHub
- [ ] Install new dependencies
- [ ] Update environment variables
- [ ] Generate Prisma client
- [ ] Build the application
- [ ] Stop current processes
- [ ] Start new processes
- [ ] Verify application is running
- [ ] Check logs for errors
- [ ] Test key endpoints
- [ ] Monitor performance

---

## 🔗 **Important URLs to Test After Deployment**

```bash
# Main website
curl https://yourdomain.com

# Admin dashboard
curl https://yourdomain.com/admin/login

# API endpoints
curl https://yourdomain.com/api/jobs
curl https://yourdomain.com/api/admin/contacts

# Careers and Contact pages
curl https://yourdomain.com/careers
curl https://yourdomain.com/contact
```

---

**🎉 Your Pacerline website should now be deployed with all the latest enhancements!**