import React, { Component } from 'react'
import { TextPanel } from '../../components/containers.js'
import { HeaderText } from '../../components/texts.js'

class Overview extends Component {
  componentWillMount() {
    const { fetchCurrency } = this.props
    fetchCurrency()
  }

  render() {
    const { currency, time } = this.props
    if (currency) {
      return (
        <div>
          <span>
            Currency last updated: {`${time}`}
          </span>
          <div>
            {currency.length}
          </div>
        </div>
      )
    } else {
      return (
        <TextPanel>
          <HeaderText>loading currency</HeaderText>
        </TextPanel>
      )
    }
  }
}
export default Overview
