import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() => {
            console.log(`window loaded correctly`)
          }}
        ></Script>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to Home page</Link>
      </h2>
    </Layout>
  )
}
