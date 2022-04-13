/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { FC, useEffect, useState  } from "react"
import NewsDetatilListWithMedia from "../../Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import MainSection from "./MainSection/MainSection"
import GetData from "apps/frontend/services/GetData";
import { requests } from "apps/frontend/services/Requests";
import SideBar from "../../Shared/SideBar/SideBar";
import AdBanner from "../../Shared/AdBanner/AdBanner";

const NewsSection:FC = () =>{

    // const details = [
    //     {description:'سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي ', proIcon:true, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    //     {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    //     {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    // ]

    const [featuredNews, setFeaturedNews] = useState({mainNews:[], secondaryNews:[]})
    
    
    useEffect(()=>{
        getDataFromApi()
    },[])

    const getDataFromApi = () =>{
        GetData(`${requests.featuredNews}&limit=10&pageNo=1`,{},"get", false).then((res)=>{
            featuredNews.mainNews = res.data?.filter((news:any)=>{
                return news._source.featuredNews 
            })

            featuredNews.secondaryNews = res.data?.filter((news:any)=>{
                return !news._source.featuredNews 
            })
            setFeaturedNews({...featuredNews})
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <> 
            {/* {featuredNews.mainNews?.length && <MainSection newsList={featuredNews.mainNews}/>}   */}
            {/*{featuredNews.secondaryNews?.length && <NewsDetatilListWithMedia dispalyMoreButton={false} newsList={featuredNews.secondaryNews}/> }Secondary News Section */}

            <div className="PageBuilder-pageRow">
                <div className=" PageBuilder-col-9">
                    {featuredNews.mainNews?.length && <MainSection newsList={featuredNews.mainNews}/>} 
                </div>
                <div className="PageBuilder-sidebar">
                    <SideBar
                    sideBarSequence={[
                        { componentType: 'dotList', position: 1, title: 'آخر الأخبار' },
                    ]}
                    />
                </div>
            </div>
            <div className="PageBuilder-pageRow">
                <div className=" PageBuilder-col-9">

                    {featuredNews.secondaryNews?.length &&
                        <NewsDetatilListWithMedia
                            dispalyMoreButton={false}
                            newsList={featuredNews.secondaryNews}
                        />}{' '} 
                    {/*Secondary News Section */}
                </div>
                <div className="PageBuilder-sidebar mt-0">
                    <SideBar
                    sideBarSequence={[{ componentType: 'SmallBanner', position: 2 }]}
                />
                <div className="bannerAddMedia">
                    <AdBanner />
                </div>
            </div>
        </div>
    </>
    )
}

export default NewsSection