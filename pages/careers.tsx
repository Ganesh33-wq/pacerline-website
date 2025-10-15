import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useNotificationContext } from '../contexts/NotificationContext'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience?: string
  description: string
  requirements: string
  salary?: string
  published: boolean
  createdAt: string
}

const CareersPage = () => {
  const { showSuccess, showError } = useNotificationContext()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  })

  // Fetch jobs from API
  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs')
      if (response.ok) {
        const data = await response.json()
        setJobs(data.jobs || [])
      } else {
        showError('Error', 'Failed to load job openings', 5000)
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
      showError('Network Error', 'Unable to load job openings', 5000)
    } finally {
      setLoading(false)
    }
  }

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
  }

  const handleCloseApplication = () => {
    setShowApplicationForm(false)
    setSelectedJob(null)
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      coverLetter: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedJob) return

    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      formData.append('jobId', selectedJob.id)
      formData.append('name', applicationData.name)
      formData.append('email', applicationData.email)
      formData.append('phone', applicationData.phone)
      formData.append('coverLetter', applicationData.coverLetter)

      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (response.ok) {
        showSuccess(
          'Application Submitted!',
          'Thank you for applying. We will review your application and get back to you soon.',
          8000
        )
        handleCloseApplication()
      } else {
        showError(
          'Application Failed',
          result.message || 'Failed to submit application. Please try again.',
          6000
        )
      }
    } catch (error) {
      console.error('Application submission error:', error)
      showError(
        'Network Error',
        'Unable to submit application. Please check your connection and try again.',
        6000
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Careers - Join Our Team | Pacerline Outsourcing Service</title>
        <meta name="description" content="Explore career opportunities at Pacerline Outsourcing Service. Join our team of professionals in accounting, property management, and business services." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        {/* Simple animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-indigo-200 rounded-full opacity-25 animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 shadow-md animate-bounce-gentle">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-fade-in-up">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Build your career with us. We're looking for talented individuals to join our 
              <span className="text-blue-600 font-semibold"> growing team of professionals</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-400">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Open Positions
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Join Our Team?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Pacerline an exceptional place to build your career and grow professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Remote Flexibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Work from anywhere with full remote flexibility. We believe in work-life balance and trust our team to deliver exceptional results from their preferred environment.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Invest in your professional growth with access to training programs, certifications, and industry conferences. We support your journey to become an expert in your field.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a supportive team environment where collaboration thrives. Work with talented professionals who are passionate about delivering excellence for our clients.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy competitive salaries, comprehensive health benefits, performance bonuses, and other perks that recognize and reward your valuable contributions.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a long-term career with clear advancement paths and leadership opportunities. We promote from within and support your professional aspirations.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Make a meaningful impact in the property management industry. Work on projects that help businesses optimize their operations and achieve success.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our team of dedicated professionals and take your career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </a>
              <a href="#openings" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-gray-50" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg text-gray-600">Loading job openings...</span>
              </div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Current Openings</h3>
              <p className="text-gray-600">
                We don't have any open positions right now, but we're always looking for talented people. 
                Check back soon or send us your resume!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Dynamic Grid Layout - 3 cards, then 2 cards pattern */}
              {Array.from({ length: Math.ceil(jobs.length / 5) }).map((_, cycleIndex) => {
                const startIndex = cycleIndex * 5
                const firstRowJobs = jobs.slice(startIndex, startIndex + 3)
                const secondRowJobs = jobs.slice(startIndex + 3, startIndex + 5)
                
                return (
                  <div key={cycleIndex} className="space-y-8">
                    {/* First Row - 3 Cards */}
                    {firstRowJobs.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {firstRowJobs.map((job) => (
                          <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 w-full max-w-sm">
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                  <div className="space-y-1">
                                    <p className="text-sm text-blue-600 font-medium">{job.department}</p>
                                    <p className="text-sm text-gray-500 flex items-center">
                                      <span className="mr-1">📍</span>
                                      {job.location}
                                    </p>
                                    <p className="text-sm text-gray-500 flex items-center">
                                      <span className="mr-1">💼</span>
                                      {job.type}
                                    </p>
                                    {job.experience && (
                                      <p className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-1">🎯</span>
                                        {job.experience}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {job.salary && (
                                  <div className="text-right">
                                    <p className="text-sm text-gray-500">Salary</p>
                                    <p className="text-lg font-bold text-green-600">{job.salary}</p>
                                  </div>
                                )}
                              </div>

                              <div className="mb-4">
                                <p className="text-gray-600 text-sm line-clamp-3">
                                  {job.description.length > 150 
                                    ? `${job.description.substring(0, 150)}...` 
                                    : job.description
                                  }
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">
                                  Posted {new Date(job.createdAt).toLocaleDateString()}
                                </span>
                                <button
                                  onClick={() => handleApplyClick(job)}
                                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Second Row - 2 Cards */}
                    {secondRowJobs.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                        {secondRowJobs.map((job) => (
                          <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 w-full max-w-sm">
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                  <div className="space-y-1">
                                    <p className="text-sm text-blue-600 font-medium">{job.department}</p>
                                    <p className="text-sm text-gray-500 flex items-center">
                                      <span className="mr-1">📍</span>
                                      {job.location}
                                    </p>
                                    <p className="text-sm text-gray-500 flex items-center">
                                      <span className="mr-1">💼</span>
                                      {job.type}
                                    </p>
                                    {job.experience && (
                                      <p className="text-sm text-gray-500 flex items-center">
                                        <span className="mr-1">🎯</span>
                                        {job.experience}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {job.salary && (
                                  <div className="text-right">
                                    <p className="text-sm text-gray-500">Salary</p>
                                    <p className="text-lg font-bold text-green-600">{job.salary}</p>
                                  </div>
                                )}
                              </div>

                              <div className="mb-4">
                                <p className="text-gray-600 text-sm line-clamp-3">
                                  {job.description.length > 150 
                                    ? `${job.description.substring(0, 150)}...` 
                                    : job.description
                                  }
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">
                                  Posted {new Date(job.createdAt).toLocaleDateString()}
                                </span>
                                <button
                                  onClick={() => handleApplyClick(job)}
                                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Apply for Position</h3>
                  <p className="text-lg text-blue-600 font-medium">{selectedJob.title}</p>
                </div>
                <button
                  onClick={handleCloseApplication}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitApplication} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={applicationData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload your resume in PDF, DOC, or DOCX format (Max 5MB)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  rows={4}
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseApplication}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transform hover:scale-105 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default CareersPage