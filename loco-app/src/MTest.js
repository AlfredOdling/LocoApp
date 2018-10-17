import React, {Component, PropTypes} from 'react'
import classNames from 'MTestClassnames'
import './MTestStyle'

class Button extends Component{
  render(){
    const buttonClass = classNames({
      'button' : true,
      'button--hidden': this.props.hidden,
      'button--disabled': this.props.disabled
    })

    return (
      <button className = {buttonClass}>
      {this.props.text.toUpperCase()}
      </button>
    )
  }
}


Button.PropTypes = {
  hidden:PropTypes.bool,
  disabled:PropTypes.bool,
  text: PropTypes.string
}

Button.defaultProps{
  hidden: false,
  disabled: false,
  text: 'Submit'
}
export default Button
