import React from 'react'
import leafIcon from '../../image/logo/leaf-icon.svg'

function ProductCard({product}) {
    return (
        <div className="product-card">
            <img src={leafIcon} className='hover-icon' alt="icon" />
            <div className="product-img">
                <img src={product.cardImage} alt="img" />
            </div>
            <h3 className='title'>{product.name}</h3>
            <span className='price'>{product.price.toFixed(2)}₼</span>
        </div>
    )
}

export default ProductCard
