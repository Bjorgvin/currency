/* global window, require */
/* eslint global-require: "error" */
import { put, fork, call, takeEvery, select } from 'redux-saga/effects'
import { getLocalStorageData, setLocalStorageData } from '../localstorage'
import { getCurrencyInformation } from './reducer'

import { fetchCurrencyResolved, type } from './actions'

const whatwgfetch = require('whatwg-fetch')

let fetch = window.fetch
if (!fetch) fetch = whatwgfetch

export function* onFetchCurrency() {
  const localData = yield call(getLocalStorageData, 'currency')
  if (localData) {
    localData.time = new Date(localData.time)
  }
  const stateCurrency = yield select(getCurrencyInformation)
  const currency = localData || stateCurrency
  let shouldFetch = false
  if (currency && currency.currency) {
    // got the list of currencies from either the state
    // or the local storage
    const hour = 1000 * 60 * 60
    const hourAgo = new Date().getTime() - hour
    const lastFetch = currency.time.getTime()
    if (hourAgo > lastFetch) {
      // more then an hour ago since last fetch so
      // we fetch new currency
      shouldFetch = true
    }
  } else {
    // no currency yet so we fetch
    shouldFetch = true
  }

  if (shouldFetch) {
    const resp = yield fetch('http://apis.is/currency/lb')
    const json = yield resp.json()
    const currencies = [
      {
        askValue: 1,
        bidValue: 1,
        changeCur: 0,
        changePer: 0,
        longName: 'Íslensk króna',
        shortName: 'ISK',
        value: 1,
      },
      ...json.results,
    ]
    yield put(fetchCurrencyResolved(new Date(), currencies))
  } else {
    // already have an up to date currency list
    yield put(fetchCurrencyResolved(currency.time, currency.currency))
  }
}
export function* onFetchCurrencyResolved(action) {
  yield call(setLocalStorageData, 'currency', action.payload)
}

export default function* () {
  yield fork(function* watchFetchCurrency() {
    yield takeEvery(type.fetchCurrency, onFetchCurrency)
  })
  yield fork(function* watchFetchCurrencyResolved() {
    yield takeEvery(type.fetchCurrencyResolved, onFetchCurrencyResolved)
  })
}
