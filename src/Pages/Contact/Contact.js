import React from 'react';
import Footer from '../Home/Components/Footer/Footer';
import Header from '../Home/Components/Header/Header';

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container my-5">
                <div className="row">
                    <h1 className='text-center mb-5'>Contact Us</h1>
                    <div className="col-md-6 border p-4">
                        <form className="row g-3 px-lg-5">
                            <div className="col-md-6">
                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationDefault01" placeholder='Your firstname' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder='Your lastname' />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="validationDefault03" className="form-label">Email</label>
                                <input type="email" className="form-control" id="validationDefault03" placeholder='Enter your email' required />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="validationDefault05" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="validationDefault05" placeholder='Your subject of this message' required />
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Message</label>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Say something about us" id="floatingTextarea2"></textarea>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img className='img-fluid' src="https://i.ibb.co/gWR8790/undraw-contact-us-15o2.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;