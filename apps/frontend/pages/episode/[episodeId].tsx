/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import VideoNews from "apps/frontend/components/VideoNews/VideoNews"
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider"
import Title from "apps/frontend/components/Title"
import SideBarWithVideo from "apps/frontend/components/VideoNews/SideBarWithVideo"
import GetData from 'apps/frontend/services/GetData';
import { requests } from 'apps/frontend/services/Requests';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Index = () =>{
    const router = useRouter();
    const [episodeDetail, setEpisodeDetail] = useState<any>();
    const [episodes, setEpisodes] = useState<any[]>([])
    const [programDetails, setProgramDetails] = useState<any>();
  
   useEffect(() => {
        GetData(`${requests.episodeById}/${router.query.episodeId}`, {}, 'get', false).then(res => {
          console.log('episode::::', res?.data?.response?.episode);
          setEpisodeDetail(res?.data?.response?.episode)

        }).catch(err=>{
            console.warn(err)
        })

        GetData(`${requests.episodes}`, {}, 'get', false).then(res => {
            setEpisodes(res?.data?.response?.episodes)
            console.log('Episodes::::', res?.data?.response?.episodes)
        }).catch(err => {
            console.warn(err)
        })

    }, [router.query.episodeId])


    return (
        <>
            <div className="container">
                <AdBanner/>
                <div className='PageBuilder-pageRow mb-3'>
                <div className='PageBuilder-col-9'>
                    <VideoNews videoNews={episodeDetail} />
                </div>
                <div className='PageBuilder-sidebar mt-0'>
                    <SideBarWithVideo title={'آخرون من اكسبو في أسبوع'} videos={episodes}/>
                </div>
            </div>
            </div>
           <div className="container">
           <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>أحدث حلقات البرنامج</h3>
                </Title>
                <HorizontalFooter2NewsSlider />
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