import { FC } from "react"
import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
import QuickLinks from "./QuickLinks/QuickLinks"
import MarketIndices from "./MarketIndices/MarketIndices"
import NewsSection from "./NewsSection/NewsSection"
import SplitScreenNewsList from "./SplitScreenNewsList/SplitScreenNewsList"
import SplitScreenBarCharts from "../Shared/SplitScreenBarCharts/SplitScreenBarCharts"
import TilesWithColoredBackground from "./TilesWithColoredBackground/TilesWithColoredBackground"
import HorizontalNumberedList from "./HorizontalNumberedList/HorizontalNumberedList"
import HorizontalMediaScrollBar from "./HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"


const Home:FC = () =>{
    return (
        <>
          <MarketIndices/>
          <div className="container">     
              <AdBanner/>
              <QuickLinks/>

            <div className='row'>
                <div className='col-md-8'>
                  <NewsSection/>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                </div>
            </div>
            <div>
              <SplitScreenBarCharts/>
            </div>
            <div>
              <SplitScreenNewsList/>
            </div>
            <div>
              <TilesWithColoredBackground />
            </div>
            <div>
              <HorizontalNumberedList />
            </div>
            <div>
              <HorizontalMediaScrollBar />
            </div>
          </div>

        </>
    )
}

export default Home