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
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">AppFolio</span> 
                <br />Bookkeeping Service
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed space-y-6">
                <p>
                  <strong>Expert AppFolio bookkeeping support</strong> that maximizes your property management software investment. With specialized expertise, ongoing data management, and precise financial procedures tailored specifically for AppFolio users.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get AppFolio Bookkeeping Help
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted AppFolio Bookkeeping Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">13+</div>
                      <div className="font-semibold">Years Experience</div>
                      <div className="text-sm opacity-90">AppFolio Expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100+</div>
                      <div className="font-semibold">US Companies</div>
                      <div className="text-sm opacity-90">Served Successfully</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">10K+</div>
                      <div className="font-semibold">Properties</div>
                      <div className="text-sm opacity-90">Under Management</div>
                    </div>
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

        {/* Who We Help Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who We Help
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                We cater to firms of all scales—startups with 50 doors to large-scale managers having 10,000+ doors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Property Management Companies",
                  subtitle: "(Residential & Commercial)",
                  description: "Complete bookkeeping solutions for professional property management firms",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Real Estate Investors & Landlords",
                  subtitle: "Portfolio Management",
                  description: "Streamlined accounting for individual and portfolio investors",
                  icon: "💼",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "HOA and Community Managers",
                  subtitle: "Association Management",
                  description: "Specialized bookkeeping for homeowner associations and communities",
                  icon: "🏘️",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Real Estate Asset Managers",
                  subtitle: "Investment Management",
                  description: "Professional asset management accounting and reporting",
                  icon: "📊",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "AppFolio Users",
                  subtitle: "From Other Platforms",
                  description: "Seamless migration and setup support for new AppFolio users",
                  icon: "🔄",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "All Scale Operations",
                  subtitle: "50 to 10,000+ Doors",
                  description: "Scalable solutions for businesses of every size",
                  icon: "📈",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((client, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{client.title}</h3>
                  <p className="text-sm font-semibold text-[#092870] mb-3">{client.subtitle}</p>
                  <p className="text-gray-700">{client.description}</p>
                </div>
              ))}
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

            <div className="text-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg inline-block">
                <div className="flex flex-wrap justify-center gap-2">
                  {['Setup & Migration', 'Daily Operations', 'Financial Management', 'Reporting & Compliance'].map((tab, index) => (
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

            {/* Setup & Migration Tab */}
            {activeTab === 0 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Setup & Migration Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Operations Tab */}
            {activeTab === 1 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Daily Operations Management</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Tenant Ledger Management",
                      description: "We keep tenant ledgers up to date by posting rent payments, late charges, Section 8 subsidies, utility charges, security deposits, and additional charges. We have good knowledge to post a credit in the tenant ledger. We will setup late fee as an auto charge in the tenant ledger if the rent payment delayed. We also reconcile move-out balances and deposits, keeping you accurate and compliant.",
                      icon: "📋",
                      color: "from-[#30a659] to-emerald-600"
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
                      color: "from-[#092870] to-indigo-600"
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
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Financial Management Tab */}
            {activeTab === 2 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Financial Management & Reconciliation</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Bank Reconciliation",
                      description: "We will help you to sync bank accounts with AppFolio. It helps to save time for bank reconciliation. If you do not want to sync the bank account then we download and post transactions from bank feeds, apply them to the correct accounts, and complete monthly reconciliations. You'll always know your books match your bank balances.",
                      icon: "🏦",
                      color: "from-[#092870] to-indigo-600"
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
                      color: "from-[#30a659] to-emerald-600"
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
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reporting & Compliance Tab */}
            {activeTab === 3 && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Reporting & Compliance Services</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Owner Statements & Ledger Maintenance",
                      description: "We create and deliver monthly or quarterly owner statements. Every report contains income, expenses, distributions, and contributions-tied to a completely reconciled general ledger.",
                      icon: "📋",
                      color: "from-[#092870] to-indigo-600"
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
                      color: "from-[#30a659] to-emerald-600"
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
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our AppFolio Bookkeeping Services?
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Comprehensive solutions designed specifically for AppFolio users
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "13+ Years AppFolio Experience",
                  description: "Extensive hands-on experience with hundreds of U.S. property management firms",
                  icon: "🏆"
                },
                {
                  title: "End-to-End Virtual Services",
                  description: "Complete bookkeeping solutions customized specifically for AppFolio users",
                  icon: "🔄"
                },
                {
                  title: "Audit-Ready Books",
                  description: "U.S.-style reports, auditable ledgers, and compliance-ready records",
                  icon: "✅"
                },
                {
                  title: "All Property Types",
                  description: "Residential, commercial, HOA, and community association expertise",
                  icon: "🏢"
                },
                {
                  title: "Scalable Solutions",
                  description: "From 50 doors to 10,000+ doors - we scale with your growth",
                  icon: "📈"
                },
                {
                  title: "Real-Time Operations",
                  description: "Work directly in your live AppFolio environment with complete transparency",
                  icon: "⚡"
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
