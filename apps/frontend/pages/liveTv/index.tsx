/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import LiveTvBox from "apps/frontend/components/LiveTv/LiveTvBox/LiveTvBox"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider"
import NewsFooter2SliderWithColoredBackGround from "apps/frontend/components/Shared/NewsFooter2SliderWithColoredBackGround"
import Title from "apps/frontend/components/Title"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner />
            </div>
                <Title styles={"pageTitle PageTitleYellow mb-0"}>
                    <h2 className="mb-3 fw-800">المباشر</h2>
                </Title>
                <LiveTvBox/>
                <div className="container">
                <div className="mb-3">
                    <Title styles={"yellowTitle"}>
                        <h3>البرنامج</h3>
                    </Title>
                    <HorizontalFooter2NewsSlider />
                </div>
                </div>
                <div className="container">
                <div className="mb-3">
                    <Title styles={"yellowTitle"}>
                        <h3>أحدث الحلقات</h3>
                    </Title>
                    <HorizontalFooter2NewsSlider />
                </div>
                <AdBanner />
                </div>
                <div className="sliderTextBg mb-5 livetvSlider ">
                    <div className="container">
                    <Title styles={"TitleBar"}>
                        <h2>حصرية CNBC Arabia </h2>
                    </Title>
                    <NewsFooter2SliderWithColoredBackGround/>
                    </div>

                </div>
                <div className="container">








                <div className="mb-3">
                    <Title styles={"yellowTitle"}>
                        <h3>أحدث مقاطع الفيديو</h3>
                    </Title>
                    <HorizontalFooter2NewsSlider />
                </div>

                <div className="mb-3">
                    <Title styles={"yellowTitle"}>
                        <h3>الأكثر مشاهدة</h3>
                    </Title>
                    <HorizontalFooter2NewsSlider />
                </div>
            </div>
        </>
    )
}

export default Index