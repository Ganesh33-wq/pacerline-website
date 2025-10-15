// Complete API Test Suite for Pacerline Website
// Run with: node api-test-suite.js

const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:5555'; // Your admin server
const PUBLIC_URL = 'http://localhost:3000'; // Your main dev server

// Test data
const TEST_DATA = {
  admin: {
    username: 'admin',
    password: 'admin123'
  },
  job: {
    title: 'Test Backend Developer',
    department: 'Engineering',
    location: 'Sydney, Australia',
    type: 'Full-time',
    salary: '$75,000 - $95,000',
    description: 'Test job for API validation',
    requirements: 'JavaScript, Node.js, API testing',
    experience: '3+ years',
    published: true,
    createdBy: 'admin'
  },
  blog: {
    title: 'Test Blog Post API',
    content: 'This is test content for blog API validation',
    excerpt: 'Test excerpt for blog validation',
    slug: `test-blog-api-${Date.now()}`,
    published: true,
    tags: 'test,api,validation',
    createdBy: 'admin'
  },
  contact: {
    name: 'Test User API',
    email: 'testapi@example.com',
    phone: '+61 400 123 456',
    query: 'Test contact form API validation'
  },
  demoBooking: {
    name: 'Test Demo User',
    email: 'demo@example.com',
    phone: '+61 400 789 012',
    company: 'Test Company API',
    date: '2025-10-20',
    time: '14:00',
    title: 'Property Management Demo',
    message: 'Test demo booking API'
  }
};

let authToken = '';
let testResults = {
  passed: 0,
  failed: 0,
  errors: []
};

// Helper functions
function logSuccess(message) {
  console.log(`✅ ${message}`);
  testResults.passed++;
}

function logError(message, error = null) {
  console.log(`❌ ${message}`);
  testResults.failed++;
  if (error) {
    testResults.errors.push({ message, error: error.response?.data || error.message });
  }
}

function logInfo(message) {
  console.log(`ℹ️  ${message}`);
}

