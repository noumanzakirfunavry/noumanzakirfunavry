import { FC} from "react"
import SideBar from "../Shared/SideBar/SideBar"
import MarketIndices from "./MarketIndices/MarketIndices"
import NewsSection from "./NewsSection/NewsSection"



const Home:FC = () =>{
    return (
        <>
          <MarketIndices/>
          <div className="container">
          {/* <div itemScope itemType="https://schema.org/VideoObject"><meta itemProp="uploadDate" content="Thu Jan 13 2022 10:02:17 GMT+0500 (Pakistan Standard Time)"/><meta itemProp="name" content="File Example Mp4 640 3mg"/><meta itemProp="duration" content="P0Y0M0DT0H0M30S" /><meta itemProp="thumbnailUrl" content="https://content.jwplatform.com/thumbs/tYQhH5Gw-640.jpg"/><meta itemProp="contentUrl" content="https://content.jwplatform.com/videos/tYQhH5Gw-X23t2ftp.mp4"/><div><iframe src="https://cdn.jwplayer.com/players/tYQhH5Gw-q6QB1sCF.html" width="100%" height="100%" frameBorder="0" scrolling="auto" title="File Example Mp4 640 3mg" ></iframe></div></div> */}
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