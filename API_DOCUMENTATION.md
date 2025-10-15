# 📚 Pacerline Website API Documentation

## 🔐 Authentication

All admin endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

---

## 👤 Admin Authentication

### POST `/api/admin/login`
**Purpose**: Authenticate admin user and get JWT token

**Request Body**:
```json
{
  "username": "admin",
  "password": "your_secure_password"
}
```

**Response (200)**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful"
}
```

**Response (401)**:
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

## 📞 Contacts API

### GET `/api/admin/contacts`
**Purpose**: Get all contact form submissions

**Headers**:
```
Authorization: Bearer <jwt_token>
```

**Response (200)**:
```json
[
  {
    "id": 1,
    "name": "John Smith",
    "email": "john.smith@example.com",
    "phone": "+1-555-123-4567",
    "company": "Tech Solutions Inc",
    "message": "Interested in your property management services",
    "status": "New",
    "priority": "Medium",
    "createdAt": "2025-10-16T10:30:00.000Z",
    "updatedAt": "2025-10-16T10:30:00.000Z"
  }
]
```

### POST `/api/admin/contacts`
**Purpose**: Create new contact (for testing)

**Request Body**:
```json
{
  "name": "Sarah Johnson",
  "email": "sarah@example.com",
  "phone": "+1-555-987-6543",
  "company": "Real Estate Pro",
  "message": "Need help with bookkeeping services",
  "status": "New",
  "priority": "High"
}
```

### PUT `/api/admin/contacts/[id]`
**Purpose**: Update contact status/priority

**Request Body**:
```json
{
  "status": "In Progress",
  "priority": "High"
}
```

### DELETE `/api/admin/contacts/[id]`
**Purpose**: Delete contact record

**Response (200)**:
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

---

## 💼 Jobs API

### GET `/api/admin/jobs`
**Purpose**: Get all job postings

**Response (200)**:
```json
[
  {
    "id": 1,
    "title": "Senior Full Stack Developer",
    "department": "Engineering",
    "location": "Remote",
    "type": "Full-time",
    "experience": "Senior",
    "salary": "$120,000 - $150,000",
    "description": "We are looking for an experienced full stack developer to join our growing team...",
    "requirements": "- 5+ years experience with React/Node.js\n- Strong TypeScript skills\n- Experience with databases",
    "published": true,
    "featured": false,
    "createdAt": "2025-10-16T09:00:00.000Z",
    "updatedAt": "2025-10-16T09:00:00.000Z"
  }
]
```

### POST `/api/admin/jobs`
**Purpose**: Create new job posting

**Request Body**:
```json
{
  "title": "Marketing Manager",
  "department": "Marketing",
  "location": "New York",
  "type": "Full-time",
  "experience": "Mid-level",
  "salary": "$80,000 - $100,000",
  "description": "Join our marketing team to drive growth and brand awareness...",
  "requirements": "- 3+ years marketing experience\n- Digital marketing expertise\n- Analytics skills",
  "published": true,
  "featured": true
}
```

### PUT `/api/admin/jobs/[id]`
**Purpose**: Update job posting

**Request Body**:
```json
{
  "title": "Senior Marketing Manager",
  "salary": "$90,000 - $120,000",
  "published": false
}
```

### DELETE `/api/admin/jobs/[id]`
**Purpose**: Delete job posting

---

## 📝 Job Applications API

### GET `/api/admin/job-applications`
**Purpose**: Get all job applications

**Response (200)**:
```json
[
  {
    "id": 1,
    "jobTitle": "Senior Full Stack Developer",
    "applicantName": "Alex Rodriguez",
    "applicantEmail": "alex.rodriguez@email.com",
    "applicantPhone": "+1-555-234-5678",
    "experience": "6 years",
    "skills": "React, Node.js, TypeScript, PostgreSQL, AWS",
    "coverLetter": "Dear Hiring Manager, I am excited to apply for the Senior Full Stack Developer position...",
    "resumeUrl": "/uploads/resumes/alex_rodriguez_resume.pdf",
    "status": "Under Review",
    "rating": 8,
    "createdAt": "2025-10-16T14:20:00.000Z",
    "updatedAt": "2025-10-16T15:30:00.000Z"
  }
]
```

### POST `/api/admin/job-applications`
**Purpose**: Create job application (usually from public form)

**Request Body**:
```json
{
  "jobTitle": "Marketing Manager",
  "applicantName": "Maria Garcia",
  "applicantEmail": "maria.garcia@email.com",
  "applicantPhone": "+1-555-345-6789",
  "experience": "4 years",
  "skills": "Digital Marketing, SEO, Google Analytics, Content Strategy",
  "coverLetter": "I am writing to express my interest in the Marketing Manager position..."
}
```

### PUT `/api/admin/job-applications/[id]`
**Purpose**: Update application status/rating

**Request Body**:
```json
{
  "status": "Interview Scheduled",
  "rating": 9
}
```

---

## 📰 Blogs API

### GET `/api/admin/blogs`
**Purpose**: Get all blog posts

**Response (200)**:
```json
[
  {
    "id": 1,
    "title": "10 Property Management Tips for 2025",
    "slug": "10-property-management-tips-for-2025",
    "excerpt": "Learn the essential tips for successful property management in the modern era...",
    "content": "Property management has evolved significantly over the past few years...",
    "author": "Admin",
    "category": "Technology",
    "status": "Published",
    "featured": true,
    "published": true,
    "tags": "property management, real estate, tips",
    "createdAt": "2025-10-15T08:00:00.000Z",
    "updatedAt": "2025-10-16T10:00:00.000Z"
  }
]
```

### POST `/api/admin/blogs`
**Purpose**: Create new blog post

**Request Body**:
```json
{
  "title": "Understanding AppFolio Integration",
  "slug": "understanding-appfolio-integration",
  "excerpt": "A comprehensive guide to integrating AppFolio with your property management workflow...",
  "content": "AppFolio is one of the leading property management software solutions...",
  "author": "Admin",
  "category": "Technology",
  "status": "Draft",
  "featured": false,
  "published": false,
  "tags": "AppFolio, integration, property management"
}
```

### PUT `/api/admin/blogs/[id]`
**Purpose**: Update blog post

**Request Body**:
```json
{
  "status": "Published",
  "published": true,
  "featured": true
}
```

### DELETE `/api/admin/blogs/[id]`
**Purpose**: Delete blog post

---

## 📅 Demo Bookings API

### GET `/api/admin/demo-bookings`
**Purpose**: Get all demo booking requests

**Response (200)**:
```json
[
  {
    "id": 1,
    "name": "David Chen",
    "email": "david.chen@realty.com",
    "phone": "+1-555-456-7890",
    "company": "Chen Realty Group",
    "preferredDate": "2025-10-18T14:00:00.000Z",
    "message": "Would like to see a demo of your AppFolio bookkeeping services",
    "status": "Pending",
    "priority": "High",
    "createdAt": "2025-10-16T11:45:00.000Z",
    "updatedAt": "2025-10-16T11:45:00.000Z"
  }
]
```

### POST `/api/admin/demo-bookings`
**Purpose**: Create demo booking (from public form)

**Request Body**:
```json
{
  "name": "Lisa Thompson",
  "email": "lisa@propertyplus.com",
  "phone": "+1-555-567-8901",
  "company": "Property Plus Management",
  "preferredDate": "2025-10-20T10:00:00.000Z",
  "message": "Interested in Buildium integration services",
  "status": "Pending",
  "priority": "Medium"
}
```

---

## 📋 About Sections API

### GET `/api/admin/about`
**Purpose**: Get all about page sections

**Response (200)**:
```json
[
  {
    "id": 1,
    "section": "Team",
    "title": "Meet Our Expert Team",
    "content": "Our team consists of certified accountants and property management specialists...",
    "order": 1,
    "published": true,
    "createdAt": "2025-10-16T08:00:00.000Z",
    "updatedAt": "2025-10-16T08:00:00.000Z"
  }
]
```

### POST `/api/admin/about`
**Purpose**: Create new about section

**Request Body**:
```json
{
  "section": "Mission",
  "title": "Our Mission Statement",
  "content": "To provide exceptional property management and accounting services...",
  "order": 2,
  "published": true
}
```

---

## 📧 Public Form Submission APIs

### POST `/api/contact`
**Purpose**: Public contact form submission

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "company": "Example Corp",
  "message": "I need help with property management accounting"
}
```

