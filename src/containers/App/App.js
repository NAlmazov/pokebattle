import React, { Component }  from 'react';
import './App.css';
import PokemonTeam from '../../components/PokemonTeam/PokemonTeam';
import TeamStats from '../../components/TeamStats/TeamStats';
import { getRandomIds } from './getRandomPokeIds';
import { createPokeURLs } from './getPokeURLs';
import { getPower } from './getPower';
import { stealPoke } from './stealPoke';

let playerPower = 0;
let enemyPower = 0;
let EnemyTeam = [];
let PlayerTeam = [];

class App extends Component {

  constructor() {
    super()
    this.state = {
      pokemonlistPlayer: [],
      pokemonlistEnemy: [],
      score: 0,
      gameStatus: `Click Battle To Fight!`,
      turnStatus: `battle`
    }
  }


  componentDidMount() {
    //Get Player Pokemon Team
    const pokeIdsPlayer = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);
   
    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then(result => {
      return this.setState({ pokemonlistPlayer: result });
    });

    //Get Enemy Pokemon Team
    const pokeIdsEnemy = getRandomIds(6);
    const pokeURLsenemy = createPokeURLs(pokeIdsEnemy);
    Promise.all(pokeURLsenemy.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then (result => {
      return this.setState({ pokemonlistEnemy: result });
    });
  }

  onRefreshButtonClick = () => {
    const pokeIdsPlayer = getRandomIds(6);
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then (result => {
      return this.setState({ pokemonlistPlayer: result });
    });

    this.setState({ score: 0})

    this.setState( {gameStatus: `Use Your New Pokemon To Fight!`})
  }

  onBattleButtonClick = () => {
    PlayerTeam = this.state.pokemonlistPlayer;
    playerPower = getPower(this.state.pokemonlistPlayer);
  

    EnemyTeam = this.state.pokemonlistEnemy;
    enemyPower = getPower(this.state.pokemonlistEnemy);

    let score = this.state.score;
    // Win Condition
    if (playerPower >= enemyPower){
        // Give Win Point
        this.setState({score: (Number(score)+1)})
       //lets player steal a pokemon
       if (this.state.turnStatus === `battle`) {
            this.setState ({ turnStatus: `configteam`});
            this.setState( {gameStatus: `You WON! Pick a Pokémon to steal`});
            let pokeSteal = window.prompt(`Type Pokemon ID to steal!`);
            pokeSteal = Number(pokeSteal);
            let pokeDiscard = window.prompt(`Type Pokemon ID to discard!`);
            pokeDiscard = Number (pokeDiscard);
           if (pokeSteal && pokeDiscard){
            PlayerTeam = stealPoke(PlayerTeam, pokeDiscard, EnemyTeam, pokeSteal);

            this.setState( {pokemonlistPlayer: PlayerTeam});
            this.setState ({ turnStatus: `battle`});
            this.setState( {gameStatus: `Click Battle to Fight Again!`});
           } else {
            this.setState ({ turnStatus: `battle`});
            this.setState( {gameStatus: `Click Battle to Fight Again!`});
           }
            
       } else {
        this.setState( {gameStatus: `Pick a Pokémon to steal`})
       }

    } 
    // Loss Condition
    else {
      this.setState({score: 0})
      const pokeIdsPlayer = getRandomIds(this.state.pokemonlistPlayer.length);
      const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

      Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then (result => {
        return this.setState({ pokemonlistPlayer: result });
        });
      
      //Update Message
      this.setState( {gameStatus: `YOU LOST. Click Battle for Revenge!`})
    }

    // refresh enemy team
    const pokeIdsEnemy = getRandomIds(this.state.pokemonlistEnemy.length);
    const pokeURLsEnemy = createPokeURLs(pokeIdsEnemy);

    Promise.all(pokeURLsEnemy.map(url => fetch(url)))
      .then(resp=> Promise.all ( resp.map(r => r.json()) ))
      .then (result => {
      return this.setState({ pokemonlistEnemy: result });
     });

  }


  render() {
    const pokemonListInitPlayer = this.state.pokemonlistPlayer;
    const currentScore = this.state.score;
    const pokemonListInitEnemy = this.state.pokemonlistEnemy;
    if (pokemonListInitPlayer === 0 && pokemonListInitEnemy === 0 ) {
      return <h4>Loading</h4>
    } else {
      return(
      <div className="App">
        <header className="App-header">
            <h1>Pokébattle v1.0</h1>
            <h1 className='push'>{this.state.gameStatus}</h1>
            <button onClick={ this.onRefreshButtonClick } className='pushsmall'>Get New Pokémon</button>
            <button onClick={ this.onBattleButtonClick } className='pushsmall'>Battle</button>
            <h2 className='pushsmall score'>Current Score: {currentScore}</h2>
        </header>
        <div className="game">
            <h2>Your Team</h2>
            <PokemonTeam pokemonlist={pokemonListInitPlayer} />
            <TeamStats pokemonlist={pokemonListInitPlayer}/>
            <h2>Red's Team</h2>
            <PokemonTeam pokemonlist={pokemonListInitEnemy} />
            <TeamStats pokemonlist={pokemonListInitEnemy}/>
        </div>
      </div>
    )
    }
    
  }
}

export default App;
