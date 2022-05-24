/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-toastify';

const notify = () => toast.success("Success Notification !", {
    position: toast.POSITION.TOP_RIGHT
  });

  //const baseURL = 'http://157.90.67.186:3001/'

const GetData = async (url:string,params:any, method:string, displayMessage:boolean): Promise<any>=>
{

    const data = {
       data:null,
       error: null
    }

    const client = axios.create({
        baseURL: "",
        headers: {
            "Access-Control-Allow-Origin":"*",
            "Accept":"*",
            // "HTTP_ORIGIN":"https://site-staging.eduopenings.com"
            //Authorization : `Bearer ${token}`
        },
        data:params
    });

    if(method === 'post')
    {
        await client.post(url,params).then((res) => {
            data.data = res.data  
             
        }).catch( (error) => {
             
            if(error.response)
            {
                data.error = {message: error.response.data.message}

            }
            else if (error.request)
            {
                data.error = {message: error.message}
            }
            else
            {
                data.error = {message: error.message}
            }
        })
    }
    else if(method === 'get')
    {
        displayMessage && notify()
        await client.get(url, {
            params: {
              ...(Object.keys(params).length && {...params})
            }
          }).then((res) => {
            data.data = res.data 
        }).catch( (error) => {
            if(error.response)
            {
                data.error = {message: error.response.data.message}
            }
            else if (error.request)
            {
                data.error = {message: "Please check your internet connection or consult technical team"}//error.message
            }
            else
            {
                data.error = {message: "Please check your internet connection or consult technical team"} //error.message
            }
        })
    }

    return data
}

export default GetData;

