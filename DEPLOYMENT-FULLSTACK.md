# Full-Stack Next.js Deployment Guide

## Overview
Your application now includes:
- Frontend (Next.js pages)
- Backend APIs (/api routes)
- Database (SQLite with Prisma)
- Admin panel with authentication
- File uploads

## Step-by-Step Deployment Process

### 1. Install Node.js and PM2 on Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (version 18+)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Verify installation
node --version
npm --version
pm2 --version
```

### 2. Clone and Setup Project on Server
```bash
# Navigate to web directory
cd /var/www

# Clone your repository
sudo git clone https://github.com/Ganesh33-wq/pacerline-website.git
sudo chown -R www-data:www-data pacerline-website
cd pacerline-website

# Install dependencies
sudo -u www-data npm install

# Build the application
sudo -u www-data npm run build

# Generate Prisma client
sudo -u www-data npx prisma generate

# Run database migrations (create tables)
sudo -u www-data npx prisma db push
```

### 3. Environment Configuration
```bash
# Create production environment file
sudo nano /var/www/pacerline-website/.env.production

# Add these variables:
# Database
DATABASE_URL="file:./production.db"

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here

# NextAuth
NEXTAUTH_URL=https://pacerline.com
NEXTAUTH_SECRET=your-secure-nextauth-secret-here

# JWT Secret
JWT_SECRET=your-secure-jwt-secret-here

# File Upload
UPLOAD_DIR=./uploads

# Set proper permissions
sudo chown www-data:www-data /var/www/pacerline-website/.env.production
sudo chmod 600 /var/www/pacerline-website/.env.production
```

### 4. PM2 Configuration
```bash
# Create PM2 ecosystem file
sudo nano /var/www/pacerline-website/ecosystem.production.js
```

### 5. Updated Nginx Configuration
```nginx
# /etc/nginx/sites-available/pacerline.com

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name pacerline.com www.pacerline.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name pacerline.com www.pacerline.com;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/pacerline.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pacerline.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Proxy to Next.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Admin panel (optional separate port)
    location /admin {
        proxy_pass http://localhost:3000/admin;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API routes
    location /api {
        proxy_pass http://localhost:3000/api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Increase body size for file uploads
        client_max_body_size 10M;
    }

    # Static files from Next.js
    location /_next/static {
        proxy_pass http://localhost:3000/_next/static;
        expires 1y;
        add_header Cache-Control "public";
    }

    # Handle file uploads
    location /uploads {
        alias /var/www/pacerline-website/uploads;
        expires 1d;
        add_header Cache-Control "public";
    }
}
```

### 6. Deployment Commands
```bash
# Stop any existing processes
sudo pm2 stop all
sudo pm2 delete all

# Remove old static files (not needed anymore)
sudo rm -rf /var/www/html/*

# Start the Next.js application with PM2
cd /var/www/pacerline-website
sudo -u www-data pm2 start ecosystem.production.js

# Save PM2 configuration
sudo -u www-data pm2 save
sudo pm2 startup

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Check application status
sudo -u www-data pm2 status
sudo -u www-data pm2 logs
```

### 7. Database Setup
```bash
# Create uploads directory
sudo mkdir -p /var/www/pacerline-website/uploads
sudo chown www-data:www-data /var/www/pacerline-website/uploads
sudo chmod 755 /var/www/pacerline-website/uploads

# Initialize database with sample data (optional)
cd /var/www/pacerline-website
sudo -u www-data npx prisma db seed # if you have a seed file
```

### 8. Monitoring and Logs
```bash
# View application logs
sudo -u www-data pm2 logs

# Monitor resources
sudo -u www-data pm2 monit

# Restart application
sudo -u www-data pm2 restart all

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 9. SSL Certificate Renewal (automated)
```bash
# Test certificate renewal
sudo certbot renew --dry-run

# The certificate should auto-renew, but you can manually renew:
sudo certbot renew
sudo systemctl reload nginx
```

## Important Notes:
1. **Database**: SQLite file will be created in the project directory
2. **File Uploads**: Stored in `/var/www/pacerline-website/uploads`
3. **Environment**: Use `.env.production` for production variables
4. **Process Management**: PM2 handles application restarts and monitoring
5. **Security**: Admin credentials should be changed from defaults

## Troubleshooting:
- Check PM2 logs: `sudo -u www-data pm2 logs`
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Verify ports: `sudo netstat -tlnp | grep :3000`
- Test API endpoints: `curl https://pacerline.com/api/admin/contacts`