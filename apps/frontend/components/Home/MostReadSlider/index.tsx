/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "../../Title";
import newsImage from "./../../../styles/images/biden.jpg";
import GetData from "../../../services/GetData";
import { requests, baseUrlAdmin } from "../../../services/Requests";
import Link from "next/link";




const MostReadSlider: FC = () => {

    const ref: any = useRef()

    const next = () => {
        ref.current.slickNext()
    }

    const previous = () => {
        ref.current.slickPrev()
    }

    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        className: "center",
        centerMode: false,
        centerPadding: "60px",
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: false,


        arrows: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const [mostReadNewsList, setMostReadNewsList] = useState<any>([]);

    useEffect(() => {
        GetData(`${requests.mostReadNews}limit=10&pageNo=1`, {}, 'get', false).then(res=>{
            const newsRes = res.data?.response && res.data?.response.length ? res.data?.response : []
            console.log('Most Read News:::::', newsRes)
            setMostReadNewsList(newsRes);

        }).catch(err=>{
            console.warn(err)
        })

      }, [])

    return (
        <>
     
                <div className="newsSlider scrollbarWrap mostredSlider">

                    <div className="TileBar scrollbarHeader">
                        <div className="float-start">
                            <div className="sliderArrows">
                                <button className="slider-arrow arrow-prev" onClick={previous}>
                                    Previous
                                </button>
                                <button className="slider-arrow arrow-next" onClick={next}>
                                    Next
                                </button>

                            </div>
                        </div>
                        <div className="float-end">
                            <Title styles={'TitleBar'}>
                                <div className="text-end">
                                    <h2>الأكثر قراءة</h2>
                                </div>
                            </Title>
                        </div>
                        <div className="clearfix"></div>
                    </div>


                    <Slider ref={ref} {...settings}>
                        <div className="slider-item">

                        {
                            mostReadNewsList?.length && mostReadNewsList?.map((newsItem:any, index:number)=>{
                                  return(
                                    <li key={index} >

                        { // show thmbnail with play icon if video news
                            newsItem?.news?.videoId ?
                                    <>
                                        <div className="NewsImage VideoNews show_mobile">
                                            <img className="img-fluid" src={newsItem?.news?.thumbnail?.path ? baseUrlAdmin+newsItem?.news?.thumbnail?.path:newsImage.src} />
                                        
                                            <div className="PlayTime">
                                                <h5>05:21</h5>
                                                <div className="btn-text">
                                                    <span>شاهد الآن</span>
                                                    <Link href={`/newsDetails/` + newsItem?.news?.id}>
                                                        <a>
                                                            <button className="btn btn-warning VideoPlay">
                                                                <i className="fa play_small"></i>
                                                            </button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                            : // else how image

                                <div className="NewsImage show_mobile">
                                    <img className="img-fluid" src={newsItem?.news?.image?.path ? baseUrlAdmin+newsItem?.news?.image?.path:newsImage.src} />
                                </div>
                            }

                                        
                                        <Link href={`/newsDetails/` + newsItem?.news?.id}><a>{newsItem?.news?.title}</a></Link>
                                        <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                                    </li>

                                  
                                  )
                              })
                          }

                        {/*<li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                            <li key={'12'} >
                                <div className="NewsImage show_mobile">
                                    <img className="img-fluid" src={newsImage.src} />
                                </div>
                                <a href="/newsDetails">
                                    النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                                </a>
                                <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                            </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                        <div className="slider-item">
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p className="tag"><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>*/}
                        </div>
                    </Slider>

                </div>
            
        </>
    )
}

export default MostReadSlider