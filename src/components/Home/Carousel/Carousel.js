import React, { useState } from 'react';
import './Carousel.css'
import Slider from "react-slick";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed:2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="container-fluid container-bg">
                 <div className="text-center container " >
            <div>
                <h1 className="text-white text-center p-5">Here are some of our work</h1>
            </div>
            <div className="row d-flex slider-img">
            <div className=""></div>
                <div className="col-md-4 col-sm-12 col-12 col-lg-12">
                <Slider {...settings}>
                    <div>
                        <img src={carousel1} className="img-fluid  mt-3" alt="..."/>
                    </div>
                    <div>
                        <img src={carousel2} className="img-fluid mt-3" alt=""/>
                    </div>
                    <div>
                    <img src={carousel3} className="img-fluid mt-3" alt=""/>
                    </div>
                    <div>
                    <img src={carousel4} className="img-fluid  mt-3" alt=""/>
                    </div>
                    <div>
                    <img src={carousel5} className="img-fluid mt-3" alt=""/>
                    </div>
          
        </Slider>
                </div>
            </div>
            <div>
            
            </div>
        </div>
        </div>
       
        
    );
};

export default Carousel;