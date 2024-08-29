// import React from 'react';
import {Films }from '../data/Api'
import FavoritFilms from './Favorits'

interface Props{
    f: Films;
}

const SearchLabel = ({ f}: Props) => { 
<label> </label>
    return ( 
<section className="filmcard">

<FavoritFilms/> 
    <p className="filmtitle"> {f.title} </p>
    {f.image && <img src={f.image} /> }
    <p> Producer: {f.producer} </p>
    <p className="filmdescription"> {f.description}</p>
    <p> Released: {f.release_date} </p>

</section>
)}
export default SearchLabel

