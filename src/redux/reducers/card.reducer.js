import {
  GET_CARD_SUCCESS,
  GET_CARD_BEGIN,
  GET_CARD_ERROR,
  RESET_CARD_IN_DECK
} from '../constants'

const initialize = {
  items: [],
  payload: {
    data: {},
    getCardPending: false,
    getCardError: null
  }
}

const cardReducer = (state = initialize, action) => {
  const payload = action.payload

  switch (action.type) {
    case GET_CARD_BEGIN:
      return { ...state, payload }
    case GET_CARD_SUCCESS:
      return { ...state, payload, items: pushCard(payload.data.results) }
    case GET_CARD_ERROR:
      return { ...state, payload }
    case RESET_CARD_IN_DECK:
      initialize.items = []
      return { ...state, payload }
    default:
      return state
  }
}

/** Push Item to deck when load more */
export const pushCard = data => {
  data.forEach(item => {
    initialize.items.push(item)
  })

  return initialize.items
}

export default cardReducer
