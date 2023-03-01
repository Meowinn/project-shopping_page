import React, {useState, useEffect} from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import 'animate.css';

const Shop = () => {

    
    // const [cartAppend, setCartAppend] = useState(<NewCartRow />);

    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState([0])

    const [numOfCart, setNumOfCart] = useState(['Empty master']);
    
    useEffect(()=>{
        updateTotal();
        updateNumCart();
    });

    function addToCart(event) {
        
        let button = event.target;
        let shopItem = button.parentElement.parentElement.parentElement;

        let title = shopItem.getElementsByClassName('itemTitle')[0].innerText;
        let price = shopItem.getElementsByClassName('itemPrice')[0].innerText;
        let imageSrc = shopItem.getElementsByClassName('shopImgs')[0].src;
        let priceValue = shopItem.getElementsByClassName('itemPrice')[0].getAttribute('data-value');
        
        let itemNames = document.querySelectorAll('.itemListName');
        for( let i = 0; i < itemNames.length; i++) {
            if(itemNames[i].innerText == title) {
                alert('Item already added!')
                return
            }
        }

        document.querySelector('#emptyDiv').classList.add('hideSideBar');

        addItemToCart(title, price, imageSrc, priceValue);
        updateTotal();
        updateNumCart();
    };

    function addItemToCart(title, price, imageSrc, priceValue) {
        setCartList (
            cartList.concat({title, price, imageSrc, priceValue})
        )
    };

    function setPrice(e) {
        let priceDiv = e.target.parentElement.previousElementSibling.previousElementSibling;
        let priceValue = Number(e.target.parentElement.previousElementSibling.innerText);
        let quantity = e.target.value;

        if(e.target.value == 0) {
            e.target.parentElement.parentElement.remove();
        }

        else if (e.target.value > 99) {
            e.target.value = 99;
        }

        priceDiv.innerText = '$' + priceValue * quantity;
        updateTotal();
        updateNumCart();

        if(document.querySelector('#itemsWrapper').contains(document.querySelector('#cartList')) == false) {
            document.querySelector('#emptyDiv').classList.remove('hideSideBar');
            return
        }
    };

    function updateTotal(num) {
        let priceArray = [];
        let cartPrices = document.querySelectorAll('.listPrice');

        for (const cartPrice of cartPrices) {
            let priceNum = Number(cartPrice.innerText.replace('$', ''));
    
            priceArray.push(priceNum)

        }
        let total = priceArray.reduce((arr, current) => arr + current, 0);
        
        setCartTotal (
            total
        )
    };

    function checkOut() {
        alert('Items purchased!')
    }

    function updateNumCart() {
        let numArray = [];
        let cartQuantities = document.querySelectorAll('.quantity');

        for (const cartQuantity of cartQuantities) {
            let numQuantity = Number(cartQuantity.value);
            
            numArray.push(numQuantity);
        }
        let totalNumCart = numArray.reduce((accumulator, curr) => accumulator + curr, 0);

        setNumOfCart (
            totalNumCart
        )
    };

    function showSideBar() {
        let emptyDivClass = document.querySelector('#emptyDiv').classList;
        let barDivClass = document.querySelector('#sideBar').classList;
        if (document.querySelector('#itemsWrapper').contains(document.querySelector('#cartList')) == false) {
            // alert('cart is empty');
            emptyDivClass.remove('animate__fadeOutRight');
            emptyDivClass.remove('hideSideBar');
        } else {
            barDivClass.remove('hideSideBar');
            barDivClass.remove('animate__fadeOutRight');
        }
    };
    function hideSideBar() {
        // document.querySelector('#sideBar').classList.add('hideSideBar');
        document.querySelector('#sideBar').classList.add('animate__fadeOutRight');
    };

    // console.log(cartList)

    return(
        <div id="shopWrapper">
          <Header homeLink = 
            {<Link to="/"><li className='navList'>Home</li></Link>}
            shopLink={
                <Link smooth="true" to="/shop">
                    <li id="shopBtn" className='navList'>Shop</li>
                </Link>
            }
            cart = {<div id="cartLink" onClick={showSideBar}> <span id="cartLogo">🛒 {numOfCart}</span> </div>}/>

            <div id="shopContainer" className="shopHead">
                <div>
                    <div className="shopItems">
                        
                            <div><img className="shopImgs" src= {require("../imgs/item1Sample.jpg")}></img></div>
                        
                        <div id="shopInfoWrapper">
                            <div className="itemTitle">Starry Night</div>
                            <div className="itemDescrip">High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.</div>
                            <div className="bottomDescrip">
                                <div className="itemPrice" data-value = '10' >$10</div>
                                <button className="addCartBtn sample" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="shopItems">

                        <div id="shopInfoWrapper">
                            <div className="itemTitle">Irises</div>
                            <div className="itemDescrip">Irises is yet again, another painting by the Dutch artist Vincent van Gogh.</div>
                            <div className="bottomDescrip">
                                <div className="itemPrice" data-value = '25'>$25</div>
                                <button className="addCartBtn" type="button" onClick={addToCart}> Add To Cart</button>
                        </div>
                        </div>
                        <div><img className="shopImgs" src= {require("../imgs/item2Sample.jpg")}></img></div>
                    </div>

                    <div className="shopItems">
                    
                        <div><img className="shopImgs" src= {require("../imgs/item3Sample.jpg")}></img></div>
                        
                        <div id="shopInfoWrapper">
                            <div className="itemTitle">Rosy-Fingered Dawn at Louse Point</div>
                            <div className="itemDescrip">The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.</div>
                            <div className="bottomDescrip">
                                <div className="itemPrice" data-value = '30'>$30</div>
                                <button className="addCartBtn" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="shopItems">

                        <div id="shopInfoWrapper">
                            <div className="itemTitle">Branches with Almond Blossom</div>
                            <div className="itemDescrip">Branches with Almond Blossom is another van Gogh painted in 1890.</div>
                            <div className="bottomDescrip">
                                <div className="itemPrice" data-value = '50'>$50</div>
                                <button className="addCartBtn" type="button" onClick={addToCart}> Add To Cart</button>
                        </div>
                        </div>
                        <div><img className="shopImgs" src= {require("../imgs/item4Sample.jpg")}></img></div>
                    </div>

            
                    <div className="endShop"></div>
                </div>


            </div>

            <div id="sideBar" className="animate__animated animate__fadeInRight hideSideBar">
                    <div className="sideBarHeader">
                        <div className="cartTitle">YOUR CART</div>
                        <button className="sideBtn" onClick={hideSideBar}>X</button>
                        </div>
                    
                    <div className="cartRow">
                        <div>Item</div>
                        <div>Price</div>
                        <div>Quantity</div>
                    </div>

                <div id="itemsWrapper">
                    {cartList.map((item, key) => 
                    <div id="cartList" key={key}>
                        <div className="itemListName"><div><img className="cartListImg" src={item.imageSrc}></img></div>{item.title}</div>
                        <div className="listPrice">{item.price}</div>
                        <div id="priceValue">{item.priceValue}</div>
                        <div><input className="quantity" type='number' defaultValue="1" min="0" max="99" onChange={setPrice}></input></div>
                    </div>)}

                    <div className="totalWrapper">
                        <div className="total">Total: <span className="totalPrice">${cartTotal}</span></div>
                    </div>

                    <div id='checkOut'><button className="checkOutBtn" onClick={checkOut}>Check Out </button></div>
                    </div>
                </div>

                <EmptyCart />
        </div>
    )
};

const EmptyCart = () => {

    const closeEmptyCart = () => {
        document.querySelector('#emptyDiv').classList.add('animate__fadeOutRight');
        document.querySelector('#sideBar').classList.add('hideSideBar');
    }

    return (
        <div id="emptyDiv" className="animate__animated animate__fadeInRight hideSideBar">
            <div className="emptyBtnWrapper"><button type="button" className="emptyBtn" onClick={closeEmptyCart}>X</button></div>
            <div className="emptyDivHeader">Your Cart is Empty!</div>
            <div id='emptyImgContainer'><img className="emptyImage" src={require("../imgs/empty.png")}></img></div>
        </div>
    )
}

export default Shop;

