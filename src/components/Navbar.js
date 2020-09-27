import React, { Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Click en menu para desplegar sidenavbar
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

  return ( 
  <Fragment>
    <nav>
      <div className="nav-wrapper deep-purple darken-3">
        <div className="wrapper">
          <div className="container">
          <a href="#!" className="brand-logo">TECHowler</a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="badges.html">Programming</Link></li>
          <li><Link to="collapsible.html">Mobile</Link></li>
          <li><Link to="collapsible.html">Cybersecurity</Link></li>
        </ul>
          </div>
        </div>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>
  </Fragment>
  );
}
 
export default Navbar;