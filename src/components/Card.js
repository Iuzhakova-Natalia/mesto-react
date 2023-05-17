import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( `card__like ${isLiked && 'card__like_active'}`); 

  /*function handleClick() {
    props.onCardClick(props.card);
  }*/
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }


  return (
   
      <li className="card">
        <img
          className="card__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />

      {isOwn &&(<button className="card__delete" onClick={handleDeleteClick} type="button" />)}
        <div className="card__info">
          <h2 className="card__name">{props.card.name}</h2>
          <div className="card__like-container">
             <button className={cardLikeButtonClassName}  onClick={handleLikeClick} type="button" />
            <span className="card__like-counter">
              {props.card.likes.length}
            </span>
          </div>
        </div>
      </li>
    
  );
}

export default Card;
