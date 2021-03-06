import React, { Component } from 'react'
import styled from 'styled-components'

const Line = styled.div`border-bottom: 1px solid;`
const LineBetween = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #648325;
`

class Slip extends Component {
  constructor(props) {
    super(props)
    const visible = new Array(1000).fill(true)
    for (let i = 0; i < 1000; i += 1) {
      if (i > 5 && i % 5 !== 0) {
        visible[i] = false
      }
    }
    this.state = { visible }
  }

  componentWillMount() {
    const { fetchCurrency } = this.props
    fetchCurrency()
  }

  lineClick(event, linenumber) {
    const visible = this.state.visible
    for (let i = linenumber + 1; i < linenumber + 5; i += 1) {
      visible[i] = !visible[i]
    }
    this.setState(visible)
  }

  render() {
    const { currency, time, to, from } = this.props
    const { visible } = this.state
    if (currency) {
      const f = currency.find(c => c.shortName === from)
      const t = currency.find(c => c.shortName === to)
      const ratio = f.value / t.value
      const list = []
      for (let k = 0; k < 4; k += 1) {
        const knum = k + 1
        list.push(
          <Line id={knum} key={knum}>
            {`${knum} ${f.shortName}`} === {`${(ratio * knum).toLocaleString()} ${t.shortName}`}
          </Line>,
        )
      }
      for (let i = 5; i < 1000; i += 1) {
        if (i % 5 === 0) {
          const inum = i
          list.push(
            <Line id={inum} key={inum} onClick={e => this.lineClick(e, inum)}>
              {`${inum} ${f.shortName}`} === {`${(ratio * inum).toLocaleString()} ${t.shortName}`}
              click me
            </Line>,
          )
          for (let j = 0; j < 4; j += 1) {
            const jnum = j + i + 1
            list.push(
              <LineBetween id={jnum} key={jnum} visible={visible[jnum]}>
                {`${jnum} ${f.shortName}`} === {`${(ratio * jnum).toLocaleString()} ${t.shortName}`}
              </LineBetween>,
            )
          }
        }
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
    }
    return <div>loading currency</div>
  }
}
export default Slip
