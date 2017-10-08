import React, { Component } from 'react'
import Swipeable from 'react-swipeable'
import { slip } from '../constants'
import { CurrencyList, CurrencyListItem } from './components'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.onSwipedRight = this.onSwipedRight.bind(this)
  }

  componentWillMount() {
    const { fetchCurrency, fetchSettings } = this.props
    fetchCurrency()
    fetchSettings()
  }

  onSwipedRight() {
    this.props.history.push(slip)
  }

  render() {
    const { from, to, currency, saveSettings } = this.props
    if (!currency) return <div>loading</div>
    const fromList = currency.map(curr => (
      <CurrencyListItem
        role="button"
        key={curr.shortName}
        onClick={() => saveSettings({ from: curr.shortName, to })}
        selected={curr.shortName === from}
      >
        {curr.longName}
      </CurrencyListItem>
    ))
    const toList = currency.map(curr => (
      <CurrencyListItem
        key={curr.shortName}
        onClick={() => saveSettings({ from, to: curr.shortName })}
        selected={curr.shortName === to}
      >
        {curr.longName}
      </CurrencyListItem>
    ))
    return (
      <Swipeable onSwipedRight={this.onSwipedRight}>
        From: {from}
        <CurrencyList>{fromList}</CurrencyList>
        To: {to}
        <CurrencyList>{toList}</CurrencyList>
      </Swipeable>
    )
  }
}
export default Settings
