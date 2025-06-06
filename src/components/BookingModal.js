import React from "react";

function BookingModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Processing Operation</h3>
        <div className="loading-animation">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default BookingModal;
