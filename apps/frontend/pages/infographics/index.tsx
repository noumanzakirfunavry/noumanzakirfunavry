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
</div>
            <div className="pageTitle PageTitleYellow mb-5">
                <h2>إنفوغرافيك</h2>
            </div>
            <div className="container">
            <div className='row'>
                <div className='col-lg-9'>
                <News2TopTiles/>
                <NewsDetatilListWithMedia/>
                </div>
                <div className='col-lg-3'>
                <SideBar sideBarSequence={[{componentType:'numbered', position:1}, {componentType:'SmallBanner', position:2}, {componentType:'simple', position:2}, {componentType:'LargeBanner', position:2}]}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index