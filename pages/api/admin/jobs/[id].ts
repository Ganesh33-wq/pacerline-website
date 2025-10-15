// Admin API to handle individual job operations
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
      const { title, department, location, type, salary, description, requirements, experience, published, createdBy } = req.body
      
      const updatedJob = await prisma.job.update({
        where: { id: id as string },
        data: {
          title: title?.trim(),
          department: department?.trim(),
          location: location?.trim(),
          type: type?.trim(),
          salary: salary?.trim() || '',
          description: description?.trim(),
          requirements: requirements?.trim(),
          experience: experience?.trim() || '',
          published: published === true || published === 'true' || published === '1',
          createdBy: createdBy?.trim() || 'admin'
        }
      })

      return res.status(200).json({
        success: true,
        data: updatedJob,
        message: 'Job updated successfully'
      })
    }

    if (req.method === 'DELETE') {
      await prisma.job.delete({
        where: { id: id as string }
      })

      return res.status(200).json({
        success: true,
        message: 'Job deleted successfully'
      })
    }

  } catch (error) {
    console.error('Error in job API:', error)
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