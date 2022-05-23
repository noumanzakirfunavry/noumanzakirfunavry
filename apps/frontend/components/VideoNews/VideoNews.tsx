import FadedNews from "../Shared/FadedNews/FadedNews"
import PageCatgories from "../Shared/PageCategories/PageCategories"
import newsImage from "../../styles/images/biden2.jpg";
import { baseUrlAdmin } from '../../services/Requests';
import { useEffect, useState } from "react";
import DateArabicFormat from "../Shared/DateCustomFomat/DateArabicFormat"
import HtmlData from "../Shared/HtmlData/HtmlData";
import logoImage from "../../styles/images/CNBC-favicon.png";
import Dailymotion from 'react-dailymotion';

const VideoNews = ({videoNews}) => {

    const [playVideo, setPlayVideo] = useState<boolean>(false)

    useEffect(() => {
        setPlayVideo(false);
    }, [videoNews])

    return (
        <div className="single_video_main">
                {videoNews?.isPro ? <span className="badge bg-success mb-2">PRO</span> : <span></span>}
                <div className="VideoNews mb-4 ">
                    {
                    videoNews?.videoId &&
                    playVideo ? // play video if play flag is set
                        <video className="mb-3 newsDetailimg" controls autoPlay loop muted>
                            <source src={videoNews?.video?.path && baseUrlAdmin+videoNews?.video?.path}/>
                        </video>
                        : // else show thumbnail with play icon
                        videoNews?.video?.dailyMotionURL ? 
                              <Dailymotion
                                className={"newsDetailimg mb-3"}
                                video={videoNews?.video?.dailyMotionURL}   //news?.video?.dailyMotionURL
                                uiTheme="light"
                                autoplay= "false"
                              /> :
                        <div><div className="NewsImage">
                            <img className="img-fluid" src={videoNews?.thumbnail?.path ? baseUrlAdmin+videoNews?.thumbnail?.path:logoImage.src} />
                        </div>
                        <div className="PlayTime">
                            <h5>05:21</h5>
                            <div className="btn-text">
                                <span>شاهد الآن</span>
                                <button className="btn btn-warning VideoPlay" onClick={() => setPlayVideo(!playVideo)}>
                                    <i className="fa play_big"></i>
                                </button>
                            </div>
                        </div></div>
                    }

            {/*<div className="NewsImage">
                <img className="img-fluid" src={newsImage.src} />
            </div>
            <div className="PlayTime">
                <h5>05:21</h5>
                <div className="btn-text">
                    <span>شاهد الآن</span>
                    <button className="btn btn-warning VideoPlay">
                        <i className="fa play_big"></i>
                    </button>
                </div>
            </div>
                </div>*/}
                
            </div>
          <div className="pageSimpleTitle mb-4">
              <div className="float-start">
                  <div className="newsSocial">
                      <ul>
                          <li><a><i className="fa fa-envelope"></i></a></li>
                          <li><a><i className="fab fa-whatsapp"></i></a></li>
                          <li><a><i className="fab fa-linkedin"></i></a></li>
                          <li><a><i className="fab fa-twitter"></i></a></li>
                          <li><a><i className="fab fa-facebook"></i></a></li>
                      </ul>
                  </div>
              </div>
              {/*<div className="float-end">
              <h6 className="text-secondary">الإمارات</h6>
                </div>*/}
              <div className="clearfix"></div>
              {/*<h1>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</h1>*/}
              <h1>{videoNews?.title}</h1>
          </div>

          {videoNews?.isPro ? <FadedNews news={videoNews}/> : <HtmlData data={videoNews?.content} />}
          {/*videoNews && <HtmlData data={videoNews?.content} />*/}
          {/*<p><small><DateArabicFormat date={videoNews?.createdAt} /></small></p>*/}
          {/*<p><small>نشر الجمعة 5 نوفمبر 2021 | 10:35 صباحًا</small></p>*/}
          {/*<FadedNews news={videoNews}/>*/}
          {/*<PageCatgories tags={[]}/>*/}
          </div>
    )
}

export default VideoNews