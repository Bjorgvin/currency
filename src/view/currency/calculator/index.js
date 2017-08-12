import { connect } from 'react-redux'
import Calculator from './Calculator'
// connect method will return a connected component
const ConnectedCalculator = connect(
  (state, props) => ({
    /* some property */
  }),
  {
    /* fetchCurrency */
  },
)(Calculator)

// now we export the connected component
export default ConnectedCalculator
