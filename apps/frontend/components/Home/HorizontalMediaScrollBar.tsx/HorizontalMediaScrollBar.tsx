/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import Title from "../../Title";



const HorizontalMediaScrollBar:FC = () =>{

       const ref:any = useRef()

       const next = () =>{
           ref.current.slickNext()
       }

       const previous = () =>{
        ref.current.slickPrev()
    }

        const [settings, setSettings] = useState({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2.5,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            className: "center",
            centerMode: false,
            centerPadding: "60px",
            slidesToScroll: 1,
            initialSlide: 0,
            rtl: false,


            arrows:false,
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
                  slidesToShow: 1.5,
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
                        <h2>من اختيار المحرر</h2>
                    </div>
                </Title>
                      </div>
                  <div className="clearfix"></div>
              </div>


            <Slider ref={ref} {...settings}>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="NewsBox">
                            <div className="newscontent">
                                <h3><a>بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي </a></h3>
                            </div>
                        </div>
                    </div>
            </Slider>

        </div>
      </div>
        </>
    )
}

export default HorizontalMediaScrollBar