// Get all published jobs
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const jobs = await prisma.job.findMany({
        where: {
          published: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      })

      return res.status(200).json({
        success: true,
        jobs: jobs,
        message: 'Jobs fetched successfully'
      })
    } catch (error) {
      console.error('Error fetching jobs:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error while fetching jobs'
      })
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['GET'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}