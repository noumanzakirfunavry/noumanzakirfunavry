/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import VideoNews from "apps/frontend/components/VideoNews/VideoNews"
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider"
import Title from "apps/frontend/components/Title"
import SideBarWithVideo from "apps/frontend/components/VideoNews/SideBarWithVideo"
import { useEffect, useState } from "react";
import GetData from "../../services/GetData";
import { requests, limitOfList } from "../../services/Requests";
import { useRouter } from "next/router";
import RelatedNewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider/RelatedNewsSlider"

const Index = () =>{
    const router = useRouter();
    console.log('id::::', router.query.id);
    const [videoNews, setVideoNews] = useState<any>();
    const [latestVideoNews, setLatestVideoNews] = useState<any>();
    //const [mostWatchedVideoNews, setMostWatchedVideoNews] = useState<any>();

    useEffect(() => {
        if(router.query.id){
            GetData(`${requests.NewsById+router.query.id}`, {}, 'get', false).then(res=>{
            console.log('test news',res);
            setVideoNews(res?.data?.response?.news)

            }).catch(err=>{
                console.warn(err)
            })
        }

    }, [router.query.id])

    useEffect(() => {
        // get data for latest news in side bar
        GetData(`${requests.videoNews}&limit=${limitOfList}&pageNo=1`, {}, 'get', false).then(res=>{
            const newsRes = res?.data && res?.data?.length ? res?.data : []
            setLatestVideoNews(newsRes);

        }).catch(err=>{
            console.warn(err)
        })

    }, [])

    return (
        <>
            <div className="container">
                <AdBanner/>
                <div className='PageBuilder-pageRow mb-3'>
                <div className='PageBuilder-col-9'>
                    <VideoNews videoNews={videoNews} />
                </div>
                <div className='PageBuilder-sidebar'>
                    <div className="hide_div_mobile">
                    <SideBarWithVideo title={'أحدث مقاطع الفيديو'} videoNewsList={latestVideoNews} />
                    </div>
                    <div className="bannerAddMedia">
        <AdBanner />
        </div>
                    <div className="mb-3 hide_div_web">
                <Title styles={"yellowTitle"}>
                    <h3>أحدث مقاطع الفيديو</h3>
                </Title>
                <HorizontalFooter2NewsSlider />
            </div>
                </div>
                
            </div>
            </div>
           <div className="container">
           <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>فيديوهات ذات صلة</h3>
                </Title>
                {/*<HorizontalFooter2NewsSlider />*/}
                <RelatedNewsSlider tags={videoNews && videoNews.tags} quotes={videoNews && videoNews.quotes} />
            </div>
            <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>الأكثر مشاهدة</h3>
                </Title>
                <HorizontalFooter2NewsSlider />
            </div>
           </div>

        </>
    )
}

export default Index