# 🧪 MANUAL API TESTING GUIDE

## 📋 **Quick API Status Check**

### **Step 1: Check if servers are running**
```powershell
# Check if admin server is running on port 5555
netstat -an | findstr :5555

# Check if main server is running on port 3000  
netstat -an | findstr :3000
```

### **Step 2: Test Login API**
```powershell
curl -X POST http://localhost:5555/api/admin/auth -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin123\"}"
```

**Expected Result:**
- ✅ Status 200 with `{"success": true, "token": "...", "message": "Login successful"}`
- ❌ Status 401/500 = Login API broken

### **Step 3: Get Token for Further Tests**
Copy the token from Step 2 and use it in subsequent requests as:
`Authorization: Bearer YOUR_TOKEN_HERE`

### **Step 4: Test Individual APIs**

#### **GET Jobs API:**
```powershell
curl -X GET http://localhost:5555/api/admin/jobs -H "Authorization: Bearer YOUR_TOKEN"
```

#### **POST Jobs API:**
```powershell
curl -X POST http://localhost:5555/api/admin/jobs -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_TOKEN" -d "{\"title\":\"Test Job\",\"department\":\"Engineering\",\"location\":\"Sydney\",\"type\":\"Full-time\",\"description\":\"Test description\",\"requirements\":\"Test requirements\",\"published\":true,\"createdBy\":\"admin\"}"
```

#### **GET Blogs API:**
```powershell
curl -X GET http://localhost:5555/api/admin/blogs -H "Authorization: Bearer YOUR_TOKEN"
```

#### **POST Blogs API:**
```powershell
curl -X POST http://localhost:5555/api/admin/blogs -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_TOKEN" -d "{\"title\":\"Test Blog\",\"content\":\"Test content\",\"slug\":\"test-123\",\"published\":true,\"createdBy\":\"admin\"}"
```

#### **GET Contacts API:**
```powershell
curl -X GET http://localhost:5555/api/admin/contacts -H "Authorization: Bearer YOUR_TOKEN"
```

#### **POST Contacts API:**
```powershell
curl -X POST http://localhost:5555/api/admin/contacts -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_TOKEN" -d "{\"name\":\"Test Contact\",\"email\":\"test@example.com\",\"phone\":\"123456789\",\"query\":\"Test query\"}"
```

## 🔍 **Troubleshooting Guide**

### **Common Status Codes:**
- **200/201** ✅ = Success
- **401** ❌ = Authentication failed (check token)
- **404** ❌ = API endpoint not found (check URL)
- **500** ❌ = Server error (check server logs)

### **If you get 401 Unauthorized:**
1. Check if login API returns a valid token
2. Verify token is being sent correctly in Authorization header
3. Check JWT_SECRET in environment variables

### **If you get 404 Not Found:**
1. Verify server is running on correct port (5555)
2. Check API endpoint URLs are correct
3. Ensure API files exist in pages/api/admin/ folder

### **If you get 500 Internal Server Error:**
1. Check server logs in terminal where you ran `node server-admin.js`
2. Look for specific error messages
3. Common issues:
   - Database connection problems
   - Missing required fields in request
   - Data type mismatches (string vs boolean)

## 📊 **Expected Working APIs:**

### ✅ **Should Work (Fixed):**
- `POST /api/admin/jobs` - Create job
- `GET /api/admin/jobs` - List jobs  
- `DELETE /api/admin/jobs/{id}` - Delete job
- `POST /api/admin/blogs` - Create blog
- `GET /api/admin/blogs` - List blogs
- `DELETE /api/admin/blogs/{id}` - Delete blog
- `POST /api/admin/contacts` - Create contact
- `GET /api/admin/contacts` - List contacts

### ❓ **Need to Check:**
- `GET /api/admin/job-applications`
- `GET /api/admin/demo-bookings`
- `PUT /api/admin/jobs/{id}` - Update job
- `PUT /api/admin/blogs/{id}` - Update blog

## 🚀 **Quick Test Commands:**

```powershell
# 1. Test login and save token
$response = curl -X POST http://localhost:5555/api/admin/auth -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"admin123\"}" | ConvertFrom-Json
$token = $response.token

# 2. Test job creation
curl -X POST http://localhost:5555/api/admin/jobs -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d "{\"title\":\"API Test Job\",\"department\":\"Tech\",\"location\":\"Sydney\",\"type\":\"Full-time\",\"description\":\"Test\",\"requirements\":\"Test\",\"published\":true,\"createdBy\":\"admin\"}"

# 3. Test job listing
curl -X GET http://localhost:5555/api/admin/jobs -H "Authorization: Bearer $token"
```

## 📝 **Results Tracking:**

Use this checklist to track what's working:

- [ ] Login API (POST /api/admin/auth)
- [ ] Get Jobs (GET /api/admin/jobs)
- [ ] Create Job (POST /api/admin/jobs) 
- [ ] Delete Job (DELETE /api/admin/jobs/{id})
- [ ] Get Blogs (GET /api/admin/blogs)
- [ ] Create Blog (POST /api/admin/blogs)
- [ ] Delete Blog (DELETE /api/admin/blogs/{id})
- [ ] Get Contacts (GET /api/admin/contacts)
- [ ] Create Contact (POST /api/admin/contacts)

**Report back with which ones work (✅) and which ones fail (❌) with the specific error messages!**