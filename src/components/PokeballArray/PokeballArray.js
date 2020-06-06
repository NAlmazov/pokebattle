import React, { Fragment } from 'react';
import Pokeball from '../PokeballLoader/PokeballLoader';


const PokeballArray = ({pokemonlist}) => {
       return(
           <Fragment>
               {
                   pokemonlist.map( (pokemon,i) => {
                    return  <Pokeball key ={i} />
                   }
                   )
               }
           </Fragment>
       )
    }
export default PokeballArray;