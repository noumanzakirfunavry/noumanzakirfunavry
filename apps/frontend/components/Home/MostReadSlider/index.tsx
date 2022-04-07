/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import Title from "../../Title";
import newsImage from "./../../../styles/images/biden.jpg";


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
        slidesToShow: 2.5,
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
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.5,
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
    return (
        <>
            <div className="container">
                <div className="newsSlider scrollbarWrap">

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
                        <li key={'12'} >
                        <div className="NewsImage show_mobile">
                            <img className="img-fluid" src={newsImage.src} />
                        </div>
                          <a href="/newsDetails">
                          النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب
                          </a>
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                                <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
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
                          <p><a href="#">أمريكا</a> <b>منذ 5 دقائق</b></p>
                          </li>
                        </div>
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default MostReadSlider