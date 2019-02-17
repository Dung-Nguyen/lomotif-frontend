import { combineReducers } from 'redux'
import cardReducer from './card.reducer'
import deckReducer from './deck.reducer'

export default combineReducers({
  cardReducer: cardReducer,
  deckReducer: deckReducer
})
