import React from 'react';


const Footer = () => {
    return(
        <React.Fragment>
            <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">iOS App</a></li>
                            <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-icons">
                            <li><a href="#"><ion-icon name="logo-facebook" className="small-icon"></ion-icon></a> </li>
                            <li><a href="#"><ion-icon name="logo-twitter" className="small-icon"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-google" className="small-icon"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-instagram" className="small-icon"></ion-icon></a></li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <p>
                        Copyright &copy; 2020 by Omnifood. All rights reserved.
                    </p>
                </div>
            </div>
        </footer> 
        </React.Fragment>
    );
}

export default Footer;