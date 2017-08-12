import { put, fork, call, takeEvery, select } from 'redux-saga/effects'
let fetch = window.fetch
if (!fetch) fetch = require('whatwg-fetch')

import { getCurrencyInformation } from './reducer'

import { fetchCurrencyResolved, type } from './actions'

let local = getLocalStorageData()
function getLocalStorageData() {
  if (localStorage) {
    const storageCurrency = localStorage.getItem('currency')
    if (storageCurrency) {
      const data = JSON.parse(storageCurrency)
      data.time = new Date(data.time)
      return data
    }
  }
}

function setLocalStorageData(data) {
  if (localStorage) {
    localStorage.setItem('currency', JSON.stringify(data))
  }
}

export function* onFetchCurrency() {
  let stateCurrency = yield select(getCurrencyInformation)
  console.log(1)
  console.log(local)
  const currency = local || stateCurrency
  let shouldFetch = false
  if (currency) {
    console.log(2)
    // got the list of currencies from either the state
    // or the local storage
    var hourAgo = new Date().getTime() - 1000 * 60 * 60
    var lastFetch = currency.time.getTime()
    if (lastFetch > hourAgo) {
      // more then an hour ago since last fetch so
      // we fetch new currency
      shouldFetch = true
    }
  } else {
    console.log(3)
    // no currency yet so we fetch
    shouldFetch = true
  }
  if (shouldFetch) {
    console.log(4)

    const resp = yield fetch('http://apis.is/currency/lb')
    const json = yield resp.json()
    yield put(fetchCurrencyResolved(new Date(), json.results))
  } else {
    console.log(5)
    console.log(currency)
    // already have an up to date currency list
    yield put(fetchCurrencyResolved(currency))
  }
}
export function* onFetchCurrencyResolved(action) {
  yield call(setLocalStorageData, action.payload)
}

export default function*() {
  yield fork(function* watchFetchCurrency() {
    yield takeEvery(type.fetchCurrency, onFetchCurrency)
  })
  yield fork(function* watchFetchCurrencyResolved() {
    yield takeEvery(type.fetchCurrencyResolved, onFetchCurrencyResolved)
  })
}
