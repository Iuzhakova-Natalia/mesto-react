import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button popup__close-button_type_edit-profile"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__header">{title}</h2>
        <form className="form form_type_edit-profile" name={name} noValidate>
          {children}
          <button className="form__button form__button_disabled" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
