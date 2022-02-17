/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import News2TopTiles from "apps/frontend/components/Shared/News2TopTiles"
import NewsDetatilListWithMedia from "apps/frontend/components/Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"

const Index = () =>{

    return (
        <>
            <div className="container"> 
            <AdBanner />

            <div className="pageTitle PageTitleYellow mb-5">
                <h2>إنفوغرافيك</h2>
            </div>

            <div className='row'>
                <div className='col-lg-8'>
                <News2TopTiles/>
                <NewsDetatilListWithMedia/>
                </div>
                <div className='col-lg-4'>
                    <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index