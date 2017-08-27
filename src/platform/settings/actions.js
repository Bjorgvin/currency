const prefix = 'settings'

export const type = {
  fetchSettings: `${prefix}/FETCH`,
  fetchSettingsResolved: `${prefix}/FETCH_RESOLVED`,
  saveSettings: `${prefix}/SAVE`,
  saveSettingsResolved: `${prefix}/SAVE_RESOLVED`,
}

export const fetchSettings = () => ({
  type: type.fetchSettings,
})

export const fetchSettingsResolved = settings => ({
  type: type.fetchSettingsResolved,
  payload: settings,
})

export const saveSettings = settings => ({
  type: type.saveSettings,
  payload: settings,
})

export const saveSettingsResolved = settings => ({
  type: type.saveSettingsResolved,
  payload: settings,
})
