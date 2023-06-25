import React from 'react';

const Ratings = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'fa-solid fa-star' : 'fa-solid fa-star star-inactive';
    stars.push(<i key={i} className={starClass}></i>);
  }

  return <div className="rating">{stars}</div>;
};

export default Ratings;