**Response (200)**:
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!"
}
```

### POST `/api/demo-booking`
**Purpose**: Public demo booking form submission

**Request Body**:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1-555-987-6543",
  "company": "Smith Properties",
  "preferredDate": "2025-10-20T15:00:00.000Z",
  "message": "Would like to schedule a demo"
}
```

### POST `/api/job-application`
**Purpose**: Public job application submission

**Request Body**:
```json
{
  "jobTitle": "Accountant",
  "applicantName": "Bob Wilson",
  "applicantEmail": "bob@example.com",
  "applicantPhone": "+1-555-456-7890",
  "experience": "5 years",
  "skills": "QuickBooks, Excel, Financial Analysis",
  "coverLetter": "I am interested in the Accountant position..."
}
```

---

## 🔄 Common Response Patterns

### Success Response:
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... }
}
```

### Error Response:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

### Validation Error:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

---

## 🛠 Testing with cURL

### Login Example:
```bash
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

### Get Contacts Example:
```bash
curl -X GET http://localhost:3000/api/admin/contacts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create Job Example:
```bash
curl -X POST http://localhost:3000/api/admin/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Software Engineer",
    "department": "Engineering",
    "location": "Remote",
    "type": "Full-time",
    "experience": "Mid-level",
    "published": true
  }'
```

---

## 📊 Database Schema Reference

### Contacts Table:
- `id`: Integer (Primary Key)
- `name`: String
- `email`: String
- `phone`: String (Optional)
- `company`: String (Optional)
- `message`: Text
- `status`: String (Default: "New")
- `priority`: String (Default: "Medium")
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Jobs Table:
- `id`: Integer (Primary Key)
- `title`: String
- `department`: String
- `location`: String
- `type`: String
- `experience`: String
- `salary`: String (Optional)
- `description`: Text
- `requirements`: Text (Optional)
- `published`: Boolean (Default: false)
- `featured`: Boolean (Default: false)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Blogs Table:
- `id`: Integer (Primary Key)
- `title`: String
- `slug`: String (Unique)
- `excerpt`: Text
- `content`: Text
- `author`: String
- `category`: String
- `status`: String (Default: "Draft")
- `featured`: Boolean (Default: false)
- `published`: Boolean (Default: false)
- `tags`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

---

## 🚀 Production URLs

Replace `localhost:3000` with your production domain:
- **Production**: `https://yourdomain.com/api/...`
- **Staging**: `https://staging.yourdomain.com/api/...`
- **Development**: `http://localhost:3000/api/...`

---

## 📝 Notes

1. **Rate Limiting**: Public APIs may have rate limiting applied
2. **File Uploads**: Resume uploads handled separately with multipart/form-data
3. **Email Notifications**: All form submissions trigger email notifications
4. **Validation**: All endpoints include input validation
5. **Pagination**: Large datasets may include pagination parameters

---

*Last updated: October 16, 2025*