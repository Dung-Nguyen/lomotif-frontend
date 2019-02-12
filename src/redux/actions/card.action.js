import { GET_CARD_BEGIN, GET_CARD_SUCCESS, GET_CARD_ERROR } from '../constants'
import Api from '../../config/api'

export const getCard = () => {
  const url = 'URL_GET_CARD'

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
