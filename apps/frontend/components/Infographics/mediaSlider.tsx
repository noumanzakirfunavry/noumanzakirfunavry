import { FC, useState } from "react";
import Slider from "react-slick";

import sliderimg from "./../../styles/images/biden2.jpg";
// import sliderimg from "../../../styles/images/biden2.jpg";



const MediaSlider:FC =  ()=>{



        const [settings, setSettings] = useState({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
    return (
        <>
        <div className="newsSliderText newsSlider2Text ">
            <Slider {...settings}>
                    <div className="slider-item">
                        <div className="NewsBox ">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                                <div className="PlayTime">
                                    <h5>05:21</h5>
                                    <div className="btn-text">
                                        <button className="btn btn-warning VideoPlay">
                                            <i className="fa fa-play"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                                <h5><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h5>
                                {/* <p><a href="#">الإمارات</a> منذ 5 دقائق</p> */}
                            </div>
                        </div>
                    </div>



                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                            </div>
                            <div className="newscontent">
                            <h5><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h5>
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
                                            <i className="fa fa-play"></i>
                                        </button>
                                        <span>شاهد الآن</span>
                                    </div>
                                </div>
                            </div>
                            <div className="newscontent">
                            <h5><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newsImage">
                                <img className="img-fluid" src={sliderimg.src} />
                            </div>
                            <div className="newscontent">
                            <h5><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي</a></h5>
                            </div>
                        </div>
                    </div>


            </Slider>
        </div>
        </>
    )
}

export default MediaSlider