import React ,{useEffect}from 'react';
// Components
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';

import Panel from '../img/dev-panel.jpg';

import M from 'materialize-css/dist/js/materialize.min.js';
const Programming = () => {

  useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }, []);
  return (
  <>
    <Navbar />
    <div className="parallax-container">
      <div className="parallax">
        <img src={Panel} alt="developers"></img>
        <div className="container center">
        <span>Discover and read some articles for developers</span>
        </div>
      </div>
    </div>

    <Cards />
  </>
  );
}
 
export default Programming;