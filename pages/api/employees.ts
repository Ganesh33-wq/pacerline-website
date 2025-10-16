// Next.js API route to get all employees
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { name: 'asc' }
    });
    res.status(200).json({ success: true, employees });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch employees', error });
  }
}
