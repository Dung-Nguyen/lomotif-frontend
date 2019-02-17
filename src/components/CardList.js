import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/card.action'
import * as helper from '../utils/helper'
import InfiniteScroll from './InfiniteScroll'

const mapStateToProps = state => ({
  ...state,
  deck: state.deckReducer,
  card: state.cardReducer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

/**
 * CardList Component
 * Using React.Component
 *
 * Renders a layout Card list
 */

class CardList extends Component {
  state = {
    hasMore: false
  }

  componentWillReceiveProps = nextProps => {
    const { deck_id } = this.props.deck
    if (nextProps.deck.deck_id !== deck_id) {
      // Create other deck
      const { getCard } = this.props.actions
      const args = { deck_id: nextProps.deck.deck_id }
      getCard(args)
    }
  }

  loadFunc = () => {
    const { getCard } = this.props.actions
    const { payload } = this.props.card
    const { deck_id } = this.props.deck

    if (payload.data) {
      const page = helper.getParameterByName('page', payload.data.next)
      const args = { page, deck_id }
      if (page) {
        getCard(args)
      } else {
        this.setState({ hasMore: false })
      }
    }
  }

  render() {
    const { className } = this.props
    const { items } = this.props.card

    return (
      <div className={`card__list ${className ? className : ''}`}>
        <InfiniteScroll
          loadMore={() => this.loadFunc()}
          hasMore={true}
          isLoading={false}
        >
          <ul>
            {items.map(item => (
              <li key={item.dbf_id}>
                <div className="card">
                  <div className="card-container">
                    <div className="card-header">
                      <div className="title">{item.playerClass}</div>
                    </div>
                    <div className="card-inner">
                      <p>{item.name}</p>
                    </div>
                    <div className="card-bottom">
                      <div className="f-left">{item.dbfId}</div>
                      <div className="f-right">Lomotif</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

CardList.propTypes = {
  /** Object response from Api to load on Card list */
  card: PropTypes.object.isRequired,
  /** Actions related to card's data from Api */
  actions: PropTypes.object.isRequired,
  /** Add custom class for Card list */
  className: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
