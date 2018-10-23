import React, {Component} from 'react'
import './oneGameStyle.scss'
import OneRule from './OneRule'

class OneGame extends Component {

  state = {
      text: "En spelare säger ett påstående som börjar med ”Vem i rummet…” och räknar till 3. På tre pekar alla spelare i rummet på den spelaren påståendet passar bäst in på. Alla dricker så många pekningar de får.",
  }

  getRulesForGame(gameName){
//tempSlides
    let slide1 = "1"
    let slide2 = "2"
    let slide3 = "3"
    let slide4 = "4"
    let slide5 = "5"
    let rules = {};

    switch(gameName){
//      case "caps":
//      break;
      case "fuck the dealer":
      rules = {slide1, slide2, slide3}
      break;
      case "hetspong":
      rules = {slide1, slide2, slide3, slide4}
      break;
      case "jagharaldrig":
      rules = {slide1, slide2}
      break;
      case "pekleken":
      rules = {slide1, slide2}
      break;
      case "ringoffire":
      rules = {slide1, slide2, slide3, slide4, slide5}
      break;
    }
  }

  render(){
    return (

      <div className = "game">
      //create one OneRule per slide
        <OneRule rules={this.rules.{slideCounter}} />
      </div>

    )
  }
}
export default OneGame
