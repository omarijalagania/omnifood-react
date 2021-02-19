import React from 'react';


const Plansbox = ({ packet, price, month, mealPrice, chkMeal, chkOrder, chkAccess, chkDelivery, signUp }) => {
    return(
        <React.Fragment>
                
                    <div className="col span-1-of-3 js--wp-3">
                        <div className="plan-box">
                            <div>
                                <h3>{packet}</h3>
                                <p className="plan-price">{price} <span>{month}</span></p>
                                <p className="plan-price-meal">{mealPrice}</p>
                            </div>
                            <div>
                                <ul>
                                    <li><ion-icon name="checkmark-outline" className="small-icon"></ion-icon>{chkMeal}</li>
                                    <li><ion-icon name="checkmark-outline" className="small-icon"></ion-icon>{chkOrder}</li>
                                    <li><ion-icon name="checkmark-outline" className="small-icon"></ion-icon>{chkAccess}</li>
                                    <li><ion-icon name="checkmark-outline" className="small-icon"></ion-icon>{chkDelivery}</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#" className="btn btn-full">{signUp}</a>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    );
}

export default Plansbox;