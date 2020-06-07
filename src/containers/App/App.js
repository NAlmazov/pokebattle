import React, { Component }  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { requestPokemonPlayer, requestPokemonEnemy, currentScore,launchMenu } from '../../actions'
import PokemonTeam from '../../components/PokemonTeam/PokemonTeam';
import TeamStats from '../../components/TeamStats/TeamStats';
import Controls from '../../components/Controls/Controls';
import StartMenu from '../../components/StartMenu/StartMenu';

const mapStateToProps = state => {
  return{
    PlayerTeam: state.requestPokemonPlayer.pokemonlistPlayer,
    isPendingPlayer: state.requestPokemonPlayer.isPending,
    EnemyTeam: state.requestPokemonEnemy.pokemonlistEnemy,
    isPendingEnemy: state.requestPokemonEnemy.isPending,
    score: state.currentScore.score,
    screen: state.currentTurn.screen,
    mainprompt: state.currentTurn.mainprompt

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLaunchMenu: () => dispatch(launchMenu()),
    onRequestPokemonPlayer: () => dispatch(requestPokemonPlayer()),
    onRequestPokemonEnemy: () => dispatch(requestPokemonEnemy()),
    onCurrentScore: () => dispatch(currentScore())
  }
}

class App extends Component {

  componentDidMount() {
    //StartGame
    this.props.onLaunchMenu();
    //Get Player Pokemon Team    
    this.props.onRequestPokemonPlayer();
    //Get Enemy Pokemon Team
    this.props.onRequestPokemonEnemy();
    //Reset Score
    this.props.onCurrentScore();
  }

  render() {
    const { PlayerTeam, isPendingPlayer, EnemyTeam, isPendingEnemy, score, mainprompt, screen }  = this.props;

      if (screen === 'mainmenu') {
        return <StartMenu />
      } else{
        return(
          <div className="App">
          <header className="App-header">
              <h1>Pokébattle v1.0</h1>
              <h2 className='push score'>Current Score: {score}</h2>
          </header>
          <div className="game">
              <h2>Your Team</h2>
              <div className="gamerow">
                <PokemonTeam id='Player' pokemonlist={PlayerTeam} status={isPendingPlayer} />
                <Controls pokemonlist={PlayerTeam} mainprompt={mainprompt} />
              </div>
              <h2>Red's Team</h2>
              <div className="gamerow">
                <PokemonTeam id='Enemy' pokemonlist={EnemyTeam} status={isPendingEnemy}/>
                <TeamStats pokemonlist={EnemyTeam}/>
              </div>
          </div>
        </div>
          );
        }
      }  
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
