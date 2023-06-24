import React from 'react';

const Host = ({hostData}) => {
  return (
    <div>
      <div className='host'>
      <p >{hostData.name}</p>
      <img src={hostData.picture} alt={hostData.name} />
      </div>
      
    </div>
  );
};

export default Host;