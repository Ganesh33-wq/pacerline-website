// Add sample blog data
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedBlogs() {
  try {
    // Clear existing blogs
    await prisma.blog.deleteMany()

    // Create sample blog posts
    const blogs = [
      {
        title: 'The Future of Property Management: How Technology is Transforming the Industry',
        slug: 'future-property-management-technology',
        content: 'Technology has become the backbone of modern property management, revolutionizing how we handle everything from tenant screening to maintenance requests. In this comprehensive guide, we explore the latest technological advances that are reshaping the property management landscape...',
        excerpt: 'Discover how modern property management software and outsourcing solutions are revolutionizing the way property managers operate, from automated rent collection to AI-powered maintenance scheduling.',
        tags: 'Technology,Property Management,Automation,Future Trends',
        published: true
      },
      {
        title: 'AppFolio vs Buildium: Which Property Management Software is Right for You?',
        slug: 'appfolio-vs-buildium-comparison',
        content: 'Choosing the right property management software is crucial for your business success. In this detailed comparison, we analyze AppFolio and Buildium across multiple dimensions including features, pricing, user experience, and customer support...',
        excerpt: 'A comprehensive comparison of two leading property management platforms, helping you choose the best solution for your business needs.',
        tags: 'AppFolio,Buildium,Software,Comparison',
        published: true
      },
      {
        title: '5 Ways Outsourcing Can Reduce Your Property Management Costs',
        slug: 'outsourcing-reduce-property-management-costs',
        content: 'Cost optimization is a critical concern for property management companies. Strategic outsourcing can significantly reduce operational expenses while maintaining or even improving service quality. Here are five proven strategies...',
        excerpt: 'Learn how strategic outsourcing can help property management companies reduce operational costs while improving service quality.',
        tags: 'Outsourcing,Cost Reduction,Efficiency,ROI',
        published: true
      },
      {
        title: 'Understanding Australian Property Management Compliance Requirements',
        slug: 'australian-property-management-compliance',
        content: 'Australian property management regulations are complex and constantly evolving. This comprehensive guide covers the essential compliance requirements that every property manager operating in Australia must understand...',
        excerpt: 'Navigate the complex landscape of Australian property management regulations and ensure your business stays compliant.',
        tags: 'Australia,Compliance,Regulations,Legal',
        published: true
      },
      {
        title: 'Digital Marketing Strategies for Property Management Companies',
        slug: 'digital-marketing-property-management',
        content: 'In today\'s digital age, property management companies need effective online marketing strategies to attract and retain clients. This guide covers proven digital marketing tactics from SEO to social media...',
        excerpt: 'Effective digital marketing tactics to help property management companies attract more clients and grow their business.',
        tags: 'Digital Marketing,SEO,Lead Generation,Growth',
        published: true
      },
      {
        title: 'Best Practices for Virtual Assistant Integration in Property Management',
        slug: 'virtual-assistant-integration-best-practices',
        content: 'Virtual assistants can dramatically improve efficiency in property management operations. This guide provides step-by-step instructions for successfully integrating VAs into your workflow...',
        excerpt: 'How to successfully integrate virtual assistants into your property management operations for maximum efficiency.',
        tags: 'Virtual Assistant,Integration,Efficiency,Management',
        published: true
      }
    ]

    for (const blogData of blogs) {
      await prisma.blog.create({
        data: {
          ...blogData,
          createdBy: 'system'
        }
      })
    }

    console.log('✅ Sample blog posts created successfully!')
    console.log(`📝 Created ${blogs.length} blog posts`)

  } catch (error) {
    console.error('❌ Error creating sample blog posts:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedBlogs()