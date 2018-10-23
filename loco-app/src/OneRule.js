import React, {Component} from 'react'

class OneRule extends Component{
  state = {
    text: "nothing"
  }
    constructor(props){
      super(props)
      this.state = {
                    text: props//"En spelare säger ett påstående som börjar med ”Vem i rummet…” och räknar till 3. På tre pekar alla spelare i rummet på den spelaren påståendet passar bäst in på. Alla dricker så många pekningar de får."
                    }

    }
    //add logga i hörnet
    // knapp
    // ancor? scroll?
    render(){
      let display = this.text

      return (

        <div class = "game">
          <p>{display}</p>
        </div>

      )

  }

}


export default OneRule
