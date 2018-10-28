import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default class Game extends Component {

  renderText = () => {
    const { game } = this.props
    const { texts } = game

    let textToRender = texts.map((textObj, i) => {
      return (
        <div key={i} className='slideContainer'>
          <div className='slide'>
            {textObj}
          </div>
        </div>
      )
    })

    return textToRender
  }

  render() {
    const { toggleShowGame } = this.props
    
    return (
      <div>
      <div id='button' onClick={() => toggleShowGame()}>
        <img src={require('./assets/back.svg')} alt="back" />
        <p>Tillbaka</p>
      </div>

        <Carousel showThumbs={false} transitionTime={200} showStatus={false}>
          {this.renderText()}
        </Carousel>
      </div>
    )
  }
}