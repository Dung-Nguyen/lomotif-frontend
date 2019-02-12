import { combineReducers } from 'redux'
import cards from './card.reducer'

export default combineReducers({
  cards: cards
})
