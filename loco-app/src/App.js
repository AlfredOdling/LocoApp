import React, { Component } from 'react'
import './styles/app.scss'
import MainMenu from './MainMenu'
import PreviewScreen from './PreviewScreen'

class App extends Component {
  render() {
    return (
      <div>
        <PreviewScreen/>
      </div>
    )
  }
}

export default App
