import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div id='header'>
        <div className='shopName'><Link smooth="true" to="/">Replica District 🖌</Link> </div>
        <nav>
          <ul className='navBar'>
            {props.homeLink}
            {props.galleryLink}
            {props.shopLink}
            {props.aboutLink}
            {props.cart} 
          </ul>
        </nav>
      </div>
    )
};

export default Header;