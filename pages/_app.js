import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import '../styles/global.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kvetheus.</title>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Jost&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Layout />
      <div className='body'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
