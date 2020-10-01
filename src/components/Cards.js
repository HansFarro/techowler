import React from 'react';
import devDB from '../services/devDB';

import Card from './Card';
const Cards = () => {
  console.log(devDB);
  return ( 
        <div className="container">
          <div className="row">
            {devDB.map((card) => (
              <Card key={card.id} title={card.title} description={card.description} image={card.image}/>
              
            ))}
          </div>
        </div>
  );
}
 
export default Cards;