import { useState, useEffect } from 'react'

interface TimeSlot {
  id: string
  date: string
  time: string
  duration: number
  isBooked: boolean
  clientName?: string
  clientEmail?: string
}

interface CalendarBookingProps {
  isOpen: boolean
  onClose: () => void
}

const CalendarBooking = ({ isOpen, onClose }: CalendarBookingProps) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [duration, setDuration] = useState(30)
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [bookedSlots, setBookedSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Generate available time slots (9 AM to 5 PM)
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`)
      slots.push(`${hour.toString().padStart(2, '0')}:30`)
    }
    return slots
  }

  // Generate next 30 days
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  // Check if time slot is available
  const isTimeSlotAvailable = (date: string, time: string, duration: number) => {
    const selectedDateTime = new Date(`${date}T${time}:00`)
    const endTime = new Date(selectedDateTime.getTime() + duration * 60000)

    return !bookedSlots.some(slot => {
      if (slot.date !== date) return false
      
      const bookedStart = new Date(`${slot.date}T${slot.time}:00`)
      const bookedEnd = new Date(bookedStart.getTime() + slot.duration * 60000)
      
      // Check for overlap
      return (selectedDateTime < bookedEnd && endTime > bookedStart)
    })
  }

  // Load booked slots from Firebase
  useEffect(() => {
    const loadBookedSlots = async () => {
      // For demo, we'll still use localStorage
      // Replace this with Firebase calls when ready:
      // const slots = await getBookingsForDate(selectedDate)
      const savedSlots = localStorage.getItem('bookedDemoSlots')
      if (savedSlots) {
        setBookedSlots(JSON.parse(savedSlots))
      }
    }
    loadBookedSlots()
  }, [selectedDate])

  // Save booking
  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
      setMessage('Please fill in all fields')
      return
    }

    if (!isTimeSlotAvailable(selectedDate, selectedTime, duration)) {
      setMessage('This time slot is no longer available')
      return
    }

    setLoading(true)

    try {
      const newBooking: TimeSlot = {
        id: Date.now().toString(),
        date: selectedDate,
        time: selectedTime,
        duration,
        isBooked: true,
        clientName,
        clientEmail
      }

      const updatedSlots = [...bookedSlots, newBooking]
      setBookedSlots(updatedSlots)
      localStorage.setItem('bookedDemoSlots', JSON.stringify(updatedSlots))

      // Here you would typically send to your backend/database
      // For static sites, you could use:
      // 1. Netlify Forms
      // 2. Firebase
      // 3. EmailJS
      // 4. Zapier webhooks

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setMessage('Demo booked successfully! You will receive a confirmation email.')
      
      // Reset form
      setTimeout(() => {
        setSelectedDate('')
        setSelectedTime('')
        setClientName('')
        setClientEmail('')
        setMessage('')
        onClose()
      }, 2000)

    } catch (error) {
      setMessage('Error booking demo. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  const availableDates = generateAvailableDates()
  const timeSlots = generateTimeSlots()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Book a Demo</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a date</option>
              {availableDates.map(date => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map(time => {
                  const isAvailable = isTimeSlotAvailable(selectedDate, time, duration)
                  return (
                    <button
                      key={time}
                      onClick={() => isAvailable && setSelectedTime(time)}
                      disabled={!isAvailable}
                      className={`p-2 text-sm rounded-lg border ${
                        selectedTime === time
                          ? 'bg-blue-500 text-white border-blue-500'
                          : isAvailable
                          ? 'bg-white hover:bg-gray-50 border-gray-300'
                          : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Duration Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={90}>1.5 hours</option>
            </select>
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Booking Summary */}
          {selectedDate && selectedTime && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Booking Summary</h3>
              <p className="text-blue-800">
                <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-blue-800">
                <strong>Time:</strong> {selectedTime} ({duration} minutes)
              </p>
            </div>
          )}

          {/* Message */}
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('successfully') || message.includes('confirmation')
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}>
              {message}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              disabled={loading || !selectedDate || !selectedTime || !clientName || !clientEmail}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-[#092870] to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Demo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarBooking