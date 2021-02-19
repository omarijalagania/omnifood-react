import React from 'react';



const Form = () => {
    return(
        <React.Fragment>
             <section className="section-form">
            <div className="row">
                <h2>We're happy to hear from you</h2>
            </div>
            <div className="row">
                <form action="#" method="POST" className="contact-form">
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label for="name">Name</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label for="email">Email</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="email" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label for="find-us">How did you find us?</label>
                        </div>
                        <div className="col span-2-of-3">
                            <select name="find-us" id="find-us">
                                <option value="friends">Friends</option>
                                <option value="search">Search Engine</option>
                                <option value="ad">Advertisment</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Newsletter</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="checkbox" name="checkbox" id="checkbox" checked required /> Yes, Please
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>Drop us a line</label>
                        </div>
                        <div className="col span-2-of-3">
                            <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div className="col span-2-of-3">
                            <input type="submit" value="Send It"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        </React.Fragment>
    );
}


export default Form;