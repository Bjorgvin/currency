import React, { Component } from 'react'
import { TextPanel } from '../../components/containers.js'
import { HeaderText } from '../../components/texts.js'

class Slip extends Component {
  componentWillMount() {
    const { fetchCurrency } = this.props
    fetchCurrency()
  }

  render() {
    const { currency, time } = this.props
    if (currency) {
      console.log(currency)
      const list = currency.map(curr => {
        return (
          <div key={curr.shortName}>
            {curr.longName}
          </div>
        )
      })
      return (
        <div>
          <span>
            Currency last updated: {`${time}`}
          </span>
          <div>
            {list}
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
export default Slip
