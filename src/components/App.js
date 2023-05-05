import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
         <Header />
        <Main />
        <Footer />
        <section className="popup popup_tupe_edit">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_edit-profile" type="button" />
            <h2 className="popup__header">Редактировать профиль</h2>
            <form className="form form_type_edit-profile" name="form-edit-profile" noValidate>
              <input className="form__input-text form__input-text_type_name form__input-error-line" type="text" id="name-input" name="name" placeholder="Имя" minLength={2} maxLength={40} defaultValue required />
              <span className="form__input-error name-input-error" />
              <input className="form__input-text form__input-text_type_about" type="text" id="about-input" name="about" placeholder="Вид деятельности" minLength={2} maxLength={200} defaultValue required />
              <span className="form__input-error about-input-error" />
              <button className="form__button form__button_disabled" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_type_new-place">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_new-place" type="button" />
            <h2 className="popup__header">Новое место</h2>
            <form className="form form_type_add-card" name="form-add-card" noValidate>
              <input className="form__input-text form__input-text_type_place" type="text" name="name" id="place-input" placeholder="Название" minLength={2} maxLength={30} defaultValue required />
              <span className="form__input-error place-input-error" />
              <input className="form__input-text form__input-text_type_link" type="url" id="link-input" name="link" placeholder="Ссылка на картинку" defaultValue required />
              <span className="form__input-error link-input-error" />
              <button className="form__button form__button_disabled" type="submit">
                Создать
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_type_image">
          <figure className="popup__window">
            <button className="popup__close-button popup__close-button_type_image" type="button" />
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__place" />
          </figure>
        </section>
        <section className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_avatar" type="button">
            </button>
            <h2 className="popup__header">Обновить аватар</h2>
            <form className="form form_type_avatar" name="form-avatar" noValidate>
              <input className="form__input-text form__input-text_type_avatar" type="url" id="avatar-input" name="avatar" placeholder="Ссылка на картинку" required />
              <span className="form__input-error avatar-input-error" />
              <button className="form__button form__button_disabled" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_type_delete-card">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_type_delete-card" type="button" />
            <form className="form" name="delete-form">
              <h2 className="popup__header">Вы уверены?</h2>
              <button className="form__button" type="submit">
                Да
              </button>
            </form>
          </div>
        </section>
        <template id="card-template" />
      </div>
  );
}

export default App;
