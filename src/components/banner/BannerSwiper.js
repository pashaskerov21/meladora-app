import React from 'react'
import designFruit from '../../image/banner-slide/slide-fruit.png'
import designVgtbl from '../../image/banner-slide/slide-vgtbl.png'
import designFloat from '../../image/banner-slide/slide-flour.png'
import designBg_1 from '../../image/design/slide-design-1.png'
import designBg_2 from '../../image/design/slide-design-2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function BannerSwiper() {
    return (
        <div className='banner-swiper-wrapper'>
            <div className="container">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}>
                    <SwiperSlide >
                        <div className="slide-card bg-1">
                            <h3 className='title'>Meyvələr</h3>
                            <img src={designFruit} className='design-1' alt="design" />
                            <img src={designBg_1} className='design-2' alt="design" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="slide-card bg-2">
                            <h3 className='title'>Tərəvəzlər</h3>
                            <img src={designVgtbl} className='design-1' alt="design" />
                            <img src={designBg_2} className='design-2' alt="design" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="slide-card bg-3">
                            <h3 className='title'>Taxıl</h3>
                            <img src={designFloat} className='design-1' alt="design" />
                            <img src={designBg_1} className='design-2' alt="design" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BannerSwiper
