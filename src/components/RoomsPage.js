import React, { useState } from "react";
import HotelRoom from "./HotelRoom";
import BookingModal from "./BookingModal";
import Header from "./menu/Header";
import Footer from "./menu/Footer";
import "../styles/RoomPage.css";

const hotelRooms = [ { id: 4, name: "Econom", price: 60, city: "Ivano-Frankivsk", images: ["/images/econom.jpg", "/images/economKitchen.jpg", "/images/economBathroom.jpg"], description: "A budget-friendly stay with simple furnishings, perfect for a quick city escape." }, 
{ id: 7, name: "Standard", price: 120, city: "Ivano-Frankivsk", images: ["/images/standard.jpg", "/images/standardKitchen.jpeg", "/images/standardBathroom.jpeg"], description: "A cozy room featuring soft lighting, modern touches, and a comfortable workspace." }, 
{ id: 1, name: "Luxury", price: 250, city: "Ivano-Frankivsk", images: ["/images/luxury.jpg", "/images/luxKitchen.jpg", "/images/luxBathroom.jpg"], description: "An upscale suite with breathtaking panoramic views and top-tier amenities." }, 
{ id: 5, name: "Luxury", price: 230, city: "Ivano-Frankivsk", images: ["/images/luxury2.jpeg", "/images/luxKitchen2.jpg", "/images/luxBathroom2.jpg"], description: "A refined haven offering a spacious lounge area and designer decor." }, 
{ id: 3, name: "Standard", price: 100, city: "Ivano-Frankivsk", images: ["/images/standard2.jpeg", "/images/standardKitchen2.jpg", "/images/standardBathroom2.jpg"], description: "A stylish yet functional retreat with high-quality bedding and scenic city views." }, 
{ id: 8, name: "Econom", price: 55, city: "Ivano-Frankivsk", images: ["/images/econom2.jpeg", "/images/economBathroom2.jpg", "/images/economKitchen2.jpg"], description: "A compact but comfortable stay for travelers seeking simplicity and affordability." }, 
{ id: 6, name: "Econom", price: 48, city: "Ivano-Frankivsk", images: ["/images/econom3.jpeg", "/images/economBathroom3.jpg", "/images/economKitchen3.jpg"], description: "An affordable option with basic amenities, ideal for short-term stays." }, 
{ id: 9, name: "Luxury", price: 275, city: "Ivano-Frankivsk", images: ["/images/luxury3.jpeg", "/images/luxKitchen3.jpg", "/images/luxBathroom3.jpg"], description: "An exquisite suite with a private balcony, luxurious bedding, and a spa-like bathroom." }, 
{ id: 2, name: "Standard", price: 110, city: "Ivano-Frankivsk", images: ["/images/standard3.jpeg", "/images/standardKitchen3.jpg", "/images/standardBathroom3.jpg"], description: "A comfortable stay with a modern touch, offering relaxing interiors and premium services." } ];

function RoomsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="app">
      <header>
        <Header />
      </header>

      <div className="room-list">
        {hotelRooms.map((room) => (
          <HotelRoom key={room.id} {...room} onSelect={() => setModalOpen(true)} />
        ))}
      </div>

      {modalOpen && <BookingModal closeModal={() => setModalOpen(false)} />} 
      <Footer />
    </section>
  );
}

export default RoomsPage;
