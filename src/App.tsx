import { useState } from 'react'
import {getFilms , Films} from '../data/Api'
import SearchLabel from '../components/searchlabel'
import './App.css'
import Info from './info'

function App() {
  const [films, setFilms] = useState <Films[]>([])
  const [loadingData, setLoadingData] = useState <boolean>(false)
  const [errorMess,setErrorMess] = useState <string | null> (null)
  const[search,setSearch] = useState<string>('')
  //
const filteredFilms: Films [] = films.filter(f => f.title.toLowerCase().
includes(search.toLowerCase()))


  const getData = async () => {
    setLoadingData(true)
    setErrorMess(null)
    try {
      const data: Films[] = await getFilms()
      console.log('Datan från Api:et', data)
      loadingData
      setFilms(data)
    }catch (error){
      const e: Error = error as Error;
      console.log('api failade', e.message)
      setErrorMess('failade to fetch the data')
    } finally {
      setLoadingData(false)
    }

  }
  return (
    
      <div className="app"> 
      <header className="header"> </header>
       <h1> Studio Ghibli</h1>
       <p> <Info/> </p>
       
       <input type="text" placeholder="Find movie"
        onChange={(event) => setSearch(event.target.value)
       }value={search} /> 

       <button className="searchBtn" onClick={getData}> Search </button>
       <div className ="film-grid">

       
       { filteredFilms.map((f: Films) => (
      
       <SearchLabel key= {f.id} f={f} /> 
        ))}</div>
      </div>
  
  )
}

export default App
