export function getLocalStorageData(name) {
  if (localStorage) {
    const data = localStorage.getItem(name)
    if (data) {
      return JSON.parse(data)
    }
    return null
  }
}

export function setLocalStorageData(name, data) {
  if (data) {
    if (localStorage) {
      localStorage.setItem(name, JSON.stringify(data))
    }
  }
}
