/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import SideBarWithVideo from "apps/frontend/components/VideoNews/SideBarWithVideo"
import VideoNews from "apps/frontend/components/VideoNews/VideoNews"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"

const Index = () =>{

    return (
        <>
            <AdBanner/>
            <div className='row'>
                <div className='col-md-8'>
                    <VideoNews/>
                </div>
                <div className='col-md-4'>
                    <SideBarWithVideo/>
                </div>
            </div>
        </>
    )
}

export default Index