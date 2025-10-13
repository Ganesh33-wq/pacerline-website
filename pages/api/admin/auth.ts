// Admin authentication API
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body

      // Get admin credentials from environment variables
      const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
      const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

      // Validate input
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: 'Username and password are required'
        })
      }

      // Check credentials
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Generate JWT token
        const token = jwt.sign(
          { 
            username: username,
            role: 'admin',
            loginTime: new Date().toISOString()
          },
          JWT_SECRET,
          { expiresIn: '24h' }
        )

        return res.status(200).json({
          success: true,
          message: 'Login successful',
          token: token,
          user: {
            username: username,
            role: 'admin'
          }
        })
      } else {
        return res.status(401).json({
          success: false,
          message: 'Invalid username or password'
        })
      }

    } catch (error) {
      console.error('Admin auth error:', error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      })
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['POST'])
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} not allowed`
  })
}