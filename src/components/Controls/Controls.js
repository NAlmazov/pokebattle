import React, { Component } from 'react';
import './Controls.css';
import { requestPokemonPlayer, requestPokemonEnemy, currentScore, winRound, stealPokemon, startGame, roundWin, pokeStolen, roundLoss, launchMenu } from '../../actions'

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        mainprompt: state.currentTurn.mainprompt,
        turn: state.currentTurn.turn,
        screen: state.currentTurn.screen,
        PlayerTeam: state.requestPokemonPlayer.pokemonlistPlayer,
        TotalPlayerPower: state.requestPokemonPlayer.totalPlayerPower,
        isPendingPlayer: state.requestPokemonPlayer.isPending,
        EnemyTeam: state.requestPokemonEnemy.pokemonlistEnemy,
        TotalEnemyPower: state.requestPokemonEnemy.totalEnemyPower,
        isPendingEnemy: state.requestPokemonEnemy.isPending,
        errorPlayer: state.requestPokemonPlayer.error,
        errorEnemy: state.requestPokemonEnemy.error,
        score: state.currentScore.score
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
    onRequestPokemonPlayer: () => dispatch(requestPokemonPlayer()),
    onRequestPokemonEnemy: () => dispatch(requestPokemonEnemy()),
    onCurrentScore: () => dispatch(currentScore()),
    onWinRound: (score) => dispatch(winRound(score)),
    onStealPokemon: (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => dispatch(stealPokemon(arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy)),
    onStartGame: () => dispatch(startGame()),
    onRoundWin: (array) => dispatch(roundWin(array)),
    onPokeStolen: () => dispatch(pokeStolen()),
    onRoundLoss: () => dispatch(roundLoss()),
    onLaunchMenu: () => dispatch(launchMenu()),
    }
}


class Controls extends Component {


    onMainMenuButtonClick = () => {
  
        this.props.onRequestPokemonPlayer();
        this.props.onCurrentScore();
        this.props.onRoundLoss();
        this.props.onRequestPokemonEnemy();
        this.props.onLaunchMenu();
    
      }
    
      onRefreshButtonClick = () => {
        //Refresh Player Pokemon Team  
        this.props.onRequestPokemonPlayer();
        //Reset The Score
        this.props.onCurrentScore();
        //Reset Game Status
        this.props.onStartGame();
      }
    
      onBattleButtonClick = () => {
        const { PlayerTeam, EnemyTeam, score, TotalPlayerPower, TotalEnemyPower }  = this.props;
    
        // Win Condition
        if (TotalPlayerPower >= TotalEnemyPower){
            //lets player steal a pokemon
                this.props.onRoundWin(PlayerTeam);
                let pokeSteal = window.prompt(`Type Pokemon ID to steal!`);
                pokeSteal = Number(pokeSteal);
                let pokeDiscard = window.prompt(`Type Pokemon ID to discard!`);
                pokeDiscard = Number (pokeDiscard);
               if (pokeSteal && pokeDiscard){
                 //Steal Pokemon
                  this.props.onStealPokemon(PlayerTeam, pokeDiscard, EnemyTeam, pokeSteal);
                  this.props.onPokeStolen();
               }
           this.props.onWinRound(score+1);
        } 
        // Loss Condition
        else {
          this.props.onRequestPokemonPlayer();
          this.props.onCurrentScore();
          this.props.onRoundLoss();
        }
        // refresh enemy team
        this.props.onRequestPokemonEnemy();
      }


    render(){
        const { mainprompt }  = this.props;

        return(
            <div className='controlbox'>
                <div>
                    <div className='controls'>
                        <button  onClick={ this.onBattleButtonClick } className='pushsmall'>Battle</button>
                        <button>Team Stats</button>
                        <button  onClick={ this.onRefreshButtonClick } className='pushsmall'>Restart</button>
                        <button  onClick={ this.onMainMenuButtonClick } className='pushsmall'>Exit</button>
                    </div>
                    <div className='prompt-text'>
                        <h2>{mainprompt}</h2>
                    </div>
                </div>
            </div>
        );
    }
} 
  

export default connect(mapStateToProps, mapDispatchToProps)(Controls);