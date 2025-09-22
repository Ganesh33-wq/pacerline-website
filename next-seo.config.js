// next-seo.config.js
export default {
  title: 'Property Management Accounting & Bookkeeping Services | AppFolio, Buildium Experts | Pacerline',
  description: '⭐ #1 Property Management Accounting Services ⭐ Expert AppFolio & Buildium bookkeeping, virtual assistants, digital marketing. 500+ happy clients. Free consultation!',
  canonical: 'https://pacerline.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pacerline.com',
    siteName: 'Pacerline ProBusiness Services',
    title: 'Property Management Accounting & Bookkeeping Services | AppFolio, Buildium Experts',
    description: '⭐ #1 Property Management Accounting Services ⭐ Expert AppFolio & Buildium bookkeeping, virtual assistants, digital marketing. 500+ happy clients worldwide.',
    images: [
      {
        url: 'https://pacerline.com/images/home/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pacerline - Property Management Accounting Experts',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    handle: '@pacerline',
    site: '@pacerline',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'property management accounting, AppFolio bookkeeping, Buildium administration, property management bookkeeping services, real estate accounting, property management software, virtual assistant services, digital marketing for property management'
    },
    {
      property: 'author',
      content: 'Pacerline ProBusiness Services'
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml', 
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    }
  ],
}
