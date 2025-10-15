@echo off
REM API Test Script for Windows
REM Run this batch file to test all admin APIs

echo ==========================================
echo    PACERLINE ADMIN API TEST SCRIPT
echo ==========================================
echo.

REM Test login first
echo [1/8] Testing Admin Login...
curl -X POST http://localhost:5555/api/admin/auth ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"admin\",\"password\":\"admin123\"}" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s > login_result.txt

echo Login Result:
type login_result.txt
echo.

REM Extract token (this is basic - you might need to adjust)
REM For now, we'll use a dummy token for testing
set TOKEN=dummy_token_for_testing

echo [2/8] Testing GET Jobs...
curl -X GET http://localhost:5555/api/admin/jobs ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [3/8] Testing GET Blogs...
curl -X GET http://localhost:5555/api/admin/blogs ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [4/8] Testing GET Contacts...
curl -X GET http://localhost:5555/api/admin/contacts ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [5/8] Testing POST Job...
curl -X POST http://localhost:5555/api/admin/jobs ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -d "{\"title\":\"Test Job API\",\"department\":\"Engineering\",\"location\":\"Sydney\",\"type\":\"Full-time\",\"description\":\"Test job\",\"requirements\":\"Test requirements\",\"published\":true,\"createdBy\":\"admin\"}" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [6/8] Testing POST Blog...
curl -X POST http://localhost:5555/api/admin/blogs ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -d "{\"title\":\"Test Blog API\",\"content\":\"Test content\",\"slug\":\"test-blog-api-123\",\"published\":true,\"createdBy\":\"admin\"}" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [7/8] Testing POST Contact...
curl -X POST http://localhost:5555/api/admin/contacts ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer %TOKEN%" ^
  -d "{\"name\":\"Test Contact\",\"email\":\"test@example.com\",\"phone\":\"123456789\",\"query\":\"Test query\"}" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo [8/8] Testing server status...
curl -X GET http://localhost:5555/api/admin/auth ^
  -H "Content-Type: application/json" ^
  -w "\nStatus: %%{http_code}\n" ^
  -s

echo.
echo ==========================================
echo    API TESTING COMPLETE
echo ==========================================
echo.
echo Status Codes:
echo   200 = OK (Success)
echo   201 = Created (Success)
echo   401 = Unauthorized (Token issue)
echo   404 = Not Found (Endpoint missing)
echo   500 = Server Error (Code issue)
echo.

REM Clean up
del login_result.txt 2>nul

pause