import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../ProductComponent/Product';
import './shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products,setProducts] = useState(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map(product => <Product product = {product}></Product>)
                }
                

            </div>
            <div className="cart-container">
                <h3>this is cart{products.length}</h3>

            </div>
            
            
        </div>
    );
};

export default Shop;