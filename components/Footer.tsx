const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ProBusiness Services
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional accounting, bookkeeping, property management, and digital marketing 
              solutions for businesses worldwide. Your trusted partner for financial success with 
              integrity, excellence, and innovation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:scale-110">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:scale-110">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:scale-110">
                Facebook
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/accounting" className="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Accounting</a></li>
              <li><a href="/bookkeeping-usa" className="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Bookkeeping</a></li>
              <li><a href="/accounting-australia" className="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Tax Services</a></li>
              <li><a href="/property-management" className="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Property Management</a></li>
              <li><a href="/digital-marketing" className="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-primary-400">📧</span>
                <span>info@probusiness.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary-400">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary-400">📍</span>
                <div>
                  <div>123 Business St</div>
                  <div>Suite 100</div>
                  <div>Business City, BC 12345</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 ProBusiness Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
