import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      }
   
    return (
        <ul className="card"> 
        <li className="card__item">
          <img 
          className="card__image" 
          src={props.card.link} 
          alt={props.card.name}  
          onClick={handleClick}/>

          <button className="card__delete" type="button" />
          <div className="card__info">
            <h2 className="card__name">{props.card.name}</h2>
            <div className="card__like-container">
              <button className="card__like" type="button" />
              <span className="card__like-counter">{props.card.likes.length}</span>
            </div>
          </div>
        </li>
      </ul>
    );
  }
  
  export default Card;