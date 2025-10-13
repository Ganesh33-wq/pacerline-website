import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'
import { verifyPassword, generateToken } from '../../../../lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // Find admin user
    const admin = await prisma.admin.findUnique({
      where: { email }
    })

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Verify password
    const isValid = await verifyPassword(password, admin.password)
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Generate JWT token
    const token = generateToken({ 
      id: admin.id, 
      email: admin.email, 
      name: admin.name,
      role: admin.role 
    })

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}