import React, { Component } from 'react';
import './styles/app.scss';
import PreviewScreen from './PreviewScreen';
import Games from './Games'
import Game from './Game'
import locoLogo from './assets/LocoLogo.svg';

class App extends Component {
  state = {
    showGame: false,
    game: {}
  }

  toggleShowGame = game => {
    this.setState(prevState => ({
      showGame: !prevState.showGame,
      game
    }))
  }

  render() {
    const { showGame, game } = this.state
    // {/*<PreviewScreen />*/}
    return (
      <div>
        {
          showGame ?
          <Game game={game} toggleShowGame={this.toggleShowGame}/> 
          :
          <div id='appContainer'>
            <img id='logo' src={locoLogo} alt="Logo" />
            <Games toggleShowGame={this.toggleShowGame} />
          </div>
        }
      </div>
    )
  }
}

export default App;
