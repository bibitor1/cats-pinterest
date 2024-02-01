import React, { useContext } from "react";
import CatsList from "../components/cats-list/cats-list";
import { FavoriteCatsContext } from "../context/context";

function FavoritesPage() {
  const {favoriteCats, toggleFavoriteCat} = useContext(FavoriteCatsContext);

  return (
    <section className="cats">
      <CatsList
        cats={favoriteCats}
        likedCats = {favoriteCats.map(cat => cat.id)}
        toggleFavoriteCat={toggleFavoriteCat}
      />
    </section>
  );
}

export default FavoritesPage;
