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
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
                Expert <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Australian</span> 
                <br />Accounting & Tax Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                Comprehensive accounting, bookkeeping, and tax solutions for Australian businesses. 
                We are ATO-registered agents specializing in Australian tax legislation, GST compliance, 
                BAS preparation, SMSF management, and all major accounting platforms including MYOB, 
                Xero, and QuickBooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="bg-gradient-to-r from-[#092870] to-indigo-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Get Free ATO Consultation
                </button>
                <button className="border-2 border-[#092870] text-[#092870] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#092870] hover:text-white transition-all duration-300">
                  View Australian Services
                </button>
              </div>
              
              {/* Key Australian Certifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fully Certified Australian Tax Professionals</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇦🇺</div>
                      <div className="font-semibold">ATO Registered</div>
                      <div className="text-sm opacity-90">Tax & BAS Agents</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-[#30a659] to-emerald-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📋</div>
                      <div className="font-semibold">MYOB & Xero</div>
                      <div className="text-sm opacity-90">Certified Partners</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white">
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚖️</div>
                      <div className="font-semibold">SMSF Specialists</div>
                      <div className="text-sm opacity-90">Audit & Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
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
                  {['Accounting Services', 'Bookkeeping Services', 'Tax Services', 'SMSF Services', 'Audit Services'].map((tab, index) => (
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
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">1. Our Accounting Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Financial Reporting",
                      description: "Preparing and analyzing financial reports to be accurate and in accordance with International Financial Reporting Standards (IFRS) and relevant financial reporting framework including: 1. Verifying proper accounting policies applied and accounting estimates and associated disclosures 2. Verifying presentation, structure and content of the financial report, including disclosures, and whether or not the financial report portrays the underlying transactions and events in a way that achieves fair presentation.",
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
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
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

            {/* Bookkeeping Services Tab */}
            {activeTab === 1 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">2. Our Bookkeeping Services</h3>
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

            {/* Tax Services Tab */}
            {activeTab === 2 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">3. Our Australian Business Services</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Tax Preparation and Filing",
                      description: "Preparing and lodging tax returns for individuals, sole traders, partnerships, companies, and trusts. Maintaining accuracy in reporting income, deductions, and other financial information in accordance with Australian Taxation Office (ATO) requirements.",
                      icon: "📋",
                      color: "from-cyan-500 to-blue-600"
                    },
                    {
                      title: "Business Activity Statements (BAS)",
                      description: "Preparing and filing BAS for companies, including GST computation and reporting. Maintaining Goods and Services Tax (GST), Pay-As-You-Go (PAYG) withholding, and other ATO compliance.",
                      icon: "📄",
                      color: "from-blue-500 to-indigo-600"
                    },
                    {
                      title: "Tax Compliance",
                      description: "Staying abreast of updates in Australian tax legislation to maintain clients' compliance. Identifying and resolving issues with taxation, including underpayment or overpayment.",
                      icon: "✅",
                      color: "from-indigo-500 to-purple-600"
                    },
                    {
                      title: "Financial Reporting",
                      description: "Preparing financial reports related to taxation, like profit and loss accounts, to give an idea about a business's financial status.",
                      icon: "📊",
                      color: "from-purple-500 to-pink-600"
                    },
                    {
                      title: "Record Keeping",
                      description: "Making sure clients keep adequate financial records for tax purposes, including invoices, receipts, and other documents. Assisting with organizing and checking financial documents to make tax procedures simpler.",
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
                          <p className="text-gray-700">{service.description}</p>
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
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">4. Our SMSF (Self-Managed Super Funds) Services</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "SMSF Setup and Registration",
                      description: "Assisting new SMSF trustees in setting up the fund correctly with the Australian Taxation Office (ATO) and the Australian Securities and Investments Commission (ASIC). Helping with trust deeds, deed changes, and essential documentation.",
                      icon: "🏗️",
                      color: "from-emerald-500 to-green-600"
                    },
                    {
                      title: "Investment Strategy Development",
                      description: "Helping trustees develop and maintain an investment strategy that meets their retirement goals and complies with superannuation legislation.",
                      icon: "📈",
                      color: "from-green-500 to-[#30a659]"
                    },
                    {
                      title: "Annual Compliance Services",
                      description: "Ensuring SMSF meets all legal and regulatory requirements, including annual return preparation, audit coordination, and ATO reporting.",
                      icon: "✅",
                      color: "from-[#30a659] to-emerald-600"
                    },
                    {
                      title: "Accounting and Record Keeping",
                      description: "Maintaining accurate financial records, preparing financial statements, and handling all bookkeeping requirements for the SMSF.",
                      icon: "📚",
                      color: "from-teal-500 to-cyan-600"
                    },
                    {
                      title: "Member Benefit Payments",
                      description: "Managing transition to retirement pensions, lump sum payments, and ensuring compliance with preservation and benefit payment rules.",
                      icon: "💰",
                      color: "from-cyan-500 to-blue-600"
                    }
                  ].map((service, index) => (
                    <div key={index} className="p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl">
                      <div className="flex items-start mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mr-6`}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audit Services Tab */}
            {activeTab === 4 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">6. Our Audit Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "External Audits",
                      description: "Conducting independent audits to ensure financial statements are accurate and comply with Australian Accounting Standards and Corporations Act requirements.",
                      icon: "🔍"
                    },
                    {
                      title: "SMSF Audits",
                      description: "Specialized audits for Self-Managed Super Funds to ensure compliance with superannuation laws and regulations.",
                      icon: "📋"
                    },
                    {
                      title: "Internal Audit Services",
                      description: "Helping organizations improve their internal controls, risk management, and operational efficiency through comprehensive internal audits.",
                      icon: "⚙️"
                    },
                    {
                      title: "Due Diligence Reviews",
                      description: "Providing thorough financial due diligence services for mergers, acquisitions, and investment decisions.",
                      icon: "📊"
                    },
                    {
                      title: "Compliance Audits",
                      description: "Ensuring your business complies with relevant laws, regulations, and industry standards through specialized compliance auditing.",
                      icon: "✅"
                    },
                    {
                      title: "Forensic Auditing",
                      description: "Investigating financial irregularities, fraud detection, and providing litigation support when needed.",
                      icon: "🔒"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl mr-4 flex-shrink-0">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our Australian Accounting Services?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Specialized expertise in Australian taxation, compliance, and financial regulations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ATO Registered Agents",
                  description: "Fully registered tax and BAS agents with deep understanding of Australian tax legislation",
                  icon: "🎯"
                },
                {
                  title: "Local Australian Knowledge",
                  description: "Expert understanding of Australian business environment, regulations, and compliance requirements",
                  icon: "🇦🇺"
                },
                {
                  title: "Comprehensive Software Integration",
                  description: "Proficient in MYOB, Xero, QuickBooks, and other Australian accounting platforms",
                  icon: "💻"
                },
                {
                  title: "Proactive Compliance Management",
                  description: "Stay ahead of ATO deadlines and regulatory changes with our proactive approach",
                  icon: "⏰"
                },
                {
                  title: "Cost-Effective Solutions",
                  description: "Competitive pricing with transparent fees and no hidden costs for Australian businesses",
                  icon: "💰"
                },
                {
                  title: "Personalized Service",
                  description: "Dedicated account managers who understand your business and Australian market dynamics",
                  icon: "👥"
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
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Australian accounting and tax services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Are you registered BAS agents with the ATO?",
                  answer: "Yes, we are fully registered BAS agents with the Australian Taxation Office. This registration allows us to legally prepare and lodge Business Activity Statements, GST returns, and provide tax agent services for Australian businesses and individuals."
                },
                {
                  question: "What accounting software do you support?",
                  answer: "We are proficient in all major Australian accounting platforms including MYOB, Xero, QuickBooks, Sage, and Reckon. We can help you choose the right software for your business and provide training and ongoing support."
                },
                {
                  question: "Do you handle SMSF compliance and audits?",
                  answer: "Yes, we provide comprehensive SMSF services including setup, annual compliance, financial statement preparation, and audit coordination. Our team understands the complex regulations governing self-managed super funds in Australia."
                },
                {
                  question: "Can you help with ATO audits and disputes?",
                  answer: "Absolutely. We provide full ATO representation services, including audit defense, dispute resolution, penalty reduction negotiations, and payment plan arrangements. Our experienced team will handle all communications with the ATO on your behalf."
                },
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with all types of Australian entities including sole traders, partnerships, companies, trusts, and not-for-profit organizations. Our services are scalable from small startups to large corporations across all industries."
                },
                {
                  question: "How do you ensure compliance with Australian tax laws?",
                  answer: "Our team stays current with all ATO updates, legislative changes, and compliance requirements. We use systematic processes, regular reviews, and proactive communication to ensure all clients remain compliant with Australian tax obligations."
                },
                {
                  question: "Do you provide monthly or quarterly reporting?",
                  answer: "Yes, we offer flexible reporting schedules including monthly, quarterly, and annual financial reports. We can customize our reporting to match your business needs and provide regular BAS lodgements and management reports."
                },
                {
                  question: "What are your fees for Australian accounting services?",
                  answer: "Our fees are competitive and transparent with no hidden costs. We offer fixed-fee packages for regular services like BAS preparation and annual returns, as well as hourly rates for project-based work. Contact us for a customized quote based on your specific needs."
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
