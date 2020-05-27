import React, { Component }  from 'react';
import './App.css';
import PokemonTeam from '../components/PokemonTeam';


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

class App extends Component {

  constructor() {
    super()
    this.state = {
      pokemonlistPlayer: [],
      pokemonlistEnemy: []
    }
  }

  componentDidMount() {
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
  }

  render() {
    const pokemonListInitPlayer = this.state.pokemonlistPlayer;
    const pokemonListInitEnemy = this.state.pokemonlistEnemy;
    if (pokemonListInitPlayer === 0 && pokemonListInitEnemy === 0 ) {
      return <h4>Loading</h4>
    } else {
      return(
      <div className="App">
        <header className="App-header">
            <h1>Pokebattle v1.0</h1>
        </header>
        <div>
            <h2>Your Team</h2>
            <PokemonTeam pokemonlist={pokemonListInitPlayer} />
            <h2>Red's Team</h2>
            <PokemonTeam pokemonlist={pokemonListInitEnemy} />
        </div>
      </div>
    )
    }
    
  }
}

export default App;
