import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/css/globals.css'
import  '../styles/fontawesome/css/fontawesome.min.css'
import  '../styles/fontawesome/css/all.min.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
      typeof document !== undefined ? import('bootstrap/dist/js/bootstrap') : null

  }, []);
  return <Component {...pageProps} />
}

export default MyApp
