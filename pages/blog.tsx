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

  const getCategoryFromTags = (tags?: string) => {
    if (!tags) return 'General'
    const tagArray = getTagsArray(tags)
    return tagArray[0] || 'General'
  }

  const getAuthorFromCreatedBy = (createdBy: string) => {
    const authorMap: { [key: string]: string } = {
      'system': 'Admin Team',
      'admin': 'Admin Team'
    }
    return authorMap[createdBy] || createdBy
  }

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

      {loading ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg text-gray-600">Loading blog posts...</span>
              </div>
            </div>
          </div>
        </section>
      ) : blogs.length === 0 ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Blog Posts Available</h3>
              <p className="text-gray-600">
                We're working on creating amazing content for you. Check back soon!
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
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
                          {getCategoryFromTags(featuredPost.tags)}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#092870] mb-4 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">{getAuthorFromCreatedBy(featuredPost.createdBy).charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#092870]">{getAuthorFromCreatedBy(featuredPost.createdBy)}</p>
                          <p className="text-sm text-gray-600">Content Creator</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                        <span>{new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{calculateReadTime(featuredPost.content)}</span>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`} className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center">
                        Read Full Article
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                          <span className="text-6xl">📊</span>
                        </div>
                        <h4 className="text-xl font-bold text-[#092870] mb-2">Featured Article</h4>
                        <p className="text-gray-600">Industry insights and expert tips</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Latest <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Articles</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our collection of articles covering property management, accounting, and business optimization.
                </p>
              </div>

              {/* Dynamic Grid Layout - Flexible centering */}
              <div className="space-y-8">
                {Array.from({ length: Math.ceil(blogs.length / 3) }).map((_, rowIndex) => {
                  const startIndex = rowIndex * 3
                  const rowBlogs = blogs.slice(startIndex, startIndex + 3)
                  const cardCount = rowBlogs.length
                  
                  // Dynamic grid classes based on card count
                  const getGridClasses = () => {
                    if (cardCount === 1) {
                      return "flex justify-center"
                    } else if (cardCount === 2) {
                      return "grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto"
                    } else {
                      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                    }
                  }
                  
                  return (
                    <div key={rowIndex} className={getGridClasses()}>
                      {rowBlogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-sm">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                                {getCategoryFromTags(blog.tags)}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(blog.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[#092870] mb-3 leading-tight hover:text-[#30a659] transition-colors">
                              <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                              {blog.excerpt ? (
                                blog.excerpt.length > 120 ? `${blog.excerpt.substring(0, 120)}...` : blog.excerpt
                              ) : (
                                blog.content.length > 120 ? `${blog.content.substring(0, 120)}...` : blog.content
                              )}
                            </p>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-[#092870] to-[#30a659] rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-xs font-bold">{getAuthorFromCreatedBy(blog.createdBy).charAt(0)}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-800">{getAuthorFromCreatedBy(blog.createdBy)}</p>
                                  <p className="text-xs text-gray-500">{calculateReadTime(blog.content)}</p>
                                </div>
                              </div>
                            </div>
                            
                            {blog.tags && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {getTagsArray(blog.tags).slice(0, 2).map((tag, index) => (
                                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            
                            <Link href={`/blog/${blog.slug}`} className="text-[#092870] font-semibold hover:text-[#30a659] transition-colors duration-300 inline-flex items-center text-sm">
                              Read More 
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#092870] to-[#30a659] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white" style={{ color: '#ffffff !important' }}>
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto !text-white" style={{ color: '#ffffff !important' }}>
            Get the latest tips, trends, and expert advice delivered to your inbox.
            Never miss an important update in the property management industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#092870] font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Subscribe to Newsletter
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-[#092870] font-bold py-4 px-8 rounded-full transition-all duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage