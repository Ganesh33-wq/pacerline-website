// Admin API to get all jobs
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
      const jobs = await prisma.job.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        data: jobs,
        message: 'Jobs fetched successfully'
      })
    }

    if (req.method === 'POST') {
      const { title, department, location, type, salary, description, requirements, experience, published, createdBy } = req.body
      
      // Validate required fields
      if (!title || !department || !location || !type || !description || !requirements) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields: title, department, location, type, description, and requirements are required'
        })
      }

      const newJob = await prisma.job.create({
        data: {
          title: title.trim(),
          department: department.trim(),
          location: location.trim(),
          type: type.trim(),
          salary: salary?.trim() || '',
          description: description.trim(),
          requirements: requirements.trim(),
          experience: experience?.trim() || '',
          published: published === true || published === 'true' || published === '1',
          createdBy: createdBy?.trim() || 'admin'
        }
      })

      return res.status(201).json({
        success: true,
        data: newJob,
        message: 'Job created successfully'
      })
    }

  } catch (error) {
    console.error('Error in jobs API:', error)
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return res.status(400).json({
          success: false,
          message: 'Job with this title already exists'
        })
      }
    }
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? String(error) : undefined
    })
  } finally {
    await prisma.$disconnect()
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}