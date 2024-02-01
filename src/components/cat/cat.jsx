import React from "react";
import './cat.scss';

function Cat({cat, toggleFavoriteCat, likedCats}) {
  return (
    <li className="cat" key={cat.id}>
      <img className="cat__image" src={cat.url} alt="Cute cat." width="225" height="225" />
      <div className="cat__gradient"></div>

      {likedCats.indexOf(cat.id) === -1 ? (
        <button className="cat__button" type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </button>
      ) : (
        <button className="cat__button--active" type="button" onClick={() => toggleFavoriteCat(cat)}>
          <span className="visually-hidden">Добавить в избранное</span>
        </button>
      ) }
    </li>
  )
}
export default Cat;
