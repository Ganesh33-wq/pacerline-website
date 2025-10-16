import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';

const verifyAdmin = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !verifyAdmin(token)) {
    return res.status(401).json({ success: false, message: 'Unauthorized access' });
  }
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ success: false, message: 'Missing or invalid booking ID' });
  }

  if (req.method === 'PUT') {
    try {
      const { status, title, message, date, time } = req.body;
      const updated = await prisma.demoBooking.update({
        where: { id },
        data: { status, title, message, date, time }
      });
      return res.status(200).json({ success: true, booking: updated, message: 'Demo booking updated successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to update booking', error });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.demoBooking.delete({ where: { id } });
      return res.status(200).json({ success: true, message: 'Demo booking deleted successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to delete booking', error });
    }
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
}
