#!/bin/bash

# Fix Employee Images on Production Server
# This script ensures images are accessible and properly configured

echo "=== Employee Image Fix Script ==="
echo ""

# Navigate to project directory
cd ~/pacerline/pacerline-website || exit 1

# 1. Ensure proper directory structure exists
echo "1. Creating necessary directories..."
mkdir -p public/employee
mkdir -p public/uploads/employees
mkdir -p public/uploads/blogs
mkdir -p public/uploads/resumes

# 2. Set proper permissions
echo "2. Setting proper permissions..."
chmod 755 public
chmod 755 public/employee
chmod 755 public/uploads
chmod 755 public/uploads/employees
chmod 755 public/uploads/blogs
chmod 755 public/uploads/resumes

# Make all existing images readable
find public/employee -type f -exec chmod 644 {} \;
find public/uploads -type f -exec chmod 644 {} \;

# 3. Check current image locations
echo ""
echo "3. Current image locations:"
echo "   public/employee/: $(ls -1 public/employee 2>/dev/null | wc -l) files"
echo "   public/uploads/employees/: $(ls -1 public/uploads/employees 2>/dev/null | wc -l) files"

# 4. Restart the application
echo ""
echo "4. Restarting application..."
pm2 restart all

echo ""
echo "=== Fix Complete! ==="
echo ""
echo "✅ Directories created and permissions set"
echo "✅ Application restarted"
echo ""
echo "📋 Quick check commands:"
echo "   ls -la public/employee/"
echo "   ls -la public/uploads/employees/"
echo ""
echo "🌐 Test on website: https://pacerline.com/about"
