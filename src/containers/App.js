import React, { Component }  from 'react';
import './App.css';
import PokemonTeam from '../components/PokemonTeam';
import TeamStats from '../components/TeamStats';


const getRandomIds = () => {
  var numArray = [];
  for (var i=0; i<6; i++) {
    var num = Math.floor(Math.random() * 807) + 1;
    numArray.push(num);
  }
  return numArray;
}

const createPokeURLs = (array) => {
  const arrayURL = [];
 
  const addURL = (value) => {
    var id = value;
    var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    arrayURL.push(url);
    return arrayURL;
  }
  array.forEach(addURL);
  return arrayURL;
}

const getStat = (stat, array) => {
  let statistic = 0;
      array.forEach((pokemon, i) => {
          let statArray = array[i].stats;
          statArray.forEach((statfield, i) => {
              if (statArray[i].stat.name === stat) {
                  statistic = statistic + statArray[i].base_stat;
              }
          }
          )
       }
      )
  return statistic;
}


class App extends Component {

  constructor() {
    super()
    this.state = {
      pokemonlistPlayer: [],
      pokemonlistEnemy: [],
      totalPlayerPower: 0,
      totalEnemyPower: 0,
      score: 0,
      gameStatus: `Click Battle To Fight!`
    }
  }

  componentDidMount() {
    //Get Player Pokemon Team
    const pokeIdsPlayer = getRandomIds();
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then (result => {
      return this.setState({ pokemonlistPlayer: result });
    });

    //Get Enemy Pokemon Team
    const pokeIdsEnemy = getRandomIds();
    const pokeURLsenemy = createPokeURLs(pokeIdsEnemy);

    Promise.all(pokeURLsenemy.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then (result => {
      return this.setState({ pokemonlistEnemy: result });
    });

    //Get Player Power
    const totalPlayerSpeed = getStat(`speed`, this.state.pokemonlistPlayer);
    const totalPlayerSpecDef = getStat(`special-defense`, this.state.pokemonlistPlayer);
    const totalPlayerSpecAttack = getStat(`special-attack`, this.state.pokemonlistPlayer);
    const totalPlayerDefense = getStat(`defense`, this.state.pokemonlistPlayer);
    const totalPlayerAttack = getStat(`attack`, this.state.pokemonlistPlayer);
    const totalPlayerHp = getStat(`hp`, this.state.pokemonlistPlayer);

    const totalPlayerPower = (totalPlayerSpeed + totalPlayerSpecDef + totalPlayerSpecAttack + totalPlayerDefense + totalPlayerAttack + totalPlayerHp);
    this.setState( {totalPlayerPower: totalPlayerPower})
    
    //Get Enemy Power
    const totalEnemySpeed = getStat(`speed`, this.state.pokemonlistEnemy);
    const totalEnemySpecDef = getStat(`special-defense`, this.state.pokemonlistEnemy);
    const totalEnemySpecAttack = getStat(`special-attack`, this.state.pokemonlistEnemy);
    const totalEnemyDefense = getStat(`defense`, this.state.pokemonlistEnemy);
    const totalEnemyAttack = getStat(`attack`, this.state.pokemonlistEnemy);
    const totalEnemyHp = getStat(`hp`, this.state.pokemonlistEnemy);

    const totalEnemyPower = (totalEnemySpeed + totalEnemySpecDef + totalEnemySpecAttack + totalEnemyDefense + totalEnemyAttack + totalEnemyHp);
    this.setState( {totalEnemyPower: totalEnemyPower})

  }

  onRefreshButtonClick = () => {
    const pokeIdsPlayer = getRandomIds();
    const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

    Promise.all(pokeURLsPlayer.map(url => fetch(url)))
    .then(resp=> Promise.all ( resp.map(r => r.json()) ))
    .then (result => {
      return this.setState({ pokemonlistPlayer: result });
    });
    //Get Player Power
    const totalPlayerSpeed = getStat(`speed`, this.state.pokemonlistPlayer);
    const totalPlayerSpecDef = getStat(`special-defense`, this.state.pokemonlistPlayer);
    const totalPlayerSpecAttack = getStat(`special-attack`, this.state.pokemonlistPlayer);
    const totalPlayerDefense = getStat(`defense`, this.state.pokemonlistPlayer);
    const totalPlayerAttack = getStat(`attack`, this.state.pokemonlistPlayer);
    const totalPlayerHp = getStat(`hp`, this.state.pokemonlistPlayer);

    const totalPlayerPower = (totalPlayerSpeed + totalPlayerSpecDef + totalPlayerSpecAttack + totalPlayerDefense + totalPlayerAttack + totalPlayerHp);
    this.setState( {totalPlayerPower: totalPlayerPower})
    this.setState({ score: 0})
    this.setState( {gameStatus: `Use Your New Pokemon To Fight!`})
  }

  onBattleButtonClick = () => {
    let score = this.state.score;
    // Win Condition
    if (this.state.totalPlayerPower > this.state.totalEnemyPower){
      this.setState({score: (Number(score)+1)})
      const pokeIdsEnemy = getRandomIds();
      const pokeURLsenemy = createPokeURLs(pokeIdsEnemy);

      Promise.all(pokeURLsenemy.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then (result => {
        return this.setState({ pokemonlistEnemy: result });
       });

       const totalEnemySpeed = getStat(`speed`, this.state.pokemonlistEnemy);
       const totalEnemySpecDef = getStat(`special-defense`, this.state.pokemonlistEnemy);
       const totalEnemySpecAttack = getStat(`special-attack`, this.state.pokemonlistEnemy);
       const totalEnemyDefense = getStat(`defense`, this.state.pokemonlistEnemy);
       const totalEnemyAttack = getStat(`attack`, this.state.pokemonlistEnemy);
       const totalEnemyHp = getStat(`hp`, this.state.pokemonlistEnemy);
   
       const totalEnemyPower = (totalEnemySpeed + totalEnemySpecDef + totalEnemySpecAttack + totalEnemyDefense + totalEnemyAttack + totalEnemyHp);
       this.setState( {totalEnemyPower: totalEnemyPower})

       this.setState( {gameStatus: `YOU WON. Click Battle To Fight Again!`})

    } 
    // Loss Condition
    else {
      this.setState({score: 0})
      const pokeIdsPlayer = getRandomIds();
      const pokeURLsPlayer = createPokeURLs(pokeIdsPlayer);

      Promise.all(pokeURLsPlayer.map(url => fetch(url)))
        .then(resp=> Promise.all ( resp.map(r => r.json()) ))
        .then (result => {
        return this.setState({ pokemonlistPlayer: result });
        });

      const pokeIdsEnemy = getRandomIds();
      const pokeURLsenemy = createPokeURLs(pokeIdsEnemy);

      Promise.all(pokeURLsenemy.map(url => fetch(url)))
      .then(resp=> Promise.all ( resp.map(r => r.json()) ))
      .then (result => {
        return this.setState({ pokemonlistEnemy: result });
      });
      //Get Player Power
      const totalPlayerSpeed = getStat(`speed`, this.state.pokemonlistPlayer);
      const totalPlayerSpecDef = getStat(`special-defense`, this.state.pokemonlistPlayer);
      const totalPlayerSpecAttack = getStat(`special-attack`, this.state.pokemonlistPlayer);
      const totalPlayerDefense = getStat(`defense`, this.state.pokemonlistPlayer);
      const totalPlayerAttack = getStat(`attack`, this.state.pokemonlistPlayer);
      const totalPlayerHp = getStat(`hp`, this.state.pokemonlistPlayer);

      const totalPlayerPower = (totalPlayerSpeed + totalPlayerSpecDef + totalPlayerSpecAttack + totalPlayerDefense + totalPlayerAttack + totalPlayerHp);
      this.setState( {totalPlayerPower: totalPlayerPower})
      
      //Get Enemy Power
      const totalEnemySpeed = getStat(`speed`, this.state.pokemonlistEnemy);
      const totalEnemySpecDef = getStat(`special-defense`, this.state.pokemonlistEnemy);
      const totalEnemySpecAttack = getStat(`special-attack`, this.state.pokemonlistEnemy);
      const totalEnemyDefense = getStat(`defense`, this.state.pokemonlistEnemy);
      const totalEnemyAttack = getStat(`attack`, this.state.pokemonlistEnemy);
      const totalEnemyHp = getStat(`hp`, this.state.pokemonlistEnemy);

      const totalEnemyPower = (totalEnemySpeed + totalEnemySpecDef + totalEnemySpecAttack + totalEnemyDefense + totalEnemyAttack + totalEnemyHp);
      this.setState( {totalEnemyPower: totalEnemyPower})

      //Update Message
      this.setState( {gameStatus: `YOU LOST. Click Battle for Revenge!`})
    }
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
            <h1>Pokebattle v1.0</h1>
            <h1 className='push'>{this.state.gameStatus}</h1>
            <button onClick={ this.onRefreshButtonClick } className='pushsmall'>Get New Pokemons</button>
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
