import { FC } from "react"
import newsImage from "../../../styles/images/biden.jpg";

const TilesWithColoredBackground:FC = () =>{

    // Dynamic list
    return (
        <>
            <div className="NewsTilesBg">
                <div className="TitleBar">
                    <div className="float-start">
                        <button className="btn btn-outline-light">جميع الفيديو</button>
                        <button className="btn btn-danger me-3">شاهد البث المباشر</button>
                    </div>
                    <div className="float-end">
                        <h2>عربية CNBC</h2>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="VideoNews">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="PlayTime">
                                <h5>05:21</h5>
                                <button className="btn btn-warning VideoPlay">
                                    <i className="fa fa-play"></i>
                                </button>
                            </div>
                            <div className="NewsContent">
                                <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="VideoTiles">
                        <div className="VideoNews">
                            <div className="NewsImage">
                                <img className="img-fluid" src={newsImage.src} />
                            </div>
                            <div className="PlayTime">
                                <h5>05:21</h5>
                                <button className="btn btn-warning VideoPlay">
                                    <i className="fa fa-play"></i>
                                </button>
                            </div>
                            <div className="NewsContent">
                                <h4>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TilesWithColoredBackground