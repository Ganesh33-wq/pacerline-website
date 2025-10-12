const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-2xl font-bold !text-white">
                Pacerline Outsourcing Service Pvt. Ltd.
              </h3>
            </div>
            <p className="!text-white mb-6 leading-relaxed">
              Professional accounting, bookkeeping, property management, and digital marketing 
              solutions for businesses worldwide. Your trusted partner for financial success with 
              integrity, excellence, and innovation.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="#" className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="p-2 bg-sky-400 hover:bg-sky-500 rounded-full transition-all duration-300 transform hover:scale-110 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="p-2 bg-blue-800 hover:bg-blue-900 rounded-full transition-all duration-300 transform hover:scale-110 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 !text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="/accounting" className="!text-white hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Accounting</a></li>
              <li><a href="/bookkeeping-usa" className="!text-white hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Bookkeeping</a></li>
              <li><a href="/accounting-australia" className="!text-white hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Tax Services</a></li>
              <li><a href="/property-management" className="!text-white hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Property Management</a></li>
              <li><a href="/digital-marketing" className="!text-white hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">→ Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 !text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 !text-white">
                <span className="text-primary-400">📧</span>
                <a href="mailto:info@pacerline.com" className="!text-white hover:text-primary-400 transition-colors">info@pacerline.com</a>
              </li>
              <li className="flex items-center space-x-2 !text-white">
                <span className="text-primary-400">🌐</span>
                <a href="https://www.pacerline.com" className="!text-white hover:text-primary-400 transition-colors">www.pacerline.com</a>
              </li>
              <li className="flex items-center space-x-2 !text-white">
                <span className="text-primary-400">📍</span>
                <div className="!text-white">
                  <div className="!text-white">No.215, First Floor</div>
                  <div className="!text-white">Bharathiyar Road, New Sidhaputhur</div>
                  <div className="!text-white">Coimbatore, Tamil Nadu - 641044</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="!text-white mb-4">&copy; 2025 Pacerline Outsourcing Service Pvt. Ltd. | Outsourced Accounting, Bookkeeping & Property Management Support for USA Companies | Based in India</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <a href="/privacy-policy" className="!text-white hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
            <span className="!text-white hidden sm:block">|</span>
            <a href="/terms-of-service" className="!text-white hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
