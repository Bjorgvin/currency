import React, { Component } from 'react'
import styled from 'styled-components'

const NumpadButton = styled.div`border: 1px solid;`

class NumberPad extends Component {
  render() {
    const { onClear, onDel, onNumber } = this.props
    const clearAction = onClear === undefined ? () => {} : onClear
    const deleteAction = onDel === undefined ? () => {} : onDel
    const numberAction = onNumber === undefined ? () => {} : onNumber
    const buttons = []
    for (let i = 0; i < 10; i += 1) {
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
