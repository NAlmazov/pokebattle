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
    TURN_DATA_LOSS,
    VIEW_TEAM_STATS,
    VIEW_CONTROLS_MAIN,
    POKE_STEAL_STEAL_POKE,
    POKE_STEAL_DISCARD_POKE,
    SEE_INSTRUCTIONS

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
        .then(r => {let result = r.map(v => ({...v, energy: 100}))
        return result})
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
        .then(r => {let result = r.map(v => ({...v, energy: 100}))
        return result})
        .then(data => dispatch({ type: REQUEST_ENEMY_POKE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ENEMY_POKE_FAILED, payload: error }))

    }, 3000)
}
 

export const currentScore = () => ({
        type: SCORE_ZERO,
        payload: 0
})

export const winRound = score => (dispatch) => {
   dispatch({ type: WIN_ROUND, payload:{controls: 'control-buttons'},score });
}

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
        turn: 'battleready',
        controls: 'control-buttons'
    }
})

export const seeIntructions = () => ({
    type: SEE_INSTRUCTIONS,
    payload: {
        screen: 'instructions'
    }

})

export const roundWin = (array) => (dispatch) => {

    const reducePower = (arrayPoke) => {
        for (let i = 0; i < arrayPoke.length; i++){
            let newEnergy = arrayPoke[i].energy - 5;
            arrayPoke[i].energy = newEnergy;
        }
        return arrayPoke;
    }
    const lessPowerTeam = reducePower(array);

    dispatch({ type: REQUEST_PLAYER_POKE_SUCCESS, payload: lessPowerTeam})
    dispatch({type: TURN_DATA_WIN, payload: {screen: 'game', mainprompt: 'You Won! Pick a Pokémon to steal', turn: 'cansteal', controls: 'pokemon-steal'}})
}

export const pokeStolen = () => ({
    type: TURN_DATA_STEAL,
    payload: {
        screen: 'game',
        mainprompt: 'Nice Pokemon! Use it in Battle!',
        turn: 'battleready',
        controls: 'control-buttons'
    }
})

export const roundLoss = () => ({
    type: TURN_DATA_LOSS,
    payload: {
        screen: 'loss-screen',
        mainprompt: 'You Lost. Click Battle for Revenge!',
        turn: 'battleready',
        controls: 'control-buttons'
    }
})

export const viewTeamStats = () => ({
    type: VIEW_TEAM_STATS,
    payload: {
        controls: 'team-stats'
    }
})

export const viewControlButtons = () => ({
    type: VIEW_CONTROLS_MAIN,
    payload: {
        controls: 'control-buttons'
    }
})

export const discardPokemonById = (value) => ({
    type: POKE_STEAL_DISCARD_POKE,
    payload: {
        pokeId: value
    }
})

export const stealPokemonById = (value) => ({
    type: POKE_STEAL_STEAL_POKE,
    payload: {
        pokeId: value
    }
})


