import React from 'react';
import img from '../resources/img/1.jpg';
import img2 from '../resources/img/2.jpg';
import img3 from '../resources/img/3.jpg';
import img4 from '../resources/img/4.jpg';
import img5 from '../resources/img/5.jpg';
import img6 from '../resources/img/6.jpg';
import img7 from '../resources/img/7.jpg';
import img8 from '../resources/img/3.jpg';


const Meals = () => {


    return(
        <React.Fragment>

            <section className="section-meals">
                <ul className="meals-showcase">
                    <li>
                        <figure className="meal-photo">
                            <img src={img} alt="1" />
                        </figure>
                    </li>
                    <li>
                    <figure className="meal-photo">
                        <img src={img2} alt="2"/>
                    </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src={img3} alt="3"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src={img4} alt="4"/>
                        </figure>
                    </li>
                </ul>
                <ul className="meals-showcase"> 
                    <li>
                        <figure className="meal-photo">
                            <img src={img5} alt="5"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src={img6} alt="6"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src={img7} alt="7"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="meal-photo">
                            <img src={img8} alt="8"/>
                        </figure>
                    </li>
                </ul>
            </section>

            </React.Fragment>
    );
}


export default Meals;