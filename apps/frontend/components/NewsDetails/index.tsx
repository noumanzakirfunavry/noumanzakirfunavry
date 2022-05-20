import newsImage from "../../styles/images/biden.jpg";
import FadedNews from "../Shared/FadedNews/FadedNews";
import ProNews from "./ProNews/ProNews";
import NewsRealtedStock from "./CategoryDetailsBoxes/CategoryDetailsBoxes";
import { useEffect, useState } from "react";
import logoImage from "../../styles/images/CNBC-favicon.png";
import { baseUrlAdmin } from "../../services/Requests";

const NewsDetails = ({news}) => {

    const [playVideo, setPlayVideo] = useState<boolean>(false)

    useEffect(() => {
        setPlayVideo(false);
    }, [news])

    console.log("news id====>",news);

    return (
        <>
            <NewsRealtedStock/>

            { // if video news then deal with video
                news?.videoId ? 
                playVideo ? // play video if play flag is set
                    <video className="mb-3 newsDetailimg" controls autoPlay loop>
                        <source src={news?.video?.path ? baseUrlAdmin+news?.video?.path:logoImage.src} type="video/mp4" />
                    </video>
                    // apply condition base player if daily motion video exist then show otherwise show local video 
                    // <iframe src="https://geo.dailymotion.com/player/x8lqy.html?video=x8adsti" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen frameBorder="0" width="100%" height="360"></iframe>
                : // else show thumbnail with play icon
                    <div className="VideoNews mb-4 ">
                        <div className="NewsImage">
                            <img className="img-fluid" src={news?.thumbnail?.path ? baseUrlAdmin+news?.thumbnail?.path:logoImage.src} />
                        </div>
                        <div className="PlayTime">
                            <h5>05:21</h5>
                            <div className="btn-text">
                                <span>شاهد الآن</span>
                                <button className="btn btn-warning VideoPlay" onClick={() => setPlayVideo(!playVideo)}>
                                    <i className="fa play_big"></i>
                                </button>
                            </div>
                        </div>
                    </div>

            : // else show image if not video news

                <div className="mb-3 newsDetailimg">
                    <img className="img-fluid" src={news?.image?.path ? baseUrlAdmin+news?.image?.path:logoImage.src} />
                </div>
            } 

            {/*<div className="mb-3 newsDetailimg">
                <img className="img-fluid" src={newsImage.src} />
                </div>*/}
        
            {/*<h6 className="newsDetailtext">بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </h6>*/}
            <hr></hr>

            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <FadedNews news={news} />
                        <ProNews/>
                    </div>
            </div>

       </>


    )
}

export default NewsDetails