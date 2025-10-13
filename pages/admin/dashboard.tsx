import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useNotificationContext } from '../../contexts/NotificationContext'

interface AdminData {
  contacts: any[]
  jobs: any[]
  jobApplications: any[]
  blogs: any[]
  about: any[]
  demoBookings: any[]
}

const AdminDashboard = () => {
  const router = useRouter()
  const { showSuccess, showError } = useNotificationContext()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('contacts')
  const [adminData, setAdminData] = useState<AdminData>({
    contacts: [],
    jobs: [],
    jobApplications: [],
    blogs: [],
    about: [],
    demoBookings: []
  })

  // Check authentication on component mount
  useEffect(() => {
    // Small delay to allow login page to set token first
    setTimeout(async () => {
      await checkAuth()
    }, 200)
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('adminToken')
    console.log('Checking auth, token:', token ? 'exists' : 'missing')
    
    if (!token) {
      console.log('No token found, redirecting to login')
      setAuthLoading(false)
      setTimeout(() => {
        router.push('/admin/login')
      }, 100)
      return
    }

    // Verify token by making an API call
    try {
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        console.log('Token valid, setting authenticated')
        setIsAuthenticated(true)
        setAuthLoading(false)
        // Fetch admin data after successful authentication
        fetchAdminData()
      } else {
        console.log('Token invalid, response status:', response.status)
        localStorage.removeItem('adminToken')
        document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        setAuthLoading(false)
        showError('Session Expired', 'Please login again', 5000)
        router.push('/admin/login')
        return
      }
    } catch (error) {
      console.log('Token verification error:', error)
      localStorage.removeItem('adminToken')
      setAuthLoading(false)
      router.push('/admin/login')
    }
  }

  const fetchAdminData = async () => {
    console.log('Starting to fetch admin data')
    try {
      setLoading(true)
      const token = localStorage.getItem('adminToken')
      console.log('Token for API calls:', token ? 'exists' : 'missing')
      
      // Fetch all admin data
      const endpoints = [
        '/api/admin/contacts',
        '/api/admin/jobs', 
        '/api/admin/job-applications',
        '/api/admin/blogs',
        '/api/admin/about',
        '/api/admin/demo-bookings'
      ]

      console.log('Fetching data from endpoints:', endpoints)

      const responses = await Promise.allSettled(
        endpoints.map(endpoint =>
          fetch(endpoint, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        )
      )

      console.log('Fetch responses:', responses)

      // Process responses
      const data = await Promise.allSettled(
        responses.map(async (response, index) => {
          if (response.status === 'fulfilled' && response.value.ok) {
            return await response.value.json()
          }
          return { data: [] }
        })
      )

      const adminDataResult = {
        contacts: data[0].status === 'fulfilled' ? data[0].value.data || [] : [],
        jobs: data[1].status === 'fulfilled' ? data[1].value.data || [] : [],
        jobApplications: data[2].status === 'fulfilled' ? data[2].value.data || [] : [],
        blogs: data[3].status === 'fulfilled' ? data[3].value.data || [] : [],
        about: data[4].status === 'fulfilled' ? data[4].value.data || [] : [],
        demoBookings: data[5].status === 'fulfilled' ? data[5].value.data || [] : []
      }
      
      console.log('Final admin data:', adminDataResult)
      setAdminData(adminDataResult)

    } catch (error) {
      console.error('Error fetching admin data:', error)
      showError('Error', 'Failed to load admin data', 5000)
    } finally {
      console.log('Setting loading to false')
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    showSuccess('Logged Out', 'You have been logged out successfully', 3000)
    router.push('/admin/login')
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg">Authentication Required</div>
          <p className="mt-2 text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'contacts', name: 'Contacts', count: adminData.contacts.length },
    { id: 'jobs', name: 'Jobs', count: adminData.jobs.length },
    { id: 'jobApplications', name: 'Applications', count: adminData.jobApplications.length },
    { id: 'blogs', name: 'Blogs', count: adminData.blogs.length },
    { id: 'about', name: 'About', count: adminData.about.length },
    { id: 'demoBookings', name: 'Demo Bookings', count: adminData.demoBookings.length },
  ]

  const renderTable = () => {
    const currentData = adminData[activeTab as keyof AdminData]
    
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading data...</p>
        </div>
      )
    }

    if (!currentData || currentData.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600">No data available for {activeTab}</p>
        </div>
      )
    }

    const columns = Object.keys(currentData[0])
    
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((item: any, index: number) => (
              <tr key={item.id || index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {typeof item[column] === 'boolean' 
                      ? item[column] ? 'Yes' : 'No'
                      : item[column] && typeof item[column] === 'object' 
                        ? JSON.stringify(item[column])
                        : String(item[column] || '')
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Pacerline Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tabs.map((tab) => (
              <div key={tab.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{tab.count}</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {tab.name}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {tab.count} records
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white shadow rounded-lg">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                    <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Table Content */}
            <div className="p-6">
              {renderTable()}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminDashboard