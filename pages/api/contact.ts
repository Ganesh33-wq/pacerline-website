import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

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

      const contact = await prisma.contact.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          query: query ? query.trim() : '',
          status: 'new'
        }
      })

      console.log('Contact form submitted:', {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        timestamp: contact.createdAt
      })

      res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully!',
        id: contact.id
      })
    } catch (error) {
      console.error('Contact API error:', error)
      
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