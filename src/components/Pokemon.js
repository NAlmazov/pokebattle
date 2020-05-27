import React from 'react';
import './Pokemon.css';

const Pokemon = ({name, id, height, weight}) => {

    return(
        <div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc' id='card'>
            <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <div>
                <h3>{name.charAt(0).toUpperCase()+ name.slice(1)}</h3>
                <h3>ID: {id}</h3>
                <h3>Height: {height}</h3>
                <h3>Weight: {weight}</h3>
            </div>
        </div>
    )
}

export default Pokemon;