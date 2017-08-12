import React from 'react'
import { Route } from 'react-router'

import Swiper from './SwipeComponent'
export const root = '/currency'
export default <Route key="slip" path={`${root}`} component={Swiper} />
