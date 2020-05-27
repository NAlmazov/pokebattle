import React, { Component }  from 'react';
import './App.css';
import PokemonTeam from '../components/PokemonTeam';
import { pokemonlistold } from '../components/Pokemonlist';


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

const createPokeArray = (array) => {
  const pokeArray =[];
  for (var i=0; i<array.length; i++) {
    fetch(array[i])
      .then(response => response.json())
      .then(response => pokeArray.push(response))
  }
  return pokeArray;
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      pokemonlist: []
    }
  }

  componentDidMount() {
    const pokeIds = getRandomIds();
    const pokeURLs = createPokeURLs(pokeIds);
    const pokeListArray = createPokeArray(pokeURLs);
    this.setState({ pokemonlist: pokemonlistold});
    console.log(pokeListArray);
  }

  render() {

    const pokemonListInit = this.state.pokemonlist;
    if (pokemonListInit === 0) {
      return <h1>Loading</h1>
    } else {
      console.log(pokemonListInit);
      return(
      <div className="App">
        <header className="App-header">
            <h1>Pokebattle v1.0</h1>
        </header>
        <div>
            <h2>Your Team</h2>
            <PokemonTeam pokemonlist={pokemonListInit} />
            <h2>Red's Team</h2>
            <PokemonTeam pokemonlist={pokemonListInit} />
        </div>
      </div>
    )
    }
    
  }
}

export default App;
