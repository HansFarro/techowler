import React, { Fragment , useEffect} from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';


const Navbar = () => {
  // Click en menu para desplegar sidenavbar
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {
      closeOnClick: true,
      draggable: true,
      menuWidth: 300,
      edge: 'left',
    });
  }, []);

  return ( 
  <Fragment>
    <div className="sidenav-fixed">
    <nav>
      <div className="nav-wrapper deep-purple darken-3">
        <div className="wrapper">
          <div className="container">
          <Link to="/" className="brand-logo">TECHowler</Link>
          <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/dev">Programming</Link></li>
            <li><Link to="/mobile">Mobile</Link></li>
            <li><Link to="/cyber">Cybersecurity</Link></li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
    <ul className="sidenav" id="slide-out">
      <li><Link to="/dev">Programming</Link></li>
      <li><Link to="/mobile">Mobile</Link></li>
      <li><Link to="/cyber">Cybersecurity</Link></li>
    </ul>
  </Fragment>
  );
}
 
export default Navbar;