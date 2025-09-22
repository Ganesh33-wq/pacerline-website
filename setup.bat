@echo off
echo ====================================
echo    PACERLINE WEBSITE SETUP SCRIPT
echo ====================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Node.js is installed
node --version

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not available
    pause
    exit /b 1
)

echo [INFO] npm is available
npm --version
echo.

echo [STEP 1] Installing dependencies...
echo Installing Next.js, React, Tailwind CSS and other dependencies...
npm install

if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo [SUCCESS] Dependencies installed successfully!
echo.

echo [STEP 2] Building the project...
npm run build

if %errorlevel% neq 0 (
    echo [WARNING] Build failed, but continuing...
    echo You may need to fix any compilation errors
)
echo.

echo [STEP 3] Starting development server...
echo The website will be available at: http://localhost:3000
echo.
echo Features included:
echo - Modern responsive design with Tailwind CSS
echo - Interactive 3D flip card animations
echo - AppFolio, Buildium, and Property Management services
echo - Advanced navigation with dropdown menus
echo - Contact forms and service pages
echo - SEO optimized pages
echo.
echo Press Ctrl+C to stop the server when done
echo.

REM Start the development server
npm run dev

echo.
echo [INFO] Development server stopped
pause
