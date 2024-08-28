import { useState } from 'react';
import { getFilms, Films } from '../data/Api';
import SearchLabel from '../components/searchlabel';
import './App.css';
import Info from './info';
import { useFilms } from '../data/store';
import AntalFilms from '../components/Antalfilms';

function App() {
  const { setAllFilms, allFilms } = useFilms(state => ({
    setAllFilms: state.setAllFilms,
    allFilms: state.allFilms
  }));

  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [errorMess, setErrorMess] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const filteredFilms: Films[] = allFilms.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  const getData = async () => {
    setLoadingData(true);
    setErrorMess(null);
    try {
      const data: Films[] = await getFilms();
      console.log('Datan från Api:et', data);
      setAllFilms(data);
    } catch (error) {
      const e: Error = error as Error;
      console.log('api failade', e.message);
      setErrorMess('Failade to fetch the data');
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <div className="app">
      <header className="header"></header>
      <AntalFilms />
      <button className="favoFilmBtn"> Favorite movies </button>
      <h1>Studio Ghibli</h1>
     
        <Info />
   

      <input
        type="text"
        placeholder="Find movie"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />

      <button className="searchBtn" onClick={getData}>
        Search
      </button>

      {loadingData && <p>Loading...</p>}
      {errorMess && <p>{errorMess}</p>}

      <div className="film-grid">
        {filteredFilms.map((f: Films) => (
          <SearchLabel key={f.id} f={f} />
        ))}
      </div>
    </div>
  );
}

export default App;
