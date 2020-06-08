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
            <div>
                <div>
                    <h2 id='headerstats'>Team Stats</h2>
                </div>
                <div>
                    <h3>Speed: { totalSpeed }   HP: {totalHp} </h3>
                    <h3>Special Defense: {totalSpecDef}   Special Attack: {totalSpecAttack}</h3>
                    <h3>Attack: {totalAttack}   Defense: {totalDefense}</h3>
                </div>
            </div>
    );
}

export default TeamStats;