import { FETCH_CARD } from '../constants'

export const fetchCard = cards => ({
  type: FETCH_CARD,
  payload: cards
})
