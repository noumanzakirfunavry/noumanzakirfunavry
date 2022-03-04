import newsImage from "../../styles/images/biden.jpg";
import CategoryDetailsBoxes from "./CategoryDetailsBoxes/CategoryDetailsBoxes";
import FadedNews from "../Shared/FadedNews/FadedNews";
import ProNews from "./ProNews/ProNews";

const NewsDetails = () => {

    return (
        <>
            <CategoryDetailsBoxes/>

            <div className="mb-3 newsDetailimg">
                <img className="img-fluid" src={newsImage.src} />
            </div>
            <h6 className="newsDetailtext">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h6>
            <hr></hr>

            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <FadedNews/>
                        <ProNews/>
                    </div>
            </div>

       </>


    )
}

export default NewsDetails