import React from 'react';

import Sample from '../img/sample-1.jpg';
const Card = () => {
  return ( 
  <div class="col s12 m6 l6 xl4">
    <div className="card medium">
      <div class="card-image">
        <img src={Sample}></img>
        <span class="card-title">Hola</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action center">
        <a href="#">Link to Blog</a>
      </div>
    </div>
  </div>
   );
}
 
export default Card;