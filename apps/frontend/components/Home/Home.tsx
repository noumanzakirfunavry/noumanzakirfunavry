import { FC } from "react"
import AdBanner from "../Shared/AdBanner/AdBanner"
import SideBar from "../Shared/SideBar/SideBar"
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu"
import MarketIndices from "./MarketIndices/MarketIndices"
import NewsSection from "./NewsSection/NewsSection"



const Home:FC = () =>{
    return (
        <>
          <MarketIndices/>
          
          <div className="container-fluid">     
                <AdBanner/>
                <CategoriesMenu/>
            </div>
          <div className="container">
            <div className='row'>
                <div className='col-md-8'>
                  <NewsSection/>
                </div>
                <div className='col-md-4'>
                    <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                </div>
              </div>
            </div>

        </>
    )
}

export default Home