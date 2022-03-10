/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import MainNews from "apps/frontend/components/LatestVideos/MainNews/MainNews"
import VideoNewsTiles from "apps/frontend/components/LatestVideos/VideoNewsTiles"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
            <AdBanner />
            </div>
            <Title styles={"pageTitle PageTitleYellow"}>
                <h2>أحدث مقاطع الفيديو</h2>
            </Title>
            <div className="container">
            <div className='row'>
                <div className='col-lg-9'>
                    <MainNews/>
                    {/* <CategoryNewsSection limit={8} displayTitle={false}  displayTopTwoNews={false} displayMoreButton={true}/> */}
                    <VideoNewsTiles/>
                </div>
                <div className='col-lg-3'>
                    <div className="latestVideoPage-sidebar">
                    <SideBar sideBarSequence={[{ componentType: 'LargeBanner', position: 1 } /*, { componentType: 'SmallBanner', position: 2 }*/]} /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index