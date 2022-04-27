import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import sliderimg from "../../../styles/images/biden2.jpg";
import GetData from "../../../services/GetData";
import { requests, baseUrlAdmin } from '../../../services/Requests';
import Link from 'next/link';



const RelatedNewsSlider:FC<{tags:Array<any>, quotes:Array<any>}> =  ({tags, quotes})=>{
    const [relatedNewsList, setRelatedNewsList] = useState<any>([]);
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


    useEffect(() => {

            let tagsList = []
            tagsList = tags && tags?.length && tags.map((tag) => {
                return tag.title;
            });

            let quotesList = []
            quotesList = quotes && quotes.length && quotes.map((quote) => {
                return quote.name;
            });

            //console.log('tagsList::::::::', tagsList);
            //console.log('quotesList::::::', quotesList);

            let searchObj = {};
            searchObj = tagsList.length > 0 && {...searchObj, tags: tagsList} 
            searchObj = quotesList.length > 0 && {...searchObj, quotes: quotesList} 

            const _data = {
                tags: tagsList,
                quotes: quotesList
            }

            //console.log('searchObj:::::', searchObj)

            GetData(`${requests.search}`, searchObj, 'post', false).then(res => {
                    console.log('related news:::::::', res.data);
                    setRelatedNewsList(res?.data)
                
                }).catch(err=>{
                    console.warn(err)
            });
            
    }, [])

    return (
        <>
        <div className="newsSliderText newsSlider2Text video_newsSlider_wrap">
            <Slider {...settings}>
                        {
                            relatedNewsList?.length && relatedNewsList?.map((news:any, index:number)=>{
                                  return(
                                    <div className="slider-item"  key={index}>
                                        <div className="NewsBox ">
                                            <div className="newsImage">
                                            {news?._source?.image ? <img className="img-fluid" src={baseUrlAdmin+news?._source.image?.path} />:<img className="img-fluid" src={sliderimg.src} />}
                                            { news.videoId &&
                                                <div className="PlayTime">
                                                    <h5>05:21</h5>
                                                    <div className="btn-text">
                                                        <button className="btn btn-warning VideoPlay">
                                                            <i className="fa play_medium"></i>
                                                        </button>
                                                        <span>شاهد الآن</span>
                                                    </div>
                                                </div>
                                            }
                                            </div>
                                            <div className="newscontent">
                                                {/*<h5><a>بايدن: سيفقد حوالى 10 ملايي</a></h5>*/}
                                                <h5><Link href={`/newsDetails/`+news._id}><a>{news?._source?.title}</a></Link></h5>
                                                {<p><a href="#">الإمارات</a> منذ 5 دقائق</p> /* @TODO: will show sub categories here once it gets done from backend side. */}
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

export default RelatedNewsSlider