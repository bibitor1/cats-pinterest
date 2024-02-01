import React, { useState, useEffect, useContext } from "react";
import getCats from "../api/cats-api";
import CatsList from "../components/cats-list/cats-list";
import { FavoriteCatsContext } from "../context/context";

function MainPage() {
  const [cats, setCats] = useState();
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  useEffect(() => {
    getCats().then((data) => {
      setCats(data)
    })
  }, [])

  return (
    <section className="cats">
      <CatsList
        cats={cats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
      />
      <p className="cats__message">Загружаем котиков...</p>
    </section>
  );
}

export default MainPage;
