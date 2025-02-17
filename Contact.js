import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="contact_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="d-flex">
                                        <button>SEND</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="map_container">
                                    <div className="map">
                                        <div id="googleMap" style={{ width: "100%", height: "100%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="info_section">
                    <div className="container">
                        <h4>Get In Touch</h4>
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="info_items">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a href="">
                                                <div className="item">
                                                    <div className="img-box">
                                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="">
                                                <div className="item">
                                                    <div className="img-box">
                                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                                    </div>
                                                    <p>+02 1234567890</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="">
                                                <div className="item">
                                                    <div className="img-box">
                                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                                    </div>
                                                    <p>demo@gmail.com</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-box">
                        <h4>Follow Us</h4>
                        <div className="box">
                            <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-youtube" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contact;
