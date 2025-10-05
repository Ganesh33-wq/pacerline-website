import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const BuildiumBookkeepingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Buildium Bookkeeping Services | Expert Property Management Accounting | Pacerline</title>
        <meta name="description" content="Professional Buildium bookkeeping services for US property management companies. 14+ years experience with comprehensive accounting solutions." />
        <meta name="keywords" content="Buildium bookkeeping, property management accounting, Buildium accounting services, real estate bookkeeping, property accounting" />
        <meta property="og:title" content="Buildium Bookkeeping Services | Expert Property Management Accounting" />
        <meta property="og:description" content="Professional Buildium bookkeeping services for property management companies. Expert accounting solutions with 14+ years experience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/buildium-bookkeeping" />
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
                  <span className="inline-block animate-fade-in-up delay-300">Accounting Services</span>
                </h1>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-4xl mx-auto border border-white/20 animate-fade-in-up delay-500 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing Service Pvt Ltd</strong> providing expert Back-Office Bookkeeping Support to U.S. Property Management Firms and Real Estate companies.
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
                      <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Maximize Your Buildium Investment</span>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mt-2 group-hover:w-24 transition-all duration-300"></div>
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300">
                      With Expert Bookkeeping Support from our certified professionals who understand the intricacies of property management accounting.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">Get Expert Buildium Bookkeeping</span>
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
                      Trusted Buildium Bookkeeping Experts
                      <div className="w-20 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mx-auto mt-2"></div>
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
                          <div className="text-3xl font-bold group-hover:animate-pulse">100+</div>
                          <div className="font-semibold">US Clients</div>
                          <div className="text-sm opacity-90">Successfully Served</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">🇺🇸</div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group delay-200">
                        <div>
                          <div className="text-3xl font-bold group-hover:animate-pulse">18</div>
                          <div className="font-semibold">Services</div>
                          <div className="text-sm opacity-90">Comprehensive Support</div>
                        </div>
                        <div className="text-4xl group-hover:animate-bounce">⚙️</div>
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

        {/* Expert Buildium Bookkeeping Support */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/30"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                Expert Buildium Bookkeeping Support
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-6 animate-slide-in-left">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl">💼</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Cloud-Based Excellence</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      The software Buildium is a cloud-based property management system that's widely used across the U.S. to manage rentals, tenants, accounts, and maintenance. But the real worth of Buildium is experienced when the accounting side is looked after by experts who are well familiar with the system.
                    </p>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">14+ Years Experience</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      With <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing Service Pvt Ltd</strong>, you get 14 years of real-world experience with Buildium for hundreds of U.S.-based clients. Our professional team offers full-service virtual accounting and bookkeeping to your company with tailored to your operation and portfolio.
                    </p>
                  </div>
                </div>

                {/* Right Side - Highlight Card */}
                <div className="animate-slide-in-right">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:border-blue-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-4xl text-white">✨</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-center text-black">Our Commitment</h3>
                      <p className="text-xl leading-relaxed text-center mb-6 text-black font-semibold">
                        We assist you in streamlining your back office while maintaining compliance, accuracy and real-time financial transparency.
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                            <span className="text-xl text-white">⚡</span>
                          </div>
                          <p className="text-sm font-bold text-black">Fast</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                            <span className="text-xl text-white">🎯</span>
                          </div>
                          <p className="text-sm font-bold text-black">Accurate</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                            <span className="text-xl text-white">🔒</span>
                          </div>
                          <p className="text-sm font-bold text-black">Secure</p>
                        </div>
                      </div>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                Who We Serve
              </h2>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-gray-100 animate-fade-in-up delay-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  From <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">50 to 5,000 units</strong>, our crew becomes a seamless extension of your workflow and evolves with your growing business.
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <span className="text-2xl mr-2">🏢</span>
                    <span className="font-semibold text-gray-700">Scalable Solutions</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <span className="text-2xl mr-2">📈</span>
                    <span className="font-semibold text-gray-700">Growth Focused</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential and Commercial Property Managers",
                  description: "Complete bookkeeping solutions for all types of property management companies",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "HOA & Condo Association Managers",
                  description: "Specialized accounting for homeowner and condominium associations",
                  icon: "🏘️",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Real Estate Investment Companies",
                  description: "Professional bookkeeping for real estate investment portfolios",
                  icon: "💼",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Independent Landlords & Multifamily Owners",
                  description: "Tailored accounting support for individual property owners",
                  icon: "🏠",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Buildium Users Migrating from Other Systems",
                  description: "Seamless migration and setup assistance for new Buildium users",
                  icon: "🔄",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Property Management Firms of All Sizes",
                  description: "Scalable solutions from small to large property management companies",
                  icon: "📈",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((client, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Full-Service Buildium Accounting Solutions */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/30"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                Full-Service Buildium Accounting Solutions
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-white/20 animate-fade-in-up delay-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Here's what we do for you inside Buildium - <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">18 comprehensive services</strong> to streamline your property management operations:
                </p>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-[#30a659] to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    🏆 Complete Buildium Solutions
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Buildium Software Onboarding and Setup",
                  description: "We offer a seamless Buildium implementation and onboarding process, including account setup, chart of accounts setup, entry of property information, and staff training.",
                  icon: "🚀",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Buildium Software Migration",
                  description: "Our expert team conduct effortless data migration from your existing software to the Buildium software. We migrate lease information, owner, vendors and tenant data, financial data and historical transactions safely.",
                  icon: "🔄",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Tenant Ledger Management",
                  description: "We manage tenant ledgers in Buildium with high accuracy. We will update charges, payments, credits, and late fees in tenant ledger ensuring timely collections and reduces disputes.",
                  icon: "📊",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Lease Entries and Updates",
                  description: "Our team accurately enters and edits lease information in Buildium, including lease start and end dates, rent details, deposit amounts, and renewal modifications.",
                  icon: "📝",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Maintenance Bills and Work Order Closure",
                  description: "We are quick to process maintenance invoices and close work orders in Buildium with mark up fee. We monitor each maintenance request from vendor invoice entry through to approval.",
                  icon: "🔧",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Utility Bills Entering",
                  description: "We charge each unit or property's utility expense in Buildium to accurately allocate and report. We make the entry process easy to ensure your operating expenses are current.",
                  icon: "⚡",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Owner Statement and Contribution",
                  description: "We prepare and distribute precise owner reports to each owners. We will cross check the accuracy of reporting property income, expenses, and distributions.",
                  icon: "📋",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Bank Reconciliation",
                  description: "We perform monthly bank reconciliations in Buildium software so that all transactions balance with your bank statements. Discrepancies are resolved expeditiously.",
                  icon: "🏦",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Credit Card Reconciliation",
                  description: "We reconcile Buildium entries and credit card transactions to track accurate expenses and statement matching. Our staff looks out for missing charges, errors, or duplicates.",
                  icon: "💳",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "3-Way Reconciliation",
                  description: "We perform 3-way reconciliation process in the Buildium software. We make sure to reconciling your bank balance, trust ledger and your property balances properly.",
                  icon: "⚖️",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Move-In Process",
                  description: "We organize the whole move-in process within the Buildium software. We will do the lease activation and deposit reporting through to tenant portal setup and rent scheduling.",
                  icon: "🔑",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Move-Out Process",
                  description: "We manage the move-out process efficiently in Buildium software, including end rent fees, pro rate rent charge, review inspection report, deposit return and tenant status changes.",
                  icon: "📦",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Common Area Maintenance (CAM) Reconciliation",
                  description: "Our professional team calculate the CAM charges and reconcile in Buildium, comparing actual costs with tenant payments ensuring accurate expense allocations.",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "General Ledger and Month-End Close",
                  description: "Our professional team maintain a clean general ledger and manage the month-end close process in Buildium. All entries are reviewed, adjusted, and finalized.",
                  icon: "📈",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Budgeting and Forecasting",
                  description: "We promote annual and ongoing budgeting and forecasting in Buildium. Our service allows property managers to project future income and control expenses.",
                  icon: "📊",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Review and Error Clean-Up",
                  description: "We review General leger to find and fix entry mistakes, duplicates, or inconsistencies. This clean-up gives you solid ledgers and reliable reports.",
                  icon: "🔍",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Financial Reports",
                  description: "We prepare and examine tailored financial reports in Buildium software, including income statements, balance sheets, and owner statements with precision and promptness.",
                  icon: "📊",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "IRS 1099 Filings and Compliance",
                  description: "We accurately prepare and file 1099s for vendors and property owners in Buildium, making timely IRS submissions with TIN verification and compliance checks.",
                  icon: "📄",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{animationDelay: `${0.1 + index * 0.05}s`}}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">{service.description}</p>
                  <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 text-center animate-fade-in-up delay-1000">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Buildium Operations?</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Let our certified experts handle your property management accounting while you focus on growing your business. Experience the difference with our comprehensive 18-service solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    Start Your Buildium Service Today
                  </button>
                  <button className="border-2 border-[#30a659] text-[#30a659] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#30a659] hover:text-white transition-all duration-500 hover:shadow-xl hover:scale-105">
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Buildium Services */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                Why Choose Our Buildium Bookkeeping Services?
              </h2>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl max-w-5xl mx-auto border border-gray-100 animate-fade-in-up delay-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Professional expertise</strong> with proven results for hundreds of U.S.-based property management companies
                </p>
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <span className="text-2xl mr-2">🏆</span>
                    <span className="font-semibold text-gray-700">Proven Results</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <span className="text-2xl mr-2">🇺🇸</span>
                    <span className="font-semibold text-gray-700">U.S. Expertise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "14+ Years Buildium Experience",
                  description: "Extensive real-world experience working exclusively with Buildium software for U.S. clients, mastering all aspects of the system.",
                  icon: "⭐",
                  color: "from-[#092870] to-indigo-600",
                  bgColor: "bg-white"
                },
                {
                  title: "Full System Access & Transparency",
                  description: "You maintain complete access to your Buildium account while we work seamlessly within your system for full transparency.",
                  icon: "👁️",
                  color: "from-[#30a659] to-emerald-600",
                  bgColor: "bg-white"
                },
                {
                  title: "Complete Setup & Migration Support",
                  description: "Full Buildium onboarding including property setup, tenant migration, vendor setup, and custom chart of accounts configuration.",
                  icon: "🚀",
                  color: "from-purple-500 to-purple-700",
                  bgColor: "bg-white"
                },
                {
                  title: "Accurate Financial Reporting",
                  description: "Timely and precise owner statements, P&L reports, balance sheets, and all financial documentation beautifully formatted.",
                  icon: "📊",
                  color: "from-orange-500 to-orange-700",
                  bgColor: "bg-white"
                },
                {
                  title: "IRS Compliance & 1099 Filing",
                  description: "Expert preparation and filing of all required vendor 1099s through Buildium, ensuring full U.S. tax code compliance.",
                  icon: "📋",
                  color: "from-cyan-500 to-cyan-700",
                  bgColor: "bg-white"
                },
                {
                  title: "Multi-Property Type Support",
                  description: "Specialized bookkeeping for residential, commercial, HOA, and mixed-use properties with tailored solutions for each type.",
                  icon: "🏢",
                  color: "from-pink-500 to-pink-700",
                  bgColor: "bg-white"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`${feature.bgColor} rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up`}
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 text-center">{feature.title}</h3>
<p className="text-black leading-relaxed text-center font-semibold">{feature.description}</p>
                  <div className="mt-6 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Feature Highlight */}
            <div className="mt-16 text-center animate-fade-in-up delay-1000">
              <div className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#30a659] rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">What Sets Us Apart?</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Buildium Specialists</h4>
                      <p className="text-sm text-gray-600">100% focused on Buildium platform</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-2xl">⚡</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Quick Setup</h4>
                      <p className="text-sm text-gray-600">Rapid onboarding process</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-2xl">🤝</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Dedicated Team</h4>
                      <p className="text-sm text-gray-600">Assigned account specialists</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-2xl">📈</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Scalable Solutions</h4>
                      <p className="text-sm text-gray-600">Grows with your business</p>
                    </div>
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
                Frequently Asked Questions – Buildium Bookkeeping Services
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Buildium bookkeeping and accounting services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is Buildium bookkeeping?",
                  answer: "Buildium accounting is keeping your property accounting tasks in-house within the Buildium software—rent tracking, vendor payments, owner statements, financial reports, and bank reconciliations."
                },
                {
                  question: "What is the service provided in Buildium accounting?",
                  answer: "Our services in Buildium accounting at Pacerline Outsourcing Service Pvt Ltd are rent posting, tenant ledger maintenance, vendor bill posting, owner disbursements, bank reconciliations, CAM reconciliation, and preparation of financial reports like P&L and Balance Sheet."
                },
                {
                  question: "Can Buildium bookkeeping be outsourced to a third-party company?",
                  answer: "Yes, and most U.S.-based property managers do exactly that. Outsourcing to an experienced provider such as Pacerline Outsourcing offers accuracy, on-time reporting, and reduced in-house workload."
                },
                {
                  question: "How well-trained are your employees on Buildium?",
                  answer: "Our team has 14+ years of on-the-job experience working exclusively with Buildium software for clients in the United States. We are masters at using all aspects of the system to maximize efficiency and compliance."
                },
                {
                  question: "Will I still have access to my Buildium account?",
                  answer: "Yes. You never lose access to your Buildium system. We work in your system, so everything is always transparent and accessible to your staff."
                },
                {
                  question: "Can you initialize my properties and tenants in Buildium?",
                  answer: "Sure. We offer full Buildium setup services—adding portfolios, buildings, tenants, vendors, and custom chart of accounts to get your system up and running."
                },
                {
                  question: "Do you generate owner statements in Buildium?",
                  answer: "Yes. We generate timely and accurate owner statements, including income, expenses, and distributions—beautifully formatted and ready to email to your investors."
                },
                {
                  question: "Do you prepare IRS 1099s for vendors?",
                  answer: "Yes. We create and post all required vendor 1099s through Buildium, staying in line with U.S. tax code."
                },
                {
                  question: "What types of properties do you support?",
                  answer: "Residential, commercial, HOA, and mixed-use properties managed on Buildium, with specialized bookkeeping plans for each."
                },
                {
                  question: "Is Buildium bookkeeping secure and compliant?",
                  answer: "Yes. Buildium is cloud-based and encrypted. Our team keeps strict data security protocols and accounting practices for precision and IRS compliance."
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
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/30"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Ready to Maximize Your Buildium Investment?
              </h2>
              <p className="text-xl text-black mb-8 leading-relaxed font-semibold">
                Let our <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium experts</strong> handle your bookkeeping while you focus on growing your property management business. Get <strong className="bg-gradient-to-r from-[#30a659] to-emerald-600 bg-clip-text text-transparent">14+ years of expertise</strong> working for you with professional, accurate, and compliant accounting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  Get Expert Buildium Bookkeeping
                </button>
                <button className="border-2 border-[#30a659] text-[#30a659] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#30a659] hover:text-white transition-all duration-500 hover:shadow-xl hover:scale-105">
                  Schedule Free Consultation
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex justify-center space-x-6">
                <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-4 py-2 shadow-md">
                  <span className="text-2xl mr-2">🏆</span>
                  <span className="font-bold text-black text-sm">14+ Years Experience</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-full px-4 py-2 shadow-md">
                  <span className="text-2xl mr-2">🇺🇸</span>
                  <span className="font-bold text-black text-sm">100+ US Clients</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2 shadow-md">
                  <span className="text-2xl mr-2">✅</span>
                  <span className="font-bold text-black text-sm">GAAP Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BuildiumBookkeepingPage
