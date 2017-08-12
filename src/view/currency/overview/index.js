import { connect } from 'react-redux'
import { getCurrency, getLastTime } from '../../../platform/currency/reducer'
import { fetchCurrency } from '../../../platform/currency/actions'
import Overview from './Overview'
// connect method will return a connected component
const ConnectedOverview = connect(
  (state, props) => ({
    currency: getCurrency(state),
    time: getLastTime(state),
  }),
  { fetchCurrency },
)(Overview)

// now we export the connected component
export default ConnectedOverview
