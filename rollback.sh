#!/bin/bash

# Pacerline Website - Emergency Rollback Script
# This script helps recover from failed deployments

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

echo -e "${RED}"
echo "=========================================="
echo "  PACERLINE EMERGENCY ROLLBACK SCRIPT"
echo "=========================================="
echo -e "${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run as root (sudo)"
    exit 1
fi

# Navigate to project directory
cd $PROJECT_DIR

echo -e "${YELLOW}WARNING: This will rollback your application!${NC}"
echo ""
echo "Available database backups:"
ls -la *.db.backup* 2>/dev/null | tail -5 || echo "No backups found"
echo ""

read -p "Enter backup filename to restore (or 'latest' for most recent): " BACKUP_FILE

if [ "$BACKUP_FILE" = "latest" ]; then
    BACKUP_FILE=$(ls -t *.db.backup* 2>/dev/null | head -1)
    if [ -z "$BACKUP_FILE" ]; then
        print_error "No backup files found!"
        exit 1
    fi
    print_info "Using latest backup: $BACKUP_FILE"
fi

if [ ! -f "$BACKUP_FILE" ]; then
    print_error "Backup file not found: $BACKUP_FILE"
    exit 1
fi

echo ""
read -p "Are you sure you want to rollback? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    print_info "Rollback cancelled"
    exit 0
fi

print_info "Starting rollback process..."

# Stop application
print_info "Stopping application..."
pm2 stop all > /dev/null 2>&1 || true
print_status "Application stopped"

# Restore database
print_info "Restoring database from backup..."
cp "$BACKUP_FILE" production.db
print_status "Database restored from: $BACKUP_FILE"

# Restart application
print_info "Restarting application..."
pm2 restart all > /dev/null 2>&1
sleep 3
print_status "Application restarted"

# Verify
print_info "Verifying rollback..."
if pm2 status | grep -q "online"; then
    print_status "Application is running"
else
    print_error "Application failed to start"
    pm2 logs --lines 10
    exit 1
fi

echo ""
print_status "🔄 ROLLBACK COMPLETED SUCCESSFULLY!"
echo ""
echo -e "${BLUE}📊 Application Status:${NC}"
pm2 status

echo ""
echo -e "${BLUE}🌐 URLs:${NC}"
echo "  • Website: https://pacerline.com"
echo "  • Admin Panel: https://pacerline.com/admin/login"

echo ""
print_warning "Database restored to: $(stat -c %y "$BACKUP_FILE" | cut -d'.' -f1)"