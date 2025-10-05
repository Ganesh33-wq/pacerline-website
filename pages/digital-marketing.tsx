import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingContactWidget from '../components/FloatingContactWidget'
import { useState } from 'react'

const DigitalMarketingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Digital Marketing Services | Expert SEO, Social Media & PPC for US Businesses | Pacerline</title>
        <meta name="description" content="Professional digital marketing services for US businesses. SEO, social media marketing, PPC, email marketing, website design & lead generation. Proven ROI-driven strategies." />
        <meta name="keywords" content="digital marketing, SEO services, social media marketing, PPC advertising, email marketing, website design, lead generation, content marketing" />
        <meta property="og:title" content="Digital Marketing Services | Expert Online Marketing for US Businesses" />
        <meta property="og:description" content="Comprehensive digital marketing solutions for US companies. SEO, social media, PPC, email marketing and more. ROI-driven strategies with proven results." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pacerline.com/digital-marketing" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/40"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Phase 1: Main Title Section */}
          <div className="relative py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-clip-text text-transparent animate-gradient-x">Digital Marketing</span> 
                  <br />
                  <span className="inline-block animate-fade-in-up delay-300">Services</span>
                </h1>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl max-w-4xl mx-auto border border-white/20 animate-fade-in-up delay-500 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Professional <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Digital Marketing Solutions</strong> for US Businesses & Global Markets
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-[#092870] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Content & CTA Section */}
          <div className="relative py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Content */}
                <div className="space-y-8 animate-slide-in-left">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#092870] transition-colors duration-300">
                      <span className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Expert Digital Marketing</span>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mt-2 group-hover:w-24 transition-all duration-300"></div>
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        We're living in a hyper-connected world where a solid digital presence is no longer a choice - it's a must. Whether you're a local business, an upstart e-commerce store, or a national brand, the right digital marketing strategy can make all the difference.
                      </p>
                      <p className="hover:text-gray-900 transition-colors duration-300">
                        <strong className="bg-gradient-to-r from-[#092870] to-indigo-600 bg-clip-text text-transparent">Pacerline Outsourcing Service Pvt Ltd</strong> provides digital marketing services designed specifically for United States businesses and the rest of the world. From SEO and social media marketing to PPC and email campaigns, our skilled team delivers results that drive your business forward online.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">Get Digital Marketing Support</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-[#092870] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                      <button className="border-2 border-[#092870] text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-[#092870] hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-500 hover:shadow-xl hover:scale-105 flex-1 relative overflow-hidden group">
                        <span className="relative z-10">View Our Services</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#092870] to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Key Stats */}
                <div className="space-y-6 animate-slide-in-right">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Professional Digital Marketing Experts
                      <div className="w-20 h-1 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-full mx-auto mt-2"></div>
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#092870] via-indigo-600 to-[#092870] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
                        <div className="text-center flex-1">
                          <div className="text-3xl font-bold mb-2 group-hover:animate-bounce">ROI</div>
                          <div className="font-semibold">Driven Campaigns</div>
                          <div className="text-sm opacity-90">Proven Results</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#30a659] via-emerald-600 to-[#30a659] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
                        <div className="text-center flex-1">
                          <div className="text-3xl font-bold mb-2 group-hover:animate-bounce">US</div>
                          <div className="font-semibold">Market Focused</div>
                          <div className="text-sm opacity-90">Targeted Strategies</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl group">
                        <div className="text-center flex-1">
                          <div className="text-3xl font-bold mb-2 group-hover:animate-bounce">10+</div>
                          <div className="font-semibold">Services Offered</div>
                          <div className="text-sm opacity-90">Complete Solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our Digital Marketing Agency?
              </h2>
              <div className="text-xl text-gray-700 max-w-5xl mx-auto space-y-6">
                <p>
                  We have good knowledge about digital marketing technics and based on our experience we are able to recognize the issues facing U.S. businesses from rising competition to changing customer expectations. Our solutions are tailored for the American market, allowing you to reach more prospects, own your market, and convert traffic into profit.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">What Sets Us Apart:</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  title: "American Market Focused",
                  description: "Marketing strategies designed specifically for the US market",
                  icon: "🇺🇸",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "ROI-Driven Campaigns",
                  description: "Every campaign is optimized for maximum return on investment",
                  icon: "📈",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Performance Reporting",
                  description: "Detailed reporting and evaluation of campaign performance",
                  icon: "📊",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "Customized Packages",
                  description: "Tailored service packages for your specific business needs",
                  icon: "🎯",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Affordable Pricing",
                  description: "Competitive pricing for companies of any size",
                  icon: "💰",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h4>
                  <p className="text-gray-700 text-center text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Marketing Solutions */}
        <section className="relative py-20 bg-gradient-to-r from-slate-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Digital Marketing Solutions for U.S. Companies
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Please find below our extensive list of services designed to make your business stand out online.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Search Engine Optimization (SEO)",
                  description: "Do you want your business to appear on Google's first page when clients search for your services? Our SEO specialists assist you in ranking higher, drawing organic traffic, and boosting visibility throughout the USA.",
                  services: [
                    "On-Page SEO (keyword research, meta tags, internal linking)",
                    "Off-Page SEO (link building, guest posting, authority backlinks)",
                    "Technical SEO (site speed, mobile optimization, indexing)",
                    "Local SEO (Google Business Profile, maps listings, citations)",
                    "Competitor analysis and content strategy"
                  ],
                  icon: "🔍",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Pay-Per-Click Advertising (PPC)",
                  description: "We develop high-performing PPC campaigns that position your brand in front of the right consumers at the right moment. Whether you're looking to reach local consumers or national audiences, our Google Ads and Bing Ads campaigns drive quick ROI.",
                  services: [
                    "Google Ads (Search, Display, Shopping)",
                    "Bing Ads setup and management",
                    "Keyword targeting & bid management",
                    "Conversion tracking and optimization",
                    "A/B testing for ad creatives and landing pages"
                  ],
                  icon: "💰",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Social Media Marketing (SMM)",
                  description: "Your customers are spending hours daily on social sites like Facebook, Instagram, LinkedIn, and TikTok. We assist you in connecting, interacting, and converting with data-driven social media marketing strategies.",
                  services: [
                    "Organic content planning and posting",
                    "Paid social ads for Facebook, Instagram, LinkedIn",
                    "Community management and DMs handling",
                    "Retargeting and lookalike audiences",
                    "Monthly performance analytics"
                  ],
                  icon: "📱",
                  color: "from-indigo-500 to-purple-600"
                },
                {   title: "Email Marketing",
                  description: "Email is still one of the strongest tools to connect with your audience. Our email marketing solutions assist you in building leads, recovering carts, and remaining top-of-mind with customers.",
                  services: [
                    "Email automation (welcome series, follow-ups, re-engagement)",
                    "Newsletter creation and scheduling",
                    "Drip campaign design",
                    "List segmentation and personalization",
                    "A/B testing and open rate optimization"
                  ],
                  icon: "📧",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Lead Generation Services",
                  description: "More leads, more sales—it's that simple. We craft multi-channel lead generation funnels to regularly bring you qualified leads from throughout the U.S.",
                  services: [
                    "High-converting landing pages",
                    "LinkedIn outreach & cold email campaigns",
                    "Lead magnets and gated content",
                    "CRM integration (HubSpot, Zoho, Salesforce)"
                  ],
                  icon: "🎯",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Website Design & Development",
                  description: "Your website is your online storefront. We create mobile-friendly, conversion-oriented websites that make a great impression and fuel your growth.",
                  services: [
                    "Custom WordPress and Shopify websites",
                    "Responsive design (mobile/tablet/desktop)",
                    "Speed and performance optimization",
                    "E-commerce setup and product pages",
                    "Blog integration and CMS setup"
                  ],
                  icon: "💻",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  title: "Content Marketing",
                  description: "Content is king, and we know how to make it work for your brand. We create compelling, SEO-optimized content that builds authority, drives traffic, and supports every step of your sales funnel.",
                  services: [
                    "Blog writing and topic research",
                    "Web page copywriting",
                    "Video content for social media and YouTube",
                    "Infographics and visual content",
                    "SEO content calendars and strategy"
                  ],
                  icon: "✍️",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Analytics & Reporting",
                  description: "What's doing well? What's not? We offer clear, concise reports that allow you to make informed data-driven decisions for improved marketing performance.",
                  services: [
                    "Google Analytics setup and management",
                    "Custom dashboards through Google Looker Studio",
                    "Monthly ROI and traffic reports",
                    "UTM tracking and funnel analytics"
                  ],
                  icon: "📊",
                  color: "from-indigo-600 to-purple-600"
                },
                {
                  title: "E-Commerce Marketing",
                  description: "We assist online retailers in the U.S. in generating revenue with focused solutions aimed at boosting visibility, cart abandonment reduction, and customer loyalty.",
                  services: [
                    "Shopify and WooCommerce marketing",
                    "SEO and content for product pages",
                    "Google Shopping Ads",
                    "Email automation cart recovery",
                    "Social proof and review integration"
                  ],
                  icon: "🛒",
                  color: "from-purple-600 to-pink-600"
                },
                {
                  title: "Branding & Online Reputation Management",
                  description: "Your brand is your business identity. We assist you in creating a consistent, reliable, and recognizable brand everywhere you are online and offline while handling online reviews and feedback.",
                  services: [
                    "Logo and visual identity development",
                    "Review monitoring (Google, Yelp, BBB)",
                    "Crisis communication planning",
                    "Customer feedback reply templates",
                    "Reputation enhancement strategies"
                  ],
                  icon: "🏆",
                  color: "from-pink-500 to-red-500"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="flex items-start">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center text-3xl mr-8 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                      
                      <div>
                        <h4 className="font-bold text-[#092870] mb-3">
                          {service.title === "Search Engine Optimization (SEO)" ? "Our SEO Services Include:" :
                           service.title === "Pay-Per-Click Advertising (PPC)" ? "What We Offer:" :
                           service.title === "Social Media Marketing (SMM)" ? "Services Include:" :
                           service.title === "Email Marketing" ? "We Offer:" :
                           service.title === "Lead Generation Services" ? "Key Lead Gen Tactics:" :
                           service.title === "Website Design & Development" ? "Web Development Services:" :
                           service.title === "Content Marketing" ? "Content Services Include:" :
                           service.title === "Analytics & Reporting" ? "Our Reporting Includes:" :
                           service.title === "E-Commerce Marketing" ? "Our E-commerce Solutions:" :
                           "We Provide:"}
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {service.services.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Who We Help
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                Our digital marketing solutions are designed for a broad variety of U.S.-based businesses, such as:
              </p>
              <p className="text-lg text-gray-600">
                No matter where you're located in New York, Texas, Florida, or California—we'll assist you in growing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Small Businesses & Startups",
                  description: "Comprehensive digital marketing support for emerging businesses and startups",
                  icon: "🚀",
                  color: "from-[#092870] to-indigo-600"
                },
                {
                  title: "Real Estate & Property Management",
                  description: "Specialized marketing for real estate agents and property management companies",
                  icon: "🏠",
                  color: "from-[#30a659] to-emerald-600"
                },
                {
                  title: "Local Service Providers",
                  description: "Digital marketing for plumbers, dentists, salons, and other local service businesses",
                  icon: "🔧",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  title: "E-Commerce Businesses",
                  description: "Online marketing strategies for e-commerce stores and online retailers",
                  icon: "🛒",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "B2B & Professional Services",
                  description: "Lead generation and marketing for business-to-business and professional services",
                  icon: "💼",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Medical & Legal Practices",
                  description: "Specialized digital marketing for healthcare providers and legal professionals",
                  icon: "⚕️",
                  color: "from-cyan-500 to-blue-600"
                }
              ].map((client, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{client.title}</h3>
                  <p className="text-gray-700">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why US Clients Trust Us */}
        <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why U.S. Clients Trust Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "U.S. Market Experience",
                  description: "We know American buyer behavior, local trends, and search intent.",
                  icon: "🎯"
                },
                {
                  title: "Affordable Packages",
                  description: "Customizable pricing for each business phase—start-up, scale-up, or enterprise.",
                  icon: "💰"
                },
                {
                  title: "Fast Turnaround",
                  description: "Rapid onboarding and accelerated campaign launches.",
                  icon: "⚡"
                },
                {
                  title: "Proven Results",
                  description: "We concentrate on measures that count—leads, conversions, and sales.",
                  icon: "📈"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#30a659] to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Before FAQ */}
        <section className="relative py-20 bg-gradient-to-r from-[#30a659] via-emerald-600 to-teal-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Let us do the guessing when it comes to digital marketing so that you can concentrate on your business. Whether you need a full-service approach or help with one channel, we are here to make you successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#30a659] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Digital Marketing Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#30a659] transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                FAQ – Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our digital marketing services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is digital marketing?",
                  answer: "Digital marketing is the using online platform and tools to market product or service. The online platform and tools are digital media such as Google, Facebook, Instagram, and websites to advertise your brand, drive traffic, and create leads. Digital Marketing involves SEO, social media, paid advertising, Google My Business, email marketing, and much more."
                },
                {
                  question: "What digital marketing services do you provide?",
                  answer: "Pacerline Outsourcing Service Pvt Ltd offers: Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads (PPC), Facebook Ads and Campaign, Email Marketing, Content Marketing, Website Design, Development and Optimization, Local SEO (Google My Business)"
                },
                {
                  question: "What is social media marketing (SMM)?",
                  answer: "Social media marketing is utilizes platforms such as Facebook, Instagram, LinkedIn, and X (Twitter) to create brand awareness, lead generation, interact with your audience, execute targeted ads and promote customer loyalty."
                },
                {
                  question: "What social media sites do you handle?",
                  answer: "We handle and maintain Facebook, Instagram, LinkedIn, X (Twitter), YouTube, TikTok, Pinterest (if applicable to your niche)"
                },
                {
                  question: "Will social media marketing benefit my local business?",
                  answer: "Yes, social media helps to promote local businesses, create leads, raise awareness, engage with their community, market services and generate more traffic and website visits."
                },
                {
                  question: "Do you produce social media content?",
                  answer: "Yes, we produce and plan engaging posts, branded graphics, stories, reels, and ad creatives that resonate with your business voice and appeal to the right audience."
                },
                {
                  question: "How frequently do you post on social media?",
                  answer: "We provide customized service based on clients requirements, the content calendar will be between 3 to 7 posts per week according to your package and your marketing objectives."
                },
                {
                  question: "What are the types of results to expect from Social Media Marketing?",
                  answer: "Social Media Marketing can increase followers, brand engagement, lead generation, and even direct sales. The results vary according to your industry, target audience, and your platforms of use."
                },
                {
                  question: "How do I know my social media campaigns are effective?",
                  answer: "We offer monthly performance reports, such as reach, engagement, follower growth, clicks, conversions, and ROI tracking."
                },
                {
                  question: "Is social media paid advertising worth it?",
                  answer: "Yes. Paid social ads enable you to focus on specific demographics, locations, and behaviors—high ROI when done effectively."
                },
                {
                  question: "Do you provide social media marketing to U.S. companies?",
                  answer: "Yes! We focus on digital and social media marketing for companies throughout the United States. Our campaigns are designed with U.S. consumer behaviour and time zones in mind."
                },
                {
                  question: "Why do I need to outsource social media marketing?",
                  answer: "Outsourcing saves time, provides consistent branding, and exposes you to experts who can craft compelling content, optimize ad spend, and build your presence strategically."
                },
                {
                  question: "How do you determine prices for digital marketing services?",
                  answer: "We customize our pricing based on your needs—whether it's SEO, social media, ads, or a complete marketing strategy. Packages are available for startups and established businesses alike."
                },
                {
                  question: "Can you redesign my website to work better with my marketing?",
                  answer: "Yes. We design SEO-friendly, mobile-responsive, fast-loading websites that align perfectly with your marketing goals."
                },
                {
                  question: "Do you offer monthly reporting?",
                  answer: "Yes. We give you monthly detailed reports of your campaign performance, traffic increase, keyword positions, ROI for ads, and conversion rates to keep you up to speed."
                },
                {
                  question: "Why should I select Pacerline Outsourcing for online marketing?",
                  answer: "We provide U.S.-centered strategies, personalized marketing teams, measurable outcomes, and affordable solutions. Our method is tailored, data-based, and proven to build your business online."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#092870] flex items-center justify-between"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#092870] to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white text-sm font-bold">
                          {openFAQ === index ? '−' : '+'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="ml-12">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#092870] via-indigo-700 to-[#30a659]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Business with Expert Digital Marketing
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of US businesses who trust Pacerline for comprehensive digital marketing solutions. From SEO to social media, PPC to email marketing - we deliver results that drive growth and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#092870] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Digital Marketing Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#092870] transition-colors">
                Get Free Marketing Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactWidget />
      </div>
    </>
  )
}

export default DigitalMarketingPage
