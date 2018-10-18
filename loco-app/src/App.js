import React, { Component } from 'react'
import './styles/app.scss'
import MainMenu from './MainMenu'
import oneGame0 from './oneGame0'
import PreviewScreen from './PreviewScreen'


class App extends Component {
  render() {
    return (
      <div>
        <PreviewScreen/>
        <MainMenu/>
        <oneGame0/>

      </div>
    )
  }
}

export default App
