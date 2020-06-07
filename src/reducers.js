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

import { getPower } from './containers/App/getPower';

const initialStatePlayerPokemon = {
    isPending: false,
    pokemonlistPlayer: [],
    error: '',
    totalPlayerPower: 0
}

export const requestPokemonPlayer = (state=initialStatePlayerPokemon, action={}) => {
    switch(action.type){
        case REQUEST_PLAYER_POKE_PENDING:
            return Object.assign({}, state, {}, {isPending: true})

        case REQUEST_PLAYER_POKE_SUCCESS:
            return Object.assign({}, state, {}, {pokemonlistPlayer: action.payload, isPending: false, totalPlayerPower: getPower(action.payload)})

        case REQUEST_PLAYER_POKE_FAILED:
            return Object.assign({}, state, {}, {error: action.payload, isPending: false})
        
        case POKE_STEAL:
            return Object.assign({}, state, {}, {pokemonlistPlayer: action.payload, isPending: false, totalPlayerPower: getPower(action.payload)})

        default:
            return state;
    }
}

const initialStateEnemyPokemon = {
    isPending: false,
    pokemonlistEnemy: [],
    error: '',
    totalEnemyPower: 0
}

export const requestPokemonEnemy = (state=initialStateEnemyPokemon, action={}) => {
    switch(action.type){
        case REQUEST_ENEMY_POKE_PENDING:
            return Object.assign({}, state, {}, {isPending: true})

        case REQUEST_ENEMY_POKE_SUCCESS:
            return Object.assign({}, state, {}, {pokemonlistEnemy: action.payload, isPending: false,  totalEnemyPower: getPower(action.payload)})
        
        case REQUEST_ENEMY_POKE_FAILED:
            return Object.assign({}, state, {}, {error: action.payload, isPending: false})
        
        default:
            return state;
    }
}

const initialStateScore = {
    score: 0
}

export const currentScore = (state=initialStateScore, action={}) => {
    switch(action.type){
        case SCORE_ZERO:
            return Object.assign({}, state, {}, {score: action.payload})
        case WIN_ROUND:
            return Object.assign({}, state, {}, {score: action.score})
            default:
                return state;
    }
}

const initialStateTurn = {
    turn: 'gamestart',
    screen: 'mainmenu',
    mainprompt: ''
}

export const currentTurn = (state=initialStateTurn, action={}) => {
    switch(action.type){
        case TURN_DATA_MAINMENU:
            return Object.assign({}, state, {}, {turn: action.payload.turn, screen: action.payload.screen, mainprompt: action.payload.mainprompt})
        case TURN_DATA_GAMESTART:
            return Object.assign({}, state, {}, {turn: action.payload.turn, screen: action.payload.screen, mainprompt: action.payload.mainprompt})
        case TURN_DATA_WIN:
            return Object.assign({}, state, {}, {turn: action.payload.turn, screen: action.payload.screen, mainprompt: action.payload.mainprompt})
        case TURN_DATA_STEAL:
            return Object.assign({}, state, {}, {turn: action.payload.turn, screen: action.payload.screen, mainprompt: action.payload.mainprompt})
        case TURN_DATA_LOSS:
            return Object.assign({}, state, {}, {turn: action.payload.turn, screen: action.payload.screen, mainprompt: action.payload.mainprompt})   
        default:
            return state;
    }
}