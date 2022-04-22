import { FC, useState, useEffect } from "react";
import Slider from "react-slick";
import sliderimg from "../../../styles/images/biden2.jpg";

import GetData from "../../../services/GetData";
import { requests, baseUrlAdmin } from "../../../services/Requests";



const NewsFooter2SliderWithColoredBackGround:FC = () =>{



        const [settings, setSettings] = useState({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1
                }
              }
            ]
          });

        const [exclusiveVideosNewsList, setExclusiveVideosNewsList] = useState<any>([])
    
        useEffect(()=>{
            GetData(`${requests.exclusiveVideosNews}&limit=10&pageNo=1`, {}, 'get', false).then(res=>{
                const newsRes = res.data && res.data.length ? res.data : []
                setExclusiveVideosNewsList(newsRes);

              }).catch(err=>{
                console.warn(err)
              })
        },[])

        //console.log('Exclusive Videos:::::', exclusiveVideosNewsList);

    return (
        <>
        <div className="newsSliderText newsSlider2Text">
            <Slider {...settings}>
                {
                  exclusiveVideosNewsList.map((news: any, index: number) => {
                    return(
                        <div className="slider-item" key={news.id}>
                            <div className="NewsBox ">
                                <div className="newsImage">
                                    {news?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news?._source.image?.path} />:<img className="img-fluid" src={sliderimg.src} />}
                                    <div className="PlayTime">
                                        <h5>05:21</h5>
                                        <div className="btn-text">
                                            <button className="btn btn-warning VideoPlay">
                                                <i className="fa play_medium"></i>
                                            </button>
                                            <span>شاهد الآن</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="newscontent">
                                    <h5><a>{news?._source?.title}</a></h5>
                                    <p>
                                    { // to show tags
                                        news?._source?.tags?.map((tag: string, tagIndex: number) => {
                                            return(
                                                <a key={tagIndex} href="#">{tag}</a>
                                            )
                                        })  
                                    }
                                    </p>
                                </div>
                            </div>
                        </div>                          
                    )
                  })  
                }

                    {/*<div className="slider-item">
                        <div className="NewsBox ">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <button className="btn btn-warning VideoPlay">
                                            <i className="fa play_medium"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                    </div>



                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <button className="btn btn-warning VideoPlay">
                                            <i className="fa play_medium"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <button className="btn btn-warning VideoPlay">
                                            <i className="fa play_medium"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <button className="btn btn-warning VideoPlay">
                                            <i className="fa play_medium"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
            </div>*/}

            </Slider>
        </div>
        </>
    )
}

export default NewsFooter2SliderWithColoredBackGround