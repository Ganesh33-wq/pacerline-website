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
      features: ['General Bookkeeping', 'Accounts Payable/Receivable', 'Financial Reporting', 'Tax Preparation Services', 'Audit-Ready Financial Statements'],
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
        
        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100vw);
            }
          }
          
          @keyframes float-left {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          @keyframes float-move {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
            }
            25% { 
              transform: translateY(-40px) translateX(20px) rotate(3deg) scale(1.05); 
            }
            50% { 
              transform: translateY(-20px) translateX(-15px) rotate(-2deg) scale(1.1); 
            }
            75% { 
              transform: translateY(-35px) translateX(10px) rotate(4deg) scale(1.05); 
            }
          }
          
          @keyframes float-up-down {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-15px) rotate(2deg);
            }
            50% {
              transform: translateY(-30px) rotate(0deg);
            }
            75% {
              transform: translateY(-15px) rotate(-2deg);
            }
          }
        `}</style>
      </Head>
      
      {/* Hero Section - First Row */}
      <section className="hero-section relative bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800 py-20 overflow-hidden">
        {/* Floating Software Logos Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {/* Clean and Professional Floating Logos */}
          
          {/* AppFolio - Top Left */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 flex items-center justify-center animate-[float-move_8s_ease-in-out_infinite] hover:scale-105 transition-all duration-300">
            <div className="text-blue-600 font-semibold text-xs">AppFolio</div>
          </div>
          
          {/* QuickBooks - Top Center */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-18 h-18 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-green-100 flex items-center justify-center animate-[float-move_6s_ease-in-out_infinite_1s] hover:scale-105 transition-all duration-300">
            <div className="text-green-600 font-semibold text-sm">QuickBooks</div>
          </div>
          
          {/* Yardi - Top Right */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 flex items-center justify-center animate-[float-move_7s_ease-in-out_infinite_2s] hover:scale-105 transition-all duration-300">
            <div className="text-purple-600 font-semibold text-sm">YARDI</div>
          </div>
          
          {/* Buildium - Left Middle */}
          <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-100 flex items-center justify-center animate-[float-move_9s_ease-in-out_infinite_0.5s] hover:scale-105 transition-all duration-300">
            <div className="text-emerald-600 font-semibold text-sm">Buildium</div>
          </div>
          
          {/* Xero - Right Middle */}
          <div className="absolute top-1/2 right-16 transform -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-100 flex items-center justify-center animate-[float-move_5s_ease-in-out_infinite_3s] hover:scale-105 transition-all duration-300">
            <div className="text-cyan-600 font-semibold text-sm">Xero</div>
          </div>
          
          {/* Sage - Bottom Left */}
          <div className="absolute bottom-24 left-24 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100 flex items-center justify-center animate-[float-move_6s_ease-in-out_infinite_1.5s] hover:scale-105 transition-all duration-300">
            <div className="text-orange-600 font-semibold text-sm">Sage</div>
          </div>
          
          {/* PropertyWare - Bottom Center */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100 flex items-center justify-center animate-[float-move_7s_ease-in-out_infinite_2.5s] hover:scale-105 transition-all duration-300">
            <div className="text-teal-600 font-semibold text-xs text-center">Property<br/>Ware</div>
          </div>
          
          {/* RealPage - Bottom Right */}
          <div className="absolute bottom-24 right-24 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-red-100 flex items-center justify-center animate-[float-move_8s_ease-in-out_infinite_4s] hover:scale-105 transition-all duration-300">
            <div className="text-red-600 font-semibold text-xs text-center">Real<br/>Page</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main Title */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="block text-4xl md:text-6xl mb-4 text-[#30a659]">
                  Property Management
                </span>
                <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">
                  Accounting Service
                </span>
              </h1>
              
              {/* CTA Button */}
              <div className="">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#30a659] hover:bg-[#092870] text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Software Partners - Scrolling Logos */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Trusted Software Partners</h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">We work with industry-leading platforms to serve you better</p>
          </div>
          
          {/* Scrolling Logo Container */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-8 md:space-x-16 items-center">
              {/* First set of logos */}
              <div className="flex space-x-8 md:space-x-16 items-center flex-shrink-0">
                <img src="/images/logos/yardi.svg" alt="Yardi" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/realpage.svg" alt="RealPage" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/rent-manager.svg" alt="Rent Manager" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/doorloop.svg" alt="DoorLoop" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/xero.svg" alt="Xero" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/freshbooks.svg" alt="FreshBooks" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/sage.svg" alt="Sage" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/yardi-breeze.svg" alt="Yardi Breeze" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 md:space-x-16 items-center flex-shrink-0">
                <img src="/images/logos/yardi.svg" alt="Yardi" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/realpage.svg" alt="RealPage" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/rent-manager.svg" alt="Rent Manager" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/doorloop.svg" alt="DoorLoop" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/xero.svg" alt="Xero" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/freshbooks.svg" alt="FreshBooks" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/sage.svg" alt="Sage" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
                <img src="/images/logos/yardi-breeze.svg" alt="Yardi Breeze" className="h-16 md:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for animation */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }
          
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
          
          @media (max-width: 768px) {
            .animate-scroll-left {
              animation: scroll-left 30s linear infinite;
            }
          }
        `}</style>
      </section>

      {/* Content Section - Second Row */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <h2 className="text-3xl md:text-4xl font-bold text-[#092870] mb-6">
                Pacerline Outsourcing Services Pvt. Ltd.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pacerline Outsourcing Services Pvt. Ltd. is a trustworthy partner offering end-to-end bookkeeping, 
                accounting, administrative, and digital marketing services to real estate investors, property managers, 
                homeowner associations (HOAs), and small businesses in the United States, Australia, and across the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With over 13 years of experience, we combine matured expertise with state-of-the-art technology to deliver 
                scalable, customized outsourcing solutions to help businesses focus on growth while we take care of their 
                operation needs.
              </p>
              
              {/* Contact Info */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#092870] mb-4">Contact Us For A Competitive Price</h3>
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
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-[#092870] to-[#30a659] hover:from-[#30a659] hover:to-[#092870] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-center">
                  WORK WITH US
                </Link>
                <Link href="/about" className="border-2 border-[#092870] text-[#092870] hover:bg-[#092870] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
                  READ MORE
                </Link>
              </div>
            </div>
            
            {/* Right Side - Who Can Benefits Section */}
            <div className="relative opacity-0 animate-[fadeInRight_1s_ease-out_0.4s_forwards]">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl shadow-2xl border border-blue-100">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#092870] mb-3">
                    Who Can Benefits from Our 
                    <span className="block text-[#30a659]">AppFolio Administration Services?</span>
                  </h3>
                </div>
                
                {/* Benefits List */}
                <div className="space-y-4">
                  {/* Property Management Firms */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">🏢</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">Property Management Firms</h4>
                      <p className="text-sm text-gray-600">Complete administration solutions for professional property management companies</p>
                    </div>
                  </div>
                  
                  {/* Real Estate Companies */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">🏠</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">Real Estate Companies</h4>
                      <p className="text-sm text-gray-600">Streamlined admin support for real estate firms managing rental properties</p>
                    </div>
                  </div>
                  
                  {/* Independent Property Owners */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">👤</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">Independent Property Owners</h4>
                      <p className="text-sm text-gray-600">Professional admin support for individual property owners and investors</p>
                    </div>
                  </div>
                  
                  {/* Multifamily Housing Operators */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">🏘️</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">Multifamily Housing Operators</h4>
                      <p className="text-sm text-gray-600">Specialized administration for apartment complexes and multifamily properties</p>
                    </div>
                  </div>
                  
                  {/* Student Housing Operators */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">🎓</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">Student Housing Operators</h4>
                      <p className="text-sm text-gray-600">Tailored admin services for student housing and university properties</p>
                    </div>
                  </div>
                  
                  {/* HOA and Community Managers */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">🏡</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">HOA and Community Managers</h4>
                      <p className="text-sm text-gray-600">Administrative support for homeowner associations and community management</p>
                    </div>
                  </div>
                  
                  {/* CPA Firms */}
                  <div className="flex items-start space-x-4 p-3 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                    <div className="text-2xl flex-shrink-0">📊</div>
                    <div>
                      <h4 className="font-semibold text-[#092870] mb-1">CPA Firms</h4>
                      <p className="text-sm text-gray-600">Professional AppFolio administration support for accounting firms</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#092870]/10 to-[#30a659]/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-3 w-12 h-12 bg-[#30a659]/20 rounded-full animate-bounce"></div>
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
                  
                  {/* Flag Icon Only (no country code letters) */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {location.flag}
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
                    style={{ color: 'white !important' }}
                  >
                    <span style={{ color: 'white' }}>Get Started</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" style={{ color: 'white' }}>→</span>
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

          {/* Horizontal Flowchart Design */}
          <div className="relative max-w-7xl mx-auto">
            
            <div className="flex items-center justify-between w-full px-4">
              
              {/* Initial Call - Starting Point */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-blue-100 hover:border-[#092870]/30 transition-all duration-500 w-44 h-32 flex flex-col justify-center text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#092870] to-blue-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#092870] mb-1">Initial Call with Person</h3>
                  <p className="text-gray-700 text-xs mb-1 font-medium">Detailed consultation to understand your needs</p>
                </div>
              </div>

              {/* Arrow Right */}
              <div className="flex items-center mx-2">
                <div className="w-8 h-1 bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full"></div>
                <div className="w-0 h-0 border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent border-l-[#30a659] ml-1"></div>
              </div>

              {/* Two Paths - Side by Side */}
              <div className="flex flex-col space-y-6 flex-1">
                
                {/* Top Path - Standard Process */}
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-blue-100 hover:border-[#092870]/30 transition-all duration-500 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#092870] to-blue-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Initial Call</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Detailed consultation</p>
                    <span className="text-xs font-bold text-[#092870] bg-blue-100 px-2 py-1 rounded-full">30-60 mins</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#092870] rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-blue-100 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Onboarding</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Complete setup</p>
                    <span className="text-xs font-bold text-[#092870] bg-blue-100 px-2 py-1 rounded-full">24 hours</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#092870] rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-blue-100 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">✅</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Deliver</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Quality delivery</p>
                    <span className="text-xs font-bold text-[#092870] bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#092870] rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-blue-100 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg animate-bounce">👋</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Support</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Ongoing growth</p>
                    <span className="text-xs font-bold text-[#092870] bg-blue-100 px-2 py-1 rounded-full">Long-term</span>
                  </div>
                </div>

                 {/* Bottom Path - Express Service */}
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-green-200 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#30a659] to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Initial Call</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Assessment & plan</p>
                    <span className="text-xs font-bold text-[#30a659] bg-green-100 px-2 py-1 rounded-full">15-30 mins</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#30a659] rounded-full"></div>

                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-green-200 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#30a659] to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">🚀</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Bullet Service</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Instant deployment</p>
                    <span className="text-xs font-bold text-[#30a659] bg-green-100 px-2 py-1 rounded-full">Within hours</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#30a659] rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-green-200 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#30a659] to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg">🌍</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">24/7 Work</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Round the clock</p>
                    <span className="text-xs font-bold text-[#30a659] bg-green-100 px-2 py-1 rounded-full">24/7 support</span>
                  </div>
                  
                  <div className="w-4 h-1 bg-[#30a659] rounded-full"></div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-green-200 w-44 h-32 flex flex-col justify-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#30a659] to-[#092870] rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-lg animate-bounce">👋</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#092870] mb-1">Support</h3>
                    <p className="text-gray-700 text-xs mb-1 font-medium">Seamless transition</p>
                    <span className="text-xs font-bold text-[#30a659] bg-green-100 px-2 py-1 rounded-full">Continuous</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 !text-white">
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
           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-white">Transform</span> Your Business?
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
