import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' })
}

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const getTokenFromRequest = (req: any): string | null => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  return null
}