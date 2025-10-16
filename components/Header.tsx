import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services',
      href: '/services',
      megaMenu: {
        accountingServices: [
          { name: 'Property Management Accounting (USA)', href: '/property-management', icon: '🏢' },
          { name: 'Bookkeeping & Tax Services (USA)', href: '/bookkeeping-usa', icon: '🇺🇸' },
          { name: 'Accounting & Tax Services (Australia)', href: '/accounting-australia', icon: '🇦🇺' },
          { name: 'AppFolio Bookkeeping Service', href: '/appfolio-bookkeeping', icon: '📊' },
          { name: 'Buildium Bookkeeping Service', href: '/buildium-bookkeeping', icon: '📋' },
        ],
        virtualAssistant: [
          { name: 'Virtual Assistant Service', href: '/virtual-assistant', icon: '👩‍💼' },
          { name: 'AppFolio Administrator Service', href: '/appfolio-admin', icon: '⚙️' },
          { name: 'Buildium Administration', href: '/buildium-admin', icon: '🔧' },
        ],
        digitalMarketing: [
          { name: 'Digital Marketing', href: '/digital-marketing', icon: '📱' },
        ]
      }
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay before closing
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-indigo-100/50 sticky top-0 z-50 transition-all duration-300 w-full">
      <nav className="w-full" ref={dropdownRef}>
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6 px-3 sm:px-4 md:px-6 lg:px-8 w-full min-h-[64px]">
          {/* Logo (as home link, no text) */}
          <div className="flex items-center group flex-shrink-0 ml-[10px]">
            <Link href="/admin/dashboard" className="relative block">
              <img 
                src="/images/home/company-logo.png" 
                alt="Pacerline Company Logo" 
                className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.megaMenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={item.href} className="flex items-center px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg group">
                      {item.name}
                      <ChevronDownIcon className={`ml-2 h-4 w-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180 text-indigo-500' : 'group-hover:text-white'}`} />
                    </Link>
                    
                    {/* Mega Menu - 3 Column Layout */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white border border-gray-300 rounded-2xl shadow-2xl z-[9999] py-6 transition-all duration-500 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 transform translate-y-0 pointer-events-auto visible' 
                        : 'opacity-0 transform -translate-y-4 pointer-events-none invisible'
                    }`}>
                      <div className="px-6">
                        <div className="grid grid-cols-3 gap-8">
                          
                          {/* Column 1: Accounting Services */}
                          <div className="space-y-1">
                            <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4 pb-2 border-b border-indigo-100">
                              Accounting Services
                            </h3>
                            {item.megaMenu.accountingServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-3 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group border border-transparent hover:border-indigo-200"
                              >
                                <span className="text-lg mr-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{service.icon}</span>
                                <div>
                                  <span className="font-medium group-hover:font-semibold transition-all duration-300 block leading-tight">
                                    {service.name}
                                  </span>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Column 2: Virtual Assistant Services */}
                          <div className="space-y-1">
                            <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-4 pb-2 border-b border-purple-100">
                              Virtual Assistant Services
                            </h3>
                            {item.megaMenu.virtualAssistant.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-3 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group border border-transparent hover:border-purple-200"
                              >
                                <span className="text-lg mr-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{service.icon}</span>
                                <div>
                                  <span className="font-medium group-hover:font-semibold transition-all duration-300 block leading-tight">
                                    {service.name}
                                  </span>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Column 3: Digital Marketing */}
                          <div className="space-y-1">
                            <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-4 pb-2 border-b border-green-100">
                              Digital Marketing
                            </h3>
                            {item.megaMenu.digitalMarketing.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-3 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group border border-transparent hover:border-green-200"
                              >
                                <span className="text-lg mr-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{service.icon}</span>
                                <div>
                                  <span className="font-medium group-hover:font-semibold transition-all duration-300 block leading-tight">
                                    {service.name}
                                  </span>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                            
                            {/* Call to Action in Digital Marketing Column */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                              <h4 className="text-sm font-semibold text-green-800 mb-2">Need Custom Solutions?</h4>
                              <p className="text-xs text-green-600 mb-3">Let us create a tailored service package for your business needs.</p>
                              <Link 
                                href="/contact" 
                                className="inline-block bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                              >
                                Get Quote
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">Home</Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">About</Link>
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300 flex items-center">
                Services <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-300 rounded-2xl shadow-xl z-[9999] py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                <div className="px-2">
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2 px-3">Accounting Services</h4>
                    <Link href="/property-management" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-indigo-200">🏢 Property Management (USA)</Link>
                    <Link href="/bookkeeping-usa" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-indigo-200">🇺🇸 Bookkeeping & Tax (USA)</Link>
                    <Link href="/accounting-australia" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-indigo-200">🇦🇺 Accounting (Australia)</Link>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2 px-3">Virtual Assistant</h4>
                    <Link href="/virtual-assistant" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-purple-200">👩‍💼 Virtual Assistant</Link>
                    <Link href="/appfolio-admin" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-purple-200">⚙️ AppFolio Admin</Link>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2 px-3">Digital Marketing</h4>
                    <Link href="/digital-marketing" className="block px-3 py-2 text-sm text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600 rounded-lg mx-1 transition-all duration-300 border border-transparent hover:border-green-200">📱 Digital Marketing</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group text-sm md:text-base" style={{ color: 'white' }}>
              <span className="relative z-10" style={{ color: 'white' }}>Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-110"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2 sm:top-3' : 'top-0.5 sm:top-1'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-2 sm:top-3 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2 sm:top-3' : 'top-3.5 sm:top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
          <div className="px-3 sm:px-4 pt-4 pb-6 space-y-1 bg-gradient-to-b from-white/98 to-gray-50/98 backdrop-blur-lg border-t border-gray-200/50">
            {navigation.map((item, index) => (
              <div 
                key={item.name}
                className="animate-in slide-in-from-left-4 duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-indigo-500' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${activeDropdown === item.name ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-2 sm:pl-3 space-y-3 pt-2">
                        
                        {/* Accounting Services Section */}
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-3">
                          <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Accounting Services</h4>
                          <div className="space-y-1">
                            {item.megaMenu.accountingServices.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ animationDelay: `${serviceIndex * 50}ms` }}
                              >
                                <span className="text-sm mr-2">{service.icon}</span>
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Virtual Assistant Services Section */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3">
                          <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">Virtual Assistant</h4>
                          <div className="space-y-1">
                            {item.megaMenu.virtualAssistant.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-purple-600 hover:bg-white/70 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ animationDelay: `${serviceIndex * 50}ms` }}
                              >
                                <span className="text-sm mr-2">{service.icon}</span>
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Digital Marketing Services Section */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
                          <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">Digital Marketing</h4>
                          <div className="space-y-1">
                            {item.megaMenu.digitalMarketing.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-green-600 hover:bg-white/70 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ animationDelay: `${serviceIndex * 50}ms` }}
                              >
                                <span className="text-sm mr-2">{service.icon}</span>
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
                style={{ color: 'white' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
