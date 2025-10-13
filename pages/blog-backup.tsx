import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useNotificationContext } from '../contexts/NotificationContext'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt?: string
  image?: string
  slug: string
  published: boolean
  tags?: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

const BlogPage = () => {
  const { showError } = useNotificationContext()
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null)

  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs')
      if (response.ok) {
        const data = await response.json()
        const blogPosts = data.blogs || []
        setBlogs(blogPosts)
        // Set first blog as featured post
        if (blogPosts.length > 0) {
          setFeaturedPost(blogPosts[0])
        }
      } else {
        showError('Error', 'Failed to load blog posts', 5000)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
      showError('Network Error', 'Unable to load blog posts', 5000)
    } finally {
      setLoading(false)
    }
  }

  const getTagsArray = (tags?: string) => {
    if (!tags) return []
    return tags.split(',').map(tag => tag.trim())
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(' ').length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readTime} min read`
  }

  const oldBlogPosts = [
    {
      id: 2,
      title: 'AppFolio vs Buildium: Which Property Management Software is Right for You?',
      excerpt: 'A comprehensive comparison of two leading property management platforms, helping you choose the best solution for your business needs.',
      author: 'Michael Chen',
      authorRole: 'Software Integration Specialist',
      publishDate: 'October 8, 2025',
      readTime: '6 min read',
      category: 'Software Comparison',
      image: '/images/blog/appfolio-vs-buildium.jpg',
      tags: ['AppFolio', 'Buildium', 'Software', 'Comparison']
    },
    {
      id: 3,
      title: '5 Ways Outsourcing Can Reduce Your Property Management Costs',
      excerpt: 'Learn how strategic outsourcing can help property management companies reduce operational costs while improving service quality.',
      author: 'Emily Rodriguez',
      authorRole: 'Operations Manager',
      publishDate: 'October 5, 2025',
      readTime: '5 min read',
      category: 'Cost Optimization',
      image: '/images/blog/outsourcing-costs.jpg',
      tags: ['Outsourcing', 'Cost Reduction', 'Efficiency', 'ROI']
    },
    {
      id: 4,
      title: 'Understanding Australian Property Management Compliance Requirements',
      excerpt: 'Navigate the complex landscape of Australian property management regulations and ensure your business stays compliant.',
      author: 'James Wilson',
      authorRole: 'Compliance Expert',
      publishDate: 'October 3, 2025',
      readTime: '7 min read',
      category: 'Compliance',
      image: '/images/blog/australian-compliance.jpg',
      tags: ['Australia', 'Compliance', 'Regulations', 'Legal']
    },
    {
      id: 5,
      title: 'Digital Marketing Strategies for Property Management Companies',
      excerpt: 'Effective digital marketing tactics to help property management companies attract more clients and grow their business.',
      author: 'Lisa Thompson',
      authorRole: 'Digital Marketing Strategist',
      publishDate: 'September 30, 2025',
      readTime: '9 min read',
      category: 'Digital Marketing',
      image: '/images/blog/digital-marketing-property.jpg',
      tags: ['Digital Marketing', 'SEO', 'Lead Generation', 'Growth']
    },
    {
      id: 6,
      title: 'Best Practices for Virtual Assistant Integration in Property Management',
      excerpt: 'How to successfully integrate virtual assistants into your property management operations for maximum efficiency.',
      author: 'David Kumar',
      authorRole: 'Virtual Assistant Manager',
      publishDate: 'September 28, 2025',
      readTime: '6 min read',
      category: 'Virtual Assistance',
      image: '/images/blog/virtual-assistant-integration.jpg',
      tags: ['Virtual Assistant', 'Integration', 'Efficiency', 'Management']
    },
    {
      id: 7,
      title: 'Tax Season Preparation for Property Management Companies',
      excerpt: 'Essential tips and strategies to prepare your property management business for tax season and ensure compliance.',
      author: 'Robert Martinez',
      authorRole: 'Tax Specialist',
      publishDate: 'September 25, 2025',
      readTime: '8 min read',
      category: 'Tax & Accounting',
      image: '/images/blog/tax-season-prep.jpg',
      tags: ['Tax', 'Accounting', 'Compliance', 'Preparation']
    }
  ]

  const categories = [
    { name: 'All Posts', count: 7, active: true },
    { name: 'Property Management', count: 3, active: false },
    { name: 'Software Comparison', count: 1, active: false },
    { name: 'Digital Marketing', count: 1, active: false },
    { name: 'Tax & Accounting', count: 1, active: false },
    { name: 'Compliance', count: 1, active: false }
  ]

  return (
    <Layout>
      <Head>
        <title>Blog - Insights & Tips | Pacerline Outsourcing Services</title>
        <meta name="description" content="Stay updated with the latest insights, tips, and trends in property management, accounting, and outsourcing. Expert advice from Pacerline professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed with expert insights, industry trends, and practical tips 
              for property management, accounting, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Article</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#092870] mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#092870] to-[#30a659] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{featuredPost.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#092870]">{featuredPost.author}</p>
                    <p className="text-sm text-gray-600">{featuredPost.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{featuredPost.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  Read Full Article
                  <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#092870] to-[#30a659] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl">📊</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#092870] mb-2">Featured Content</h4>
                  <p className="text-gray-600">In-depth analysis and expert insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-[#092870] to-[#30a659] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#092870] to-[#30a659] rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">📝</span>
                    </div>
                    <span className="text-sm font-semibold text-[#092870] bg-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#092870] mb-3 leading-tight hover:text-[#30a659] transition-colors duration-300">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#092870] to-[#30a659] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{post.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#092870] text-sm">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.publishDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-[#092870] font-semibold hover:text-[#30a659] transition-colors duration-300 inline-flex items-center">
                    Read More
                    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-[#092870] to-[#30a659] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get the latest insights, tips, and industry news delivered directly to your inbox. 
            Join thousands of property management professionals who trust our expertise.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-[#092870] font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}