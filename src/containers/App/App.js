import React, { Component }  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { requestPokemonPlayer, requestPokemonEnemy, currentScore, winRound, stealPokemon, startGame, roundWin, pokeStolen, roundLoss } from '../../actions'
import PokemonTeam from '../../components/PokemonTeam/PokemonTeam';
import TeamStats from '../../components/TeamStats/TeamStats';

const mapStateToProps = state => {
  return{
    PlayerTeam: state.requestPokemonPlayer.pokemonlistPlayer,
    TotalPlayerPower: state.requestPokemonPlayer.totalPlayerPower,
    isPendingPlayer: state.requestPokemonPlayer.isPending,
    EnemyTeam: state.requestPokemonEnemy.pokemonlistEnemy,
    TotalEnemyPower: state.requestPokemonEnemy.totalEnemyPower,
    isPendingEnemy: state.requestPokemonEnemy.isPending,
    errorPlayer: state.requestPokemonPlayer.error,
    errorEnemy: state.requestPokemonEnemy.error,
    score: state.currentScore.score,
    turn: state.currentTurn.turn,
    screen: state.currentTurn.screen,
    mainprompt: state.currentTurn.mainprompt

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPokemonPlayer: () => dispatch(requestPokemonPlayer()),
    onRequestPokemonEnemy: () => dispatch(requestPokemonEnemy()),
    onCurrentScore: () => dispatch(currentScore()),
    onWinRound: (score) => dispatch(winRound(score)),
    onStealPokemon: (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => dispatch(stealPokemon(arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy)),
    onStartGame: () => dispatch(startGame()),
    onRoundWin: () => dispatch(roundWin()),
    onPokeStolen: () => dispatch(pokeStolen()),
    onRoundLoss: () => dispatch(roundLoss())
  }
}

class App extends Component {

  componentDidMount() {
    //StartGame
    this.props.onStartGame();
    //Get Player Pokemon Team    
    this.props.onRequestPokemonPlayer();
    
    //Get Enemy Pokemon Team
    this.props.onRequestPokemonEnemy();
    //Reset Score
    this.props.onCurrentScore();
  }

  onRefreshButtonClick = () => {
    //Refresh Player Pokemon Team  
    this.props.onRequestPokemonPlayer();
    //Reset The Score
    this.props.onCurrentScore();
    //Reset Game Status
    this.props.onRoundLoss();
  }

  onBattleButtonClick = () => {
    const { PlayerTeam, EnemyTeam, score, TotalPlayerPower, TotalEnemyPower }  = this.props;

    // Win Condition
    if (TotalPlayerPower >= TotalEnemyPower){
        //lets player steal a pokemon
            this.props.onRoundWin();
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


  render() {
    const { PlayerTeam, isPendingPlayer, EnemyTeam, isPendingEnemy, score, mainprompt }  = this.props;
    if (isPendingPlayer && isPendingEnemy ) {
      return <h4>Loading</h4>
    } else {
      return(
      <div className="App">
        <header className="App-header">
            <h1>Pokébattle v1.0</h1>
            <h1 className='push'>{mainprompt}</h1>
            <button onClick={ this.onRefreshButtonClick } className='pushsmall'>Get New Pokémon</button>
            <button onClick={ this.onBattleButtonClick } className='pushsmall'>Battle</button>
            <h2 className='pushsmall score'>Current Score: {score}</h2>
        </header>
        <div className="game">
            <h2>Your Team</h2>
            <PokemonTeam pokemonlist={PlayerTeam} />
            <TeamStats pokemonlist={PlayerTeam}/>
            <h2>Red's Team</h2>
            <PokemonTeam pokemonlist={EnemyTeam} />
            <TeamStats pokemonlist={EnemyTeam}/>
        </div>
      </div>
    )
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
