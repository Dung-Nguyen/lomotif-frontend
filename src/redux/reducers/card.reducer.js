import { FETCH_CARD } from '../constants'

const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARD:
      return [...state, action.payload]
    default:
      return state
  }
}

export default postReducer
