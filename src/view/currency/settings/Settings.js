import React, { Component } from 'react'

class Settings extends Component {
  componentWillMount() {
    const { fetchCurrency, fetchSettings } = this.props
    fetchCurrency()
    fetchSettings()
  }
  render() {
    const { from, to, currency, saveSettings } = this.props
    if (!currency) return <div>loading</div>
    const fromList = currency.map(curr =>
      (<div key={curr.shortName}>
        <button onClick={() => saveSettings({ from: curr.shortName, to })}>
          {curr.longName}
        </button>
        {curr.shortName === from && <span>------</span>}
      </div>),
    )
    const toList = currency.map(curr =>
      (<div key={curr.shortName}>
        <button onClick={() => saveSettings({ from, to: curr.shortName })}>
          {curr.longName}
        </button>
        {curr.shortName === to && <span>------</span>}
      </div>),
    )
    return (
      <div>
        <div>
          From: {from}
        </div>
        {fromList}
        <div>
          To: {to}
        </div>
        {toList}
      </div>
    )
  }
}
export default Settings
