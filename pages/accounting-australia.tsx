import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function AccountingAustraliaPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section - Clean with Better Background Animations */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
          {/* Enhanced Background Animations */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Geometric Shapes Animation */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/25 to-emerald-300/15 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-200/20 to-blue-300/25 rounded-full animate-pulse animation-delay-3000"></div>
            
            {/* Floating Dots */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-2 h-2 bg-teal-500 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-bounce animation-delay-3000"></div>
            
            {/* Gradient Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/30 to-transparent animate-pulse animation-delay-2000"></div>
          </div>

          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-lg font-bold mb-8 shadow-lg">
                <span className="mr-3 text-2xl animate-pulse">🌟</span>
                Australia's Premier Accounting Excellence
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Professional</span>
                <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-gradient-x">
                  Australian
                </span>
                <span className="block text-gray-800">Accounting & Tax Services</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Empowering Australian businesses with expert financial guidance and compliance solutions
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative z-10">Get Free ATO Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-12 py-5 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  Explore Our Services
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
                  <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full mt-2 animate-pulse"></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Scroll to learn more</p>
              </div>
            </div>
          </div>

          {/* Custom Animations */}
          <style jsx>{`
            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(50px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
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
              animation: fade-in-up 1s ease-out;
            }
            
            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
            }
            
            .animation-delay-1000 {
              animation-delay: 1s;
            }
            
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            
            .animation-delay-3000 {
              animation-delay: 3s;
            }
            
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </section>

        {/* About Section with Content and Images */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-6">
                  🇦🇺 Expert Australian Accounting Services
                </div>
                
                <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
                  <p>
                    Are you an Australian small business owner, entrepreneur, contractor, or professional seeking professional accounting and tax assistance? You've come to the right location. At <strong>Pacerline Outsourcing Service Pvt Ltd</strong>, we provide high-quality Accounting and Tax Services in Australia that are customized for your business structure, industry and compliance needs.
                  </p>
                  <p>
                    Pacerline make sure to accurate financial reporting to timely BAS lodgments and tax returns, our experienced accountants are committed to helping Australian businesses stay compliant, minimise tax liability, and grow sustainably. If you're a tradie running a sole proprietorship or a professional services firm managing complex structures, then we're here to simplify your financial world.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Get Free ATO Consultation
                  </button>
                  <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                    View Australian Services
                  </button>
                </div>
              </div>

              {/* Right Side - Images/Visual Elements */}
              <div className="relative">
                <div className="relative">
                  {/* Main Image Placeholder */}
                  <div className="bg-gradient-to-br from-[#092870]/10 to-indigo-100 rounded-3xl p-8 shadow-xl">
                    <div className="text-center space-y-6">
                      <div className="text-6xl">🏢</div>
                      <h3 className="text-2xl font-bold text-gray-900">Australian Business Focus</h3>
                      <p className="text-gray-600">Specialized services for Australian businesses, compliance, and tax requirements</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl">🇦🇺</div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="text-3xl">📊</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Australian Certifications */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fully Certified Australian Tax Professionals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🇦🇺</div>
                    <div className="font-semibold text-gray-900">ATO Registered</div>
                    <div className="text-sm text-gray-600">Tax & BAS Agents</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📋</div>
                    <div className="font-semibold text-gray-900">MYOB & Xero</div>
                    <div className="text-sm text-gray-600">Certified Partners</div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <div className="font-semibold text-gray-900">SMSF Specialists</div>
                    <div className="text-sm text-gray-600">Audit & Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Accounting Matters Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Professional Accounting Matters for Your Australian Business
              </h2>
              <div className="max-w-5xl mx-auto text-lg text-gray-700 space-y-6">
                <p>
                  Accounting is not a just compliance, it is the key to business success. Bad money management and wrong bookkeeper leads expensive errors, lost deductions, and ATO penalties. Having Pacerline professional Australian accountant as a partner ensures that you receive strategic guidance, timely financial insight and peace of mind.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Remain ATO Compliant",
                  description: "Stay compliant with ATO reporting and Australian Accounting Standards (AAS)",
                  icon: "✅",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Stay Current with Filings",
                  description: "Keep up to date with tax returns, BAS, and PAYG filing",
                  icon: "📋",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Maximize Deductions",
                  description: "Reclaim all rightful deductions and lower your tax bill",
                  icon: "💰",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Enhance Profitability",
                  description: "Improve profitability and cash flow management",
                  icon: "📈",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Focus on Business",
                  description: "Concentrate on operating your business, not doing numbers",
                  icon: "🎯",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Strategic Guidance",
                  description: "Receive expert financial insights and business guidance",
                  icon: "🧭",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our End-to-End Solutions */}
        <section className="relative py-20 bg-gradient-to-r from-blue-100 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our End-to-End Accounting and Tax Solutions in Australia
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                We offer complete accounting and tax assistance, whether you are a sole trader, partnership, trust, company, or SMSF. We are well-versed in Australian tax legislation, industry compliance, and all large accounting packages such as MYOB, Xero, and QuickBooks.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg inline-block">
                <div className="flex flex-wrap justify-center gap-2">
                  {['Accounting Services', 'Bookkeeping Services', 'Australian Business Services', 'SMSF Services', 'SMSF Compliance Auditing', 'Australian Audit Services'].map((tab, index) => (
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

            {/* Accounting Services Tab */}
            {activeTab === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Accounting Services</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Financial Reporting",
                      description: "Preparing and analyzing financial reports to be accurate and in accordance with International Financial Reporting Standards (IFRS) and relevant financial reporting framework including:",
                      points: [
                        "Verifying proper accounting policies applied and accounting estimates and associated disclosures",
                        "Verifying presentation, structure and content of the financial report, including disclosures, and whether or not the financial report portrays the underlying transactions and events in a way that achieves fair presentation."
                      ],
                      icon: "📊"
                    },
                    {
                      title: "Auditing", 
                      description: "We conduct thorough internal and external audits to ensure your financial records are accurate, reliable, and compliant with the required reporting standards. Our audit process goes beyond just checking the numbers - we help identify gaps, strengthen controls, and uncover opportunities for improvement.",
                      icon: "🔍"
                    },
                    {
                      title: "Budgeting and Forecasting",
                      description: "Assisting businesses in budget planning and projecting future financial performance.",
                      icon: "📈"
                    },
                    {
                      title: "Payroll Management",
                      description: "Paying employees timely and accurately while handling deductions and benefits.",
                      icon: "💰"
                    },
                    {
                      title: "Forensic Accounting",
                      description: "Checking financial irregularities and preventing fraud.",
                      icon: "🔒"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mr-6">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700 mb-4">{service.description}</p>
                          {service.points && (
                            <ul className="space-y-2 text-gray-700">
                              {service.points.map((point, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-2 h-2 bg-[#092870] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookkeeping Services Tab */}
            {activeTab === 1 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Bookkeeping Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Recording Transactions",
                      description: "Maintaining proper records of every financial transaction, including purchases, sales, receipts, and payments, in the right ledgers or bookkeeping software.",
                      icon: "📝"
                    },
                    {
                      title: "Managing Accounts",
                      description: "Keeping asset, liability, income, and expense general ledgers to keep finances organized and current.",
                      icon: "📋"
                    },
                    {
                      title: "Reconciling Accounts",
                      description: "Periodic comparison of bank statements with in-house financial records to maintain consistency and accuracy.",
                      icon: "⚖️"
                    },
                    {
                      title: "Invoicing and Billing",
                      description: "Creating and delivering invoices to clients and pursuing payments due.",
                      icon: "📄"
                    },
                    {
                      title: "Payroll Processing",
                      description: "Helping with payroll by recording employee hours, calculating pay, and processing salaries.",
                      icon: "💼"
                    },
                    {
                      title: "Expense Tracking",
                      description: "Keeping track of company expenses and ensuring they are recorded and accounted for correctly.",
                      icon: "💳"
                    },
                    {
                      title: "Preparing Reports",
                      description: "Preparing basic financial reports, including profit and loss statements or cash flow reports, to offer a glimpse into the financial position of the company.",
                      icon: "📊"
                    },
                    {
                      title: "Compliance",
                      description: "Maintaining compliance with financial laws through keeping records according to tax laws and preparing documents required for filing taxes. Communicating with Accountants and supplying them with the detailed records they require for financial analysis and reporting.",
                      icon: "✅"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Australian Business Services Tab */}
            {activeTab === 2 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Australian Business Services</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Tax Preparation and Filing",
                      points: [
                        "Preparing and lodging tax returns for individuals, sole traders, partnerships, companies, and trusts.",
                        "Maintaining accuracy in reporting income, deductions, and other financial information in accordance with Australian Taxation Office (ATO) requirements."
                      ],
                      icon: "📋",
                      color: "from-cyan-500 to-blue-600"
                    },
                    {
                      title: "Business Activity Statements (BAS)",
                      points: [
                        "Preparing and filing BAS for companies, including GST computation and reporting.",
                        "Maintaining Goods and Services Tax (GST), Pay-As-You-Go (PAYG) withholding, and other ATO compliance."
                      ],
                      icon: "📄",
                      color: "from-blue-500 to-indigo-600"
                    },
                    {
                      title: "Tax Compliance",
                      points: [
                        "Staying abreast of updates in Australian tax legislation to maintain clients' compliance.",
                        "Identifying and resolving issues with taxation, including underpayment or overpayment."
                      ],
                      icon: "✅",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Financial Reporting",
                      points: [
                        "Preparing financial reports related to taxation, like profit and loss accounts, to give an idea about a business's financial status."
                      ],
                      icon: "📊",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Record Keeping",
                      points: [
                        "Making sure clients keep adequate financial records for tax purposes, including invoices, receipts, and other documents.",
                        "Assisting with organizing and checking financial documents to make tax procedures simpler."
                      ],
                      icon: "📁",
                      color: "from-pink-500 to-red-500"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl">
                      <div className="flex items-start mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <ul className="space-y-2 text-gray-700">
                            {service.points.map((point, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-2 h-2 bg-[#092870] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SMSF Services Tab */}
            {activeTab === 3 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Australian SMSF Accounting and Tax Preparation</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Financial Record-Keeping",
                      points: [
                        "Keeping correct financial records for the SMSF, including contributions, expenses, income, and investments.",
                        "Ensuring the records are in accordance with regulatory obligations."
                      ],
                      icon: "📚",
                      color: "from-emerald-500 to-green-600"
                    },
                    {
                      title: "Tax Compliance",
                      points: [
                        "Preparing and submitting the SMSF's tax return for the year with the Australian Taxation Office (ATO).",
                        "Overseeing tax liabilities, including capital gains tax (CGT), income tax, and Goods and Services Tax (GST) if relevant."
                      ],
                      icon: "📋",
                      color: "from-green-500 to-[#30a659]"
                    },
                    {
                      title: "Preparation of Financial Statements",
                      points: [
                        "Preparing financial statements annually, including balance sheets, income statements, and member statements.",
                        "Ensuring financial reporting under SMSF legislation and giving the trustees a clear view of how the fund is performing."
                      ],
                      icon: "📊",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "BAS Preparation and Lodgment",
                      points: [
                        "Preparation and lodgment of Business Activity Statements (where the SMSF is registered for GST)."
                      ],
                      icon: "📄",
                      color: "from-teal-500 to-cyan-600"
                    },
                    {
                      title: "Liaising with Auditors",
                      points: [
                        "Preparation of documents for the annual independent audit of the SMSF.",
                        "Working with auditors to streamline the review process and respond to any issues of compliance."
                      ],
                      icon: "🤝",
                      color: "from-cyan-500 to-blue-600"
                    },
                    {
                      title: "Contribution and Pension Management",
                      points: [
                        "Facilitating tracking of member contributions to maintain them within concessional and non-concessional limits.",
                        "Overseeing pension payments, such as calculation and documentation, to satisfy minimum pension needs."
                      ],
                      icon: "💰",
                      color: "from-blue-500 to-indigo-600"
                    },
                    {
                      title: "Investment Administration",
                      points: [
                        "Maintaining and monitoring SMSF investments according to the fund's investment strategy."
                      ],
                      icon: "📈",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Compliance Monitoring",
                      points: [
                        "Sustaining the fund to SIS Act rules and ATO policies.",
                        "Advising trustees about compliance concerns to avoid penalties."
                      ],
                      icon: "⚖️",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Liaising with Trustees",
                      points: [
                        "Regular communication with trustees to keep them informed, report, and advise.",
                        "Helping the trustees learn about their role and the financial condition of the fund."
                      ],
                      icon: "👥",
                      color: "from-pink-500 to-red-500"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl">
                      <div className="flex items-start mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-xl mr-4`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <ul className="space-y-2 text-gray-700">
                            {service.points.map((point, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="w-1.5 h-1.5 bg-[#092870] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SMSF Compliance Auditing Tab */}
            {activeTab === 4 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Australian SMSF Compliance Auditing</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Conducting Independent Audits",
                      points: [
                        "Conducting both financial and compliance audits to assess the SMSF's financial records and compliance with superannuation legislation.",
                        "Maintaining independence as demanded by professional standards and the Australian Securities and Investments Commission (ASIC)."
                      ],
                      icon: "🔍"
                    },
                    {
                      title: "Financial Audit",
                      points: [
                        "Checking the accuracy of financial statements, such as income, expenses, assets, and liabilities.",
                        "Verifying records against the trustee's duties under the trust deed of the fund."
                      ],
                      icon: "📊"
                    },
                    {
                      title: "Compliance Audit",
                      points: [
                        "Evaluating compliance by the SMSF with the Superannuation Industry (Supervision) Act 1993 (SIS Act) and the ATO rules.",
                        "Verifying breaches like transgression of contribution limits, misapplication of SMSF assets, or failure to follow the investment strategy."
                      ],
                      icon: "✅"
                    },
                    {
                      title: "Identifying Non-Compliance",
                      points: [
                        "Identifying and recording any occurrences of non-compliance or contraventions in operation or financial management.",
                        "Reporting contraventions to the SMSF trustee(s) and, as appropriate, lodging an Auditor Contravention Report (ACR) with the ATO."
                      ],
                      icon: "⚠️"
                    },
                    {
                      title: "Maintaining Fund Integrity",
                      points: [
                        "Checking that investments are in accordance with rules (e.g., restrictions on in-house assets and personal use).",
                        "Ensuring the fund complies with the sole purpose test, which aims to provide retirement benefits."
                      ],
                      icon: "🛡️"
                    },
                    {
                      title: "Documentation and Reporting",
                      points: [
                        "Conducting detailed audit reports of financial accuracy and compliance findings.",
                        "Identifying areas of risk and suggesting rectification."
                      ],
                      icon: "📋"
                    },
                    {
                      title: "Advisory Role",
                      points: [
                        "Advising on solving non-compliance issues in coordination with SMSF accountants or administrators.",
                        "Educating trustees on their responsibilities to prevent future breaches."
                      ],
                      icon: "💡"
                    },
                    {
                      title: "Maintaining Professional Standards",
                      points: [
                        "Staying up-to-date with changes in SMSF auditing standards, regulations, and reporting obligations."
                      ],
                      icon: "📚"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                          <ul className="space-y-1 text-gray-700">
                            {service.points.map((point, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Australian Audit Services Tab */}
            {activeTab === 5 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Australian Audit Services</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Financial Statement Auditing",
                      points: [
                        "The financial statements like balance sheets, income statements, and cash flow statements will review and check for accuracy",
                        "Compliance with Australian Accounting Standards (AAS) and International Financial Reporting Standards (IFRS)."
                      ],
                      icon: "📊"
                    },
                    {
                      title: "Compliance Auditing",
                      points: [
                        "Assessment of compliance with regulatory and statutory provisions, including those prescribed by the Australian Taxation Office (ATO) or the Australian Securities and Investments Commission (ASIC).",
                        "Monitoring internal controls to verify that they operate efficiently in the prevention of fraud or mismanagement."
                      ],
                      icon: "✅"
                    },
                    {
                      title: "Risk Assessment",
                      points: [
                        "Identifying financial and operational risks based on analysis and making suggestions for these risks to be addressed.",
                        "We will review and check the risk management practices of the company and suggest ways to improve them."
                      ],
                      icon: "⚠️"
                    },
                    {
                      title: "Tax Compliance",
                      points: [
                        "Verifying timely reporting of tax and compliance with Australian taxation laws.",
                        "Verification of correct calculation of GST, income tax, and other obligations."
                      ],
                      icon: "📋"
                    },
                    {
                      title: "Reporting",
                      points: [
                        "Performing thorough audit reports with findings and recommendations.",
                        "Reporting to the management team, board of directors, or stakeholders effectively on the audit findings."
                      ],
                      icon: "📄"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                          <ul className="space-y-1 text-gray-700">
                            {service.points.map((point, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                  <p className="text-lg">
                    From individual tax returns to complex corporate tax planning, we offer proactive year-round service to keep your tax liability as low as possible and prevent time-consuming compliance issues.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trusted Nationwide Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Trusted by Australian Businesses Nationwide
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Wherever you are located in Sydney, Melbourne, Brisbane, Perth, Adelaide, or a country town, we provide 100% remote accounting with cloud-based software, secure portals, and Australian business hours support. We are flexible, open, and professional making us a favourite among the professionals and small business owners in Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Why Our Services Stand Out */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#092870]/10 border border-[#092870]/20 text-[#092870] text-sm font-bold mb-6">
                ⭐ What Makes Us Different
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Our Australian Accounting Services Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the expertise and dedication that sets our accounting services apart in the Australian market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Registered Australian Tax Agents & BAS Agents",
                  description: "Our team is composed of skilled and qualified professionals who are registered with the Tax Practitioners Board (TPB), ensuring total compliance and professional guidance for all taxation matters.",
                  icon: "🎯",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Customized Solutions for Any Business Size",
                  description: "Whether your business earns $50k or $5M, we provide budget-friendly accounting packages that cater to your business needs and stage of development.",
                  icon: "📏",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Xero, MYOB, QuickBooks Certified Partners",
                  description: "We interface with all mainstream accounting software packages used by Australian businesses, so you receive timely financial data and plug-and-play with your systems.",
                  icon: "💻",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  title: "Fixed Fee Plans & Honest Pricing",
                  description: "No shocks! We offer fixed monthly plans, hourly pricing and honest pricing tailored to your business size, complexity, and requirements.",
                  icon: "💰",
                  color: "from-amber-500 to-orange-600"
                },
                {
                  title: "Proactive Tax Planning",
                  description: "We don't just stop at tax return lodging. We advise you year-round on future planning, optimizing your tax plan, and ensuring you only pay what you have to.",
                  icon: "📈",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Safe and Confidential",
                  description: "Your financial data is treated in strict confidence with the same level of standards applied by leading banks, through bank-level encryption, secure cloud platforms, and strict internal controls.",
                  icon: "🔒",
                  color: "from-red-500 to-pink-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Accounting Section */}
        <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-bold mb-6">
                ☁️ Modern Cloud Solutions
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Cloud Accounting for Australian Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                New companies demand new accounting. We help you move to or enhance your cloud accounting solution, such as setup, training, and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-time Dashboards",
                  description: "Access live financial data anytime, anywhere with comprehensive reporting and analytics that help you make informed business decisions.",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100"
                },
                {
                  title: "Automated Billing",
                  description: "Streamlined invoicing and payment processing with automated workflows that save time and reduce manual errors.",
                  color: "from-emerald-500 to-emerald-600", 
                  bgColor: "from-emerald-50 to-emerald-100"
                },
                {
                  title: "Mobile Convenience",
                  description: "Manage your finances on the go with mobile-optimized interfaces and secure access from any device, anywhere.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100"
                },
                {
                  title: "Secure Document Storage",
                  description: "Bank-level security for all your documents with encrypted storage, automatic backups, and controlled access permissions.",
                  color: "from-amber-500 to-amber-600",
                  bgColor: "from-amber-50 to-amber-100"
                }
              ].map((feature, index) => (
                <div key={index} className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call-to-Action */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your Accounting?</h3>
                <p className="text-gray-600 mb-6">
                  Let us help you transition to or optimize your cloud accounting setup with personalized training and ongoing support.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Cloud Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold mb-6">
                🤝 Our Partnership Approach
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                How We Work With You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined, hassle-free approach designed around your business goals and success.
              </p>
            </div>

            {/* Process Flow */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-purple-200 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  {
                    title: "Free Consultation",
                    description: "We discover your business needs, accounting concerns, and compliance position.",
                    icon: "💬",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100"
                  },
                  {
                    title: "Customised Proposal", 
                    description: "You'll receive a fixed-fee quote and service plan tailored to your industry, structure, and size.",
                    icon: "📋",
                    color: "from-emerald-500 to-emerald-600",
                    bgColor: "from-emerald-50 to-emerald-100"
                  },
                  {
                    title: "Onboarding & Setup",
                    description: "We collect your documents securely, connect to your accounting software, and establish reporting timelines.",
                    icon: "⚙️",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "from-purple-50 to-purple-100"
                  },
                  {
                    title: "Ongoing Service",
                    description: "Our professional team handles your day-to-day accounting process, BAS lodgements, payroll and end-of-year tax returns without fail.",
                    icon: "🔄",
                    color: "from-amber-500 to-amber-600",
                    bgColor: "from-amber-50 to-amber-100"
                  },
                  {
                    title: "Regular Check-Ins",
                    description: "We will remain current with quarterly or monthly reports, and benefit from year-round tax advice and compliance reminders.",
                    icon: "📊",
                    color: "from-teal-500 to-teal-600",
                    bgColor: "from-teal-50 to-teal-100"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    {/* Card */}
                    <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50 h-full flex flex-col`}>
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg`}>
                        {step.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                      </div>
                      
                      {/* Arrow for desktop */}
                      {index < 4 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Experience our seamless process and discover how we can transform your business accounting.
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                  Book Your Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                FAQs – Accounting & Tax Services Australia
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do you offer services to the clients in all Australian states and territories?",
                  answer: "Yes, we offer remote accounting services to the clients in every state and territory of Australia, including New South Wales, Victoria, Queensland, South Australia, Western Australia, Tasmania, ACT and NT."
                },
                {
                  question: "Are you a registered Tax Practitioners Board member?",
                  answer: "Yes, our accountants and tax agents are registered and qualified to provide ATO-compliant services."
                },
                {
                  question: "Can you assist with outstanding BAS or tax returns?",
                  answer: "Yes, we assist clients who are behind schedule with catch-up bookkeeping, BAS amendments and ATO negotiations."
                },
                {
                  question: "I am beginning my business. What should I do?",
                  answer: "We love helping startups! We'll guide you through ABN/GST registrations, accounting system setup and ongoing compliance."
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
              Ready to Streamline Your Australian Accounting?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert Australian accounting and tax services with ATO-registered professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
