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
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium</span> 
                <br />Accounting Services
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed space-y-6">
                <p>
                  <strong>Pacerline Outsourcing Service Pvt Ltd</strong> providing expert Back-Office Bookkeeping Support to U.S. Property Management Firms and Real Estate companies.
                </p>
                <p className="text-2xl font-bold text-[#092870]">
                  Maximize Your Buildium Investment with Expert Bookkeeping Support
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Expert Buildium Bookkeeping
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted Buildium Bookkeeping Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">14+</div>
                      <div className="font-semibold">Years Experience</div>
                      <div className="text-sm opacity-90">Buildium Expertise</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100+</div>
                      <div className="font-semibold">US Clients</div>
                      <div className="text-sm opacity-90">Successfully Served</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">18</div>
                      <div className="font-semibold">Services</div>
                      <div className="text-sm opacity-90">Comprehensive Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Buildium Software */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Expert Buildium Bookkeeping Support
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  The software Buildium is a cloud-based property management system that's widely used across the U.S. to manage rentals, tenants, accounts, and maintenance. But the real worth of Buildium is experienced when the accounting side is looked after by experts who are well familiar with the system.
                </p>
                <p>
                  With <strong>Pacerline Outsourcing Service Pvt Ltd</strong>, you get 14 years of real-world experience with Buildium for hundreds of U.S.-based clients. Our professional team offers full-service virtual accounting and bookkeeping to your company with tailored to your operation and portfolio.
                </p>
                <div className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white p-6 rounded-2xl">
                  <p className="text-lg font-semibold">
                    We assist you in streamlining your back office while maintaining compliance, accuracy and real-time financial transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who We Serve
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                From 50 to 5,000 units, our crew becomes a seamless extension of your workflow and evolves with your growing business.
              </p>
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
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Full-Service Buildium Accounting Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Here's what we do for you inside Buildium - 18 comprehensive services to streamline your property management operations:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Buildium Software Onboarding and Setup",
                  description: "We offer a seamless Buildium implementation and onboarding process, including account setup, chart of accounts setup, entry of property information, and staff training.",
                  icon: "🚀",
                  color: "from-[#092870] to-indigo-600",
                  number: "1"
                },
                {
                  title: "Buildium Software Migration",
                  description: "Our expert team conduct effortless data migration from your existing software to the Buildium software. We migrate lease information, owner, vendors and tenant data, financial data and historical transactions safely.",
                  icon: "🔄",
                  color: "from-[#30a659] to-emerald-600",
                  number: "2"
                },
                {
                  title: "Tenant Ledger Management",
                  description: "We manage tenant ledgers in Buildium with high accuracy. We will update charges, payments, credits, and late fees in tenant ledger ensuring timely collections and reduces disputes.",
                  icon: "📊",
                  color: "from-indigo-500 to-purple-600",
                  number: "3"
                },
                {
                  title: "Lease Entries and Updates",
                  description: "Our team accurately enters and edits lease information in Buildium, including lease start and end dates, rent details, deposit amounts, and renewal modifications.",
                  icon: "📝",
                  color: "from-emerald-500 to-teal-600",
                  number: "4"
                },
                {
                  title: "Maintenance Bills and Work Order Closure",
                  description: "We are quick to process maintenance invoices and close work orders in Buildium with mark up fee. We monitor each maintenance request from vendor invoice entry through to approval.",
                  icon: "🔧",
                  color: "from-purple-500 to-pink-600",
                  number: "5"
                },
                {
                  title: "Utility Bills Entering",
                  description: "We charge each unit or property's utility expense in Buildium to accurately allocate and report. We make the entry process easy to ensure your operating expenses are current.",
                  icon: "⚡",
                  color: "from-cyan-500 to-blue-600",
                  number: "6"
                },
                {
                  title: "Owner Statement and Contribution",
                  description: "We prepare and distribute precise owner reports to each owners. We will cross check the accuracy of reporting property income, expenses, and distributions.",
                  icon: "📋",
                  color: "from-[#092870] to-indigo-600",
                  number: "7"
                },
                {
                  title: "Bank Reconciliation",
                  description: "We perform monthly bank reconciliations in Buildium software so that all transactions balance with your bank statements. Discrepancies are resolved expeditiously.",
                  icon: "🏦",
                  color: "from-[#30a659] to-emerald-600",
                  number: "8"
                },
                {
                  title: "Credit Card Reconciliation",
                  description: "We reconcile Buildium entries and credit card transactions to track accurate expenses and statement matching. Our staff looks out for missing charges, errors, or duplicates.",
                  icon: "💳",
                  color: "from-indigo-500 to-purple-600",
                  number: "9"
                },
                {
                  title: "3-Way Reconciliation",
                  description: "We perform 3-way reconciliation process in the Buildium software. We make sure to reconciling your bank balance, trust ledger and your property balances properly.",
                  icon: "⚖️",
                  color: "from-emerald-500 to-teal-600",
                  number: "10"
                },
                {
                  title: "Move-In Process",
                  description: "We organize the whole move-in process within the Buildium software. We will do the lease activation and deposit reporting through to tenant portal setup and rent scheduling.",
                  icon: "🔑",
                  color: "from-purple-500 to-pink-600",
                  number: "11"
                },
                {
                  title: "Move-Out Process",
                  description: "We manage the move-out process efficiently in Buildium software, including end rent fees, pro rate rent charge, review inspection report, deposit return and tenant status changes.",
                  icon: "📦",
                  color: "from-cyan-500 to-blue-600",
                  number: "12"
                },
                {
                  title: "Common Area Maintenance (CAM) Reconciliation",
                  description: "Our professional team calculate the CAM charges and reconcile in Buildium, comparing actual costs with tenant payments ensuring accurate expense allocations.",
                  icon: "🏢",
                  color: "from-[#092870] to-indigo-600",
                  number: "13"
                },
                {
                  title: "General Ledger and Month-End Close",
                  description: "Our professional team maintain a clean general ledger and manage the month-end close process in Buildium. All entries are reviewed, adjusted, and finalized.",
                  icon: "📈",
                  color: "from-[#30a659] to-emerald-600",
                  number: "14"
                },
                {
                  title: "Budgeting and Forecasting",
                  description: "We promote annual and ongoing budgeting and forecasting in Buildium. Our service allows property managers to project future income and control expenses.",
                  icon: "📊",
                  color: "from-indigo-500 to-purple-600",
                  number: "15"
                },
                {
                  title: "Review and Error Clean-Up",
                  description: "We review General leger to find and fix entry mistakes, duplicates, or inconsistencies. This clean-up gives you solid ledgers and reliable reports.",
                  icon: "🔍",
                  color: "from-emerald-500 to-teal-600",
                  number: "16"
                },
                {
                  title: "Financial Reports",
                  description: "We prepare and examine tailored financial reports in Buildium software, including income statements, balance sheets, and owner statements with precision and promptness.",
                  icon: "📊",
                  color: "from-purple-500 to-pink-600",
                  number: "17"
                },
                {
                  title: "IRS 1099 Filings and Compliance",
                  description: "We accurately prepare and file 1099s for vendors and property owners in Buildium, making timely IRS submissions with TIN verification and compliance checks.",
                  icon: "📄",
                  color: "from-cyan-500 to-blue-600",
                  number: "18"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-4`}>
                      {service.icon}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{service.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Buildium Services */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Why Choose Our Buildium Bookkeeping Services?
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Professional expertise with proven results for hundreds of U.S.-based property management companies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "14+ Years Buildium Experience",
                  description: "Extensive real-world experience working exclusively with Buildium software for U.S. clients, mastering all aspects of the system.",
                  icon: "⭐"
                },
                {
                  title: "Full System Access & Transparency",
                  description: "You maintain complete access to your Buildium account while we work seamlessly within your system for full transparency.",
                  icon: "👁️"
                },
                {
                  title: "Complete Setup & Migration Support",
                  description: "Full Buildium onboarding including property setup, tenant migration, vendor setup, and custom chart of accounts configuration.",
                  icon: "🚀"
                },
                {
                  title: "Accurate Financial Reporting",
                  description: "Timely and precise owner statements, P&L reports, balance sheets, and all financial documentation beautifully formatted.",
                  icon: "📊"
                },
                {
                  title: "IRS Compliance & 1099 Filing",
                  description: "Expert preparation and filing of all required vendor 1099s through Buildium, ensuring full U.S. tax code compliance.",
                  icon: "📋"
                },
                {
                  title: "Multi-Property Type Support",
                  description: "Specialized bookkeeping for residential, commercial, HOA, and mixed-use properties with tailored solutions for each type.",
                  icon: "🏢"
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
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-700 to-[#30a659]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Maximize Your Buildium Investment?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our Buildium experts handle your bookkeeping while you focus on growing your property management business. Get 14+ years of expertise working for you with professional, accurate, and compliant accounting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Expert Buildium Bookkeeping
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

export default BuildiumBookkeepingPage
