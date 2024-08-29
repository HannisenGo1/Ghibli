// användaren ska kunna favorit markera filmer som ska 
//visas i en separat vy   som kallas favoriter
// användaren ska ändra ordning på filmer i favoritvyn
// toggla om man har sett en film i favoritvyn eller inte.
// det som blir ''gult'' ska sparas i favorit vyn.
// favorit knappen ligger i app.tsx -> favoFilmbtn som ska togglas -> f.vyn


import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteFilms = () => {
  const [redMode, setRedMode] = useState<boolean>(false);
  const [ greenMode, setGreenmode] = useState<boolean>(false)

  const handleClick = () => {
    setRedMode((y) => !y);
  };

  const handleGreenClick = () => {
    setGreenmode((g => !g));
  }

  return (
    <div className="button-container"> 

      <button 
      className={`heart-button${redMode ? " red-mode" : ""}`}    
      onClick={handleClick} >
        <FontAwesomeIcon icon={faHeart} />
      
      </button>

      <button
        className={`eye-button${greenMode ? " green-mode" : ""}`}
        onClick={handleGreenClick}
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>
  );
};

export default FavoriteFilms;
