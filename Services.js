import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import service images correctly
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';

const Service = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="service_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={s1} alt="Maintenance" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Maintenance</h5>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal appearance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={s2} alt="Electrical" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Electrical</h5>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal appearance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={s3} alt="Plumbing" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Plumbing</h5>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal appearance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a href="">View More</a>
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

export default Service;

