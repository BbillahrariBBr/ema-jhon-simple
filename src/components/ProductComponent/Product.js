import React from 'react';
import './Product.css'
import { FaShoppingCart } from "react-icons/fa";


const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product
    return (
        <div className='product' >
            <div>
                <img src={img} alt="" />

            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller} </small></p>
                <p>$ {price}</p>
                <p>only {stock} left in stock. Order soon.</p>
                <button className="main-button" onClick = {() => props.handleAddProduct(props.product)}>
                    <FaShoppingCart/> add to cart</button>

            </div>


        </div>
    );
};

export default Product;