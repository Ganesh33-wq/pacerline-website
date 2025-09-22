import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const services = [
    {
      title: 'U.S. Accounting Services',
      subtitle: 'GAAP & IRS COMPLIANT',
      description: 'Complete financial management following IRS regulations and GAAP by our Certified Public Accountants (CPAs) for all 50 states.',
      icon: '🇺🇸',
      features: ['General Bookkeeping', 'Accounts Payable/Receivable', 'Financial Reporting', 'Tax Preparation Services', 'Audit-Ready Records'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Australian Accounting Services', 
      subtitle: 'ATO COMPLIANT',
      description: 'Customized accounting solutions in accordance with Australian Taxation Office (ATO) regulations and local conventions.',
      icon: '🇦🇺',
      features: ['BAS and GST Reporting', 'Payroll Management', 'Financial Projections', 'Compliance Support', 'Cloud Accounting'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Property Management Accounting',
      subtitle: 'SPECIALIZED EXPERTISE',
      description: 'Accurate, compliant financial reporting for property managers and real estate companies with your preferred software.',
      icon: '🏠',
      features: ['Rent Roll Management', 'Bank Reconciliations', 'Owner Statements', 'Vendor Payments', '1099 Preparation'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'AppFolio Accounting Support',
      subtitle: 'COMPLETE INTEGRATION',
      description: 'Complete accounting and administrative support through the AppFolio system with specialized expertise.',
      icon: '⚙️',
      features: ['Transaction Coding', 'Tenant Ledger Management', 'Owner Reporting', 'Administrative Tasks', 'Real-time Integration'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Buildium Accounting Services',
      subtitle: 'SPECIALIZED SUPPORT', 
      description: 'One-to-one accounting and bookkeeping services with complete Buildium software integration.',
      icon: '🔧',
      features: ['Financial Record-keeping', 'Vendor Bill Tracking', 'Rent Roll Reporting', '1099 Preparation', 'Real-time Review'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'QuickBooks Accounting Services',
      subtitle: 'CUSTOMIZED SOLUTIONS',
      description: 'Customized QuickBooks solutions for real estate companies with complete setup and ongoing support.',
      icon: '�',
      features: ['Setup & Configuration', 'Bank Reconciliation', 'Financial Reporting', 'Software Integration', 'Tax-ready Financials'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Property Management Administrative Services',
      subtitle: 'BACK-OFFICE SUPPORT',
      description: 'Critical back-office processes so you can concentrate on tenant satisfaction and business expansion.',
      icon: '�',
      features: ['Tenant Screening', 'Lease Document Management', 'Maintenance Coordination', 'Compliance Management', 'Customer Support'],
      color: 'from-[#092870] to-[#30a659]'
    },
    {
      title: 'Virtual Assistant Services',
      subtitle: 'FLEXIBLE SUPPORT',
      description: 'Highly qualified professionals offering flexible, high-quality support according to your business requirements.',
      icon: '🤝',
      features: ['Calendar Management', 'Email Filtering', 'Customer Support', 'Data Entry', 'Back-Office Processing'],
      color: 'from-[#30a659] to-[#092870]'
    },
    {
      title: 'Digital Marketing Services',
      subtitle: 'ONLINE PRESENCE',
      description: 'Targeted, performance-based strategies to help you stand out from the crowd in the competitive digital space.',
      icon: '📱',
      features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Marketing', 'Content Marketing', 'Website Development', 'Lead Generation'],
      color: 'from-blue-500 to-[#092870]'
    },
  ]

  const features = [
    {
      title: 'Industry Expertise & Experience',
      subtitle: 'Over 13 Years of Excellence',
      description: 'More than 13 years of specialized service to real estate investors, property management companies, and small businesses with proven track record.',
      icon: '🏆',
      image: '/images/about/tool1.png'
    },
    {
      title: 'Global Reach, Local Focus',
      subtitle: 'Worldwide Service Coverage',
      description: 'Serving customers across the U.S., Australia, and globally while dealing with local laws, regulations, and time zones for seamless operations.',
      icon: '🌍',
      image: '/images/about/tool2.png'
    },
    {
      title: 'Technology-Based Solutions',
      subtitle: 'Advanced Platform Integration',
      description: 'Experienced in handling platforms like AppFolio, Buildium, QuickBooks, Xero, and MYOB with cutting-edge technology solutions.',
      icon: '💻',
      image: '/images/about/tool3.png'
    },
    {
      title: 'Dedicated Professional Teams',
      subtitle: 'Trained & Certified Experts',
      description: 'Our team members are professionally trained to integrate into your workflow and provide consistent, high-quality output with continuous support.',
      icon: '�',
      image: '/images/about/tool4.png'
    },
    {
      title: 'Affordable & Scalable Services',
      subtitle: 'Cost-Effective Solutions',
      description: 'Top quality outsourcing at a fraction of the cost of internal personnel, with solutions that grow with your business from startup to enterprise.',
      icon: '💰',
      image: '/images/about/tool5.png'
    },
    {
      title: 'Data Security & Compliance',
      subtitle: 'Robust Protection Standards',
      description: 'Strong protection of your financial and operational data with compliance to Australian and U.S. legislation and industry standards.',
      icon: '�',
      image: '/images/about/tool1.png'
    }
  ]

  const globalReach = [
    { country: 'USA', flag: '🇺🇸', clients: '200+' },
    { country: 'UK', flag: '🇬🇧', clients: '150+' },
    { country: 'Canada', flag: '🇨🇦', clients: '100+' },
    { country: 'Australia', flag: '🇦🇺', clients: '75+' }
  ]

  return (
    <Layout>
      <Head>
        <title>Pacerline Outsourcing Services | Property Management Accounting, Bookkeeping & Digital Marketing | USA, Australia</title>
        <meta name="description" content="🌟 Trusted outsourcing partner with 13+ years experience. Property management accounting, AppFolio/Buildium expertise, virtual assistants, digital marketing. Serving USA, Australia & worldwide. Free consultation!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* SEO Meta Tags */}
        <meta name="keywords" content="pacerline outsourcing, property management accounting, AppFolio bookkeeping, Buildium administration, real estate accounting, virtual assistant services, digital marketing, USA accounting services, Australian accounting services, QuickBooks accounting, property management software, 13 years experience" />
        <meta name="author" content="Pacerline Outsourcing Services Pvt. Ltd." />
        
        {/* Open Graph Protocol */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pacerline Outsourcing Services | 13+ Years Experience | USA & Australia" />
        <meta property="og:description" content="🌟 Trusted partner for property management accounting, bookkeeping, virtual assistants & digital marketing. Expert in AppFolio, Buildium, QuickBooks. 500+ happy clients worldwide." />
        <meta property="og:url" content="https://pacerline.com" />
        <meta property="og:site_name" content="Pacerline Outsourcing Services Pvt. Ltd." />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pacerline Outsourcing Services | Property Management Experts" />
        <meta name="twitter:description" content="🌟 13+ years experience | Property management accounting | AppFolio & Buildium experts | 500+ clients | Free consultation!" />
        
        {/* Technical SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com" />
      </Head>
      
      {/* Hero Section - Property Management Accounting Service */}
      <section className="hero-section relative bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-100/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-green-100/30 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Main Hero Content */}
              <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
                <div className="inline-flex items-center px-6 py-3 bg-[#092870]/10 border border-[#092870]/20 rounded-full mb-6">
                  <span className="text-[#30a659] text-sm font-bold uppercase tracking-wider">🌟 Trusted Outsourcing Partner</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  <span className="block text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#092870] via-[#30a659] to-[#092870] bg-clip-text text-transparent">
                    Property Management<br/>Accounting Service
                  </span>
                </h1>
              </div>
              
              {/* Company Description */}
              <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#092870] mb-4">
                  Pacerline Outsourcing Services Pvt. Ltd.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Pacerline Outsourcing Services Pvt. Ltd. is a trustworthy partner offering end-to-end bookkeeping, 
                  accounting, administrative, and digital marketing services to real estate investors, property managers, 
                  homeowner associations (HOAs), and small businesses in the United States, Australia, and across the world. 
                  With over 13 years of experience, we combine matured expertise with state-of-the-art technology to deliver 
                  scalable, customized outsourcing solutions to help businesses focus on growth while we take care of their 
                  operation needs.
                </p>
              </div>
              
              {/* Software Expertise Logos */}
              <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                <h3 className="text-lg font-semibold text-[#092870] mb-4">Software Expertise</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="/images/account/appfolio_logo.png" alt="AppFolio" className="h-8 w-auto mx-auto" />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="/images/account/buildium_logo.png" alt="Buildium" className="h-8 w-auto mx-auto" />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="/images/account/quickbooks_logo.png" alt="QuickBooks" className="h-8 w-auto mx-auto" />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="/images/account/propertyware_logo.png" alt="Propertyware" className="h-8 w-auto mx-auto" />
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                <Link href="/contact" className="bg-gradient-to-r from-[#092870] via-[#30a659] to-[#092870] hover:from-[#30a659] hover:via-[#092870] hover:to-[#30a659] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-center relative overflow-hidden group">
                  <span className="relative z-10">WORK WITH US</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/about" className="border-2 border-[#092870] text-[#092870] hover:bg-[#092870] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
                  READ MORE
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
                <h3 className="text-lg font-semibold text-[#092870] mb-3">Contact Us For A Competitive Price</h3>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-700">
                  <a href="mailto:info@pacerline.com" className="flex items-center space-x-2 hover:text-[#30a659] transition-colors">
                    <span className="text-[#30a659]">📧</span>
                    <span>info@pacerline.com</span>
                  </a>
                  <a href="https://pacerline.com" className="flex items-center space-x-2 hover:text-[#30a659] transition-colors">
                    <span className="text-[#30a659]">🌐</span>
                    <span>www.pacerline.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hero Image with 500+ Clients Badge */}
            <div className="relative opacity-0 animate-[fadeInRight_1s_ease-out_0.4s_forwards]">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[#092870] to-[#30a659] p-8 rounded-3xl shadow-2xl text-white">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2 text-white">Property Management</div>
                    <div className="text-2xl text-white/90">Accounting Excellence</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-semibold">Advanced Reporting</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🏠</div>
                      <div className="text-sm font-semibold">Property Focus</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">📈</div>
                      <div className="text-sm font-semibold">Growth Support</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-white/80">Happy Clients</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#092870]/20 to-[#30a659]/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-[#30a659]/30 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Software <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are certified experts in all major property management and accounting software platforms
            </p>
          </div>

          {/* Software Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* AppFolio */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">AppFolio</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management</p>
              </div>
            </div>
            
            {/* QuickBooks */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">QB</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">QuickBooks</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Online</p>
              </div>
            </div>
            
            {/* Buildium */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">🏢</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Buildium</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management</p>
              </div>
            </div>
            
            {/* Propertyware */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">🏠</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Propertyware</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management Software</p>
              </div>
            </div>
            
            {/* Xero */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">X</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Xero</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Cloud Accounting</p>
              </div>
            </div>
          </div>

          {/* Secondary Software Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Sage */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Sage</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Accounting</p>
              </div>
            </div>
            
            {/* Rentec */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Rentec</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management</p>
              </div>
            </div>
            
            {/* TenantCloud */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">TenantCloud</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management</p>
              </div>
            </div>
            
            {/* Rentvine */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">RV</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Rentvine</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Property Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">
                Trusted Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Serving clients across four continents with excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalReach.map((location, index) => (
              <div key={index} className="text-center group">
                {/* Card Container */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-[#30a659] transform hover:-translate-y-2">
                  
                  {/* Flag Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {location.flag}
                  </div>
                  
                  {/* Country Code - Large and Bold */}
                  <div className="text-4xl font-black mb-2 text-gray-900">
                    {location.country === 'USA' ? 'US' : 
                     location.country === 'UK' ? 'GB' : 
                     location.country === 'Canada' ? 'CA' : 'AU'}
                  </div>
                  
                  {/* Country Name */}
                  <h3 className="text-lg font-bold text-gray-700 mb-4">{location.country}</h3>
                  
                  {/* Client Count with Better Visibility */}
                  <div className="inline-block px-6 py-2 bg-[#30a659] rounded-full text-white font-bold text-sm shadow-md hover:bg-[#092870] transition-colors duration-300">
                    {location.clients} Clients
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer prominent quality, cost-effective, time bound services to clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#30a659]/30 transform hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Service Subtitle */}
                  <div className="text-sm font-bold text-[#092870] uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-[#30a659] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-semibold rounded-full hover:from-[#30a659] hover:to-[#092870] transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
                  >
                    Get Started
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Workflow</span> Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful approaches tailored to your business timeline and requirements
            </p>
          </div>

          {/* Workflow Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Standard Flow */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100 hover:border-[#092870]/30 transition-all duration-500 group">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#092870] to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#092870] mb-2">Standard Process</h3>
                  <p className="text-gray-600">Comprehensive & Systematic Approach</p>
                </div>

                {/* Flow Steps */}
                <div className="space-y-6">
                  {[
                    {
                      title: "Initial Call with Person",
                      description: "Detailed consultation to understand your needs",
                      icon: "📞",
                      time: "30-60 mins"
                    },
                    {
                      title: "Onboarding 24 Hours",
                      description: "Complete setup with documentation & training",
                      icon: "⚡",
                      time: "24 hours"
                    },
                    {
                      title: "Deliver on Time",
                      description: "Systematic delivery with quality checkpoints",
                      icon: "✅",
                      time: "As scheduled"
                    },
                    {
                      title: "Ongoing Support",
                      description: "Continuous optimization & growth support",
                      icon: "🤝",
                      time: "Long-term"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 group/step">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#092870] rounded-xl flex items-center justify-center text-white text-xl group-hover/step:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                          <span className="text-xs font-medium text-[#092870] bg-blue-50 px-2 py-1 rounded-full">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-center">
                    <span className="text-[#092870] font-bold text-sm">✓ Best for long-term partnerships</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Express Flow */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#30a659] to-[#092870] rounded-3xl shadow-xl p-8 text-white group overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Express Bullet Service</h3>
                    <p className="text-white/80">Rapid Deployment & Immediate Results</p>
                  </div>

                  {/* Flow Steps */}
                  <div className="space-y-6">
                    {[
                      {
                        title: "Initial Call with Person",
                        description: "Immediate assessment & action plan",
                        icon: "📞",
                        time: "15-30 mins"
                      },
                      {
                        title: "Bullet Service",
                        description: "Instant team deployment for urgent needs",
                        icon: "🚀",
                        time: "Within hours"
                      },
                      {
                        title: "Work Around the Clock",
                        description: "24/7 dedicated team for rapid completion",
                        icon: "🌍",
                        time: "24/7 support"
                      },
                      {
                        title: "Ongoing Support",
                        description: "Seamless transition to regular support",
                        icon: "🔄",
                        time: "Continuous"
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group/step">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xl group-hover/step:scale-110 transition-transform duration-300 border border-white/30">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                            <span className="text-xs font-medium text-[#30a659] bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30">
                              {step.time}
                            </span>
                          </div>
                          <p className="text-white/80 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-center">
                      <span className="text-yellow-300 font-bold text-sm">⚡ URGENT RESULTS: 48-72 hours delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">Ready to get started? Choose your preferred workflow or let us help you decide.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#092870] to-blue-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Standard Process
                <span className="ml-2">→</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#30a659] to-[#092870] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Express Service
                <span className="ml-2">⚡</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Moved above footer */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-[#092870] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff !important' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#30a659] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">John Davis</h4>
                  <p className="text-gray-600 text-sm">Property Manager, Texas</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#30a659] text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Pacerline transformed our accounting processes. Their AppFolio expertise saved us countless hours and improved our financial accuracy significantly."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#30a659] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Sarah Mitchell</h4>
                  <p className="text-gray-600 text-sm">CEO, Real Estate Group</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#30a659] text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Outstanding service quality and professionalism. Their team handles our bookkeeping with precision and always meets deadlines. Highly recommended!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#30a659] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Michael Rodriguez</h4>
                  <p className="text-gray-600 text-sm">CFO, Property Solutions</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#30a659] text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The virtual assistant services have been game-changing for our operations. Professional, reliable, and cost-effective. Perfect outsourcing partner!"
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-sm text-white">
              <div className="flex items-center space-x-2">
                <span className="text-[#30a659] text-2xl" style={{ color: '#ffffff' }}>★★★★★</span>
                <span style={{ color: '#ffffff' }}>4.9/5 Average Rating</span>
              </div>
              <div className="w-px h-6 bg-gray-400"></div>
              <div>
                <span className="text-[#30a659] font-bold" style={{ color: '#ffffff' }}>500+</span> <span style={{ color: '#ffffff' }}>Happy Clients</span>
              </div>
              <div className="w-px h-6 bg-gray-400"></div>
              <div>
                <span className="text-[#30a659] font-bold" style={{ color: '#ffffff' }}>98%</span> <span style={{ color: '#ffffff' }}>Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#092870] to-[#30a659] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of satisfied clients worldwide who trust Pacerline for their outsourcing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#092870] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-[#092870] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
