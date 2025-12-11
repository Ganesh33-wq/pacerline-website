import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContactWidget from '../components/FloatingContactWidget'
import { useState } from 'react'

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: 'Property Management Accounting (USA)',
      category: 'ACCOUNTING SERVICES',
      description: 'Comprehensive property management accounting services tailored for US real estate businesses. Expert handling of tenant ledgers, owner statements, rent collection tracking, and property-specific financial reporting.',
      features: [
        'Property-level financial statements',
        'Tenant and owner ledgers',
        'Rent roll management',
        'CAM reconciliation',
        'HOA accounting',
        'Trust account management'
      ],
      icon: '🏢',
      color: 'from-purple-500 to-violet-600',
      link: '/property-management',
      badge: 'USA'
    },
    {
      id: 2,
      title: 'Bookkeeping & Tax Services (USA)',
      category: 'ACCOUNTING SERVICES',
      description: 'Complete bookkeeping and tax preparation services for US businesses. GAAP-compliant financial record-keeping, tax planning, and IRS filing services to keep your business compliant and financially healthy.',
      features: [
        'General ledger maintenance',
        'Accounts payable/receivable',
        'Bank reconciliation',
        'Federal & state tax preparation',
        'Quarterly tax planning',
        'Sales tax compliance'
      ],
      icon: '🇺🇸',
      color: 'from-indigo-500 to-purple-600',
      link: '/bookkeeping-usa',
      badge: 'USA'
    },
    {
      id: 3,
      title: 'Accounting & Tax Services (Australia)',
      category: 'ACCOUNTING SERVICES',
      description: 'Specialized accounting services for Australian businesses following ATO regulations. BAS preparation, GST compliance, and comprehensive financial reporting for all business types.',
      features: [
        'BAS & GST preparation',
        'ATO compliance',
        'Financial statements (AASB)',
        'Payroll & superannuation',
        'MYOB & Xero expertise',
        'Tax planning & lodgement'
      ],
      icon: '🇦🇺',
      color: 'from-blue-500 to-indigo-600',
      link: '/accounting-australia',
      badge: 'AU'
    },
    {
      id: 4,
      title: 'AppFolio Bookkeeping Service',
      category: 'VIRTUAL ASSISTANT SERVICES',
      description: 'Dedicated AppFolio bookkeeping specialists for property management companies. Expert data entry, reconciliation, and reporting within the AppFolio platform to maximize your software investment.',
      features: [
        'AppFolio data entry',
        'Property reconciliation',
        'Owner statements',
        'Tenant ledger management',
        'Bill payment processing',
        'Custom reporting'
      ],
      icon: '📊',
      color: 'from-cyan-500 to-blue-600',
      link: '/appfolio-bookkeeping',
      badge: 'SOFTWARE'
    },
    {
      id: 5,
      title: 'Buildium Bookkeeping Service',
      category: 'VIRTUAL ASSISTANT SERVICES',
      description: 'Professional Buildium bookkeeping services for property managers. Streamline your operations with accurate data entry, bank reconciliation, and financial reporting in Buildium.',
      features: [
        'Buildium data management',
        'Transaction categorization',
        'Bank reconciliation',
        'Trust accounting',
        'Monthly financial reports',
        'Rent collection tracking'
      ],
      icon: '🏗️',
      color: 'from-teal-500 to-cyan-600',
      link: '/buildium-bookkeeping',
      badge: 'SOFTWARE'
    },
    {
      id: 6,
      title: 'AppFolio Administrator Service',
      category: 'VIRTUAL ASSISTANT SERVICES',
      description: 'Complete AppFolio administration and support services. From system setup to daily operations, tenant communications, and maintenance coordination - we handle it all.',
      features: [
        'System setup & configuration',
        'Tenant onboarding',
        'Lease management',
        'Maintenance coordination',
        'Tenant communications',
        'Document management'
      ],
      icon: '⚙️',
      color: 'from-cyan-500 to-blue-600',
      link: '/appfolio-admin',
      badge: 'ADMIN'
    },
    {
      id: 7,
      title: 'Buildium Administration',
      category: 'VIRTUAL ASSISTANT SERVICES',
      description: 'Expert Buildium administration services for property management companies. Handle tenant relations, work orders, lease tracking, and system management efficiently.',
      features: [
        'Buildium setup & training',
        'Work order management',
        'Tenant screening',
        'Lease administration',
        'Vendor coordination',
        'Report generation'
      ],
      icon: '🔧',
      color: 'from-teal-500 to-cyan-600',
      link: '/buildium-admin',
      badge: 'ADMIN'
    },
    {
      id: 8,
      title: 'Virtual Assistant Service',
      category: 'VIRTUAL ASSISTANT SERVICES',
      description: 'Professional virtual assistant services to handle administrative tasks, customer service, data entry, and more. Increase productivity and focus on core business activities.',
      features: [
        'Administrative support',
        'Email & calendar management',
        'Customer service',
        'Data entry & processing',
        'Research & reporting',
        'Social media management'
      ],
      icon: '💼',
      color: 'from-[#30a659] to-[#092870]',
      link: '/virtual-assistant',
      badge: 'VA'
    },
    {
      id: 9,
      title: 'Digital Marketing',
      category: 'DIGITAL MARKETING',
      description: 'Comprehensive digital marketing services to grow your online presence. SEO, social media marketing, PPC advertising, content creation, and lead generation strategies.',
      features: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'PPC & Google Ads',
        'Content Marketing',
        'Email Campaigns',
        'Website Design & Development'
      ],
      icon: '📱',
      color: 'from-blue-500 to-[#092870]',
      link: '/digital-marketing',
      badge: 'MARKETING'
    }
  ]

  const categories = [
    {
      name: 'Accounting Services',
      description: 'Professional accounting, bookkeeping, and tax services',
      icon: '📊',
      color: 'bg-blue-500'
    },
    {
      name: 'Virtual Assistant Services',
      description: 'Administrative support and software management',
      icon: '💼',
      color: 'bg-purple-500'
    },
    {
      name: 'Digital Marketing',
      description: 'Online presence and lead generation',
      icon: '📱',
      color: 'bg-green-500'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services | Accounting, Virtual Assistant & Digital Marketing | Pacerline</title>
        <meta name="description" content="Comprehensive business services including property management accounting, bookkeeping, AppFolio & Buildium administration, virtual assistant services, and digital marketing solutions." />
        <meta name="keywords" content="accounting services, bookkeeping, virtual assistant, property management, AppFolio, Buildium, digital marketing, tax services" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#092870] via-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8">
                <span className="text-emerald-300 text-sm font-semibold">✨ COMPREHENSIVE BUSINESS SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#ffffff' }}>
                Our Services
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: '#ffffff' }}>
                Expert accounting, virtual assistant, and digital marketing services to help your business thrive
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="#services" 
                  className="inline-flex items-center px-8 py-4 bg-white font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  style={{ color: '#092870' }}
                >
                  Explore Services
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ color: '#ffffff' }}
                >
                  Get Free Consultation
                  <span className="ml-2">📞</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive solutions across three main categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our wide range of professional services designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link 
                  key={service.id}
                  href={service.link}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Badge & Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-5xl transform transition-transform duration-500 ${hoveredService === service.id ? 'scale-110 rotate-6' : ''}`}>
                        {service.icon}
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${service.color} text-white`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {service.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 ml-7">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Learn More
                      </span>
                      <svg 
                        className={`w-6 h-6 transform transition-all duration-300 ${hoveredService === service.id ? 'translate-x-2' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Pacerline?
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted partner for business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '⭐',
                  title: '10+ Years Experience',
                  description: 'Decade of expertise in accounting and business services'
                },
                {
                  icon: '🎯',
                  title: '500+ Happy Clients',
                  description: 'Trusted by businesses across USA and Australia'
                },
                {
                  icon: '💰',
                  title: 'Cost Effective',
                  description: 'Save up to 60% on operational costs'
                },
                {
                  icon: '🔒',
                  title: 'Data Security',
                  description: 'Bank-level encryption and security protocols'
                },
                {
                  icon: '⚡',
                  title: 'Fast Turnaround',
                  description: 'Quick delivery without compromising quality'
                },
                {
                  icon: '📞',
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support'
                },
                {
                  icon: '✅',
                  title: 'Quality Assured',
                  description: 'Multi-level quality checks on all deliverables'
                },
                {
                  icon: '🌐',
                  title: 'Global Presence',
                  description: 'Serving clients worldwide with local expertise'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#092870] to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10" style={{ color: '#ffffff' }}>
              Let's discuss how we can help your business grow with our professional services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                style={{ color: '#092870' }}
              >
                Contact Us Today
                <span className="ml-2">→</span>
              </Link>
              <Link 
                href="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{ color: '#ffffff' }}
              >
                Schedule Free Demo
                <span className="ml-2">📅</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactWidget />
      </div>
    </>
  )
}

export default ServicesPage

