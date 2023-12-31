import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const products = useLoaderData();

    const [cart, setCart] = useState([])

    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(()=>{
        
        const storedCart = getStoredCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)

            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                
            }
        } 
        
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct ) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    
    }

    return (
        <div className='shop'>
            <div className='products'>

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <div>
                    <Cart clearCart={clearCart} cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;