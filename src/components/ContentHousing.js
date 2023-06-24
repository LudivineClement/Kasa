import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../datas/housingData.json';
import Carrousel from './Carrousel';
import Tags from './Tags';
import Host from './Host';
import Ratings from './Ratings';
import Collapse from '../components/Collapse';


const ContentHousing = () => {
  const { id } = useParams();
  const housingData = jsonData.find((el) => el.id === id);

  if (!housingData) {
    return <Navigate to="/Page404" />;
  }

  return (
    <main className='contentHousing'>
      <Carrousel housingData={housingData} />
      <div className="columns_housing">
        <div>
          <h1>{housingData.title}</h1>
          <p>{housingData.location}</p>
          <div className="tags">
            {housingData.tags.map((tag, index) => (
              <Tags key={index} content={tag} />
            ))}
          </div>
        </div>
        <div className='column2'>
          <Host hostData={housingData.host} />
          <Ratings rating={housingData.rating} />
        </div>
      </div>
      <div className="collapse_housing">
        <Collapse title="Description" content={housingData.description} />
        <Collapse title="Equipements" content={housingData.equipments} isColumn={true}/>
      </div>
    </main>
  );
};

export default ContentHousing;
