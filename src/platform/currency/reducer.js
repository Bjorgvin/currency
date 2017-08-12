import { type } from './actions'

const initialState = {
  currency: undefined,
  time: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.fetchCurrencyResolved:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const select = state => state.platform.currency

// selectors
export const getCurrency = state => select(state).currency
export const getLastTime = state => select(state).time
export const getCurrencyInformation = state => select(state).time
