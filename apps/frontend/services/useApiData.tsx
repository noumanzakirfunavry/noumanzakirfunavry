import { useState, useEffect } from 'react';
import axios from 'axios'

//axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const useApiData = (url:string,method:string,params:any ) => {
    
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    // axios.defaults.headers = {
        
    // }

    const fetchData = () => {

        setloading(true)
        method === "post" &&  axios
            .post(url, params)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
        method === "get" &&  axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    console.log(loading)
    return {data, error, loading};
};

export default useApiData