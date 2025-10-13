// Admin API to get all contacts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key'

// Middleware to verify JWT token
const verifyAdmin = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return decoded.role === 'admin'
  } catch (error) {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check authorization for all methods
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token || !verifyAdmin(token)) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access'
    })
  }

  try {
    if (req.method === 'GET') {
      const contacts = await prisma.contact.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        data: contacts,
        message: 'Contacts fetched successfully'
      })
    }

    if (req.method === 'POST') {
      const contactData = req.body
      
      const newContact = await prisma.contact.create({
        data: contactData
      })

      return res.status(201).json({
        success: true,
        data: newContact,
        message: 'Contact created successfully'
      })
    }

    if (req.method === 'PUT') {
      const { id } = req.query
      const contactData = req.body
      
      const updatedContact = await prisma.contact.update({
        where: { id: id as string },
        data: contactData
      })

      return res.status(200).json({
        success: true,
        data: updatedContact,
        message: 'Contact updated successfully'
      })
    }

    if (req.method === 'DELETE') {
      const { id } = req.query
      
      await prisma.contact.delete({
        where: { id: id as string }
      })

      return res.status(200).json({
        success: true,
        message: 'Contact deleted successfully'
      })
    }

  } catch (error) {
    console.error('Error in contacts API:', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}