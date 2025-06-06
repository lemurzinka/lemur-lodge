import React, { useState } from "react";
import HotelRoom from "./HotelRoom";
import BookingModal from "./BookingModal";
import Header from "./menu/Header";
import Footer from "./menu/Footer";
import "../styles/RoomPage.css";

const hotelRooms = [ { id: 4, name: "Econom", price: 60, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/econom.jpg", "/lemur-lodge/images/economKitchen.jpg", "/lemur-lodge/images/economBathroom.jpg"], description: "A budget-friendly stay with simple furnishings, perfect for a quick city escape." }, 
{ id: 7, name: "Standard", price: 120, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/standard.jpg", "/lemur-lodge/images/standardKitchen.jpg", "/lemur-lodge/images/standardBathroom.jpg"], description: "A cozy room featuring soft lighting, modern touches, and a comfortable workspace." }, 
{ id: 1, name: "Luxury", price: 250, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/luxury.jpg", "/lemur-lodge/images/luxkitchen.jpg", "/lemur-lodge/images/luxbathroom.jpg"], description: "An upscale suite with breathtaking panoramic views and top-tier amenities." }, 
{ id: 5, name: "Luxury", price: 230, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/luxury2.jpeg", "/lemur-lodge/images/luxkitchen2.jpg", "/lemur-lodge/images/luxbathroom2.jpg"], description: "A refined haven offering a spacious lounge area and designer decor." }, 
{ id: 3, name: "Standard", price: 100, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/standard2.jpeg", "/lemur-lodge/images/standardKitchen2.jpg", "/lemur-lodge/images/standardBathroom2.jpg"], description: "A stylish yet functional retreat with high-quality bedding and scenic city views." }, 
{ id: 8, name: "Econom", price: 55, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/econom2.jpeg", "/lemur-lodge/images/economBathroom2.jpg", "/lemur-lodge/images/economKitchen2.jpg"], description: "A compact but comfortable stay for travelers seeking simplicity and affordability." }, 
{ id: 6, name: "Econom", price: 48, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/econom3.jpeg", "/lemur-lodge/images/economBathroom3.jpg", "/lemur-lodge/images/economKitchen3.jpg"], description: "An affordable option with basic amenities, ideal for short-term stays." }, 
{ id: 9, name: "Luxury", price: 275, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/luxury3.jpeg", "/lemur-lodge/images/luxkitchen3.jpg", "/lemur-lodge/images/luxbathroom3.jpg"], description: "An exquisite suite with a private balcony, luxurious bedding, and a spa-like bathroom." }, 
{ id: 2, name: "Standard", price: 110, city: "Ivano-Frankivsk", images: ["/lemur-lodge/images/standard3.jpeg", "/lemur-lodge/images/standardKitchen3.jpg", "/lemur-lodge/images/standardBathroom3.jpg"], description: "A comfortable stay with a modern touch, offering relaxing interiors and premium services." } ];

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
