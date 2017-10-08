import React from 'react'
/* eslint import/no-extraneous-dependencies: 0 */
import { Route } from 'react-router'
import styled from 'styled-components'
import Slip from './slip'
import Calculator from './calculator'
import Settings from './settings'
import { Footer, FooterButton } from './Footer'
import { calculator, slip, settings } from './constants'

const Content = styled.div`overflow: scroll;`

export default history => (
  <Content>
    <Route key="calc" path={calculator} component={Calculator} />
    <Route key="slip" path={slip} component={Slip} />
    <Route key="sett" path={settings} component={Settings} />
    <Footer>
      <FooterButton onClick={() => history.push(calculator)}>Calculator</FooterButton>
      <FooterButton onClick={() => history.push(slip)}>Slip</FooterButton>
      <FooterButton onClick={() => history.push(settings)}>Settings</FooterButton>
    </Footer>
  </Content>
)
