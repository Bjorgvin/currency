import React, { Component } from 'react'
import { TextPanel } from '../../components/containers.js'
import { HeaderText } from '../../components/texts.js'

class Slip extends Component {
  componentWillMount() {
    const { fetchCurrency } = this.props
    fetchCurrency()
  }

  render() {
    const { currency, time, to, from } = this.props
    if (currency) {
      console.log(`from ${from}`)
      console.log(`  to ${to}`)
      console.log(currency)
      const f = currency.find(c => c.shortName === from)
      const t = currency.find(c => c.shortName === to)
      const ratio = f.value / t.value
      const list = []
      for (var i = 1; i < 101; i++) {
        list.push(
          <div key={i}>
            {`${i} ${f.shortName}`} ==={' '}
            {`${(ratio * i).toLocaleString()} ${t.shortName}`}
          </div>,
        )
      }

      return (
        <div>
          <span>
            Currency last updated: {`${time.toLocaleDateString()}`}
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
