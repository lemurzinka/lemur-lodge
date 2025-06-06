import React from "react";
import "../styles/About.css";
import Header from "./menu/Header";
import Footer from "./menu/Footer";

const About = () => {
  return (
    <section className="app">
      <header>
        <Header />
      </header>


      <div className="about-banner">
        <div className="about-text-overlay">
          <h1>Welcome to Lemur Lodge</h1>
          <p>Where comfort meets elegance in the heart of Ivano-Frankivsk.</p>
        </div>
      </div>


      <div className="about-container">
      
        <div className="about-section left-image">
          <img src="/lemur-lodge/images/about-history.jpg" alt="History of Lemur Lodge" className="about-image"/>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Established in 1899, Lemur Lodge evolved into a refined hospitality space. 
              Today, it blends historical elegance with modern comfort.
            </p>
          </div>
        </div>

     
        <div className="about-section right-image">
          <div className="about-text">
            <h2>What We Offer</h2>
            <p>
              Our facilities include luxury rooms, banquet halls, and conference spaces. 
              Experience the charm of historic architecture fused with modern amenities.
            </p>
          </div>
          <img src="/lemur-lodge/images/about-offer.jpg" alt="Services at Lemur Lodge" className="about-image"/>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
