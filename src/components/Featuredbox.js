import React from 'react';


const Featuredbox = ({ title, text }) => {
    return(  
            <div className="col span-1-of-4 box">
                <ion-icon name="infinite-outline" className="icon-big"></ion-icon>
                <h3> {title}</h3>
                <p>{text}</p>
            </div>
    );
}


export default Featuredbox;