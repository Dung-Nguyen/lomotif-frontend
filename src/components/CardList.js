import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/card.action';
import InfiniteScroll from './InfiniteScroll';

const mapStateToProps = state => ({
  ...state,
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

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
  },
  {
    dbf_id: '500',
    name: 'Avenger',
    player_class: 'Warlock'
  },
  {
    dbf_id: '501',
    name: 'Absolutely Mad!',
    player_class: 'Druid'
  },
  {
    dbf_id: '502',
    name: 'Avenger',
    player_class: 'Hunter'
  },
  {
    dbf_id: '503',
    name: "Rastakhan's Rumble",
    player_class: 'Mage'
  },
  {
    dbf_id: '504',
    name: 'Avenger',
    player_class: 'Paladin'
  },
  {
    dbf_id: '505',
    name: 'Avenger',
    player_class: 'Priest'
  },
  {
    dbf_id: '506',
    name: 'Avenger',
    player_class: 'Rogue'
  },
  {
    dbf_id: '507',
    name: 'Avenger',
    player_class: 'Shaman'
  }
];

/**
 * CardList Component
 * Using React.Component
 *
 * Renders a layout Card list
 */

class CardList extends Component {
  componentDidMount = () => {
    const { getCard } = this.props.actions;
    getCard();
  };

  loadFunc = () => {
    console.log('Load more data here');
  };

  render() {
    const { className } = this.props;
    return (
      <div className={`card__list ${className ? className : ''}`}>
        <InfiniteScroll
          loadMore={() => this.loadFunc()}
          hasMore={true}
          isLoading={false}
        >
          <ul>
            {cardArr.map((item, index) => (
              <li key={item.dbf_id}>
                <div className="card">
                  <div className="card-container">
                    <div className="card-header">
                      <div className="title">{item.player_class}</div>
                    </div>
                    <div className="card-inner">
                      <p>{item.name}</p>
                    </div>
                    <div className="card-bottom">
                      <div className="f-left">{item.dbf_id}</div>
                      <div className="f-right">Lomotif</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <div className="card card-0">
                <div className="card-container">
                  <div className="card-header">
                    <div className="title">Neutral</div>
                  </div>
                  <div className="card-inner">
                    <p>Avenger</p>
                  </div>
                  <div className="card-bottom">
                    <div className="f-left">900</div>
                    <div className="f-right">Lomotif</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card card-1">
                <div className="border border--left border--top" />
                <div className="border border--right border--top" />
                <div className="card-container">
                  <div className="card-header">
                    <div className="title">Neutral</div>
                  </div>
                  <div className="card-inner">
                    <p>Avenger</p>
                  </div>
                  <div className="card-bottom">
                    <div className="f-left">900</div>
                    <div className="f-right">Lomotif</div>
                  </div>
                </div>
                <div className="border border--left border--bottom" />
                <div className="border border--right border--bottom" />
              </div>
            </li>
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

CardList.propTypes = {
  /** Object response from Api to load on Card list */
  cards: PropTypes.object.isRequired,
  /** Actions related to card's data from Api */
  actions: PropTypes.object.isRequired,
  /** ClassName */
  className: PropTypes.string
};

CardList.defaultProps = { cards: {} };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
