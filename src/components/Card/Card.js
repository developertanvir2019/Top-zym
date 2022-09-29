import React from 'react';
import card from './Card.css'

const Card = (props) => {
    const { name, Details, age, time, img } = props.card;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className='text-muted'><small>{Details}</small></p>
                <p>for age : {age}</p>
                <p>Time required : {time} minute</p>
            </div>
            <button onClick={() => props.handleAdCart(props.product)} className='btn-cart'>
                <p>add to list</p>
            </button>
        </div>
    );
};

export default Card;