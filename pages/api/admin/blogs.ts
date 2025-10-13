// Admin API to get all blogs
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

      const blogs = await prisma.blog.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        data: blogs,
        message: 'Blogs fetched successfully'
      })
    } catch (error) {
      console.error('Error fetching blogs:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      })
    }
  }

  res.setHeader('Allow', ['GET'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}