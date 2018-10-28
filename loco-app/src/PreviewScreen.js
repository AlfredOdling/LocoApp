import React, { Component } from 'react';
import './styles/app.scss';
import locoLogo from './assets/LocoLogo.svg';
import './styles/PreviewScreen.scss';

class PreviewScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="PreviewScreen">
          <img id="logoH" src={locoLogo} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default PreviewScreen;
