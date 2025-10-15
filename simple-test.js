// Simple API Test - Test all admin endpoints
// Run with: node simple-test.js

const http = require('http');

const BASE_URL = 'http://localhost:5555';
let authToken = '';

// Helper function to make HTTP requests
function makeRequest(method, path, data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5555,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};
          resolve({
            status: res.statusCode,
            data: parsedBody,
            success: res.statusCode >= 200 && res.statusCode < 300
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: { raw: body },
            success: false,
            error: 'Invalid JSON response'
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function testLogin() {
  console.log('🔐 Testing Admin Login...');
  
  try {
    const result = await makeRequest('POST', '/api/admin/auth', {
      username: 'admin',
      password: 'admin123'
    });

    if (result.success && result.data.token) {
      authToken = result.data.token;
      console.log('✅ Login successful');
      return true;
    } else {
      console.log('❌ Login failed:', result.data);
      return false;
    }
  } catch (error) {
    console.log('❌ Login error:', error.message);
    return false;
  }
}

async function testAPI(method, endpoint, data = null, testName = '') {
  console.log(`📡 Testing ${testName || `${method} ${endpoint}`}...`);
  
  try {
    const headers = authToken ? { 'Authorization': `Bearer ${authToken}` } : {};
    const result = await makeRequest(method, endpoint, data, headers);
    
    if (result.success) {
      console.log(`✅ ${testName || `${method} ${endpoint}`} - Status: ${result.status}`);
      if (result.data.data) {
        console.log(`   📊 Data count: ${Array.isArray(result.data.data) ? result.data.data.length : 'Single record'}`);
      }
      return result;
    } else {
      console.log(`❌ ${testName || `${method} ${endpoint}`} - Status: ${result.status}`);
      console.log(`   Error: ${result.data.message || result.data.error || 'Unknown error'}`);
      return result;
    }
  } catch (error) {
    console.log(`❌ ${testName || `${method} ${endpoint}`} - Connection error:`, error.message);
    return null;
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...');
  console.log('=' .repeat(50));
  
  // Test login first
  const loginSuccess = await testLogin();
  if (!loginSuccess) {
    console.log('\n❌ Cannot proceed without authentication');
    return;
  }
  
  console.log('\n📋 Testing GET endpoints...');
  console.log('-' .repeat(30));
  
  // Test all GET endpoints
  await testAPI('GET', '/api/admin/jobs', null, 'GET Jobs');
  await testAPI('GET', '/api/admin/blogs', null, 'GET Blogs');
  await testAPI('GET', '/api/admin/contacts', null, 'GET Contacts');
  await testAPI('GET', '/api/admin/job-applications', null, 'GET Job Applications');
  await testAPI('GET', '/api/admin/demo-bookings', null, 'GET Demo Bookings');
  
  console.log('\n📝 Testing POST endpoints...');
  console.log('-' .repeat(30));
  
  // Test Job Creation
  const testJob = {
    title: 'Test Developer API',
    department: 'Engineering',
    location: 'Sydney, Australia',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Test job description for API testing',
    requirements: 'JavaScript, React, Node.js',
    experience: '2+ years',
    published: true,
    createdBy: 'admin'
  };
  
  const jobResult = await testAPI('POST', '/api/admin/jobs', testJob, 'POST Job');
  
  // Test Blog Creation
  const testBlog = {
    title: 'Test Blog Post API',
    content: 'This is a test blog post content for API testing purposes.',
    excerpt: 'Test blog excerpt',
    slug: `test-blog-api-${Date.now()}`,
    published: true,
    tags: 'test,api,automation',
    createdBy: 'admin'
  };
  
  const blogResult = await testAPI('POST', '/api/admin/blogs', testBlog, 'POST Blog');
  
  // Test Contact Creation
  const testContact = {
    name: 'Test Contact API',
    email: 'test@example.com',
    phone: '+61400123456',
    query: 'This is a test contact query via API',
    status: 'new'
  };
  
  await testAPI('POST', '/api/admin/contacts', testContact, 'POST Contact');
  
  console.log('\n🗑️ Testing DELETE endpoints...');
  console.log('-' .repeat(30));
  
  // Test deletions if we created records
  if (jobResult && jobResult.success && jobResult.data.data && jobResult.data.data.id) {
    await testAPI('DELETE', `/api/admin/jobs/${jobResult.data.data.id}`, null, 'DELETE Job');
  }
  
  if (blogResult && blogResult.success && blogResult.data.data && blogResult.data.data.id) {
    await testAPI('DELETE', `/api/admin/blogs/${blogResult.data.data.id}`, null, 'DELETE Blog');
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log('🎉 API Testing Complete!');
  console.log('\n📊 Summary:');
  console.log('   ✅ = Working correctly');
  console.log('   ❌ = Needs attention');
  console.log('\n💡 Check server logs for detailed error messages');
}

// Run the tests
runTests().catch(console.error);