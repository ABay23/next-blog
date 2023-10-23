import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Alejandro.</p>
        <p>
          A Full Stack developer,working on getting to know Next.js more with
          this blog tutorial, you can contact me on{' '}
          <a href='https://twitter.com/ABay23dev'>Twitter / X</a>
        </p>

        <p></p>
      </section>
    </Layout>
  )
}
