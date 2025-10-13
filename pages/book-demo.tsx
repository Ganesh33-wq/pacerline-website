import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BookDemoPage = () => {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    meetingType: 'demo',
    title: '',
    message: ''
  })

  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate calendar dates
  const generateCalendarDates = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const dates = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === month
      const isPast = date < today
      const isToday = date.toDateString() === new Date().toDateString()
      
      dates.push({
        date: date,
        dateString: date.toISOString().split('T')[0],
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday
      })
    }
    
    return dates
  }

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ]

  // Function to check if time slot is in the past for today's date
  const isTimeSlotDisabled = (timeSlot: string) => {
    if (selectedDate !== new Date().toISOString().split('T')[0]) {
      return false // Not today, so no time restrictions
    }
    
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    
    const [time, period] = timeSlot.split(' ')
    const [hours, minutes] = time.split(':')
    let slotHour = parseInt(hours)
    const slotMinute = parseInt(minutes)
    
    // Convert to 24-hour format
    if (period === 'PM' && slotHour !== 12) {
      slotHour += 12
    } else if (period === 'AM' && slotHour === 12) {
      slotHour = 0
    }
    
    // Check if the slot time has passed
    if (slotHour < currentHour) {
      return true // Past hour
    } else if (slotHour === currentHour && slotMinute <= currentMinute) {
      return true // Same hour but past or current minute
    }
    
    return false // Future time, available
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your meeting.')
      return
    }
    
    // Handle form submission here
    console.log('Demo booking submitted:', {
      ...formData,
      selectedDate,
      selectedTime
    })
    alert('Thank you! Your demo meeting has been scheduled. We will send you a confirmation email shortly.')
    router.push('/contact')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const navigateMonth = (direction: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <Head>
        <title>Book a Demo - Pacerline Outsourcing Service</title>
        <meta name="description" content="Schedule a demo meeting with Pacerline Outsourcing Service. Choose your preferred date and time for a personalized consultation." />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Demo Meeting
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a personalized consultation with our experts and discover how we can help grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Calendar Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Date & Time
              </h2>
              
              {/* Calendar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDates().map((dateObj, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!dateObj.isPast && dateObj.isCurrentMonth) {
                          const newDate = dateObj.dateString
                          setSelectedDate(newDate)
                          
                          // Clear selected time if it becomes invalid for the new date
                          if (selectedTime) {
                            // Check if the selected time would be disabled for the new date
                            const tempSelectedDate = selectedDate
                            // Temporarily set the new date to check time validity
                            if (newDate === new Date().toISOString().split('T')[0]) {
                              const now = new Date()
                              const currentHour = now.getHours()
                              const currentMinute = now.getMinutes()
                              
                              const [time, period] = selectedTime.split(' ')
                              const [hours, minutes] = time.split(':')
                              let slotHour = parseInt(hours)
                              const slotMinute = parseInt(minutes)
                              
                              if (period === 'PM' && slotHour !== 12) {
                                slotHour += 12
                              } else if (period === 'AM' && slotHour === 12) {
                                slotHour = 0
                              }
                              
                              if (slotHour < currentHour || (slotHour === currentHour && slotMinute <= currentMinute)) {
                                setSelectedTime('')
                              }
                            }
                          }
                        }
                      }}
                      disabled={dateObj.isPast || !dateObj.isCurrentMonth}
                      className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                        selectedDate === dateObj.dateString
                          ? 'bg-blue-600 text-white shadow-lg'
                          : dateObj.isToday
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : dateObj.isPast || !dateObj.isCurrentMonth
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {dateObj.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Times</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isDisabled = isTimeSlotDisabled(time)
                      return (
                        <button
                          key={time}
                          onClick={() => !isDisabled && setSelectedTime(time)}
                          disabled={isDisabled}
                          className={`p-3 text-sm rounded-lg border transition-all duration-200 ${
                            isDisabled
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50'
                              : selectedTime === time
                              ? 'bg-green-600 text-white border-green-600 shadow-md'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          {time}
                        </button>
                      )
                    })}
                  </div>
                  {selectedDate === new Date().toISOString().split('T')[0] && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-700 flex items-center">
                        <span className="mr-2">⏰</span>
                        Past time slots are disabled for today. Please select a future time.
                      </p>
                      <p className="text-xs text-yellow-600 mt-1">
                        Current time: {new Date().toLocaleTimeString('en-US', { 
                          hour: 'numeric', 
                          minute: '2-digit',
                          hour12: true 
                        })}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Meeting Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Type
                  </label>
                  <select
                    name="meetingType"
                    value={formData.meetingType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="demo">Product Demo</option>
                    <option value="consultation">Business Consultation</option>
                    <option value="technical">Technical Discussion</option>
                    <option value="pricing">Pricing Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Property Management Demo Meeting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific requirements or questions for the meeting..."
                  ></textarea>
                </div>

                {/* Selected Meeting Summary */}
                {selectedDate && selectedTime && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Meeting Summary:</h4>
                    <p className="text-blue-800 text-sm">
                      <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-blue-800 text-sm">
                      <strong>Time:</strong> {selectedTime} - {(() => {
                        const [time, period] = selectedTime.split(' ');
                        const [hours, minutes] = time.split(':');
                        let hour = parseInt(hours);
                        let newHour = hour + 1;
                        let newPeriod = period;
                        
                        if (newHour === 12 && period === 'AM') {
                          newPeriod = 'PM';
                        } else if (newHour === 13 && period === 'PM') {
                          newHour = 1;
                        } else if (newHour > 12) {
                          newHour = newHour - 12;
                        }
                        
                        return `${newHour}:${minutes} ${newPeriod}`;
                      })()} (1 hour duration)
                    </p>
                    <p className="text-blue-800 text-sm">
                      <strong>Type:</strong> {formData.meetingType.charAt(0).toUpperCase() + formData.meetingType.slice(1)}
                    </p>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule Meeting
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BookDemoPage