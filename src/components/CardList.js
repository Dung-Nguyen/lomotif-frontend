import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/card.action'
import InfiniteScroll from './InfiniteScroll'

const mapStateToProps = state => ({
  ...state,
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

const cardArr = [
  {
    dbf_id: '50371',
    name: 'Absolutely Mad!',
    player_class: 'Priest'
  },
  {
    dbf_id: '50378',
    name: 'Avenger',
    player_class: 'Neutral'
  }
]

/**
 * CardList Component
 * Using React.Component
 *
 * Renders a layout Card list
 */

class CardList extends Component {
  componentDidMount = () => {
    const { getCard } = this.props.actions
    getCard()
  }

  loadFunc = () => {
    console.log('Load more data here')
  }

  render() {
    return (
      <div className="card__list">
        <InfiniteScroll
          loadMore={() => this.loadFunc()}
          hasMore={true}
          isLoading={false}
        >
          <ul>
            {cardArr.map(item => (
              <li key={item.dbf_id} className="card">
                <div className="card-inner">
                  <p>{item.dbf_id}</p>
                  <p>{item.name}</p>
                  <p>{item.player_class}</p>
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
  cards: PropTypes.object.isRequired,
  /** Actions related to card's data from Api */
  actions: PropTypes.object.isRequired
}

CardList.defaultProps = { cards: {} }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
