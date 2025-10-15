// Test the job-applications API endpoint
const testJobApplicationsAPI = async () => {
  const baseURL = 'http://localhost:3000'
  
  // First login to get token
  console.log('🔐 Testing Admin Login...')
  const loginResponse = await fetch(`${baseURL}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'admin',
      password: 'admin123'
    })
  })
  
  const loginData = await loginResponse.json()
  if (!loginData.success) {
    console.error('❌ Login failed:', loginData.message)
    return
  }
  
  const token = loginData.token
  console.log('✅ Login successful, token obtained')
  
  // Test GET job-applications
  console.log('\n📋 Testing GET /api/admin/job-applications...')
  const getResponse = await fetch(`${baseURL}/api/admin/job-applications`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  
  const getData = await getResponse.json()
  console.log('GET Response Status:', getResponse.status)
  console.log('GET Response:', getData)
  
  // Test POST job-applications
  console.log('\n➕ Testing POST /api/admin/job-applications...')
  const postResponse = await fetch(`${baseURL}/api/admin/job-applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      jobId: 'test-job-id',
      name: 'Test Applicant',
      email: 'test@example.com',
      phone: '555-123-4567',
      resume: 'test-resume.pdf',
      coverLetter: 'Test cover letter content',
      status: 'applied'
    })
  })
  
  const postData = await postResponse.json()
  console.log('POST Response Status:', postResponse.status)
  console.log('POST Response:', postData)
  
  if (postData.success) {
    console.log('✅ Job application created successfully!')
  } else {
    console.error('❌ Failed to create job application:', postData.message)
  }
}

// Run the test
testJobApplicationsAPI().catch(console.error)