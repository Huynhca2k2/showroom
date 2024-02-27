import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner_1 from './Assets/Images/banner1.png';
import { VscArrowRight } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";

const CustomNextArrow = (props) => {
    
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1, right: '30px', width: '52px', height: '52px'}}
      onClick={onClick}
    >
        <div className="bg-white rounded-full w-[52px] h-[52px] flex justify-center items-center">
            <VscArrowRight className='w-[24px] h-[24px] text-black' />
        </div>
    </div>
  );
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 1, left: '30px', width: '52px', height: '52px'}}
      onClick={onClick}
    >
        <div className="bg-white rounded-full w-[52px] h-[52px] flex justify-center items-center">
            <VscArrowLeft className='w-[24px] h-[24px] text-black' />
        </div>
    </div>
  );
}

const CustomDots = ({ onClick, active }) => (
    <button
      style={{
        background: 'white',
        width: active ? '30px': '10px',
        height: '10px',
        borderRadius: '20px',
        border: 'none',
        margin: '0 5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );

export default function SlickBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            nextArrow: false,
            prevArrow: false,
          }
        }
      ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: 'slick-dots2',
    customPaging: function(i) {
      return (
        <CustomDots 
          key={i}
          onClick={() => {}}
          active={i === currentSlide}
        />
      );
    },
    afterChange: (index) => {
        setCurrentSlide(index);
      },
  
  };

  return (
    <Slider {...settings} className=''>
      <div>
        <img src={banner_1} alt="banner 1" />
      </div>
      <div>
        <img src={banner_1} alt="banner 2" />
      </div>
      <div>
        <img src={banner_1} alt="banner 3" />
      </div>
      <div>
        <img src={banner_1} alt="banner 3" />
      </div>
    </Slider>
  );
};

