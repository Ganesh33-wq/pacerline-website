import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';
const EMPLOYEE_PHOTO_DIR = path.join(process.cwd(), 'public', 'employee');

export const config = {
	api: {
		bodyParser: false,
	},
};

const verifyAdmin = (token: string) => {
	try {
		const decoded = jwt.verify(token, JWT_SECRET) as any;
		return decoded.role === 'admin';
	} catch (error) {
		return false;
	}
};

function parseForm(req: NextApiRequest): Promise<{ fields: any; files: any }> {
	const formidable = require('formidable');
	const form = new formidable.IncomingForm({ multiples: false, uploadDir: EMPLOYEE_PHOTO_DIR, keepExtensions: true });
	return new Promise((resolve, reject) => {
		form.parse(req, (err: any, fields: any, files: any) => {
			if (err) reject(err);
			else resolve({ fields, files });
		});
	});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Check authorization for all methods
	const token = req.headers.authorization?.replace('Bearer ', '');
	if (!token || !verifyAdmin(token)) {
		return res.status(401).json({
			success: false,
			message: 'Unauthorized access',
		});
	}

	try {
		if (req.method === 'GET') {
			const employees = await prisma.employee.findMany({
				orderBy: { createdAt: 'desc' },
			});
			return res.status(200).json({
				success: true,
				data: employees,
				message: 'Employees fetched successfully',
			});
		}

			if (req.method === 'POST') {
				try {
					const { fields, files } = await parseForm(req);
					let photoPath = '';
					if (files.photo) {
						let file = files.photo;
						if (Array.isArray(file)) file = file[0];
						if (file && file.filepath) {
							const fileName = `${Date.now()}_${file.originalFilename || file.newFilename || 'photo'}`;
							const destPath = path.join(EMPLOYEE_PHOTO_DIR, fileName);
							fs.renameSync(file.filepath, destPath);
							photoPath = `/employee/${fileName}`;
						}
					}
					// Formidable may return fields as arrays, so extract first value if needed
					const getString = (val: any) => Array.isArray(val) ? val[0] : val;
					const name = getString(fields.name);
					const email = getString(fields.email);
					const phone = getString(fields.phone);
					const role = getString(fields.role);
					// Validate required fields and types
					const errors: string[] = [];
					if (!name) errors.push('Missing: name');
					if (!email) errors.push('Missing: email');
					if (!phone) errors.push('Missing: phone');
					if (!role) errors.push('Missing: role');
					if (name && typeof name !== 'string') errors.push('Invalid type for name');
					if (email && typeof email !== 'string') errors.push('Invalid type for email');
					if (phone && typeof phone !== 'string') errors.push('Invalid type for phone');
					if (role && typeof role !== 'string') errors.push('Invalid type for role');
					if (errors.length > 0) {
						return res.status(400).json({
							success: false,
							message: 'Validation error',
							errors,
							received: { name, email, phone, role }
						});
					}
					const newEmployee = await prisma.employee.create({
						data: {
							name: name.trim(),
							email: email.trim(),
							phone: phone.trim(),
							role: role.trim(),
							photo: photoPath,
						},
					});
					return res.status(201).json({
						success: true,
						data: newEmployee,
						message: 'Employee created successfully',
					});
				} catch (error: any) {
					return res.status(500).json({
						success: false,
						message: 'Server error',
						details: error && error.message ? error.message : error,
					});
				}
			}

			if (req.method === 'PUT') {
				const { fields, files } = await parseForm(req);
				const { id, name, email, phone, role } = fields;
				let photoPath = fields.photo || '';
						if (files.photo) {
							let file = files.photo;
							if (Array.isArray(file)) file = file[0];
							if (file && file.filepath) {
								const fileName = `${Date.now()}_${file.originalFilename || file.newFilename || 'photo'}`;
								const destPath = path.join(EMPLOYEE_PHOTO_DIR, fileName);
								fs.renameSync(file.filepath, destPath);
								photoPath = `/employee/${fileName}`;
							}
						}
				if (!id) {
					return res.status(400).json({
						success: false,
						message: 'Missing employee id',
					});
				}
				const updatedEmployee = await prisma.employee.update({
					where: { id },
					data: {
						name: name?.trim(),
						email: email?.trim(),
						phone: phone?.trim(),
						role: role?.trim(),
						photo: photoPath,
					},
				});
				return res.status(200).json({
					success: true,
					data: updatedEmployee,
					message: 'Employee updated successfully',
				});
			}

		if (req.method === 'DELETE') {
			const { id } = req.query;
			if (!id) {
				return res.status(400).json({
					success: false,
					message: 'Missing employee id',
				});
			}
			await prisma.employee.delete({ where: { id: String(id) } });
			return res.status(204).end();
		}

		res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	} catch (error) {
		// Print error details to server console for debugging
		// and return error details in the response
		// eslint-disable-next-line no-console
		console.error('EMPLOYEE API ERROR:', error);
		return res.status(500).json({
			success: false,
			message: 'Server error',
			details: error instanceof Error ? { message: error.message, stack: error.stack } : error,
		});
	}
}
