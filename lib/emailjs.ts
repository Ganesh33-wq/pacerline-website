// EmailJS integration for booking notifications
// Install: npm install @emailjs/browser

import emailjs from '@emailjs/browser'

// Initialize EmailJS (call this in your _app.tsx or main component)
export const initEmailJS = () => {
  emailjs.init('your-public-key') // Replace with your EmailJS public key
}

// Send booking confirmation email
export const sendBookingConfirmation = async (bookingDetails: {
  clientName: string
  clientEmail: string
  date: string
  time: string
  duration: number
}) => {
  try {
    const templateParams = {
      to_name: bookingDetails.clientName,
      to_email: bookingDetails.clientEmail,
      booking_date: new Date(bookingDetails.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      booking_time: bookingDetails.time,
      duration: bookingDetails.duration,
      company_name: 'Pacerline Outsourcing Service Pvt Ltd',
      from_name: 'Pacerline Team'
    }

    // Send to client
    await emailjs.send(
      'your-service-id', // Replace with your EmailJS service ID
      'booking_confirmation_template', // Replace with your template ID
      templateParams
    )

    // Send to company (internal notification)
    await emailjs.send(
      'your-service-id',
      'internal_booking_notification', // Replace with internal template ID
      templateParams
    )

    return { success: true }
  } catch (error) {
    console.error('Error sending emails:', error)
    return { success: false, error }
  }
}

// EmailJS templates you'll need to create:

/* 
Template 1: booking_confirmation_template (for client)
Subject: Demo Booking Confirmation - {{company_name}}

Hi {{to_name}},

Your demo has been successfully booked!

Details:
- Date: {{booking_date}}
- Time: {{booking_time}}
- Duration: {{duration}} minutes

We'll send you a calendar invite and meeting link shortly.

Best regards,
{{from_name}}
{{company_name}}
*/

/*
Template 2: internal_booking_notification (for your team)
Subject: New Demo Booking - {{booking_date}}

New demo booking received:

Client: {{to_name}}
Email: {{to_email}}
Date: {{booking_date}}
Time: {{booking_time}}
Duration: {{duration}} minutes

Please prepare the demo materials and send calendar invite.
*/