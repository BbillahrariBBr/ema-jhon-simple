import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../ProductComponent/Product';
import './shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        console.log('product added',product);
        const newCart = [...cart,product];
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        handleAddProduct = {handleAddProduct}
                         product={product}>

                         </Product>)
                }


            </div>
            <div className="cart-container">
                <h3>this is cart{products.length}</h3>
                <h5>Order summary: {cart.length}</h5>

            </div>


        </div>
    );
};

export default Shop;