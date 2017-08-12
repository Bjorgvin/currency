import { fork } from 'redux-saga/effects'
import currency from './currency/sagas'

export default function*() {
  yield fork(currency)
}
