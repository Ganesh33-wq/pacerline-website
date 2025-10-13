import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
import { sendEmail, emailTemplates } from '../../lib/email'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { 
        name, 
        email, 
        phone, 
        company, 
        meetingType, 
        title, 
        message, 
        date, 
        time 
      } = req.body

      // Validation
      if (!name || !email || !phone || !title || !date || !time) {
        return res.status(400).json({ 
          message: 'Name, email, phone, meeting title, date, and time are required fields' 
        })
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Please enter a valid email address' 
        })
      }

      // Date validation (should be future date)
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        return res.status(400).json({ 
          message: 'Please select a future date for your meeting' 
        })
      }

      // Save to database
      const demoBooking = await prisma.demoBooking.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: company ? company.trim() : '',
          meetingType: meetingType || 'demo',
          title: title.trim(),
          message: message ? message.trim() : '',
          date: date,
          time: time,
          status: 'scheduled'
        }
      })

      console.log('Demo booking created:', {
        id: demoBooking.id,
        name: demoBooking.name,
        email: demoBooking.email,
        date: demoBooking.date,
        time: demoBooking.time,
        timestamp: demoBooking.createdAt
      })

      // Send emails
      const emailData = {
        name: demoBooking.name,
        email: demoBooking.email,
        phone: demoBooking.phone,
        company: demoBooking.company,
        date: demoBooking.date,
        time: demoBooking.time,
        service: demoBooking.title,
        message: demoBooking.message
      }

      try {
        // Send detailed email to admin
        await sendEmail({
          to: process.env.ADMIN_EMAIL!,
          subject: `🎯 New Demo Booking - ${demoBooking.name} (${demoBooking.date} at ${demoBooking.time})`,
          html: emailTemplates.demoBookingAdmin(emailData)
        })

        // Send acknowledgment email to client
        await sendEmail({
          to: demoBooking.email,
          subject: 'Demo Request Confirmed - Pacerline',
          html: emailTemplates.demoBookingClient(emailData)
        })

        console.log('✅ Demo booking emails sent successfully')
      } catch (emailError) {
        console.error('❌ Failed to send demo booking emails:', emailError)
        // Don't fail the API call if email fails
      }

      res.status(201).json({
        success: true,
        message: 'Your demo meeting has been scheduled successfully! You will receive a confirmation email shortly.',
        booking: {
          id: demoBooking.id,
          date: demoBooking.date,
          time: demoBooking.time,
          title: demoBooking.title
        }
      })

    } catch (error) {
      console.error('Demo booking API error:', error)
      
      // Handle potential duplicate booking (same email, date, time)
      if (error instanceof Error && error.message.includes('Unique constraint')) {
        return res.status(400).json({ 
          message: 'You already have a booking for this date and time. Please choose a different slot.' 
        })
      }

      res.status(500).json({ 
        message: 'Internal server error. Please try again later.' 
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ 
      message: `Method ${req.method} not allowed` 
    })
  }
}