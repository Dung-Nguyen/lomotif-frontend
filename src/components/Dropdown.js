import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import { playerClass } from '../constants'

/**
 * Dropdown Component
 * Using React.Component
 *
 * Renders a Dropdown
 */

class Dropdown extends Component {
  state = {
    listOpen: false,
    itemSelected: ''
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  toggleSelected = item => {
    this.setState({ itemSelected: item })
    this.toggleList()
    this.props.onSelected(item)
  }

  render() {
    const { title } = this.props
    const { listOpen, itemSelected } = this.state
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{itemSelected || title}</div>
          {listOpen ? (
            <img
              src={require('../images/arrow_up.svg')}
              alt="arrow_up"
              width="14"
            />
          ) : (
            <img
              src={require('../images/arrow_down.svg')}
              alt="arrow_down"
              width="14"
            />
          )}
        </div>
        {listOpen ? (
          <ul className="dd-list">
            {playerClass.map((item, idx) => (
              <li
                key={idx}
                className="dd-list-item"
                onClick={() => this.toggleSelected(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  }
}

Dropdown.propTypes = {
  /** Prop display title of dropdown */
  title: PropTypes.string,
  /** Func handle select item in dropdown */
  onSelected: PropTypes.func.isRequired
}

export default onClickOutside(Dropdown)
