import React from "react";
import Head from "next/head";

const SEO = (props: any) => {
  // @TODO some meta tags would be updated later on

  const url = window? window.location.href : '';

  return (
       <Head>
                <title>{props.metaData?.title}</title>
                <meta name="description" content={props.metaData?.description} />
                <meta itemProp="description" content={props.metaData?.description} />
                <meta name="theme-color" content="#000000" />
                <meta name="keywords" content={props.metaData?.keywords}/>

                {/*<meta property="fb:app_id" content="375495522552744"/>
                <meta property="og:type" content="article"/>
                <meta property="fb:pages" content="153145408089596" />
                <meta property="og:url" content="https://cnbcarabia.com/news/view/96078/%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%B5%D8%AD%D9%8A%D8%AD-%D8%AA%D9%8E%D8%B7%D8%A7%D9%84-%D8%A7%D9%84%D8%A3%D8%B3%D9%87%D9%85-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9..-%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%8A%D9%86%D9%8A-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A-%D9%8A%D9%81%D9%82%D8%AF-%D8%A3%D8%BA%D9%84%D8%A8-%D9%85%D9%83%D8%A7%D8%B3%D8%A8-%D8%AA%D8%AE%D9%81%D9%8A%D8%B6-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D9%87.html"/>*/}

                <meta property="og:url" content={url} key="ogurl" />
                <meta property="og:image" content={props.metaData.twitter?.image} key="ogimage" />
                <meta property="og:image:secure" content={props.metaData.twitter?.image} key="ogimage" />
                <meta property="og:site_name" content={props.metaData?.siteName} key="ogsitename" />
                <meta property="og:title" content={props.metaData.og?.title} key="ogtitle"/>
                <meta property="og:description" content={props.metaData?.og?.description} key="ogdesc"/>
                <meta property="og:content" content={"website"} key="ogwebsite"/>
                <meta property="og:image:width"  content="975" key="ogimgwidth"/>
                <meta property="og:image:height"  content="557" key="ogimgheight"/>

                <meta name="twitter:card" content={"summary_large_image"} key="twittercard"/>
                <meta name="twitter:site" content={props.metaData.twitter?.site} key="twittersite"/>
                <meta name="twitter:title" content={props.metaData.twitter?.title} key="twittertitle"/>
                <meta name="twitter:description"  content={props.metaData?.twitter?.description} key="twitterdesc"/>
                <meta name="twitter:image" content={props.metaData.twitter?.image} key="twitterimage"/>
                <meta name="twitter:image:src" content={props.metaData.twitter?.image} key="twitterimagesrc"/>

            </Head>
  );
};

export default SEO;