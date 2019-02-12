import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

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
  render() {
    return (
      <div className="card__list">
        <ul>
          {cardArr.map(item => (
            <li>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
