import React, { Children } from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/icons/logo.svg';
import logo from '../Assets/icons/logo.png';
import { ReactComponent as Facebook } from '../Assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../Assets/icons/twitter.svg';
import { ReactComponent as Linkesdin } from '../Assets/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../Assets/icons/instagram.svg';
import { ReactComponent as Youtube } from '../Assets/icons/youtube.svg';

function Index({children , title, page}) {

    const navLinks = [
        { title: "Home", to: "/" },
        { title: "AboutUs", to: "/aboutUs" },
        { title: "Features", to: "/features" },
        { title: "Pricing-plan", to: "/pricing-plan" },
        { title: "Contact us", to: "/contact-us" },
    ];

    return (
        <>
            <div className='row w-100 navbar m-0 p-0 position-fixed'>
                <nav className='container-fluid nav-div d-flex align-items-center justify-content-between'>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <div>
                        <ul className='ul-links d-flex'>
                            {navLinks.map((item, index) => {
                                return (
                                    <li key={item.title}>
                                        <Link to={item.to}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='request-btn'>
                        <button>Request Demo</button>
                    </div>
                </nav>
            </div>





            <main> {children} </main>





            <footer>
                <div className='continer-fluid footer-container'>
                    <div className='footer-div'>
                        <div className='logo-div'>
                            <img src={logo} alt="footer-logo" />
                            <p>This is the best digital tool for all business which you can operate online it covers industries like construction. retail store
                                and gives you ease to get all the records in one place without worrying about. </p>
                        </div>
                        <div className='quick-links'>
                            <h6>Quick Links</h6>
                            <ul className='p-0'>
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">About Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Our Services</Link>
                                </li>
                                <li>
                                    <Link to="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Pricing Plane</Link>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h6>Contact information</h6>
                            <ul>
                                <li>
                                    <Link to="#">JMM texhnologyes Mubashit plaza</Link>
                                </li>

                                <li>
                                    <Link to="#">0900-7801</Link>
                                </li>

                                <li>
                                    <Link to="#">www.jmmtechnologies.ltd</Link>
                                </li>
                                <h6>Follow Us</h6>
                                <div>
                                    <ul className='d-flex gap-3'>
                                        <li>
                                            <Facebook />
                                        </li>

                                        <li>
                                            <Twitter />
                                        </li>

                                        <li>
                                            <Linkesdin />
                                        </li>

                                        <li>
                                            <Instagram />
                                        </li>

                                        <li>
                                            <Youtube />
                                        </li>
                                    </ul>
                                </div>

                            </ul>
                        </div>


                    </div>
                </div>

                <div className='copy-right'>
                    <div className='d-flex footer-dev'>
                        <p>Copyright Prism 2021. All Rights Reserved.</p>
                        <div className='d-flex gap-3'>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Index
