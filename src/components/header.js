import React from "react";

const Header = (props) => {
    return (
        <div id='header'>
        <div className='shopName'>Replica District 🖌</div>
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