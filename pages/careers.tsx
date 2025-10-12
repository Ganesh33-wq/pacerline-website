import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Property Management Accountant',
      department: 'Accounting',
      location: 'Remote (USA/Australia)',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead property management accounting operations for multiple clients with expertise in AppFolio, Buildium, and QuickBooks.',
      requirements: [
        'CPA certification preferred',
        'Expert knowledge of property management accounting',
        'Proficiency in AppFolio, Buildium, QuickBooks',
        'Strong analytical and problem-solving skills',
        'Excellent communication skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
    },
    {
      id: 2,
      title: 'Virtual Assistant Specialist',
      department: 'Administrative Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Provide comprehensive virtual assistant services to property management companies and real estate investors.',
      requirements: [
        'Bachelor\'s degree preferred',
        'Experience in property management administration',
        'Proficiency in property management software',
        'Strong organizational skills',
        'Excellent English communication'
      ],
      benefits: [
        'Flexible working hours',
        'Performance bonuses',
        'Training and certification programs',
        'Career advancement opportunities'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop and execute digital marketing strategies for property management and real estate clients.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        'Experience with SEO, PPC, and social media marketing',
        'Knowledge of Google Analytics and marketing tools',
        'Creative thinking and analytical skills',
        'Portfolio of successful campaigns'
      ],
      benefits: [
        'Creative work environment',
        'Latest marketing tools and software',
        'Professional development budget',
        'Results-based incentives'
      ]
    }
  ]

  const companyValues = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality services that exceed client expectations.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve remarkable results for our clients and team.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We are committed to continuous learning and professional development for all team members.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex business challenges.'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Careers - Join Our Team | Pacerline Outsourcing Services</title>
        <meta name="description" content="Join Pacerline Outsourcing Services and build your career in property management accounting, virtual assistance, and digital marketing. Remote opportunities available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build your career with a leading outsourcing company serving property management 
              and real estate professionals worldwide. We offer remote opportunities, 
              competitive benefits, and a supportive work environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#openings" className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </Link>
              <Link href="#culture" className="border-2 border-[#092870] text-[#092870] hover:bg-[#092870] hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating a workplace where everyone can thrive and contribute to our shared success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#092870] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current <span className="bg-gradient-to-r from-[#092870] to-[#30a659] bg-clip-text text-transparent">Openings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team of professionals.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-[#092870] mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#092870] to-[#30a659] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed">{job.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-[#092870] mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-[#30a659] mr-2 mt-1">✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#092870] mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-[#30a659] mr-2 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#092870] to-[#30a659] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#092870] font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Contact HR Team
            </Link>
            <a href="mailto:careers@pacerline.com" className="border-2 border-white text-white hover:bg-white hover:text-[#092870] font-bold py-4 px-8 rounded-full transition-all duration-300">
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}