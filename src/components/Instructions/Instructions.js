import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { launchMenu } from '../../actions';
import './Instructions.css';

const mapStateToProps = state => {
    return {
        screen: state.currentTurn.screen
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLaunchMenu: () => dispatch(launchMenu())
    }
}


class Instructions extends Component {

    onMainMenuButtonClick = () => {
  
        this.props.onLaunchMenu();
    
      }

    render(){
        return(
            <Fragment>
                <header className="App-header">
                    <h1>Pokébattle v1.0</h1>
                    <button className="pushLeft menuButton" onClick={ this.onMainMenuButtonClick }>Back</button>
                 </header>
                 <div className="rules">
                     <div>
                         <h3>Pokébattle Rules</h3>
                         <p>You begin with six random Pokémon. Your opponent gets six random pokemeon as well. When you select to Battle, if the combined power of your Pokémon exceeds that of your opponent, you win. Otherwise, you lose.</p>
                         <p>Upon a victory each of your Pokémon will lose 5% of their power. You will be granted an opportunity to steal any of your opponent's Pokémon. This Pokémon will have a 100% power bar.</p>
                         <p>Upon a loss, the game finishes.</p>
                     </div>
                     <div>
                         <h3>Tips</h3>
                         <p>To succeed in this game, it is important to know your Pokémon. It is vital to correctly swap your Pokémon.</p>
                     </div>
                     <div>
                         <h3>About Pokébattle</h3>
                         <p>Created by Nikolay Almazov in 2020.</p>
                     </div>
                 </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);