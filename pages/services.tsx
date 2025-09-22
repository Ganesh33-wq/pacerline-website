import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicesPage = () => {
  const services = [
    {
      title: 'Bookkeeping Services',
      subtitle: 'BUILD EFFECTIVE',
      description: 'Comprehensive bookkeeping solutions to keep your finances organized and compliant with industry standards.',
      features: [
        'Daily transaction recording',
        'Bank reconciliation',
        'Invoice processing',
        'Expense tracking',
        'Monthly financial reports'
      ],
      icon: '📊',
      color: 'from-green-500 to-emerald-600',
      link: '/bookkeeping-usa'
    },
    {
      title: 'Virtual Assistant Services',
      subtitle: 'INCREASE LEADS',
      description: 'Professional virtual assistants to handle administrative tasks and boost your business productivity.',
      features: [
        'Administrative Support',
        'Customer Service',
        'Data Entry',
        'Email Management',
        'Appointment Scheduling'
      ],
      icon: '💼',
      color: 'from-blue-500 to-indigo-600',
      link: '/virtual-assistant'
    },
    {
      title: 'Digital Transformation',
      subtitle: 'CREATE BETTER JOURNEYS',
      description: 'Modernize your business processes with cutting-edge digital solutions and automation.',
      features: [
        'Process Automation',
        'Digital Strategy',
        'Technology Integration',
        'Performance Analytics',
        'Cloud Solutions'
      ],
      icon: '🚀',
      color: 'from-purple-500 to-violet-600',
      link: '/digital-marketing'
    },
    {
      title: 'Securities and Exchange Commission (SEC) Filing',
      subtitle: 'BUILD EFFECTIVE',
      description: 'Expert SEC filing services to ensure compliance with federal securities regulations.',
      features: [
        'Form 10-K Preparation',
        'Form 10-Q Filing',
        'Form 8-K Reports',
        'Proxy Statements',
        'EDGAR System Management'
      ],
      icon: '📋',
      color: 'from-red-500 to-pink-600',
      link: '/accounting'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Services Categories - ProBusiness Outsourcing Service</title>
        <meta name="description" content="What we offers - BUILD EFFECTIVE, INCREASE LEADS, CREATE BETTER JOURNEYS. Quality services at affordable prices." />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Services Categories
            </h1>
            <p className="text-xl md:text-2xl text-green-400">
              We are truthful – we value honest and frequent feedback
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protect You Anywhere</h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4">Talented & Trained Employees</h4>
              <p className="text-gray-600">
                Consectetur adipisicing elit sed aute ou eiusmod tempor incididunt ulabore et 
                dolore magna aliqua utmn lore enim ad minim veniam quis nostrud.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Offer 24/7 Support</h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4">ProBusiness Outsourcing Service</h4>
              <p className="text-gray-600">
                Consectetur adipisicing elit sed aute ou eiusmod tempor incididunt ulabore et 
                dolore magna aliqua utmn lore enim ad minim veniam quis nostrud.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-6">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protect You Anywhere</h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4">Talented & Trained Employees</h4>
              <p className="text-gray-600">
                Consectetur adipisicing elit sed aute ou eiusmod tempor incididunt ulabore et 
                dolore magna aliqua utmn lore enim ad minim veniam quis nostrud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-green-600">Offers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Elit Sed Aute Dou Eiusmod Tempor Incididunt Labore Dolore Magna Aliqua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-3 relative overflow-hidden cursor-pointer">
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
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                      Learn More
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Additional Services Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Additional Services
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/property-management" className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600">Property Management</h4>
            </Link>
            
            <Link href="/appfolio" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">AppFolio Services</h4>
            </Link>
            
            <Link href="/buildium" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">Buildium Services</h4>
            </Link>
            
            <Link href="/accounting-australia" className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🇦🇺</div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600">Australian Tax Services</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Provide That Matches Your Needs & Your Budget!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our company is determined to deliver quality services at affordable prices.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us For A Competitive Price
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <a href="tel:+918608691085" className="flex items-center space-x-2 text-xl font-bold text-green-600 hover:text-green-700">
                  <span>📞</span>
                  <span>+91 86086 91085</span>
                </a>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <a href="mailto:info@pacerline.com" className="flex items-center space-x-2 text-xl font-bold text-green-600 hover:text-green-700">
                  <span>📧</span>
                  <span>info@pacerline.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Best Service With Affordable Price
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur pscing elitr, sed diam nonumy eirmod 
              tempor viduntf ut bore et dolore magna aliquyam erat, sedf diam voluptua. At vero 
              eos et accusam et sto duo lores et sddd eebum. et dolore magna aliquyam erat, sedf 
              diam voluptua. At vero eos et accusam et sto duo lores et ea rebum.et dolore 
              magna aliquyam erat, sedf diam voluptua. At vero eos et accusam et sto lores et ea rebum.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage
