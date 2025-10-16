import Head from 'next/head'
import { useEffect, useState } from 'react'

type Employee = {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  role: string;
  photo?: string;
};
import Layout from '../components/Layout'
import { useNotificationContext } from '../contexts/NotificationContext'

const AboutPage = () => {
  const { showSuccess, showError } = useNotificationContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loadingEmployees, setLoadingEmployees] = useState(true)
  const [employeeError, setEmployeeError] = useState('')

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoadingEmployees(true)
        const res = await fetch('/api/employees')
        const data = await res.json()
        if (data.success) {
          setEmployees(data.employees)
        } else {
          setEmployeeError(data.message || 'Failed to load employees')
        }
      } catch (err) {
        setEmployeeError('Failed to load employees')
      } finally {
        setLoadingEmployees(false)
      }
    }
    fetchEmployees()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        query: formData.get('query') as string,
      }

      const response = await fetch('/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        showSuccess(
          'Form Submitted Successfully!',
          'Thank you for your query. We will get back to you within 24 hours.',
          6000
        )
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        showError(
          'Submission Failed',
          result.message || 'Something went wrong. Please try again.',
          6000
        )
      }
    } catch (error) {
      console.error('Form submission error:', error)
      showError(
        'Network Error',
        'Unable to submit form. Please check your connection and try again.',
        6000
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>About Us - Pacerline Outsourcing Service</title>
        <meta name="description" content="Learn about Pacerline Outsourcing Service - skilled professionals with 10 years experience providing comprehensive accounting and virtual assistant services" />
      </Head>
      
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
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block px-6 py-3 bg-blue-100/50 backdrop-blur-lg rounded-full border border-green-400/30">
              <span className="text-green-600 text-sm font-semibold">⭐ TRUSTED OUTSOURCING PARTNER</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-green-600 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              14+ Years of Excellence in Property Management Outsourcing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a href="#company" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Learn More About Us
                <span className="ml-2">→</span>
              </a>
              <a href="#team" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Meet Our Team
                <span className="ml-2">👥</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Professionals Section with Floating Animation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
 
      </section>

      {/* Company Overview Section */}
      <section id="company" className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Pacerline</span> 
              <br className="hidden sm:block" />
              <span className="text-3xl md:text-4xl text-gray-700">Outsourcing Service Pvt Ltd</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
              Dedicated to helping U.S.-based property management businesses with professional-grade bookkeeping, 
              admin support, and online marketing. Our 14 years of experience and deep knowledge of U.S. real estate 
              businesses have helped us evolve into a go-to partner for more than 400 property management businesses.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="mt-16">
            {/* Company Info Cards - Redesigned */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Our Core Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Our Core Mission</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Our goal is to assist clients in saving time, lowering operating expenses, and achieving quicker growth 
                    by delivering timely, compliant, and accurate back-office solutions.
                  </p>
                </div>
              </div>

              {/* Industry-Standard Software */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-4">Industry-Standard Software</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Our strength lies in utilizing industry-standard software like AppFolio, Buildium, Propertyware, 
                    QuickBooks, Rentvine, Rentec, and TenantCloud to offer trouble-free support.
                  </p>
                </div>
              </div>

              {/* Global Yet Local */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-600 mb-4">Global Yet Local</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Whether your portfolio has 10 units or 5,000+ units, our globally networked yet locally driven 
                    India team functions in complete unison with your organization, providing real-time output at 
                    dramatically lower cost than in-house capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision & <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-6">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To become the most trustable and valuable partner by providing inimitable service 
                in property management outsourcing, establishing ourselves as the premier choice 
                for U.S. property management companies seeking comprehensive, reliable, and 
                innovative outsourcing solutions.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-6">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To ensure customer satisfaction in every transaction by delivering quality services 
                on time and making continuous improvements to add more value. We are committed to 
                empowering property management companies with exceptional outsourcing solutions 
                that drive growth and operational excellence.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-blue-600 mb-3">Trust & Integrity</h4>
                <p className="text-gray-700">Building lasting partnerships through honest, transparent communication and reliable service delivery.</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-green-600 mb-3">Excellence & Innovation</h4>
                <p className="text-gray-700">Continuously improving our services and adopting new technologies to deliver exceptional results.</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-blue-600 mb-3">Client-Centric Focus</h4>
                <p className="text-gray-700">Understanding and exceeding client expectations through personalized service and dedicated support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moved Phase 2 - Skilled Professionals Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#092870]/5 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-[#30a659] to-[#092870] rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skilled & <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Qualified</span> Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals brings years of expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#092870]/30 transform hover:-translate-y-3 relative overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#092870]/5 to-[#30a659]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">
                  In Business For 10 Years
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We Are An Experienced Team with a decade of expertise in outsourcing services
                </p>
                
                {/* Progress Bar Animation */}
                <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#30a659]/30 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#30a659]/5 to-[#092870]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#30a659] transition-colors duration-300">
                  We Offer 24/7 Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock assistance from our experienced team of professionals
                </p>
                
                <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#30a659] to-[#092870] rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 delay-200"></div>
                </div>
              </div>
            </div>
            
            <div className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#092870]/30 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#092870]/5 to-[#30a659]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#092870] transition-colors duration-300">
                  Protect You Anywhere
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure and reliable services that safeguard your business interests globally
                </p>
                
                <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Founders */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Pacerline with expertise, vision, and dedication to property management excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ramyashree S U */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 text-white text-center">
                <img 
                  src="/images/about/ramyashree.png" 
                  alt="Ramyashree S U" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2">Ramyashree S U</h3>
                <p className="text-blue-100 font-semibold mb-4">Co-Founder & Director</p>
                <div className="flex justify-center space-x-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">14+ Years Experience</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Property Management</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Accounting Expert</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">Professional Background</h4>
                    <ul className="text-gray-700 space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Over 14 years of experience in specialty property management accounting
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Key figure in serving over 400 property management companies in the United States
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Manages books for over 3,000 rental properties
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Expert in vendor and tenant ledger accounts, bank reconciliations, owner statements
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">Expertise & Leadership</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Her expertise in modern software systems such as AppFolio, Buildium, Propertyware, QuickBooks, 
                      Rentvine, Rentec, and TenantCloud ensures efficient and accurate processes. Ramyashree excels 
                      at simplifying accounting systems, correcting long-standing errors, and moving between systems 
                      seamlessly while providing hands-on support for software migration and data integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Jithin Raj K */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-8 text-white text-center">
                <img 
                  src="/images/about/jithinraj.png" 
                  alt="Jithin Raj K" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2">Jithin Raj K</h3>
                <p className="text-green-100 font-semibold mb-4">Co-Founder & Director</p>
                <div className="flex justify-center space-x-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MBA Graduate</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Business Operations</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Digital Strategy</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Professional Background</h4>
                    <ul className="text-gray-700 space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Experienced leader with over 14 years in business operations and financial services
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        MBA graduate bringing strategic vision and digital strategy expertise
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Trained in financial reporting, specifically SEC guidelines for U.S.-based clients
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Marketing expert with experience in web presence and lead generation
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Innovation & Operations</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Jithin assists clients in streamlining operations, providing financial precision, and facilitating 
                      sustainable growth. He has contributed to developing Pacerline's property management admin vertical 
                      and worked closely with U.S.-based clients for back-office optimization, compliance improvement, 
                      and tenant communication optimization. His combined financial expertise and marketing savvy create 
                      seamless solutions connecting back-office strengths with front-office business development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Pacerline & Why Choose Us - Combined Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl p-12 border-2 border-blue-100 shadow-xl">
              {/* Main Header */}
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Pacerline</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
                <h4 className="text-2xl font-semibold text-green-600 mb-4">Outsourcing Service Pvt Ltd</h4>
              </div>

              {/* Company Description */}
              <div className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                    Pacerline Outsourcing Service Pvt Ltd is not just a service company—<strong className="text-blue-600">We're your partner in success</strong>. 
                    With over <strong className="text-green-600">14 years of specialized experience</strong> in property management outsourcing, 
                    we combine cumulative expertise, advanced software platform capabilities, and an unwavering client satisfaction mission 
                    to make us stand out in the competitive market. Our services are strategically crafted to help you sail over hurdles 
                    easily and achieve sustainable growth.
                  </p>
                </div>
              </div>

              {/* 
              ==============================
              WHY CHOOSE PACERLINE SECTION - COMMENTED OUT
              ==============================
              This section is commented out for now but can be easily uncommented in the future when needed.
              To enable this section, simply uncomment the code block below.
              */}
              
              {/* UNCOMMENT THE ENTIRE BLOCK BELOW TO SHOW "WHY CHOOSE PACERLINE" SECTION
              
              <div className="mb-12">
                <h4 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Why Choose <span className="text-green-600">Pacerline?</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-blue-600 mb-2">Expert Partnership</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          We prioritize your success as much as you do, providing dedicated experts who understand your business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-green-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">💻</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-green-600 mb-2">Advanced Technology</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Mastery of leading software platforms including AppFolio, Buildium, QuickBooks, and more.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-purple-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-purple-600 mb-2">Proven Track Record</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Over 400+ active clients across 30+ states trust us with their property management needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-orange-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">🛡️</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-orange-600 mb-2">Regulatory Compliance</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Current with latest U.S. regulations, including SEC rules, ensuring compliant operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-teal-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">⏰</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-teal-600 mb-2">24/7 Support</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Round-the-clock support ensuring your operations never stop, with quick response times.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-rose-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl">💰</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-rose-600 mb-2">Cost-Effective Solutions</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Premium quality services at competitive rates, helping you reduce operational costs significantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">14+</div>
                    <p className="text-blue-100 font-medium">Years of Experience</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">400+</div>
                    <p className="text-blue-100 font-medium">Active Clients</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
                    <p className="text-blue-100 font-medium">States Served</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">3,000+</div>
                    <p className="text-blue-100 font-medium">Properties Managed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  <strong className="text-blue-600">By employing Pacerline,</strong> you get to utilize experts who understand the competitive property 
                  management market and are equipped with the right tools and knowledge to help you <strong className="text-green-600">sail over hurdles easily</strong> 
                  and achieve sustainable growth in your business.
                </p>
              </div>
              
              END OF COMMENTED SECTION */}

            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working around the clock to deliver exceptional property management services
            </p>
          </div>
          {loadingEmployees ? (
            <div className="text-center text-lg text-gray-500 py-12">Loading team...</div>
          ) : employeeError ? (
            <div className="text-center text-red-500 py-12">{employeeError}</div>
          ) : employees.length === 0 ? (
            <div className="text-center text-gray-500 py-12">No team members found.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {employees.map((emp: Employee) => (
                <div key={emp.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                  <div className="text-center">
                    {emp.photo ? (
                      <img src={emp.photo} alt={emp.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100" />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-2xl font-bold">{emp.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase()}</span>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{emp.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{emp.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>      {/* Become a Partner Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your operations, save money, and grow your property management business? 
              Share your details and query with us. Join hands with Pacerline Outsourcing Service Pvt Ltd 
              and feel the difference of working with a trustworthy, U.S.-focused outsourcing partner.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              {/* Mandatory Fields Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your full name" 
                    className="w-full p-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address" 
                    className="w-full p-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter your phone number" 
                  className="w-full p-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300" 
                  required 
                />
              </div>

              {/* Query Section */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">What is your query?</label>
                <textarea 
                  name="query"
                  placeholder="Please describe your specific query or requirements in detail..." 
                  rows={4} 
                  className="w-full p-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">Upload Documents (Optional)</label>
                <div className="relative">
                  <input 
                    type="file" 
                    name="documents"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xlsx,.xls" 
                    className="w-full p-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white file:text-blue-600 hover:file:bg-blue-50 focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300" 
                    multiple
                  />
                </div>
                <p className="text-sm text-green-200 mt-2 flex items-center">
                  <span className="mr-2">📎</span>
                  Supported formats: JPG, PNG, PDF, Word, Excel (Max 10MB per file)
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-bold py-4 px-12 rounded-xl transition-all duration-300 transform shadow-lg border-2 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed border-gray-300'
                      : 'bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl border-transparent hover:border-blue-200'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">📤</span>
                        Submit Your Query
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Required Fields Note */}
              <div className="text-center">
                <p className="text-sm text-green-200">
                  <span className="text-white">*</span> Required fields
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
