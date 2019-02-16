import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/card.action';
import CardList from './components/CardList';
import Button from './components/Button';
import Dropdown from './components/Dropdown';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

class App extends Component {
  render() {
    console.log(this.props);
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
                <Button outline>
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
                <Dropdown className="dd-filter" title="Decks" />
              </div>

              <CardList className="content-area" />
            </article>
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
