import styled from 'styled-components'

export const CurrencyList = styled.ul`list-style-type: none;`
export const CurrencyListItem = styled.li`
  ${props =>
    props.selected &&
    `background: blue;
      color: white;`};
`
