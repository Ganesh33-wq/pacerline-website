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
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Buildium</span> 
                <br />Property Management Services
              </h1>
              <div className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto mb-12 leading-relaxed space-y-6">
                <p>
                  Streamline Your Property Management Operations with Expert Buildium Support. At <strong>Pacerline Outsourcing</strong>, we offer specialized accounting and administrative services in Buildium software, helping U.S.-based property management companies operate efficiently, accurately, and profitably.
                </p>
                <p>
                  With over <strong>14 years of experience</strong> in property management accounting, our team understands the unique demands of your business and leverages Buildium's powerful features to simplify your workload.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Expert Buildium Support
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
              
              {/* Key Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted Buildium Experts</h2>
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
                      <div className="text-3xl font-bold mb-2">17K+</div>
                      <div className="font-semibold">US Firms</div>
                      <div className="text-sm opacity-90">Trust Buildium</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="font-semibold">GAAP Compliant</div>
                      <div className="text-sm opacity-90">Accounting Standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Full-Service Buildium Bookkeeping
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                Our bookkeeping team certified in Buildium performs within your software—so you retain control while we handle the details.
              </p>
              <div className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white p-6 rounded-2xl max-w-4xl mx-auto">
                <p className="text-lg font-semibold">
                  By integrating Buildium's automation with our accounting professionalism, we provide accurate, audit-ready books with less stress and more confidence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Setup of properties, tenants & vendors",
                "Move-in and move-out processing", 
                "Lease creation and renewals",
                "Tracking of payments (rent, utilities, fees)",
                "Owner distributions",
                "Bank reconciliations",
                "Financial reports",
                "Budget and forecasting",
                "CAM reconciliation",
                "IRS 1099 reporting"
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="font-semibold text-gray-900">{service}</p>
                </div>
              ))}
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
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Buildium + Expert Support = Peace of Mind
              </h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
                We don't only know Buildium—we specialize in it. At Pacerline Outsourcing, we provide Buildium bookkeeping and back-office accounting services to assist you with:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Accurate tenant ledgers",
                "Posting and reconciling rent payments",
                "Entering vendor bills and tracking expenses", 
                "Producing timely owner statements",
                "Creating monthly and year-end financials",
                "Filing 1099s on time",
                "Customizing reports according to your requirements",
                "Complete portfolio management"
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="font-semibold">{service}</p>
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
