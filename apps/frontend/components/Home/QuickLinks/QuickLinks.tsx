/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData"
import {requests} from "apps/frontend/services/Requests"
import { QuickLink } from "apps/frontend/types/Types"
import Link from "next/link"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const QuickLinks = () =>{

    const [quickLinks, setQuickLinks] = useState<QuickLink[]>([])

    useEffect(()=>{
        getDataFromApi()
    },[])

    const getDataFromApi = () =>{
        GetData(`${requests.quickLinks}/getAll?limit=100&pageNo=1`,{},"get", false).then((res)=>{
            setQuickLinks(res.data?.response?.quickLinks)
        }).catch(err=>{
            console.log(err)
        })
    }

    const handleRedirect = (url:string)=>{
        window.location.href = `https://${url}`
    }

    return (
        <>
            {
                !quickLinks?.length && <Skeleton/>
            }
            {
                quickLinks?.length && (
                <div className="page-categories d-flex">
                    <h6 className="CategoryTitle  ">روابط سريعة</h6>
                    <ul>
                        {quickLinks?.map((quickLink:QuickLink, index:number)=>{
                           return <li key={index}><a onClick={()=>handleRedirect(quickLink.url)}>{quickLink.title}</a></li>
                        })}
                    </ul>
                </div>
               )
             }
        </>
    )
}

export default QuickLinks