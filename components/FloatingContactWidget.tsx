import { useState } from 'react'
import CalendarBooking from './CalendarBooking'

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hello! I would like to know more about your services.', '_blank')
  }

  const handleCall = () => {
    window.open('tel:+1234567890', '_self')
  }

  const handleBookDemo = () => {
    setShowCalendar(true)
    setIsOpen(false) // Close the main widget
  }

  return (
    <>
      {/* Floating Widget Container */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Main Contact Buttons - Show when expanded */}
        <div className={`mb-4 space-y-3 transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}>
          
          {/* Book Demo Button */}
          <div className="flex items-center justify-end">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg mr-3 hidden sm:block">
              <span className="text-sm font-semibold">Book a Demo</span>
            </div>
            <button
              onClick={handleBookDemo}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#092870] to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
              title="Book Demo"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* WhatsApp Button */}
          <div className="flex items-center justify-end">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg mr-3 hidden sm:block">
              <span className="text-sm font-semibold">WhatsApp Chat</span>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#25D366] to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
              title="WhatsApp"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
              </svg>
            </button>
          </div>

          {/* Call Button */}
          <div className="flex items-center justify-end">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg mr-3 hidden sm:block">
              <span className="text-sm font-semibold">Call Now</span>
            </div>
            <button
              onClick={handleCall}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#30a659] to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
              title="Call Now"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Toggle Button */}
        <div className="flex justify-end">
          <button
            onClick={toggleWidget}
            className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#092870] to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            title="Contact Us"
          >
            {isOpen ? (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Bottom Bar Alternative (shows on very small screens) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-4 z-40 sm:hidden">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          <button
            onClick={handleBookDemo}
            className="flex flex-col items-center space-y-1 text-[#092870] hover:text-indigo-600 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#092870] to-indigo-600 text-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-medium">Demo</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center space-y-1 text-[#25D366] hover:text-green-600 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-green-500 text-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
              </svg>
            </div>
            <span className="text-xs font-medium">WhatsApp</span>
          </button>

          <button
            onClick={handleCall}
            className="flex flex-col items-center space-y-1 text-[#30a659] hover:text-emerald-600 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#30a659] to-emerald-600 text-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-xs font-medium">Call</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile when widget is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Calendar Booking Modal */}
      <CalendarBooking 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)} 
      />
    </>
  )
}

export default FloatingContactWidget
