import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import platform from './platform/reducers'

export default combineReducers({
  platform,
  form: formReducer, // redux-form reducer
})
