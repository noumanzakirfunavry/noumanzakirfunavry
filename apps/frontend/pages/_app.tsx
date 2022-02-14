import 'bootstrap/dist/css/bootstrap.css';
import '../styles/css/globals.css';
import '../styles/fontawesome/css/fontawesome.min.css';
import '../styles/fontawesome/css/all.min.css';
import '../styles/fontawesome/css/all.css';
import '../styles/css/style.scss';
import '../styles/css/responsive.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import * as gtag from './../lib/gtag';
import { useRouter } from 'next/router';
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    typeof document !== undefined ? import('bootstrap/dist/js/bootstrap') : null

  }, []);
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8"/>
        <title>عربية CNBC</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <meta httpEquiv="content-language" content="ar" />
        <link rel="icon" type="image/x-icon" href="../favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3125437156093673"
     crossOrigin="anonymous"></script>
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3125437156093673"
     crossOrigin="anonymous"></script> */}
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
