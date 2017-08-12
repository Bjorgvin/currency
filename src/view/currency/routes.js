import React from 'react'
import { Route } from 'react-router'

import Overview from './overview'

export const root = '/currency'

export default <Route key="overview" path={`${root}`} component={Overview} />