async function makeRequest(method, url, data = null, useAuth = false) {
  try {
    const config = {
      method,
      url,
      headers: useAuth && authToken ? { Authorization: `Bearer ${authToken}` } : {},
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
}

// Test functions
async function testAdminAuth() {
  console.log('\n🔐 TESTING ADMIN AUTHENTICATION');
  console.log('================================');
  
  // Test login
  const loginResult = await makeRequest('POST', `${BASE_URL}/api/admin/auth`, TEST_DATA.admin);
  
  if (loginResult.success && loginResult.data.token) {
    authToken = loginResult.data.token;
    logSuccess('Admin login successful');
    return true;
  } else {
    logError('Admin login failed', loginResult);
    return false;
  }
}

async function testJobsAPI() {
  console.log('\n💼 TESTING JOBS API');
  console.log('===================');
  
  // Test GET jobs
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/jobs`, null, true);
  if (getResult.success) {
    logSuccess(`GET Jobs: Found ${getResult.data.data?.length || 0} jobs`);
  } else {
    logError('GET Jobs failed', getResult);
  }
  
  // Test POST job
  const postResult = await makeRequest('POST', `${BASE_URL}/api/admin/jobs`, TEST_DATA.job, true);
  if (postResult.success) {
    logSuccess('POST Job: Created successfully');
    
    // Test individual job GET
    const jobId = postResult.data.data.id;
    const getOneResult = await makeRequest('GET', `${BASE_URL}/api/admin/jobs/${jobId}`, null, true);
    if (getOneResult.success) {
      logSuccess('GET Individual Job: Success');
    } else {
      logError('GET Individual Job failed', getOneResult);
    }
    
    // Test job UPDATE
    const updateData = { ...TEST_DATA.job, title: 'Updated Test Job', published: false };
    const putResult = await makeRequest('PUT', `${BASE_URL}/api/admin/jobs/${jobId}`, updateData, true);
    if (putResult.success) {
      logSuccess('PUT Job: Updated successfully');
    } else {
      logError('PUT Job failed', putResult);
    }
    
    // Test job DELETE
    const deleteResult = await makeRequest('DELETE', `${BASE_URL}/api/admin/jobs/${jobId}`, null, true);
    if (deleteResult.success) {
      logSuccess('DELETE Job: Deleted successfully');
    } else {
      logError('DELETE Job failed', deleteResult);
    }
    
  } else {
    logError('POST Job failed', postResult);
  }
  
  // Test public jobs API
  const publicResult = await makeRequest('GET', `${PUBLIC_URL}/api/jobs`);
  if (publicResult.success) {
    logSuccess(`Public Jobs API: Found ${publicResult.data.length || 0} jobs`);
  } else {
    logError('Public Jobs API failed', publicResult);
  }
}

async function testBlogsAPI() {
  console.log('\n📝 TESTING BLOGS API');
  console.log('====================');
  
  // Test GET blogs
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/blogs`, null, true);
  if (getResult.success) {
    logSuccess(`GET Blogs: Found ${getResult.data.data?.length || 0} blogs`);
  } else {
    logError('GET Blogs failed', getResult);
  }
  
  // Test POST blog
  const postResult = await makeRequest('POST', `${BASE_URL}/api/admin/blogs`, TEST_DATA.blog, true);
  if (postResult.success) {
    logSuccess('POST Blog: Created successfully');
    
    // Test individual blog operations
    const blogId = postResult.data.data.id;
    
    // Test GET individual blog
    const getOneResult = await makeRequest('GET', `${BASE_URL}/api/admin/blogs/${blogId}`, null, true);
    if (getOneResult.success) {
      logSuccess('GET Individual Blog: Success');
    } else {
      logError('GET Individual Blog failed', getOneResult);
    }
    
    // Test blog UPDATE
    const updateData = { ...TEST_DATA.blog, title: 'Updated Test Blog', published: false };
    const putResult = await makeRequest('PUT', `${BASE_URL}/api/admin/blogs/${blogId}`, updateData, true);
    if (putResult.success) {
      logSuccess('PUT Blog: Updated successfully');
    } else {
      logError('PUT Blog failed', putResult);
    }
    
    // Test blog DELETE
    const deleteResult = await makeRequest('DELETE', `${BASE_URL}/api/admin/blogs/${blogId}`, null, true);
    if (deleteResult.success) {
      logSuccess('DELETE Blog: Deleted successfully');
    } else {
      logError('DELETE Blog failed', deleteResult);
    }
    
  } else {
    logError('POST Blog failed', postResult);
  }
  
  // Test public blogs API
  const publicResult = await makeRequest('GET', `${PUBLIC_URL}/api/blogs`);
  if (publicResult.success) {
    logSuccess(`Public Blogs API: Found ${publicResult.data.length || 0} blogs`);
  } else {
    logError('Public Blogs API failed', publicResult);
  }
}

async function testContactsAPI() {
  console.log('\n📞 TESTING CONTACTS API');
  console.log('=======================');
  
  // Test GET contacts (admin)
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/contacts`, null, true);
  if (getResult.success) {
    logSuccess(`GET Contacts: Found ${getResult.data.data?.length || 0} contacts`);
  } else {
    logError('GET Contacts failed', getResult);
  }
  
  // Test public contact form submission
  const publicResult = await makeRequest('POST', `${PUBLIC_URL}/api/contact`, TEST_DATA.contact);
  if (publicResult.success) {
    logSuccess('Public Contact Form: Submitted successfully');
  } else {
    logError('Public Contact Form failed', publicResult);
  }
}

async function testDemoBookingAPI() {
  console.log('\n🎯 TESTING DEMO BOOKING API');
  console.log('============================');
  
  // Test GET demo bookings (admin)
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/demo-bookings`, null, true);
  if (getResult.success) {
    logSuccess(`GET Demo Bookings: Found ${getResult.data.data?.length || 0} bookings`);
  } else {
    logError('GET Demo Bookings failed', getResult);
  }
  
  // Test public demo booking submission
  const publicResult = await makeRequest('POST', `${PUBLIC_URL}/api/demo-booking`, TEST_DATA.demoBooking);
  if (publicResult.success) {
    logSuccess('Public Demo Booking: Submitted successfully');
  } else {
    logError('Public Demo Booking failed', publicResult);
  }
}

