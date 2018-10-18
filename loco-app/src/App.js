import React, { Component } from 'react'
import './styles/app.scss'
import MainMenu from './MainMenu'
import MTest from './MTest'

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu/>
        <MTest/>
      </div>
    )
  }
}

export default App
