import React, { Component } from 'react'
import styled from 'styled-components'

const NumpadButton = styled.div`border: 1px solid;`

class NumberPad extends Component {
  render() {
    const { onClear, onDel, onNumber } = this.props
    const clearAction = onClear === undefined ? () => {} : onClear
    const deleteAction = onDel === undefined ? () => {} : onDel
    const numberAction = onNumber === undefined ? () => {} : onNumber
    const buttons = {}
    for (let i = 1; i < 10; i += 1) {
      buttons[`${i}`] = (
        <NumpadButton key={i} onClick={() => numberAction(i)}>
          {i}
        </NumpadButton>
      )
    }

    buttons.del = (
      <NumpadButton key="del" onClick={() => deleteAction()}>
        Del
      </NumpadButton>
    )
    buttons[`${0}`] = (
      <NumpadButton key={0} onClick={() => numberAction(0)}>
        {0}
      </NumpadButton>
    )

    buttons.clear = (
      <NumpadButton key="clear" onClick={() => clearAction()}>
        Clear
      </NumpadButton>
    )

    return (
      <table>
        <tr>
          <td>{buttons[1]}</td>
          <td>{buttons[2]}</td>
          <td>{buttons[3]}</td>
        </tr>
        <tr>
          <td>{buttons[4]}</td>
          <td>{buttons[5]}</td>
          <td>{buttons[6]}</td>
        </tr>
        <tr>
          <td>{buttons[7]}</td>
          <td>{buttons[8]}</td>
          <td>{buttons[9]}</td>
        </tr>
        <tr>
          <td>{buttons.del}</td>
          <td>{buttons[0]}</td>
          <td>{buttons.clear}</td>
        </tr>
      </table>
    )

    //    return   return <div>{buttons}</div>
  }
}
export default NumberPad
