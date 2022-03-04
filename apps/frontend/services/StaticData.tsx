/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export const GetMetaData = () => {

    const data = {
      description:"CNBC Meta Tag Description",
      title:"CNBC",
      image:"icon",
      siteName:"CNBC Arabia",
      og:{
        description:"CNBC Meta Tag og: description",
        title:"og title cnbc",
        image:"icon",
      },
      twitter:{
        description:"CNBC Meta Tag twitter: description",
        title:"twitter",
        image:"icon",
      }
    }

    return data
  };

    