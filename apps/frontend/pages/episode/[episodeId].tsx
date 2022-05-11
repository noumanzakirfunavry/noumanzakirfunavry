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
    const [episode, setEpisode] = useState<any>();
  
   useEffect(() => {
        GetData(`${requests.episodeById}/${router.query.episodeId}`, {}, 'get', false).then(res => {
          console.log('episode::::', res?.data?.response?.episode);
          setEpisode(res?.data?.response?.episode)

        }).catch(err=>{
            console.warn(err)
        })

    }, [router.query.episodeId])

    return (
        <>
            <div className="container">
                <AdBanner/>
                <div className='PageBuilder-pageRow mb-3'>
                <div className='PageBuilder-col-9'>
                    <VideoNews videoNews={episode} />
                </div>
                <div className='PageBuilder-sidebar mt-0'>
                    <SideBarWithVideo title={'آخرون من اكسبو في أسبوع'}/>
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