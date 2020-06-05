import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../actions';

import './StartMenu.css';



const mapStateToProps = state => {
    return {
        screen: state.currentTurn.screen
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        onStartGame: () => dispatch(startGame())
    }
}

class StartMenu extends Component {
    
    onStartGameClick = () => {
        this.props.onStartGame();
    }

    render(){
        return(
            <Fragment>
                <header className="App-header">
                    <h1>Pokébattle v1.0</h1>
                 </header>
                 <div id="pokeheader">
                        <img alt='pokemonheader' src={require(`./assets/pokeheader.png`)} />
                 </div>
                <div id='options'>
                    <div id='option'>
                        <button id='optionbutton' onClick={ this.onStartGameClick }>Play Pokébattle</button>
                    </div>
                    <div id='option'>
                        <button id='optionbutton'>Instructions</button> 
                    </div>
                </div>   
                <div id="poketeam">
                    <img alt='pokemonteam' src={require(`./assets/poketeam.png`)} />
                </div>
            </Fragment>
                )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
