/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios'
import { baseUrlAdmin } from './Requests';
import  logoImage  from "../styles/images/CNBC-favicon.png";

export const GetMetaData = (seoData?:any) => {

    const data = {
      description:seoData?.description || "CNBC Meta Tag Description",
      title:seoData?.title || "CNBC",
      image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path:'https://site-staging.cnbcarabia.com'+logoImage.src,
      siteName:"CNBC Arabia",
      keywords:seoData?.keywords || "cnbc meta tag keywords",
      og:{
        description:seoData?.description || "CNBC Meta Tag og: description",
        title:seoData?.title || "og title cnbc",
        image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path :'https://site-staging.cnbcarabia.com' +logoImage.src,
      },
      twitter:{
        description:seoData?.description || "CNBC Meta Tag twitter: description",
        title:seoData?.description || "CNBC Arabia",
        image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path:'https://site-staging.cnbcarabia.com'+ logoImage.src,
        site:"@CNBCArabia",
        card:"summary_large_image"
      }
    }

    return data
  };

    