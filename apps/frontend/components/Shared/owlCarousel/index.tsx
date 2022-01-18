import React, { FC, useState } from 'react';
import Slider from "react-slick";

// function SampleNextArrow(props) {
// const { className, style, onClick } = props;
// return (
//   <div
//     className={className}
//     style={{ ...style, display: "block", background: "red" }}
//     onClick={onClick}
//     >Next</div>
// );
// }

// function SamplePrevArrow(props) {
// const { className, style, onClick } = props;
// return (
//   <div
//     className={className}
//     style={{ ...style, display: "block", background: "green" }}
//     onClick={onClick}
//   >Prev</div>
// );
// }

const ListCarousel: FC<any> = () => {
    
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
   
    
    return (
        <>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
        </>
    )
}

export default ListCarousel