async function testJobApplicationsAPI() {
  console.log('\n📋 TESTING JOB APPLICATIONS API');
  console.log('===============================');
  
  // Test GET job applications (admin)
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/job-applications`, null, true);
  if (getResult.success) {
    logSuccess(`GET Job Applications: Found ${getResult.data.data?.length || 0} applications`);
  } else {
    logError('GET Job Applications failed', getResult);
  }
  
  // Note: Job applications require file upload, so we skip the public POST test
  logInfo('Skipping public job application test (requires file upload)');
}

async function testAboutAPI() {
  console.log('\n📄 TESTING ABOUT API');
  console.log('====================');
  
  // Test GET about submissions (admin)
  const getResult = await makeRequest('GET', `${BASE_URL}/api/admin/about`, null, true);
  if (getResult.success) {
    logSuccess(`GET About: Found ${getResult.data.data?.length || 0} submissions`);
  } else {
    logError('GET About failed', getResult);
  }
  
  // Test public about form submission
  const aboutData = {
    name: 'Test About User',
    email: 'about@example.com',
    phone: '+61 400 555 777',
    query: 'Test about form API validation'
  };
  
  const publicResult = await makeRequest('POST', `${PUBLIC_URL}/api/about`, aboutData);
  if (publicResult.success) {
    logSuccess('Public About Form: Submitted successfully');
  } else {
    logError('Public About Form failed', publicResult);
  }
}

// Main test runner
async function runAllTests() {
  console.log('🚀 PACERLINE API TEST SUITE');
  console.log('===========================');
  console.log(`🌐 Admin Server: ${BASE_URL}`);
  console.log(`🌐 Public Server: ${PUBLIC_URL}`);
  console.log(`📅 Test Date: ${new Date().toLocaleString()}`);
  
  // Test authentication first
  const authSuccess = await testAdminAuth();
  if (!authSuccess) {
    console.log('\n❌ AUTHENTICATION FAILED - STOPPING ADMIN TESTS');
    console.log('Make sure your admin server is running on port 5555');
    return;
  }
  
  // Run all tests
  await testJobsAPI();
  await testBlogsAPI();
  await testContactsAPI();
  await testDemoBookingAPI();
  await testJobApplicationsAPI();
  await testAboutAPI();
  
  // Print summary
  console.log('\n📊 TEST SUMMARY');
  console.log('===============');
  console.log(`✅ Passed: ${testResults.passed}`);
  console.log(`❌ Failed: ${testResults.failed}`);
  console.log(`📈 Success Rate: ${Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)}%`);
  
  if (testResults.errors.length > 0) {
    console.log('\n🔍 ERROR DETAILS:');
    testResults.errors.forEach((err, index) => {
      console.log(`${index + 1}. ${err.message}`);
      console.log(`   Error: ${JSON.stringify(err.error, null, 2)}`);
    });
  }
  
  console.log('\n📋 NEXT STEPS:');
  if (testResults.failed === 0) {
    console.log('🎉 All tests passed! Your APIs are working correctly.');
  } else {
    console.log('🔧 Some tests failed. Check the error details above.');
    console.log('💡 Common fixes:');
    console.log('   - Make sure both servers are running');
    console.log('   - Check database connection');
    console.log('   - Verify API endpoint paths');
    console.log('   - Check authentication tokens');
  }
}

// Run the tests
runAllTests().catch(error => {
  console.error('💥 Test suite crashed:', error.message);
});