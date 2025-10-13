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
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add')
  const [currentRecord, setCurrentRecord] = useState<any>(null)
  const [formData, setFormData] = useState<any>({})

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

  const handleEdit = (table: string, id: any) => {
    const currentData = adminData[activeTab as keyof AdminData]
    const record = currentData.find((item: any) => item.id === id)
    
    if (record) {
      setCurrentRecord(record)
      setFormData({ ...record })
      setModalMode('edit')
      setIsModalOpen(true)
    }
  }

  const handleDelete = async (table: string, id: any) => {
    if (!confirm(`Are you sure you want to delete this ${table} record?`)) {
      return
    }
    
    try {
      const response = await fetch(`/api/admin/${table}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      })
      
      if (response.ok) {
        showSuccess('Success', 'Record deleted successfully', 3000)
        // Refresh the data
        fetchAdminData()
      } else {
        const error = await response.json()
        showError('Error', error.message || 'Failed to delete record', 5000)
      }
    } catch (error) {
      console.error('Delete error:', error)
      showError('Error', 'Failed to delete record', 5000)
    }
  }

  const handleAddNew = (table: string) => {
    // Create empty form data based on the current table structure
    const currentData = adminData[activeTab as keyof AdminData]
    if (currentData && currentData.length > 0) {
      const emptyRecord: any = {}
      Object.keys(currentData[0]).forEach(key => {
        if (key !== 'id' && key !== 'createdAt' && key !== 'updatedAt') {
          emptyRecord[key] = ''
        }
      })
      setFormData(emptyRecord)
    } else {
      setFormData({})
    }
    
    setCurrentRecord(null)
    setModalMode('add')
    setIsModalOpen(true)
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const url = modalMode === 'add' 
        ? `/api/admin/${activeTab}`
        : `/api/admin/${activeTab}/${currentRecord.id}`
      
      const method = modalMode === 'add' ? 'POST' : 'PUT'
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        showSuccess('Success', `Record ${modalMode === 'add' ? 'added' : 'updated'} successfully`, 3000)
        setIsModalOpen(false)
        fetchAdminData() // Refresh data
      } else {
        const error = await response.json()
        showError('Error', error.message || `Failed to ${modalMode} record`, 5000)
      }
    } catch (error) {
      console.error('Save error:', error)
      showError('Error', `Failed to ${modalMode} record`, 5000)
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setFormData({})
    setCurrentRecord(null)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }))
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
          <button
            onClick={() => handleAddNew(activeTab)}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add First Record
          </button>
        </div>
      )
    }

    const columns = Object.keys(currentData[0])
    
    // Filter data based on search term
    const displayData = currentData.filter((item: any) => {
      if (!searchTerm) return true
      return Object.values(item).some((value: any) => 
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayData.map((item: any, index: number) => (
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(activeTab, item.id || index)}
                      className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 px-3 py-1 rounded-md transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(activeTab, item.id || index)}
                      className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderModal = () => {
    if (!isModalOpen) return null

    const currentData = adminData[activeTab as keyof AdminData]
    const fields = currentData && currentData.length > 0 
      ? Object.keys(currentData[0]).filter(key => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt')
      : Object.keys(formData)

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {modalMode === 'add' ? `Add New ${activeTab}` : `Edit ${activeTab}`}
            </h3>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                {field === 'message' || field === 'content' || field === 'description' ? (
                  <textarea
                    value={formData[field] || ''}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                  />
                ) : field === 'email' ? (
                  <input
                    type="email"
                    value={formData[field] || ''}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : field === 'phone' ? (
                  <input
                    type="tel"
                    value={formData[field] || ''}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : field.includes('Date') || field.includes('date') ? (
                  <input
                    type="datetime-local"
                    value={formData[field] ? new Date(formData[field]).toISOString().slice(0, 16) : ''}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field] || ''}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {modalMode === 'add' ? 'Add' : 'Save'}
            </button>
          </div>
        </div>
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
              <div className="flex gap-3">
                <button
                  onClick={() => window.open('http://localhost:5555/api/admin/prisma-studio', '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 1.79 4 4 4h8c0-2.21-1.79-4-4-4V7c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4z" />
                  </svg>
                  Database Studio
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
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

            {/* Controls */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1 max-w-sm">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder={`Search ${activeTab}...`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      fetchAdminData()
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                  </button>
                  <button
                    onClick={() => handleAddNew(activeTab)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add New
                  </button>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="p-6">
              {renderTable()}
            </div>
          </div>
        </main>
      </div>
      
      {/* Modal */}
      {renderModal()}
    </>
  )
}

export default AdminDashboard