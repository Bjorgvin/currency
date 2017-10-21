import React from 'react'
/* eslint import/no-extraneous-dependencies: 0 */
import { Router, Route, Redirect, Switch } from 'react-router'
import { getRoutes, getFooter, rootPath } from './view/currency/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          {getRoutes()}
          <Route component={() => <Redirect to={`${rootPath}`} />} />
        </Switch>
        {getFooter(history)}
      </div>
    </Router>
  )
}
