import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const BuildiumAdminPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Buildium Administration Service | Expert Property Management Admin Support | Pacerline</title>
        <meta name="description" content="Professional Buildium administration services for US property management companies. 14+ years experience with comprehensive admin solutions for rental properties." />
        <meta name="keywords" content="Buildium administration, property management admin, Buildium admin services, real estate administration, property management support" />
        <meta property="og:title" content="Buildium Administration Service | Professional Property Management Admin" />
        <meta property="og:description" content="Expert Buildium administration services for property management companies. Comprehensive admin solutions with 14+ years experience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/buildium-admin" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium</span> 
                <br />Administration Service
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed space-y-6">
                <p>
                  Rental property management is no easy feat—particularly when you're handling tenant contact, work orders, rental ads, and financial reporting. That's where we step in. At <strong>Pacerline Outsourcing Service Pvt Ltd</strong>, Buildium administrative solutions aimed at assisting U.S. property management firms and landlords to streamline processes, reduce overhead expenses, and maintain attention on business expansion.
                </p>
                <p>
                  Our highly skilled virtual assistants and admin experts are individually trained in Buildium software. From responding to rental inquiries and scheduling maintenance to listing management and email communication, we keep your back-office in top working order—without loading up your in-house team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Buildium Admin Support
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted Buildium Administration Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">14+</div>
                      <div className="font-semibold">Years Experience</div>
                      <div className="text-sm opacity-90">Property Management</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">70%</div>
                      <div className="font-semibold">Cost Savings</div>
                      <div className="text-sm opacity-90">Administrative Overhead</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="font-semibold">Support</div>
                      <div className="text-sm opacity-90">All Time Zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Outsource Admin */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Outsource Admin in Buildium?
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  Buildium is a powerful tool—but like all systems, it needs the right people to drive it to deliver results. When you're short-staffed, swamped with calls, or wasting too much time on low-value admin tasks, outsourcing is the best decision.
                </p>
                <p className="text-2xl font-bold text-[#092870]">
                  Our Buildium admin support services enable you to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      💰
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Turbocharge Operating Costs</h3>
                    <p className="text-gray-700 text-sm">Save up to 70% on administrative overhead</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      👥
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Free Your Teams</h3>
                    <p className="text-gray-700 text-sm">Free your leasing and maintenance teams</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      ⚡
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Higher Tenant Satisfaction</h3>
                    <p className="text-gray-700 text-sm">Quicker response times for better service</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                      🎯
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Professional Assistance</h3>
                    <p className="text-gray-700 text-sm">Without hiring in-house or training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Core Buildium Admin Services
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                We provide a comprehensive range of administrative support solutions designed specifically for Buildium property management software users. From residential through commercial, HOA, to student housing, our experts adjust to your processes and priorities.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Rental Inquiry Call Handling",
                  description: "Our nice and professional staff answers incoming calls from potential renters, answers listing inquiries, arranges property showings, and records all activity within Buildium's CRM.",
                  benefits: [
                    "Never miss a qualified lead",
                    "Increase leasing efficiency", 
                    "Deliver consistent, high-quality service"
                  ],
                  icon: "📞",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  number: "2",
                  title: "Maintenance Call Support",
                  description: "We receive maintenance-related phone calls from renters, generate or update service requests, assign vendors, and keep everyone informed—all within Buildium.",
                  process: [
                    "Record tenant maintenance requests",
                    "Identify urgent versus routine",
                    "Call vendors and monitor job status"
                  ],
                  icon: "🔧",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  number: "3",
                  title: "Outbound Call Services",
                  description: "We place outbound calls to owners, tenants, and vendors to remind them of rent payments, lease renewal, document requests, and service updates—all monitored and recorded within Buildium.",
                  callTypes: [
                    "Rent reminders and follow-ups",
                    "Vendor coordination",
                    "Lease renewal reminders"
                  ],
                  icon: "📱",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  number: "4",
                  title: "Email Communication Management",
                  description: "Our virtual assistants assist with tenant and owner email communication directly from Buildium or your integrated email system. From responding to standard questions to alerting you to important issues, we ensure each message receives the respect it merits.",
                  advantages: [
                    "Increased response times",
                    "Correctly written emails",
                    "Clean tracking of correspondence history"
                  ],
                  icon: "📧",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  number: "5",
                  title: "Tenant Screening Coordination",
                  description: "We handle the whole Buildium tenant screening process, such as background investigations, income verification, follow-up on applications, and communicating decisions.",
                  process: [
                    "Processing submitted applications",
                    "Placing credit/background orders",
                    "Verifying employment and rental history",
                    "Notifying applicants of results"
                  ],
                  icon: "🔍",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  number: "6",
                  title: "Work Order Management",
                  description: "We manage work order creation, modification, tracking, and completion in Buildium. From assigning appropriate vendors to keeping tenants informed about job progress, we make every service request go smoothly.",
                  benefits: [
                    "Quicker issue resolution",
                    "Organized vendor communication",
                    "Clean recordkeeping"
                  ],
                  icon: "🔨",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  number: "7", 
                  title: "Rental Listing & Ad Posting",
                  description: "We assist in the creation and management of property listings on Buildium and listing them on popular rental websites such as Zillow, Craigslist, Apartments.com, and Facebook Marketplace.",
                  services: [
                    "Rental ad copy writing",
                    "Posting photos and descriptions", 
                    "Ad refresh schedule management",
                    "Syncing listing status with Buildium"
                  ],
                  icon: "🏠",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  number: "8",
                  title: "MLS Listing Coordination",
                  description: "If your properties are on the MLS, we can assist your real estate team by entering property information, uploading media and updating listing statuses and syncing with your Buildium records.",
                  perfectFor: [
                    "Brokerages that handle rentals",
                    "Licensed agents with minimal time",
                    "Multi-platform listing consistency"
                  ],
                  icon: "📊",
                  color: "from-indigo-600 to-purple-600"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-start">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center text-3xl mr-8 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {service.number}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                      
                      {service.benefits && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">Why It Matters:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.process && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">What We Do:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.process.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.callTypes && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">Typical Outbound Calls:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.callTypes.map((type, idx) => (
                              <li key={idx}>{type}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.advantages && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">Advantages:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.advantages.map((advantage, idx) => (
                              <li key={idx}>{advantage}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.services && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">Our Listing Services Include:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.services.map((serviceItem, idx) => (
                              <li key={idx}>{serviceItem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.perfectFor && (
                        <div>
                          <h4 className="font-bold text-[#092870] mb-3">Perfect For:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {service.perfectFor.map((item, idx) => (
                              <li key={idx}>{item}</li>
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
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why U.S. Property Managers Choose Us for Buildium Admin Support
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Here's why our Buildium virtual assistants stand out from the rest of admin services:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Trained on Buildium Software",
                  description: "We're experts on the platform itself—no learning curve involved.",
                  icon: "🏆"
                },
                {
                  title: "U.S. Time Zone Support",
                  description: "We operate on Eastern, Central, Mountain, and Pacific time zones to align with your office hours or tenant schedule.",
                  icon: "🕒"
                },
                {
                  title: "Cost-Effective Plans",
                  description: "Pay for only the services you want—affordable hourly packages or full-time committed admin assistance.",
                  icon: "💰"
                },
                {
                  title: "Real Estate Expertise",
                  description: "Our staff has expertise in property management—not merely software.",
                  icon: "🏠"
                },
                {
                  title: "Quick Onboarding",
                  description: "We get up to speed in days, not weeks, so you see value right away.",
                  icon: "🚀"
                },
                {
                  title: "14+ Years Experience",
                  description: "With more than 14 years of property management service experience and extensive knowledge in Buildium.",
                  icon: "⭐"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who We Serve
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                Our Buildium admin support services are relied on by property management professionals across the United States. No matter if you have 100 or 5,000+ units, we scale with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential Property Managers",
                  description: "Complete admin solutions for single-family and multifamily residential properties",
                  icon: "🏘️",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Commercial Real Estate Firms",
                  description: "Professional admin support for commercial property management and leasing",
                  icon: "🏢",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Single-Family and Multifamily Portfolios",
                  description: "Specialized services for diverse property portfolios and investment strategies",
                  icon: "🏠",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "HOAs and Condominium Associations",
                  description: "Community management and homeowner association administrative support",
                  icon: "🏡",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Student and Senior Housing Operators",
                  description: "Specialized admin services for student housing and senior living facilities",
                  icon: "🎓",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Independent Landlords",
                  description: "Professional support for individual property owners and small investors",
                  icon: "👤",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Real Estate Investment Trusts (REITs)",
                  description: "Enterprise-level administrative support for large-scale property operations",
                  icon: "📈",
                  color: "from-blue-500 to-indigo-600"
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

        {/* Onboarding Process */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                A Simple, Proven Onboarding Process
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                We make it simple to begin working with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: "1",
                  title: "Set Up a Free Consultation",
                  description: "Share with us your portfolio, current work volume, and Buildium configuration.",
                  icon: "💬"
                },
                {
                  step: "2", 
                  title: "Get a Personalized Proposal",
                  description: "We will send you a no-obligation quote and service plan tailored to your needs.",
                  icon: "📋"
                },
                {
                  step: "3",
                  title: "Access & SOP Alignment",
                  description: "We remotely connect to your Buildium platform and integrate with your internal processes.",
                  icon: "🔑"
                },
                {
                  step: "4",
                  title: "Go Live",
                  description: "Our virtual admin team begins within 3–5 business days.",
                  icon: "🚀"
                },
                {
                  step: "5",
                  title: "Weekly Check-ins & Reporting",
                  description: "We offer updates, reports, and feedback channels to guarantee continued success.",
                  icon: "📊"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Like Having In-House Team */}
        <section className="relative py-20 bg-gradient-to-r from-[#30a659] via-emerald-600 to-teal-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Buildium Admin Support Like Having an In-House Team
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              At Pacerline Outsourcing Service Pvt Ltd, we don't simply "get tasks done"—we join your team. With industry knowledge, Buildium savvy, and top-notch communication, we provide a frictionless extension of your property management office at a fraction of the expense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#30a659] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert Buildium Admin Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#30a659] transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                FAQs – Buildium Admin Services
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Buildium administration services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do you need to train your staff in Buildium?",
                  answer: "Not at all. Your staff is already trained in Buildium and property management functions."
                },
                {
                  question: "What tasks of property management administration can be done in Buildium?",
                  answer: "Buildium supports a wide range of administrative tasks, including lease management, maintenance coordination, tenant communication, online rent collection, task automation, and document sharing. Pacerline enhances these functions by managing them efficiently on your behalf, reducing workload and ensuring consistency."
                },
                {
                  question: "How does Pacerline support administrative functions in Buildium software?",
                  answer: "Pacerline offers expert-level Buildium management, such as lease entries and renewal, application processing, maintenance work order monitoring, owner portal notices, tenant communications, and more. Our experts operate within your Buildium account to act on tasks just like an in-house team - except more affordable and scalable."
                },
                {
                  question: "Is Pacerline capable of processing tenant onboarding and screening through Buildium?",
                  answer: "Yes. We handle tenant onboarding from application processing and screening to lease preparation and portal setup. Through Buildium's integrated tools, we provide a seamless, professional tenant experience and assist you in maintaining accurate records and compliance at each stage."
                },
                {
                  question: "How does Pacerline handle work orders within Buildium?",
                  answer: "Pacerline have an expert team, they will monitors maintenance tickets, assign work orders to relevant vendors based on handy man list, tracks status, cross check with vendor & tenant and close work order in Buildium. We make sure effective communication with tenants and vendors for problem resolution and proper expense tracking of each property."
                },
                {
                  question: "Does Pacerline participate in owner and tenant communication via Buildium?",
                  answer: "Yes. We provide owner portals with updated financial reports and documents, we answer tenant messages, and log all correspondence. This keeps everyone aware, enhances transparency, and enables a more effective service experience for your clients."
                },
                {
                  question: "What is the benefit to outsource my property management process to Pacerline?",
                  answer: "Pacerline provide profession service to property management companies, it helps to saves time, reduces costs, minimizes errors, and provides professional management of day-to-day activities. Our strong knowledge of Buildium enables us to optimize your workflows, increase efficiency and allow you to concentrate on strategic expansion instead of admin tasks."
                },
                {
                  question: "How much experience does Pacerline have with Buildium software?",
                  answer: "Pacerline Outsourcing Service Pvt Ltd boasts more than 14 years of experience handling property management software, with extensive knowledge in Buildium. We've assisted U.S.-based real estate companies and property management firms with top-notch, compliant, and tailored back-office administration services."
                },
                {
                  question: "Do you support inbound as well as outbound communications?",
                  answer: "Yes. We support all types of tenant, vendor, and owner communication—calls, emails, and messages."
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
              Streamline Your Property Management with Expert Buildium Administration
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our Buildium admin experts handle your day-to-day operations while you focus on growing your portfolio. Professional, reliable, and cost-effective solutions tailored for U.S. property management companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert Buildium Admin Support
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

export default BuildiumAdminPage
