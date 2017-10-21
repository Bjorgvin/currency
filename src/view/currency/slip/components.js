import styled from 'styled-components'

export const Line = styled.div`
  border-bottom: 1px solid;
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
`

export const LineBetween = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #648325;
`
