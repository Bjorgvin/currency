import { connect } from 'react-redux'
import Calculator from './Calculator'
import { fetchCurrency } from '../../../platform/currency/actions'
import { getCurrency } from '../../../platform/currency/reducer'

import { fetchSettings } from '../../../platform/settings/actions'
import { getFrom, getTo } from '../../../platform/settings/reducer'

// connect method will return a connected component
const ConnectedCalculator = connect(
  state => ({
    currency: getCurrency(state),
    to: getTo(state),
    from: getFrom(state),
  }),
  {
    fetchSettings,
    fetchCurrency,
  },
)(Calculator)

// now we export the connected component
export default ConnectedCalculator
