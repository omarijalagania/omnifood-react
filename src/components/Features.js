import React from 'react';
import Featuredbox from './Featuredbox';



const Features = ({title, text}) => {
    
    
        return(
        <React.Fragment>
            <section className="section-features js--section-features">
                <div className="row js--wp-1 animate__animated animate__fadeIn">
                    <div className="row">
                        <h2>Get food fast &mdash; not fast food.</h2>
                        <p className="long-copy">Hello, we’re Omnifood, 
                            your new premium food delivery service. 
                            We know you’re always busy. No time for cooking. 
                            So let us take care of that, we’re really good at it, we promise!</p>
                    </div>
                    
                    <div className="row">
                        <Featuredbox title="READY IN 20 MINUTES" text="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy." />
                        <Featuredbox title="UP TO 365 DAYS/YEAR" text="Never cook again! We really mean that.Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style." />                        
                        <Featuredbox title="100% ORGANIC" text="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!" />
                        <Featuredbox title="ORDER ANYTHING" text="We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!" />
                    </div>
                </div>
            </section>
        </React.Fragment>
        );
}


export default Features;