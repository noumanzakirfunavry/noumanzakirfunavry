/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Presenters from "apps/frontend/components/Presenter";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title";
import GetData from "apps/frontend/services/GetData";
import useApiData from "apps/frontend/services/useApiData";
import { useEffect, useState } from "react";

const Index = () =>{

    //const data = GetData('https://jsonplaceholder.typicode.com/todos/1' , {} , 'get')

    const [data, setData] = useState<any>({data:null, error:null, loading:true})

    useEffect(()=>{
        getDataFromApi()
    }, [])

   const  getDataFromApi = async ()=>{
        
        await GetData('https://jsonplaceholder.typicode.com/todos/1' , {} , 'get', false).then(res=>{
            data.data = res.data
            data.loading = false
            setData({...data})
        }).catch(err=>{
            data.error = err
            data.loading = false
            setData({...data})
        })
    }

    
    
    return (
        <>
        {
            data.loading && (<>Loading ....</>)
        }
        {
            !data.loading && (
                <>
                    <div className="container"> 
                        <AdBanner />
                    </div>
                    <Title styles={"pageTitle PageTitleYellow mb-4"}>
                        <h2>مذيعو ومراسلو CNBC عربية</h2>
                    </Title>
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-9'>
                                <Presenters/>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
            
        </>
    )
}

export default Index