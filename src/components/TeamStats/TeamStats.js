import React from 'react';
import './TeamStats.css';
import { getStat } from '../../containers/App/getStat.js';

const TeamStats = ({ pokemonlist }) => {
    
    const totalSpeed = getStat(`speed`, pokemonlist);
    const totalSpecDef = getStat(`special-defense`, pokemonlist);
    const totalSpecAttack = getStat(`special-attack`, pokemonlist);
    const totalDefense = getStat(`defense`, pokemonlist);
    const totalAttack = getStat(`attack`, pokemonlist);
    const totalHp = getStat(`hp`, pokemonlist);

    return(
        <div className='dib br3 pa2 ma2' id='stat'>
            <div>
                <h2 id='headerstats'>Team Stats</h2>
                <h3>Speed: { totalSpeed }</h3>
                <h3>Special Defense: {totalSpecDef} </h3>
                <h3>Special Attack: {totalSpecAttack}</h3>
                <h3>Defense: {totalDefense}</h3>
                <h3>Attack: {totalAttack}</h3>
                <h3>HP: {totalHp}</h3>
            </div>
        </div>
    );
}

export default TeamStats;