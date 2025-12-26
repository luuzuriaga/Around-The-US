// src/components/Main/Popup/ImagePopup/ImagePopup.jsx
import React from "react";
import closeButton from "../../../../../images/closeIcon2.png"; // Asegúrate que la ruta sea correcta

export default function ImagePopup({ card, onClose }) {
  return (
    <div className="popup__image-wrapper">
      <button 
        type="button" 
        className="popup__close popup__close_type_image" 
        onClick={onClose}
      >
        <img src={closeButton} alt="Cerrar" className="popup__close-button" />
      </button>
      <div className="popup__modal">
        <img src={card.link} alt={card.name} className="popup__modal-content" />
        <p className="popup__modal-description">{card.name}</p>
      </div>
    </div>
  );
}