import { useFilms } from "../data/store"



const AntalFilms = () => {

const FavoriteFilms = useFilms(state => state.allFilms)
const countmovie: number = FavoriteFilms.length
return (

    <div  className="conterdiv"> 
        <p> {countmovie} movies </p>
    </div>
)

}

export default AntalFilms