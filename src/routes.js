import React from 'react'
/* eslint import/no-extraneous-dependencies: 0 */
import { Router, Route, Redirect, Switch } from 'react-router'
import currency, { root } from './view/currency/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          {currency}
          <Route component={() => <Redirect to={`${root}`} />} />
        </Switch>
      </div>
    </Router>
  )
}
