import React, { Component } from 'react'
import { TextPanel } from '../../components/containers.js'
import { HeaderText } from '../../components/texts.js'
import styled from 'styled-components'
const Line = styled.div`border-bottom: 1px solid;`
const LineBetween = styled.div`
  display: none;
  background-color: #648325;
`
class Slip extends Component {
  componentWillMount() {
    const { fetchCurrency } = this.props
    fetchCurrency()
  }
  lineClick(event, linenumber) {
    for (var i = linenumber + 1; i < linenumber + 5; i++) {
      const el = document.getElementById(`${i}`)
      el.style.display = el.style.display === 'block' ? 'none' : 'block'
    }
  }
  render() {
    const { currency, time, to, from } = this.props
    if (currency) {
      const f = currency.find(c => c.shortName === from)
      const t = currency.find(c => c.shortName === to)
      const ratio = f.value / t.value
      const list = []
      for (var k = 0; k < 5; k++) {
        const kn = k + 1
        list.push(
          <Line id={kn} key={kn}>
            {`${kn} ${f.shortName}`} ==={' '}
            {`${(ratio * kn).toLocaleString()} ${t.shortName}`}
          </Line>,
        )
      }
      for (var i = 10; i < 1000; i++) {
        if (i % 5 === 0) {
          const n = i
          list.push(
            <Line id={n} key={n} onClick={e => this.lineClick(e, n)}>
              {`${n} ${f.shortName}`} ==={' '}
              {`${(ratio * n).toLocaleString()} ${t.shortName}`}
              click me
            </Line>,
          )
          for (var j = 0; j < 4; j++) {
            const n = j + i + 1
            list.push(
              <LineBetween id={n} key={n}>
                {`${n} ${f.shortName}`} ==={' '}
                {`${(ratio * n).toLocaleString()} ${t.shortName}`}
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
