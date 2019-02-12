import { GET_CARD_SUCCESS, GET_CARD_BEGIN, GET_CARD_ERROR } from '../constants'

const postReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case GET_CARD_BEGIN:
      return { ...state, payload }
    case GET_CARD_SUCCESS:
      return { ...state, payload }
    case GET_CARD_ERROR:
      return { ...state, payload }
    default:
      return state
  }
}

export default postReducer
