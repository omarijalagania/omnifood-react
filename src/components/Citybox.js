import React from 'react';



const Citybox = ({cityImage, cityName, personOutline, starOutline, mailoutline }) => {
    return(
        <React.Fragment>
            <img src={cityImage} alt="Lisbon"/>
                                <h3>{cityName}</h3>
                                <div className="city-feature">
                                    <ion-icon name="person-outline" className="small-icon"></ion-icon>
                                    {personOutline}
                                </div>
                                <div className="city-feature">
                                    <ion-icon name="star-outline" className="small-icon"></ion-icon>
                                    {starOutline}
                                </div>
                                <div className="city-feature">
                                    <ion-icon name="mail-outline" className="small-icon"></ion-icon>
                                    {mailoutline}
                                </div>
        </React.Fragment>
    );
}


export default Citybox;