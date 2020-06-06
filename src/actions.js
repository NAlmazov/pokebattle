import {
    REQUEST_PLAYER_POKE_PENDING,
    REQUEST_PLAYER_POKE_SUCCESS,
    REQUEST_PLAYER_POKE_FAILED,
    REQUEST_ENEMY_POKE_PENDING,
    REQUEST_ENEMY_POKE_SUCCESS,
    REQUEST_ENEMY_POKE_FAILED,
    SCORE_ZERO,
    WIN_ROUND,
    POKE_STEAL,
    TURN_DATA_MAINMENU,
    TURN_DATA_GAMESTART,
    TURN_DATA_WIN,
    TURN_DATA_STEAL,
    TURN_DATA_LOSS

} from './constants'

import { getRandomIds } from './containers/App/getRandomPokeIds';
import { createPokeURLs } from './containers/App/getPokeURLs';
import { stealPoke } from './containers/App/stealPoke';


export const requestPokemonPlayer = () => (dispatch) => {
    dispatch({ type: REQUEST_PLAYER_POKE_PENDING });
    const pokeIdsPlayer = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

    setTimeout(() => {

        Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then(data => dispatch({ type: REQUEST_PLAYER_POKE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_PLAYER_POKE_FAILED, payload: error }))

    }, 3000)

}

export const requestPokemonEnemy = () => (dispatch) => {
    dispatch({ type: REQUEST_ENEMY_POKE_PENDING });
    const pokeIdsEnemy = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsEnemy);

    setTimeout(() => {

        Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then(data => dispatch({ type: REQUEST_ENEMY_POKE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ENEMY_POKE_FAILED, payload: error }))

    }, 3000)
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

export const launchMenu = () => ({
    type: TURN_DATA_MAINMENU,
    payload: {
        screen: 'mainmenu',
        mainprompt: '',
        turn: ''
    }
})

export const startGame = () => ({
    type: TURN_DATA_GAMESTART,
    payload: {
        screen: 'game',
        mainprompt: 'Click Battle To Fight!',
        turn: 'battleready'
    }
})

export const roundWin = () => ({
    type: TURN_DATA_WIN,
    payload: {
        screen: 'game',
        mainprompt: 'You Won! Pick a Pokémon to steal',
        turn: 'cansteal'
    }
})

export const pokeStolen = () => ({
    type: TURN_DATA_STEAL,
    payload: {
        screen: 'game',
        mainprompt: 'Nice Pokemon! Use it in Battle!',
        turn: 'battleready'
    }
})

export const roundLoss = () => ({
    type: TURN_DATA_LOSS,
    payload: {
        screen: 'game',
        mainprompt: 'You Lost. Click Battle for Revenge!',
        turn: 'battleready'
    }
})



