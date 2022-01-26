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

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? import('bootstrap/dist/js/bootstrap') : null

  }, []);
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
  
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
