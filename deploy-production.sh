#!/bin/bash

# Pacerline Website Deployment Script
# Full-Stack Next.js Application with Backend

set -e

echo "🚀 Starting Pacerline Website Deployment..."

# Configuration
PROJECT_DIR="/var/www/pacerline-website"
USER="www-data"
NGINX_CONFIG="/etc/nginx/sites-available/pacerline.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run as root (sudo)"
    exit 1
fi

# Step 1: Pull latest code
print_status "Pulling latest code from GitHub..."
cd $PROJECT_DIR
sudo -u $USER git pull origin main

# Step 2: Install/Update dependencies
print_status "Installing dependencies..."
sudo -u $USER npm install --production

# Step 3: Build application
print_status "Building Next.js application..."
sudo -u $USER npm run build

# Step 4: Generate Prisma client
print_status "Generating Prisma client..."
sudo -u $USER npx prisma generate

# Step 5: Update database schema
print_status "Updating database schema..."
sudo -u $USER npx prisma db push

# Step 6: Create necessary directories
print_status "Creating upload directories..."
mkdir -p $PROJECT_DIR/uploads
chown -R $USER:$USER $PROJECT_DIR/uploads
chmod 755 $PROJECT_DIR/uploads

# Step 7: Restart PM2 processes
print_status "Restarting application..."
sudo -u $USER pm2 restart ecosystem.production.js --update-env

# Step 8: Test Nginx configuration
print_status "Testing Nginx configuration..."
nginx -t

# Step 9: Reload Nginx
print_status "Reloading Nginx..."
systemctl reload nginx

# Step 10: Check application status
print_status "Checking application status..."
sudo -u $USER pm2 status

# Step 11: Show logs
print_warning "Recent application logs:"
sudo -u $USER pm2 logs --lines 10

print_status "Deployment completed successfully!"
print_warning "Application is running on:"
echo "  • Main site: https://pacerline.com"
echo "  • Admin panel: https://pacerline.com/admin"
echo "  • API endpoints: https://pacerline.com/api/*"

print_warning "To monitor the application:"
echo "  • View logs: sudo -u www-data pm2 logs"
echo "  • Check status: sudo -u www-data pm2 status"
echo "  • Monitor resources: sudo -u www-data pm2 monit"