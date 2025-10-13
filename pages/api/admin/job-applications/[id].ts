// Admin API to handle individual job application operations
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
  const { id } = req.query
  
  // Check authorization for all methods
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token || !verifyAdmin(token)) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access'
    })
  }

  try {
    if (req.method === 'PUT') {
      const applicationData = req.body
      
      const updatedApplication = await prisma.jobApplication.update({
        where: { id: id as string },
        data: applicationData
      })

      return res.status(200).json({
        success: true,
        data: updatedApplication,
        message: 'Job application updated successfully'
      })
    }

    if (req.method === 'DELETE') {
      await prisma.jobApplication.delete({
        where: { id: id as string }
      })

      return res.status(200).json({
        success: true,
        message: 'Job application deleted successfully'
      })
    }

  } catch (error) {
    console.error('Error in job application API:', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }

  res.setHeader('Allow', ['PUT', 'DELETE'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}