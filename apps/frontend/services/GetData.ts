/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const GetData = async (url:string,params:any, method:string): Promise<any>=>
{

    const data = {
       data:{},
       error: null
    }

    const client = axios.create({
        //baseURL: baseURL,
        headers: {
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

