import { connect } from 'react-redux'
import Settings from './Settings'
// connect method will return a connected component
const ConnectedSettings = connect(
  (state, props) => ({
    /* some property */
  }),
  {
    /* fetchCurrency */
  },
)(Settings)

// now we export the connected component
export default ConnectedSettings
