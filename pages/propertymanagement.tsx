import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Helper function to toggle FAQ items
const toggleFAQ = (faqId: string, iconId: string) => {
  const content = document.getElementById(faqId);
  const icon = document.getElementById(iconId);
  
  if (content && icon) {
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.innerHTML = '▼';
    } else {
      content.classList.add('hidden');
      icon.innerHTML = '▶';
    }
  }
};

const PropertyManagement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Property Management Accounting Services | USA | Pacerline Outsourcing Service</title>
        <meta name="description" content="Expert property management accounting services for USA property managers, real estate investors. Trust accounting, rent roll management, vendor payments, owner statements." />
      </Head>

      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="hero-section relative bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 text-gray-800 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-spin"></div>
        </div>
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 inline-block px-6 py-3 bg-blue-100/50 backdrop-blur-lg rounded-full border border-green-400/30">
              <span className="text-green-600 text-sm font-semibold">🏢 PROPERTY MANAGEMENT SPECIALISTS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
              Property Management Accounting
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Are you in need of accurate and reliable bookkeeping services as a property manager or a real estate investor? Our property management bookkeeping services make you compliant along with organized, focused on development regardless of wherever you are positioned in the USA.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
              From monitoring rent roll, categorizing expenses, and obtaining bank reconciliations to accounting for security deposit cycles, producing monthly financial statements, and generating owners' statements, our experienced team does it all. Your financials will be up-to-date, audit ready, and intuitively connected to industry-leading programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Explore Our Services
                <span className="ml-2">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Book Free Consultation
                <span className="ml-2">📞</span>
              </a>
            </div>

            {/* Software Integration Badges */}
            <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200/50">
              <p className="text-sm text-gray-600 mb-4 font-semibold">INTEGRATED WITH INDUSTRY-LEADING SOFTWARE:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                <span className="px-4 py-2 bg-blue-100 rounded-full">AppFolio</span>
                <span className="px-4 py-2 bg-green-100 rounded-full">Buildium</span>
                <span className="px-4 py-2 bg-blue-100 rounded-full">PropertyWare</span>
                <span className="px-4 py-2 bg-green-100 rounded-full">TenantCloud</span>
                <span className="px-4 py-2 bg-blue-100 rounded-full">Rentec</span>
                <span className="px-4 py-2 bg-green-100 rounded-full">Rentvine</span>
                <span className="px-4 py-2 bg-blue-100 rounded-full">QuickBooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored Solutions for <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Every Property Type</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Being a multi-family property manager, a single family dwelling property manager, or a commercial building property manager, we present to you tailored U.S. real estate compliant bookkeeping solutions that fit your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-200 transform hover:-translate-y-3">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Multi-Family Properties</h3>
              </div>
              <p className="text-gray-700 text-center">
                Comprehensive accounting solutions for apartment complexes, condominiums, and multi-unit residential properties with complex tenant management needs.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200 transform hover:-translate-y-3">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Single Family Rentals</h3>
              </div>
              <p className="text-gray-700 text-center">
                Streamlined bookkeeping for single-family rental portfolios, vacation rentals, and individual investment properties with personalized owner reporting.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-200 transform hover:-translate-y-3">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🏬</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Commercial Buildings</h3>
              </div>
              <p className="text-gray-700 text-center">
                Advanced accounting for office buildings, retail spaces, and commercial properties including CAM reconciliations and complex lease structures.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We assist you in reducing anxiety through providing uncluttered docs, enhanced reports, and greater peace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Accounting Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Corporate Accounting */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl text-white">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Corporate Accounting</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our corporate bookkeeping for property management firms accommodates all financial activity at the firm level exactly. Management fees, application fees, and markup fees are all treated as revenues in the corporate book.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Bank transactions are correctly accounted for in the corporate books</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Operating bank accounts reconciled monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Clean books and clarity for tax and legal accounting needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Adherence to accounting standards for expanding companies</span>
                </li>
              </ul>
            </div>

            {/* Trust Accounting */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl text-white">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600">Trust Accounting</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are experts in providing property management bookkeeping services for Real Estate and Property management firms in the USA and Canada. We deliver accurate and compliant trust accounting.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Handling tenant ledgers and posting rents including Section 8 payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Complete move-in/move-out process management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Detailed monthly owner statements and bank reconciliations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>3-way reconciliation and 1099 generation & filing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Property Management <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide back-office support to U.S.-based property management businesses. From tenant ledgers to 1099 filing, we do the accounting and admin-so you can concentrate on business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Up Portfolio, Property, Tenant & Vendor</h3>
              <p className="text-gray-700 leading-relaxed">
                Our specialists automate the implementation of new properties, tenants, vendors, and buildings into platforms such as AppFolio, Buildium, Propertyware, and others. We maintain accurate and consistent data entry, laying the groundwork for efficient, scalable property operations.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tenant Ledger Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                We update tenant ledgers by posting rent, late charges, Section 8 subsidies, utility bills, credits, and adjustments. Our accurate bookkeeping minimizes payment mistakes and enables property managers to collect more efficiently while remaining compliant.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Common Area Maintenance (CAM) Reconciliation</h3>
              <p className="text-gray-700 leading-relaxed">
                We conduct thorough CAM reconciliations to assist property managers in recovering shared costs fairly and accurately. Our staff computes tenant-specific charges using lease terms, square footage, and expense categories like landscaping, cleaning, snow removal, and security.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lease Creation & Tenant Updates</h3>
              <p className="text-gray-700 leading-relaxed">
                We handle lease creation, renewals, and updates of tenant information in your choice of software. Our experts double-check rent schedules, contact information, and lease conditions, ensuring you are organized and in compliance with U.S. rental law.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accounts Payable: Vendor Bill Entry & Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                We input vendor invoices, send them for approval, add markups as necessary, and monitor payment status. This service eliminates late fees, strengthens vendor relations, and ensures your AP process keeps moving.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Owner Statement Generation & Ledger Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                We produce accurate and compliant owner statements, showing correct income and expenses and distributions. Each report is supported by an appropriately maintained ledger, showing complete financial transparency for your clients.
              </p>
            </div>

            {/* Service 7 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recording & Reconciliation of Bank Transactions</h3>
              <p className="text-gray-700 leading-relaxed">
                We post deposits, payments, and adjustments, and then reconcile your bank accounts every month. Our U.S.-centered bank reconciliation process allows your books to agree with your statements—catching errors, duplicates, or omissions before they become significant.
              </p>
            </div>

            {/* Service 8 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Card Reconciliation</h3>
              <p className="text-gray-700 leading-relaxed">
                We handle full credit card reconciliation for property management companies, ensuring every expense is accurately matched to the correct property, vendor, and GL account. Our team reviews card statements, verifies receipts, categorizes transactions, and flags any discrepancies.
              </p>
            </div>

            {/* Service 9 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Move-In & Move-Out Processing</h3>
              <p className="text-gray-700 leading-relaxed">
                From lease signing and deposits to tenant offboarding and last billing, we handle all admin steps of move-ins and move-outs. Our support reduces vacancy time and keeps your records clean and audit-ready.
              </p>
            </div>

            {/* Service 10 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Property Budgeting Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We assist in property budget preparation on a historical trend, income forecast, and expenditure planning basis. Such reports enable owner presentations as well as your adherence to fiscal goals throughout the year.
              </p>
            </div>

            {/* Service 11 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payroll Services for Property Staff</h3>
              <p className="text-gray-700 leading-relaxed">
                We process payroll for office staff, maintenance workers and leasing agents. Services include calculations of wages, tax withholding, check distribution, and reporting. Be in compliance with U.S. payroll regulations and decrease HR headaches.
              </p>
            </div>

            {/* Service 12 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic Reports & Error Clearance</h3>
              <p className="text-gray-700 leading-relaxed">
                We perform audits to locate mis entries, duplicates, or compliance problems in your property management software. Our cleanup will smoothly guide you through system changes or prepare you for year-end audits.
              </p>
            </div>

            {/* Service 13 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work Order Closing, Invoicing & Mark-Up Application</h3>
              <p className="text-gray-700 leading-relaxed">
                We close finished work orders, enter vendor invoices, and attach approved mark-up fees. All charges are recorded and associated with the correct property and GL code, allowing for clean expense tracking and owner billing.
              </p>
            </div>

            {/* Service 14 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Report Generation (P&L, Balance Sheet, Custom Reports)</h3>
              <p className="text-gray-700 leading-relaxed">
                We produce audit-ready reports such as Profit & Loss, Balance Sheet, Trial Balance, and custom monthly or quarterly reports. Ideal for U.S. landlords, investors, and HOAs requiring clear, professional financial information.
              </p>
            </div>

            {/* Service 15 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Support and Communication</h3>
              <p className="text-gray-700 leading-relaxed">
                Pacerline will serve as the primary point of contact in accounting for owners, property managers, and vendors that offer fiscal information to drive property operations. Pacerline will assist in automating processes within accounting in collaboration with the management.
              </p>
            </div>

            {/* Service 16 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Ledger Management & Month-End Close</h3>
              <p className="text-gray-700 leading-relaxed">
                We balance your general ledger with care—posting and categorizing all of your financial activity in your properties. Our team verifies that each debit, credit, and journal entry posts correctly, adhering to your chart of accounts and GL coding conventions.
              </p>
            </div>

            {/* Service 17 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg">📄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IRS 1099 Reporting & Filing</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect W-9, generate 1099 (NEC/MISC), and submit to the IRS for all qualified vendors. Our year-end service saves U.S. property managers from penalties and remains tax compliant—without the headache.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why U.S. Property Managers <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">13+ Years Experience</h3>
              <p className="text-gray-600">13+ years of U.S. real estate accounting experience with proven track record.</p>
            </div>
            
            <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Software Knowledge</h3>
              <p className="text-gray-600">AppFolio, Buildium, Propertyware, Rentvine, and other expert software knowledge.</p>
            </div>
            
            <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audit-Ready Books</h3>
              <p className="text-gray-600">Accurate, timely, and audit-ready bookkeeping that meets all compliance standards.</p>
            </div>
            
            <div className="text-center group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Support</h3>
              <p className="text-gray-600">Cost-effective, expandable support for residential and commercial portfolios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-1', 'icon-1')}
              >
                <div className="flex items-center">
                  <span id="icon-1" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">1. What is property management bookkeeping?</h3>
                </div>
              </button>
              <div id="faq-1" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Property management bookkeeping is the tracking of all financial activity on rental properties, such as rent received, payment to vendors, owner disbursements, bank reconciliations, and financial reports. It keeps your real estate enterprise financially in order and compliant with the IRS.</p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-2', 'icon-2')}
              >
                <div className="flex items-center">
                  <span id="icon-2" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">2. Why should I outsource bookkeeping for property management?</h3>
                </div>
              </button>
              <div id="faq-2" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Outsourcing saves time, minimizes overhead, and maximizes accuracy. A professional firm like Pacerline Outsourcing Service Pvt Ltd offers expert assistance using property management software like AppFolio, Buildium, Propertyware, and others—enabling you to concentrate on expanding your business.</p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-3', 'icon-3')}
              >
                <div className="flex items-center">
                  <span id="icon-3" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">3. What property management software do you support?</h3>
                </div>
              </button>
              <div id="faq-3" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">We have hands-on experience with the leading platforms such as Buildium, AppFolio, Propertyware, Rentvine, TenantCloud, Rentec Direct, and QuickBooks. We adapt our bookkeeping services to match the platform that you use.</p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-4', 'icon-4')}
              >
                <div className="flex items-center">
                  <span id="icon-4" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">4. How seasoned is your staff?</h3>
                </div>
              </button>
              <div id="faq-4" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">We have more than 13 years of experience providing property management accounting services to U.S.-based property managers, landlords, and real estate investors. We are seasoned professionals with expertise in managing portfolios of as few as 10 units or as many as more than 5,000.</p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-5', 'icon-5')}
              >
                <div className="flex items-center">
                  <span id="icon-5" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">5. What property management bookkeeping services do you provide?</h3>
                </div>
              </button>
              <div id="faq-5" className="px-6 pb-6 hidden">
                <div className="text-gray-700 ml-8">
                  <p className="mb-3 leading-relaxed">We provide the complete spectrum of property accounting services, including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tracking tenant rent & ledger maintenance</li>
                    <li>Entering vendor invoices & payments (Accounts Payable)</li>
                    <li>Bank reconciliations & transaction posting</li>
                    <li>Credit Card reconciliation</li>
                    <li>Owner statement reports</li>
                    <li>Move-in/move-out accounting</li>
                    <li>Budgeting & CAM reconciliations</li>
                    <li>Monthly close & journal entries</li>
                    <li>Financial reports (Balance sheet, Income statement)</li>
                    <li>1099 reporting and IRS submissions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-6', 'icon-6')}
              >
                <div className="flex items-center">
                  <span id="icon-6" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">6. Do you provide 1099 vendor reporting and IRS filings?</h3>
                </div>
              </button>
              <div id="faq-6" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Yes. We collect W-9, prepare 1099s, and file electronically with the IRS to achieve timely and accurate year-end reporting.</p>
              </div>
            </div>
            
            {/* FAQ Item 7 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-7', 'icon-7')}
              >
                <div className="flex items-center">
                  <span id="icon-7" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">7. How much does your property management bookkeeping service cost?</h3>
                </div>
              </button>
              <div id="faq-7" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Our rates are adjustable, depending on the number of units, software utilized, and scope of service. We have affordable monthly plans that are much less than maintaining an in-house accountant.</p>
              </div>
            </div>
            
            {/* FAQ Item 8 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-8', 'icon-8')}
              >
                <div className="flex items-center">
                  <span id="icon-8" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">8. Am I behind on bookkeeping?</h3>
                </div>
              </button>
              <div id="faq-8" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Absolutely. We have expertise in bookkeeping cleanup, bringing months or even years of delinquent entries, reconciliations, and reporting up to current.</p>
              </div>
            </div>
            
            {/* FAQ Item 9 */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ('faq-9', 'icon-9')}
              >
                <div className="flex items-center">
                  <span id="icon-9" className="text-blue-600 font-bold text-xl mr-4">▶</span>
                  <h3 className="text-lg font-semibold text-gray-900">9. Where do I begin?</h3>
                </div>
              </button>
              <div id="faq-9" className="px-6 pb-6 hidden">
                <p className="text-gray-700 leading-relaxed ml-8">Simply click [Contact Us] or [Book a Free Consultation], and we will guide you through setup, review your objectives, and create a tailored bookkeeping plan for your property management business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Streamline Your Property Management Accounting?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Pacerline can help optimize your property management operations, reduce costs, and accelerate your business growth with professional bookkeeping services.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="mr-2">📞</span>
              Contact Us
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">📅</span>
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PropertyManagement
