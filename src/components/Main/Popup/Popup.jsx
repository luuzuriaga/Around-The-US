// src/components/Main/Popup/Popup.jsx
import React, { useEffect } from "react";
import closeButton from "../../../../images/CloseIcon.png";

export default function Popup(props) {
  // Añadimos showDefaultClose con valor por defecto true
  const { onClose, title, children, showDefaultClose = true } = props;

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) onClose();
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div
        className={`popup__container ${
          !title ? "popup__container_container_image" : ""
        }`}
      >
        {/* Renderizado condicional del botón de cierre por defecto */}
        {showDefaultClose && (
          <button
            className="popup__close"
            type="button"
            aria-label="Close modal"
            onClick={onClose}
          >
            <img
              src={closeButton}
              alt="Botón Cerrar"
              className="popup__close-button"
            />
          </button>
        )}
        
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}