/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import JobOpportunities from "apps/frontend/components/Careers/JobOpportunities/JobOpportunities";
// import HorizontalMediaScrollBar from "apps/frontend/components/Home/HorizontalMediaScrollBar.tsx/HorizontalMediaScrollBar";
import AdBanner from "apps/frontend/components/Shared/AdBanner/AdBanner";
import { FC, useRef, useState } from "react";
import Slider from "react-slick";


const Index = () =>{

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
            <div className="container">
                <AdBanner />

                <div className="pageTitle PageTitleYellow">
                    <h2 className="montserrat text-extra-bold">CNBC ARABIA CAREERS</h2>
                </div>

                <div className='jobsSlider'>

                    <div className="row">
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
                            <h2 className="text-primary text-start montserrat text-extra-bold">CURRENT JOBS</h2>
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

                    {/* <HorizontalMediaScrollBar/> */}
                </div>
                <hr></hr>
                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <JobOpportunities/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index










