import '../styles/globals.css'
import '../styles/pacerline-colors.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Professional Business Services | Accounting, Property Management & More</title>
        <meta name="description" content="Professional accounting, bookkeeping, property management, tax services, and digital marketing solutions for businesses worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
