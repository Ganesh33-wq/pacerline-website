import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact us - ProBusiness Outsourcing Service</title>
        <meta name="description" content="Contact ProBusiness for competitive pricing on outsourcing services. Located at 36 King Street, Melbourne. Call +91 8608691085" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact us
            </h1>
            <p className="text-xl md:text-2xl text-green-400">
              We are truthful – we value honest and frequent feedback
            </p>
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
              <a href="tel:+918608691085" className="text-lg text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                +91 8608691085
              </a>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Email</h3>
              <a href="mailto:info@pacerline.com" className="text-lg text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                info@pacerline.com
              </a>
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
                <span className="text-white text-2xl">💬</span>
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

                <button type="submit" className="w-full btn-primary">
                  Send Message
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

      <Footer />
    </div>
  )
}

export default ContactPage
