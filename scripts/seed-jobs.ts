// Add sample job data
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedJobs() {
  try {
    // Clear existing jobs
    await prisma.jobApplication.deleteMany()
    await prisma.job.deleteMany()

    // Create sample jobs
    const jobs = [
      {
        title: 'Senior Property Management Accountant',
        department: 'Accounting',
        location: 'Remote (USA/Australia)',
        type: 'Full-time',
        description: 'Lead property management accounting operations for multiple clients with expertise in AppFolio, Buildium, and QuickBooks. Handle financial reporting, reconciliations, and client communications.',
        requirements: 'CPA certification preferred • Expert knowledge of property management accounting • Proficiency in AppFolio, Buildium, QuickBooks • Strong analytical and problem-solving skills • Excellent communication skills',
        salary: '$60,000 - $80,000',
        published: true
      },
      {
        title: 'Virtual Assistant Specialist',
        department: 'Administrative Services',
        location: 'Remote',
        type: 'Full-time',
        description: 'Provide comprehensive virtual assistant services to property management companies and real estate investors. Handle administrative tasks, client communications, and data management.',
        requirements: 'Bachelor\'s degree preferred • Experience in property management administration • Proficiency in property management software • Strong organizational skills • Excellent English communication',
        salary: '$35,000 - $45,000',
        published: true
      },
      {
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'Develop and execute digital marketing strategies for property management and real estate clients. Create content, manage social media, and optimize online presence.',
        requirements: 'Bachelor\'s degree in Marketing or related field • Experience with SEO, PPC, and social media marketing • Knowledge of Google Analytics and marketing tools • Creative thinking and analytical skills • Portfolio of successful campaigns',
        salary: '$45,000 - $55,000',
        published: true
      },
      {
        title: 'Junior Bookkeeper',
        department: 'Accounting',
        location: 'Remote',
        type: 'Part-time',
        description: 'Support bookkeeping operations for small to medium property management clients. Handle data entry, bank reconciliations, and basic financial reporting.',
        requirements: 'Associate degree in Accounting or related field • Basic knowledge of QuickBooks • Strong attention to detail • Good communication skills • Ability to work independently',
        salary: '$25,000 - $35,000',
        published: true
      },
      {
        title: 'Customer Success Manager',
        department: 'Client Services',
        location: 'Remote',
        type: 'Full-time',
        description: 'Manage client relationships and ensure customer satisfaction. Work closely with clients to understand their needs and provide ongoing support for our services.',
        requirements: 'Bachelor\'s degree preferred • 3+ years of customer service experience • Strong communication and interpersonal skills • Problem-solving abilities • Experience with CRM systems',
        salary: '$40,000 - $50,000',
        published: true
      }
    ]

    for (const jobData of jobs) {
      await prisma.job.create({
        data: {
          ...jobData,
          createdBy: 'system'
        }
      })
    }

    console.log('✅ Sample jobs created successfully!')
    console.log(`📝 Created ${jobs.length} job openings`)

  } catch (error) {
    console.error('❌ Error creating sample jobs:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedJobs()