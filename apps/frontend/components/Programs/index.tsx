import HorizontalMediaScrollBar from "../Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "../Shared/AdBanner/AdBanner"
import HorizontalFooterNewsSlider from "../Shared/HorizontalFooterNewsSlider"
import NewsListTiles from "../Shared/NewsListTiles/NewsListTiles"
import SideBar from "../Shared/SideBar/SideBar"

const Programs = () => {

    return (
        <>
            <div className="container"> 
            <AdBanner />
            <div className="pageTitle PageTitleYellow"><h2>برامج CNBC عربية</h2></div>
            <div className='row'>
                <div className='col-md-8'>
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

export default Programs