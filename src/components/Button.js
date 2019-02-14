import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { text, className, onClick, outline } = this.props
    let _className = 'btn '
    if (outline) {
      _className += 'btn-outline '
    }

    if (className) {
      _className += className
    }

    return (
      <button className={_className.trim()} onClick={onClick}>
        {text || this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  /** Text value of Button */
  text: PropTypes.string.isRequired,
  /** Set outline for Button */
  outline: PropTypes.bool.isRequired,
  /** Add custom class for Button */
  className: PropTypes.string,
  /** Func handle event click */
  onClick: PropTypes.func
}

Button.defaultProps = {
  text: '',
  outline: false
}

export default Button
