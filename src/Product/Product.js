import React from 'react';
import {addToCart, remove } from '../Database/Database';
import "./Product.css"

const Product = (props) => {
    const {name, id, price} =  props.product;
    return (
            <div className='product'>
                <h2>Name: {name} </h2>
                <strong>ProductId: {id} </strong>
                <p>Price: {price} </p>
            <button onClick={() => addToCart(name)} >Add To Cart</button>
            <button onClick={() => remove(name)} >Remove</button>
            </div>
    );
};

export default Product;