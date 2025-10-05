import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const BookkeepingUSAPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const toggleFAQ = (index: number) => {
    const element = document.getElementById(`faq-${index}`)
    const icon = document.getElementById(`icon-${index}`)
    
    if (element && icon) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden')
        element.classList.add('block')
        icon.textContent = '▼'
      } else {
        element.classList.add('hidden')
        element.classList.remove('block')
        icon.textContent = '▶'
      }
    }
  }

  useEffect(() => {
    setIsVisible(true)
    // Ensure all FAQs start closed
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        const element = document.getElementById(`faq-${i}`)
        const icon = document.getElementById(`icon-${i}`)
        if (element && icon) {
          element.classList.add('hidden')
          element.classList.remove('block')
          icon.textContent = '▶'
        }
      }
    }, 100)
  }, [])

  return (
    <>
      <Head>
        <title>Bookkeeping and Tax Services USA | Professional US Tax Solutions | Pacerline</title>
        <meta name="description" content="Expert bookkeeping and tax services for US businesses. Federal and state tax preparation, payroll services, and comprehensive financial management." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/20 border border-[#092870]/30 text-[#30a659] text-sm font-bold shadow-lg">
                  🇺🇸 Professional US Tax & Bookkeeping Excellence
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#092870] via-[#30a659] to-[#092870] bg-clip-text text-transparent mb-6">
                Bookkeeping and Tax
                <br />
                <span className="text-4xl lg:text-6xl">Service (USA)</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
                Are you a business owner, freelancer, landlord, or small business owner seeking precise bookkeeping and reliable tax services in the USA? You're at the right spot. At Pacerline Outsourcing, we offer full-service bookkeeping and tax preparation that are specifically tailored to meet individuals' and businesses' financial requirements in the U.S.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-full font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Need Professional Services */}
        <section className="relative py-20 bg-gradient-to-r from-blue-100 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why U.S. Businesses Need Professional Bookkeeping Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                Accurate financial records are essential for your business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { title: "Tax Compliance", icon: "📊", color: "from-[#092870] to-indigo-600" },
                { title: "Cash Flow Management", icon: "💰", color: "from-indigo-500 to-purple-600" },
                { title: "Budgeting", icon: "📈", color: "from-blue-500 to-[#092870]" },
                { title: "Business Growth", icon: "🚀", color: "from-[#30a659] to-cyan-600" }
              ].map((need, index) => (
                <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${need.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                    {need.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{need.title}</h3>
                </div>
              ))}
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Our online bookkeeping services maintain your books clean, organized, and easily accessible. We serve U.S.-based LLCs, S-Corps, C-Corps, partnerships, and sole proprietors to ensure complete compliance with IRS tax regulations and U.S. GAAP accounting standards.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Comprehensive Services
              </h2>
              <div className="flex justify-center mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setActiveTab(0)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeTab === 0 
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      Accountant Services
                    </button>
                    <button 
                      onClick={() => setActiveTab(1)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeTab === 1 
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      Bookkeeping Services
                    </button>
                    <button 
                      onClick={() => setActiveTab(2)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeTab === 2 
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      Tax Services
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Accountant Services Tab */}
            {activeTab === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our U.S. Accountant Services Include</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Financial Reporting",
                      description: "Preparation and review of financial statements to ensure accuracy and compliance with Generally Accepted Accounting Principles (GAAP).",
                      icon: "📊"
                    },
                    {
                      title: "Auditing", 
                      description: "Internal or external auditing according to Applicable Auditing Standards to ensure financial records are complete including compliance with appropriate financial reporting framework.",
                      icon: "�"
                    },
                    {
                      title: "Budgeting & Forecasting",
                      description: "Helping firms prepare their budgets and forecast future financial performance.",
                      icon: "📈"
                    },
                    {
                      title: "Payroll Management",
                      description: "Payment of workers on time with proper deductions and benefits.",
                      icon: "💰"
                    },
                    {
                      title: "Forensic Accounting",
                      description: "Tracking finance imbalances and preventing fraud.",
                      icon: "🔍"
                    },
                    {
                      title: "Tax Planning & Advisory",
                      description: "Strategic tax planning and advisory services to minimize tax liabilities and ensure compliance with federal and state tax regulations.",
                      icon: "📋"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookkeeping Services Tab */}
            {activeTab === 1 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our U.S. Bookkeeping Services Include</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Recording Transactions",
                      description: "Accurate recording of all financial transactions, including purchases, sales, receipts, and payments, in the respective ledgers or bookkeeping software.",
                      icon: "�"
                    },
                    {
                      title: "Account Management",
                      description: "Maintaining general ledgers for assets, liabilities, revenues, and expenses to keep financial information in a well-organized and current state.",
                      icon: "📋"
                    },
                    {
                      title: "Account Reconciliation",
                      description: "Regular reconciliation of bank statements with in-house finance accounts for accuracy and consistency.",
                      icon: "⚖️"
                    },
                    {
                      title: "Invoice Management",
                      description: "Creating and sending invoices to clients, along with following up to ensure timely payment collection.",
                      icon: "📄"
                    },
                    {
                      title: "Payroll Processing",
                      description: "Provision of payroll by tracking the hours of employees, calculating wages, and paying salaries.",
                      icon: "💼"
                    },
                    {
                      title: "Expense Tracking",
                      description: "Monitoring company expenses and ensuring that they are accurately recorded and coded.",
                      icon: "💳"
                    },
                    {
                      title: "Report Preparation",
                      description: "Preparation of basic financial accounts, such as profit and loss accounts or summaries of cash flow.",
                      icon: "📊"
                    },
                    {
                      title: "Compliance Support",
                      description: "Recording details as required under the financial act so that one can easily fill up the tax with related papers.",
                      icon: "✅"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl">
                  <p className="text-lg text-gray-700 text-center">
                    Regardless of whether you're a startup business, an online business, a real estate investor, or a contractor, our USA remote bookkeeping services are designed to complement your business model.
                  </p>
                </div>
              </div>
            )}

            {/* Tax Services Tab */}
            {activeTab === 2 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Professional Tax Services for Individuals & Companies</h3>
                <p className="text-lg text-gray-700 text-center mb-8">
                  It's hard to understand the U.S. tax code—but we make it easy. Our tax services USA streamline tax preparation for businesses and individuals to reduce tax liability, remain IRS-compliant, and avoid missing deadlines.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Tax Preparation",
                      description: "Accurate and timely preparation and submission of personal, corporate, and other tax returns as required by federal and state regulations.",
                      features: ["Business Tax Return Preparation (Forms 1120, 1120S, 1065)", "Individual Tax Return (Form 1040 & Schedules)", "State Tax Return Filing in All 50 States"],
                      icon: "📋"
                    },
                    {
                      title: "Tax Planning & Advisory",
                      description: "Advising clients on tax planning to minimize liabilities, maximize deductions, and optimize refunds within the letter of the law.",
                      features: ["Calculation of Quarterly Estimated Tax Payment", "Education and Updates", "Strategic Tax Planning"],
                      icon: "💡"
                    },
                    {
                      title: "Specialized Services",
                      description: "Solving intricate issues regarding taxation and comprehensive compliance support.",
                      features: ["1099 & W-2 Filing Services", "Back Taxes & IRS Resolution Services", "Tax Specialization for complex situations"],
                      icon: "🎯"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mr-6">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 mb-4">{service.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center bg-white/60 p-3 rounded-lg">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl">
                  <p className="text-lg text-gray-700 text-center">
                    We work throughout the year to assist you with advance planning and no surprises. If you need corporate tax filing or freelance tax preparation, we are here for you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* QuickBooks Accounting Service */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-6">
                🔧 Professional QuickBooks Solutions
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">QuickBooks Accounting Service</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At Pacerline Outsourcing, we offer professional accounting services utilizing QuickBooks Online, a robust cloud-based solution relied upon by firms across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Card - QuickBooks Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">QuickBooks Online Benefits</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Real-time bank feeds",
                    "Automated expense management", 
                    "Custom invoicing",
                    "Integrated payroll",
                    "Intelligent financial reporting",
                    "User-friendly dashboard",
                    "Clear cash flow picture"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <span className="w-3 h-3 bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full mr-4"></span>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Card - Our Expertise */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#30a659] to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our QuickBooks Expertise</h3>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our professional team has more than 15 years of bookkeeping and financial management experience to initial set up, manage, and optimize your QuickBooks Online account for compliance and performance.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Chart of accounts setup",
                    "Bank reconciliations", 
                    "Accounts payable/receivable management",
                    "Comprehensive financial reporting",
                    "Certified professionals support"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <span className="w-3 h-3 bg-gradient-to-r from-[#30a659] to-green-600 rounded-full mr-4"></span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-[#30a659]/10 to-green-100/50 rounded-xl border border-[#30a659]/20">
                  <p className="text-[#30a659] font-semibold italic text-center">
                    Trust us to manage your books with accuracy, so you can confidently develop your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve Nationwide in the U.S.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We know your accounting requirements according to your line of business. From property manager AppFolio bookkeeping to selling online and filing ecommerce tax returns USA, we tailor each service to your line of business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: "Real Estate & Property Management",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600",
                  description: "Specialized bookkeeping for property managers and real estate investors"
                },
                {
                  title: "E-commerce & Amazon Sellers", 
                  icon: "🛒",
                  color: "from-indigo-500 to-purple-600",
                  description: "Complete tax solutions for online businesses and marketplace sellers"
                },
                {
                  title: "Healthcare Providers & Clinics",
                  icon: "🏥",
                  color: "from-blue-500 to-indigo-600",
                  description: "Healthcare-specific accounting and compliance management"
                },
                {
                  title: "Construction & Contracting Firms",
                  icon: "🏗️",
                  color: "from-[#30a659] to-cyan-600",
                  description: "Job costing and project-based financial management"
                },
                {
                  title: "Startups & Tech Companies",
                  icon: "💻",
                  color: "from-purple-500 to-violet-600",
                  description: "Growth-focused accounting for technology companies"
                },
                {
                  title: "Legal & Consulting Professionals",
                  icon: "⚖️",
                  color: "from-cyan-500 to-blue-600",
                  description: "Professional services accounting and trust account management"
                },
                {
                  title: "Nonprofits & Religious Organizations",
                  icon: "🤝",
                  color: "from-[#092870] to-[#30a659]",
                  description: "Nonprofit accounting with donation tracking and compliance"
                },
                {
                  title: "All Business Types",
                  icon: "🌟",
                  color: "from-[#30a659] to-[#092870]",
                  description: "Comprehensive services for businesses of all sizes and types"
                }
              ].map((industry, index) => (
                <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-4">
                  💼 Accounting Software Integration
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  We Support All The Leading Accounting Systems
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Looking for an accounting service that supports your software? We're fluent in today's leading platforms.
                </p>
              </div>
              
              {/* Software Logos Simple */}
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  "/images/software-logos/quickbooks.svg",
                  "/images/software-logos/xero.svg",
                  "/images/logos/freshbooks.svg",
                  "/images/software-logos/sage.svg",
                  "/images/logos/myob.svg",
                  "/images/software-logos/buildium.svg"
                ].map((logo, index) => (
                  <div key={index} className="transition-all duration-300 hover:scale-110">
                    <img 
                      src={logo} 
                      alt={`Accounting Software ${index + 1}`}
                      className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#30a659]/10 to-green-100/50 rounded-full border border-[#30a659]/20">
                  <span className="text-[#30a659] font-semibold">
                    ✨ And Many More Accounting Platforms!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us as Your Bookkeeping & Tax Partner?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just bookkeepers or tax accountants—we're your long-term financial growth partner at Pacerline Outsourcing Service Pvt Ltd.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
              {/* Left Side - Why Choose Us (2/3 width) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="text-left mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-4">
                    ⭐ Why Choose Pacerline?
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Trusted Financial Partner</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "13+ Years of Experience",
                      description: "We specialize in U.S. accounting standards, tax code, and compliance, helping hundreds of businesses grow financially.",
                      icon: "🎯",
                      color: "from-[#092870]/10 to-blue-50"
                    },
                    {
                      title: "Affordable Pricing", 
                      description: "Get low-cost tax and bookkeeping services without compromises.",
                      icon: "💰",
                      color: "from-green-50 to-emerald-50"
                    },
                    {
                      title: "Certified Accountants",
                      description: "Our team of U.S. tax professionals and certified bookkeepers includes industry compliance training.",
                      icon: "🎓",
                      color: "from-purple-50 to-indigo-50"
                    },
                    {
                      title: "Secure & Cloud-Based",
                      description: "Your data is stored on bank-standard secure platforms with encrypted access.",
                      icon: "🔐",
                      color: "from-cyan-50 to-blue-50"
                    },
                    {
                      title: "Dedicated Support",
                      description: "Receive a dedicated account representative for personal one-on-one support.",
                      icon: "🤝",
                      color: "from-orange-50 to-amber-50"
                    },
                    {
                      title: "Nationwide Service",
                      description: "We serve all 50 U.S. states with 100% remote capabilities.",
                      icon: "🇺🇸",
                      color: "from-red-50 to-pink-50"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className={`p-6 bg-gradient-to-br ${benefit.color} rounded-2xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Onboarding Process (1/3 width) */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#30a659]/10 border border-[#30a659]/20 text-[#30a659] text-sm font-bold mb-3">
                      🚀 Our Process
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Simple Onboarding
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Free Consultation",
                        description: "Talk to us about your needs",
                        icon: "💬",
                        color: "from-[#092870] to-indigo-600"
                      },
                      {
                        title: "Secure Data Transfer",
                        description: "Share files through encrypted portals",
                        icon: "🔒",
                        color: "from-indigo-500 to-purple-600"
                      },
                      {
                        title: "Software Setup",
                        description: "We integrate with your system",
                        icon: "⚙️",
                        color: "from-blue-500 to-indigo-600"
                      },
                      {
                        title: "Daily Bookkeeping",
                        description: "Ongoing support & planning",
                        icon: "📊",
                        color: "from-[#30a659] to-cyan-600"
                      },
                      {
                        title: "Reports & Filing",
                        description: "Regular reports & tax filing",
                        icon: "📋",
                        color: "from-purple-500 to-violet-600"
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                        <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#30a659]/10 to-green-100/50 rounded-xl border border-[#30a659]/20 text-center">
                    <p className="text-sm font-semibold text-[#30a659]">
                      Work with experts who know U.S. compliance inside and out!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our US bookkeeping and tax services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do you offer bookkeeping services for LLCs and S-Corps?",
                  answer: "Yes. We handle all forms of U.S. entities, such as sole proprietorships, LLCs, partnerships, S-Corps, and C-Corps."
                },
                {
                  question: "Do you handle back taxes?",
                  answer: "Yes. We provide catch-up bookkeeping and last year's tax returns to bring your books up to date."
                },
                {
                  question: "Is my data safe?",
                  answer: "Yes. We log into encrypted cloud-based accounting software to keep your information confidential and secure."
                },
                {
                  question: "Do you represent clients in all states?",
                  answer: "Yes, we provide national bookkeeping and tax services across the 50 states."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:border-[#30a659] transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center w-full">
                      <span 
                        id={`icon-${index}`}
                        className="text-[#30a659] font-bold text-xl mr-4 group-hover:scale-110 transition-transform duration-200"
                      >
                        ▶
                      </span>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-[#092870] transition-colors duration-200">{faq.question}</span>
                    </div>
                  </button>
                  <div id={`faq-${index}`} className="hidden px-8 pb-6 border-t border-blue-100">
                    <div className="pl-12 pt-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <button className="px-8 py-3 bg-gradient-to-r from-[#092870] to-[#30a659] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your US Taxes?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Get started with our expert US tax and bookkeeping services today. Don't let financial complexities hold back your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-12 py-6 bg-white text-[#092870] rounded-full font-semibold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Start Free Consultation</span>
              </button>
              <button className="px-12 py-6 border-2 border-white text-white rounded-full font-semibold text-xl hover:bg-white hover:text-[#092870] transition-all duration-300">
                View Our Services
              </button>
            </div>
            <div className="mt-8 text-white/80">
              <p className="text-lg">
                ✨ Join 2000+ satisfied clients across all 50 US states
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .rotate-y-180 {
          transform: rotateY(0deg);
        }
        
        /* Custom animations for blue/green theme */
        @keyframes glow-blue {
          0%, 100% { box-shadow: 0 0 20px rgba(9, 40, 112, 0.3); }
          50% { box-shadow: 0 0 30px rgba(9, 40, 112, 0.5); }
        }
        
        .hover\\:animate-glow:hover {
          animation: glow-blue 2s ease-in-out infinite;
        }
        
        /* Gradient text animation */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </>
  )
}

export default BookkeepingUSAPage
