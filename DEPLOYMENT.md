# Linux Server Deployment Guide

## Prerequisites
- Ubuntu 20.04 or newer Linux server
- Root or sudo access
- Domain name pointing to your server IP (pacerline.com)

## Step 1: Initial Server Setup

### 1.1 Update your server
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Clone the repository
```bash
git clone https://github.com/Ganesh33-wq/pacerline-website.git
cd pacerline-website
```

## Step 2: Run Deployment Script

### 2.1 Make the script executable
```bash
chmod +x deploy-linux.sh
```

### 2.2 Run the deployment script
```bash
sudo ./deploy-linux.sh
```

This script will:
- Install Node.js (v18)
- Install npm
- Install PM2 (process manager)
- Install Nginx
- Install all project dependencies
- Build the project
- Configure firewall

## Step 3: Configure Nginx

### 3.1 Copy Nginx configuration
```bash
sudo cp nginx.conf /etc/nginx/sites-available/pacerline.com
sudo ln -s /etc/nginx/sites-available/pacerline.com /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

### 3.2 Test Nginx configuration
```bash
sudo nginx -t
```

### 3.3 Restart Nginx
```bash
sudo systemctl restart nginx
```

## Step 4: Start the Application

### 4.1 Start with PM2
```bash
pm2 start pm2.config.js
pm2 save
pm2 startup
```

### 4.2 Check application status
```bash
pm2 status
pm2 logs
```

## Step 5: Configure SSL (HTTPS)

### 5.1 Run SSL setup script
```bash
chmod +x ssl-setup.sh
sudo ./ssl-setup.sh
```

### 5.2 Follow the prompts
- Enter your email address
- Enter your domain: pacerline.com
- Accept terms of service

## Step 6: DNS Configuration

### 6.1 Point your domain to server
In your DNS provider (GoDaddy, Cloudflare, etc.):
- Create an A record: pacerline.com -> YOUR_SERVER_IP
- Create a CNAME record: www.pacerline.com -> pacerline.com

### 6.2 Verify DNS propagation
```bash
dig pacerline.com
nslookup pacerline.com
```

## Step 7: Test Your Website

### 7.1 Check if website is running
```bash
curl http://localhost:3000
curl http://pacerline.com
curl https://pacerline.com
```

### 7.2 Open in browser
- http://pacerline.com
- https://pacerline.com

## Troubleshooting

### Check PM2 logs
```bash
pm2 logs pacerline-website
```

### Check Nginx logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Restart services
```bash
pm2 restart all
sudo systemctl restart nginx
```

### Check ports
```bash
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
sudo netstat -tlnp | grep :3000
```

## Post-Deployment

### Auto-restart on server reboot
```bash
pm2 startup
pm2 save
```

### Regular updates
```bash
cd /path/to/pacerline-website
git pull origin main
npm install
npm run build
pm2 restart all
```

## Security

### 7.1 Configure firewall
```bash
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 7.2 Regular updates
```bash
sudo apt update && sudo apt upgrade -y
```

## Support

If you encounter issues:
1. Check the logs (PM2 and Nginx)
2. Verify all services are running
3. Check DNS configuration
4. Ensure firewall allows traffic on ports 80 and 443
