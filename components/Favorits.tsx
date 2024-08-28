// användaren ska kunna favorit markera filmer som ska 
//visas i en separat vy   som kallas favoriter
// användaren ska ändra ordning på filmer i favoritvyn
// toggla om man har sett en film i favoritvyn eller inte.
// det som blir ''gult'' ska sparas i favorit vyn.
// favorit knappen ligger i app.tsx -> favoFilmbtn som ska togglas -> f.vyn


import { useState } from "react";

const FavoriteFilms = () => {
  const [yellowMode, setYellowMode] = useState<boolean>(false);

  const handleClick = () => {
    setYellowMode((y) => !y);
  };

  return (
    <button onClick={handleClick} className="star-button">
      <span className={`star-icon${yellowMode ? " on" : ""}`}>★</span>
    </button>
  );
};

export default FavoriteFilms;