import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key'
const EMPLOYEE_PHOTO_DIR = path.join(process.cwd(), 'public', 'employee')

export const config = {
  api: {
    bodyParser: false
  }
}

const verifyAdmin = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return decoded.role === 'admin'
  } catch (error) {
    return false
  }
}

function parseForm(req: NextApiRequest): Promise<{ fields: any; files: any }> {
  const formidable = require('formidable')
  const form = new formidable.IncomingForm({ multiples: false, uploadDir: EMPLOYEE_PHOTO_DIR, keepExtensions: true })
  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token || !verifyAdmin(token)) {
    return res.status(401).json({ success: false, message: 'Unauthorized access' })
  }

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ success: false, message: 'Missing or invalid employee id' })
  }

  try {
    if (req.method === 'GET') {
      const employee = await prisma.employee.findUnique({ where: { id } })
      if (!employee) return res.status(404).json({ success: false, message: 'Employee not found' })
      return res.status(200).json({ success: true, data: employee })
    }

    if (req.method === 'PUT') {
      const { fields, files } = await parseForm(req)
      // Fields may come in as arrays when using formidable
      const getString = (val: any) => Array.isArray(val) ? val[0] : val

      const name = getString(fields.name)
      const email = getString(fields.email)
      const phone = getString(fields.phone)
      const role = getString(fields.role)
      let photoPath = getString(fields.photo) || ''

      if (files && files.photo) {
        let file = files.photo
        if (Array.isArray(file)) file = file[0]
        if (file && file.filepath) {
          const fileName = `${Date.now()}_${file.originalFilename || file.newFilename || 'photo'}`
          const destPath = path.join(EMPLOYEE_PHOTO_DIR, fileName)
          fs.renameSync(file.filepath, destPath)
          photoPath = `/employee/${fileName}`
        }
      }

      const updated = await prisma.employee.update({
        where: { id },
        data: {
          name: name?.trim(),
          email: email?.trim(),
          phone: phone?.trim(),
          role: role?.trim(),
          photo: photoPath
        }
      })

      return res.status(200).json({ success: true, data: updated, message: 'Employee updated successfully' })
    }

    if (req.method === 'DELETE') {
      await prisma.employee.delete({ where: { id } })
      return res.status(200).json({ success: true, message: 'Employee deleted successfully' })
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (error: any) {
    console.error('EMPLOYEE [id] API ERROR:', error)
    return res.status(500).json({ success: false, message: 'Server error', details: error?.message || error })
  }
}
