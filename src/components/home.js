import React, {useState, useEffect} from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Home = () => {

    function alerter() {
        alert('shop clicked fucker')
    }

    useEffect(()=> {

        
    let slideIndex = 0;

    showSlides();

    function showSlides() {
        let i;
        let slides = document.querySelectorAll('.slideWrap');
        let dots = document.querySelectorAll('.dot');

        for(i =0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        slideIndex++;

        if(slideIndex > slides.length) {
            slideIndex = 1
        }

        for(i = 0; i< dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        
        let timeout = setTimeout(showSlides, 6000);

        document.querySelector('#shopBtn').addEventListener('click', function(){
            clearTimeout(timeout);
            console.log('clicked');
        });
    }

    },[])

    return(
        <div id="homeWrapper">
            <div id="header"></div>
            <Header 
            homeLink={
                <HashLink smooth="true" to='#homeWrapper'>
                    <li className='navList'>Home</li>
                </HashLink>
                } 
            galleryLink={
                <HashLink to="#dots" smooth="true">
                    <li className='navList'>Gallery</li>
                </HashLink>
                }
            shopLink={
                <Link smooth="true" to="/shop">
                    <li id="shopBtn" className='navList'>Shop</li>
                </Link>
            }
            aboutLink={
                <HashLink smooth="true" to='#lastGallery'>
                    <li className="navList">About</li>
                </HashLink>
            }
            />

            <div id="landingImgs">
            <LandingComp />
                <div className="slideWrap fade">
                    <img className="slideImgs" src={require("../imgs/abstract4.jpg")}></img>
                    </div>
            
                <div className="slideWrap fade">
                     <img className="slideImgs" src={require("../imgs/abstract2.jpg")}></img>
                </div>
               
                <div className="slideWrap fade">
                    <img className="slideImgs" src={require("../imgs/abstract3.jpg")}></img>
                </div>

            </div>

            <div id="dots" className="dots">
                <span className="dot"></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
            </div>
            <Gallery />
            <AboutUs />
        </div>
    );
};

const LandingComp = () => {
    return (
        <div id="landingText">
                    <div className="homeTitle">Art shop</div>
                    <div className="para"><p>We are professional artists with a huge passion and love for art, we will provide you your dream art for a spectacular price and awesome deals!</p> </div>
                    <div><button id="startBtn" type="button">Get Started</button></div>
                </div>
    )
};

const AboutUs = () => {
    return (
        <div id="aboutWrapper">
                <div className="about">About Us</div>
                <div className="aboutContainer">
                    <div className="aboutP">PinoyArt makes finding artworks that you love easy and fun! An Artwork that looks amazing in your home or office is just a few clicks away. Now after handling so many pieces, we have achieved a relative success. We are determined to expand our venture to more places.</div>
                    <div><img className="aboutImage" src={require("../imgs/artSell.jpg")}></img></div>
                </div>

                <div className="bannerWrapper">
                    <ul className="listBanner">
                        <div>
                            <div className="listLogo">🎴</div>
                            <li>
                                <div className="listLogo">1500+</div>
                                <div>Sold Paintings</div></li>
                        </div>
                        <div>
                            <div className="listLogo">🙂</div>
                            <li>
                                <div className="listLogo">1000+</div>
                                <div>Satisfied Collectors</div>
                                </li>
                        </div>

                        <div>
                            <div className="listLogo">🏅</div>
                            <li>
                                <div className="listLogo">50+</div>
                                <div>Awards Won</div>
                                </li>
                        </div>
                        <div>
                            <div className="listLogo">👥</div>
                            <li>
                                <div className="listLogo">1000+</div>
                                <div>World-class Painters</div>
                                </li>
                        </div>
                    </ul>
                </div>
            </div> 
    )
}

const Gallery = () => {
    return (
        <div id="galleryWrapper">
            <div className="galleryTitle">Latest Works</div>

            <div className="gallery">
                <div>
                    <img className="galleryPic" src={require("../imgs/art1.jpg")}></img>
                    <div className="piece">'Seaside peace'</div>
                    <div className="galleryP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget luctus diam, ac interdum tellus.</div>
                </div>

                <div>
                    <img className="galleryPic" src={require("../imgs/art2.jpg")}></img>
                    <div className="piece">'Blooming joy'</div>
                    <div className="galleryP">Nam ultricies, est vitae ullamcorper pellentesque, ligula eros aliquam eros.</div>
                </div>

                <div>
                    <img className="galleryPic" src={require("../imgs/art3.jpg")}></img>
                    <div className="piece">'Autumn  by the bridge'</div>
                    <div className="galleryP">Curabitur nisi arcu, auctor in lectus ac, luctus dignissim augue. Cras quis erat a mauris cursus porttitor.</div>
                </div>

            </div>

            <div className="gallery gallery2">
                <div>
                    <img className="galleryPic" src={require("../imgs/art4.jpg")}></img>
                    <div className="piece">'Dark Redemption'</div>
                    <div className="galleryP">Ipsum blah dolor sit amet, consectetur adipiscing elit. Proin eget luctus diam, ac interdum tellus.</div>
                </div>

                <div>
                    <img className="galleryPic" src={require("../imgs/art5.jpg")}></img>
                    <div className="piece">'Petals of tomorrow'</div>
                    <div className="galleryP"> Phasellus congue quam sollicitudin. Ullamcorper pellentesque, ligula eros aliquam eros.</div>
                </div>

                <div>
                    <img className="galleryPic" src={require("../imgs/art6.jpg")}></img>
                    <div className="piece">'Barn of nowhere'</div>
                    
                    <div className="galleryP">Aliquam erat volutpat. Cras fermentum tempus tellus, vel maximus nulla consectetur et.</div>

                    <div id="lastGallery"></div>
                </div>

                
            </div>

       
        </div>
    )
}

export default Home;