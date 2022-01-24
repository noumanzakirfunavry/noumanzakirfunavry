/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import HorizontalFooterNewsSlider from "apps/frontend/components/Shared/HorizontalFooterNewsSlider"
import livetvimg from "../../styles/images/livetv.png";

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
            </div>
            <div className="container-fluid">
                <div className="pageTitle PageTitleYellow mb-0">
                    <h2>المباشر</h2>
                </div>
                <div className="livetvbox">
                    <div className='liveTV'>
                        <img src={livetvimg.src} className="img-fluid"/>
                    </div>
                    <button className="btn btn-outline-light">جدول البرامج</button>
                </div>
                <div>
                    Imran shb Design this slider
                    <HorizontalFooterNewsSlider />
                </div>

                <AdBanner />

            </div>
        </>
    )
}

export default Index