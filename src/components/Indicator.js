import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Indicator Component
 * Using React.Component
 *
 * Renders a Indicator
 */

class Indicator extends Component {
  render() {
    const { loading } = this.props
    return loading ? (
      <div className="indicator">
        <div id="loader" />
      </div>
    ) : null
  }
}

Indicator.propTypes = {
  /** Prop to display or hide Indicator */
  loading: PropTypes.bool
}

Indicator.defaultProps = { loading: false }

export default Indicator
