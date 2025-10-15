// Admin API Test Script
// Run with: node test-admin-apis.js

const axios = require('axios');

// Test configuration
const BASE_URL = 'http://localhost:3000'; // Change to production URL when testing live
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

let authToken = '';

// Helper function to make authenticated requests
const apiCall = async (method, endpoint, data = null) => {
  try {
    const config = {
      method,
      url: `${BASE_URL}${endpoint}`,
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
      data
    };
    
    const response = await axios(config);
    return { success: true, data: response.data, status: response.status };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data || error.message,
      status: error.response?.status || 'Network Error'
    };
  }
};

// Test functions
async function testAdminLogin() {
  console.log('🔐 Testing Admin Login...');
  
  const result = await apiCall('POST', '/api/admin/auth', ADMIN_CREDENTIALS);
  
  if (result.success && result.data.token) {
    authToken = result.data.token;
    console.log('✅ Login successful - Token received');
    return true;
  } else {
    console.log('❌ Login failed:', result.error);
    return false;
  }
}

async function testJobsAPI() {
  console.log('\n💼 Testing Jobs API...');
  
  // Test GET jobs
  console.log('  📄 GET /api/admin/jobs');
  let result = await apiCall('GET', '/api/admin/jobs');
  if (result.success) {
    console.log(`  ✅ GET Jobs: ${result.data.data?.length || 0} jobs found`);
  } else {
    console.log('  ❌ GET Jobs failed:', result.error);
  }
  
  // Test POST job
  console.log('  📄 POST /api/admin/jobs');
  const testJob = {
    title: 'Test Developer Position',
    department: 'Technology',
    location: 'Sydney, Australia',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Test job description for API testing',
    requirements: 'Test requirements:\n- JavaScript\n- React\n- Node.js',
    experience: '3+ years',
    published: true,
    createdBy: 'admin'
  };
  
  result = await apiCall('POST', '/api/admin/jobs', testJob);
  if (result.success) {
    console.log('  ✅ POST Job: Job created successfully');
    
    // Test DELETE job
    const jobId = result.data.data.id;
    console.log('  📄 DELETE /api/admin/jobs/' + jobId);
    const deleteResult = await apiCall('DELETE', `/api/admin/jobs/${jobId}`);
    if (deleteResult.success) {
      console.log('  ✅ DELETE Job: Job deleted successfully');
    } else {
      console.log('  ❌ DELETE Job failed:', deleteResult.error);
    }
  } else {
    console.log('  ❌ POST Job failed:', result.error);
  }
}

async function testBlogsAPI() {
  console.log('\n📝 Testing Blogs API...');
  
  // Test GET blogs
  console.log('  📄 GET /api/admin/blogs');
  let result = await apiCall('GET', '/api/admin/blogs');
  if (result.success) {
    console.log(`  ✅ GET Blogs: ${result.data.data?.length || 0} blogs found`);
  } else {
    console.log('  ❌ GET Blogs failed:', result.error);
  }
  
  // Test POST blog
  console.log('  📄 POST /api/admin/blogs');
  const testBlog = {
    title: 'Test Blog Post',
    content: 'This is a test blog post content for API testing.',
    excerpt: 'Test excerpt for the blog post',
    slug: `test-blog-${Date.now()}`,
    published: true,
    tags: 'test,api,blog',
    createdBy: 'admin'
  };
  
  result = await apiCall('POST', '/api/admin/blogs', testBlog);
  if (result.success) {
    console.log('  ✅ POST Blog: Blog created successfully');
    
    // Test DELETE blog
    const blogId = result.data.data.id;
    console.log('  📄 DELETE /api/admin/blogs/' + blogId);
    const deleteResult = await apiCall('DELETE', `/api/admin/blogs/${blogId}`);
    if (deleteResult.success) {
      console.log('  ✅ DELETE Blog: Blog deleted successfully');
    } else {
      console.log('  ❌ DELETE Blog failed:', deleteResult.error);
    }
  } else {
    console.log('  ❌ POST Blog failed:', result.error);
  }
}

async function testContactsAPI() {
  console.log('\n📞 Testing Contacts API...');
  
  // Test GET contacts
  console.log('  📄 GET /api/admin/contacts');
  let result = await apiCall('GET', '/api/admin/contacts');
  if (result.success) {
    console.log(`  ✅ GET Contacts: ${result.data.data?.length || 0} contacts found`);
  } else {
    console.log('  ❌ GET Contacts failed:', result.error);
  }
}

async function testJobApplicationsAPI() {
  console.log('\n📋 Testing Job Applications API...');
  
  // Test GET job applications
  console.log('  📄 GET /api/admin/job-applications');
  let result = await apiCall('GET', '/api/admin/job-applications');
  if (result.success) {
    console.log(`  ✅ GET Applications: ${result.data.data?.length || 0} applications found`);
  } else {
    console.log('  ❌ GET Applications failed:', result.error);
  }
}

async function testDemoBookingsAPI() {
  console.log('\n🎯 Testing Demo Bookings API...');
  
  // Test GET demo bookings
  console.log('  📄 GET /api/admin/demo-bookings');
  let result = await apiCall('GET', '/api/admin/demo-bookings');
  if (result.success) {
    console.log(`  ✅ GET Demo Bookings: ${result.data.data?.length || 0} bookings found`);
  } else {
    console.log('  ❌ GET Demo Bookings failed:', result.error);
  }
}

// Main test runner
async function runAllTests() {
  console.log('🚀 Starting Admin API Tests...');
  console.log(`🌐 Testing against: ${BASE_URL}`);
  
  // Login first
  const loginSuccess = await testAdminLogin();
  if (!loginSuccess) {
    console.log('\n❌ Cannot proceed without authentication');
    return;
  }
  
  // Run all API tests
  await testJobsAPI();
  await testBlogsAPI();
  await testContactsAPI();
  await testJobApplicationsAPI();
  await testDemoBookingsAPI();
  
  console.log('\n🎉 API Testing Complete!');
  console.log('\n📋 Summary:');
  console.log('   If you see ✅ marks, the APIs are working correctly');
  console.log('   If you see ❌ marks, those APIs need to be fixed');
  console.log('\n🔧 To fix issues:');
  console.log('   1. Check server logs: pm2 logs');
  console.log('   2. Verify database schema matches API expectations');
  console.log('   3. Check authentication token handling');
}

// Install axios if not present
if (typeof axios === 'undefined') {
  console.log('📦 Installing axios...');
  require('child_process').execSync('npm install axios', { stdio: 'inherit' });
}

// Run tests
runAllTests().catch(console.error);