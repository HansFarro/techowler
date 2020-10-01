import React from 'react';

import Sample from '../img/sample-1.jpg';
const Card = ({title, description, image}) => {
  return ( 
  <div className="col s12 m6 l6 xl4">
    <div className="card medium">
      <div className="card-image">
        <img src={image.src} alt={image.alt}></img>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action center">
        <a className="waves-effect deep-purple darken-3 btn" href="#!">Link to Blog</a>
      </div>
    </div>
  </div>
   );
}
 
export default Card;