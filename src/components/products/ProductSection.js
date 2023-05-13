import React, { useEffect, useState } from 'react'
import SectionTitle from '../title/SectionTitle'
import ProductCard from './ProductCard';
import { categories, products } from './ProductArray'
import ProductModal from './ProductModal';

function ProductSection() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    //let allProducts = Object.values(products).flat();
    const [productObj, setProductObj] = useState(Object.values(products).flat());

    function handleClick(category) {
        setActiveCategory(category);
    }

    useEffect(() => {
        if (activeCategory === categories[0]) {
            setProductObj(Object.values(products).flat())
        } else {
            setProductObj(products[activeCategory])
        }
    }, [activeCategory])


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    function openModal(product){
        setModalIsOpen(true)
        setSelectedProduct(product)
    }
    let closeModal = () => {
        setModalIsOpen(false)
    }
    return (
        <section className="products">
            <div className="container">
                <SectionTitle title='Məhsullarımız' />
                <div className="product-buttons">
                    <div className="inner">
                        {
                            categories.map((category, index) => (
                                <button key={index} onClick={() => handleClick(category)} className={activeCategory === category ? 'active' : ''} >{category}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="row product-row">
                    {
                        productObj.map(product => (
                            <div key={product.id} onClick={() => {openModal(product)}} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <ProductCard  product={product} />
                            </div>
                        ))
                    }
                </div>
                <ProductModal modalIsOpen={modalIsOpen} closeModal={closeModal} selectedProduct={selectedProduct} />
            </div>
        </section>
    )
}

export default ProductSection
