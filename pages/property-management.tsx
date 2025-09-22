import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const PropertyManagementPage = () => {
  const toggleFAQ = (index: number) => {
    const element = document.getElementById(`faq-${index}`)
    const icon = document.getElementById(`icon-${index}`)
    
    if (element && icon) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden')
        element.classList.add('block')
        icon.textContent = '▼'
      } else {
        element.classList.add('hidden')
        element.classList.remove('block')
        icon.textContent = '▶'
      }
    }
  }

  useEffect(() => {
    // Ensure all FAQs start closed
    setTimeout(() => {
      for (let i = 0; i < 9; i++) {
        const element = document.getElementById(`faq-${i}`)
        const icon = document.getElementById(`icon-${i}`)
        if (element && icon) {
          element.classList.add('hidden')
          element.classList.remove('block')
          icon.textContent = '▶'
        }
      }
    }, 100)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Property Management Accounting Services | USA | Pacerline Outsourcing Service</title>
        <meta name="description" content="Expert property management accounting services for USA property managers, real estate investors. Trust accounting, rent roll management, vendor payments, owner statements." />
        <meta name="keywords" content="property management accounting, property management bookkeeping, trust accounting, rent roll, real estate accounting, property accounting services" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl animate-ping"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block px-6 py-3 bg-blue-100/50 backdrop-blur-lg rounded-full border border-green-400/30">
              <span className="text-green-600 text-sm font-semibold">🏢 PROPERTY MANAGEMENT SPECIALISTS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
              Property Management Accounting
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Accurate and reliable bookkeeping services for property managers and real estate investors 
              across the USA with expert software integration and compliance focus
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Explore Our Services
                <span className="ml-2">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <span className="ml-2">📞</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Property Management <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Bookkeeping</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you in need of accurate and reliable bookkeeping services as a property manager or a real estate investor? 
                Our property management bookkeeping services make you compliant along with organized, focused on development 
                regardless of wherever you are positioned in the USA.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From monitoring rent roll, categorizing expenses, and obtaining bank reconciliations to accounting for security 
                deposit cycles, producing monthly financial statements, and generating owners' statements, our experienced team 
                does it all. Your financials will be up-to-date, audit ready, and intuitively connected to industry-leading programs.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
                  <div className="text-blue-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">400+</div>
                  <div className="text-green-600 font-medium">Active Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl p-8 border border-green-200/30">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Integration</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🏢</div>
                    <h4 className="text-sm font-semibold text-blue-600">AppFolio</h4>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🏗️</div>
                    <h4 className="text-sm font-semibold text-green-600">Buildium</h4>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🏠</div>
                    <h4 className="text-sm font-semibold text-blue-600">PropertyWare</h4>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="text-sm font-semibold text-green-600">QuickBooks</h4>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">🔧</div>
                    <h4 className="text-sm font-semibold text-blue-600">Rentvine</h4>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-md">
                    <div className="text-2xl mb-2">☁️</div>
                    <h4 className="text-sm font-semibold text-green-600">TenantCloud</h4>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 mt-4 text-sm">
                  Integrated with all major property management platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive accounting solutions tailored for property management businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Management Accounting */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Property Management Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Rent Roll Management</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Tenant Ledger Maintenance</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Security Deposit Tracking</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Monthly Financial Statements</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Owner Statement Generation</li>
              </ul>
            </div>

            {/* Corporate Accounting */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💼</span>
                </div>
                <h3 className="text-xl font-bold text-green-600">Corporate Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Management Fees Recording</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Application Fees Tracking</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Mark-up Fees Management</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Operating Bank Reconciliation</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Tax & Legal Compliance</li>
              </ul>
            </div>

            {/* Trust Accounting */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Trust Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Section 8 Payments</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>3-Way Reconciliation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Move-In/Move-Out Processing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>1099 Filing & Compliance</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Audit-Ready Records</li>
              </ul>
            </div>
          </div>

          {/* Detailed Service Descriptions */}
          <div className="mt-16 space-y-12">
            {/* Property Management Accounting Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Property Management Accounting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Being a multi-family property manager, a single family dwelling property manager, or a commercial building property manager, 
                we present to you tailored U.S. real estate compliant bookkeeping solutions that fit your business goals. 
                We assist you in reducing anxiety through providing uncluttered docs, enhanced reports, and greater peace.
              </p>
            </div>

            {/* Corporate Accounting Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Corporate Accounting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our corporate bookkeeping for property management firms accommodates all financial activity at the firm level exactly. 
                Management fees, application fees, and markup fees are all treated as revenues in the corporate book. Bank transactions 
                are correctly accounted for in the corporate books. Operating bank accounts are reconciled on a monthly basis so that 
                all deposits and withdrawals are seen to reflect bank activity. This provides that expanding property management companies 
                have clean books and clarity for tax and legal accounting needs, thus adhering to accounting standards.
              </p>
            </div>

            {/* Trust Accounting Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Trust Accounting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are experts in providing property management bookkeeping services for Real Estate and Property management firms in the USA and Canada. 
                We deliver accurate and compliant trust accounting. Our services involve handling tenant ledgers and posting rents such as Section 8 payments, 
                late charges, and utility and maintenance charges. We handle the entire move-in/move-out process within the software. Our staff generates 
                detailed monthly owner statements and conducts bank reconciliations along with the 3-way reconciliation to ensure proper accounting of 
                trust accounts. We handle compliance by generating and filing 1099s at year end. Trust our professional services for maintained and 
                audit-ready records as you redirect focus on building a property management business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Property Management <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide back-office support to U.S.-based property management businesses. From tenant ledgers to 1099 filing, 
              we do the accounting and admin-so you can concentrate on business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Set Up Portfolio, Property, Tenant & Vendor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our specialists automate the implementation of new properties, tenants, vendors, and buildings into platforms 
                    such as AppFolio, Buildium, Propertyware, and others. We maintain accurate and consistent data entry, laying 
                    the groundwork for efficient, scalable property operations throughout your portfolio.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Tenant Ledger Maintenance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We update tenant ledgers by posting rent, late charges, Section 8 subsidies, utility bills, credits, and adjustments. 
                    Our accurate bookkeeping minimizes payment mistakes and enables property managers to collect more efficiently while remaining compliant.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Common Area Maintenance (CAM) Reconciliation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct thorough CAM reconciliations to assist property managers in recovering shared costs fairly and accurately. 
                    Our staff computes tenant-specific charges using lease terms, square footage, and expense categories like landscaping, 
                    cleaning, snow removal, and security.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Lease Creation & Tenant Updates</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We handle lease creation, renewals, and updates of tenant information in your choice of software. Our experts 
                    double-check rent schedules, contact information, and lease conditions, ensuring you are organized and in compliance 
                    with U.S. rental law.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Accounts Payable: Vendor Bill Entry & Payment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We input vendor invoices, send them for approval, add markups as necessary, and monitor payment status. 
                    This service eliminates late fees, strengthens vendor relations, and ensures your AP process keeps moving.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Owner Statement Generation & Ledger Maintenance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We produce accurate and compliant owner statements, showing correct income and expenses and distributions. 
                    Each report is supported by an appropriately maintained ledger, showing complete financial transparency for your clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 7 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Recording & Reconciliation of Bank Transactions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We post deposits, payments, and adjustments, and then reconcile your bank accounts every month. Our U.S.-centered 
                    bank reconciliation process allows your books to agree with your statements—catching errors, duplicates, or omissions 
                    before they become significant.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 8 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">8</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Credit Card Reconciliation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We handle full credit card reconciliation for property management companies, ensuring every expense is accurately 
                    matched to the correct property, vendor, and GL account. Our team reviews card statements, verifies receipts, 
                    categorizes transactions, and flags any discrepancies or unauthorized charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 9 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">9</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Move-In & Move-Out Processing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    From lease signing and deposits to tenant offboarding and last billing, we handle all admin steps of move-ins 
                    and move-outs. Our support reduces vacancy time and keeps your records clean and audit-ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 10 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">10</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Property Budgeting Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We assist in property budget preparation on a historical trend, income forecast, and expenditure planning basis. 
                    Such reports enable owner presentations as well as your adherence to fiscal goals throughout the year.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 11 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">11</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Payroll Services for Property Staff</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We process payroll for office staff, maintenance workers and leasing agents. Services include calculations of wages, 
                    tax withholding, check distribution, and reporting. Be in compliance with U.S. payroll regulations and decrease HR headaches.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 12 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">12</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Diagnostic Reports & Error Clearance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We perform audits to locate mis entries, duplicates, or compliance problems in your property management software. 
                    Our cleanup will smoothly guide you through system changes or prepare you for year-end audits.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 13 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">13</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Work Order Closing, Invoicing & Mark-Up Application</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We close finished work orders, enter vendor invoices, and attach approved mark-up fees. All charges are recorded 
                    and associated with the correct property and GL code, allowing for clean expense tracking and owner billing.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 14 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">14</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Financial Report Generation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We produce audit-ready reports such as Profit & Loss, Balance Sheet, Trial Balance, and custom monthly or quarterly reports. 
                    Ideal for U.S. landlords, investors, and HOAs requiring clear, professional financial information.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 15 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">15</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Financial Support and Communication</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pacerline will serve as the primary point of contact in accounting for owners, property managers, and vendors that 
                    offer fiscal information to drive property operations. Pacerline will assist in automating processes within accounting 
                    in collaboration with the management to optimize efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 16 */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">16</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">General Ledger Management & Month-End Close</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We balance your general ledger with care—posting and categorizing all of your financial activity in your properties. 
                    At month-end, we reconcile all of your accounts, tie out your subledgers, and make your books ready for financial reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 17 */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">17</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">IRS 1099 Reporting & Filing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect W-9, generate 1099 (NEC/MISC), and submit to the IRS for all qualified vendors. Our year-end service 
                    saves U.S. property managers from penalties and remains tax compliant—without the headache.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why U.S. Property Managers <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">13+ Years Experience</h3>
              <p className="text-gray-700">U.S. real estate accounting experience with proven track record</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Expert Software Knowledge</h3>
              <p className="text-gray-700">AppFolio, Buildium, Propertyware, Rentvine expertise</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✅</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Accurate & Audit-Ready</h3>
              <p className="text-gray-700">Timely, accurate, and audit-ready bookkeeping services</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Cost-Effective Support</h3>
              <p className="text-gray-700">Scalable support for residential and commercial portfolios</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our property management accounting services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is property management bookkeeping?",
                answer: "Property management bookkeeping is the tracking of all financial activity on rental properties, such as rent received, payment to vendors, owner disbursements, bank reconciliations, and financial reports. It keeps your real estate enterprise financially in order and compliant with the IRS."
              },
              {
                question: "Why should I outsource bookkeeping for property management?",
                answer: "Outsourcing saves time, minimizes overhead, and maximizes accuracy. A professional firm like Pacerline Outsourcing Service Pvt Ltd offers expert assistance using property management software like AppFolio, Buildium, Propertyware, and others—enabling you to concentrate on expanding your business."
              },
              {
                question: "What property management software do you support?",
                answer: "We have hands-on experience with the leading platforms such as Buildium, AppFolio, Propertyware, Rentvine, TenantCloud, Rentec Direct, and QuickBooks. We adapt our bookkeeping services to match the platform that you use."
              },
              {
                question: "How seasoned is your staff?",
                answer: "We have more than 13 years of experience providing property management accounting services to U.S.-based property managers, landlords, and real estate investors. We are seasoned professionals with expertise in managing portfolios of as few as 10 units or as many as more than 5,000."
              },
              {
                question: "What property management bookkeeping services do you provide?",
                answer: "We provide the complete spectrum of property accounting services, including: • Tracking tenant rent & ledger maintenance • Entering vendor invoices & payments (Accounts Payable) • Bank reconciliations & transaction posting • Credit Card reconciliation • Owner statement reports • Move-in/move-out accounting • Budgeting & CAM reconciliations • Monthly close & journal entries • Financial reports (Balance sheet, Income statement) • 1099 reporting and IRS submissions"
              },
              {
                question: "Do you provide 1099 vendor reporting and IRS filings?",
                answer: "Yes. We collect W-9, prepare 1099s, and file electronically with the IRS to achieve timely and accurate year-end reporting."
              },
              {
                question: "How much does your property management bookkeeping service cost?",
                answer: "Our rates are adjustable, depending on the number of units, software utilized, and scope of service. We have affordable monthly plans that are much less than maintaining an in-house accountant."
              },
              {
                question: "Can you help if I'm behind on bookkeeping?",
                answer: "Absolutely. We have expertise in bookkeeping cleanup, bringing months or even years of delinquent entries, reconciliations, and reporting up to current."
              },
              {
                question: "Where do I begin?",
                answer: "Simply click [Contact Us] or [Book a Free Consultation], and we will guide you through setup, review your objectives, and create a tailored bookkeeping plan for your property management business."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:border-green-400 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center w-full">
                    <span 
                      id={`icon-${index}`}
                      className="text-green-500 font-bold text-xl mr-4 group-hover:scale-110 transition-transform duration-200"
                    >
                      ▶
                    </span>
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{faq.question}</span>
                  </div>
                </button>
                <div id={`faq-${index}`} className="hidden px-8 pb-6 border-t border-blue-100">
                  <div className="pl-12 pt-4 text-gray-700 leading-relaxed">
                    {index === 4 ? (
                      <div>
                        <p className="mb-4">We provide the complete spectrum of property accounting services, including:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Tracking tenant rent & ledger maintenance</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Entering vendor invoices & payments (Accounts Payable)</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Bank reconciliations & transaction posting</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Credit Card reconciliation</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Owner statement reports</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Move-in/move-out accounting</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Budgeting & CAM reconciliations</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Monthly close & journal entries</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Financial reports (Balance sheet, Income statement)</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">•</span>1099 reporting and IRS submissions</li>
                        </ul>
                      </div>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Still have questions about our property management services?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Our Property Management Experts
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Property Management Accounting?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of U.S. property managers who trust Pacerline for their accounting needs. 
            Let us handle the books while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
              <span className="ml-2">📞</span>
            </a>
            <a href="mailto:info@pacerlineoutsourcing.com" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Email Us Now
              <span className="ml-2">✉️</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PropertyManagementPage
