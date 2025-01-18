import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slider.css';
import { SliderImages } from '../../assets/assets';

// استيراد ملفات CSS الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// استيراد الصور (يمكنك استبدالها بصورك الخاصة)
function Slider() {
    return (
      <div className="slider-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {SliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  
  export default Slider;