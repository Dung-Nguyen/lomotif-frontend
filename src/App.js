import React, { Component } from 'react'
import CardList from './components/CardList'

class App extends Component {
  render() {
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

export default App
