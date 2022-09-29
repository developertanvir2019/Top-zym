import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import css from './Cards.css'

const Cards = () => {
    const [cardInfo, setCardInfo] = useState([]);
    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setCardInfo(data))
    }, []);

    return (
        <div className='card-container'>
            {
                cardInfo.map(single => <Card key={single.img} card={single}></Card>)
            }
        </div>
    );
};

export default Cards;