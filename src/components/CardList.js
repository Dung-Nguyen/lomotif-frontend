import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/card.action'
import * as helper from '../utils/helper'
import InfiniteScroll from './InfiniteScroll'
import Indicator from './Indicator'

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
 *
 * **NOTE**: Data load inside func componentWillReceiveProps()
 */

class CardList extends Component {
  componentWillReceiveProps = nextProps => {
    const { deck_id } = this.props.deck
    if (nextProps.deck.deck_id !== deck_id) {
      // Create other deck with deck_id from BE
      const { getCard } = this.props.actions
      const args = { deck_id: nextProps.deck.deck_id }
      getCard(args)
    }
  }

  loadFunc = () => {
    const { getCard } = this.props.actions
    const { payload } = this.props.card
    const { deck_id } = this.props.deck

    if (payload && payload.data) {
      const page = helper.getParameterByName('page', payload.data.next)
      const args = { page, deck_id }
      if (page) {
        getCard(args)
      }
    }
  }

  render() {
    const { className } = this.props
    const { items, payload } = this.props.card

    if (!payload) return null

    return (
      <div className={`card__list ${className ? className : ''}`}>
        <Indicator loading={payload.getCardPending} />
        <InfiniteScroll
          loadMore={() => this.loadFunc()}
          hasMore={payload.data ? payload.data.count > 0 : true}
        >
          <ul>
            {items.map(item => (
              <li key={item.dbfId}>
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
