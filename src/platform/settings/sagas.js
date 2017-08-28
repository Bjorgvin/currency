import { put, fork, call, takeEvery } from 'redux-saga/effects'

import { getLocalStorageData, setLocalStorageData } from '../localstorage'

import { fetchSettingsResolved, saveSettingsResolved, type } from './actions'

const defaultSettings = { from: 'ISK', to: 'USD' }

export function* onFetchSettings() {
  const settings = yield call(getLocalStorageData, 'settings')
  yield put(fetchSettingsResolved(settings || defaultSettings))
}

export function* onSaveSettings(action) {
  yield call(setLocalStorageData, 'settings', action.payload)
  yield put(saveSettingsResolved(action.payload))
}

export default function* () {
  yield fork(function* watchFetchSettings() {
    yield takeEvery(type.fetchSettings, onFetchSettings)
  })
  yield fork(function* watchSaveSettings() {
    yield takeEvery(type.saveSettings, onSaveSettings)
  })
}
