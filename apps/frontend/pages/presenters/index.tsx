/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import Presenters from "apps/frontend/components/Presenter";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title";
import GetData from "apps/frontend/services/GetData";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'

const Index = () =>{

    const [data, setData] = useState<any>({data:null, error:null, loading:true})

    useEffect(()=>{
        getDataFromApi()
    }, [])

   const  getDataFromApi = async ()=>{
        
        

        await GetData('https://jsonplaceholder.typicode.com/todos/1' , {} , 'get', false).then(res=>{
            setTimeout(()=>{
                data.data = res.data
                data.loading = false
                setData({...data})
            }, 3000)
        }).catch(err=>{
            
            setTimeout(()=>{
                data.error = err
                data.loading = false
                setData({...data})
            }, 3000)
        })
    }

    
    
    return (
        <>
            
            <div className="container"> 
                {data.loading && (
                    <Skeleton/>
                )}
                {!data.loading && (
                    <AdBanner />
                )}
            </div>

            {data.loading && (
                <Skeleton/>
            )}
            {!data.loading && (
                <Title styles={"pageTitle PageTitleYellow mb-4"}>
                    <h2>مذيعو ومراسلو CNBC عربية</h2>
                </Title>
            )}
          
            <div className="container">
                {data.loading && (
                    <Skeleton/>
                )}
                {!data.loading && (
                    <div className='row'>
                        <div className='col-lg-9'>
                            <Presenters/>
                        </div>
                    </div>
                )}
            </div>
            
            
        </>
    )
}

export default Index