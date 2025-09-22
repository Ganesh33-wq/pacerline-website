import Head from 'next/head'
import Layout from '../components/Layout'
import { useState } from 'react'

const VirtualAssistantPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <Layout>
      <Head>
        <title>Virtual Assistant Service | Professional Property Management & Real Estate Support | Pacerline</title>
        <meta name="description" content="Expert virtual assistant services for US property management firms, real estate businesses, and call center operations. 14+ years experience with 24/7 support." />
        <meta name="keywords" content="virtual assistant, property management VA, real estate assistant, maintenance coordinator, customer support specialist, receptionist services" />
        <meta property="og:title" content="Virtual Assistant Service | Professional Property Management Support" />
        <meta property="og:description" content="Expert virtual assistant services for property management, real estate, and call center operations. Professional offshore support with US market expertise." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/virtual-assistant" />
      </Head>
      
      <div className="min-h-screen">        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Virtual Assistant</span> 
                <br />Service
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed space-y-6">
                <p>
                  Do you own a business, work in real estate, or manage properties and get bogged down in administrative tasks, phone calls, and scheduling appointments? Do you want to save time and money on operations without compromising on service?
                </p>
                <p>
                  Welcome to <strong>Pacerline Outsourcing Service Pvt Ltd</strong>, your go-to partner for Virtual Assistant Services designed specifically for US-based property management firms, real estate businesses, receptionist services, and call centre activities. We assist companies like yours in alleviating workload, enhancing efficiency, and delivering excellent customer service—without the associated cost of in-house employees.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Virtual Assistant Support
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Virtual Assistant Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">10+</div>
                      <div className="font-semibold">Years Experience</div>
                      <div className="text-sm opacity-90">US Market Expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="font-semibold">Support Available</div>
                      <div className="text-sm opacity-90">All Time Zones</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">3-5</div>
                      <div className="font-semibold">Days to Start</div>
                      <div className="text-sm opacity-90">Quick Onboarding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our Virtual Assistant Services?
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  Our team brings over a decade of experience supporting clients in the property management and real estate sectors. We are a pool of professionals with good understand of USA market to deliver seamless support for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                We are serving
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Professional virtual assistant services tailored for different business needs across multiple industries
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg inline-block">
                <div className="flex flex-wrap justify-center gap-2">
                  {['Property Management', 'Real Estate Agents', 'Receptionist Services', 'Call Center Support'].map((tab, index) => (
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

            {/* Property Management Tab */}
            {activeTab === 0 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Property Management Companies</h3>
                <p className="text-xl text-gray-700 text-center mb-8">
                  We work with residential and commercial property management companies across the U.S. We are providing the service that listed below:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    "Rental Listings and Property advertisement",
                    "Tenant Application review", 
                    "Property Showings",
                    "Tenant Screening",
                    "Lease management support",
                    "Tenant communication (calls, emails, and chat)",
                    "Rent reminders and late payment follow-ups",
                    "Maintenance request intake and coordination",
                    "Owner and vendor communication",
                    "Move-in & Move-out process",
                    "Eviction Support",
                    "After-hours answering services"
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mr-3"></div>
                        <p className="text-gray-700">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Type of service that we are offering to the property management companies:
                </h4>

                <div className="space-y-8">
                  {[
                    {
                      title: "Remote Maintenance Coordinator",
                      description: "Our Virtual Assistant provide remote maintenance coordination assistant to property management companies in responding to tenant repair requests with haste and professionalism. We serve as the initial point of contact for maintenance requests, record and prioritz work orders, and coordinate vendors or technicians. From scheduling the repairs to checking for completion confirmation, we see to it that nothing falls between the cracks. We also update all the news in your system and keep tenants posted at every step.",
                      icon: "🔧",
                      color: "from-[#092870] to-indigo-600"
                    },
                    {
                      title: "After-Hours Maintenance Coordinator",
                      description: "Maintenance issues don't follow office hours—and neither do we. Our after-hours maintenance coordinators keep an eye on incoming calls and emails for after-hours requests such as water leaks, electricity outages, or lockouts. According to your escalation procedures, we call your relevant vendors or technicians and report all interactions. Your tenants will be taken care of quickly, giving you the reassurance that your office does not have to be open.",
                      icon: "🌙",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "Customer Support Specialist",
                      description: "Your owners and tenants require prompt and informative answers. Our virtual customer support assistants handle emails, calls, and chats in a professional manner, and no message gets lost. We cover general questions, rent reminders, lease inquiries, and service request notifications. Our staff has great communication skills and is trained with U.S. customer service practices to promote your image and customer satisfaction.",
                      icon: "💬",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "After-Hours Customer Support",
                      description: "After-hours tenant inquiries and issues can pile up quickly if not managed well. Our after-hours customer support VAs handle evening and weekend communication, keeping your business responsive 24/7. We answer phone calls in your company's name, address non-emergency concerns, and escalate urgent matters based on your guidelines. Your residents will feel cared for—even outside regular business hours.",
                      icon: "📞",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Property Manager Assistant",
                      description: "Our Property Manager Assistants assist in reducing your daily workload by performing vital administrative duties like coordination of tenant screening, lease preparation and renewals, owner relations, and reporting. We document preparation, system updates, file organization, and notifications. With the assistance of a virtual assistant, property managers can concentrate more on leasing, inspections, and business development.",
                      icon: "👤",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Utility Specialist",
                      description: "Utility management across several properties can be time-consuming and tedious. Our utility experts handle utility installations, disconnections, billing tracking, and data entry. We open or close accounts timely during move-ins/out, accurately record utility charges, and audit bills before approval. This eliminates expensive errors and keeps your owners accurately billed.",
                      icon: "⚡",
                      color: "from-cyan-500 to-blue-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h5 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h5>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
                  <p className="text-gray-700 text-center">
                    With in-depth understanding of property management software such as <strong>AppFolio, Buildium, Propertyware, and Rentvine</strong>, our VAs take care of your back-office chores so your staff can concentrate on expansion.
                  </p>
                </div>
              </div>
            )}

            {/* Real Estate Agents Tab */}
            {activeTab === 1 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real Estate Agents & Brokers</h3>
                <p className="text-xl text-gray-700 text-center mb-8">
                  We assist busy real estate brokers, agents, and teams with daily tasks by providing:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Appointment scheduling and calendar management",
                      icon: "📅",
                      color: "from-[#092870] to-indigo-600"
                    },
                    {
                      title: "Listing updates and CRM maintenance",
                      icon: "🏠",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "Follow-up and nurturing leads through phone and email",
                      icon: "📧",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Document preparation and electronic filing",
                      icon: "📄",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Social media and marketing support",
                      icon: "📱",
                      color: "from-purple-500 to-pink-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-xl mr-4`}>
                          {service.icon}
                        </div>
                        <p className="text-gray-700 font-semibold">{service.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                  <p className="text-gray-700 text-center">
                    Our virtual real estate assistants are trained to work on platforms such as <strong>MLS, Zillow, DocuSign, CRMs</strong>, and others so that your business operates smoothly even when you're on the go.
                  </p>
                </div>
              </div>
            )}

            {/* Receptionist Services Tab */}
            {activeTab === 2 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Receptionist Support Services</h3>
                <p className="text-xl text-gray-700 text-center mb-8">
                  Daring to miss calls or having a hard time keeping up with front-office responsibilities? We offer trained virtual receptionists to:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Answer professional calls in your business name",
                      icon: "📞",
                      color: "from-[#092870] to-indigo-600"
                    },
                    {
                      title: "Forward priority messages",
                      icon: "📨",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "Schedule appointments",
                      icon: "📅",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Handle questions with clear, courteous communication",
                      icon: "💬",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Provide after-hours and weekend phone coverage",
                      icon: "🌙",
                      color: "from-purple-500 to-pink-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-xl mr-4`}>
                          {service.icon}
                        </div>
                        <p className="text-gray-700 font-semibold">{service.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                  <p className="text-gray-700 text-center">
                    With our receptionist VAs, your clients will always be met by a warm, experienced voice—no matter the hour.
                  </p>
                </div>
              </div>
            )}

            {/* Call Center Support Tab */}
            {activeTab === 3 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Call Center and Customer Support Services</h3>
                <p className="text-xl text-gray-700 text-center mb-8">
                  For organizations that need high-volume call handling or customer support, we provide:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Inbound and outbound call assistance",
                      icon: "📞",
                      color: "from-[#092870] to-indigo-600"
                    },
                    {
                      title: "Help desk and ticketing system administration",
                      icon: "🎫",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "E-mail and chat support",
                      icon: "💬",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Lead qualification and surveys",
                      icon: "📊",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Handling escalations and call transfers",
                      icon: "📈",
                      color: "from-purple-500 to-pink-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-xl mr-4`}>
                          {service.icon}
                        </div>
                        <p className="text-gray-700 font-semibold">{service.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                  <p className="text-gray-700 text-center">
                    All of our agents are native English speakers, highly trained, and dedicated to protecting your brand reputation with each conversation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Core Services */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Core Virtual Assistant Services We Provide
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Here's a more detailed look at what we can assist you with:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Phone Answering & Inbound Calls",
                  description: "Never lose a lead or tenant prospect. We answer calls in your business name, screen and transfer calls, take thorough messages, and offer basic information to callers.",
                  icon: "📞",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Email & Chat Management",
                  description: "We manage shared mailboxes and chat platforms, answering promptly and professionally tenant, client, or vendor questions.",
                  icon: "📧",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Calendar & Appointment Scheduling",
                  description: "Leave your calendar to us—schedule tours, maintenance stops, meetings, or prospect calls. We will schedule with clients, vendors, and staff to prevent conflicts.",
                  icon: "📅",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Document Management",
                  description: "From leases to maintenance reports, we keep your digital records organized and up to date for convenient access and compliance.",
                  icon: "📄",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Maintenance Request Handling",
                  description: "We log tenant maintenance requests, create work orders, and follow up with vendors—keeping everyone in the loop.",
                  icon: "🔧",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Rent & Invoice Follow-Ups",
                  description: "We track rent payments, send reminders, and escalate past-due accounts professionally to avoid tenant turnover and legal headaches.",
                  icon: "💰",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Leasing Support",
                  description: "We assist with lease renewals, new lease creation, background check coordination, and move-in/move-out communication.",
                  icon: "📋",
                  color: "from-blue-500 to-indigo-600"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Proficiency */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Software We're Proficient In
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                We work with a wide range of industry-standard tools, including:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Property Management",
                  tools: ["AppFolio", "Buildium", "Propertyware", "Rentvine"],
                  icon: "🏠",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  category: "Accounting & Finance",
                  tools: ["QuickBooks", "Xero", "Excel"],
                  icon: "💰",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  category: "Real Estate Platforms",
                  tools: ["Zillow", "MLS", "DocuSign", "Dotloop"],
                  icon: "🏘️",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  category: "Communication & CRM",
                  tools: ["Slack", "Zoom", "Calendly", "Zendesk", "Freshdesk", "HubSpot", "Salesforce"],
                  icon: "💬",
                  color: "from-emerald-500 to-teal-600"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{category.category}</h3>
                  <ul className="space-y-1">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 bg-white rounded-2xl p-6 shadow-lg inline-block">
                If you utilize a tool not mentioned here, we're fast learners and can integrate with your processes with minimal training.
              </p>
            </div>
          </div>
        </section>

        {/* Offshore Partner Benefits */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Work With a Trusted Offshore Partner
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Based in India, we provide time zone flexibility, competitive pricing, and committed virtual assistants who work just like your internal team—without the exorbitant overhead. Our staff are English-proficient, highly qualified, and skilled at handling US-based clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Coverage Opportunities",
                  description: "Round-the-clock support availability to match your business needs",
                  icon: "🌍"
                },
                {
                  title: "Clean Internet and Power Backup",
                  description: "Reliable infrastructure ensuring uninterrupted service delivery",
                  icon: "🔌"
                },
                {
                  title: "NDA and Data Privacy Compliance",
                  description: "Strict confidentiality and security measures for your business data",
                  icon: "🔒"
                },
                {
                  title: "One-on-One Onboarding",
                  description: "Personalized setup and SOP creation for seamless integration",
                  icon: "👥"
                },
                {
                  title: "Transparent Time Tracking",
                  description: "Clear reporting and accountability for all work performed",
                  icon: "⏰"
                },
                {
                  title: "English-Proficient Staff",
                  description: "Native-level English communication skills for US market",
                  icon: "🗣️"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-xl text-gray-600">
                Property Management Virtual Assistant Services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is a Property Management Virtual Assistant?",
                  answer: "A Property Management Virtual Assistant (VA) is an off-site professional who assists property managers and real estate firms with maintenance coordination, customer service, administrative, and operational tasks. They operate online and become part of your day-to-day processes to assist you in saving time and running efficiently."
                },
                {
                  question: "Are you work during U.S. business hours?",
                  answer: "Yes, our virtual assistants are trained to operate in U.S. time zones such as PST, MST, CST, and EST. We also offer after-hours and weekend support based on the client requirements."
                },
                {
                  question: "What type of tasks can your Maintenance Coordinator do?",
                  answer: "Our Virtual Assistant process work orders, respond to tenants and vendors, schedule maintenance, follow up for completion, and record updates in your property management software. We also perform emergency escalations when necessary."
                },
                {
                  question: "Do you offer after-hours support?",
                  answer: "Yes, after-hours is our specialty for such things as maintenance emergencies and tenant questions. We follow your company's procedures and provide timely responses outside the workday."
                },
                {
                  question: "How do your Customer Support Specialists interact with tenants?",
                  answer: "Our customer service representatives take calls, reply to emails and chat, process payments, and answer tenant issues professionally but warmly. We speak clearly and fluently in English and adhere to your tone and protocol guidelines."
                },
                {
                  question: "In what ways can a Property Manager Assistant assist my business?",
                  answer: "Our VAs take care of listings, advertising, property showings, tenant screening coordination, lease creation, renewals, tenant & owner communication, maintenance coordination and admin reporting—leaving you with time to handle leasing, inspections, and building your portfolio."
                },
                {
                  question: "What does a Utility Specialist do?",
                  answer: "A Utility Specialist coordinates utility setup, disconnections, and transfers on move-ins and move-outs. Virtual Assistant monitor bills, check charges, and obtain proper documentation for billing owners or tenants."
                },
                {
                  question: "What property management software are your VAs trained in?",
                  answer: "Our virtual staff have worked with mainstream software such as AppFolio, Buildium, Propertyware, Rentvine, QuickBooks, and others. We can also learn new platforms fast with little training."
                },
                {
                  question: "Is my business information secure with your staff?",
                  answer: "Yes, definitely. We execute NDAs with all our clients, employ secure systems for data processing, and practice stringent privacy procedures. Access to your data is restricted to authorized team members."
                },
                {
                  question: "How do I talk to my virtual assistant?",
                  answer: "We use your communication tool of choice—Slack, Zoom, Google Meet, Microsoft Teams, phone, or email. We also give you status updates and reports on a regular basis."
                },
                {
                  question: "How soon can I begin?",
                  answer: "You can usually start in 3–5 business days. We then schedule a consultation, hand-pick a good-fit VA, grant access to your systems, and start onboarding."
                },
                {
                  question: "What is your pricing model?",
                  answer: "We provide flexible packages per month by the hour or by having full-time/part-time dedicated VAs. Pricing is tiered depending on the role and service level. We can provide a bespoke quote upon request."
                },
                {
                  question: "Can I scale up or down depending on my workload?",
                  answer: "Yes. We are flexible in services provided. You can add or remove hours or new roles as your business grows or changes."
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
              Ready to Transform Your Business with Professional Virtual Assistant Support?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of property management companies, real estate professionals, and businesses who trust Pacerline for expert virtual assistant services. Start saving time and money while improving your customer service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Virtual Assistant Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default VirtualAssistantPage
