/* eslint-disable @typescript-eslint/no-explicit-any */
<<<<<<< HEAD
import axios from 'axios'
import { baseUrlAdmin, requests } from './Requests';
=======
// import axios from 'axios'
import { baseUrlAdmin } from './Requests';
import  logoImage  from "../styles/images/CNBC-favicon.png";
>>>>>>> 6de56b58901ac64047a8f994ff21d5a1b5a6edb5

export const GetMetaData = (seoData?:any) => {

    const data = {
      description:seoData?.description || "CNBC Meta Tag Description",
      title:seoData?.title || "CNBC",
<<<<<<< HEAD
      image:baseUrlAdmin+seoData?.image?.path || "icon",
=======
      image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path:'https://site-staging.cnbcarabia.com'+logoImage.src,
>>>>>>> 6de56b58901ac64047a8f994ff21d5a1b5a6edb5
      siteName:"CNBC Arabia",
      keywords:seoData?.keywords || "cnbc meta tag keywords",
      og:{
        description:seoData?.description || "CNBC Meta Tag og: description",
        title:seoData?.title || "og title cnbc",
<<<<<<< HEAD
        image:baseUrlAdmin+seoData?.image?.path || "icon",
      },
      twitter:{
        description:seoData?.description || "CNBC Meta Tag twitter: description",
        title:seoData?.description || "CNBC",
        // image:seoData?.image?.url || "icon",
        image:baseUrlAdmin+seoData?.image?.path || "icon",
=======
        image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path :'https://site-staging.cnbcarabia.com' +logoImage.src,
      },
      twitter:{
        description:seoData?.description || "CNBC Meta Tag twitter: description",
        title:seoData?.description || "CNBC Arabia",
        image:seoData?.image?.path ? baseUrlAdmin+seoData?.image?.path:'https://site-staging.cnbcarabia.com'+ logoImage.src,
>>>>>>> 6de56b58901ac64047a8f994ff21d5a1b5a6edb5
        site:"@CNBCArabia",
        card:"summary_large_image"
      }
    }

    return data
  };

    