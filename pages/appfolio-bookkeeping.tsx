import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const AppFolioBookkeepingPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>AppFolio Bookkeeping Service | Expert Property Management Accounting | Pacerline</title>
        <meta name="description" content="Professional AppFolio bookkeeping services for US property management companies. 13+ years experience with comprehensive accounting solutions." />
        <meta name="keywords" content="AppFolio bookkeeping, property management accounting, AppFolio services, real estate bookkeeping, property management software" />
        <meta property="og:title" content="AppFolio Bookkeeping Service | Professional Property Management Accounting" />
        <meta property="og:description" content="Expert AppFolio bookkeeping services for property management companies. Comprehensive accounting solutions with 13+ years experience." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/appfolio-bookkeeping" />
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
                <span className="text-gray-900">Bookkeeping Service</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <button className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-[#0891b2] hover:to-[#2563eb] shadow-lg">
                  Get AppFolio Bookkeeping Help
                </button>
                <button className="border-2 border-gray-800 text-gray-800 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Second Row with Content and Images */}
        <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-slate-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-[#1f2937] to-[#3b82f6] bg-clip-text text-transparent">Expert AppFolio bookkeeping support</span> that maximizes your property management software investment
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    With specialized expertise, ongoing data management, and precise financial procedures tailored specifically for AppFolio users.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">13+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">100+ US Companies</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">10K+ Properties</span>
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
                        <div className="text-2xl font-bold text-gray-900">13+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">🏢</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">100+</div>
                        <div className="text-sm text-gray-600">US Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Who We Help */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Help</h3>
                
                {/* Three column cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        🏢
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Property Management Companies</h4>
                        <p className="text-sm text-gray-600">(Residential & Commercial)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        💼
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Real Estate Investors & Landlords</h4>
                        <p className="text-sm text-gray-600">Portfolio Management</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        🏘️
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">HOA and Community Managers</h4>
                        <p className="text-sm text-gray-600">Association Management</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats display */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-2xl p-4 text-white text-center shadow-xl">
                    <div className="text-2xl font-bold mb-1 text-cyan-400">13+</div>
                    <div className="text-xs opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-2xl p-4 text-white text-center shadow-xl">
                    <div className="text-2xl font-bold mb-1">100+</div>
                    <div className="text-xs opacity-90">US Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Pacerline for AppFolio Bookkeeping Support?
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  AppFolio is among the strongest property management software solutions available, but to reap its full benefits takes specialized expertise, ongoing data management, and precise financial procedures.
                </p>
                <p>
                  That's where <strong>Pacerline Outsourcing Service Pvt Ltd</strong> enters the picture. With more than <strong>13 years of practical experience</strong> working directly on AppFolio with hundreds of U.S.-based property management firms, we offer end-to-end virtual bookkeeping services—all customized specifically for AppFolio users.
                </p>
                <p className="text-2xl font-bold text-[#092870]">
                  No matter if you handle residential properties, HOAs, or commercial ones, our expert staff assists you in streamlining your operations, maintaining compliance, and having books audit-ready.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Full-Service Solutions */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Full-Service AppFolio Bookkeeping Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Our AppFolio bookkeeping services are formatted to seamlessly fit into your current workflow. You'll receive U.S.-style reports, auditable ledgers, and records ready for auditing—without an expensive in-house staff to manage.
              </p>
            </div>

            {/* Setup & Migration Services */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    🚀
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Setup & Migration Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "AppFolio Software Setup & Onboarding",
                      description: "We take care of the setup of your portfolios, properties, tenants, vendors, and chart of accounts properly in AppFolio. Clean setup ensures no future trouble and enables accurate tracking of income and expenses since day one.",
                      icon: "🚀"
                    },
                    {
                      title: "AppFolio Software Migration", 
                      description: "We are migrating accounting processes to AppFolio from other accounting software ensures accurate data transfer, including ledgers, charts of accounts and historical transactions. AppFolio's dedicated onboarding support simplifies the transition, maintaining financial integrity.",
                      icon: "🔄"
                    },
                    {
                      title: "Corporate Account Setup",
                      description: "AppFolio software helps to setup corporate account in the software. We can prepare separate Chart of Accounts for the Corporate accounts. This feature is not available in most property management software. We are able to create a chart of account as Management fee, Late Fee, NSF fee etc are an income category.",
                      icon: "🏢"
                    },
                    {
                      title: "Post-Migration Benefits",
                      description: "Post-migration, users benefit from automated accounting process, real-time reporting and a unified system that enhances accuracy, compliance and operational efficiency",
                      icon: "✅"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#374151] to-[#4b5563] rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Daily Operations Management */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    📋
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Daily Operations Management</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Tenant Ledger Management",
                      description: "We keep tenant ledgers up to date by posting rent payments, late charges, Section 8 subsidies, utility charges, security deposits, and additional charges. We have good knowledge to post a credit in the tenant ledger. We will setup late fee as an auto charge in the tenant ledger if the rent payment delayed. We also reconcile move-out balances and deposits, keeping you accurate and compliant.",
                      icon: "📋",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "Lease Entry & Updates",
                      description: "Our staff enters and modifies lease terms, tenant data, rent figures, due dates, auto charge amounts, and more within AppFolio. This makes your leases up-to-date and current with the actual agreements.",
                      icon: "📄",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "Accounts Payable (Vendor Bill Processing)",
                      description: "We enter vendor invoices, assign expenses to the appropriate GL codes, add invoices, and automate payment scheduling in AppFolio. AppFolio providing Smart bill entry feature to save time. If you have owners or tenants you charge markups to, we make sure those are posted correctly.",
                      icon: "💰",
                      color: "from-[#374151] to-[#4b5563]"
                    },
                    {
                      title: "Move-In & Move-Out Processing",
                      description: "We facilitate your leasing process by entering move-in fees, prorated rent, security deposits, and cleaning fees. Then we will setup online rent payment setup like ACH, Credit card or other enabled method for the tenant. At move-outs, we determine tenant charges, final pro rated rent, damage fee, utility bills, refunds the security deposit partially or fully via check or electronic transfer, and ledger closing.",
                      icon: "🔑",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Work Order Invoice Entry & Mark-Up",
                      description: "We enter vendor invoices, add approved markups, and link them to closed work orders in AppFolio. Every charge is recorded for simple reporting and owner billing.",
                      icon: "🔧",
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
                          <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Management & Reconciliation */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-2xl flex items-center justify-center text-2xl mr-6">
                    🏦
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Financial Management & Reconciliation</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Bank Reconciliation",
                      description: "We will help you to sync bank accounts with AppFolio. It helps to save time for bank reconciliation. If you do not want to sync the bank account then we download and post transactions from bank feeds, apply them to the correct accounts, and complete monthly reconciliations. You'll always know your books match your bank balances.",
                      icon: "🏦",
                      color: "from-[#06b6d4] to-[#3b82f6]"
                    },
                    {
                      title: "Credit Card Reconciliation",
                      description: "We provide credit card reconciliation services in AppFolio. We ensuring that all credit card transactions are accurately matched to your bank ledger and property accounts. We help identify discrepancies, streamline payments and ensure proper expense categorization. Our process ensures smooth reconciliation, accurate financial records and timely reporting for your property management business.",
                      icon: "💳",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Accurate 3-Way Reconciliation",
                      description: "We provide accurate 3-way reconciliation services in AppFolio software, ensuring the bank statement, AppFolio bank ledger, and property balances are perfectly matched. Our team reviews and reconciles all transactions monthly to maintain compliance with trust accounting regulations. With our expertise, you can rely on clean, audit-ready books and complete financial transparency across your property management portfolio.",
                      icon: "⚖️",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "CAM (Common Area Maintenance) Reconciliation",
                      description: "We determine actual CAM charges, compare them to estimates, and proportionally divide them among tenants. We generate year-end reconciliation reports that you can mail with confidence.",
                      icon: "🏗️",
                      color: "from-emerald-500 to-teal-600"
                    },
                    {
                      title: "General Ledger & Month-End Close",
                      description: "We handle journal entries, balance adjustments, and monthly closing preparation. Our staff ensures everything is reconciled out through sub-ledgers and AppFolio reports, providing you a clean month-end.",
                      icon: "📊",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Diagnostic Review & Error Cleanup",
                      description: "We locate discrepancies, incorrectly applied charges, or GL errors in your AppFolio database and clean them out. This process is perfect at software transitions, audits, or year-end preparations.",
                      icon: "🔍",
                      color: "from-cyan-500 to-blue-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-lg mr-4 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reporting & Compliance Services */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mr-6">
                    📊
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Reporting & Compliance Services</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Owner Statements & Ledger Maintenance",
                      description: "We create and deliver monthly or quarterly owner statements. Every report contains income, expenses, distributions, and contributions-tied to a completely reconciled general ledger.",
                      icon: "📋",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Financial Reports (P&L, Balance Sheet, Custom Reports)",
                      description: "We compile and audit your essential financial reports, such as Profit & Loss, Balance Sheets, Trial Balances, and tailored statements. All reports will be prepared according to U.S. standards.",
                      icon: "📊",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "IRS 1099 Filing & Compliance",
                      description: "We gather W-9s, create 1099s within AppFolio, and file them with the IRS and vendors prior to the deadline. We save you from penalties and provide complete compliance with U.S. tax law.",
                      icon: "📄",
                      color: "from-[#059669] to-[#10b981]"
                    },
                    {
                      title: "Budgeting Support",
                      description: "We assist in creating property-level and portfolio-level budgets within AppFolio based on history and market trends. This aids in more intelligent decision-making and accurate owner projections.",
                      icon: "📈",
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
                          <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-900 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our AppFolio Bookkeeping Services?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Comprehensive solutions designed specifically for AppFolio users
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "13+ Years AppFolio Experience",
                  description: "Extensive hands-on experience with hundreds of U.S. property management firms",
                  icon: "🏆",
                  color: "from-[#374151] to-[#4b5563]"
                },
                {
                  title: "End-to-End Virtual Services",
                  description: "Complete bookkeeping solutions customized specifically for AppFolio users",
                  icon: "🔄",
                  color: "from-[#06b6d4] to-[#0891b2]"
                },
                {
                  title: "Audit-Ready Books",
                  description: "U.S.-style reports, auditable ledgers, and compliance-ready records",
                  icon: "✅",
                  color: "from-[#059669] to-[#10b981]"
                },
                {
                  title: "All Property Types",
                  description: "Residential, commercial, HOA, and community association expertise",
                  icon: "🏢",
                  color: "from-[#3b82f6] to-[#1d4ed8]"
                },
                {
                  title: "Scalable Solutions",
                  description: "From 50 doors to 10,000+ doors - we scale with your growth",
                  icon: "📈",
                  color: "from-purple-500 to-purple-700"
                },
                {
                  title: "Real-Time Operations",
                  description: "Work directly in your live AppFolio environment with complete transparency",
                  icon: "⚡",
                  color: "from-emerald-500 to-teal-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our AppFolio bookkeeping services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do you work directly inside our AppFolio account?",
                  answer: "Yes, we work directly in your live AppFolio environment, providing real-time updates and complete transparency."
                },
                {
                  question: "Are your staff trained in U.S. accounting procedures?",
                  answer: "Absolutely. Our staff is trained in U.S. GAAP, IRS regulations, and property management-specific processes."
                },
                {
                  question: "Do you assist with AppFolio software Setup and Migration?",
                  answer: "Yes. We help with data migration from other systems, chart of accounts setup and initial configuration to ensure a smooth transition into AppFolio."
                },
                {
                  question: "Can you manage multiple entities or properties in AppFolio?",
                  answer: "Yes, we can manage multi-entity operations using AppFolio's corporate-level accounting features, ensuring accurate reporting across all properties."
                },
                {
                  question: "How do you provide data confidentiality?",
                  answer: "We employ secured access protocols, NDAs, and cloud-based processes to maintain 100% data privacy and security."
                },
                {
                  question: "What is included in AppFolio accounting services?",
                  answer: "AppFolio accounting services typically include bank reconciliation, rent roll management, owner statements, accounts payable and receivable, general ledger maintenance, error clearance and monthly financial reporting."
                },
                {
                  question: "What if we require support for something other than AppFolio?",
                  answer: "We also integrate with Buildium, Propertyware, Rentvine, and QuickBooks. You can scale your services along with your growth."
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

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-700 to-[#30a659]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your AppFolio Investment?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with 13+ years AppFolio experts for comprehensive bookkeeping solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert AppFolio Help
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AppFolioBookkeepingPage
