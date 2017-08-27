import { type } from './actions'

const initialState = {
  from: 'ISK',
  to: 'USD',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.fetchSettingsResolved:
      return { ...state, ...action.payload }
    case type.saveSettings:
      return { ...state, saving: true }
    case type.saveSettingsResolved:
      return { ...state, ...action.payload, saving: false }
    default:
      return state
  }
}

const select = state => state.platform.settings

// selectors
export const getFrom = state => select(state).from
export const getTo = state => select(state).to
export const getSettings = state => select(state)
