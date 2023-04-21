import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div id='header'>
      <nav className="navbar navbar-expand-lg navbar-dark" id="navContainer">
        <div className='brand fw-bold'><Link smooth="true" to="/">Replica District 🖌</Link> </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className='navbar-nav ms-auto'>
            {props.homeLink}
            {props.galleryLink}
            {props.shopLink}
            {props.aboutLink}
            {props.cart}
          </ul>
        </div>

      </nav>
    </div>
  )
};

export default Header;