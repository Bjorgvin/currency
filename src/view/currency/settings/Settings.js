import React, { Component } from 'react'
import Swipeable from 'react-swipeable'
import { slip } from '../constants'

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
      <div key={curr.shortName}>
        <button onClick={() => saveSettings({ from: curr.shortName, to })}>{curr.longName}</button>
        {curr.shortName === from && <span>------</span>}
      </div>
    ))
    const toList = currency.map(curr => (
      <div key={curr.shortName}>
        <button onClick={() => saveSettings({ from, to: curr.shortName })}>{curr.longName}</button>
        {curr.shortName === to && <span>------</span>}
      </div>
    ))
    return (
      <Swipeable onSwipedRight={this.onSwipedRight}>
        <div>From: {from}</div>
        {fromList}
        <div>To: {to}</div>
        {toList}
      </Swipeable>
    )
  }
}
export default Settings
