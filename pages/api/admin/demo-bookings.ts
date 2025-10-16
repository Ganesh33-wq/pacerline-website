// Admin API to get all demo bookings
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key'

const verifyAdmin = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return decoded.role === 'admin'
  } catch (error) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '')
      if (!token || !verifyAdmin(token)) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized access'
        })
      }

      const bookings = await prisma.demoBooking.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        data: bookings,
        message: 'Demo bookings fetched successfully'
      })
    } catch (error) {
      console.error('Error fetching demo bookings:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ success: false, message: 'Missing or invalid booking ID' })
      }
      await prisma.demoBooking.delete({ where: { id } })
      return res.status(200).json({ success: true, message: 'Demo booking deleted successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to delete booking', error })
    }
  }

  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { status, title, message, date, time } = req.body;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ success: false, message: 'Missing or invalid booking ID' });
      }
      const updated = await prisma.demoBooking.update({
        where: { id },
        data: { status, title, message, date, time }
      });
      return res.status(200).json({ success: true, booking: updated, message: 'Demo booking updated successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to update booking', error });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, email, phone, company, meetingType, title, message, date, time } = req.body;
      if (!name || !email || !phone || !title || !date || !time) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
      const booking = await prisma.demoBooking.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: company ? company.trim() : '',
          meetingType: meetingType || 'demo',
          title: title.trim(),
          message: message ? message.trim() : '',
          date,
          time,
          status: 'scheduled'
        }
      });
      return res.status(201).json({ success: true, booking, message: 'Demo booking created successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to create booking', error });
    }
  }

  res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}