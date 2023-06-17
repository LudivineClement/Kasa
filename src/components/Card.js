import React from 'react';
import { logementList } from '../datas/logementList';
import { NavLink } from 'react-router-dom';

const Card = () => {
    return (
        <main className='cards'>
            {logementList.map((logement) => (
                <div key={logement.id} className='card'>
                    <NavLink to={`/logement/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title} />
                        <p>{logement.title}</p>  
                    </NavLink>
                </div>
            ))}
        </main>
    );
};

export default Card;