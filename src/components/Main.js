import React, { useEffect, useState } from "react"
import api from'../utils/Api';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, getCards] = useState([])

  useEffect(() => {
    api
      .getUserInfo()
      .then((profileUserInfo) => {
        setUserName(profileUserInfo.name)
        setUserDescription(profileUserInfo.about)
        setUserAvatar(profileUserInfo.avatar)
      })
      .catch((error) => console.log(error))

      api
      .getCards()
      .then((cardsData) => {
        getCards(
          cardsData.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id,
          }))
        )
      })
      .catch((error) => console.log(error))
  }, [])
    



    return (
        <main className="content">
        <section className="profile">
          <button className="profile__ava-button" type="button" onClick = {onEditAvatar}>
            <img className="profile__avatar" src = {userAvatar} alt="фото" />
          </button>
          <div className="profile__info">
            <div className="profile__info-object">
              <h1 className="profile__name" >{userName}</h1>
              <button className="profile__button profile__button_type_edit" type="button" onClick = {onEditProfile}/>
            </div>
            <p className="profile__about"> {userDescription} </p>
          </div>
          <button className="profile__add-button" type="button" onClick = {onAddPlace}/>
        </section>
        <section className="cards-container">
        </section>
      </main>
    );
  }
  
  export default Main;