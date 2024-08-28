// import React from 'react';
import {Films }from '../data/Api'




interface Props{
    f: Films;
}

const SearchLabel = ({ f}: Props) => { 
<label> </label>
    return ( 
<section className="filmcard">
    <p className="filmtitle"> {f.title} </p>
    <p> Producer: {f.producer} </p>
    {f.image && <img src={f.image} /> }
    <p className="filmdescription"> {f.description}</p>
    
    <p> Released: {f.release_date} </p>



</section>
)}
export default SearchLabel


//