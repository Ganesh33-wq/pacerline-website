@echo off
REM Pacerline Website - Production Update Script (Windows)
REM This script safely updates your production code while preserving database

setlocal enabledelayedexpansion

echo ==========================================
echo   PACERLINE PRODUCTION UPDATE SCRIPT
echo ==========================================
echo.

REM Colors not available in basic batch, using echo

echo [INFO] Starting production update...

REM Step 1: Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found. Are you in the project directory?
    pause
    exit /b 1
)

REM Step 2: Backup database
echo [INFO] Creating database backup...
if exist "production.db" (
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
        for /f "tokens=1-2 delims=: " %%d in ('time /t') do (
            set BACKUP_NAME=production.db.backup.%%c%%a%%b_%%d%%e
        )
    )
    copy "production.db" "!BACKUP_NAME!" >nul 2>&1
    if !ERRORLEVEL! EQU 0 (
        echo [SUCCESS] Database backed up as: !BACKUP_NAME!
    ) else (
        echo [ERROR] Failed to backup database
        pause
        exit /b 1
    )
) else (
    echo [WARNING] No production.db found, skipping backup
)

REM Step 3: Pull latest code
echo [INFO] Pulling latest code from GitHub...
git pull origin main
if !ERRORLEVEL! NEQ 0 (
    echo [ERROR] Failed to pull latest code
    pause
    exit /b 1
)
echo [SUCCESS] Code updated

REM Step 4: Install dependencies
echo [INFO] Installing/updating dependencies...
npm install --production
if !ERRORLEVEL! NEQ 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies updated

REM Step 5: Build application
echo [INFO] Building application...
npm run build
if !ERRORLEVEL! NEQ 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [SUCCESS] Application built successfully

REM Step 6: Generate Prisma client
echo [INFO] Generating Prisma client...
npx prisma generate >nul 2>&1
if !ERRORLEVEL! NEQ 0 (
    echo [ERROR] Failed to generate Prisma client
    pause
    exit /b 1
)
echo [SUCCESS] Prisma client generated

REM Step 7: Apply database changes (safe)
echo [INFO] Applying database migrations...
npx prisma db push >nul 2>&1
if !ERRORLEVEL! NEQ 0 (
    echo [ERROR] Database migration failed
    pause
    exit /b 1
)
echo [SUCCESS] Database updated

REM Step 8: Ensure uploads directory exists
echo [INFO] Setting up uploads directory...
if not exist "uploads" mkdir uploads
echo [SUCCESS] Uploads directory ready

echo.
echo ==========================================
echo   DEPLOYMENT COMPLETED SUCCESSFULLY!
echo ==========================================
echo.

echo Application Status:
echo   • Local development ready
echo   • Database preserved
echo   • Build completed
echo.

echo Next Steps for Production Server:
echo   1. Upload this code to your server
echo   2. Run: sudo ./deploy-update.sh
echo   3. Verify at: https://pacerline.com
echo.

echo Database Backups:
dir /b *.db.backup* 2>nul | findstr "." && echo Found backups || echo No backups found

echo.
echo [INFO] Local update completed at %date% %time%
echo [WARNING] Database and uploads preserved
echo.

pause