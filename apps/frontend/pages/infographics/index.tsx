/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner"
import News2TopTiles from "apps/frontend/components/Shared/News2TopTiles"
import NewsDetatilListWithMedia from "apps/frontend/components/Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import SideBar from "apps/frontend/components/Shared/SideBar/SideBar"

const Index = () =>{

    const details = [
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
                    ]
    return (
        <>
            <div className="container">
                <AdBanner />
            </div>
            <div className="pageTitle PageTitleYellow mb-5">
                <h2>إنفوغرافيك</h2>
            </div>
            <div className="container">
            <div className="infographics_container">
            <div className='PageBuilder-pageRow'>
                <div className='PageBuilder-col-9'>
                <News2TopTiles/>
                <NewsDetatilListWithMedia dispalyMoreButton={true} details={details}/>
                </div>
                <div className='PageBuilder-sidebar'>
                    <SideBar sideBarSequence={[{componentType:'numbered', position:1, title:'الأكثر تداولا'}, {componentType:'SmallBanner', position:2}, {componentType:'simple', position:2, title:'الأكثر قراءة'}, {componentType:'LargeBanner', position:2}]}/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Index