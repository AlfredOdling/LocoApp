
import React, { Component } from 'react';
import './styles/app.scss';
import MainMenu from './MainMenu';
import OneGame from './OneGame';
import PreviewScreen from './PreviewScreen';

class App extends Component {
  render() {
    return (

      <div>
        <PreviewScreen />
        <MainMenu />
        //<OneGame />
      </div>
    );
  }
}

export default App;
