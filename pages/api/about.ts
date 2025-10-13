import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
import { sendEmail, emailTemplates } from '../../lib/email'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, query } = req.body

      // Validation
      if (!name || !email || !phone) {
        return res.status(400).json({ 
          message: 'Name, email, and phone are required fields' 
        })
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Please enter a valid email address' 
        })
      }

      // Save to database
      const aboutSubmission = await prisma.about.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          query: query ? query.trim() : '',
          status: 'new'
        }
      })

      console.log('About form submitted:', {
        id: aboutSubmission.id,
        name: aboutSubmission.name,
        email: aboutSubmission.email,
        timestamp: aboutSubmission.createdAt
      })

      // Send emails
      const emailData = {
        name: aboutSubmission.name,
        email: aboutSubmission.email,
        phone: aboutSubmission.phone,
        company: '', // About form doesn't have company field
        interest: 'Company Information',
        message: aboutSubmission.query
      }

      try {
        // Send detailed email to admin
        await sendEmail({
          to: process.env.ADMIN_EMAIL!,
          subject: `ℹ️ New About Us Inquiry - ${aboutSubmission.name}`,
          html: emailTemplates.aboutAdmin(emailData)
        })

        // Send acknowledgment email to client
        await sendEmail({
          to: aboutSubmission.email,
          subject: 'Thank You for Your Interest in Pacerline',
          html: emailTemplates.aboutClient(emailData)
        })

        console.log('✅ About form emails sent successfully')
      } catch (emailError) {
        console.error('❌ Failed to send about form emails:', emailError)
        // Don't fail the API call if email fails
      }

      res.status(201).json({
        success: true,
        message: 'Your query has been submitted successfully! You will receive a confirmation email shortly.',
        id: aboutSubmission.id
      })

    } catch (error) {
      console.error('About API error:', error)
      
      // Handle duplicate email (if unique constraint exists)
      if (error instanceof Error && error.message.includes('Unique constraint')) {
        return res.status(400).json({ 
          message: 'This email has already been used. Please use a different email.' 
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