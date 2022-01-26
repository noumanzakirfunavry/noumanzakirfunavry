/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import NewsDetails from "apps/frontend/components/NewsDetails"
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import NewsInfoBox from "apps/frontend/components/Shared/NewsInfoBox/NewsInfoBox";
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"
import Title from "apps/frontend/components/Title";

const Index = () =>{

    return (
        <>
            <div className="container">
                <AdBanner/>

                <Title styles={"pageSimpleTitle mb-5"}>
                    <span className="badge bg-success">PRO</span>
                    <h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h1>
                </Title>
                <div className='col-md-8'>
                    <NewsInfoBox/>
                </div>
                <div className="row">
                    <div className='col-md-8'>
                        <NewsDetails/>
                    </div>
                    <div className='col-md-4'>
                        <SideBar sideBarSequence={[{componentType:'Latest', position:1}, {componentType:'SmallBanner', position:2}]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index