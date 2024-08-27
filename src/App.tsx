import { useState } from 'react'
import {getFilms} from '../data/Api'
import { Api } from '../data/Api'
import './App.css'

function App() {
  const [films, setFilms] = useState <Api | null>(null)
  const [loadingData, setLoadingData] = useState <boolean>(false)
  const [errorMess,setErrorMess] = useState <string | null> (null)


  const getData = async () => {
    setLoadingData(true)
    setErrorMess(null)
    try {
      const data = await getFilms()
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
       <h1> Studio Ghibli</h1>
       <button onClick={getData}> Hämta data </button>
      </div>
  
  )
}

export default App
