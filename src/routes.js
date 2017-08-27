import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { darken } from 'polished'
import currency, { root } from './view/currency/routes'

export default function routes(history) {
  const Navigation = styled.nav`
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 9999;
    background-color: ${props => darken(0.3, props.theme.green)};
  `
  const StyledLink = styled(Link)`
    padding: 0px 0px 0px 15px;
    color: white;
    text-decoration: none;
  `
  return (
    <Router history={history}>
      <div>
        <Navigation>
          <StyledLink to={`${root}`}>Currency</StyledLink>
        </Navigation>
        <Switch>
          {currency}
          <Route component={() => <Redirect to={`${root}`} />} />
        </Switch>
      </div>
    </Router>
  )
}
