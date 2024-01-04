import React from 'react'
import './Slider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductsData} from '../../data/products'

const Slider = () => {
  
return (
 <div className='s-container'>
<Swiper 
spaceBetween={40} 
loop={true}
navigation={{ clickable: true }}
breakpoints={{
     // when window width is >= 1024px (desktop)
     1024: {
      slidesPerView: 3,
    },
  // when window width is >= 768px (desktop)
  768: {
    slidesPerView: 3,
  },
  // when window width is < 768px (mobile)
  0: {
    slidesPerView: 1,
  },
}}
>
  {ProductsData.map((slide,i)=>(
    <SwiperSlide key={i} xs={1}>
      <div className='left-s'>
      <div className='name'>
<span>{slide.name}</span>
<span>{slide.detail}</span>
        </div>
        <span>{slide.price}$</span>
        <div>Shop now</div>
      </div>
      <img src={slide.img} alt="product" className='img-p'/>
    </SwiperSlide>
  ))}
</Swiper> 
    </div> 
)}

export default Slider


