import React, {Component} from 'react'
import './oneGameStyle.scss'
import OneRule from './OneRule'

class OneGame extends Component {

  state = {
//    text: "En spelare säger ett påstående som börjar med ”Vem i rummet…” och räknar till 3. På tre pekar alla spelare i rummet på den spelaren påståendet passar bäst in på. Alla dricker så många pekningar de får."
      test: "testing"
      //rule:
  }

  render(){
    let rule = OneRule.constructor("InputText");
    //let displaytext = rule.text;

    return (

      <div class = "game">
        <p>val= {rule.text} HHH {this.state.test} </p>
      </div>

    )
  }
}
export default OneGame
