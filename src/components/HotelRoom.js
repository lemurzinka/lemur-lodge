import React, { useState } from "react";

function HotelRoom({ name, price, city, images, description }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(""); // Стан анімації

  const handleBooking = () => {
    setIsProcessing(true);
    setBookingOpen(true);
  };

 const nextImage = () => {
    setIsSliding("slide-left"); // Анімація на ліво
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsSliding("");
    }, 500); // Час повинен відповідати CSS-анімації
  };

  const prevImage = () => {
    setIsSliding("slide-right"); // Анімація на право
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsSliding("");
    }, 500);
  };

  return (
    <div className="room-wrapper">
      <div className="card room-card p-3 d-flex flex-row align-items-center justify-content-between">
        {/* Клік на зображення відкриває модальне вікно */}
        <img src={images[0]} alt={name} className="room-image" onClick={() => setModalOpen(true)} style={{ cursor: "pointer" }} />

        <div className="room-details d-flex flex-column justify-content-between">
            <h5>{name} – ${price}/night</h5>
            <p>City: {city}</p>
            <p className="room-description"><strong>Description:</strong> {description}</p>
        </div>
        
        {/* Кнопка змінюється після натискання */}
        <button 
          className={`booking-button ${isProcessing ? "processing" : ""}`} 
          onClick={handleBooking}
          disabled={isProcessing}
        >
          {isProcessing ? "On process..." : "Book now"}
        </button>
      </div>

      {/* Модальне вікно з каруселлю */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{name}</h3>
            
            {/* Карусель */}
              <div className="carousel">
              <button className="carousel-button" onClick={prevImage}>ᐊ</button>
              <img src={images[currentImageIndex]} alt={name} className={`modal-image ${isSliding}`} />
              <button className="carousel-button" onClick={nextImage}>ᐅ</button>
            </div>


            <p><strong>Price:</strong> ${price}/night</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Description:</strong> {description}</p>
            <button className="close-button" onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Вікно бронювання */}
      {bookingOpen && (
        <div className="modal-overlay" onClick={() => setBookingOpen(false)}>
          <div className="modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Processing Operation</h3>
            <div className="loading-animation">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
            <button className="close-button" onClick={() => setBookingOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelRoom;
