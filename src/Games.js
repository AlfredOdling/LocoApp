import React, { Component } from 'react'
import { getGames } from './utils'

export default class Games extends Component {
   renderElements = () => {
      let elementsToRender = getGames().map((game, i) => {
         const { iconSrc, title, id } = game
         const { toggleShowGame } = this.props

         return (
            <div key={i} className='grid-item' onClick={() => toggleShowGame(game)}>
               <img id={id} src={iconSrc} alt='img' />
               <p>{title}</p>
            </div>
         )
      })

      return elementsToRender
   }

   render() {
      return (
         <div id="grid-container">
            {this.renderElements()}
         </div>
      )
   }
}