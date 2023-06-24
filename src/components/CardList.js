import React from 'react';
import { NavLink } from 'react-router-dom';
import housingData from '../datas/housingData.json';

const CardList = () => {
  return (
    <main className='card-list'>
      {housingData.map((logement) => (
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

export default CardList;