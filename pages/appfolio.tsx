import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const AppFolioPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>AppFolio Property Management Software & Services | Pacerline</title>
        <meta name="description" content="Expert AppFolio bookkeeping and administration services for US property management companies. 13+ years experience with cloud-based property management solutions." />
        <meta name="keywords" content="AppFolio, property management software, AppFolio bookkeeping, property management accounting, real estate software" />
        <meta property="og:title" content="AppFolio Services | Professional Property Management Solutions" />
        <meta property="og:description" content="Comprehensive AppFolio services for property management companies. Expert bookkeeping and administration solutions." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/appfolio" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section - Title Only */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
          {/* Enhanced Background Animations */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Geometric Shapes Animation */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/25 to-emerald-300/15 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-200/20 to-blue-300/25 rounded-full animate-pulse animation-delay-3000"></div>
            
            {/* Floating Dots */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-2 h-2 bg-teal-500 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-bounce animation-delay-3000"></div>
            
            {/* Gradient Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/30 to-transparent animate-pulse animation-delay-2000"></div>
          </div>

          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-lg font-bold mb-8 shadow-lg">
                <span className="mr-3 text-2xl animate-pulse">🏢</span>
                Professional AppFolio Excellence
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-gradient-x">
                  AppFolio
                </span>
                <span className="block text-gray-800">Property Management Excellence</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Expert AppFolio services for modern property management companies
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative z-10">Get AppFolio Expert Help</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-12 py-5 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  View Our AppFolio Services
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
                  <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full mt-2 animate-pulse"></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Scroll to learn more</p>
              </div>
            </div>
          </div>

          {/* Custom Animations */}
          <style jsx>{`
            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(50px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes gradient-x {
              0%, 100% {
                background-size: 200% 200%;
                background-position: left center;
              }
              50% {
                background-size: 200% 200%;
                background-position: right center;
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 1s ease-out;
            }
            
            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
            }
            
            .animation-delay-1000 {
              animation-delay: 1s;
            }
            
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            
            .animation-delay-3000 {
              animation-delay: 3s;
            }
          `}</style>
        </section>

        {/* About Section with Content and Images */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-6">
                  🏢 Expert AppFolio Solutions
                </div>
                
                <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
                  <p>
                    <strong>AppFolio is cloud-based property management software</strong> that makes it easier for landlords, real estate investors, and property managers to operate their businesses. If you manage single-family homes, multifamily apartments, commercial buildings, or community associations, AppFolio has an all-in-one solution that can help simplify your business.
                  </p>
                  <p>
                    With accounting, leasing, tenant portals, maintenance tracking, and mobile access integrated into the software, AppFolio allows you to easily manage your properties at any time and from anywhere.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Get AppFolio Expert Help
                  </button>
                  <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                    View Our AppFolio Services
                  </button>
                </div>
              </div>

              {/* Right Side - Images/Visual Elements */}
              <div className="relative">
                <div className="relative">
                  {/* Main Image Placeholder */}
                  <div className="bg-gradient-to-br from-[#092870]/10 to-indigo-100 rounded-3xl p-8 shadow-xl">
                    <div className="text-center space-y-6">
                      <div className="text-6xl">🏢</div>
                      <h3 className="text-2xl font-bold text-gray-900">AppFolio Expertise</h3>
                      <p className="text-gray-600">Comprehensive property management solutions with 13+ years of specialized experience</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl">📊</div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl">🔧</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AppFolio Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trusted AppFolio Specialists</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#092870] mb-3">13+</div>
                    <div className="font-semibold text-gray-900">Years Experience</div>
                    <div className="text-sm text-gray-600">AppFolio Expertise</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#30a659] mb-3">18K+</div>
                    <div className="font-semibold text-gray-900">Businesses</div>
                    <div className="text-sm text-gray-600">Use AppFolio in USA</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-3">100-5K</div>
                    <div className="font-semibold text-gray-900">Units</div>
                    <div className="text-sm text-gray-600">Scalable Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Uses AppFolio Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who Uses AppFolio?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                AppFolio is relied upon by more than 18,000 property management businesses in the USA. Whether you have 100 units or 5,000, AppFolio streamlines your workflow and helps you to grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential & Commercial Property Managers",
                  description: "Complete property management solutions for all property types",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Single & Multifamily Rental Owners",
                  description: "Streamlined management for individual and portfolio owners",
                  icon: "🏠",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "HOA & Condo Association Managers",
                  description: "Specialized tools for community association management",
                  icon: "🏘️",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Student & Military Housing Managers",
                  description: "Purpose-built solutions for specialized housing sectors",
                  icon: "🎓",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Real Estate Investment Firms",
                  description: "Enterprise-level tools for investment property portfolios",
                  icon: "💼",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Property Management Companies",
                  description: "Comprehensive solutions for professional management firms",
                  icon: "🏛️",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((user, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${user.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {user.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{user.title}</h3>
                  <p className="text-gray-700">{user.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Key Features of AppFolio Software
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                AppFolio's comprehensive platform includes everything you need to manage your properties efficiently
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg inline-block">
                <div className="flex flex-wrap justify-center gap-2">
                  {['Built-In Accounting', 'Rent Collection', 'Tenant & Owner Portals', 'Maintenance Management', 'Leasing Tools', 'Reports & Dashboards'].map((tab, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                        activeTab === index 
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Built-In Accounting Tab */}
            {activeTab === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AppFolio Built-In Property Management Administration and Accounting Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Property Management Accounting",
                      description: "Created specifically for property management accounting needs",
                      icon: "📊"
                    },
                    {
                      title: "Corporate Accounting Support",
                      description: "Comprehensive corporate accounting features",
                      icon: "🏢"
                    },
                    {
                      title: "Accounts Receivable & Payable",
                      description: "Complete AR/AP management system",
                      icon: "💰"
                    },
                    {
                      title: "Bank Reconciliations",
                      description: "Automated bank reconciliation processes",
                      icon: "🏦"
                    },
                    {
                      title: "Credit Card Reconciliations",
                      description: "Streamlined credit card reconciliation",
                      icon: "💳"
                    },
                    {
                      title: "Owner Statements",
                      description: "Professional owner reporting and statements",
                      icon: "📋"
                    },
                    {
                      title: "Vendor Payments and 1099s",
                      description: "Vendor management and tax reporting",
                      icon: "📄"
                    },
                    {
                      title: "Custom Financial Reports",
                      description: "Tailored financial reporting solutions",
                      icon: "📈"
                    },
                    {
                      title: "CAM Reconciliations",
                      description: "Common Area Maintenance reconciliations",
                      icon: "⚙️"
                    },
                    {
                      title: "Lease Management & Tracking",
                      description: "Automated lease tracking, renewals, and rent escalations with comprehensive lease management tools",
                      icon: "📋"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white text-center">
                  <p className="text-lg font-semibold">
                    AppFolio helps keep your books IRS-compliant and investor-ready, without requiring any outside software.
                  </p>
                </div>
              </div>
            )}

            {/* Online Rent Collection Tab */}
            {activeTab === 1 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Online Rent Collection</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-4xl mb-4">💳</div>
                    <h4 className="text-xl font-bold mb-4">Multiple Payment Methods</h4>
                    <p>Tenants can pay via credit card, debit, or ACH transfers</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-4xl mb-4">🔄</div>
                    <h4 className="text-xl font-bold mb-4">Automatic Processing</h4>
                    <p>AppFolio automatically posts payments and sends reminders</p>
                  </div>
                  <div className="text-center p-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl text-white">
                    <div className="text-4xl mb-4">📊</div>
                    <h4 className="text-xl font-bold mb-4">Accounting Integration</h4>
                    <p>Captures transactions directly in your accounting system</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tenant & Owner Portals Tab */}
            {activeTab === 2 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tenant & Owner Portals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">🏠 Tenant Portal Features</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#30a659] rounded-full mr-3"></span>Pay rent online</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#30a659] rounded-full mr-3"></span>Submit maintenance requests</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#30a659] rounded-full mr-3"></span>Review lease documents</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#30a659] rounded-full mr-3"></span>24/7 access to account information</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">👥 Owner Portal Features</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#092870] rounded-full mr-3"></span>View financial reports</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#092870] rounded-full mr-3"></span>Access property information</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#092870] rounded-full mr-3"></span>Review distributions</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-[#092870] rounded-full mr-3"></span>Real-time portfolio insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Maintenance Management Tab */}
            {activeTab === 3 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Maintenance Management</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">🔧 Centralized Platform</h4>
                    <p className="text-gray-700">Manage work orders, vendor allocation, and tenant notification through one centralized platform. AppFolio even allows you to create invoices with markup fees.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-[#30a659] to-emerald-600 rounded-2xl text-white">
                      <div className="text-3xl mb-3">📝</div>
                      <h5 className="font-bold">Work Orders</h5>
                      <p className="text-sm opacity-90">Create and track maintenance requests</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white">
                      <div className="text-3xl mb-3">👷</div>
                      <h5 className="font-bold">Vendor Management</h5>
                      <p className="text-sm opacity-90">Assign and manage service providers</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl text-white">
                      <div className="text-3xl mb-3">📧</div>
                      <h5 className="font-bold">Notifications</h5>
                      <p className="text-sm opacity-90">Automated tenant and owner updates</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Automated Leasing Tools Tab */}
            {activeTab === 4 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Automated Leasing Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Market & List Vacancies", icon: "📢", desc: "Promote available units across platforms" },
                    { title: "Screen Tenants", icon: "🔍", desc: "Comprehensive applicant screening" },
                    { title: "Create Leases", icon: "📋", desc: "Generate professional lease agreements" },
                    { title: "Gather E-signatures", icon: "✍️", desc: "Digital signing without printing" }
                  ].map((tool, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                      <div className="text-3xl mb-4">{tool.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{tool.title}</h4>
                      <p className="text-sm text-gray-700">{tool.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center p-6 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                  <p className="text-lg font-semibold">All without printing documents ever!</p>
                </div>
              </div>
            )}

            {/* Reports & Dashboards Tab */}
            {activeTab === 5 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customized Reports and Dashboards</h3>
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <p className="text-xl text-gray-700">AppFolio software helps you create real-time dashboards for quick review and understanding. Generate key financial reports ideal for financial reviews, tax preparation, or owner reports.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Profit & Loss", icon: "📈", color: "from-[#30a659] to-emerald-600" },
                      { title: "Balance Sheet", icon: "⚖️", color: "from-emerald-500 to-teal-600" },
                      { title: "Trial Balance", icon: "📊", color: "from-[#092870] to-indigo-600" },
                      { title: "Real-time Dashboards", icon: "💻", color: "from-indigo-500 to-purple-600" },
                      { title: "Owner Reports", icon: "📋", color: "from-purple-500 to-pink-600" },
                      { title: "Custom Analytics", icon: "📉", color: "from-cyan-500 to-blue-600" }
                    ].map((report, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
                        <div className={`w-16 h-16 bg-gradient-to-r ${report.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4`}>
                          {report.icon}
                        </div>
                        <h4 className="font-bold text-gray-900">{report.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Mobile App for Managers & Tenants
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                AppFolio's mobile app provides complete access to your portfolio, finances, and communications on the go. Ideal for busy landlords or remote staff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-[#092870] to-indigo-600 rounded-2xl text-white">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold mb-4">Complete Portfolio Access</h3>
                <p>Manage all your properties from anywhere</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-[#30a659] to-emerald-600 rounded-2xl text-white">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold mb-4">Financial Management</h3>
                <p>Access real-time financial data and reports</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-2xl font-bold mb-4">Communication Hub</h3>
                <p>Stay connected with tenants and owners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Changer Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why AppFolio Is a Game Changer for Property Managers in the USA
              </h2>
              <p className="text-xl text-gray-700 max-w-5xl mx-auto mb-12">
                Property management administration is a time-consuming and complex process - especially when balancing spreadsheets, recording bank transactions, tenant communication through email and phone, and paper checks. AppFolio centralizes everything within one system so you can:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Save Hours of Manual Work",
                  description: "Automate repetitive tasks and streamline workflows",
                  icon: "⏰",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Collect Rent and Pay Vendors Online",
                  description: "Digital payments eliminate paper processes",
                  icon: "💳",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Avoid Redundant Data Entry",
                  description: "Single-entry system prevents duplicate work",
                  icon: "📝",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Offer Superior Experience",
                  description: "Better service for owners, managers, and tenants",
                  icon: "⭐",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Gain Real-time Insights",
                  description: "Instant access to business performance data",
                  icon: "📊",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Centralized Management",
                  description: "Everything in one integrated platform",
                  icon: "🎯",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Management Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-6">
                💼 Financial Management Excellence
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                AppFolio for Bookkeeping and Financial Management
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Accounting is a core function to managing a property management company and AppFolio software gets it just right. AppFolio software enables you to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Maintain Clean Books",
                  description: "Keep books clean and ready for audit",
                  icon: "📚",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Quick Reconciliations",
                  description: "Quickly reconcile bank accounts and credit cards",
                  icon: "⚡",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Accurate Assignment",
                  description: "Assign income and expenses to correct property and unit",
                  icon: "🎯",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  title: "Owner Statements",
                  description: "Create owner statements and monthly financial reports",
                  icon: "📋",
                  color: "from-amber-500 to-orange-600"
                },
                {
                  title: "IRS 1099 Compliance",
                  description: "Help with IRS 1099 report filing requirements",
                  icon: "📄",
                  color: "from-red-500 to-pink-600"
                },
                {
                  title: "Audit Ready",
                  description: "Always audit-ready with organized financial data",
                  icon: "✅",
                  color: "from-green-500 to-emerald-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Streamline Your AppFolio Accounting?</h3>
                <p className="text-gray-600 mb-6">
                  Let our experts help you maximize AppFolio's financial management capabilities for your property management business.
                </p>
                <button className="bg-gradient-to-r from-[#092870] to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Get AppFolio Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pacerline Services Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Expert AppFolio Bookkeeping & Administration Services
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  Looking for expert help with AppFolio bookkeeping and administrative service? Our team at <strong>Pacerline Outsourcing Service Pvt Ltd</strong> specializes in AppFolio bookkeeping services and administration services for U.S. property management companies and Real estate companies.
                </p>
                <p className="text-2xl font-bold text-[#092870]">
                  We have been using AppFolio for over 13 years and can handle everything from basic data entry to monthly reporting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AppFolio Initial Setup", icon: "🚀", color: "from-[#092870] to-indigo-600" },
                { title: "Rent Roll Setup", icon: "📊", color: "from-indigo-500 to-purple-600" },
                { title: "Maintaining Tenant Ledgers", icon: "📋", color: "from-[#30a659] to-emerald-600" },
                { title: "Entering Vendor Bills and Payments", icon: "💰", color: "from-emerald-500 to-teal-600" },
                { title: "Preparing Owner Statements", icon: "📄", color: "from-purple-500 to-pink-600" },
                { title: "Reconciling Banks and Credit Cards", icon: "🏦", color: "from-cyan-500 to-blue-600" },
                { title: "Preparing Financial Reports", icon: "📈", color: "from-blue-500 to-indigo-600" },
                { title: "1099 IRS Reports", icon: "📋", color: "from-pink-500 to-red-500" },
                { title: "Custom Dashboard Reports", icon: "💻", color: "from-teal-500 to-cyan-600" }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">We don't just know the software - we eat and sleep it!</h3>
              <p className="text-lg opacity-90">Our AppFolio certified experts provide comprehensive solutions for your property management needs.</p>
            </div>
          </div>
        </section>

        {/* US Compliance Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                AppFolio for U.S. Property Management Companies
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                AppFolio software is created specifically to meet U.S. property laws and accounting standards. It supports compliance with:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "U.S. GAAP Standards",
                  description: "Full compliance with Generally Accepted Accounting Principles",
                  icon: "📊",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "IRS 1099 and Tax Reporting",
                  description: "Automated tax reporting and compliance features",
                  icon: "📋",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "State-Specific Rental Rules",
                  description: "Supports regulations across all U.S. states",
                  icon: "🏛️",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "ACH Payments and Banking",
                  description: "Secure U.S. banking integration and procedures",
                  icon: "🏦",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Federal Fair Housing Regulations",
                  description: "Built-in compliance with fair housing laws",
                  icon: "🏠",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Market Flexibility",
                  description: "Adaptable to California, Florida, Texas, New York markets",
                  icon: "🗺️",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((compliance, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${compliance.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {compliance.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{compliance.title}</h3>
                  <p className="text-gray-700">{compliance.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Is AppFolio Secure?
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="text-6xl mb-8">🔒</div>
                <p className="text-2xl text-gray-700 mb-8">
                  <strong>Yes!</strong> AppFolio employs bank-grade encryption and secure data centers to secure your information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gradient-to-br from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">🔐 Bank-Grade Encryption</h3>
                    <p>All communications are secured and encrypted</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">🏢 Secure Data Centers</h3>
                    <p>Enterprise-level data protection and storage</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">💾 Regular Backups</h3>
                    <p>Automated backup systems ensure data safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold mb-6">
                📈 Growth & Success
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How AppFolio Helps You Grow
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                With AppFolio, you don't only save time—you also get a competitive edge. The software helps you to:
              </p>
            </div>

            {/* Featured Growth Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Syndicated Listings",
                  description: "List vacancies with syndication to Zillow, Apartments.com, and other listing sites for maximum exposure and faster tenant placement.",
                  icon: "📢",
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "from-blue-50 to-indigo-100"
                },
                {
                  title: "Performance Monitoring",
                  description: "Monitor performance metrics for your entire portfolio with comprehensive analytics and real-time reporting dashboards.",
                  icon: "📊",
                  color: "from-emerald-500 to-green-600",
                  bgColor: "from-emerald-50 to-green-100"
                },
                {
                  title: "Task Automation",
                  description: "Automate tedious tasks such as reminders, follow-ups, and reports to focus on high-value activities that grow your business.",
                  icon: "🤖",
                  color: "from-purple-500 to-violet-600",
                  bgColor: "from-purple-50 to-violet-100"
                },
                {
                  title: "Data-Driven Decisions",
                  description: "Make informed decisions with real-time financial information and comprehensive property performance status tracking.",
                  icon: "📈",
                  color: "from-amber-500 to-orange-600",
                  bgColor: "from-amber-50 to-orange-100"
                }
              ].map((growth, index) => (
                <div key={index} className={`bg-gradient-to-br ${growth.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${growth.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                      {growth.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{growth.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{growth.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Growth Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Professional Experience",
                  description: "Deliver a professional experience to your clients with modern tools and streamlined processes.",
                  icon: "⭐",
                  color: "from-pink-500 to-rose-600"
                },
                {
                  title: "Scalable Growth",
                  description: "Grow your business with scalable solutions that adapt to your expanding portfolio needs.",
                  icon: "🚀",
                  color: "from-cyan-500 to-teal-600"
                }
              ].map((growth, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${growth.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
                      {growth.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{growth.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{growth.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Growth?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Unlock AppFolio's full potential with expert guidance and support from our experienced team.
                </p>
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Growing Today
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Partner with Experts in AppFolio Bookkeeping Process
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  Enjoy using AppFolio but struggle with managing the financials? Our professional team is here to support you. At <strong>Pacerline Outsourcing Service Pvt Ltd</strong>, we offer low-cost, professional-grade AppFolio accounting and back-office administration solutions to clients nationwide in the USA and Canada.
                </p>
                <p className="text-2xl font-bold text-[#092870]">
                  Are you ready to Unleash the Complete Potential of AppFolio?
                </p>
                <p>
                  Are you new to AppFolio or interested in outsourcing your bookkeeping work? Pacerline Outsourcing Service Pvt Ltd can make your investment pay off. With more than <strong>13 years of experience</strong> assisting U.S.-based clients in real estate and property management, we know what your company requires to succeed.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Get AppFolio Expert Help
              </button>
              <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                View Our AppFolio Services
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                AppFolio Bookkeeping and Property Management Software Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is AppFolio?",
                  answer: "AppFolio is a cloud-based property management software that helps automate accounting, leasing, maintenance, and communication for landlords, property managers, and real estate investors. It accommodates residential (single and multi), commercial, HOA, and student housing portfolios."
                },
                {
                  question: "Who is AppFolio best suited for?",
                  answer: "AppFolio is best suited for U.S. and Canada based property managers or management companies or real estate firms managing 50+ units. It's designed to support all property types including single-family homes, multifamily units, HOAs, student housing, and commercial properties."
                },
                {
                  question: "Does AppFolio include accounting features?",
                  answer: "Yes, AppFolio has a complete accounting system with general ledger, accounts payable and receivable, rent tracking, bank reconciliation, credit card reconciliation, CAM reconciliation, and owner reporting - all integrated."
                },
                {
                  question: "Can I outsource AppFolio bookkeeping?",
                  answer: "Yes. Outsourcing firms like Pacerline Outsourcing Service Pvt Ltd provide professional AppFolio bookkeeping services, including tenant ledger maintenance, vendor payments, bank reconciliations, and IRS 1099 filings."
                },
                {
                  question: "What reports can AppFolio generate?",
                  answer: "AppFolio enables you to create Profit & Loss, Balance Sheet, Trial Balance, Rent Roll, Owner Statements, and ad-hoc financial reports at will."
                },
                {
                  question: "Is AppFolio safe for sensitive financial information?",
                  answer: "Yes, AppFolio employs bank-level encryption and secure data centers. It is compliant with standards for secure handling of financial and tenant data."
                },
                {
                  question: "Can owners and tenants log into AppFolio?",
                  answer: "Yes. AppFolio features portals for tenants (to make payments and submit maintenance requests) and owners (to review statements and distributions), enhancing transparency and communication."
                },
                {
                  question: "Do you offer full-service AppFolio assistance?",
                  answer: "Yes, Pacerline Outsourcing Service Pvt Ltd provides end-to-end AppFolio accounting services. We offer administration services to property management companies customized for their requirements. We streamline the process and optimize software use while maintaining your books current, accurate, and IRS compliant."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#092870] flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white text-sm font-bold">
                          {openFAQ === index ? '−' : '+'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="ml-12">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-700 to-[#30a659]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Maximize Your AppFolio Investment?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with 13+ years AppFolio experts for comprehensive bookkeeping and administration services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert AppFolio Help
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                View AppFolio Services
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AppFolioPage
