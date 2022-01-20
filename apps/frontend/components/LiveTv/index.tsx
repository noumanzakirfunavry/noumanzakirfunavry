import HorizontalMediaScrollBar from "../Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar"
import AdBanner from "../Shared/AdBanner/AdBanner"
import HorizontalFooterNewsSlider from "../Shared/HorizontalFooterNewsSlider";
import livetvimg from "../../styles/images/livetv.png";
import HorizontalFooter2NewsSlider from "../Shared/NewsFooter2Slider";

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
                <div className="livetvbox mb-5">
                    <div className='liveTV'>
                        <img src={livetvimg.src} className="img-fluid"/>
                    </div>
                    <button className="btn btn-outline-light">جدول البرامج</button>
                </div>
                <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>البرنامج</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>
                <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>أحدث الحلقات</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>

                <AdBanner />

                <div>
                <div className="sliderTextBg mb-4">
                    <div className="TitleBar">
                        <h2>حصرية CNBC Arabia </h2>
                    </div>
                    
                    <HorizontalFooter2NewsSlider />

                </div>

                </div>

                <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>أحدث مقاطع الفيديو</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>

                <div className="mb-3">
                    <div className="yellowTitle">
                        <h3>الأكثر مشاهدة</h3>
                    </div>
                    <HorizontalFooter2NewsSlider />
                </div>

            </div>
        </>
    )
}

export default LiveTV