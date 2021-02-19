import React from 'react';
import Testimonialsblock from './Testimonialsblock';

import authorImage1 from '../resources/img/customer-1.jpg';
import authorImage2 from '../resources/img/customer-2.jpg';
import authorImage3 from '../resources/img/customer-3.jpg';
const Testimonials = () => {
    return(
        <React.Fragment>
            <section class="section-testimonials">
                <div class="row">
                    <h2>Our customers can't live without us</h2>
                </div>
                <div class="row">
                    <div class="col span-1-of-3">
                        <Testimonialsblock 
                        customerImage={authorImage1}
                        author="Alberto Duncan"
                        quoteText="Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking,
                        so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!"
                        />
                    </div>
                    
                    <div class="col span-1-of-3">
                        <Testimonialsblock 
                        customerImage={authorImage2}
                        author="Joana Silva"
                        quoteText="Inexpensive, healthy and great-tasting meals, 
                        delivered right to my home. We have lots of food delivery here in Lisbon, 
                        but no one comes even close to Omifood. Me and my family are so in love!"
                        />
                    </div>
                    
                    <div class="col span-1-of-3">
                    
                        <Testimonialsblock 
                        customerImage={authorImage3}
                        author="Milton Chapman"
                        quoteText="I was looking for a quick and easy food delivery service in San Franciso. 
                        I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. 
                        Keep up the great work!"
                        />
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
}


export default Testimonials;