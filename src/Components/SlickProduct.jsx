import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic4 from './Assets/Images/pic4.png'
import pic2 from './Assets/Images/pic2.png'
import pic3 from './Assets/Images/pic3.png'
import pic1 from './Assets/Images/pic1.png'
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';


const CustomNextArrow = (props) => {
    
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, zIndex: 1, right: '30px',top: '40%', width: '52px', height: '52px'}}
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
        style={{ ...style, zIndex: 1, left: '30px', top: '40%', width: '52px', height: '52px'}}
        onClick={onClick}
      >
          <div className="bg-white rounded-full w-[52px] h-[52px] flex justify-center items-center">
              <VscArrowLeft className='w-[24px] h-[24px] text-black' />
          </div>
      </div>
    );
  }


export default function SlickProduct() {

    const pics = [pic1, pic2, pic3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
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
        dotsClass: 'slick-dots1',
        customPaging: function(i) {
          return (
            <a>
              <img src={pics[i]} alt={`Slide ${i + 1}`} className='w-full h-full object-cover'/>
            </a>
          );
        }
      };
    
      return (
        <div>
          <Slider {...settings}>
            
            <div className='xl:h-[740px] sm:h-[540px] h-[440px] overflow-hidden bg-slate-100'>
                <div className='h-full flex flex-row items-center justify-center w-full'>
                    <img src={pic4} alt="Slide 1" className='md:w-full sm:h-full h-full object-contain'/>
                </div>
                
            </div>
            <div className='xl:h-[740px] sm:h-[540px] h-[440px] overflow-hidden bg-slate-100'>
                <div className='h-full flex flex-row items-center justify-center w-full'>
                    <img src={pic2} alt="Slide 2" className='md:w-full sm:h-full h-full object-contain'/>
                </div>
                
            </div>
            <div className='xl:h-[740px] sm:h-[540px] h-[440px] overflow-hidden bg-slate-100'>
                <div className='h-full flex flex-row items-center justify-center w-full'>
                    <img src={pic3} alt="Slide 3" className='md:w-full sm:h-full h-full object-contain'/>
                </div>
                
            </div>
            
          </Slider>
        </div>
  )
}
