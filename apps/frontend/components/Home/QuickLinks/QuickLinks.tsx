/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import GetData from "apps/frontend/services/GetData"
import {requests} from "apps/frontend/services/Requests"
import { QuickLink } from "apps/frontend/types/Types"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const QuickLinks = () =>{
    
    const [quickLinks, setQuickLinks] = useState<QuickLink[]>([])

    useEffect(()=>{
        getDataFromApi()
    },[])

    const getDataFromApi = () =>{
        GetData(`${requests.quickLinks}/getAll?limit=10&pageNo=1`,{},"get", false).then((res)=>{
            setQuickLinks(res.data.quickLinks)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <>
            {
                !quickLinks.length && <Skeleton/>
            }
            {
                quickLinks.length && (
                <div className="page-categories">
                    <h6 className="CategoryTitle d-block d-lg-none">روابط سريعة</h6>
                    <ul>
                        {/* <li className="CategoryTitle d-none d-lg-block">روابط سريعة</li>
                        <li><a href="">الرئيسية تسجيل الدخول </a></li>
                        <li><a href="">تسجيل الدخول </a></li>
                        <li><a href="">الرئيسية</a></li>
                        <li><a href="">الرئيسية تسجيل الدخول </a></li>
                        <li><a href="">الرئيسية</a></li>
                        <li><a href="">تسجيل الدخول </a></li> */}
                        {quickLinks.map((quickLink:QuickLink, index:number)=>{
                           return <li key={index}><a href={quickLink.url}>{quickLink.title}</a></li>
                        })}
                    </ul>
                </div>
               )
             }
        </>
    )
}

export default QuickLinks