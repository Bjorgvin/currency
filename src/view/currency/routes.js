import React from 'react'
/* eslint import/no-extraneous-dependencies: 0 */
import { Route } from 'react-router'

import Swiper from './SwipeComponent'

export const root = '/currency'
export default <Route key="slip" path={`${root}`} component={Swiper} />
