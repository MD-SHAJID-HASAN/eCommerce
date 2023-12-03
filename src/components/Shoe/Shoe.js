import React from 'react';
import './Shoe.css'

const Shoe = ({shoe}) => {

    const {name, id, seller, category,img, price, ratings } = shoe;
    return (
        <div className='shoe'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Rating: {ratings} stars</h4>
            <h4>Price: ${price}</h4>
            <h4>Manufacturer: {seller}</h4>

        </div>
    );
};

export default Shoe;