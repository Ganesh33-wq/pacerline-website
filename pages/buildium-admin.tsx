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
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/40"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Phase 1: Main Title Section */}
          <div className="relative py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-clip-text text-transparent animate-gradient-x">Buildium</span> 
                  <br />
                  <span className="inline-block animate-fade-in-up delay-300">Administration Service</span>
                </h1>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-4xl mx-auto border border-white/20 animate-fade-in-up delay-500 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Professional <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium Administration Solutions</strong> for U.S. Property Management Companies
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-[#092870] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Content & CTA Section */}
          <div className="relative py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Content */}
                <div className="space-y-8 animate-slide-in-left">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#092870] transition-colors duration-300">
                      <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Expert Admin Support</span>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mt-2 group-hover:w-24 transition-all duration-300"></div>
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        Rental property management is no easy feat—particularly when you're handling tenant contact, work orders, rental ads, and financial reporting. That's where we step in. At <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing Service Pvt Ltd</strong>, we provide Buildium administrative solutions to help U.S. property management firms streamline processes and reduce overhead expenses.
                      </p>
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        Our highly skilled virtual assistants and admin experts are individually trained in Buildium software. From responding to rental inquiries to listing management and email communication, we keep your back-office running smoothly.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">Get Buildium Admin Support</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-[#092870] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                      <button className="border-2 border-[#092870] text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#092870] hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-500 hover:shadow-xl hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">View Our Services</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#092870] to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Key Stats */}
                <div className="space-y-6 animate-slide-in-right">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Trusted Buildium Administration Experts
                      <div className="w-20 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mx-auto mt-2"></div>
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">14+</div>
                          <div className="font-semibold">Years Experience</div>
                          <div className="text-sm opacity-90">Property Management</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">🏆</div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#30a659] via-emerald-600 to-[#30a659] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group delay-100">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">70%</div>
                          <div className="font-semibold">Cost Savings</div>
                          <div className="text-sm opacity-90">Administrative Overhead</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">💰</div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group delay-200">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">24/7</div>
                          <div className="font-semibold">Support</div>
                          <div className="text-sm opacity-90">All Time Zones</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">🌍</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

            @keyframes slide-in-left {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slide-in-right {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
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
              animation: fade-in-up 0.6s ease-out forwards;
            }

            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out forwards;
            }

            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out forwards;
            }

            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
            }

            .bg-size-200 {
              background-size: 200% 200%;
            }

            .bg-pos-0 {
              background-position: 0% 50%;
            }

            .bg-pos-100 {
              background-position: 100% 50%;
            }

            .delay-100 {
              animation-delay: 0.1s;
            }

            .delay-200 {
              animation-delay: 0.2s;
            }

            .delay-300 {
              animation-delay: 0.3s;
            }

            .delay-500 {
              animation-delay: 0.5s;
            }

            .delay-1000 {
              animation-delay: 1s;
            }
          `}</style>
        </section>

        {/* Why Outsource Admin */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Outsource Admin in <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium?</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700 mb-6">
                  Buildium is a powerful tool—but like all systems, it needs the right people to drive it to deliver results. When you're short-staffed, swamped with calls, or wasting too much time on low-value admin tasks, outsourcing is the best decision.
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">
                  Our Buildium admin support services enable you to:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💰
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#092870] transition-colors duration-300">Turbocharge Operating Costs</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Save up to 70% on administrative overhead</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  👥
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#30a659] transition-colors duration-300">Free Your Teams</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Free your leasing and maintenance teams</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Higher Tenant Satisfaction</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Quicker response times for better service</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Professional Assistance</h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Without hiring in-house or training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Core <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium Admin Services</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700">
                  We provide a comprehensive range of administrative support solutions designed specifically for Buildium property management software users. From residential through commercial, HOA, to student housing, our experts adjust to your processes and priorities.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
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
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center text-3xl flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-[#092870] transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                      
                      {service.benefits && (
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6">
                          <h4 className="font-bold text-[#092870] mb-3 text-lg">Why It Matters:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.process && (
                        <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-6">
                          <h4 className="font-bold text-[#30a659] mb-3 text-lg">What We Do:</h4>
                          <ul className="space-y-2">
                            {service.process.map((step, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-full mr-3"></div>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.callTypes && (
                        <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-6">
                          <h4 className="font-bold text-indigo-700 mb-3 text-lg">Typical Outbound Calls:</h4>
                          <ul className="space-y-2">
                            {service.callTypes.map((type, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                                {type}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.advantages && (
                        <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl p-6">
                          <h4 className="font-bold text-emerald-700 mb-3 text-lg">Advantages:</h4>
                          <ul className="space-y-2">
                            {service.advantages.map((advantage, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3"></div>
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.services && (
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6">
                          <h4 className="font-bold text-blue-700 mb-3 text-lg">Our Listing Services Include:</h4>
                          <ul className="space-y-2">
                            {service.services.map((serviceItem, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                                {serviceItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.perfectFor && (
                        <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-6">
                          <h4 className="font-bold text-purple-700 mb-3 text-lg">Perfect For:</h4>
                          <ul className="space-y-2">
                            {service.perfectFor.map((item, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3"></div>
                                {item}
                              </li>
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
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why U.S. Property Managers Choose Us for <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium Admin Support</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700">
                  Here's why our Buildium virtual assistants stand out from the rest of admin services:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Trained on Buildium Software",
                  description: "We're experts on the platform itself—no learning curve involved.",
                  icon: "🏆",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "U.S. Time Zone Support",
                  description: "We operate on Eastern, Central, Mountain, and Pacific time zones to align with your office hours or tenant schedule.",
                  icon: "🕒",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Cost-Effective Plans",
                  description: "Pay for only the services you want—affordable hourly packages or full-time committed admin assistance.",
                  icon: "💰",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Real Estate Expertise",
                  description: "Our staff has expertise in property management—not merely software.",
                  icon: "🏠",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Quick Onboarding",
                  description: "We get up to speed in days, not weeks, so you see value right away.",
                  icon: "🚀",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "14+ Years Experience",
                  description: "With more than 14 years of property management service experience and extensive knowledge in Buildium.",
                  icon: "⭐",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-16 right-16 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who We <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Serve</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700">
                  Our Buildium admin support services are relied on by property management professionals across the United States. No matter if you have 100 or 5,000+ units, we scale with you.
                </p>
              </div>
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
                }
              ].map((client, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">{client.title}</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                A Simple, Proven <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Onboarding Process</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/20">
                <p className="text-xl text-gray-700">
                  We make it simple to begin working with our team.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  title: "Set Up a Free Consultation",
                  description: "Share with us your portfolio, current work volume, and Buildium configuration.",
                  icon: "💬",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Get a Personalized Proposal",
                  description: "We will send you a no-obligation quote and service plan tailored to your needs.",
                  icon: "📋",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Access & SOP Alignment",
                  description: "We remotely connect to your Buildium platform and integrate with your internal processes.",
                  icon: "🔑",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Go Live",
                  description: "Our virtual admin team begins within 3–5 business days.",
                  icon: "🚀",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Weekly Check-ins & Reporting",
                  description: "We offer updates, reports, and feedback channels to guarantee continued success.",
                  icon: "📊",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((step, index) => (
                <div key={index} className="text-center h-full">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300 flex-grow">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Like Having In-House Team */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Buildium Admin Support Like Having an <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">In-House Team</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                At <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing Service Pvt Ltd</strong>, we don't simply "get tasks done"—we join your team. With industry knowledge, Buildium savvy, and top-notch communication, we provide a frictionless extension of your property management office at a fraction of the expense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Get Expert Buildium Admin Support</span>
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#092870] hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-500 hover:shadow-xl hover:scale-105">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-16 right-16 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                FAQs – <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium Admin Services</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <p className="text-xl text-gray-700">
                  Common questions about our Buildium administration services
                </p>
              </div>
            </div>

            <div className="space-y-6">
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
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <button
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#092870] flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-lg font-bold">
                          {openFAQ === index ? '−' : '+'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-[#092870] transition-colors duration-300">{faq.question}</h3>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6 bg-gradient-to-r from-slate-50/50 to-blue-50/50">
                      <div className="ml-14">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Streamline Your Property Management with <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Expert Buildium Administration</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Let our Buildium admin experts handle your day-to-day operations while you focus on growing your portfolio. Professional, reliable, and cost-effective solutions tailored for U.S. property management companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Get Expert Buildium Admin Support</span>
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#092870] hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-500 hover:shadow-xl hover:scale-105">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BuildiumAdminPage
