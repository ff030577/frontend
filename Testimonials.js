import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import images
import client1 from "../assets/images/client-1.jpg";
import client2 from "../assets/images/client-2.jpg";

const testimonialData = [
  {
      id: 1,
      name: "Jorch Morik",
      image: "/assets/images/client-1.jpg",
      review: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures to generate Lorem Ipsum.",
  },
  {
      id: 2,
      name: "Jorch Morik",
      image: "/assets/images/client-2.jpg",
      review: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures to generate Lorem Ipsum.",
  },
];

const Testimonials = () => {
  return (
      <section className="client_section layout_padding">
          <div className="container">
              <div className="heading_container">
                  <h2>What Our Clients Say</h2>
              </div>
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                  {testimonialData.map((client) => (
                      <div className="item" key={client.id}>
                          <div className="box">
                              <div className="img-box">
                                  <img src={client.image} alt={client.name} />
                              </div>
                              <div className="client_detail">
                                  <div className="client_info">
                                      <h6>{client.name}</h6>
                                      {[...Array(5)].map((_, index) => (
                                          <i className="fa fa-star" key={index} aria-hidden="true"></i>
                                      ))}
                                  </div>
                                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                              </div>
                          </div>
                          <div className="client_text">
                              <p>{client.review}</p>
                          </div>
                      </div>
                  ))}
              </OwlCarousel>
          </div>
      </section>
  );
};

export default Testimonials;
