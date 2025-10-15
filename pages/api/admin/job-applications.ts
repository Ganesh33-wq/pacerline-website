// Admin API to get all job applications
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

      const applications = await prisma.jobApplication.findMany({
        include: {
          job: {
            select: {
              title: true,
              department: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        data: applications,
        message: 'Job applications fetched successfully'
      })
    } catch (error) {
      console.error('Error fetching job applications:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      })
    }
  } else if (req.method === 'POST') {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '')
      if (!token || !verifyAdmin(token)) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized access'
        })
      }

      const { jobId, name, email, phone, resume, coverLetter, status } = req.body

      // Validate required fields
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: 'Name and email are required'
        })
      }

      const application = await prisma.jobApplication.create({
        data: {
          jobId: jobId || '',
          name,
          email,
          phone: phone || '',
          resume: resume || '',
          coverLetter: coverLetter || '',
          status: status || 'applied'
        }
      })

      return res.status(201).json({
        success: true,
        data: application,
        message: 'Job application created successfully'
      })
    } catch (error) {
      console.error('Error creating job application:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}