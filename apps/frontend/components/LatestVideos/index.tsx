import AdBanner from "../Shared/AdBanner/AdBanner"
import NewsListTiles from "../Shared/NewsListTiles/NewsListTiles"
import SideBar from "../Shared/SideBar/SideBar"

const LatestVideos = () =>{

    return (
        <>
        <div className="container"> 
            <AdBanner />
            <div className='row'>
                <div className='col-md-8'>
                     make only video box  design here we will make component
                <NewsListTiles newsList={[]}/>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                </div>
            </div>
        </div>
        </>
    )
}

export default LatestVideos