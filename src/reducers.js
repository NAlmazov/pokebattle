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

const initialStatePlayerPokemon = {
    isPending: false,
    pokemonlistPlayer: [],
    error: ''
}

export const requestPokemonPlayer = (state=initialStatePlayerPokemon, action={}) => {
    switch(action.type){
        case REQUEST_PLAYER_POKE_PENDING:
            return Object.assign({}, state, {}, {isPending: true})

        case REQUEST_PLAYER_POKE_SUCCESS:
            return Object.assign({}, state, {}, {pokemonlistPlayer: action.payload, isPending: false})
        
        case REQUEST_PLAYER_POKE_FAILED:
            return Object.assign({}, state, {}, {error: action.payload, isPending: false})
        
            case POKE_STEAL:
            return Object.assign({}, state, {}, {pokemonlistPlayer: action.payload, isPending: false})

        default:
            return state;
    }
}

const initialStateEnemyPokemon = {
    isPending: false,
    pokemonlistEnemy: [],
    error: ''
}

export const requestPokemonEnemy = (state=initialStateEnemyPokemon, action={}) => {
    switch(action.type){
        case REQUEST_ENEMY_POKE_PENDING:
            return Object.assign({}, state, {}, {isPending: true})

        case REQUEST_ENEMY_POKE_SUCCESS:
            return Object.assign({}, state, {}, {pokemonlistEnemy: action.payload, isPending: false})
        
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