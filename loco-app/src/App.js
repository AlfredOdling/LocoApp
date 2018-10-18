import React, { Component } from 'react'
import './styles/app.scss'
import MainMenu from './MainMenu'
import oneGame from './oneGame'
import PreviewScreen from './PreviewScreen'


class App extends Component {
  render() {
    return (
      <div>
        <PreviewScreen/>
        <MainMenu/>
        <oneGame/>

      </div>
    )
  }
}

export default App
