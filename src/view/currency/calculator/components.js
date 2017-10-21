import styled from 'styled-components'
import React from 'react'

export const CalcContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: calc(100vh - 35px);
  background-color: yellow;
`

export const CalcScreen = styled.div`
  height: 10vh;
  background-color: red;
`

export const NumberPadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 200px;
`
const NumberPadButtonContent = props => <div {...props}>{props.children}</div>

const StyledNumberPadButtonContent = styled(NumberPadButtonContent)`
  flex-basis: auto;
  color: yellow;
`
export const NumberPadButton = styled(StyledNumberPadButtonContent)`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-basis: 33%;
  background-color: red;
  text-align: center;
`
