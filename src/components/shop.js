import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import { Link } from "react-router-dom";

const Shop = () => {
    return(
        <div>
            <Header homeLink = 
            {<Link to="/"><li className='navList'>Home</li></Link>}
            />
            <div className="shopWrapper">I'm from the shop page fool!</div>
            <div>aaaaaaaa</div>
        </div>
    )
};

export default Shop;