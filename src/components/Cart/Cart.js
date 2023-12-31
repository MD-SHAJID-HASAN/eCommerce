import React from 'react';
import './Cart.css'
import Product from '../Product/Product';

const Cart = ({cart, clearCart}) => {
    
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;


    for (const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }

    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = (total + shipping + tax).toFixed(2);


    return (
        <div className='cart'>
            <h3 className='order-summary'>Order Summary</h3>
            <div className="cart-info">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: $ {grandTotal}</h4>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;