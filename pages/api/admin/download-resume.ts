import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Verify admin token
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const JWT_SECRET = process.env.JWT_SECRET || 'pacerline-jwt-secret-2025-admin-dashboard-auth'
    try {
      jwt.verify(token, JWT_SECRET)
    } catch {
      return res.status(401).json({ message: 'Invalid token' })
    }

    // Get filename from query
    const { filename } = req.query
    if (!filename || typeof filename !== 'string') {
      return res.status(400).json({ message: 'Filename is required' })
    }

    // Construct file path
    const filePath = path.join(process.cwd(), 'uploads', 'resumes', filename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' })
    }

    // Read file
    const fileBuffer = fs.readFileSync(filePath)
    const fileExt = path.extname(filename).toLowerCase()

    // Set content type based on file extension
    const contentTypes: Record<string, string> = {
      '.pdf': 'application/pdf',
      '.doc': 'application/msword',
      '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    }

    const contentType = contentTypes[fileExt] || 'application/octet-stream'

    // Set headers for download
    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.setHeader('Content-Length', fileBuffer.length)

    // Send file
    return res.send(fileBuffer)

  } catch (error) {
    console.error('Download error:', error)
    return res.status(500).json({ message: 'Failed to download file' })
  }
}
