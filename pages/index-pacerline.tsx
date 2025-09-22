import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const services = [
    {
      title: 'Bookkeeping Services',
      subtitle: 'BUILD EFFECTIVE',
      description: 'Comprehensive bookkeeping solutions to keep your finances organized and compliant with industry standards.',
      icon: '📊',
      features: ['Monthly Financial Reports', 'Tax Preparation', 'Expense Tracking', 'Payroll Management'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Virtual Assistant Services', 
      subtitle: 'INCREASE LEADS',
      description: 'Professional virtual assistants to handle administrative tasks and boost your business productivity.',
      icon: '💼',
      features: ['Administrative Support', 'Customer Service', 'Data Entry', 'Email Management'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Digital Transformation',
      subtitle: 'CREATE BETTER JOURNEYS',
      description: 'Modernize your business processes with cutting-edge digital solutions and automation.',
      icon: '🚀',
      features: ['Process Automation', 'Digital Strategy', 'Technology Integration', 'Performance Analytics'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Property Management Accounting',
      subtitle: 'BUILD EFFECTIVE',
      description: 'Specialized accounting services for property management companies and real estate professionals.',
      icon: '🏠',
      features: ['Rent Roll Management', 'Owner Reporting', 'Maintenance Tracking', 'Tenant Communications'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'AppFolio & Buildium Expertise',
      subtitle: 'INCREASE EFFICIENCY', 
      description: 'Expert management and optimization of property management software platforms.',
      icon: '⚙️',
      features: ['Setup & Configuration', 'Data Migration', 'Training & Support', 'Custom Reporting'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Digital Marketing',
      subtitle: 'CREATE BETTER REACH',
      description: 'Strategic digital marketing solutions to grow your online presence and attract more clients.',
      icon: '📱',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Creation', 'Lead Generation'],
      color: 'from-pink-500 to-rose-600'
    },
  ]

  const features = [
    {
      title: 'Talented & Trained Employees',
      subtitle: 'Protect You Anywhere',
      description: 'Our certified professionals bring years of experience and undergo continuous training to stay current with industry best practices.',
      icon: '👥',
      image: '/images/about/tool1.png'
    },
    {
      title: 'We Offer 24/7 Support',
      subtitle: 'ProBusiness Outsourcing Service',
      description: 'Round-the-clock support ensures your business operations never stop, with dedicated teams available whenever you need assistance.',
      icon: '🔧',
      image: '/images/about/tool2.png'
    },
    {
      title: 'Quality & Affordable Services',
      subtitle: 'Best Service With Affordable Price',
      description: 'We deliver quality services at competitive prices, ensuring you get the best value for your investment in professional services.',
      icon: '💎',
      image: '/images/about/tool3.png'
    }
  ]

  const globalReach = [
    { country: 'USA', flag: '🇺🇸', clients: '200+' },
    { country: 'UK', flag: '🇬🇧', clients: '150+' },
    { country: 'Canada', flag: '🇨🇦', clients: '100+' },
    { country: 'Australia', flag: '🇦🇺', clients: '75+' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>ProBusiness Services - Professional Outsourcing Solutions</title>
        <meta name="description" content="Professional accounting, bookkeeping, property management, and digital marketing solutions for businesses worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      {/* Hero Section with INTEGRITY Focus */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-emerald-400/5 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Main Hero Content */}
              <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
                <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
                  <span className="text-green-400 text-sm font-bold uppercase tracking-wider">🌟 Trusted Outsourcing Partner</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-6xl mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">INTEGRITY</span>
                  <span className="block text-2xl md:text-3xl text-green-400 font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
                    We are truthful – we value honest and frequent feedback
                  </span>
                </h1>
              </div>
              
              {/* Company Description */}
              <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ProBusiness Outsourcing Service Pvt. Ltd.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  ProBusiness Outsourcing Service Pvt Ltd is an outsourcing service provider with 
                  customers based in the USA, UK, Canada and Australia. The primary objective of 
                  ProBusiness is to offer prominent quality, cost-effective, time bound services to clients.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
                <Link href="/contact" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-center animate-pulse">
                  WORK WITH US
                </Link>
                <Link href="/about" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
                  READ MORE
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Contact Us For A Competitive Price</h3>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                  <a href="tel:+1-555-123-4567" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                    <span className="text-green-400">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a href="mailto:info@probusiness.com" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                    <span className="text-green-400">📧</span>
                    <span>info@probusiness.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative opacity-0 animate-[fadeInRight_1s_ease-out_0.4s_forwards]">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/home/about-us.jpeg" 
                  alt="Professional Business Team" 
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:rotate-1 transition-transform duration-300 border-4 border-green-500/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-lg opacity-0 animate-[bounceIn_1s_ease-out_1.4s_forwards]">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-emerald-500/30 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Serving clients across four continents with excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalReach.map((location, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {location.flag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{location.country}</h3>
                <p className="text-green-600 font-semibold">{location.clients} Clients</p>
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
              What We <span className="text-green-600">Offers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer prominent quality, cost-effective, time bound services to clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Service Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Subtitle */}
                  <div className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
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
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">ProBusiness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring integrity, excellence, and expertise to every client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-green-600 font-semibold mb-4">{feature.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of satisfied clients worldwide who trust ProBusiness for their outsourcing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Project Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
