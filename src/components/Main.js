import React from 'react';

function Main() {
    return (
        <main className="content">
        <section className="profile">
          <button className="profile__ava-button" type="button">
            <img className="profile__avatar" src="#" alt="фото" />
          </button>
          <div className="profile__info">
            <div className="profile__info-object">
              <h1 className="profile__name" > Жак Ив Кусто</h1>
              <button className="profile__button profile__button_type_edit" type="button" />
            </div>
            <p className="profile__about"> Исследователь океана </p>
          </div>
          <button className="profile__add-button" type="button" />
        </section>
        <section className="cards-container">
        </section>
      </main>
    );
  }
  
  export default Main;