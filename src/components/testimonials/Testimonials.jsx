import React from 'react'
import IMG from '../../assets/primage.jpg';
import IMG2 from '../../assets/naren.jpg';

import './testimonials.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from Co-Workers</h5>
        <h2>Recommendations</h2>
        <Swiper className="container testimonials_container" 
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
         >
            <SwiperSlide className='testimonial'>
                <div className="client_avator">
                    <img src={IMG} alt="profile"/>
                    <h5 className='client_name'>Priyanshu Kumar</h5></div>
                    <small className='client_review'>Navodit’s problem solving skills are out of the box. He analyses the problem and helps the team to come up with viable solutions. I worked with him for one of the Wipro's Client National Stock Exchange of India and his contribution in that project was commendable.
when its comes to Frontend ,His skill are so amazing and optimized.
He thinks of the problem first and plans which code is less as well as efficient for the respective UI.  </small>
    <a href="https://www.linkedin.com/in/navodit-pathak/">Verify Source</a>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className="client_avator">
                    <img src={IMG2} alt="profile"/>
                    <h5 className='client_name'>Narendra Singh</h5></div>
                    <small className='client_review'>Navodit is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented and intelligent person. Highly recommended.  </small>
    <a href="https://www.linkedin.com/in/navodit-pathak/">Verify Source</a>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials