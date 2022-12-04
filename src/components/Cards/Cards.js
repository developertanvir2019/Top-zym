import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import css from './Cards.css'

const Cards = () => {
    const [cardInfo, setCardInfo] = useState([]);
    const [TotalTime, setTotalTime] = useState(0);
    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setCardInfo(data))
    }, []);

    const handleAdTime = (cardInfo) => {
        let cardTimee = TotalTime + cardInfo.time;

        setTotalTime(cardTimee)
    }
    return (
        <div>
            <h2 className='py-4'>Select today’s exercise</h2>
            <div className='card-container'>
                <div className="work-container">
                    {
                        cardInfo.map(single => <Card key={single.img} card={single} handleAdTime={handleAdTime} ></Card>)
                    }
                </div>
                <div className="information-container">
                    <Sidebar total={TotalTime}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Cards;