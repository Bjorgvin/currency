import { fork } from 'redux-saga/effects'
import currency from './currency/sagas'
import settings from './settings/sagas'

export default function*() {
  yield fork(currency)
  yield fork(settings)
}
