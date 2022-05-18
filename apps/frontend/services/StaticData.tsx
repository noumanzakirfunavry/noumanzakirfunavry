/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { baseUrlAdmin, requests } from './Requests';

export const GetMetaData = (seoData?:any) => {

    const data = {
      description:seoData?.description || "CNBC Meta Tag Description",
      title:seoData?.title || "CNBC",
      image:baseUrlAdmin+seoData?.image?.path || "icon",
      siteName:"CNBC Arabia",
      keywords:seoData?.keywords || "cnbc meta tag keywords",
      og:{
        description:seoData?.description || "CNBC Meta Tag og: description",
        title:seoData?.title || "og title cnbc",
        image:baseUrlAdmin+seoData?.image?.path || "icon",
      },
      twitter:{
        description:seoData?.description || "CNBC Meta Tag twitter: description",
        title:seoData?.description || "CNBC",
        // image:seoData?.image?.url || "icon",
        image:baseUrlAdmin+seoData?.image?.path || "icon",
        site:"@CNBCArabia",
        card:seoData?.image?.title || "summary_large_image"
      }
    }

    return data
  };

    