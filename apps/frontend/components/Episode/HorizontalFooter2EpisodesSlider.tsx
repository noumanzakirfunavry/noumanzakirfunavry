import { FC, useState } from "react";
import Slider from "react-slick";
import sliderimg from "../../styles/images/biden2.jpg";
import Link from "next/link";
import { baseUrlAdmin } from '../../services/Requests';



const HorizontalFooter2EpisodesSlider =  ({episodes})=>{


        const [settings, setSettings] = useState({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
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
    return (
        <>
        <div className="newsSliderText newsSlider2Text video_newsSlider_wrap">
        <Slider {...settings}>

                    {// show episodes
                    episodes?.length && episodes.map((episode: any, index: number)=>{
                        return (
                            <div className="slider-item" key={index}>
                                <div className="NewsBox ">
                                    <div className="newsImage">
                                    <img className="img-fluid" src={episode?.thumbnail?.path ? baseUrlAdmin+episode?.thumbnail?.path:sliderimg.src} />
                                        <div className="PlayTime">
                                            <h5>05:21</h5>
                                            <Link href={{ pathname: 'episode', query: { episodeId: episode.id, programId: episode.programId }}}>
                                                <a>
                                                    <div className="btn-text">
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_medium"></i>
                                                        </button>
                                                        <span>شاهد الآن</span>
                                                    </div>  
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="newscontent">
                                        <h5>
                                            <Link href={{ pathname: 'episode', query: { episodeId: episode.id, programId: episode.programId }}}>
                                                <a>{episode && episode?.title}</a>
                                            </Link>
                                        </h5>
                                        {/*<p><a href="#">الإمارات</a> منذ 5 دقائق</p>*/}
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }

                    <div className="slider-item">
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
                                <p><a href="#">الإمارات</a> منذ 5 دقائق</p>
                            </div>
                        </div>
                </div>*/}

            </Slider>
        </div>
        </>
    )
}

export default HorizontalFooter2EpisodesSlider