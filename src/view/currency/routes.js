import React from 'react'
import { Route } from 'react-router'
import Slip from './slip'
import Calculator from './calculator'
import Settings from './settings'
import { Footer, FooterButton } from './components'
import { calculator, slip, settings } from './constants'

export const rootPath = slip
export const getRoutes = () => [
  <Route key="calc" path={calculator} component={Calculator} />,
  <Route key="slip" path={slip} component={Slip} />,
  <Route key="sett" path={settings} component={Settings} />,
]
export const getFooter = history => (
  <Footer>
    <FooterButton onClick={() => history.push(calculator)}>Calculator</FooterButton>
    <FooterButton onClick={() => history.push(slip)}>Slip</FooterButton>
    <FooterButton onClick={() => history.push(settings)}>Settings</FooterButton>
  </Footer>
)
