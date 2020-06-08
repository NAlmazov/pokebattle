import React, { Component } from 'react';
import './Controls.css';
import { requestPokemonPlayer, requestPokemonEnemy, currentScore, winRound, stealPokemon, startGame, roundWin, pokeStolen, roundLoss, launchMenu, viewTeamStats, viewControlButtons } from '../../actions'
import TeamStats from '../../components/TeamStats/TeamStats';
import PokemonSteal from '../../components/PokemonSteal/PokemonSteal';
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
        score: state.currentScore.score,
        controls: state.controlBox.controls
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
    onViewTeamStats: () => dispatch(viewTeamStats()),
    onViewControlButtons: () => dispatch(viewControlButtons())
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

      onTeamStatsClick = () => {
        this.props.onViewTeamStats();
      }

      onBackClick = () => {
        this.props.onViewControlButtons();
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
        const { PlayerTeam, TotalPlayerPower, TotalEnemyPower }  = this.props;
    
        // Win Condition
        if (TotalPlayerPower >= TotalEnemyPower){
            //lets player steal a pokemon
                this.props.onRoundWin(PlayerTeam);
        } 
        // Loss Condition
        else {
          this.props.onRequestPokemonPlayer();
          this.props.onCurrentScore();
          this.props.onRoundLoss();
          this.props.onRequestPokemonEnemy();
        }
      }


    render(){
        const { mainprompt, controls, PlayerTeam }  = this.props;
        if (controls === 'pokemon-steal'){
            return(
                <div className='controlbox'>
                    <PokemonSteal />
                </div>
            ) 
        }
        else if(controls === 'team-stats'){
            return(
            <div className='controlbox'>
                <div>
                    <div className='controls'>
                        <TeamStats pokemonlist={PlayerTeam} />
                    </div>
                    <div className='controls'>
                        <button  onClick={ this.onBattleButtonClick } >Battle</button>
                        <button onClick={ this.onBackClick } >Back</button>
                    </div>
                </div>
            </div>
            )
        } else {
            return(
                <div className='controlbox'>
                    <div>
                        <div className='controls'>
                            <button  onClick={ this.onBattleButtonClick } >Battle</button>
                            <button onClick = {this.onTeamStatsClick } >Team Stats</button>
                            <button  onClick={ this.onRefreshButtonClick } >Restart</button>
                            <button  onClick={ this.onMainMenuButtonClick } >Exit</button>
                        </div>
                        <div className='prompt-text'>
                            <h2>{mainprompt}</h2>
                        </div>
                    </div>
                </div>
            );
        }
    }
} 
  

export default connect(mapStateToProps, mapDispatchToProps)(Controls);