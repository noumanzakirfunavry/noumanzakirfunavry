import { FC } from "react"
import SideBar from "../Shared/SideBar/SideBar"
import MarketIndices from "./MarketIndices/MarketIndices"
import NewsSection from "./NewsSection/NewsSection"


const Home:FC = () =>{
    return (
        <>
          <MarketIndices/>
          <NewsSection/>

          <div className='row'>
              <div className='col-md-9'>
                right content
              </div>
              <div className='col-md-3'>
                  <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
              </div>
            </div>

        </>
    )
}

export default Home