import React from 'react';
import './Product.css'

const Product = (props) => {

    const {product, handleAddToCart} = props;
    const { name, price, img, seller, ratings} = product;

    
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <h3 className='product-title'>{name}</h3> 
            <div className="product-info">
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button className='button' onClick={() => handleAddToCart(product)}><p>Add To Cart</p></button>
            
        </div>
    );
};

export default Product;