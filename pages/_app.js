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

        <meta charset='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='Kvetheus, OSINT, cyber security, dns enumeration, mac address, subdomain, whoIs '
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Kvetheus' />
        <meta
          property='og:description'
          content='Advanced subdomain enumeration and information gathering tool. Also, an OSINT Framework for scanning IP Address, Emails, Websites, Organizations.'
        />
        <meta name='language' content='en' />
        <meta name='url' content='https://kvetheus.dscvit.com/' />
        <meta name='category' content='Kvetheus' />
        <meta name='coverage' content='Worldwide' />
        <meta name='copyright' content='GDSC-VIT' />
        <meta property='og:url' content='https://kvetheus.dscvit.com' />
        <meta property='og:site_name' content='Kvetheus' />
        <meta property='og:image' content='/favicon.png' />
        <meta name='og:email' content='dscvitvellore@gmail.com' />
        <meta name='og:region' content='Vellore' />
        <meta name='og:country-name' content='India' />
        <meta name='rating' content='General' />

        <link rel='canonical ' href='https://kvetheus.dscvit.com ' />
        <meta name='author' content='Vishesh Bansal and Chirantan Jain' />
        <meta name='copyupfade-right' content='GDSC VIT' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Layout />
      <div className='body'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
