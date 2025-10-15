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
    }

    if (req.method === 'POST') {
      const { title, content, excerpt, image, slug, published, tags, createdBy } = req.body
      
      // Validate required fields
      if (!title || !content || !slug) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields: title, content, and slug are required'
        })
      }

      const newBlog = await prisma.blog.create({
        data: {
          title: title.trim(),
          content: content.trim(),
          excerpt: excerpt?.trim() || '',
          image: image?.trim() || '',
          slug: slug.trim(),
          published: published === true || published === 'true' || published === '1',
          tags: tags?.trim() || '',
          createdBy: createdBy?.trim() || 'admin'
        }
      })

      return res.status(201).json({
        success: true,
        data: newBlog,
        message: 'Blog created successfully'
      })
    }
  } catch (error) {
    console.error('Error in blogs API:', error)
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return res.status(400).json({
          success: false,
          message: 'Blog with this slug already exists'
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