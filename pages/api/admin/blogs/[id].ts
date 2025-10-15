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
  const { id } = req.query
  
  if (typeof id !== 'string') {
    return res.status(400).json({ 
      success: false,
      error: 'Invalid blog ID' 
    })
  }

  // Check authorization for all methods
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token || !verifyAdmin(token)) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access'
    })
  }

  try {
    switch (req.method) {
      case 'GET':
        const blog = await prisma.blog.findUnique({
          where: { id }
        })
        
        if (!blog) {
          return res.status(404).json({ 
            success: false,
            error: 'Blog post not found' 
          })
        }
        
        return res.status(200).json({
          success: true,
          data: blog
        })

      case 'PUT':
        const { title, content, excerpt, image, slug, published, tags, createdBy } = req.body
        
        const updatedBlog = await prisma.blog.update({
          where: { id },
          data: {
            title: title?.trim(),
            content: content?.trim(),
            excerpt: excerpt?.trim() || '',
            image: image?.trim() || '',
            slug: slug?.trim(),
            published: published === true || published === 'true' || published === '1',
            tags: tags?.trim() || '',
            createdBy: createdBy?.trim() || 'admin'
          }
        })
        
        return res.status(200).json({
          success: true,
          data: updatedBlog,
          message: 'Blog updated successfully'
        })

      case 'DELETE':
        const deletedBlog = await prisma.blog.delete({
          where: { id }
        })
        
        return res.status(200).json({ 
          success: true,
          message: 'Blog post deleted successfully',
          data: deletedBlog 
        })

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        return res.status(405).json({ 
          success: false,
          error: `Method ${req.method} not allowed` 
        })
    }
  } catch (error) {
    console.error('Blog API error:', error)
    
    if (error instanceof Error && error.message.includes('P2025')) {
      return res.status(404).json({ 
        success: false,
        error: 'Blog post not found' 
      })
    }
    
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return res.status(400).json({
        success: false,
        message: 'Blog with this slug already exists'
      })
    }
    
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? String(error) : undefined
    })
  } finally {
    await prisma.$disconnect()
  }
}