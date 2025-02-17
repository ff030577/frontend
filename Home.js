import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials'; 

// Import images
import sliderImg from '../assets/images/slider-img.png';
import aboutImg from '../assets/images/about-img.jpg';
import service1 from '../assets/images/s1.png';
import service2 from '../assets/images/s2.png';
import service3 from '../assets/images/s3.png';

const Home = () => {
    console.log("✅ Home component is rendering");

    return (
        <>
            <Navbar />
            <main>
                <div className="hero_area">
                    <section className="slider_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>Repair and <br /> Maintenance <br /> Services</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. 
                                            Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic 
                                            praesentium mollitia consequatur beatae, aspernatur culpa.
                                        </p>
                                        <a href="#">Contact Us</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={sliderImg} alt="Hero Banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="about_section layout_padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="detail-box">
                                    <h2>About us</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some form, by injected humour, or randomised.
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="img-box">
                                    <img src={aboutImg} alt="About Us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>Our Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={service1} alt="Maintenance" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Maintenance</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={service2} alt="Electrical" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Electrical</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mx-auto">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={service3} alt="Plumbing" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Plumbing</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a href="#">View More</a>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <Testimonials /> 

            </main>
            <Footer />
        </>
    );
}

export default Home;

