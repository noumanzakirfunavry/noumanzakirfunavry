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
                <div className='row mb-3'>
                <div className='col-xl-9 col-lg-8'>
                    <VideoNews/>
                </div>
                <div className='col-xl-3 col-lg-4'>
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