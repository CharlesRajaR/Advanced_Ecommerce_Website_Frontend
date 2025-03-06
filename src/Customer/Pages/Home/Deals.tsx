import React from 'react'
import DealCard from './DealCard.tsx'
import Slider from "react-slick"

const Deals = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='slider-container -z-10'>
        <Slider {...settings}>
      {
        [1,1,1,1,1,1,1,1,1,1,1,1].map((item) =>{
        return (<div className="">
                <DealCard/>
                </div>)
        })
      }
      </Slider>
    </div>
  )
}

export default Deals
