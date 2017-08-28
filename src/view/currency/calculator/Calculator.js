import React, { Component } from 'react'
import NumberPad from './NumberPad'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.numpadNumber = this.numpadNumber.bind(this)
    this.numpadDel = this.numpadDel.bind(this)
    this.numpadClear = this.numpadClear.bind(this)

    this.state = { number: 0 }
  }
  componentWillMount() {
    const { fetchCurrency, fetchSettings } = this.props
    fetchCurrency()
    fetchSettings()
  }

  numpadNumber(number) {
    const num = this.state.number
    if (this.state.number > 0) {
      const newNumber = Number(`${num}${number}`)
      this.setState({ number: newNumber })
    } else {
      this.setState({ number })
    }
  }

  numpadDel() {
    let newNumber = 0
    if (this.state.number > 9) {
      let num = `${this.state.number}`
      num = num.substring(0, num.length - 1)
      newNumber = Number(num)
    }

    this.setState({ number: newNumber })
  }

  numpadClear() {
    this.setState({ number: 0 })
  }

  render() {
    const { currency, to, from } = this.props
    const { number } = this.state
    if (currency) {
      const f = currency.find(c => c.shortName === from)
      const t = currency.find(c => c.shortName === to)
      const ratio = f.value / t.value
      return (
        <div>
          <div>
            {`${number} ${f.shortName}`}
            = {`${(ratio * number).toLocaleString()} ${t.shortName}`}
          </div>
          <NumberPad
            onClear={this.numpadClear}
            onDel={this.numpadDel}
            onNumber={this.numpadNumber}
          />
        </div>
      )
    }
    return <div>loading</div>
  }
}
export default Calculator
