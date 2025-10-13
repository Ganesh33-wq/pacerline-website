import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'
import { hashPassword } from '../../../../lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findFirst()
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' })
    }

    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Email, password, and name are required' })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create admin
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'admin'
      }
    })

    res.status(201).json({
      message: 'Admin created successfully',
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Setup error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}