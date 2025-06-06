import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Header from "./menu/Header";
import Footer from "./menu/Footer";

const Home = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  setPosition({
    x: (centerX - clientX) * 0.03, 
    y: (centerY - clientY) * 0.03,
  });
};

  const [staffCount, setStaffCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const counterRef = useRef(null);

useEffect(() => {
  const counterElement = counterRef.current; 
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCounting(true);
      }
    },
    { threshold: 0.5 }
  );

  if (counterElement) {
    observer.observe(counterElement);
  }

  return () => {
    if (counterElement) {
      observer.unobserve(counterElement);
    }
  };
}, []);

useEffect(() => {
  if (startCounting) {
    let countStaff = 0, countVisitors = 0, countReviews = 0;

    const staffInterval = setInterval(() => {
      if (countStaff >= 50) return clearInterval(staffInterval);
      setStaffCount(++countStaff);
    }, 50);

    const visitorsInterval = setInterval(() => {
      if (countVisitors >= 10000) return clearInterval(visitorsInterval);
      setVisitorCount(countVisitors += 50);
    }, 10);

    const reviewsInterval = setInterval(() => {
      if (countReviews >= 890) return clearInterval(reviewsInterval);
      setReviewCount(countReviews += 9);
    }, 30);

    return () => {
      clearInterval(staffInterval);
      clearInterval(visitorsInterval);
      clearInterval(reviewsInterval);
    };
  }
}, [startCounting]);


  return (
    <section className="app" onMouseMove={handleMouseMove}>
      <header className="app-header">
        <Header />
      </header>


      <div className="home-banner">
        <div className="home-text-overlay" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
          <h1>Welcome to Lemur Lodge</h1>
          <p>Your perfect stay in Ivano-Frankivsk</p>
        </div>
      </div>

   

  <div className="home-container">
    <div className="home-section">
      <div className="image-wrapper">
        <img src="/images/home-reception.jpg" alt="reception-image" className="home-image"/>
        <div className="overlay-box">
          <h2>+24 Rooms</h2>
        </div>
      </div>
      <div className="home-text">
        <h2>Luxury & Comfort</h2>
        <p>Experience high-end amenities in a cozy atmosphere.</p>
      </div>
    </div>
  </div>


<div className="parallax-section">
  <div className="parallax-text">
    <h2>Our Achievements</h2>
    <p>We take pride in providing top-tier hospitality and service.</p>
    <div className="counter-box" ref={counterRef}>
      <h2>👨‍🍳 {staffCount} Staff Members</h2>
      <h2>🏨 {visitorCount} Visitors</h2>
      <h2>⭐ {reviewCount} Positive Reviews</h2>
    </div>
  </div>
</div>



      <Footer />
    </section>
  );
};

export default Home;
