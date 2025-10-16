import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNotificationContext } from '../contexts/NotificationContext'
import { DateTime } from 'luxon';

const EST_ZONE = 'America/New_York';

const BookDemoPage = () => {
  const router = useRouter()
  const { showSuccess, showError } = useNotificationContext()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    meetingType: 'demo',
    title: '',
    message: ''
  })
  const [bookedSlots, setBookedSlots] = useState<{date: string, time: string}[]>([])

  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    // Fetch all booked demo slots
    fetch('/api/demo-booking')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.bookings)) {
          setBookedSlots(data.bookings)
        }
      })
      .catch(() => setBookedSlots([]))
  }, [])

  // Get EST current date/time
  const getEstNow = () => DateTime.now().setZone(EST_ZONE);

  // Generate calendar dates
  const generateCalendarDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = DateTime.fromObject({ year, month: month + 1, day: 1 }, { zone: EST_ZONE });
    const startDate = firstDay.minus({ days: firstDay.weekday % 7 });
    const today = getEstNow().startOf('day');
    const dates = [];
    for (let i = 0; i < 42; i++) {
      const date = startDate.plus({ days: i });
      const isCurrentMonth = date.month === month + 1;
      const isPast = date < today;
      const isToday = date.hasSame(today, 'day');
      dates.push({
        date: date,
        dateString: date.toFormat('yyyy-MM-dd'),
        day: date.day,
        isCurrentMonth,
        isPast,
        isToday
      });
    }
    return dates;
  }

  // Generate 24-hour time slots
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  // Function to check if time slot is in the past for today's date
  const isTimeSlotDisabled = (timeSlot: string) => {
    // Only allow current/future times for today
    if (selectedDate === new Date().toISOString().split('T')[0]) {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const [hours, minutes] = timeSlot.split(':').map(Number)
      if (hours < currentHour || (hours === currentHour && minutes <= currentMinute)) return true
    }
    // Disable if already booked
    return bookedSlots.some(slot => slot.date === selectedDate && slot.time === timeSlot)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime) {
      showError(
        'Missing Information',
        'Please select a date and time for your meeting.',
        5000
      )
      return
    }

    setIsSubmitting(true)

    try {
      const bookingData = {
        ...formData,
        date: selectedDate,
        time: selectedTime
      }

      const response = await fetch('/api/demo-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (response.ok) {
        showSuccess(
          'Demo Scheduled Successfully!',
          'Your demo meeting has been booked. We will send you a confirmation email shortly.',
          8000
        )
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          meetingType: 'demo',
          title: '',
          message: ''
        })
        setSelectedDate('')
        setSelectedTime('')
        
        // Redirect after 3 seconds
        setTimeout(() => {
          router.push('/contact')
        }, 3000)
      } else {
        showError(
          'Booking Failed',
          result.message || 'Something went wrong. Please try again.',
          6000
        )
      }
    } catch (error) {
      console.error('Demo booking error:', error)
      showError(
        'Network Error',
        'Unable to book demo. Please check your connection and try again.',
        6000
      )
    } finally {
      setIsSubmitting(false)
    }
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
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Calendar Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100 overflow-x-auto">
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
                
                <div className="grid grid-cols-7 gap-1 text-xs sm:text-sm md:text-base">
                  {generateCalendarDates().map((dateObj, index) => {
                    // Disable dates before today using Luxon
                    const today = getEstNow().startOf('day');
                    const isDisabled = dateObj.date < today;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isDisabled) {
                            setSelectedDate(dateObj.dateString)
                            setSelectedTime('')
                          }
                        }}
                        disabled={isDisabled}
                        className={`p-2 text-sm rounded-lg transition-all duration-200 ${
                          selectedDate === dateObj.dateString
                            ? 'bg-blue-600 text-white shadow-lg'
                            : dateObj.isToday
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : isDisabled
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {dateObj.day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Times (EST)</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {timeSlots.filter(time => {
                      if (selectedDate === getEstNow().toFormat('yyyy-MM-dd')) {
                        const now = getEstNow();
                        const [slotHour, slotMinute] = time.split(':').map(Number);
                        if (slotHour < now.hour || (slotHour === now.hour && slotMinute <= now.minute)) {
                          return false;
                        }
                      }
                      return true;
                    }).map((time) => {
                      const isBooked = bookedSlots.some(slot => slot.date === selectedDate && slot.time === time);
                      return (
                        <div className="relative" key={time}>
                          <button
                            onClick={() => !isBooked && setSelectedTime(time)}
                            disabled={isBooked}
                            className={`p-3 text-sm rounded-lg border transition-all duration-200 w-full min-w-[60px] ${
                              isBooked
                                ? 'bg-red-100 text-red-600 border-red-300 cursor-not-allowed opacity-80'
                                : selectedTime === time
                                ? 'bg-green-600 text-white border-green-600 shadow-md'
                                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                            }`}
                            onMouseOver={isBooked ? (e) => {
                              if (!e.currentTarget.parentElement) return;
                              const tooltip = document.createElement('div');
                              tooltip.innerText = 'Already booked';
                              tooltip.className = 'absolute z-10 left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-red-600 text-white rounded shadow-lg pointer-events-none';
                              e.currentTarget.parentElement.appendChild(tooltip);
                              e.currentTarget.onmouseleave = () => {
                                if (tooltip.parentElement) tooltip.parentElement.removeChild(tooltip);
                              };
                            } : undefined}
                          >
                            {time}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
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
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scheduling...
                    </span>
                  ) : (
                    'Schedule Meeting'
                  )}
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