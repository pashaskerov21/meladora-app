import React from 'react'
import SectionTitle from '../title/SectionTitle'
import { gardenArr } from './GardenContent'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function GardenHomeSection() {

    return (
        <section className="garden home">
            <div className="container">
                <SectionTitle title='Bağlarımız' />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}
                >
                    {
                        gardenArr.map(garden => (
                            <SwiperSlide key={garden.id}>
                                <Link to='/gardens'>
                                    <div className="garden-card">
                                        <div className='number'>
                                            <span>{garden.id}</span>
                                        </div>
                                        <h1 className='title'>{garden.title}</h1>
                                        <div className="text">
                                            <p>
                                                {garden.text.length > 220 ? garden.text.substring(0, 220) + '...' : garden.text}
                                            </p>
                                        </div>
                                        <div className='garden-img'>
                                            <img src={garden.image} alt="garden" />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default GardenHomeSection
