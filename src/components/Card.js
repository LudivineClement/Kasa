import React from 'react';
import { logementList } from '../datas/logementList';

const Card = () => {
    return (
        <main className='cards'>
            {logementList.map((card) => (
                <div key={card.id} className='card'>
                    <img src={card.cover} alt="" />
                    <p>{card.title}</p>
                </div>
                
            ))}
        </main>
    );
};

export default Card;