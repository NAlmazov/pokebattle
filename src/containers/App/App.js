import React, { Component }  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { requestPokemonPlayer, requestPokemonEnemy, currentScore, winRound, stealPokemon } from '../../actions'
import PokemonTeam from '../../components/PokemonTeam/PokemonTeam';
import TeamStats from '../../components/TeamStats/TeamStats';
import { getPower } from './getPower';

let playerPower = 0;
let enemyPower = 0;

const mapStateToProps = state => {
  return{
    PlayerTeam: state.requestPokemonPlayer.pokemonlistPlayer,
    isPendingPlayer: state.requestPokemonPlayer.isPending,
    EnemyTeam: state.requestPokemonEnemy.pokemonlistEnemy,
    isPendingEnemy: state.requestPokemonEnemy.isPending,
    errorPlayer: state.requestPokemonPlayer.error,
    errorEnemy: state.requestPokemonEnemy.error,
    score: state.currentScore.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPokemonPlayer: () => dispatch(requestPokemonPlayer()),
    onRequestPokemonEnemy: () => dispatch(requestPokemonEnemy()),
    onCurrentScore: () => dispatch(currentScore()),
    onWinRound: (score) => dispatch(winRound(score)),
    onStealPokemon: (arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy) => dispatch(stealPokemon(arrayPlayer, changeNumPlayer, arrayEnemy, changeNumEnemy))
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      gameStatus: `Click Battle To Fight!`,
      turnStatus: `battle`
    }
  }


  componentDidMount() {
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
    this.setState( {gameStatus: `Use Your New Pokemon To Fight!`})
  }

  onBattleButtonClick = () => {
    const { PlayerTeam, EnemyTeam, score }  = this.props;

    playerPower = getPower(PlayerTeam);
  
    enemyPower = getPower(EnemyTeam);
    // Win Condition
    if (playerPower >= enemyPower){
       //lets player steal a pokemon
       if (this.state.turnStatus === `battle`) {
            this.setState ({ turnStatus: `configteam`});
            this.setState( {gameStatus: `You WON! Pick a Pokémon to steal`});
            let pokeSteal = window.prompt(`Type Pokemon ID to steal!`);
            pokeSteal = Number(pokeSteal);
            let pokeDiscard = window.prompt(`Type Pokemon ID to discard!`);
            pokeDiscard = Number (pokeDiscard);
           if (pokeSteal && pokeDiscard){
             //Steal Pokemon
              this.props.onStealPokemon(PlayerTeam, pokeDiscard, EnemyTeam, pokeSteal);
              
            this.setState ({ turnStatus: `battle`});
            this.setState( {gameStatus: `Click Battle to Fight Again!`});
           } else {
            this.setState ({ turnStatus: `battle`});
            this.setState( {gameStatus: `Click Battle to Fight Again!`});
           }
            
       } 
      //  else {
      //   this.props.onCurrentScore();
      //   this.setState( {gameStatus: `Pick a Pokémon to steal`})
      //  }
       this.props.onWinRound(score+1);
    } 
    // Loss Condition
    else {
      this.props.onRequestPokemonPlayer();
      this.props.onCurrentScore();
      //Update Message
      this.setState( {gameStatus: `YOU LOST. Click Battle for Revenge!`})
    }

    // refresh enemy team
    this.props.onRequestPokemonEnemy();

  }


  render() {
    const { PlayerTeam, isPendingPlayer, EnemyTeam, isPendingEnemy, score }  = this.props;
    if (isPendingPlayer && isPendingEnemy ) {
      return <h4>Loading</h4>
    } else {
      return(
      <div className="App">
        <header className="App-header">
            <h1>Pokébattle v1.0</h1>
            <h1 className='push'>{this.state.gameStatus}</h1>
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
