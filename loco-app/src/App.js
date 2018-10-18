import React, { Component } from 'react'
import './styles/app.scss'
import MainMenu from './MainMenu'
import oneGame from './oneGame'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <oneGame/>
      </div>
    )
  }
}

export default App
