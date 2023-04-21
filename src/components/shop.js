import React, { useState, useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState([0])

    const [numOfCart, setNumOfCart] = useState(['Empty master']);

    useEffect(() => {
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

        // let itemNames = document.querySelectorAll('.itemListName');
        // for (let i = 0; i < itemNames.length; i++) {
        //     if (itemNames[i].innerText == title) {
        //         alert('Item already added!')
        //         return
        //     }
        // }

        document.querySelector('#emptyDiv').classList.add('hideSideBar');

        addItemToCart(title, price, imageSrc, priceValue);
        updateTotal();
        updateNumCart();
    };

    function addItemToCart(title, price, imageSrc, priceValue) {
        setCartList(
            cartList.concat({ title, price, imageSrc, priceValue })
        )
    };

    function setPrice(e) {
        let priceDiv = e.target.parentElement.previousElementSibling.previousElementSibling;
        let priceValue = Number(e.target.parentElement.previousElementSibling.innerText);
        let quantity = e.target.value;
        let subTotal = priceValue * quantity;

        if (e.target.value == 0) {
            e.target.parentElement.parentElement.remove();
        }

        else if (e.target.value > 99) {
            e.target.value = 99;
        }
        subTotal = Math.round(subTotal * 100) / 100;
        priceDiv.innerText = '$' + subTotal;
        updateTotal();
        updateNumCart();

        if (document.querySelector('#itemsWrapper').contains(document.querySelector('#cartList')) == false) {
            document.querySelector('#emptyDiv').classList.remove('hideSideBar');
            return
        }
    };

    function updateTotal() {
        let priceArray = [];
        let cartPrices = document.querySelectorAll('.listPrice');

        for (const cartPrice of cartPrices) {
            let priceNum = Number(cartPrice.innerText.replace('$', ''));

            priceArray.push(priceNum)
        }
        let total = priceArray.reduce((arr, current) => arr + current, 0);
        total = Math.round(total * 100) / 100;
        setCartTotal(
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
        let totalNumCart = Math.floor(numArray.reduce((accumulator, curr) => accumulator + curr, 0));

        setNumOfCart(
            totalNumCart
        )
    };

    function showSideBar() {
        let emptyDivClass = document.querySelector('#emptyDiv').classList;
        let barDivClass = document.querySelector('#sideBar').classList;

        if (document.querySelector('#itemsWrapper').contains(document.querySelector('#cartList')) == false) {
            emptyDivClass.remove('animate__fadeOutRight');
            emptyDivClass.remove('hideSideBar');
        } else {
            barDivClass.remove('hideSideBar');
            barDivClass.remove('animate__fadeOutRight');
        }
    };
    function hideSideBar() {
        document.querySelector('#sideBar').classList.add('animate__fadeOutRight');
    };

    return (
        <div id="shopWrapper">
            <Header homeLink=
                {<Link to="/"><li className='nav-link px-3'>Home</li></Link>}
                shopLink={
                    <Link smooth="true" to="/shop">
                        <li id="shopBtn" className='nav-link active px-3'>Shop</li>
                    </Link>
                }
                cart={<div id="cartLink" className="nav-link pe-3" onClick={showSideBar}> <span id="cartLogo"><FontAwesomeIcon icon={faCartShopping} /> {numOfCart}</span> </div>} />


            <div id="shopContainer" className="pt-5 ">
                <div className="container-fluid px-5">

                    <div className="row pb-5">
                        <div className="col-lg-6 col-md-12 shopImgWrapper text-end "><img className="shopImgs" src={require("../imgs/item1Sample.jpg")}></img></div>
                        <div id="shopInfoWrapper" className="col-lg-6 align-self-center fs-6 rightAligned">
                            <div className="itemTitle py-2 fs-4 fw-bold">Starry Night</div>
                            <div className="itemDescrip">High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.</div>
                            <div className="row pt-2">
                                <div className="itemPrice col-lg-3 align-self-center fs-5 fw-bold" data-value='89.99'>$89.99</div>
                                <button className="addCartBtn col-lg-3 py-2 btn btn-warning" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="row pb-5">
                        <div id="shopInfoWrapper" className="col-lg-6 align-self-center fs-6 text-end leftAligned">
                            <div className="itemTitle py-2 fs-4 fw-bold">Irises</div>
                            <div className="itemDescrip ">Irises is yet again, another painting by the Dutch artist Vincent van Gogh.</div>

                            <div className="row justify-content-end pt-2">
                                <div className="itemPrice col-lg-3 align-self-center fs-5 fw-bold" data-value='54.99'>$54.99</div>
                                <button className="addCartBtn col-lg-3 py-2 btn btn-warning" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                        <div className="col-lg-6"><img className="shopImgs" src={require("../imgs/item2Sample.jpg")}></img></div>
                    </div>

                    <div className="row pb-5">
                        <div className="col-lg-6 shopImgWrapper text-end"><img className="shopImgs" src={require("../imgs/item3Sample.jpg")}></img></div>
                        <div id="shopInfoWrapper" className="col-lg-6 align-self-center fs-6 rightAligned">
                            <div className="itemTitle py-2 fs-4 fw-bold">Rosy-Fingered Dawn at Louse Point</div>
                            <div className="itemDescrip">The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.</div>
                            <div className="row pt-2">
                                <div className="itemPrice col-lg-3 align-self-center fs-5 fw-bold" data-value='69.95'>$69.95</div>
                                <button className="addCartBtn col-lg-3 py-2 btn btn-warning" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="row pb-5">
                        <div id="shopInfoWrapper" className="col-lg-6 align-self-center fs-6 text-end leftAligned">
                            <div className="itemTitle py-2 fs-4 fw-bold">Branches with Almond Blossom</div>
                            <div className="itemDescrip">Branches with Almond Blossom is another van Gogh painted in 1890.</div>
                            <div className="row justify-content-end pt-2">
                                <div className="itemPrice col-lg-3 align-self-center fs-5 fw-bold" data-value='29.99'>$29.99</div>
                                <button className="addCartBtn col-lg-3 py-2 btn btn-warning" type="button" onClick={addToCart}> Add To Cart</button>
                            </div>
                        </div>
                        <div className="col-lg-6"><img className="shopImgs" src={require("../imgs/item4Sample.jpg")}></img></div>
                    </div>



                    <div className="endShop pb-5"></div>

                </div>

            </div>

            <div id="sideBar" className="animate__animated animate__fadeInRight hideSideBar">

                <div className="sideBarHeader row py-3 align-items-center">
                    <h5 className="cartTitle col fw-bold">YOUR CART</h5>
                    <button className="sideBtn col-2 btn btn-danger btn-sm" onClick={hideSideBar}>x</button>
                </div>

                <div className="cartRow row fs-6 fw-bold text-center">
                    <div className="col-md-4">Item</div>
                    <div className="col-md-4">Price</div>
                    <div className="col-md-4">Quantity</div>
                </div>

                <div id="itemsWrapper">
                    {cartList.map((item, key) =>
                        <div id="cartList" className="row align-items-center text-center py-2 fw-bold" key={key}>
                            <div className="itemTitle_name col-lg-4">
                                <div><img className="cartListImg" src={item.imageSrc}></img></div>
                                {item.title}</div>
                            <div className="listPrice col-lg-4 ">{item.price}</div>
                            <div id='priceValue'>{item.priceValue}</div>
                            <div className="col-lg-4"><input className="quantity" type='number' defaultValue="1" min="0" max="99" onChange={setPrice}></input></div>
                        </div>)}

                    <div className="totalWrapper">
                        <div className="total">Total: <span className="fs-5">${cartTotal}</span></div>
                    </div>
                    <div className="row"><button className="checkOutBtn col btn btn-warning btn-lg fs-5 fw-bold" onClick={checkOut}>Check Out </button></div>
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
            <div className="text-end"><button type="button" className="btn btn-danger" onClick={closeEmptyCart}>x</button></div>
            <div className="container-fluid pt-5">
                <div className="text-center py-3 fs-4 fw-bold">Your Cart is Empty!</div>
                <div className="text-center align-middle"><img className="w-75" src={require("../imgs/empty.png")}></img></div>
            </div>
        </div>
    )
}

export default Shop;

