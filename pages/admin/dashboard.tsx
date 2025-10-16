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
  employees: any[]
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
    demoBookings: [],
    employees: []
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add')
  const [currentRecord, setCurrentRecord] = useState<any>(null)
  const [formData, setFormData] = useState<any>({})

  // Helper function to map frontend tab names to API endpoint names
  const getApiEndpoint = (tab: string) => {
    const mapping: Record<string, string> = {
      'jobApplications': 'job-applications',
      'demoBookings': 'demo-bookings'
    }
    return mapping[tab] || tab
  }

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
        '/api/admin/demo-bookings',
        '/api/admin/employees'
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
        demoBookings: data[5].status === 'fulfilled' ? data[5].value.data || [] : [],
        employees: data[6].status === 'fulfilled' ? data[6].value.data || [] : []
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
      const endpoint = getApiEndpoint(table)
      const response = await fetch(`/api/admin/${endpoint}/${id}`, {
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
    // Create form data with default values based on the current table
    const defaultFormData = getDefaultFormData(table)
    setFormData(defaultFormData)
    setCurrentRecord(null)
    setModalMode('add')
    setIsModalOpen(true)
  }

  const getDefaultFormData = (table: string) => {
    const baseDefaults = {
      contacts: {
        name: '',
        email: '',
        phone: '',
        query: '',
        documents: '',
        status: 'new'
      },
      jobs: {
        title: '',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        experience: 'Mid-level',
        description: '',
        requirements: '',
        salary: '',
        published: false,
        createdBy: 'Admin'
      },
      blogs: {
        title: '',
        content: '',
        excerpt: '',
        image: '',
        slug: '',
        published: false,
        tags: '',
        createdBy: 'Admin'
      },
      jobApplications: {
        jobId: '',
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: '',
        status: 'applied'
      },
      demoBookings: {
        name: '',
        email: '',
        phone: '',
        company: '',
        meetingType: 'Demo',
        title: '',
        message: '',
        date: new Date().toISOString().slice(0, 10),
        time: '10:00',
        status: 'scheduled'
      },
      about: {
        name: '',
        email: '',
        phone: '',
        query: '',
        documents: '',
        status: 'new'
      },
      employees: {
        name: '',
        email: '',
        phone: '',
        role: '',
        photo: ''
      }
    }
    return baseDefaults[table as keyof typeof baseDefaults] || {}
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const endpoint = getApiEndpoint(activeTab);
      const url = modalMode === 'add'
        ? `/api/admin/${endpoint}`
        : `/api/admin/${endpoint}/${currentRecord?.id}`;
      const method = modalMode === 'add' ? 'POST' : 'PUT';

      let response;
      // Special handling for Employees photo upload
      if (activeTab === 'employees') {
        const form = new FormData();
        // Only append minimal fields
        ['name', 'email', 'phone', 'role'].forEach((key) => {
          if (formData[key]) form.append(key, formData[key]);
        });
        if (formData.photo instanceof File) {
          form.append('photo', formData.photo);
        }
        if (modalMode === 'edit' && currentRecord?.id) {
          form.append('id', currentRecord.id);
        }
        response = await fetch(url, {
          method,
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: form
        });
      } else {
        response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      }
      if (response.ok) {
        showSuccess('Success', `Record ${modalMode === 'add' ? 'added' : 'updated'} successfully`, 3000);
        setIsModalOpen(false);
        fetchAdminData(); // Refresh data
      } else {
        const error = await response.json();
        showError('Error', error.message || `Failed to ${modalMode} record`, 5000);
      }
    } catch (error) {
      console.error('Save error:', error);
      showError('Error', `Failed to ${modalMode} record`, 5000);
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setFormData({})
    setCurrentRecord(null)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => {
      const newData = {
        ...prev,
        [field]: value
      }
      
      // Auto-generate slug from title for blogs
      if (field === 'title' && activeTab === 'blogs' && value && typeof value === 'string') {
        const slug = value
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-')
          .trim()
        newData.slug = slug
      }
      
      return newData
    })
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
    { id: 'employees', name: 'Employees', count: adminData.employees.length },
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
        <table className="min-w-full bg-white text-xs sm:text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  {column.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </th>
              ))}
              <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayData.map((item: any, index: number) => (
              <tr key={item.id || index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column} className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap text-gray-900">
                    {typeof item[column] === 'boolean' 
                      ? item[column] ? 'Yes' : 'No'
                      : item[column] && typeof item[column] === 'object' 
                        ? JSON.stringify(item[column])
                        : String(item[column] || '')
                    }
                  </td>
                ))}
                <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap font-medium">
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <button
                      onClick={() => handleEdit(activeTab, item.id || index)}
                      className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 hover:bg-indigo-200 px-2 sm:px-3 py-1 rounded-md transition-colors text-xs sm:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(activeTab, item.id || index)}
                      className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 px-2 sm:px-3 py-1 rounded-md transition-colors text-xs sm:text-sm"
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

  const getFieldOptions = (field: string) => {
    const options: Record<string, string[]> = {
      // Contact/About status options
      status: ['new', 'replied', 'closed', 'applied', 'reviewing', 'interview', 'rejected', 'hired', 'scheduled', 'completed', 'cancelled'],
      
      // Job related options
      department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Customer Success', 'Design', 'Product'],
      location: ['Remote', 'New York', 'San Francisco', 'London', 'Sydney', 'Toronto', 'Berlin', 'Los Angeles', 'Chicago'],
      type: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'],
      experience: ['Entry-level', 'Junior', 'Mid-level', 'Senior', 'Lead', 'Principal', '1+ years', '2+ years', '3+ years', '5+ years'],
      
      // Demo booking options
      meetingType: ['Demo', 'Consultation', 'Training', 'Support', 'Discovery Call', 'Product Walkthrough'],
      
      // Blog/Content options
      createdBy: ['Admin', 'Editor', 'Content Manager', 'Marketing Team'],
      
      // Time slots for demos
      time: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
    }
    return options[field] || []
  }

  const renderFormField = (field: string) => {
    const fieldOptions = getFieldOptions(field)
    const fieldLabel = field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
    const isRequired = ['title', 'name', 'email', 'content', 'slug'].includes(field)

    // Handle boolean fields
    if (field === 'published' || field === 'featured') {
      return (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={field}
            checked={Boolean(formData[field])}
            onChange={(e) => handleInputChange(field, e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor={field} className="text-sm font-medium text-gray-700">
            {fieldLabel} {isRequired && <span className="text-red-500">*</span>}
          </label>
        </div>
      )
    }

    // Handle dropdown fields
    if (fieldOptions.length > 0) {
      return (
        <select
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          required={isRequired}
        >
          <option value="">Select {fieldLabel}</option>
          {fieldOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
    }

    // Handle textarea fields
    if (['message', 'content', 'description', 'requirements', 'coverLetter', 'skills', 'query'].includes(field)) {
      const rows = field === 'content' ? 8 : field === 'description' || field === 'requirements' ? 6 : 4
      return (
        <textarea
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
          rows={rows}
          placeholder={`Enter ${fieldLabel.toLowerCase()}...`}
          required={isRequired}
        />
      )
    }

    // Handle title field (special handling for demo bookings where it might be longer)
    if (field === 'title') {
      if (activeTab === 'demoBookings') {
        return (
          <textarea
            value={formData[field] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
            rows={2}
            placeholder="Enter meeting title..."
            required={isRequired}
          />
        )
      } else {
        return (
          <input
            type="text"
            value={formData[field] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter title..."
            required={isRequired}
          />
        )
      }
    }

    // Handle file/image fields
    if (["image", "resume", "documents", "photo"].includes(field)) {
      // Only show file upload for 'photo' in Employees tab
      if (field === "photo" && activeTab === "employees") {
        return (
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleInputChange(field, file);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {formData[field] && typeof formData[field] === "string" && (
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                Current: <img src={formData[field]} alt="Employee Photo" className="h-12 inline-block" />
              </div>
            )}
          </div>
        );
      }
      // Default for other file/image fields
      return (
        <div className="space-y-2">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleInputChange(field, file.name);
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            accept={field === "image" ? "image/*" : field === "resume" ? ".pdf,.doc,.docx" : "*"}
          />
          {formData[field] && (
            <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
              Current: {formData[field]}
            </div>
          )}
        </div>
      );
    }

    // Handle time fields
    if (field === 'time') {
      return (
        <select
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          required={isRequired}
        >
          <option value="">Select Time</option>
          {getFieldOptions('time').map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
    }

    // Handle number fields
    if (['salary', 'order', 'rating'].includes(field)) {
      return (
        <input
          type="number"
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={`Enter ${fieldLabel.toLowerCase()}...`}
          min={field === 'rating' ? 0 : undefined}
          max={field === 'rating' ? 10 : undefined}
          required={isRequired}
        />
      )
    }

    // Handle date fields
    if (field.includes('Date') || field.includes('date') || field === 'date') {
      const inputType = field === 'date' ? 'date' : 'datetime-local'
      const value = formData[field] 
        ? (field === 'date' 
          ? formData[field].slice(0, 10) 
          : new Date(formData[field]).toISOString().slice(0, 16))
        : ''
        
      return (
        <input
          type={inputType}
          value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required={isRequired}
        />
      )
    }

    // Handle email fields
    if (field.includes('email') || field.includes('Email')) {
      return (
        <input
          type="email"
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter email address..."
          required={isRequired}
        />
      )
    }

    // Handle phone fields
    if (field.includes('phone') || field.includes('Phone')) {
      return (
        <input
          type="tel"
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter phone number..."
          required={isRequired}
        />
      )
    }

    // Default text input
    return (
      <input
        type="text"
        value={formData[field] || ''}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={`Enter ${fieldLabel.toLowerCase()}...`}
        required={isRequired}
      />
    )
  }

  const renderModal = () => {
    if (!isModalOpen) return null

    const currentData = adminData[activeTab as keyof AdminData]
    let fields = currentData && currentData.length > 0 
      ? Object.keys(currentData[0]).filter(key => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt')
      : Object.keys(formData);
    // For employees, only show minimal fields
    if (activeTab === 'employees') {
      fields = ['name', 'email', 'phone', 'role', 'photo'];
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {modalMode === 'add' ? '✨ Add New' : '📝 Edit'} {activeTab.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <p className="text-blue-100 text-sm mt-1">
                  {modalMode === 'add' ? 'Create a new record with default values' : 'Update existing record'}
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => {
                const isWideField = ['content', 'description', 'requirements', 'coverLetter', 'message', 'query', 'title'].includes(field)
                const isRequired = ['title', 'name', 'email', 'content', 'slug'].includes(field)
                
                return (
                  <div key={field} className={`${isWideField ? 'md:col-span-2' : ''}`}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      {isRequired && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {renderFormField(field)}
                    {field === 'slug' && (
                      <p className="text-xs text-gray-500 mt-1">URL-friendly version (auto-generated from title)</p>
                    )}
                    {field === 'image' && (
                      <p className="text-xs text-gray-500 mt-1">Upload blog featured image</p>
                    )}
                    {field === 'documents' && (
                      <p className="text-xs text-gray-500 mt-1">Upload supporting documents</p>
                    )}
                    {field === 'resume' && (
                      <p className="text-xs text-gray-500 mt-1">Upload resume (PDF, DOC, DOCX)</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              {modalMode === 'add' ? '➕ Add Record' : '💾 Save Changes'}
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
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-4">
              <div className="flex items-center w-full sm:w-auto">
                <div className="flex flex-col items-center pt-6 pb-2">
                  <div className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 rounded-full p-2 shadow-lg">
                    <img
                      src="/images/home/company-logo.png"
                      alt="Pacerline Company Logo"
                      className="h-14 w-auto drop-shadow-xl"
                    />
                  </div>
                  <span className="mt-2 text-lg font-bold text-blue-700 tracking-wide drop-shadow-sm">Pacerline</span>
                  <span className="text-xs text-gray-500 font-medium">Outsourcing Service Pvt. Ltd.</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Admin Dashboard</h1>
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-end flex-wrap">
                <button
                  onClick={handleLogout}
                  className="bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-4 rounded-lg transition-colors border border-red-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
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
            <div className="border-b border-gray-200 overflow-x-auto">
              <nav className="-mb-px flex flex-nowrap space-x-4 sm:space-x-8 px-2 sm:px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                    <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Controls */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 md:gap-4">
                <div className="w-full md:w-1/2 max-w-md">
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
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-2 w-full md:w-auto justify-end">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      fetchAdminData()
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-gray-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                  </button>
                  <button
                    onClick={() => handleAddNew(activeTab)}
                    className="bg-green-100 hover:bg-green-200 text-green-700 font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-green-300"
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