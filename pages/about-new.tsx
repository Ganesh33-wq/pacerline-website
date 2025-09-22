import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About us - ProBusiness Outsourcing Service</title>
        <meta name="description" content="Learn about ProBusiness Outsourcing Service - skilled professionals with 10 years experience providing 24/7 support" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About us
            </h1>
            <p className="text-xl md:text-2xl text-green-400">
              We are truthful – we value honest and frequent feedback
            </p>
          </div>
        </div>
      </section>

      {/* Skilled Professionals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Skilled & Qualified Professionals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">In Business For 10 Years</h3>
              <p className="text-gray-600">We Are An Experienced Team</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Offer 24/7 Support</h3>
              <p className="text-gray-600">We Are An Experienced Team</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protect You Anywhere</h3>
              <p className="text-gray-600">We Are An Experienced Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              About ProBusiness Outsourcing Service P Ltd
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">About our Company Services</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our organization staffs has comprehensively trained and counseling process of 
                deep rooted ethical culture offering true and fair accounting and bookkeeping 
                services to the clients. Our experienced staffs provide endless support to clients 
                at every stage of accounting services. We provide effective Property Management 
                –Bookkeeping & Virtual Assistant Services, Bookkeeping, XBRL, EDGAR and 
                Typesetting services catering to the business and industry needs of the clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer very cost effective services with the help of hiring Indian accountants 
                who are highly qualified and expert in their areas. We believe in rendering 
                honest and ethical services to the clients and enhancing the value of your 
                business.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">Our Strength</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are proud of our people. Our staffs are highly qualified and experienced in 
                offering effective Property Management services -Bookkeeping, XBRL, EDGAR, 
                Typesetting, and bookkeeping. We have employed the best accountants for rendering 
                impeccable preparation of accounts and books for the smooth operations of your 
                business. We offer customized services to the clients and consider customer 
                satisfaction as the chief priority.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use the best tools, technology and methods for providing unparalleled 
                accounting and bookkeeping services and other related services. Our endless customer 
                support to clients helps us to maintain long term relationship with clients and 
                allow us to deliver timely and responsive services. With us, you can focus on your 
                core objectives and rely on us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become most trustable and valuable partner by providing inimitable service in 
                outsourcing business deal.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ensure customer satisfaction in every transaction by delivering quality services 
                on time and make continuous improvement for adding more values on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <img 
                src="/images/about/jithinraj.png" 
                alt="Jithinraj" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jithinraj</h3>
              <p className="text-green-600 font-semibold">Senior Professional</p>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <img 
                src="/images/about/ramyashree.png" 
                alt="Ramyashree" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ramyashree</h3>
              <p className="text-green-600 font-semibold">Senior Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              To Become a Partner...
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" placeholder="Your name*" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" required />
              </div>
              <div>
                <input type="text" placeholder="Company name" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" />
              </div>
              <div>
                <input type="text" placeholder="Job title" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" />
              </div>
              <div>
                <select className="w-full p-4 rounded-lg border border-gray-300 text-gray-900">
                  <option>Country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <input type="tel" placeholder="Your Phone*" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" required />
              </div>
              <div>
                <input type="text" placeholder="Your company size" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" />
              </div>
              <div>
                <input type="email" placeholder="Business email*" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" required />
              </div>
              <div>
                <input type="url" placeholder="Company website URL" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" />
              </div>
              <div className="md:col-span-2">
                <textarea placeholder="Please briefly describe your business and the services you offer." rows={4} className="w-full p-4 rounded-lg border border-gray-300 text-gray-900"></textarea>
              </div>
              <div className="md:col-span-2">
                <input type="file" accept="jpg,png,pdf,word,xlsx" className="w-full p-4 rounded-lg border border-gray-300 text-gray-900" />
                <p className="text-sm text-green-200 mt-2">Attach Documents jpg, png, pdf, word, xlsx</p>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
