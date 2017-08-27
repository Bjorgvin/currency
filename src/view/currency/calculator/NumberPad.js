import React, { Component } from 'react'
import styled from 'styled-components'
const NumpadButton = styled.div`border: 1px solid;`

class NumberPad extends Component {
  render() {
    const { onClear, onDel, onNumber } = this.props
    const clearAction = onClear ? onClear : () => {}
    const deleteAction = onDel ? onDel : () => {}
    const numberAction = onNumber ? onNumber : () => {}
    const buttons = []
    for (var i = 0; i < 10; i++) {
      const number = i
      buttons.push(
        <NumpadButton key={number} onClick={() => numberAction(number)}>
          {number}
        </NumpadButton>,
      )
    }
    buttons.push(
      <NumpadButton key="del" onClick={() => deleteAction()}>
        Del
      </NumpadButton>,
    )
    buttons.push(
      <NumpadButton key="clear" onClick={() => clearAction()}>
        Clear
      </NumpadButton>,
    )
    return (
      <div>
        {buttons}
      </div>
    )
  }
}
export default NumberPad
