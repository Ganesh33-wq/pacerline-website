import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import { useNotificationContext } from '../contexts/NotificationContext'

const ContactPage = () => {
  const { showSuccess, showError } = useNotificationContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          query: formData.message
        }),
      })

      const result = await response.json()

      if (response.ok) {
        showSuccess(
          'Message Sent Successfully!',
          'Thank you for contacting us. We will get back to you within 24 hours.',
          6000
        )
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        showError(
          'Failed to Send Message',
          result.message || 'Something went wrong. Please try again.',
          6000
        )
      }
    } catch (error) {
      console.error('Contact form error:', error)
      showError(
        'Network Error',
        'Unable to send message. Please check your connection and try again.',
        6000
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Contact us - ProBusiness Outsourcing Service</title>
        <meta name="description" content="Contact ProBusiness for competitive pricing on outsourcing services. Located at 36 King Street, Melbourne. Call +91 8608691085" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 overflow-hidden">
        {/* Simple animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-32 right-16 w-20 h-20 bg-emerald-200 rounded-full opacity-25 animate-float-delayed"></div>
          <div className="absolute bottom-16 left-1/3 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-float-slow"></div>
        </div>
        
        {/* Simple floating icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-bounce-gentle delay-300">
            <svg className="w-6 h-6 text-green-300 opacity-40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
          </div>
          <div className="absolute top-32 right-20 animate-bounce-gentle delay-700">
            <svg className="w-5 h-5 text-emerald-300 opacity-40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 shadow-md animate-bounce-gentle">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 animate-fade-in-up delay-200">
              We are truthful – we value 
              <span className="text-green-600 font-semibold"> honest and frequent feedback</span>
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Whatever are your needs, contact us & we would develop a solution for you!
            </p>
            
            {/* Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto animate-fade-in-up delay-500">
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-green-600">&lt;1hr</div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Whatever are your needs, Contact us & we would develop a solution for you!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Phone</h3>
              <button
                onClick={() => window.location.href = 'tel:+918608691085'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Call Now
              </button>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Email</h3>
              <button
                onClick={() => window.location.href = 'mailto:info@pacerline.com'}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Email Now
              </button>
            </div>

            <div className="group text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Book Demo</h3>
              <button 
                onClick={() => window.location.href = '/book-demo'}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Schedule Now
              </button>
            </div>

            <div className="group text-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4">WhatsApp</h3>
              <a 
                href="https://wa.me/918608691085?text=Hello! I'm interested in your services" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="tax-usa">Tax Services (USA)</option>
                      <option value="tax-australia">Tax Services (Australia)</option>
                      <option value="property-management">Property Management</option>
                      <option value="appfolio">AppFolio Services</option>
                      <option value="buildium">Buildium Services</option>
                      <option value="virtual-assistant">Virtual Assistant</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">📧</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:info@pacerline.com" className="text-blue-600 hover:text-blue-700 font-semibold">info@pacerline.com</a>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:+918608691085" className="text-green-600 hover:text-green-700 font-semibold">+91 8608691085</a>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-emerald-50 rounded-xl border border-emerald-200 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">�</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <a 
                          href="https://wa.me/918608691085?text=Hello! I'm interested in your services" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 font-semibold"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🕒</div>
                      <p className="text-xl font-bold text-green-600 mb-2">24/7 Available</p>
                      <p className="text-gray-600">We're here for you around the clock</p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></span>
                        <span className="text-sm font-medium text-green-700">Online Now</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      24/7 customer support
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      Certified professionals
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      Competitive pricing
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">✓</span>
                      Global service delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
