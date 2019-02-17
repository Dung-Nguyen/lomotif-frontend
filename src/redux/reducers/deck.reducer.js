import { INIT_DECK_SUCCESS, INIT_DECK_ERROR } from '../constants'

const initialize = {
  deck_id: ''
}

const deckReducer = (state = initialize, action) => {
  const payload = action.payload

  switch (action.type) {
    case INIT_DECK_SUCCESS:
      return { ...state, deck_id: payload.data }
    case INIT_DECK_ERROR:
      return { ...state, payload }
    default:
      return state
  }
}

export default deckReducer
