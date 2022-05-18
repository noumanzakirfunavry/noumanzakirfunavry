/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import Episode from "apps/frontend/components/Episode/Episode"
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider"
import Title from "apps/frontend/components/Title"
import SideBarWithEpisodes from "apps/frontend/components/Episode/SideBarWithEpisodes"
import GetData from 'apps/frontend/services/GetData';
import { requests } from 'apps/frontend/services/Requests';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RecordNotFound from '../../components/Shared/RecordNotFound/RecordNotFound';

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
        episodeDetail ?
        <>
            <div className="container">
                <AdBanner/>
                <div className='PageBuilder-pageRow mb-3'>
                <div className='PageBuilder-col-9'>
                    <Episode episodeDetail={episodeDetail} />
                </div>
                <div className='PageBuilder-sidebar mt-0'>
                    <SideBarWithEpisodes title={'آخرون من اكسبو في أسبوع'} episodes={episodes}/>
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
        :
        <RecordNotFound />
    )
}

export default Index