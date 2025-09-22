import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const HomePage = () => {
  const services = [
    {
      title: 'Accounting Services',
      description: 'Professional accounting solutions for businesses of all sizes.',
      icon: '📊',
    },
    {
      title: 'Bookkeeping',
      description: 'Accurate bookkeeping services to keep your finances organized.',
      icon: '📚',
    },
    {
      title: 'Tax Services',
      description: 'Comprehensive tax preparation and planning for USA and Australia.',
      icon: '💰',
    },
    {
      title: 'Property Management',
      description: 'Specialized accounting for property management businesses.',
      icon: '🏠',
    },
    {
      title: 'AppFolio/Buildium',
      description: 'Expert administration and bookkeeping for property management software.',
      icon: '⚙️',
    },
    {
      title: 'Virtual Assistant',
      description: 'Professional virtual assistant services for your business needs.',
      icon: '💼',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to grow your business online.',
      icon: '📱',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6 fade-in-up">
                <span className="text-primary-400 text-sm font-medium">🚀 Professional Business Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hero-text">
                <span className="block fade-in-up">Transform Your Business</span>
                <span className="block fade-in-up stagger-1">with</span>
                <span className="text-transparent bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text fade-in-up stagger-2"> Expert Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed fade-in-up stagger-3">
                Professional accounting, bookkeeping, property management, and digital marketing 
                solutions tailored to accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-4">
                <Link href="/contact" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 text-center pulse-glow">
                  Get Started Today
                </Link>
                <Link href="/services" className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
                  Explore Services
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 fade-in-up stagger-5">
                <p className="text-sm text-gray-400 mb-4">Trusted by businesses worldwide</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative fade-in-right">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/home/about-us.jpeg" 
                  alt="Professional Business Team" 
                  className="rounded-2xl shadow-2xl w-full h-auto float"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 p-4 rounded-xl shadow-lg bounce-in stagger-5 transform hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/images/home/success.png" 
                    alt="Success" 
                    className="w-16 h-16"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-6 bounce-in">
              <img src="/images/home/core-services.png" alt="Services" className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 fade-in-up stagger-1">
              Our Professional Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto fade-in-up stagger-2">
              We offer a comprehensive range of professional services to help your business thrive 
              in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-3 hover:scale-105 card-hover fade-in-up stagger-${Math.min(index + 1, 6)} relative overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 float">{service.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary-600 text-sm font-medium">Learn More →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="text-center mt-16 fade-in-up stagger-6">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
                Let our expert team help you streamline operations and accelerate growth with our comprehensive business solutions.
              </p>
              <Link href="/contact" className="inline-block bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in-left">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/home/why-choose.png" 
                  alt="Why Choose Us" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-primary-600 text-white p-4 rounded-xl shadow-lg bounce-in stagger-3 hover:scale-110 transition-transform duration-300">
                  <img src="/images/home/values.png" alt="Values" className="w-12 h-12" />
                </div>
                {/* Decorative floating elements */}
                <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 fade-in-up">
                Why Choose ProBusiness Services?
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                We are committed to delivering exceptional results through our core values of integrity, 
                excellence, and innovation. Our proven track record speaks for itself.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-xl font-bold">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">INTEGRITY</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We are truthful – we value honest and frequent feedback. Our transparent approach builds lasting partnerships with our clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-accent-600 transition-colors">EXCELLENCE</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Quality, cost-effective, time-bound services delivered by certified professionals with years of industry experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">GLOBAL EXPERTISE</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Serving clients across USA, UK, Canada, and Australia with deep understanding of international business practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-secondary-600 transition-colors">SECURITY & TRUST</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Enterprise-level security protocols ensure your sensitive business data remains protected and confidential at all times.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-secondary-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">10+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-secondary-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">99%</div>
                  <div className="text-sm text-secondary-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <img src="/images/home/contact.png" alt="Contact" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h3>
                <p className="text-gray-600">Start your journey to business success today</p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                    <option>Select a service</option>
                    <option>Accounting Services</option>
                    <option>Bookkeeping</option>
                    <option>Tax Services</option>
                    <option>Property Management</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Software Partners */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Software Partners
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We work with industry-leading software to deliver the best results for your business
            </p>
          </div>
          
          {/* Responsive grid that adapts to screen size */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center">
            {[
              { src: "/images/account/quickbooks_logo.png", alt: "QuickBooks", name: "QuickBooks" },
              { src: "/images/account/appfolio_logo.png", alt: "AppFolio", name: "AppFolio" },
              { src: "/images/account/buildium_logo.png", alt: "Buildium", name: "Buildium" },
              { src: "/images/account/propertyware_logo.png", alt: "PropertyWare", name: "PropertyWare" },
              { src: "/images/account/rentec_logo.png", alt: "RentEC", name: "RentEC" },
              { src: "/images/account/tenantcloud_logo.png", alt: "TenantCloud", name: "TenantCloud" }
            ].map((partner, index) => (
              <div 
                key={partner.name}
                className={`group flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-xl border border-transparent hover:border-primary-200 fade-in-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center mb-3">
                  <img 
                    src={partner.src} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full w-auto h-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-primary-600 transition-colors duration-300 text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Additional responsive message */}
          <div className="text-center mt-12 fade-in-up stagger-6">
            <p className="text-sm md:text-base text-gray-500 italic">
              And many more industry-leading platforms...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
