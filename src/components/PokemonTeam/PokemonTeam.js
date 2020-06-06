import React, { Fragment } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import PokeballArray from '../PokeballArray/PokeballArray';

const PokemonTeam = ({ pokemonlist, status }) => {


    if (status){
        return(
            <Fragment>
                <PokeballArray pokemonlist = {pokemonlist}/>
            </Fragment>
        )
    } else {
        return(
            <Fragment>   
                {
                pokemonlist.map((pokemon, i) => {
                    return(
                     <Pokemon 
                        key={i} 
                        name={pokemonlist[i].name} 
                        id={pokemonlist[i].id} 
                        height={pokemonlist[i].height} 
                        weight={pokemonlist[i].weight}
                                                    />
                    );
                }
            )
        }
    </Fragment>
        );
    }
   
}
export default PokemonTeam;
