#!/bin/bash

echo "===================================="
echo "   PACERLINE WEBSITE SETUP SCRIPT"
echo "===================================="
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}[INFO]${NC} Node.js is installed: $(node --version)"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} npm is not available"
    exit 1
fi

echo -e "${GREEN}[INFO]${NC} npm is available: $(npm --version)"
echo

echo -e "${BLUE}[STEP 1]${NC} Installing dependencies..."
echo "Installing Next.js, React, Tailwind CSS and other dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}[ERROR]${NC} Failed to install dependencies"
    exit 1
fi

echo -e "${GREEN}[SUCCESS]${NC} Dependencies installed successfully!"
echo

echo -e "${BLUE}[STEP 2]${NC} Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}[WARNING]${NC} Build failed, but continuing..."
    echo "You may need to fix any compilation errors"
fi
echo

echo -e "${BLUE}[STEP 3]${NC} Starting development server..."
echo "The website will be available at: http://localhost:3000"
echo
echo "Features included:"
echo "- Modern responsive design with Tailwind CSS"
echo "- Interactive 3D flip card animations"
echo "- AppFolio, Buildium, and Property Management services"
echo "- Advanced navigation with dropdown menus"
echo "- Contact forms and service pages"
echo "- SEO optimized pages"
echo
echo "Press Ctrl+C to stop the server when done"
echo

# Start the development server
npm run dev

echo
echo -e "${GREEN}[INFO]${NC} Development server stopped"
