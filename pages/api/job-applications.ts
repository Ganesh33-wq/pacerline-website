// Handle job application submissions
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import { sendEmail, emailTemplates } from '../../lib/email'

const prisma = new PrismaClient()

// Disable the default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Parse form data including files
      const form = formidable({
        uploadDir: './uploads/resumes',
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit
        filter: ({ name, originalFilename, mimetype }: any) => {
          // Only allow resume file field and specific file types
          return name === 'resume' && 
                 (mimetype?.includes('pdf') || 
                  mimetype?.includes('msword') || 
                  mimetype?.includes('officedocument'))
        }
      })

      // Ensure upload directory exists
      const uploadDir = './uploads/resumes'
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      const [fields, files] = await form.parse(req)

      // Validate required fields
      const jobId = Array.isArray(fields.jobId) ? fields.jobId[0] : fields.jobId
      const name = Array.isArray(fields.name) ? fields.name[0] : fields.name
      const email = Array.isArray(fields.email) ? fields.email[0] : fields.email
      const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone
      const coverLetter = Array.isArray(fields.coverLetter) ? fields.coverLetter[0] : fields.coverLetter

      if (!jobId || !name || !email || !phone) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields: jobId, name, email, and phone are required'
        })
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email format'
        })
      }

      // Check if job exists
      const job = await prisma.job.findUnique({
        where: { id: jobId }
      })

      if (!job) {
        return res.status(404).json({
          success: false,
          message: 'Job not found'
        })
      }

      // Handle resume file
      let resumeFileName = null
      if (files.resume && files.resume.length > 0) {
        const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume
        if (resumeFile.filepath) {
          // Generate unique filename
          const fileExt = path.extname(resumeFile.originalFilename || '.pdf')
          resumeFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}${fileExt}`
          const newPath = path.join(uploadDir, resumeFileName)
          
          // Move file to permanent location
          fs.renameSync(resumeFile.filepath, newPath)
        }
      }

      // Save job application to database
      const jobApplication = await prisma.jobApplication.create({
        data: {
          jobId: jobId,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          resume: resumeFileName || '',
          coverLetter: coverLetter?.trim() || null,
          status: 'applied'
        }
      })

      // Send acknowledgment email to client only (no admin email for job applications)
      const emailData = {
        name: jobApplication.name,
        email: jobApplication.email,
        position: job.title
      }

      try {
        // Send acknowledgment email to client
        await sendEmail({
          to: jobApplication.email,
          subject: 'Application Received - Pacerline Careers',
          html: emailTemplates.jobApplicationClient(emailData)
        })

        console.log('✅ Job application acknowledgment email sent successfully')
      } catch (emailError) {
        console.error('❌ Failed to send job application email:', emailError)
        // Don't fail the API call if email fails
      }

      return res.status(201).json({
        success: true,
        application: {
          id: jobApplication.id,
          name: jobApplication.name,
          email: jobApplication.email,
          phone: jobApplication.phone,
          coverLetter: jobApplication.coverLetter,
          status: jobApplication.status,
          appliedAt: jobApplication.createdAt
        },
        message: 'Job application submitted successfully! You will receive a confirmation email shortly.'
      })

    } catch (error) {
      console.error('Error processing job application:', error)
      
      // Clean up uploaded file on error
      try {
        const form = formidable()
        const [, files] = await form.parse(req)
        if (files.resume) {
          const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume
          if (resumeFile.filepath && fs.existsSync(resumeFile.filepath)) {
            fs.unlinkSync(resumeFile.filepath)
          }
        }
      } catch (cleanupError) {
        console.error('Error cleaning up file:', cleanupError)
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error while processing application'
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