import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        buttonText="Сохранить"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input-text form__input-text_type_name form__input-error-line"
          type="text"
          id="name-input"
          name="name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          defaultValue
          required
        />

        <span className="form__input-error name-input-error"></span>

        <input
          className="form__input-text form__input-text_type_about"
          type="text"
          id="about-input"
          name="about"
          placeholder="Вид деятельности"
          minLength={2}
          maxLength={200}
          defaultValue
          required
        />

        <span className="form__input-error about-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="new-place"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input-text form__input-text_type_place"
          type="text"
          name="name"
          id="place-input"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          defaultValue
          required
        />

        <span className="form__input-error place-input-error" />

        <input
          className="form__input-text form__input-text_type_link"
          type="url"
          id="link-input"
          name="link"
          placeholder="Ссылка на картинку"
          defaultValue
          required
        />

        <span className="form__input-error link-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        buttonText="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input-text form__input-text_type_avatar"
          type="url"
          id="avatar-input"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />

        <span className="form__input-error avatar-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
