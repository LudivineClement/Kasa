import React from 'react';

const Ratings = ({ rating }) => {
  const starActiveClass = 'fa-solid fa-star';
  const starInactiveClass = 'fa-solid fa-star star-inactive';

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? starActiveClass : starInactiveClass;
    stars.push(<i key={i} className={starClass}></i>);
  }

  return <div className="rating">{stars}</div>;
};

export default Ratings;