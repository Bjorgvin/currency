import { connect } from 'react-redux'
import { getCurrency, getLastTime } from '../../../platform/currency/reducer'
import { fetchCurrency } from '../../../platform/currency/actions'
import Slip from './Slip'
// connect method will return a connected component
const ConnectedSlip = connect(
  (state, props) => ({
    currency: getCurrency(state),
    time: getLastTime(state),
  }),
  { fetchCurrency },
)(Slip)

// now we export the connected component
export default ConnectedSlip
