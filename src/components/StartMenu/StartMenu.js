import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { startGame, seeIntructions } from '../../actions';

import './StartMenu.css';



const mapStateToProps = state => {
    return {
        screen: state.currentTurn.screen
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        onStartGame: () => dispatch(startGame()),
        onSeeInstructions: () => dispatch(seeIntructions())
    }
}

class StartMenu extends Component {
    
    onStartGameClick = () => {
        this.props.onStartGame();
    }

    onSeeInstructionsClick = () => {
        this.props.onSeeInstructions();
    }

    render(){
        return(
            <Fragment>
                <header className="App-header">
                    <h1>Pokébattle v1.0</h1>
                 </header>
                 <div className="containerFlex">
                    <div id="pokeheader">
                            <img alt='pokemonheader' src={require(`./assets/pokeheader.png`)} />
                    </div>
                    <div id='options'>
                        <div id='option'>
                            <button id='optionbutton' onClick={ this.onStartGameClick }>Play Pokébattle</button>
                        </div>
                        <div id='option'>
                            <button id='optionbutton' onClick={ this.onSeeInstructionsClick }>Instructions</button> 
                        </div>
                    </div>   
                    <div id="poketeam">
                        <img alt='pokemonteam' src={require(`./assets/poketeam.png`)} />
                    </div>
                </div>
            </Fragment>
                )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
