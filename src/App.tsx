import { useState } from 'react'
import {getFilms , Films} from '../data/Api'

import './App.css'
import Info from './info'

function App() {
  const [films, setFilms] = useState <Films[]>([])
  const [loadingData, setLoadingData] = useState <boolean>(false)
  const [errorMess,setErrorMess] = useState <string | null> (null)
  const[search,setSearch] = useState<string>('')


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
       <button onClick={getData}> Hämta data </button>
       <p> sök fält: </p>
       <label> </label>
      </div>
  
  )
}

export default App
