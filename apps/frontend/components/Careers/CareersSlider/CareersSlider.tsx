/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { FC, useRef, useState } from "react";
import Slider from "react-slick";


const CareersSlider = () =>{

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
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            className: "center",
            centerMode: false,
            centerPadding: "60px",
            slidesToScroll: 5,
            initialSlide: 0,
            rtl: false,
            arrows:false,
            responsive: [
              {
                breakpoint: 1800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                }
              },
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

    return (
        <>
            <div className='jobsSlider'>

                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="sliderArrows text-end">
                            <button className="slider-arrow arrow-prev" onClick={previous}>
                                Previous
                            </button>
                            <button className="slider-arrow arrow-next" onClick={next}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h2 className="text-primary text-start montserrat text-extra-bold mb- currentJob_heading">CURRENT JOBS</h2>
                    </div>
                </div>


                <div className="newsSlider">

                    <Slider ref={ref} {...settings}>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="NewsBox">

                                    <h6>Egypt</h6>
                                    <h2><a>Marketing Manager</a></h2>
                                    <div className="newscontent">
                                        <p>Posted 28 November 2021</p>
                                    </div>

                                </div>
                            </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CareersSlider










