#!/bin/bash

# Pacerline Website - Linux Deployment Script
# This script installs all dependencies and sets up the environment

echo "Starting Pacerline Website deployment..."

# Update system packages
echo "Updating system packages..."
apt update && apt upgrade -y

# Install curl if not present
apt install -y curl

# Install Node.js 18.x
echo "Installing Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verify Node.js and npm installation
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install PM2 globally for process management
echo "Installing PM2 process manager..."
npm install -g pm2

# Install Nginx
echo "Installing Nginx..."
apt install -y nginx

# Install Certbot for SSL certificates
echo "Installing Certbot for SSL..."
apt install -y certbot python3-certbot-nginx

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Configure firewall
echo "Configuring firewall..."
ufw allow 22   # SSH
ufw allow 80   # HTTP
ufw allow 443  # HTTPS
ufw --force enable

# Create PM2 startup script
echo "Configuring PM2 startup..."
pm2 startup
pm2 save

echo "Deployment script completed!"
echo "Next steps:"
echo "1. Configure Nginx with: sudo cp nginx-pacerline.conf /etc/nginx/sites-available/pacerline.com"
echo "2. Start the application with: pm2 start ecosystem.config.json"
echo "3. Setup SSL with: sudo ./ssl-setup.sh"
echo "4. Configure your DNS to point pacerline.com to this server's IP"