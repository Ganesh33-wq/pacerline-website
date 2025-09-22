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
      name: 'Accounting',
      href: '/accounting',
      dropdown: [
        { name: 'Property Management Accounting', href: '/property-management' },
        { name: 'Bookkeeping and Tax Service (USA)', href: '/bookkeeping-usa' },
        { name: 'Accounting and Tax Services (Australia)', href: '/accounting-australia' },
      ]
    },
    {
      name: 'AppFolio',
      href: '/appfolio',
      dropdown: [
        { name: 'AppFolio Bookkeeping Service', href: '/appfolio-bookkeeping' },
        { name: 'AppFolio Administration Service', href: '/appfolio-admin' },
      ]
    },
    {
      name: 'Buildium',
      href: '/buildium',
      dropdown: [
        { name: 'Buildium Bookkeeping Service', href: '/buildium-bookkeeping' },
        { name: 'Buildium Administration Service', href: '/buildium-admin' },
      ]
    },
    { name: 'Virtual Assistant', href: '/virtual-assistant' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
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
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="relative">
              <img 
                src="/images/home/company-logo.png" 
                alt="Pacerline Company Logo" 
                className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Link href="/" className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#092870] via-[#30a659] to-[#092870] bg-clip-text text-transparent hover:from-[#30a659] hover:to-[#092870] transition-all duration-300 hidden sm:block">
              Pacerline
            </Link>
            <Link href="/" className="text-sm font-bold bg-gradient-to-r from-[#092870] via-[#30a659] to-[#092870] bg-clip-text text-transparent hover:from-[#30a659] hover:to-[#092870] transition-all duration-300 sm:hidden">
              ProBusiness
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={item.href} className="flex items-center px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg group">
                      {item.name}
                      <ChevronDownIcon className={`ml-2 h-4 w-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180 text-indigo-500' : 'group-hover:text-white'}`} />
                    </Link>
                    
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl z-[9999] py-4 transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 transform translate-y-0 pointer-events-auto visible' 
                        : 'opacity-0 transform -translate-y-2 pointer-events-none invisible'
                    }`}>
                      <div className="px-2">
                        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3 px-4">
                          {item.name} Services
                        </div>
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md group mb-1"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-medium group-hover:font-semibold transition-all duration-300">{dropdownItem.name}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        ))}
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
              <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl z-[9999] py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">All Services</Link>
                <Link href="/accounting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">Accounting</Link>
                <Link href="/appfolio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">AppFolio</Link>
                <Link href="/buildium" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">Buildium</Link>
                <Link href="/virtual-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">Virtual Assistant</Link>
                <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-lg mx-2 transition-all duration-300">Digital Marketing</Link>
              </div>
            </div>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-purple-600 hover:via-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group text-sm md:text-base">
              <span className="relative z-10">Get Started</span>
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
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-indigo-500' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-3 sm:pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] border-l-2 border-transparent hover:border-indigo-400"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ animationDelay: `${dropdownIndex * 50}ms` }}
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full mr-2 sm:mr-3"></div>
                            {dropdownItem.name}
                          </Link>
                        ))}
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
