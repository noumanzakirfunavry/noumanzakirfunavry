import HorizontalMediaScrollBar from "../Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "../Shared/AdBanner/AdBanner"
import HorizontalFooterNewsSlider from "../Shared/HorizontalFooterNewsSlider";
import livetvimg from "../../styles/images/livetv.png";

const LiveTV = () => {

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

export default LiveTV