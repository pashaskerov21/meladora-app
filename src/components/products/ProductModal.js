import React from 'react'
import Modal from 'react-modal'
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

Modal.setAppElement('#root');

function ProductModal({ modalIsOpen, closeModal, selectedProduct }) {
    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='product-modal' overlayClassName='product-modal-overlay'>
                <div className="inner">
                    <div className="modal-header">
                        <h1 className='product-title'>{selectedProduct && selectedProduct.name}</h1>
                        <button onClick={closeModal} className='close-button'><i className='fa-solid fa-xmark'></i></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div className="product-image">
                                    <img src={selectedProduct && selectedProduct.cardImage} alt="product" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="content">
                                    <div className='price'>
                                        <span>{selectedProduct && selectedProduct.price.toFixed(2)}₼</span>
                                    </div>
                                    <div className='text'>
                                        <p>{selectedProduct && selectedProduct.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="product-gallery-swiper">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            992: {
                                                slidesPerView: 3,
                                            },
                                        }}
                                        navigation={true}
                                        modules={[Autoplay,Navigation]}
                                    >
                                        {
                                            selectedProduct && selectedProduct.productGallery.map((img, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className='gallery-img'>
                                                        <img src={img} alt='gallery-img' />
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProductModal
