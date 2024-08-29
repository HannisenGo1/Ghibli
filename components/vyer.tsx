import React, { useState } from 'react';
import App from '../src/App'

type View = 'home' | 'Favorites';

const Vy = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleSwitchView = () => {
    setCurrentView(prevView => (prevView === 'home' ? 'Favorites' : 'home'));
  };

  return (
    <div>
      <button onClick={handleSwitchView} >
        {currentView === 'home' ? 'Go to Favorites' : 'Go to Home'}
      </button>

      {currentView === 'home' && <App />}
      {currentView === 'Favorites' && <Favorites />}
    </div>
  );
};


const Home = () => {
  return (
    <div> 
<App />
</div>
  );
};


const Favorites = () => {
  return (
    <div>
      <h1>Favorite movies</h1>
      <p>This is your favorite movies</p>
    </div>
  );
};

export default Vy;
