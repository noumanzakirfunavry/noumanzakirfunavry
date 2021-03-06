import FadedNews from "../Shared/FadedNews/FadedNews"
import PageCatgories from "../Shared/PageCategories/PageCategories"
import HtmlData from "../Shared/HtmlData/HtmlData";
import newsImage from "../../styles/images/biden2.jpg";
import { baseUrlAdmin } from '../../services/Requests';
import { useEffect, useState } from "react";
import DateArabicFormat from "../Shared/DateCustomFomat/DateArabicFormat"
import Dailymotion from 'react-dailymotion';

const Episode = ({episodeDetail}) => {

    const [playVideo, setPlayVideo] = useState<boolean>(false)

    useEffect(() => {
        setPlayVideo(false);
    }, [episodeDetail])

    console.log('Episode Detail::', episodeDetail);

    return (
        <>
        <div className="single_video_main">
                <div className="VideoNews mb-4 ">
                    {
                    episodeDetail?.videoId &&
                    playVideo ? // play video if play flag is set
                        <video className="mb-3 newsDetailimg" controls autoPlay loop muted>
                            <source src={episodeDetail?.video?.path && baseUrlAdmin+episodeDetail?.video?.path}/>
                        </video>
                        : // else show thumbnail with play icon
                        episodeDetail?.video?.dailyMotionURL ? 
                        <Dailymotion
                            className={"newsDetailimg mb-3"}
                            video={episodeDetail?.video?.dailyMotionURL}   //news?.video?.dailyMotionURL
                            uiTheme="light"
                            autoplay= "false"
                        /> :
                        <div><div className="NewsImage">
                            <img className="img-fluid" src={episodeDetail?.thumbnail?.path ? baseUrlAdmin+episodeDetail?.thumbnail?.path:newsImage.src} />
                        </div>
                        <div className="PlayTime">
                            <h5>05:21</h5>
                            <div className="btn-text">
                                <span>???????? ????????</span>
                                <button className="btn btn-warning VideoPlay" onClick={() => setPlayVideo(!playVideo)}>
                                    <i className="fa play_big"></i>
                                </button>
                            </div>
                        </div></div>
                    }
                
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
              <h6 className="text-secondary">????????????????</h6>
                </div>*/}
              <div className="clearfix"></div>
              <h1>{episodeDetail?.title}</h1>
          </div>

          <p><small><DateArabicFormat date={episodeDetail?.createdAt} /></small></p>
          {episodeDetail && <HtmlData data={episodeDetail?.content} />}
          {/*<p><small>?????? ???????????? 5 ???????????? 2021 | 10:35 ????????????</small></p>*/}
          {/*<FadedNews news={episodeDetail} />*/}
          {/*<PageCatgories tags={[]}/>*/}
          </div>
        </>
    )
}

export default Episode