import {
  GET_CARD_BEGIN,
  GET_CARD_SUCCESS,
  GET_CARD_ERROR,
  RESET_CARD_IN_DECK
} from '../constants'
import Api from '../../config/api'

export const resetCardInDeck = () => {
  return dispatch => {
    return dispatch({ type: RESET_CARD_IN_DECK })
  }
}

export const getCard = args => {
  let url = `/playerclass/getDeckCards/?deck_id=${args.deck_id}`

  if (args.playerClass) {
    // filter card here
    url += `&playerClass=${args.playerClass}`
  } else {
    if (args.page) {
      // load more card here
      url += `&page=${args.page}`
    }
  }

  return dispatch => {
    dispatch(getCardBegin())

    return Api.get(url)
      .then(res => {
        dispatch(getCardSuccess(res.data))
      })
      .catch(err => {
        dispatch(getCardError(err.message))
        throw err
      })
  }
}

export const getCardBegin = () => ({
  type: GET_CARD_BEGIN,
  payload: { getCardPending: true, getCardErr: null }
})

export const getCardSuccess = data => ({
  type: GET_CARD_SUCCESS,
  payload: { data, getCardPending: false, getCardErr: null }
})

export const getCardError = err => ({
  type: GET_CARD_ERROR,
  payload: { getCardErr: err, getCardPending: false }
})
