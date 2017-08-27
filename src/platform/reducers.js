import { combineReducers } from 'redux'
import currency from './currency/reducer'
import settings from './settings/reducer'

export default combineReducers({
  currency,
  settings,
})
