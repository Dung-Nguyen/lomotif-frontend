import { INIT_DECK_SUCCESS, INIT_DECK_ERROR } from '../constants'
import Api from '../../config/api'

export const initDeck = () => {
  const url = 'init'
  return dispatch => {
    return Api.get(url)
      .then(res => {
        dispatch(initDeckSuccess(res.data))
      })
      .catch(err => {
        dispatch(initDeckError(err.message))
        throw err
      })
  }
}

const initDeckSuccess = data => ({
  type: INIT_DECK_SUCCESS,
  payload: { data, initDeckError: null }
})

const initDeckError = err => ({
  type: INIT_DECK_ERROR,
  payload: { initDeckError: err }
})
