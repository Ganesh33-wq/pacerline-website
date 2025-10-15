// Quick API Test - Simple version
// Run with: node quick-test.js

const axios = require('axios');

// Test both your servers
const ADMIN_URL = 'http://localhost:5555';
const PUBLIC_URL = 'http://localhost:3000';

async function quickTest() {
  console.log('🚀 QUICK API TEST');
  console.log('=================');
  
  let results = { pass: 0, fail: 0 };
  
  // Test 1: Admin Login
  try {
    console.log('🔐 Testing admin login...');
    const loginResp = await axios.post(`${ADMIN_URL}/api/admin/auth`, {
      username: 'admin',
      password: 'admin123'
    });
    
    if (loginResp.data.token) {
      console.log('✅ Admin login: WORKING');
      results.pass++;
      
      const token = loginResp.data.token;
      
      // Test 2: Get Jobs
      try {
        console.log('📋 Testing GET jobs...');
        const jobsResp = await axios.get(`${ADMIN_URL}/api/admin/jobs`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(`✅ GET Jobs: WORKING (${jobsResp.data.data?.length || 0} jobs)`);
        results.pass++;
      } catch (err) {
        console.log('❌ GET Jobs: FAILED -', err.response?.data?.message || err.message);
        results.fail++;
      }
      
      // Test 3: Create Job (with proper boolean)
      try {
        console.log('➕ Testing POST job...');
        const newJob = {
          title: 'API Test Job',
          department: 'Engineering', 
          location: 'Sydney, Australia',
          type: 'Full-time',
          salary: '$70k - $90k',
          description: 'Test job for API validation',
          requirements: 'JavaScript, APIs, Testing',
          experience: '2+ years',
          published: true,  // BOOLEAN not string
          createdBy: 'admin'
        };
        
        const createResp = await axios.post(`${ADMIN_URL}/api/admin/jobs`, newJob, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ POST Job: WORKING - Created:', createResp.data.data.title);
        results.pass++;
        
        // Clean up - delete the test job
        const jobId = createResp.data.data.id;
        await axios.delete(`${ADMIN_URL}/api/admin/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('🗑️ Test job cleaned up');
        
      } catch (err) {
        console.log('❌ POST Job: FAILED -', err.response?.data?.message || err.message);
        if (err.response?.data) {
          console.log('   Details:', JSON.stringify(err.response.data, null, 2));
        }
        results.fail++;
      }
      
      // Test 4: Get Blogs
      try {
        console.log('📝 Testing GET blogs...');
        const blogsResp = await axios.get(`${ADMIN_URL}/api/admin/blogs`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(`✅ GET Blogs: WORKING (${blogsResp.data.data?.length || 0} blogs)`);
        results.pass++;
      } catch (err) {
        console.log('❌ GET Blogs: FAILED -', err.response?.data?.message || err.message);
        results.fail++;
      }
      
    } else {
      console.log('❌ Admin login: FAILED - No token');
      results.fail++;
    }
  } catch (err) {
    console.log('❌ Admin login: FAILED -', err.response?.data?.message || err.message);
    results.fail++;
  }
  
  // Test 5: Public Contact API
  try {
    console.log('📞 Testing public contact API...');
    const contactResp = await axios.post(`${PUBLIC_URL}/api/contact`, {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+61400123456',
      query: 'API test message'
    });
    console.log('✅ Public Contact: WORKING');
    results.pass++;
  } catch (err) {
    console.log('❌ Public Contact: FAILED -', err.response?.data?.message || err.message);
    results.fail++;
  }
  
  // Test 6: Public Jobs API
  try {
    console.log('🌐 Testing public jobs API...');
    const publicJobsResp = await axios.get(`${PUBLIC_URL}/api/jobs`);
    console.log(`✅ Public Jobs: WORKING (${publicJobsResp.data?.length || 0} jobs)`);
    results.pass++;
  } catch (err) {
    console.log('❌ Public Jobs: FAILED -', err.response?.data?.message || err.message);
    results.fail++;
  }
  
  // Summary
  console.log('\n📊 RESULTS:');
  console.log(`✅ Passed: ${results.pass}`);
  console.log(`❌ Failed: ${results.fail}`);
  console.log(`📈 Success: ${Math.round(results.pass/(results.pass + results.fail)*100)}%`);
  
  if (results.fail > 0) {
    console.log('\n🔧 ISSUES FOUND:');
    console.log('1. Make sure both servers are running:');
    console.log('   - Admin server: http://localhost:5555');
    console.log('   - Public server: http://localhost:3000');
    console.log('2. Check database connection');
    console.log('3. Check for TypeScript/validation errors');
  } else {
    console.log('\n🎉 ALL TESTS PASSED! Your APIs are working correctly.');
  }
}

quickTest();