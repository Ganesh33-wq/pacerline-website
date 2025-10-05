import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const BuildiumPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Buildium Services | Expert Property Management Software Solutions | Pacerline</title>
        <meta name="description" content="Professional Buildium property management software services. 14+ years experience with comprehensive accounting, bookkeeping, and administration solutions." />
        <meta name="keywords" content="Buildium services, property management software, Buildium accounting, Buildium bookkeeping, property management administration" />
        <meta property="og:title" content="Buildium Services | Expert Property Management Software Solutions" />
        <meta property="og:description" content="Professional Buildium software services for property management companies. Expert accounting and administration solutions with 14+ years experience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/buildium" />
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
                  <span className="inline-block animate-fade-in-up delay-300">Property Management Services</span>
                </h1>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-3xl mx-auto border border-white/20 animate-fade-in-up delay-500 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Streamline Your Property Management Operations with 
                    <strong className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-clip-text text-transparent animate-gradient-x"> Expert Buildium Support</strong>
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
                      Why Choose Pacerline for Buildium?
                      <div className="w-12 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        At <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing</strong>, we offer specialized accounting and administrative services in Buildium software, helping U.S.-based property management companies operate efficiently, accurately, and profitably.
                      </p>
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        With over <strong className="text-[#092870] bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">14 years of experience</strong> in property management accounting, our team understands the unique demands of your business and leverages Buildium's powerful features to simplify your workload.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">Get Expert Buildium Support</span>
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
                      Trusted Buildium Experts
                      <div className="w-16 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mx-auto mt-2"></div>
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">14+</div>
                          <div className="font-semibold">Years Experience</div>
                          <div className="text-sm opacity-90">Buildium Expertise</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">🏆</div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#30a659] via-emerald-600 to-[#30a659] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group delay-100">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">17K+</div>
                          <div className="font-semibold">US Firms</div>
                          <div className="text-sm opacity-90">Trust Buildium</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">🏢</div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group delay-200">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">100%</div>
                          <div className="font-semibold">GAAP Compliant</div>
                          <div className="text-sm opacity-90">Accounting Standards</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">✅</div>
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

        {/* What Is Buildium */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                What Is Buildium?
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  Buildium is a cloud-based property management software designed specifically for real estate professionals and property managers. Whether residential rental, HOAs, or student housing, Buildium provides you with the tools to manage your day-to-day operations with ease—from collecting rent to communication with tenants and accounting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Property Managers in the USA Choose Buildium</h3>
                <p className="text-gray-700 mb-6">
                  Buildium is used by more than <strong>17,000 United States property management firms</strong>. It's intuitive, saves time, and keeps your information in one safe location.
                </p>
                <div className="space-y-4">
                  {[
                    "Collect rent online",
                    "Automate lease renewals and e-signatures", 
                    "Track maintenance requests",
                    "Communicate with owners and tenants",
                    "Manage property accounting with full transparency"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-full mr-4"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Built-In Property Accounting</h3>
                <p className="text-gray-700 mb-6">
                  Buildium features a robust accounting package engineered for property management:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Full general ledger",
                    "Bank reconciliations",
                    "Accounts payable & receivable", 
                    "Owner distributions and statements",
                    "Tracking & reporting budget",
                    "IRS 1099 eFiling for vendors",
                    "P&L, Balance Sheet reports",
                    "Comprehensive Rent Roll"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                  <p className="font-semibold">
                    With more than 14 years of direct experience with Buildium, our technical support team at Pacerline assists U.S.-based property managers to make maximum use of all the features in the software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buildium Accounting Services */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Buildium Accounting Services
              </h2>
              <p className="text-2xl font-bold text-[#092870] mb-6">
                Accurate, Compliant, and Fully Integrated Financial Management
              </p>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Buildium is a comprehensive, cloud-based property management system built around full-cycle accounting. We enable property managers to take fullest advantage of Buildium's accounting features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bank and Credit Card Reconciliation",
                  description: "We reconcile all accounts on a monthly basis, keeping your books current and accurate. Any irregularities are immediately discovered and corrected.",
                  icon: "🏦",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Tenant and Owner Ledger Management",
                  description: "We maintain detailed ledgers for every tenant and property owner, recording every payment, charge, and adjustment with clarity and accuracy.",
                  icon: "📊",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Rent Roll Setup and Automation",
                  description: "Rent postings occur automatically, late charges are monitored, and recurring payments are checked for regularity. We keep everything in order.",
                  icon: "💰",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Vendor Payments and 1099 Preparation",
                  description: "From vendor invoicing to end-of-year 1099 reporting, we process your accounts payable procedure, keeping you in compliance with the IRS.",
                  icon: "📋",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Monthly Financial Reporting",
                  description: "Our accounting staff prepares and verifies monthly financial reports, balance sheets, income statements, and owner disbursements—all within Buildium—according to GAAP principles.",
                  icon: "📈",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "CAM Reconciliation",
                  description: "Common Area Maintenance reconciliation and budget forecasting to ensure accurate cost allocation and transparent financial reporting.",
                  icon: "🏢",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Full-Service Buildium Bookkeeping */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/40"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                Full-Service Buildium Bookkeeping
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto mb-8 border border-white/20 animate-fade-in-up delay-300 hover:shadow-2xl transition-all duration-500">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Our <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">bookkeeping team certified in Buildium</strong> performs within your software—so you retain control while we handle the details.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white p-8 rounded-3xl max-w-5xl mx-auto shadow-2xl animate-fade-in-up delay-500 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce mr-2"></div>
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce delay-100 mr-2"></div>
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce delay-200"></div>
                </div>
                <p className="text-xl font-semibold leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  By integrating <strong>Buildium's automation</strong> with our <strong>accounting professionalism</strong>, we provide accurate, audit-ready books with less stress and more confidence.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    🏆 Certified Buildium Experts
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 animate-fade-in-up delay-700">
                Complete Bookkeeping Services
                <div className="w-16 h-1 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-full mx-auto mt-2"></div>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { service: "Setup of properties, tenants & vendors", icon: "🏢", color: "from-blue-500 to-blue-700" },
                  { service: "Move-in and move-out processing", icon: "📦", color: "from-emerald-500 to-emerald-700" },
                  { service: "Lease creation and renewals", icon: "📋", color: "from-purple-500 to-purple-700" },
                  { service: "Tracking of payments (rent, utilities, fees)", icon: "💰", color: "from-orange-500 to-orange-700" },
                  { service: "Owner distributions", icon: "💸", color: "from-cyan-500 to-cyan-700" },
                  { service: "Bank reconciliations", icon: "🏦", color: "from-indigo-500 to-indigo-700" },
                  { service: "Financial reports", icon: "📊", color: "from-pink-500 to-pink-700" },
                  { service: "Budget and forecasting", icon: "📈", color: "from-teal-500 to-teal-700" },
                  { service: "CAM reconciliation", icon: "🔄", color: "from-red-500 to-red-700" },
                  { service: "IRS 1099 reporting", icon: "📄", color: "from-yellow-500 to-yellow-700" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <p className="font-semibold text-gray-900 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.service}
                    </p>
                    <div className="mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center animate-fade-in-up delay-1000">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto border border-white/20 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Streamline Your Buildium Bookkeeping?</h3>
                <p className="text-gray-700 mb-6">Let our certified experts handle your property management accounting while you focus on growing your business.</p>
                <button className="bg-gradient-to-r from-[#30a659] via-emerald-600 to-[#30a659] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  Start Your Buildium Bookkeeping Service
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Buildium Administration Services */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Buildium Administration Services
              </h2>
              <p className="text-2xl font-bold text-[#092870] mb-6">
                Effortless Daily Operations and Seamless Tenant Experiences
              </p>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Buildium's management features enable property managers to remain abreast of daily tasks, and we supplement that with professional-level back-office services.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Lease Administration",
                  description: "We handle lease preparation, electronic signing, renewals, and compliance monitoring. Lease renewal dates are tracked, and renewals are performed ahead of time.",
                  icon: "📝",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Maintenance Coordination", 
                  description: "Maintenance requests are monitored in Buildium, assigned to vendors, and updated in real-time. We work with tenants and vendors to effect timely resolution.",
                  icon: "🔧",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Tenant Onboarding and Communication",
                  description: "From application processing and screening to portal setup and communication, we assist in welcoming tenants and keeping them informed during their lease term.",
                  icon: "👥",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Owner Portal Management",
                  description: "We post reports, financials, and key documents on the owner portal, providing transparency and timely provision of information.",
                  icon: "🏠",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Task and Workflow Management",
                  description: "With Buildium's integrated task tools, we assist in managing daily tasks, follow-ups, and administrative reminders to ensure smooth operations for your business.",
                  icon: "✅",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-700 text-lg">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#30a659] to-emerald-600 text-white p-8 rounded-3xl text-center">
              <p className="text-xl font-semibold">
                Our administration staff is trained to execute all day-to-day tasks with professionalism and efficiency, allowing your internal employees to concentrate on higher-level priorities.
              </p>
            </div>
          </div>
        </section>

        {/* Peace of Mind Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/30"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium</span> + 
                <span className="bg-gradient-to-r from-[#30a659] to-emerald-600 bg-clip-text text-transparent"> Expert Support</span> = 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Peace of Mind</span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-white/20 animate-fade-in-up delay-300 hover:shadow-2xl transition-all duration-500">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We don't only know Buildium—we <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">specialize in it</strong>. At Pacerline Outsourcing, we provide Buildium bookkeeping and back-office accounting services to assist you with:
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: "Accurate tenant ledgers", icon: "📊", color: "from-blue-500 to-blue-700" },
                { service: "Posting and reconciling rent payments", icon: "💰", color: "from-emerald-500 to-emerald-700" },
                { service: "Entering vendor bills and tracking expenses", icon: "📋", color: "from-purple-500 to-purple-700" },
                { service: "Producing timely owner statements", icon: "📄", color: "from-orange-500 to-orange-700" },
                { service: "Creating monthly and year-end financials", icon: "📈", color: "from-cyan-500 to-cyan-700" },
                { service: "Filing 1099s on time", icon: "📁", color: "from-indigo-500 to-indigo-700" },
                { service: "Customizing reports according to your requirements", icon: "⚙️", color: "from-pink-500 to-pink-700" },
                { service: "Complete portfolio management", icon: "🏢", color: "from-teal-500 to-teal-700" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <p className="font-semibold text-gray-900 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.service}
                  </p>
                  <div className="mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Feature Highlight */}
            <div className="mt-16 text-center animate-fade-in-up delay-1000">
              <div className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#30a659] rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Why Choose Our Buildium Expertise?</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Specialized Focus</h4>
                      <p className="text-sm text-gray-600">100% dedicated to Buildium platform expertise</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Quick Turnaround</h4>
                      <p className="text-sm text-gray-600">Same-day response to urgent requests</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xl">🤝</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Dedicated Support</h4>
                      <p className="text-sm text-gray-600">Assigned account manager for consistency</p>
                    </div>
                  </div>
                </div>
              </div>
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
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our Buildium support is ideal for all types of property management professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential Property Managers",
                  description: "Complete Buildium solutions for residential rental properties",
                  icon: "🏠",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Real Estate Investors",
                  description: "Professional accounting and admin support for real estate portfolios",
                  icon: "💼",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Commercial Property Companies",
                  description: "Specialized services for commercial property management firms",
                  icon: "🏢",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "HOA & Condo Association Managers",
                  description: "Expert administration for homeowner and condo associations",
                  icon: "🏘️",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Student Housing Operators",
                  description: "Tailored solutions for student housing and university properties",
                  icon: "🎓",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Property Management Firms",
                  description: "Comprehensive support for established property management companies",
                  icon: "🏛️",
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

        {/* Why Choose Pacerline */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Pacerline for Buildium Support?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "14+ Years of Property Management Accounting Experience",
                  description: "Our deep knowledge of Buildium and the property management space enables us to offer expert, trustworthy support.",
                  icon: "⭐"
                },
                {
                  title: "U.S. Accounting Standards Compliance",
                  description: "We are GAAP and IRS compliance compliant, so your books and reports are always accurate and audit-ready.",
                  icon: "🏆"
                },
                {
                  title: "Flexible Solutions for Any Portfolio Size",
                  description: "Whether you have 50 units or 5,000, our staff scales to handle your needs with tailored attention and consistent quality.",
                  icon: "📈"
                },
                {
                  title: "Safe, Cloud-Based Workflow",
                  description: "We operate in your Buildium account directly, keeping data secure and intact while providing you with complete visibility and control.",
                  icon: "🔒"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
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
                Frequently Asked Questions – Buildium Bookkeeping & Property Management Software
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Buildium services and property management solutions
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is Buildium?",
                  answer: "Buildium is a cloud-based property management software for landlords, property managers, and real estate agents. It assists you in managing rental listings, tenants, leases, maintenance, accounting, and owner communication—all within a single platform."
                },
                {
                  question: "Who uses Buildium?",
                  answer: "Buildium is utilized by residential property managers, commercial property owners, HOA and condo association managers, and United States real estate investors."
                },
                {
                  question: "Does Buildium come with built-in accounting tools?",
                  answer: "Yes, Buildium provides the complete range of accounting functionalities like general ledger, accounts payable and receivable, bank reconciliation, owner statements, budgeting, and IRS 1099 eFiling."
                },
                {
                  question: "Can I outsource Buildium bookkeeping?",
                  answer: "Yes, Outsourcing firms like Pacerline Outsourcing Service Pvt Ltd offer professional Buildium bookkeeping services to many property management companies in the USA and providing accounting and administration professional services."
                },
                {
                  question: "What reports can I generate in Buildium?",
                  answer: "You can generate Rent Roll reports, Owner Statements, Profit & Loss statements, Balance Sheets, Trial Balance and customized financial reports that tailored to your business needs."
                },
                {
                  question: "How secure is Buildium?",
                  answer: "The software Buildium is hosted on secure servers with the bank-grade encryption and data backups, ensuring your financial and tenant data is protected."
                },
                {
                  question: "Does Buildium support online rent payments?",
                  answer: "Yes, Rent, utilities, and other fees can be paid online by tenants via Buildium's tenant portal, enhancing cash flow and cutting down on late payments."
                },
                {
                  question: "Will Pacerline assist in setting up my Buildium account?",
                  answer: "Yes, we offer full Buildium setup services, including portfolio, property, tenant, and vendor onboarding—giving you the capability to hit the ground running on day one."
                },
                {
                  question: "Do you provide monthly or weekly services?",
                  answer: "Yes, we have flexible service plans—daily, weekly, or monthly—depending on your property size, accounting needs, and preferences."
                },
                {
                  question: "What's the advantage of outsourcing Buildium tasks?",
                  answer: "Outsourcing saves you time, minimizes errors, enhances compliance, and keeps your financials up to date and accurate at all times—so you can concentrate on running your properties, not the books."
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
              Ready to Get More from Buildium?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us take the bookkeeping and time-consuming tasks off your hands. Let Pacerline Outsourcing handle it while you grow your property business. Collaborate with Buildium Experts at Pacerline and get fewer mistakes, quicker cycles, and more accurate views of your financial well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert Buildium Support
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

export default BuildiumPage
