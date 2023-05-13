import React from 'react'
import SectionTitle from '../title/SectionTitle'
import image_1 from '../../image/garden/g1-img.png'
import image_2 from '../../image/garden/g2-img.png'
import image_3 from '../../image/garden/g3-img.png'
import image_4 from '../../image/garden/g4-img.png'
import image_5 from '../../image/garden/g5-img.png'
import image_6 from '../../image/garden/g6-img.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const blogArr = [
    {
        id: 1,
        image: image_1,
        title: 'Blog Header 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
    {
        id: 2,
        image: image_2,
        title: 'Blog Header 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
    {
        id: 3,
        image: image_3,
        title: 'Blog Header 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
    {
        id: 4,
        image: image_4,
        title: 'Blog Header 4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
    {
        id: 5,
        image: image_5,
        title: 'Blog Header 5',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
    {
        id: 6,
        image: image_6,
        title: 'Blog Header 6',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum ullam exercitationem nobis maiores nesciunt accusantium aliquid, vitae earum aut, officia iusto quae temporibus vel placeat facere eum a autem.'
    },
]

function BlogSection() {
    return (
        <section className="blogs">
            <div className="container">
                <SectionTitle title='Bloglar' />
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
                    modules={[Pagination]}>
                    {
                        blogArr.map(blog => (
                            <SwiperSlide key={blog.id}>
                                <div className="blog-card">
                                    <div className="image">
                                        <img src={blog.image} alt="blog" />
                                    </div>
                                    <h2 className="title">{blog.title}</h2>
                                    <div className="text">
                                        <p>{blog.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default BlogSection
