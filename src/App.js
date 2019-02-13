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
      <div className="body">
        <div className="b-header">
          <div className="container">
          <div className="header-inner">
            <h1 className="branch-name">Hearthstone Deck</h1>
          </div>
          </div>
        </div>
        
        <div className="b-main">
          <div className="container">
            <h2 className="title-main">Content Card here</h2>
            <CardList />
          </div>
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
