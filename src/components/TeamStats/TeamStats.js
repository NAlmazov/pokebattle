import React from 'react';
import './TeamStats.css';

const TeamStats = ({ pokemonlist }) => {
    
    const getStat = (stat, array) => {
        let statistic = 0;
            array.forEach((pokemon, i) => {
                let statArray = pokemonlist[i].stats;
                statArray.forEach((statfield, i) => {
                    if (statArray[i].stat.name === stat) {
                        statistic = statistic + statArray[i].base_stat;
                    }
                }
                )
             }
            )
        return statistic;
    }
    
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