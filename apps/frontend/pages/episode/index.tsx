/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import VideoNews from "apps/frontend/components/VideoNews/VideoNews"
import HorizontalFooter2NewsSlider from "apps/frontend/components/Shared/NewsFooter2Slider"
import Title from "apps/frontend/components/Title"
import SideBarWithVideo from "apps/frontend/components/VideoNews/SideBarWithVideo"

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner/>
                <div className='PageBuilder-pageRow mb-3'>
                <div className='PageBuilder-col-9'>
                    <VideoNews/>
                </div>
                <div className='PageBuilder-sidebar mt-0'>
                    <SideBarWithVideo title={'آخرون من اكسبو في أسبوع'}/>
                </div>
            </div>
            </div>
           <div className="container">
           <div className="mb-3">
                <Title styles={"yellowTitle"}>
                    <h3>أحدث حلقات البرنامج</h3>
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