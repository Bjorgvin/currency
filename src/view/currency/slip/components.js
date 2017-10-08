import styled from 'styled-components'

export const LineBetween = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #648325;
`
export const Line = styled.div`border-bottom: 1px solid;`
