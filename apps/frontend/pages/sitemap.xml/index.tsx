
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields:ISitemapField[] = [
    {
      loc: 'https://site-staging.cnbcarabia.com/newsDetails/9', 
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
        loc: 'https://site-staging.cnbcarabia.com/newsDetails/7', 
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: 'https://site-staging.cnbcarabia.com/newsDetails/5', 
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}