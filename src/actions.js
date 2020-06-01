import {
    REQUEST_PLAYER_POKE_PENDING,
    REQUEST_PLAYER_POKE_SUCCESS,
    REQUEST_PLAYER_POKE_FAILED,
    REQUEST_ENEMY_POKE_PENDING,
    REQUEST_ENEMY_POKE_SUCCESS,
    REQUEST_ENEMY_POKE_FAILED,
    SCORE_ZERO,
    WIN_ROUND,
    POKE_STEAL

} from './constants'

import { getRandomIds } from './containers/App/getRandomPokeIds';
import { createPokeURLs } from './containers/App/getPokeURLs';
import { stealPoke } from './containers/App/stealPoke';


export const requestPokemonPlayer = () => (dispatch) => {
    dispatch({ type: REQUEST_PLAYER_POKE_PENDING });
    const pokeIdsPlayer = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then(data => dispatch({ type: REQUEST_PLAYER_POKE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_PLAYER_POKE_FAILED, payload: error }))
}

export const requestPokemonEnemy = () => (dispatch) => {
    dispatch({ type: REQUEST_ENEMY_POKE_PENDING });
    const pokeIdsEnemy = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsEnemy);

    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then(data => dispatch({ type: REQUEST_ENEMY_POKE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ENEMY_POKE_FAILED, payload: error }))
}

export const currentScore = () => ({
        type: SCORE_ZERO,
        payload: 0
})

export const winRound = score => ({
    type: WIN_ROUND,
    score
})

export const stealPokemon = (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => ({
        type: POKE_STEAL,
        payload: stealPoke(arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy)

})



