import React from 'react';
import { Link } from 'react-router-dom';
import VideoSample from '../img/videosample.mp4'

const Home = () => {
  return ( 
  <header className="header content">
    <div className="header-video">
      <video src={VideoSample} autoPlay={true} loop></video>
    </div>
    <div className="header-overlay"></div>
    <div className="header-content">
      <h1>TECHowler</h1>
      <p>Welcome to your TECHowler blogger website where you can discover a lot of useful contents written by technology lovers</p>
      <Link to="/dev" className="waves-effect waves-light btn-large deep-purple darken-3"><i className="material-icons right">read_more</i>Get Started</Link>
    </div>
  </header>
  );
}
 
export default Home;