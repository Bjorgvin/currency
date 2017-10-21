import React, { Component } from 'react'
import { NumberPadContainer, NumberPadButton } from './components'

class NumberPad extends Component {
  render() {
    const { onClear, onDel, onNumber } = this.props
    const clearAction = onClear === undefined ? () => {} : onClear
    const deleteAction = onDel === undefined ? () => {} : onDel
    const numberAction = onNumber === undefined ? () => {} : onNumber
    const buttons = []
    for (let i = 1; i < 10; i += 1) {
      buttons.push(
        <NumberPadButton key={i} onClick={() => numberAction(i)}>
          {i}
        </NumberPadButton>,
      )
    }

    buttons.push(
      <NumberPadButton key="del" onClick={() => deleteAction()}>
        Del
      </NumberPadButton>,
    )
    buttons.push(
      <NumberPadButton key={0} onClick={() => numberAction(0)}>
        {0}
      </NumberPadButton>,
    )

    buttons.push(
      <NumberPadButton key="clear" onClick={() => clearAction()}>
        Clear
      </NumberPadButton>,
    )

    return <NumberPadContainer>{buttons}</NumberPadContainer>

    //    return   return <div>{buttons}</div>
  }
}
export default NumberPad
