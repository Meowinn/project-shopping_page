import React, {useState} from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import { Link } from "react-router-dom";

const Shop = () => {

    const [cartArray, setCartArray] = useState([]);

    const [price, setPrice] = useState(10);

    
    // merge data-value and images to a single array then pass through the fn? -success-
    // if statement in add to cart for adding images? -success-
    function addToCart(event) {

        const cartDiv = [
            <div><img className="itemPic" src= {require("../imgs/item1Sample.jpg")}></img>{event.target.parentElement.getAttribute('data-value')}</div>,
            <div><img className="itemPic" src= {require("../imgs/item2Sample.jpg")}></img>{event.target.parentElement.getAttribute('data-value')}</div>
        ]

        // let itemValue = <div> {cartImg[0]} {event.target.parentElement.getAttribute('data-value')} </div>;
        let itemValue = "";

        if (event.target.parentElement.getAttribute('data-value') == "item 1 Value") {
            alert("item 1 matches")

            itemValue = cartDiv[0];
            
        }

        if (event.target.parentElement.getAttribute('data-value') == "item 2 Value") {
            alert("item 2 matches")

            itemValue = cartDiv[1];
        }
        
        let itemQuantity = Number(event.target.previousElementSibling.value);

        // console.log(itemQuantity);

        const repeat = (arrPass, numOfRepeat) => [].concat(...Array(numOfRepeat).fill(arrPass))

        let result = repeat([itemValue], itemQuantity)

        // console.log(result)
            
        setCartArray (
            cartArray.concat(result)
        )
    };

    function showSideBar() {
        document.querySelector('#sideBar').classList.remove('hideSideBar');

    };

    function hideSideBar() {
        document.querySelector('#sideBar').classList.add('hideSideBar');
    };

    function setPriceF() {
        setPrice (
            Number(document.querySelector('#input1').value)*10,
        )

        
    }

    // console.log(cartArray);

    console.log(price)
    return(
        <div id="shopWrapper">
            <Header homeLink = 
            {<Link to="/"><li className='navList'>Home</li></Link>}
            shopLink={
                <Link smooth="true" to="/shop">
                    <li id="shopBtn" className='navList'>Shop</li>
                </Link>
            }
            cart = {<div id="cartLink" onClick={showSideBar}>Cart: {cartArray.length}</div>}
            />

            <div className="shopHead">I'm from the shop page foo!</div>
            <br/>

            <div >
                <div className="item1" data-value= "item 1 Value"><div>Item 1</div> <div>price: ${price}</div> <input id="input1" type="number" defaultValue="1" min="1" max="99" onChange={setPriceF}></input><button type="button" onClick={addToCart}>Add to Cart</button></div>
                
            </div>
            <br/>
            <div >
                <div data-value="item 2 Value">Item 2 <input id="input2"  defaultValue="1" type="number" min="1" max="99"></input> <button type="button" onClick={addToCart}>Add to Cart2</button></div>

            </div>
            
            <div id="sideBar" className="hideSideBar">
                <div className="sideBarHeader">
                    <div>Sidebar</div>
                    <div><button type="button" className="sideBtn" onClick={hideSideBar}>X</button></div>
                </div>

                <div id="cartPageList">
                    <ul>
                    {cartArray.map((item, index) => <li key={index}> {item}</li>)}
                
                    </ul>
                </div>

            </div>
        
        </div>
    )
};

// separate item/array in cart link?
export default Shop;