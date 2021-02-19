import React from 'react';
import Plansbox from './Plansbox';
const Plans = () => {
    return(
        <React.Fragment>
            <section className="section-plans">
                <div className="row">
                    <h2>Start eating healthy today</h2>
                </div>
                    <div className="row">
                        <Plansbox
                        packet="Premium"
                        price="399$" 
                        month="/ month"
                        mealPrice="That’s only 13.30$ per meal"
                        chkMeal="1 meal every day"
                        chkOrder="Order 24/7"
                        chkAccess="Access to newest creations"
                        chkDelivery="Free delivery"
                        signUp="Sign Up"
                        />
                    
                        <Plansbox
                        packet="Pro"
                        price="149$" 
                        month="/ month"
                        mealPrice="That’s only 14.90$ per meal"
                        chkMeal="1 meal days/month"
                        chkOrder="Order 24/7"
                        chkAccess="Access to newest creations"
                        chkDelivery="Free delivery"
                        signUp="Sign Up"
                        />

                        <Plansbox
                        packet="Starter"
                        price="19$" 
                        month="/ meal"
                        mealPrice="1 meal"
                        chkMeal="1 meal every day"
                        chkOrder="Order from 8 am to 12 pm"
                        chkAccess=" "
                        chkDelivery="Free delivery"
                        signUp="Sign Up"
                        />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Plans;