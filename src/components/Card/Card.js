import React from 'react';
import { useState } from 'react';
import card from './Card.css'

const Card = (props) => {
    // const [timeAdd, setTime] = useState('wejhjks');

    const { name, Details, age, time, img } = props.card;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-info px-2">
                <h3>{name}</h3>
                <p className='text-muted'><small>{Details}</small></p>
                <p>for age : {age}</p>
                <p>Time required : {time} minute</p>
            </div>
            <button onClick={() => props.handleAdTime(props.card)} className='btn-cart py-2 w-100'>
                Add to list
            </button>
        </div>
    );
};

export default Card;