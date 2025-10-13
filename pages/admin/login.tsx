import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useNotificationContext } from '../../contexts/NotificationContext'

const AdminLogin = () => {
  const router = useRouter()
  const { showSuccess, showError } = useNotificationContext()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })

      const result = await response.json()

      if (response.ok) {
        // Set cookie for middleware
        document.cookie = `admin-token=${result.token}; path=/; max-age=86400`; // 24 hours
        // Store auth token in localStorage
        localStorage.setItem('adminToken', result.token)
        showSuccess('Login Successful', 'Welcome to Admin Panel', 3000)
        
        // Direct redirect to dashboard
        console.log('Redirecting to dashboard...')
        window.location.href = '/admin/dashboard'
      } else {
        showError('Login Failed', result.message || 'Invalid credentials', 5000)
      }
    } catch (error) {
      console.error('Login error:', error)
      showError('Network Error', 'Unable to connect to server', 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login - Pacerline Admin Panel</title>
        <meta name="description" content="Admin login for Pacerline management system" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-auto flex items-center justify-center">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">
              Admin Panel Login
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white transition-all duration-200 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-blue-100">
              © 2025 Pacerline Outsourcing Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin