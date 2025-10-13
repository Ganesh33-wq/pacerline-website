import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check if user is authenticated (basic check)
    const token = req.cookies['admin-token'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Launch Prisma Studio
    const { stdout, stderr } = await execAsync('npx prisma studio --port 5556', {
      cwd: process.cwd()
    });
    
    // Redirect to Prisma Studio
    res.writeHead(302, { Location: 'http://localhost:5556' });
    res.end();
    
  } catch (error) {
    console.error('Error launching Prisma Studio:', error);
    res.status(500).json({ 
      message: 'Failed to launch Prisma Studio',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}