// Firebase configuration for booking system
// Install: npm install firebase

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore'

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export interface BookingData {
  date: string
  time: string
  duration: number
  clientName: string
  clientEmail: string
  createdAt: Timestamp
  status: 'confirmed' | 'cancelled'
}

// Save booking to Firebase
export const saveBooking = async (bookingData: Omit<BookingData, 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'demoBookings'), {
      ...bookingData,
      createdAt: Timestamp.now(),
      status: 'confirmed'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving booking:', error)
    return { success: false, error }
  }
}

// Check for conflicting bookings
export const checkBookingConflict = async (date: string, time: string, duration: number) => {
  try {
    const bookingsRef = collection(db, 'demoBookings')
    const q = query(
      bookingsRef, 
      where('date', '==', date),
      where('status', '==', 'confirmed')
    )
    
    const querySnapshot = await getDocs(q)
    const existingBookings = querySnapshot.docs.map(doc => doc.data() as BookingData)
    
    const requestedStart = new Date(`${date}T${time}:00`)
    const requestedEnd = new Date(requestedStart.getTime() + duration * 60000)
    
    const hasConflict = existingBookings.some(booking => {
      const existingStart = new Date(`${booking.date}T${booking.time}:00`)
      const existingEnd = new Date(existingStart.getTime() + booking.duration * 60000)
      
      return (requestedStart < existingEnd && requestedEnd > existingStart)
    })
    
    return hasConflict
  } catch (error) {
    console.error('Error checking conflicts:', error)
    return false
  }
}

// Get all bookings for a specific date
export const getBookingsForDate = async (date: string) => {
  try {
    const bookingsRef = collection(db, 'demoBookings')
    const q = query(
      bookingsRef,
      where('date', '==', date),
      where('status', '==', 'confirmed')
    )
    
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (BookingData & { id: string })[]
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return []
  }
}