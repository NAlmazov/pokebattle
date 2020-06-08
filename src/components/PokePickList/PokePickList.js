import React, { Component } from 'react';
import { stealPokemonById, discardPokemonById } from '../../actions'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        discardPoke: state.pokeDiscard.pokeId,
        stealPoke: state.pokeSteal.pokeId
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        onStealPokemonById: (value) => dispatch(stealPokemonById(value)),
        onDiscardPokemonById: (value) => dispatch(discardPokemonById(value))
    }
}


class PokePickList extends Component {

    onDiscardPlayer = (event) => {
        this.props.onStealPokemonById(event.target.value);
    }
    
    onStealEnemy = (event) => {
        this.props.onDiscardPokemonById(event.target.value);
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Pick Pokémon to Steal</h3>
                    <select onChange={this.onDiscardPlayer}>
                        <option>Select one Pokémon</option>
                        {
                            this.props.pokemonlistEnemy.map(function (pokemon, i) {
                                return <option
                                    key={pokemon.id}
                                    value={pokemon.id}>
                                    {pokemon.name}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div>
                <h3>Discard a Pokémon</h3>
                    <select onChange={this.onStealEnemy}>
                    <option>Select one Pokémon</option>
                        {
                            this.props.pokemonlistPlayer.map(function (pokemon, i) {
                                return <option
                                    key={pokemon.id}
                                    value={pokemon.id}>
                                    {pokemon.name}
                                </option>
                            })
                        }
                    </select>
                </div>
            </div>
    );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokePickList);