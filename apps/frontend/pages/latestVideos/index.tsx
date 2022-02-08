/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import MainNews from "apps/frontend/components/LatestVideos/MainNews/MainNews"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import CategoryNewsSection from "apps/frontend/components/Shared/CategoryNews"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container"> 
            <AdBanner />
            <Title styles={"pageTitle PageTitleYellow"}>
                <h2>أحدث مقاطع الفيديو</h2>
            </Title>

            <div className='row'>
                <div className='col-md-8'>
                    <MainNews/>
                    <CategoryNewsSection limit={8} displayTitle={false}  displayTopTwoNews={false} displayMoreButton={true}/>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{ componentType: 'numbered', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Index