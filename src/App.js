import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions/card.action'
import CardList from './components/CardList'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h1>Hearthstone Deck</h1>
        <div>
          Content Card here
          <CardList />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
