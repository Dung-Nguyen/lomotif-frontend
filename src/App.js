import React, { Component } from 'react'

import CardList from './components/CardList'
import Button from './components/Button'
import Dropdown from './components/Dropdown'

/**
 * App Component
 * Using React.Component
 *
 * Renders a main page
 */

class App extends Component {
  createDeck = () => {
    console.log('Create new Deck')
  }

  filterCard = item => {
    console.log(`Player class selected: ${item}`)
  }

  render() {
    return (
      <div className="body">
        <header className="b-header">
          <div className="container">
            <div className="inner">
              <div className="logo">
                <a href="/">
                  <div className="branch-name">
                    <img
                      src={require('./images/hero_section_logo.png')}
                      alt="Lomotif"
                    />
                  </div>
                  <h1 className="name">Hearthstone Deck</h1>
                </a>
              </div>
              <div className="btns">
                <Button outline onClick={() => this.createDeck()}>
                  <span>Create new desk</span>
                  <img
                    src={require('./images/new_file.svg')}
                    alt="Create new desk"
                    width="14"
                  />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="b-main">
          <div className="container">
            <article className="inner">
              <div className="title-area">
                <h2 className="title">Card</h2>
                <Dropdown
                  className="dd-filter"
                  title="Decks"
                  onSelected={item => this.filterCard(item)}
                />
              </div>

              <CardList className="content-area" />
            </article>
          </div>
        </main>
      </div>
    )
  }
}

export default App
