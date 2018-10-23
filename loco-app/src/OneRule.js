import React, {Component} from 'react'

class OneRule extends Component {
  state = {
    text: "nothing"
  }
    //add logga i hörnet
    // knapp
    // ancor? scroll?
    render(){
      console.log(this.props)
      return(
        <p>{this.props.rule}</p>
      )
  }
}

export default OneRule
