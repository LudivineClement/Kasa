import React, { useState } from 'react';
import iconCollapse from '../assets/arrow_collapse.png';

function Collapse({ title, content, isColumn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState('');

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIconRotation(isOpen ? 'reverse' : 'rotate')
  };

  return (
    <div className="collapse">
      <div className="collapse_header">
        <h2>{title}</h2>
        <button className={`icon_collapse ${iconRotation}`} onClick={toggleCollapse}>
          <img src={iconCollapse} alt="Icône flèche de l'accordéon" />
        </button>
      </div>
      {isOpen &&
        <div className={`collapse_content ${isOpen ? 'open' : 'close'} ${isColumn ? 'column_equipment' : ''}`}>
          {isColumn ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      }
    </div>
  );
}

export default Collapse;
