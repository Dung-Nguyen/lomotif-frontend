import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/card.action'
import Loading from './Loading'

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

class CardList extends Component {
  componentDidMount = () => {
    const { getCard } = this.props.actions
    getCard()
  }

  render() {
    const { cards } = this.props
    if (cards.hasOwnProperty('payload') && cards.payload.getCardPending) {
      console.log('asdas')
      return <Loading />
    }

    return (
      <div className="card__list">
        <ul>
          {cardArr.map(item => (
            <li key={item.dbf_id}>
              <p>{item.dbf_id}</p>
              <p>{item.name}</p>
              <p>{item.player_class}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
CardList.propTypes = {
  cards: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
