import { connect } from 'react-redux'
import { fetchCurrency } from '../../../platform/currency/actions'
import { getCurrency } from '../../../platform/currency/reducer'

import { fetchSettings, saveSettings } from '../../../platform/settings/actions'
import { getFrom, getTo } from '../../../platform/settings/reducer'

import Settings from './Settings'
// connect method will return a connected component
const ConnectedSettings = connect(
  (state, props) => ({
    to: getTo(state),
    from: getFrom(state),
    currency: getCurrency(state),
  }),
  {
    fetchSettings,
    saveSettings,
    fetchCurrency,
  },
)(Settings)

// now we export the connected component
export default ConnectedSettings
