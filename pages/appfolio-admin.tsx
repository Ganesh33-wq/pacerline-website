import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const AppFolioAdminPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>AppFolio Administration Service | Expert Property Management Admin Support | Pacerline</title>
        <meta name="description" content="Professional AppFolio administration services for US property management companies. 14+ years experience with comprehensive admin solutions." />
        <meta name="keywords" content="AppFolio administration, property management admin, AppFolio admin services, real estate administration, property management support" />
        <meta property="og:title" content="AppFolio Administration Service | Professional Property Management Admin" />
        <meta property="og:description" content="Expert AppFolio administration services for property management companies. Comprehensive admin solutions with 14+ years experience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/appfolio-admin" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section - First Row */}
        <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/60"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">AppFolio</span>
                <br />
                <span className="text-gray-900">Administration Service</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <button className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-[#0891b2] hover:to-[#2563eb] shadow-lg">
                  Get AppFolio Admin Support
                </button>
                <button className="border-2 border-gray-800 text-gray-800 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Second Row with Content and Features */}
        <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-[#1f2937] to-[#3b82f6] bg-clip-text text-transparent">Expert AppFolio administration services</span> that maximize your property management efficiency
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Pacerline Outsourcing Service Pvt Ltd, we provide comprehensive AppFolio administration services to property management companies, real estate firms, and landlords - helping you leverage the complete potential of AppFolio while saving time and money.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">14+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">70% Cost Savings</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>

                {/* Key Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">📊</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">14+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">💰</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">70%</div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Admin Services */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Admin Services</h3>
                
                {/* Service cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        📞
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Tenant Communication</h4>
                        <p className="text-sm text-gray-600">Inbound/outbound calls & support</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        🔧
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Maintenance Coordination</h4>
                        <p className="text-sm text-gray-600">Work orders & vendor management</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        🏠
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Property Marketing</h4>
                        <p className="text-sm text-gray-600">Listings & rental advertising</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-2xl p-4 text-white text-center shadow-xl">
                    <div className="text-2xl font-bold mb-1 text-cyan-400">24/7</div>
                    <div className="text-xs opacity-90">Admin Support</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-2xl p-4 text-white text-center shadow-xl">
                    <div className="text-2xl font-bold mb-1">100+</div>
                    <div className="text-xs opacity-90">Properties Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are AppFolio Admin Services */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                What Are AppFolio Administrative Services?
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-6xl mx-auto border border-white/20">
                <div className="text-xl text-gray-700 space-y-6">
                  <p className="leading-relaxed">
                    AppFolio admin services are remote administration services for handling operational, tenant, and property tasks within the AppFolio property management platform. Such services include tenant screening, maintenance coordination, inbound/outbound communication, listings, and many more.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                    <p className="text-2xl font-bold bg-gradient-to-r from-[#1f2937] to-[#3b82f6] bg-clip-text text-transparent">
                      We handle the day-to-day and time-consuming tasks—so your internal team can focus on leasing, inspections, and property growth strategies.
                    </p>
                  </div>
                </div>
                
                {/* Key Service Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                      📞
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Tenant Communication</h3>
                    <p className="text-sm text-gray-600">Call handling & support</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center border border-emerald-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#059669] to-[#0891b2] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                      🔧
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Maintenance</h3>
                    <p className="text-sm text-gray-600">Work order coordination</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                      🏠
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Property Marketing</h3>
                    <p className="text-sm text-gray-600">Listings & advertising</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                      📋
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Administrative Tasks</h3>
                    <p className="text-sm text-gray-600">Screening & documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Suite of Services */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Full Suite of AppFolio Administration Services
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                We offer end-to-end AppFolio support for all areas of tenant communication, owner communication, work order management & vendor communication and property marketing & listings.
              </p>
            </div>

            {/* Tenant Services & Communication */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    📞
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Tenant Services & Communication</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Rental Inquiry / In-bound Calls Handling",
                      description: "Our professional team handles incoming rental calls, responds to property questions, gives availability status updates and takes prospect information right in the AppFolio CRM.",
                      benefits: ["Decreased missed leads", "Quick response to tenant questions"],
                      icon: "📞",
                      color: "from-[#3b82f6] to-[#1d4ed8]"
                    },
                    {
                      title: "Tenant Screening Service",
                      description: "We handle tenant screening processes within AppFolio, such as reviewing applications, conduct background checks of applicant, verifying income, criminal records and communicating with applicants.",
                      benefits: ["Rental applications review", "Placing credit and background checks", "Communicating application outcomes", "Flagging red flags or discrepancies"],
                      icon: "🔍",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "Lease Agreement Management",
                      description: "We automate the lease agreement process with AppFolio by creating personalized electronic leases, sending them for e-signatures, and monitoring completion in real time. Our staff ensures all lease conditions, fees, and tenant information are entered correctly, eliminating errors and delays.",
                      benefits: ["Electronic lease creation", "E-signature processing", "Real-time monitoring", "Error elimination"],
                      icon: "📋",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Deposit and Rental Collections",
                      description: "We collect the deposit from tenant and do the rent collection process in AppFolio with precision and quickly. Rent charges and security deposits are posted automatically, and tenants pay online via the secure tenant portal.",
                      benefits: ["Automated posting", "Secure online payments", "Real-time tracking", "Delinquency management"],
                      icon: "💰",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Outbound Calls with Tenants",
                      description: "We do follow up on tenant documents, collect rent or notify vendors payments. We make outgoing calls for you on rent reminders, owner notifications, lease renewal, handyman selection and more -all tracked within AppFolio.",
                      benefits: ["Rent payment reminders", "Lease renewal follow-ups", "Document collection", "Vendor scheduling"],
                      icon: "📱",
                      color: "from-purple-500 to-pink-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                          {service.benefits && (
                            <div>
                              <p className="font-semibold text-[#3b82f6] mb-2 text-sm">Key Benefits:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Management & Listings */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    🏠
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Property Management & Listings</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Rental Listing and Advertising Property",
                      description: "We assist you in property listings, updating and publishing rental advertisements on property websites, social media sites and classified websites - while simultaneously syncing everything with your AppFolio listings.",
                      platforms: ["Facebook Marketplace", "Craigslist", "Rent.com", "Zillow and other ILS platforms"],
                      icon: "🏠",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "Property Showings Coordination",
                      description: "We coordinate the property showing process effortlessly with AppFolio's integrated scheduling features. From responding to inquiries to scheduling showings, our staff communicates with prospects and updates availability in real time.",
                      benefits: ["Automated confirmation", "Calendar integration", "Reminder messages", "Lead conversion optimization"],
                      icon: "🗓️",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "Move-in Process Management",
                      description: "Pacerline Outsourcing service Pvt Ltd will simplify the entire move-in process with AppFolio's intelligent workflows. At move-ins, we create electronic leases, allocate tenants to units, charge post, and offer portal access for easy rent payments and communication.",
                      benefits: ["Electronic lease creation", "Unit allocation", "Charge posting", "Portal access setup"],
                      icon: "🔑",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Move-out Process Management",
                      description: "We provide for move-out process in AppFolio, we coordinate the date, create final charges, pro rate rent charge, execute security deposit deductions or refunds and set unit status to vacant.",
                      benefits: ["Date coordination", "Final charge creation", "Pro-rated rent calculation", "Security deposit processing"],
                      icon: "📦",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "MLS Listing Coordination",
                      description: "We make sure for MLS-accessible to the clients, we perform MLS listing input and updates for consistency with AppFolio and third-party sites.",
                      benefits: ["Saves licensed agents time", "Accurate listing input", "Consistency across platforms"],
                      icon: "📊",
                      color: "from-purple-500 to-pink-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                          {service.platforms && (
                            <div>
                              <p className="font-semibold text-[#059669] mb-2 text-sm">Platforms We Work With:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.platforms.map((platform, idx) => (
                                  <li key={idx}>{platform}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {service.benefits && (
                            <div>
                              <p className="font-semibold text-[#059669] mb-2 text-sm">Key Benefits:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Communications Management */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mr-6">
                    📧
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Communications Management</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Email Correspondence Management",
                      description: "Our staff handles your AppFolio email inbox, answers tenant and owner messages, filters spam, and highlights time-sensitive items to your team.",
                      benefits: ["Prompt communication", "Professional tone & formatting", "Fewer missed emails or follow-ups"],
                      icon: "📧",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Outbound Calls with Owners and Vendors",
                      description: "We make outgoing calls for owner notifications, vendor scheduling, and follow-ups -all tracked within AppFolio.",
                      useCases: ["Owner notifications", "Vendor scheduling", "Payment follow-ups"],
                      icon: "📞",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Maintenance Calls & Request Management",
                      description: "Tenant have online access to create maintenance request in AppFolio, we will call back to the tenant and cross check & record the information in AppFolio, initiate or update maintenance requests and forward urgent issues according to your workflow.",
                      features: ["After-hours maintenance support", "Categorize emergency or routine based on check list", "Real-time vendor updates"],
                      icon: "🔧",
                      color: "from-emerald-500 to-teal-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                          {service.benefits && (
                            <div>
                              <p className="font-semibold text-purple-600 mb-2 text-sm">Benefits:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {service.useCases && (
                            <div>
                              <p className="font-semibold text-purple-600 mb-2 text-sm">Use Cases:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.useCases.map((useCase, idx) => (
                                  <li key={idx}>{useCase}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {service.features && (
                            <div>
                              <p className="font-semibold text-purple-600 mb-2 text-sm">Key Features:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Operations & Vendor Management */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    🔨
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Operations & Vendor Management</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Work Order & Vendor Management",
                      description: "We take care of work order creation, tracking, and closure inside AppFolio, assign vendors, and update tenants on scheduling or resolution status.",
                      process: ["Log tenant requests", "Match vendors by category or availability", "Track completion and close work orders", "Notify tenants and update records"],
                      icon: "🔨",
                      color: "from-[#06b6d4] to-[#3b82f6]"
                    },
                    {
                      title: "Eviction Process Management",
                      description: "We coordinate the eviction process in AppFolio through notice tracking, recording tenant communication, and lease status updates. Our staff assists property managers with accurate records and timely reminders, making the process efficient while avoiding legal and financial risks.",
                      icon: "⚖️",
                      color: "from-[#059669] to-[#10b981]"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                          {service.process && (
                            <div>
                              <p className="font-semibold text-[#06b6d4] mb-2 text-sm">Our Process:</p>
                              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                                {service.process.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Pacerline */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-900 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Hire Pacerline to Do Your AppFolio Admin Work?
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700 leading-relaxed">
                  We're not virtual assistants—we're <strong className="bg-gradient-to-r from-[#1f2937] to-[#3b82f6] bg-clip-text text-transparent">property management professionals</strong> experienced in the AppFolio intricacies, tenant communication, and leasing processes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AppFolio-Certified Admins",
                  description: "All staff is thoroughly trained on AppFolio interface, modules, and best practices—ensuring compliance and efficiency.",
                  icon: "🏆",
                  color: "from-[#374151] to-[#4b5563]"
                },
                {
                  title: "Client Time Zone Coverage",
                  description: "We work on U.S. business hours and provide after-hours assistance for maintenance or leasing calls as per the client requirements.",
                  icon: "🕒",
                  color: "from-[#06b6d4] to-[#0891b2]"
                },
                {
                  title: "Customized Cost-Effective Service Plans",
                  description: "We help you to save up to 70% in administrative overhead by outsourcing tasks to our offshore staff, providing service without compromising quality or speed.",
                  icon: "💰",
                  color: "from-[#059669] to-[#10b981]"
                },
                {
                  title: "Data Security and Compliance",
                  description: "We make sure all communications and data transfers are encrypted and meet U.S. standards for privacy.",
                  icon: "🔒",
                  color: "from-[#3b82f6] to-[#1d4ed8]"
                },
                {
                  title: "Scalable Staffing",
                  description: "We ensure scale up support seasonally during leasing season or portfolio growth without adding to your internal headcount.",
                  icon: "📈",
                  color: "from-purple-500 to-purple-700"
                },
                {
                  title: "14+ Years Experience",
                  description: "With more than 14 years of property management service experience and in-depth AppFolio expertise, our qualified professionals ensure precise, compliant operations.",
                  icon: "⭐",
                  color: "from-emerald-500 to-teal-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Benefits Section */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AppFolio Expertise?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      🎯
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Specialized Focus</h4>
                    <p className="text-sm text-gray-600">100% dedicated to AppFolio administration services</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      ⚡
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 mb-2">Quick Turnaround</h4>
                      <p className="text-sm text-gray-600">Same-day response to urgent admin tasks</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      🤝
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Dedicated Support</h4>
                    <p className="text-sm text-gray-600">Assigned account manager for consistent service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Benefit */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who Can Benefits from Our AppFolio Administration Services?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                Whether you have 100 units or 5,000+, we customize our service packages according to your unit size, admin burden, and tenant quantity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Property Management Firms",
                  description: "Complete administration solutions for professional property management companies",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Real Estate Companies",
                  description: "Streamlined admin support for real estate firms managing rental properties",
                  icon: "🏠",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Independent Property Owners",
                  description: "Professional admin support for individual property owners and investors",
                  icon: "👤",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Multifamily Housing Operators",
                  description: "Specialized administration for apartment complexes and multifamily properties",
                  icon: "🏘️",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Student Housing Operators",
                  description: "Tailored admin services for student housing and university properties",
                  icon: "🎓",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "HOA and Community Managers",
                  description: "Administrative support for homeowner associations and community management",
                  icon: "🏡",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((client, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{client.title}</h3>
                  <p className="text-gray-700">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Onboard */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                How to Onboard
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-4xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Simple <strong className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">5-step process</strong> to get started with our AppFolio administration services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  title: "Free Consultation",
                  description: "We have to know your portfolio, workload, work flow and admin headaches.",
                  icon: "💬",
                  bgGradient: "from-blue-500 to-blue-700",
                  cardColor: "from-blue-50 to-blue-100",
                  borderColor: "border-blue-200"
                },
                {
                  title: "Scope & Proposal",
                  description: "We will do initial review and will prepare a tailored plan according to your property management tasks lists, AppFolio usage and calls/email volume.",
                  icon: "�",
                  bgGradient: "from-emerald-500 to-emerald-700",
                  cardColor: "from-emerald-50 to-emerald-100",
                  borderColor: "border-emerald-200"
                },
                {
                  title: "Setup & Access",
                  description: "We required the access of software and login setup for required sites.",
                  icon: "�",
                  bgGradient: "from-purple-500 to-purple-700",
                  cardColor: "from-purple-50 to-purple-100",
                  borderColor: "border-purple-200"
                },
                {
                  title: "Training & SOP Alignment",
                  description: "We analyses and integrate with your processes, and escalation policies and implement the easiest process based on our experience after your confirmation.",
                  icon: "📚",
                  bgGradient: "from-orange-500 to-orange-700",
                  cardColor: "from-orange-50 to-orange-100",
                  borderColor: "border-orange-200"
                },
                {
                  title: "Go to Daily Operations",
                  description: "Our trained professional begins assisting you right away—no hand-holding needed.",
                  icon: "🚀",
                  bgGradient: "from-cyan-500 to-cyan-700",
                  cardColor: "from-cyan-50 to-cyan-100",
                  borderColor: "border-cyan-200"
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br ${step.cardColor} rounded-3xl p-6 shadow-xl border ${step.borderColor} h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-h-[320px]`}>
                    <div className="flex-shrink-0 mb-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.bgGradient} rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[3rem] flex items-center justify-center">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed flex-grow flex items-center justify-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Flow Indicator */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-white/20">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium text-sm">Simple</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium text-sm">Fast</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-medium text-sm">Professional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                FAQs – AppFolio Administration Services
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our AppFolio administration services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What are the administrative tasks can Pacerline handle in the AppFolio?",
                  answer: "Pacerline manages property management full cycle administration tasks in AppFolio, such as the tenant communication, collection process, lease tracking, document management, maintenance coordination, vendor setup, rent roll updates, property listings and report preparation—streamlining your property operations."
                },
                {
                  question: "Why should I have to outsource AppFolio administration to Pacerline?",
                  answer: "We saves time, overhead, and guarantees expert-level accuracy. Our skilled staff handles your administrative tasks with efficiency, freeing you to concentrate on marketing, expansion, and focusing on investors."
                },
                {
                  question: "Do you take both in-bound and out-bound calls?",
                  answer: "Yes. We respond to rental and maintenance questions, and make outbound calls to tenants, vendors, and owners as necessary."
                },
                {
                  question: "Is Pacerline Outsourcing Service Pvt Ltd offer flexible, tailored services to meet the unique needs of property management companies?",
                  answer: "Yes, we adjust our AppFolio administration services according to your portfolio size, property type, and in-house workflow. Whether you have 50 units or 5,000, we adapt our support appropriately."
                },
                {
                  question: "What are your business hours?",
                  answer: "We provide coverage for U.S. time zones and 24/7 maintenance support (plan-dependent)."
                },
                {
                  question: "How much experience does Pacerline have with operating AppFolio?",
                  answer: "With more than 14 years of property management service experience and in-depth AppFolio expertise, our qualified professionals ensure the precise, compliant, and streamlined utilization of the software on every administrative process."
                },
                {
                  question: "Is client data safe with outsourced administration services?",
                  answer: "Yes, client data is safe with trusted outsourcing service providers. Pacerline maintains strict data protection measures and takes advantage of AppFolio's inbuilt security tools to protect your confidential property and tenant data in a safe and confidential manners."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
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

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-700 to-[#30a659]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Increase Your Property Management Productivity with Our AppFolio Admin Professionals
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our AppFolio admin experts save you from the drudgery of admin work and keep your maintenance response times on track. You'll receive skilled, AppFolio-trained virtual professionals who are an extension of your staff—professional, dependable, and budget-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert AppFolio Admin Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AppFolioAdminPage
