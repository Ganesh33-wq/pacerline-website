#!/bin/bash

# Pacerline Website - Production Update Script
# This script safely updates your production code while preserving database

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project directory
PROJECT_DIR="/var/www/pacerline-website"

print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

echo -e "${BLUE}"
echo "=========================================="
echo "  PACERLINE PRODUCTION UPDATE SCRIPT"
echo "=========================================="
echo -e "${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run as root (sudo)"
    exit 1
fi

# Navigate to project directory
print_info "Navigating to project directory..."
cd $PROJECT_DIR

# Step 1: Backup database
print_info "Creating database backup..."
if [ -f "production.db" ]; then
    BACKUP_NAME="production.db.backup.$(date +%Y%m%d_%H%M%S)"
    cp production.db $BACKUP_NAME
    print_status "Database backed up as: $BACKUP_NAME"
else
    print_warning "No production.db found, skipping backup"
fi

# Step 2: Stop application
print_info "Stopping application..."
pm2 stop all > /dev/null 2>&1 || true
print_status "Application stopped"

# Step 3: Pull latest code
print_info "Pulling latest code from GitHub..."
git pull origin main
print_status "Code updated"

# Step 4: Install dependencies
print_info "Installing/updating dependencies..."
npm install --production
print_status "Dependencies updated"

# Step 5: Build application
print_info "Building application..."
npm run build
print_status "Application built successfully"

# Step 6: Generate Prisma client
print_info "Generating Prisma client..."
npx prisma generate > /dev/null 2>&1
print_status "Prisma client generated"

# Step 7: Apply database changes (safe)
print_info "Applying database migrations..."
npx prisma db push > /dev/null 2>&1
print_status "Database updated"

# Step 8: Ensure uploads directory exists
print_info "Setting up uploads directory..."
mkdir -p uploads
chown -R www-data:www-data uploads
chmod 755 uploads
print_status "Uploads directory ready"

# Step 9: Restart application
print_info "Restarting application..."
pm2 restart all > /dev/null 2>&1
sleep 3  # Give it time to start
print_status "Application restarted"

# Step 10: Verify deployment
print_info "Verifying deployment..."

# Check PM2 status
if pm2 status | grep -q "online"; then
    print_status "PM2 processes are running"
else
    print_error "PM2 processes not running properly"
    pm2 logs --lines 5
    exit 1
fi

# Check if port 3000 is listening
if netstat -tlnp | grep -q ":3000"; then
    print_status "Application listening on port 3000"
else
    print_error "Application not listening on port 3000"
    exit 1
fi

# Test local connection
if curl -s -f http://localhost:3000 > /dev/null; then
    print_status "Local connection test passed"
else
    print_warning "Local connection test failed"
fi

# Final status
echo ""
echo -e "${GREEN}=========================================="
echo "  🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}📊 Application Status:${NC}"
pm2 status

echo ""
echo -e "${BLUE}🌐 URLs:${NC}"
echo "  • Website: https://pacerline.com"
echo "  • Admin Panel: https://pacerline.com/admin/login"
echo "  • Credentials: admin / admin123"

echo ""
echo -e "${BLUE}📝 Recent Logs:${NC}"
pm2 logs --lines 5 --nostream

echo ""
echo -e "${BLUE}💾 Database Backups:${NC}"
ls -la *.db.backup* 2>/dev/null | tail -3 || echo "No backups found"

echo ""
print_info "Deployment completed at $(date)"
print_warning "Database and uploads preserved ✅"