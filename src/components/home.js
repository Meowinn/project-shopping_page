import Header from "./header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div id="homeWrapper">
            <div id="header"></div>
            <Header
                homeLink={
                    <HashLink className="nav-item" smooth="true" to='#homeWrapper'>
                        <li className='nav-link active px-3'>Home</li>
                    </HashLink>
                }
                galleryLink={
                    <HashLink className="nav-item" to="#galleryWrapper" smooth="true">
                        <li className='nav-link px-3'>Gallery</li>
                    </HashLink>
                }
                shopLink={
                    <Link className="nav-item" smooth="true" to="/shop">
                        <li id="shopBtn" className='nav-link px-3'>Shop</li>
                    </Link>
                }
                aboutLink={
                    <HashLink className="nav-item" smooth="true" to='#lastGallery'>
                        <li className="nav-link ps-3">About</li>
                    </HashLink>
                }
            />

            <LandingComp />
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className="slideImgs" src={require("../imgs/abstract4.jpg")}></img>
                    </div>
                    <div class="carousel-item">
                        <img className="slideImgs" src={require("../imgs/abstract2.jpg")}></img>
                    </div>
                    <div class="carousel-item">
                        <img className="slideImgs" src={require("../imgs/abstract3.jpg")}></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Gallery />
            <AboutUs />
        </div>
    );
};

const LandingComp = () => {
    return (
        <div className="landingComp">
            <div className="w-50 landingText" >
                <h1 className="landingTitle fw-bold">Art of replication</h1>
                <p className="pt-3 pb-1 landingPara fs-4">Replica District elevates the practice of reproducing the works of history's greatest painters. We were born from a passion to share our love of classic paintings with art enthusiasts.</p>
                <div><Link smooth="true" to="/shop"><button className="btn btn-lg fw-bold" id="startBtn" type="button">Explore Now</button></Link></div>
            </div>
        </div>
    )
};

const Gallery = () => {
    return (
        <div id="galleryWrapper" >
            <h2 className=" galleryTitle pt-4">Latest Works</h2>

            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-transparent">
                            <img className="galleryPic" src={require("../imgs/art1.jpg")}></img>
                            <div>'Seaside peace'</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget luctus diam, ac interdum tellus.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-transparent">
                            <img className="galleryPic" src={require("../imgs/art2.jpg")}></img>
                            <div>'Blooming joy'</div>
                            <div>Nam ultricies, est vitae ullamcorper pellentesque, ligula eros aliquam eros.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-transparent">
                            <img className="galleryPic" src={require("../imgs/art3.jpg")}></img>
                            <div>'Autumn  by the bridge'</div>
                            <div>Curabitur nisi arcu, auctor in lectus ac, luctus dignissim augue. Cras quis erat a mauris cursus porttitor.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-transparent">
                            <img className="galleryPic" src={require("../imgs/art4.jpg")}></img>
                            <div>'Dark Redemption'</div>
                            <div>Ipsum blah dolor sit amet, consectetur adipiscing elit. Proin eget luctus diam, ac interdum tellus.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <img className="galleryPic" src={require("../imgs/art5.jpg")}></img>
                            <div>'Petals of tomorrow'</div>
                            <div> Phasellus congue quam sollicitudin. Ullamcorper pellentesque, ligula eros aliquam eros.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <img className="galleryPic" src={require("../imgs/art6.jpg")}></img>
                            <div>'Barn of nowhere'</div>
                            <div>Aliquam erat volutpat. Cras fermentum tempus tellus, vel maximus nulla consectetur et.</div>
                            <div id="lastGallery"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AboutUs = () => {
    return (
        <div id="aboutWrapper">
            <h2 className="about pt-5 pb-3 text-center fw-bold">About Us </h2>

            <div className="container aboutInfo">
                <div className="row align-items-center justify-content-start gx-3">
                    <div className="col-lg-6"><p className="fs-5">Founded in Manila, we create classic artworks that you love! All our artist's paints your favorite masterpieces by hand and delivers them to your home. These are artworks that definitely looks amazing in your home or office and is just a few clicks away.</p></div>
                    <div className="col-lg-6 text-center"><img className="w-50" id="aboutImg" src={require("../imgs/artSell.jpg")}></img></div>
                </div>
            </div>

            <div className="container-fluid banners">

                <ul className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div><FontAwesomeIcon icon={faPalette} className="fs-2" /></div>

                        <li>
                            <div className="pt-3 fw-bold fs-3 pb-2">1500+</div>
                            <div>Sold Paintings</div></li>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div><FontAwesomeIcon icon={faFaceSmile} className="fs-2" /></div>
                        <li>
                            <div className="pt-3 fw-bold fs-3 pb-2">1000+</div>
                            <div>Satisfied Collectors</div>
                        </li>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div><FontAwesomeIcon icon={faMedal} className="fs-2" /></div>
                        <li>
                            <div className="pt-3 fw-bold fs-3 pb-2">50+</div>
                            <div>Awards Won</div>
                        </li>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div><FontAwesomeIcon icon={faPeopleGroup} className="fs-2" /></div>
                        <li>
                            <div className="pt-3 fw-bold fs-3 pb-2">1000+</div>
                            <div>World-class Painters</div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Home;