/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export const GetMetaData = (seoData?:any) => {

    const data = {
      description:seoData?.description || "CNBC Meta Tag Description",
      title:seoData?.title || "CNBC",
      image:seoData?.image || "icon",
      siteName:"CNBC Arabia",
      og:{
        description:seoData?.description || "CNBC Meta Tag og: description",
        title:seoData?.title || "og title cnbc",
        image:seoData?.image || "icon",
      },
      twitter:{
        description:seoData?.description || "CNBC Meta Tag twitter: description",
        title:seoData?.description || "CNBC",
        image:seoData?.image || "icon",
        site:"@CNBCArabia",
        card:"summary_large_image"
      }
    }

    return data
  };

    