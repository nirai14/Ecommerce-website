import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../assets/testimonialHero.png'
import {TestimonialsData} from '../../data/testimonials'
import {Swiper,SwiperSlide} from 'swiper/react'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
          <div className={css.container}>
            <span>Top Rated</span>
            <span>Seedily say has suitable disposable and boy. excercise joy man chi rejoiced.</span>
        </div>
        
        <img src={Hero} alt="" />
    <div className={css.container}>
        <span>100k</span>
        <span>Happy Customer with us</span>
    </div>
    </div>
    <div className={css.review}>Reviews</div>
<div className={css.carousel}>
<Swiper slidesPerView={3} slidesPerGroup={1} 
spaceBetween={20} className={css.tcarousel}
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
  {TestimonialsData.map((testimonials,i)=>(
    <SwiperSlide key={i}>
<div className={css.testimonial}>
  <img src={testimonials.image} alt="" />
  <span>{testimonials.comment}</span>
  <hr/>
  <span>{testimonials.name}</span>
</div>
    </SwiperSlide>
  
  ))}
</Swiper>
</div>
    </div>
  )
}

export default Testimonials