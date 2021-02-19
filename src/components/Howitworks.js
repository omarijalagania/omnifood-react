import React from 'react';
import iphone from '../resources/img/app-iPhone.png';
import android from '../resources/img/download-app-android.png';
import ios from '../resources/img/download-app.svg';

const Howitworks = () => {
    return(
        <React.Fragment>
            <div class="clearfix"></div>
                <section class="section-steps">
                    <div class="row">
                        <h2>How it works - Simple as 1, 2, 3</h2>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-2 steps-box">
                            <img class="app-screen" src={iphone} alt="Iphone"/>
                        </div>
                        <div class="col span-1-of-2 steps-box">
                            <div class="works-step">
                                <div>1</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                            </div>
                            <div class="clearfix"></div>
                            <div class="works-step">
                                <div>2</div>
                                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                            </div>
                            <div class="clearfix"></div>
                            <div class="works-step">
                                <div>3</div>
                                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                            </div>
                            <div class="clearfix"></div>
                            <a class="btn-app" href="#"><img src={ios} alt="iphone app"/></a>
                            <a class="btn-app" href="#"><img src={android} alt="android app"/></a>
                        </div>
                    </div>
                </section>
        </React.Fragment>
    )
}


export default Howitworks;