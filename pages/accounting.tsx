import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const AccountingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Accounting Services | USA & Australia | Pacerline Outsourcing Service</title>
        <meta name="description" content="Professional accounting services for USA and Australia businesses. Property management accounting, bookkeeping, tax compliance, financial reporting. 10+ years experience." />
        <meta name="keywords" content="accounting services, bookkeeping, tax preparation, property management accounting, USA accounting, Australia accounting, financial reporting" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-xl animate-ping"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block px-6 py-3 bg-blue-100/50 backdrop-blur-lg rounded-full border border-green-400/30">
              <span className="text-green-600 text-sm font-semibold">💼 PROFESSIONAL ACCOUNTING SERVICES</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
              Accounting Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Timely and precise financial data for thriving businesses across USA and Australia
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
                Why <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting</span> Matters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In today's accelerated business world, timely and precise financial data are the keys to a thriving business. 
                Whether you are a small business owner, a large corporation, or a property manager, having a proper accounting 
                system is necessary to remain compliant with local laws and achieve long-term financial success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is where <strong>Pacerline Outsourcing Service Pvt Ltd</strong> comes in to help. As a reputable accounting 
                services company, we provide American and Australian businesses with comprehensive solutions encompassing everything 
                from bookkeeping to tax compliance and financial reporting.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-blue-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-green-600 font-medium">Cost Savings</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl p-8 border border-green-200/30">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Promise</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center group hover:bg-white rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Dependable & Accurate</span>
                  </div>
                  
                  <div className="flex items-center group hover:bg-white rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">💻</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Technologically Advanced</span>
                  </div>
                  
                  <div className="flex items-center group hover:bg-white rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">💰</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Cost-Effective Solutions</span>
                  </div>
                  
                  <div className="flex items-center group hover:bg-white rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">🛡️</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Complete Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our All-Inclusive Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our All-Inclusive <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We specialize in a broad range of services that meet the distinctive needs of United States and Australian businesses, 
              with each detail of your financial activity handled with great care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-5xl"></span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Property Management Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center text-base"><span className="text-green-500 mr-3 text-lg">📚</span>Property Bookkeeping</li>
                <li className="flex items-center text-base"><span className="text-green-500 mr-3 text-lg">🏘️</span>Rent Roll Management</li>
                <li className="flex items-center text-base"><span className="text-green-500 mr-3 text-lg">🔧</span>Maintenance Accounting</li>
                <li className="flex items-center text-base"><span className="text-green-500 mr-3 text-lg">📊</span>Property Financial Reports</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">US Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center text-base"><span className="text-red-500 mr-3 text-lg">�</span>US Tax Preparation</li>
                <li className="flex items-center text-base"><span className="text-red-500 mr-3 text-lg">�</span>IRS Compliance</li>
                <li className="flex items-center text-base"><span className="text-red-500 mr-3 text-lg">�</span>US GAAP Standards</li>
                <li className="flex items-center text-base"><span className="text-red-500 mr-3 text-lg">🏦</span>Federal & State Filings</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Australian Accounting</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center text-base"><span className="text-green-600 mr-3 text-lg">📊</span>AASB Standards</li>
                <li className="flex items-center text-base"><span className="text-green-600 mr-3 text-lg">🏛️</span>ATO Compliance</li>
                <li className="flex items-center text-base"><span className="text-green-600 mr-3 text-lg">💰</span>GST & BAS Returns</li>
                <li className="flex items-center text-base"><span className="text-green-600 mr-3 text-lg">�</span>ASIC Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Accounting Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 text-sm font-semibold">🏢 PROPERTY MANAGEMENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Property Management <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We have expertise in property management accounting solutions specifically designed to meet the specific needs 
              of property managers, property management firms, real estate investors/firms, and homeowners associations (HOAs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">🏘️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Rent Roll Management</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We provide accurate rent roll management services to record tenant payments, late charges, and deposits. 
                Our team maintains accurate reconciliation of the rent collections and prepayments, providing transparency 
                to tenant ledgers and allowing you to efficiently manage your properties.
              </p>
            </div>

            {/* Property Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">🏦</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Trust Account Reconciliation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reconciliation of trust accounts is at the heart of property management. We reconcile all trust accounts 
                under state-based regulation and ATO, REI, and Fair Trading compliance schemes.
              </p>
            </div>

            {/* Property Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📄</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Owner & Tenant Statements</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We offer interactive, editable month-end statements to owners and tenants. Our statements can be segmented 
                by property, unit, or portfolio and give owners and tenants detailed and accurate financial summaries.
              </p>
            </div>

            {/* Property Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Accounts Receivable & Payable</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We process accounts receivable (reminder statements, tenant invoices) and accounts payable (maintenance charges, 
                vendor invoices, utility invoices), processing efficiently without much delay.
              </p>
            </div>

            {/* Property Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Bank Reconciliation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We reconcile bank reconciliations on a weekly, monthly, or daily basis for operating and trust bank accounts 
                to make sure that the records reconcile against the available cash and that all postings are in the books.
              </p>
            </div>

            {/* Property Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Budgeting & Financial Reporting</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our firm creates property-specific budgets, monitors capital expenditures (CapEx), and provides reporting 
                like profit/loss by property, delinquency reports, and cash flow summaries.
              </p>
            </div>
          </div>

          {/* Software Experience - Animated Scrolling */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 rounded-3xl p-8 border border-blue-200/30 shadow-xl overflow-hidden">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-blue-100/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200/50">
                <span className="text-blue-600 text-sm font-semibold">🏢 SOFTWARE EXPERTISE</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Property Management Software Experience
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We are well-versed at managing multiple property management software platforms that help us automate 
                accounting functions, monitor rental collections, and efficiently manage properties.
              </p>
            </div>
            
            {/* Animated Logo Carousel */}
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll-rtl">
                  {/* First set of logos */}
                  <div className="flex items-center space-x-8 px-4">
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-green-100/50">
                      <div className="bg-green-600 rounded-xl px-4 py-2 mb-2">
                        <span className="text-white font-bold text-sm">Buildium</span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">Software</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-cyan-100/50">
                      <div className="text-blue-600 font-bold text-xl mb-2">YARDI</div>
                      <span className="text-cyan-600 font-semibold text-sm">Platform</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-orange-100/50">
                      <img src="/images/logos/rent-manager.svg" alt="Rent Manager" className="h-10 w-auto mb-2" />
                      <span className="text-orange-600 font-semibold text-sm">Rent Manager</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-green-200/50">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl px-4 py-3 mb-2 shadow-md">
                        <div className="text-white font-bold text-sm text-center">
                          <div className="text-xs font-normal">INTUIT</div>
                          <div className="text-lg">QuickBooks</div>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">Accounting</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-emerald-100/50">
                      <img src="/images/logos/xero.svg" alt="Xero" className="h-12 w-auto mb-2" />
                      <span className="text-emerald-600 font-semibold text-sm">Xero</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-pink-100/50">
                      <img src="/images/logos/sage.svg" alt="Sage" className="h-12 w-auto mb-2" />
                      <span className="text-pink-600 font-semibold text-sm">Sage</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-rose-100/50">
                      <img src="/images/logos/tenant-cloud.svg" alt="TenantCloud" className="h-12 w-auto mb-2" />
                      <span className="text-rose-600 font-semibold text-sm">TenantCloud</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-purple-100/50">
                      <img src="/images/logos/realpage.svg" alt="RealPage" className="h-12 w-auto mb-2" />
                      <span className="text-purple-600 font-semibold text-sm">RealPage</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-teal-100/50">
                      <img src="/images/logos/avail.svg" alt="Avail" className="h-12 w-auto mb-2" />
                      <span className="text-teal-600 font-semibold text-sm">Avail</span>
                    </div>
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center space-x-8 px-4">
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-green-100/50">
                      <div className="bg-green-600 rounded-xl px-4 py-2 mb-2">
                        <span className="text-white font-bold text-sm">Buildium</span>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">Software</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-cyan-100/50">
                      <div className="text-blue-600 font-bold text-xl mb-2">YARDI</div>
                      <span className="text-cyan-600 font-semibold text-sm">Platform</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-orange-100/50">
                      <img src="/images/logos/rent-manager.svg" alt="Rent Manager" className="h-10 w-auto mb-2" />
                      <span className="text-orange-600 font-semibold text-sm">Rent Manager</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-green-200/50">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl px-4 py-3 mb-2 shadow-md">
                        <div className="text-white font-bold text-sm text-center">
                          <div className="text-xs font-normal">INTUIT</div>
                          <div className="text-lg">QuickBooks</div>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">Accounting</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-emerald-100/50">
                      <img src="/images/logos/xero.svg" alt="Xero" className="h-12 w-auto mb-2" />
                      <span className="text-emerald-600 font-semibold text-sm">Xero</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-pink-100/50">
                      <img src="/images/logos/sage.svg" alt="Sage" className="h-12 w-auto mb-2" />
                      <span className="text-pink-600 font-semibold text-sm">Sage</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-rose-100/50">
                      <img src="/images/logos/tenant-cloud.svg" alt="TenantCloud" className="h-12 w-auto mb-2" />
                      <span className="text-rose-600 font-semibold text-sm">TenantCloud</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-purple-100/50">
                      <img src="/images/logos/realpage.svg" alt="RealPage" className="h-12 w-auto mb-2" />
                      <span className="text-purple-600 font-semibold text-sm">RealPage</span>
                    </div>
                    
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 w-48 h-32 flex flex-col items-center justify-center border border-teal-100/50">
                      <img src="/images/logos/avail.svg" alt="Avail" className="h-12 w-auto mb-2" />
                      <span className="text-teal-600 font-semibold text-sm">Avail</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlays for smooth edges */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Custom CSS for animation */}
          <style jsx>{`
            @keyframes scroll-rtl {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-rtl {
              animation: scroll-rtl 30s linear infinite;
            }
            
            .animate-scroll-rtl:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* US Accounting Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 text-sm font-semibold">🇺🇸 USA SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              US <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our US Accounting Services range from bookkeeping and payroll solutions to sophisticated financial reporting 
              and tax compliance. We are committed to staying ahead of your financial needs while offering you real-time 
              awareness of your firm's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* US Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">�</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Bookkeeping & General Accounting</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We attend to your everyday transactions, such as posting income and expenses, bank reconciliations, and 
                general ledger upkeep. Our cloud accounting systems update your books in real time, providing you with 
                absolute control and visibility of your financial standing.
              </p>
            </div>

            {/* US Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">�</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Payroll Processing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We offer all forms of payroll processing stages, ranging from bi-weekly/monthly runs to payroll tax calculation 
                and filings. Our solution is in perfect compliance with state and federal tax legislation.
              </p>
            </div>

            {/* US Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">�</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Tax Preparation & Filing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We offer corporate and individual tax returns, sales tax preparation, estimated tax planning, and end-of-year 
                tax reconciliation. We ensure your company is taking all deductions while being fully compliant with IRS rules.
              </p>
            </div>

            {/* US Service 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Financial Reporting & Analysis</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Get thoughtful input on your business's financial performance with our detailed reports: Balance Sheets, 
                Profit and Loss Statements, Cash Flow Statements, and Management dashboards providing real-time information.
              </p>
            </div>

            {/* US Service 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Accounts Payable & Receivable</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We manage accounts payable and receivable for timely payments to vendors and proper monitoring of payments 
                received from customers. Includes payment follow-ups, invoice tracking, and aging reports.
              </p>
            </div>

            {/* US Service 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Budgeting & Forecasting</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our experts assist you in designing accurate and fact-driven budgets that suit your business objectives. 
                We provide customized budgeting and forecasting templates that serve as a guide to financial progress.
              </p>
            </div>
          </div>

          {/* US Software Expertise */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">US Software Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-blue-600">QuickBooks</h4>
                <p className="text-sm text-gray-600">Desktop & Online</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-green-600">Xero</h4>
                <p className="text-sm text-gray-600">Cloud Accounting</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">🌿</div>
                <h4 className="font-semibold text-blue-600">FreshBooks</h4>
                <p className="text-sm text-gray-600">Small Business</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="font-semibold text-green-600">Custom Solutions</h4>
                <p className="text-sm text-gray-600">Tailored Software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Australian Accounting Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-green-100 rounded-full mb-6">
              <span className="text-green-600 text-sm font-semibold">🇦🇺 AUSTRALIA SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Australian <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Accounting Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              For Australian companies, we provide customized accounting services that are AASB compliant and monitored by ATO. 
              With our services, Australian companies can make tax payments, keep up-to-date financial records, and stay in line 
              with domestic legislation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Australian Service 1 */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">BAS & GST Lodgement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We prepare and lodge Business Activity Statements (BAS) as per GST and lodge them in a timely manner and 
                in full compliance with the due dates of the Australian Taxation Office (ATO).
              </p>
            </div>

            {/* Australian Service 2 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Bookkeeping & Reconciliation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our Australian accounting solutions include everything from coding transactions through to reconciliations 
                to banks and credit cards. Our experts ensure that your accounts are accurate, lowering the chances of fines for errors.
              </p>
            </div>

            {/* Australian Service 3 */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Payroll & Superannuation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We guarantee that your payroll complies with Australian laws, such as Single Touch Payroll (STP), 
                PAYG withholding and reporting, superannuation contributions, and payment summaries annually.
              </p>
            </div>

            {/* Australian Service 4 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Tax & ATO Compliance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Services in Australia include income tax returns, Fringe Benefits Tax (FBT), PAYG instalments, and tax planning 
                and strategy. Our professionals ensure that your business complies with its taxation requirements.
              </p>
            </div>

            {/* Australian Service 5 */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-3">Financial Reporting & Analysis</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We provide full-scale, AASB-compliant financial statements: Balance Sheets, Income Statements, Cash Flow Projections, 
                monitoring KPIs and tailored reporting.
              </p>
            </div>

            {/* Australian Service 6 */}
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="text-center mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Accounts Payable & Receivable</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our AP/AR solutions optimize cash flow by streamlining reminders, following up on invoices, and payment schedules. 
                We assist in ensuring payments are collected on a timely basis and receivables properly tracked.
              </p>
            </div>
          </div>

          {/* Australian Software Expertise */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Australian Software Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-green-600">Xero</h4>
                <p className="text-sm text-gray-600">Cloud Accounting</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-semibold text-blue-600">MYOB</h4>
                <p className="text-sm text-gray-600">Business Management</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-green-600">Sage One</h4>
                <p className="text-sm text-gray-600">Small Business</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-semibold text-blue-600">QuickBooks AU</h4>
                <p className="text-sm text-gray-600">Australian Version</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pacerline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Pacerline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Outsourcing your accounting needs saves you time and money and brings it nearer to regulatory law. 
              Engaging the service of Pacerline Outsourcing Service Pvt Ltd exposes you to professional accounting 
              service without having to pay the bill of in-house personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Experience</h3>
              <p className="text-gray-700">More than a decade of experience in Australian and US accounting services</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Cost-Effective</h3>
              <p className="text-gray-700">Reduce up to 60% of your operation costs by outsourcing accounting</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Compliance</h3>
              <p className="text-gray-700">Complete compliance with AASB, ATO, US GAAP, and IRS laws</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Technology-Driven</h3>
              <p className="text-gray-700">Latest cloud-based technology to automate accounts and deliver real-time data</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-green-300/20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Reliable Accounting Partner</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              At Pacerline Outsourcing Service Pvt Ltd, we know that every business is different and distinct from the rest. 
              Our objective is to provide customized accounting services that will be appropriate to your own requirements and 
              ensure country law compliance. Whether you require bookkeeping services, payroll services, tax compliance, or 
              financial reporting, we can serve you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
                <span className="ml-2">→</span>
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Call Us Now
                <span className="ml-2">📞</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AccountingPage
