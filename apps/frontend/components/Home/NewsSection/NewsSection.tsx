
import { FC } from "react"
import NewsDetatilListWithMedia from "../../Shared/NewsDetatilListWithMedia/NewsDetatilListWithMedia"
import MainSection from "./MainSection/MainSection"


const NewsSection:FC = () =>{

    const details = [
        {description:'سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي ', proIcon:true, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
        {description:'بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي', proIcon:false, video:false, tag1:'أمريكا', tag2:'منذ 5 دقائق'},
    ]
    return (
        <>
            <MainSection/>   {/*Main News Section */}
            

        </>
    )
}

export default NewsSection