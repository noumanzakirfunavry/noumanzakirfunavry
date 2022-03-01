/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
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
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <ToastContainer/>
  
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
