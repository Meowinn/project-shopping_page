import React from "react";

const Header = (props) => {
    return (
        <div id='header'>
        <div className='shopName'>Pinoy Art 🖌</div>
        <nav>
          <ul className='navBar'>
            {props.homeLink}
            {props.galleryLink}
            {props.shopLink}
            {props.aboutLink} 
          </ul>
        </nav>
      </div>
    )
};

export default Header;