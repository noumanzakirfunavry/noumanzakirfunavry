import AdBanner from "../Shared/AdBanner/AdBanner"
import News2TopTiles from "../Shared/News2TopTiles"
import NewsDetatilListWithMedia from "../Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import SideBar from "../Shared/SideBar/SideBar"

const Infographics = () => {

    return (
        <>
        <div className="container"> 
            <AdBanner />

            <div className="pageTitle PageTitleYellow mb-5">
                <h2>إنفوغرافيك</h2>
            </div>

            <div className='row'>
                <div className='col-md-8'>
                <News2TopTiles/>
                <NewsDetatilListWithMedia/>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{ componentType: 'Latest', position: 1 }, { componentType: 'SmallBanner', position: 2 }]} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Infographics