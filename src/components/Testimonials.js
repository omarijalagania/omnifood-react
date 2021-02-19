import React from 'react';
import Testimonialsblock from './Testimonialsblock';


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
                        customerImage=""
                        author=""
                        quoteText=""
                        />
                    </div>
                    
                    <div class="col span-1-of-3">
                        <blockquote>
                            Inexpensive, healthy and great-tasting meals, 
                            delivered right to my home. We have lots of food delivery here in Lisbon, 
                            but no one comes even close to Omifood. Me and my family are so in love!
                            <cite><img src="resources/img/customer-2.jpg" alt="Joana Silva"/>Joana Silva</cite>
                        </blockquote>
                    </div>
                    
                    <div class="col span-1-of-3">
                        <blockquote>
                            I was looking for a quick and easy food delivery service in San Franciso. 
                            I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. 
                            Keep up the great work!
                            <cite><img src="resources/img/customer-3.jpg" alt="Milton Chapman"/>Milton Chapman</cite>
                        </blockquote>
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
}


export default Testimonials;