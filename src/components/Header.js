import React from 'react';
import logo from '../resources/img/logo.png';
import logowhite from '../resources/img/logo-white.png';

const Header = () => {

    return(
        <React.Fragment>

            <header>
                <nav>
                    <div className="row">
                        <a href="/omnifood"><img className="logo" src={logowhite} alt="Omnifood Logo" /></a>
                        <a href="/omnifood"><img className="logo-black" src={logo} alt="Omnifood Logo" /></a>
                        <ul className="main-nav">
                            <li><a className="js--nav-food-delivery" href="#">Food delivery</a></li>
                            <li><a className="js--nav-how-it-works" href="#">How it works</a></li> 
                            <li><a className="js--nav-our-cities" href="#">Our Cities</a></li>
                            <li><a className="js--nav-sign-up" href="#">Sign Up</a></li>
                        </ul>
                        <a className="mobile-nav-icon js--nav--icon"><i className="icon ion-md-menu"></i> </a>
                    </div>
                </nav> 
                <div className="hero-text-box">
                    <h1>Goodbye junk food. Hello super healthy meals.</h1>
                    <a className="btn btn-full js--scroll-to-plan" href="#">I’m hungry</a>
                    <a className="btn btn-ghost js--scroll-to-start" href="#">Show me more</a>
                </div>
            </header>

        </React.Fragment>
    );
}

export default Header;