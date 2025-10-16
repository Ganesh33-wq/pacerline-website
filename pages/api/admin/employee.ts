import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const EMPLOYEE_PHOTO_DIR = path.join(process.cwd(), 'public', 'employee');

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req: NextApiRequest): Promise<{ fields: any; files: any }> {
  const formidable = require('formidable');
  const form = formidable({ multiples: false, uploadDir: EMPLOYEE_PHOTO_DIR, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const employees = await prisma.employee.findMany();
    return res.status(200).json(employees);
  }

  if (req.method === 'POST') {
    try {
      const { fields, files } = await parseForm(req);
      let photoPath = '';
      if (files.photo) {
        const file = files.photo;
        const fileName = `${Date.now()}_${file.originalFilename}`;
        const destPath = path.join(EMPLOYEE_PHOTO_DIR, fileName);
        fs.renameSync(file.filepath, destPath);
        photoPath = `/employee/${fileName}`;
      }
      const employee = await prisma.employee.create({
        data: {
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          photo: photoPath,
          role: fields.role,
        },
      });
      return res.status(201).json(employee);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create employee', details: error });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { fields, files } = await parseForm(req);
      const id = fields.id;
      let photoPath = fields.photo || '';
      if (files.photo) {
        const file = files.photo;
        const fileName = `${Date.now()}_${file.originalFilename}`;
        const destPath = path.join(EMPLOYEE_PHOTO_DIR, fileName);
        fs.renameSync(file.filepath, destPath);
        photoPath = `/employee/${fileName}`;
      }
      const employee = await prisma.employee.update({
        where: { id },
        data: {
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          photo: photoPath,
          role: fields.role,
        },
      });
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update employee', details: error });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      await prisma.employee.delete({ where: { id: String(id) } });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete employee', details: error });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
