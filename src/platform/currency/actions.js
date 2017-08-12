const prefix = 'currency'

export const type = {
  fetchCurrency: `${prefix}/FETCH`,
  fetchCurrencyResolved: `${prefix}/FETCH_RESOLVED`,
}

export const fetchCurrency = () => ({
  type: type.fetchCurrency,
})

export const fetchCurrencyResolved = (time, currency) => ({
  type: type.fetchCurrencyResolved,
  payload: {
    time,
    currency,
  },
})
