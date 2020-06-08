import React, { Component } from 'react';
import PokePickList from '../PokePickList/PokePickList';
import { currentScore, stealPokemon, roundWin, pokeStolen, winRound, requestPokemonEnemy } from '../../actions'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        PlayerTeam: state.requestPokemonPlayer.pokemonlistPlayer,
        EnemyTeam: state.requestPokemonEnemy.pokemonlistEnemy,
        score: state.currentScore.score,
        controls: state.controlBox.controls,
        pokeDiscard: state.pokeDiscard.pokeId,
        pokeSteal: state.pokeSteal.pokeId,

    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRoundWin: (array) => dispatch(roundWin(array)),
        onStealPokemon: (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => dispatch(stealPokemon(arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy)),
        onPokeStolen: () => dispatch(pokeStolen()),
        onCurrentScore: () => dispatch(currentScore()),
        onWinRound: (score) => dispatch(winRound(score)),
        onRequestPokemonEnemy: () => dispatch(requestPokemonEnemy())
    }
}

class PokemonSteal extends Component {

    onStealPokemonButtonClick = () => {
        const { PlayerTeam, EnemyTeam, score, pokeDiscard, pokeSteal }  = this.props;

                 //Steal Pokemon
                this.props.onStealPokemon(PlayerTeam, pokeDiscard, EnemyTeam, pokeSteal);
                this.props.onPokeStolen();
                this.props.onRequestPokemonEnemy();
                this.props.onWinRound(score+1);
    }

render(){
    const { PlayerTeam, EnemyTeam }  = this.props;

    return( 
        <div>
            <div>
                <PokePickList pokemonlistEnemy={EnemyTeam} pokemonlistPlayer={PlayerTeam}/>
            </div>
            <div>
                <button onClick={ this.onStealPokemonButtonClick }>Steal Pokémon</button>
            </div>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSteal);