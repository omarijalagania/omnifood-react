import React from 'react';
import Citybox from './Citybox';


import lisbonImage from '../resources/img/lisbon-3.jpg';
import londonImage from '../resources/img/london.jpg';
import sanFranciscoImage from '../resources/img/san-francisco.jpg';
import berlinImage from '../resources/img/berlin.jpg';
const Cities = () => {
    return (
        <React.Fragment>
                <section className="section-cities">
                        <div className="row">
                            <h2>We're currently in these cities</h2>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-4 box">
                                
                                <Citybox
                                cityImage={lisbonImage}
                                cityName="Lisbon"
                                personOutline="1600+ happy eaters"
                                starOutline="60+ top chefs"
                                mailoutline="@omnifood_lx"
                                />
                            </div>

                            <div className="col span-1-of-4 box">
                                
                                <Citybox
                                cityImage={sanFranciscoImage}
                                cityName="San Francisco"
                                personOutline="3700+ happy eaters"
                                starOutline="160+ top chefs"
                                mailoutline="@omnifood_sf"
                                />
                            </div>

                            <div className="col span-1-of-4 box">
                                
                                <Citybox
                                cityImage={berlinImage}
                                cityName="Berlin"
                                personOutline="2300+ happy eaters"
                                starOutline="110+ top chefs"
                                mailoutline="@omnifood_berlin"
                                />
                            </div>

                            <div className="col span-1-of-4 box">
                                
                                <Citybox
                                cityImage={londonImage}
                                cityName="London"
                                personOutline="1200+ happy eaters"
                                starOutline="50+ top chefs"
                                mailoutline="@omnifood_london"
                                />
                            </div>

                        </div>
                </section>
        </React.Fragment>
    );
}

export default Cities;